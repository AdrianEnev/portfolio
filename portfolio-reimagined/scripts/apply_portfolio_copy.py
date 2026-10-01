"""Render audited copy into this standalone portfolio, preserving existing markup and interactions."""
from pathlib import Path
from html import escape
import json
import re

ROOT = Path(__file__).resolve().parents[1]
if ROOT.name != 'portfolio-reimagined':
    raise SystemExit('This copy renderer only operates in portfolio-reimagined.')
DATA = json.loads((ROOT / 'portfolio-copy.json').read_text())
PROJECTS = DATA['projects']
GLOBAL = DATA['global_copy']
BUSINESS = [p for p in PROJECTS if p['kind'] == 'business']
LEGACY = [p for p in PROJECTS if p['kind'] == 'legacy']
STUDY = next(p for p in PROJECTS if p['kind'] == 'study')
DIST = ROOT / 'dist'

def sections(p):
    return [
        ('Company' if p['kind'] == 'business' else 'Product / Context', p['intro']),
        ('Market / Customer', p['customer']),
        ('Problem', p['problem']),
        ('Product / Service', p['offer'] + ' ' + p['model']),
        ('Business Goal' if p['kind'] == 'business' else 'Product Goal', p['goal']),
        ('My Role', p['role'] + '.'),
        ('Work', p['work']),
        ('Solution', p['solution']),
        ('Outcome', p['outcome']),
    ]

def case_body(p):
    content = ''.join(f'<section><h3>{escape(title)}</h3><p>{escape(body)}</p></section>' for title, body in sections(p))
    return f'<div class="case-study-body">{content}<p class="case-study-scope"><strong>Scope:</strong> {escape(p["scope"])}</p></div>'

def case_details(p):
    return f'<details class="case-study" id="case-{p["id"]}"><summary>Read case study<span aria-hidden="true">+</span></summary>{case_body(p)}</details>'

def replace_once(s, old, new):
    if old in s:
        return s.replace(old, new)
    if new not in s:
        raise ValueError('Copy target not found: ' + old[:100])
    return s

def sub_once(pattern, replacement, s):
    out, count = re.subn(pattern, replacement, s, count=1, flags=re.S)
    if count != 1:
        raise ValueError('Expected one copy target: ' + pattern)
    return out

def metadata(s, title, description):
    s = sub_once(r'<title>.*?</title>', '<title>' + escape(title) + '</title>', s)
    return sub_once(r'<meta name="description" content="[^"]*"\s*/?>', '<meta name="description" content="' + escape(description, quote=True) + '" />', s)

def shared(s):
    s = s.replace('<small>Full-stack developer</small>', '<small>Full-Stack Developer</small>')
    s = s.replace('>UI</a>', '>Design</a>').replace('>Lab</a>', '>Systems</a>')
    s = s.replace("Let's talk <span aria-hidden=\"true\">↗</span>", 'Discuss a project')
    if '/case-studies.css' not in s:
        s = s.replace('<script defer src="/app.js"></script>', '<link rel="stylesheet" href="/case-studies.css?v=20260930" />\n    <script defer src="/app.js"></script>')
    s = s.replace('src="/app.js"', 'src="/app.js?v=copy-20260930"')
    return s

def catalog_cards(s):
    matches = list(re.finditer(r'<article class="concept-card" id="([^"]+)">.*?</article>', s, re.S))
    if len(matches) != len(BUSINESS) or {m.group(1) for m in matches} != {p['id'] for p in BUSINESS}:
        raise ValueError('Catalog must contain exactly one card for each business project.')
    return matches

catalog_source = (DIST / 'projects.html').read_text()
catalog_blocks = {m.group(1): m.group(0) for m in catalog_cards(catalog_source)}

def featured_card(p):
    # Reuse the authored catalog artwork and focus labels when featured projects change.
    block = catalog_blocks[p['id']]
    preview = re.search(r'<div class="project-preview preview-' + re.escape(p['id']) + r'" aria-hidden="true">.*?</div>', block, re.S)
    focus = re.search(r'<div class="concept-card-bottom">(.*?)</div>', block, re.S)
    if not preview or not focus:
        raise ValueError('Missing featured artwork or focus labels: ' + p['id'])
    visual = preview.group(0).replace('class="project-preview ', 'class="project-visual project-preview ', 1)
    labels = ' <i>·</i> '.join(re.findall(r'<span>(.*?)</span>', focus.group(1), re.S))
    return f'''<a class="project-card project-{p['id']}" href="/projects.html#{p['id']}" aria-label="Read the {escape(p['name'], quote=True)} case study">
              {visual}
              <div class="project-detail"><span class="project-meta">{escape(p['category'].upper())}</span><h3>{escape(p['name'])} <span aria-hidden="true">↗</span></h3><p>{escape(p['card'])}</p><span class="project-role">My role: {escape(p['role'])}</span><span class="project-focus">{labels}</span></div>
            </a>'''

# Project source order controls both the first three featured cards and the catalog.
home = shared(metadata((DIST / 'index.html').read_text(), GLOBAL['title'], GLOBAL['description']))
home = sub_once(r'<p class="hero-intro">.*?</p>', '<p class="hero-intro">' + escape(GLOBAL['hero']) + '</p>', home)
home = home.replace('FULL-STACK APPLICATIONS & ALGORITHMS', 'WEBSITES / APPLICATIONS / TECHNICAL SYSTEMS')
home = home.replace('APPLICATIONS / ALGORITHMS / EXPERIMENTS', 'DESIGN / DEVELOPMENT / RESEARCH')
home = home.replace('Explore the work <span aria-hidden="true">↘</span>', 'View case studies')
home = home.replace('CURRENT PROJECTS', 'BUSINESS WEBSITE WORK')
home = sub_once(r'<h2 id="work-title">.*?</h2>', '<h2 id="work-title">Business websites.<br /><em>Clear customer journeys.</em></h2>', home)
home = replace_once(home, 'Business-focused website projects, each shaped around the people who use it. Explore the products and workflows as they take shape.', GLOBAL['work_intro'])
if 'class="collection-scope"' not in home:
    home = home.replace(escape(GLOBAL['work_intro']) + '</p>', escape(GLOBAL['work_intro']) + '</p><p class="collection-scope">' + escape(GLOBAL['work_scope']) + '</p>')
home = sub_once(
    r'(<div class="featured-work">\s*).*?(\s*</div>\s*<a class="work-view-all")',
    lambda m: m.group(1) + '\n            '.join(featured_card(p) for p in BUSINESS[:3]) + m.group(2),
    home,
)
home = home.replace('Explore current projects', 'Explore all ten case studies').replace('VIEW PROJECTS', 'VIEW CASE STUDIES')
home = replace_once(home, 'Useful first, memorable by design. I shape each interface around its purpose, then look for the typography, rhythm, and interaction that give it a character of its own.', GLOBAL['ui_intro'])
home = home.replace('AN ORIGINAL CONCEPT, NOT A CLIENT PROJECT', 'INDEPENDENT INTERFACE STUDY')
home = replace_once(home, 'A small study in how clarity and character can work together.', STUDY['card'])
home = replace_once(home, 'Typography sets the tone before a single button is pressed.', GLOBAL['ui_modes']['type'])
if 'id="case-interface-study"' not in home:
    home = home.replace('<section class="lab-section"', '<div class="section-shell interface-case-study">' + case_details(STUDY) + '</div>\n      <section class="lab-section"', 1)
home = home.replace('EXPERIMENTS & EARLIER WORK', 'APPLICATIONS & TECHNICAL SYSTEMS')
home = sub_once(r'<h2 id="lab-title">.*?</h2>', '<h2 id="lab-title">Applications, systems<br /><em>and research.</em></h2>', home)
home = replace_once(home, 'Smaller projects are where I try new tools, follow a question, or learn a different way to build.', GLOBAL['lab_intro'])
for i, p in enumerate(LEGACY, 1):
    pattern = r'(<details class="lab-item"[^>]*>\s*<summary><span class="lab-number">0' + str(i) + r'</span>).*?</details>'
    old_block = re.search(pattern, home, re.S)
    if not old_block: raise ValueError('Missing legacy item ' + p['id'])
    old_link = re.search(r'<a href="[^"]*"[^>]*>.*?</a>', old_block.group(0), re.S)
    link = old_link.group(0).replace('Explore repository ↗', 'View source code') if old_link else ''
    block = f'<details class="lab-item" id="{p["id"]}"><summary><span class="lab-number">0{i}</span><span class="lab-title">{escape(p["name"])}</span><span class="lab-type">{escape(p["category"].upper())}</span><span class="lab-toggle" aria-hidden="true">+</span></summary><div class="lab-body"><div class="legacy-case"><p class="project-role">My role: {escape(p["role"])}</p>{case_body(p)}{link}</div></div></details>'
    home = sub_once(pattern, block, home)
home = replace_once(home, 'I’m Adrian Enev, a full-stack developer based between Dobrich and Varna, Bulgaria. I design and ship end-to-end products, from client platforms to focused side projects.', GLOBAL['about'])
home = replace_once(home, 'I’m studying at Nikola Vaptsarov Naval Academy in Varna. I enjoy the whole process of software development, from interface design to backend architecture and algorithms. I also explore quantitative trading as a way to test that systems thinking.', GLOBAL['about_second'])
home = home.replace('High school in Dobrich, national IT and English competitions, and an early focus on algorithms and problem solving.', 'Early programming, algorithms and problem-solving foundations in Dobrich, followed by competition participation.')
home = home.replace('Building client platforms, exploring backend systems, and working through algorithmic problems.', 'Building web and mobile applications, developing backend systems and working through algorithmic problems.')
home = home.replace('Studying at Nikola Vaptsarov Naval Academy while continuing client and independent development.', 'Studying at Nikola Vaptsarov Naval Academy while continuing independent development and research.')
home = home.replace('Continuing to build production web applications and client projects.', 'Continuing web application development and independent product work.')
home = sub_once(r'<h2 id="contact-title">.*?</h2>', '<h2 id="contact-title">Discuss<br /><em>a project.</em></h2>', home)
if 'class="contact-brief"' not in home:
    home = home.replace('<a class="email-link"', '<p class="contact-brief">' + escape(GLOBAL['contact']) + '</p>\n          <a class="email-link"', 1)
(DIST / 'index.html').write_text(home)

catalog = shared(metadata(catalog_source, 'Business Website Case Studies | Adrian Enev', 'Ten business website case studies covering customers, product journeys, visual identity and delivered frontend work by Adrian Enev.'))
catalog = catalog.replace('Skip to projects', 'Skip to case studies').replace('CURRENT WEBSITE WORK', 'BUSINESS WEBSITE CASE STUDIES')
catalog = sub_once(r'<h1 id="projects-title">.*?</h1>', '<h1 id="projects-title">Businesses with<br /><em>a clear digital purpose.</em></h1>', catalog)
catalog = replace_once(catalog, 'A growing collection of independent website builds. Each one pairs a distinct identity with useful tools for the people it serves.', GLOBAL['catalog_intro'])
catalog = catalog.replace('← Back to selected projects', 'Back to selected work').replace('PROJECTS IN FOCUS', 'COMPANY / CUSTOMER / MY WORK').replace('EXPLORE THE WEBSITES', 'READ THE CASE STUDIES')
if 'class="collection-scope"' not in catalog:
    catalog = catalog.replace('<div class="concept-grid">', '<p class="collection-scope">' + escape(GLOBAL['work_scope']) + '</p>\n          <div class="concept-grid">', 1)
for p in BUSINESS:
    pattern = r'(<article class="concept-card" id="' + re.escape(p['id']) + r'">).*?(</article>)'
    def card(m, p=p):
        block = m.group(0)
        block = re.sub(r'<div class="concept-card-top">.*?</div>', '<div class="concept-card-top"><span>INDEPENDENT WEBSITE BUILD</span><span>' + escape(p['category'].upper()) + '</span></div>', block, count=1, flags=re.S)
        block = re.sub(r'(<h2>.*?</h2>)<p>.*?</p>', r'\1<p>' + escape(p['card']) + '</p>', block, count=1, flags=re.S)
        if 'class="project-role"' not in block:
            block = block.replace('<div class="concept-card-bottom">', '<p class="project-role">My role: ' + escape(p['role']) + '</p><div class="concept-card-bottom">', 1)
        if 'id="case-' + p['id'] + '"' in block:
            block = re.sub(r'<details class="case-study" id="case-' + re.escape(p['id']) + r'">.*?</details>', case_details(p), block, count=1, flags=re.S)
        else:
            block = block.replace('<a class="concept-card-open"', case_details(p) + '<a class="concept-card-open"', 1)
        block = re.sub(r'(class="concept-card-open"[^>]*>)Explore website <span aria-hidden="true">↗</span>', r'\1Explore the website', block)
        return block
    catalog = sub_once(pattern, card, catalog)
matches = catalog_cards(catalog)
blocks = {m.group(1): m.group(0) for m in matches}
catalog = catalog[:matches[0].start()] + '\n            '.join(blocks[p['id']] for p in BUSINESS) + catalog[matches[-1].end():]
catalog = catalog.replace("Have a project in mind?<br />Let's make it useful and memorable.", 'Have a website or application to build?<br />Tell me about its customers and the work it needs to do.')
catalog = catalog.replace('Discuss your project ↗', 'Discuss a project')
(DIST / 'projects.html').write_text(catalog)

# Preserve business-specific controls, safety notices, and sample-data qualifications.
for p in BUSINESS:
    path = DIST / 'sites' / p['id'] / 'index.html'
    s = re.sub(r'<a class="portfolio-case-link"[^>]*>.*?</a>', '', path.read_text())
    s = metadata(s, p['name'] + ' | ' + p['category'], p['card'] + ' Independent website build by Adrian Enev.')
    if 'data-portfolio-hero' in s:
        s = sub_once(r'(<p\b[^>]*\bdata-portfolio-hero[^>]*>).*?(</p>)', lambda m: m.group(1) + escape(p['hero']) + m.group(2), s)
    elif p['id'] == 'root-ritual':
        s = sub_once(r'(</h1>)<p>.*?</p>', r'\1<p>' + escape(p['hero']) + '</p>', s)
    else:
        s = sub_once(r'(</h1>\s*<p[^>]*>).*?(</p>)', lambda m: m.group(1) + escape(p['hero']) + m.group(2), s)
    s = s.replace('INDEPENDENT DEMO PROJECT BY ADRIAN ENEV', 'INDEPENDENT WEBSITE BUILD BY ADRIAN ENEV')
    s = s.replace('Independent demo project by Adrian Enev', 'Independent website build by Adrian Enev')
    s = s.replace('https://adrianenev.com/projects', '/projects.html').replace('All projects ↗', 'All case studies').replace('VIEW ALL PROJECTS ↗', 'VIEW ALL CASE STUDIES')
    s = re.sub(r'<a class="portfolio-case-link"[^>]*>.*?</a>', '', s)
    link = '<a class="portfolio-case-link" href="/projects.html#' + p['id'] + '">Read the ' + escape(p['name']) + ' case study</a>'
    marker = 'INDEPENDENT WEBSITE BUILD BY ADRIAN ENEV' if p['id'] in ('first-whistle', 'good-neighbour') else 'Independent website build by Adrian Enev'
    s = sub_once(r'<footer\b.*?</footer>', lambda m: m.group(0).replace(marker, marker + link, 1), s)
    if 'site-case-link.css' not in s:
        s = s.replace('</head>', '<link rel="stylesheet" href="../../site-case-link.css"></head>')
    if p['id'] == 'root-ritual':
        edits = {
          'Three considered oil concepts, each with a different place in a routine. Explore their ingredients and use before choosing your ritual.': 'Three oils with distinct roles: everyday finishing, pre-wash scalp care and a lighter finish for ends. Compare the product information and find a routine.',
          'Three distinct product concepts, each with its own use and feel. Select one for details. This demo does not offer checkout.': 'Compare three products by their role in a routine, size and usage. Select an oil for details. Product information is illustrative; this website does not offer checkout.',
          'Ingredient highlights are illustrative concept copy, not a final INCI list. Any real formula and product claims would require review.': 'Ingredient highlights are illustrative and are not an approved product formulation or final INCI list.',
          'A few simple choices can help you imagine where Root Ritual fits into your routine.': 'Choose your hair preference and care moment to find a matching routine and product.',
          'SELECTED PRODUCT / CONCEPT': 'SELECTED PRODUCT / DETAILS',
          'CONCEPT FORMULAS / NO CHECKOUT': 'PRODUCT INFORMATION / NO CHECKOUT',
        }
        for old, new in edits.items(): s = replace_once(s, old, new)
    if p['id'] == 'good-form':
        s = replace_once(s, 'Good Form Barbers is an independent barbershop concept. The address and booking details will live here when this site is connected to a real shop.', 'Good Form Barbers brings services, barber profiles and visit planning into one website. This independent build uses illustrative shop details and sample appointment times.')
    if p['id'] == 'sunday-table':
        s = replace_once(s, 'Location, hours, menu and service details illustrate this independent restaurant concept. No table or order can be placed here.', 'Location, hours and menu details are illustrative for this independent restaurant website. The planner does not place orders or reserve tables.')
        s = s.replace('Book a table ↗', 'Plan a table').replace('Reserve a table', 'Plan a table')
    if p['id'] == 'kindred-vet':
        s = s.replace('nothing is sent to this demo site.', 'nothing is sent to a veterinary practice.')
    if p['id'] == 'one-more-plate':
        s = s.replace('GOOD COMPANY GUARANTEED ✳', 'VOLUNTEER ROLE & TIME')
    path.write_text(s)

script = (DIST / 'app.js').read_text()
for key, value in GLOBAL['ui_modes'].items():
    script = re.sub(r'(' + key + r': )"[^"]*"', r'\1' + json.dumps(value), script, count=1)
(DIST / 'app.js').write_text(script)

(DIST / 'site-case-link.css').write_text('.portfolio-case-link { display:block; margin-top:.65rem; font-size:14px; font-weight:600; line-height:1.5; text-transform:none; text-decoration:underline; text-underline-offset:4px; }\n')
(DIST / 'case-studies.css').write_text('''/* Case study copy extends the existing portfolio design. */
.collection-scope { max-width: 70ch; font-size: 14px !important; line-height: 1.65; color: var(--work-muted); }
.section-heading .collection-scope { margin-top: 16px; }
.projects-collection .collection-scope { margin: 0 0 28px; }
.project-role { display: block; font-size: 14px !important; font-weight: 600; line-height: 1.6; }
.project-detail .project-role { margin: 0 0 20px; }
.concept-card p.project-role { margin: -12px 0 26px; color: var(--work-fg); }
.concept-card-top { flex-wrap: wrap; font-size: 12px; }
.concept-grid { align-items: start; }
.concept-card-open::after { display: none; }
.concept-card-open { font-size: 14px; }
.case-study { position: relative; z-index: 6; margin-top: 24px; border-top: 1px solid var(--work-border); }
.case-study > summary { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 18px 0; font-size: 16px; font-weight: 700; cursor: pointer; list-style: none; }
.case-study > summary::-webkit-details-marker { display: none; }
.case-study > summary span { font-size: 24px; line-height: 1; }
.case-study[open] > summary span { transform: rotate(45deg); }
.case-study > summary:focus-visible { outline: 2px solid var(--card-accent, var(--accent-strong)); outline-offset: 4px; }
.case-study-body { display: grid; gap: 20px; padding: 8px 0 24px; }
.case-study-body section { min-width: 0; }
.case-study-body h3 { margin: 0 0 7px; font-size: 16px; line-height: 1.4; letter-spacing: 0; }
.concept-card .case-study-body p { margin: 0; max-width: 65ch; font-size: 16px; line-height: 1.65; }
.case-study-scope { border-top: 1px solid var(--work-border); padding-top: 16px; }
.legacy-case { width: 100%; }
.legacy-case .project-role { margin-bottom: 18px; }
.lab-body .case-study-body p { margin: 0; }
.lab-body .case-study-scope { border-color: var(--about-rule); }
.lab-body { align-items: start; }
.lab-type { overflow-wrap: anywhere; }
.interface-case-study { padding-bottom: 50px; }
.interface-case-study .case-study { border-color: var(--ink); }
.interface-case-study .case-study-scope { border-color: var(--about-rule); }
.contact-brief { max-width: 58ch; margin: 22px 0 32px; font-size: 18px; line-height: 1.65; }
@media (max-width: 620px) {
  .case-study-body { gap: 18px; }
  .concept-card-top { display: grid; gap: 8px; }
  .collection-scope { font-size: 14px !important; }
}
''')

findings = '''The portfolio already contains distinct visual identities and useful working interfaces. Its weakest copy describes the work as previews, concepts and experiments without connecting those interfaces to an offer, customer decision or business purpose. Cards omit my role, and most projects have no case study explaining scope or outcome. The result understates the delivered frontend work while broad full-stack and client language elsewhere can overstate the operating status of this particular collection.

The ten business websites are independent frontend builds. The source does not establish ten operating companies, commissioned clients or live services. Credible positioning therefore comes from the business model represented, concrete customer journeys, visual identity and implemented browser behaviour. Company names and brand language remain; sample service, product, inventory and schedule data stay qualified where a visitor might mistake them for real operations. No revenue, legal status, clients, funding or traction has been added.

The audit covered all ten business website folders, six earlier software entries, the interface study, homepage, project catalog, global navigation, metadata and editorial notes before rewriting. Outcomes below describe source-supported deliverables rather than measured business impact. Problems and business goals are editorial interpretations of the existing workflows; they are not claims of user interviews or a client brief.'''
consistency = [
 'Use each company name and category consistently across the homepage, catalog, website introduction and case study.',
 'Use Website design & frontend development for the ten business builds; retain product-specific roles for earlier software work.',
 'Keep independent provenance visible once at collection level and in each case study. Use completed browser workflows as evidence of delivery.',
 'Replace toy-like concept labels in brand presentation with concrete product, service and workflow labels. Keep sample data and transaction boundaries qualified.',
 'Describe business models as the model represented in the website. Confirm missing operator, pricing or fulfilment details before asserting live operations.',
 'Use Full-Stack Developer consistently in personal identification, and distinguish quantitative research from demonstrated financial returns.',
 'Rename UI navigation to Design and Lab to Systems; use Read case study, Explore the website and Discuss a project as action labels.',
 'Link microsites back to the local /projects.html catalog and each matching case study. Homepage cards and catalog share the same card text.',
 'Correct the 2018–22 high-school wording so it does not contradict the recorded 2026 graduation. Preserve documented personal awards and the historical first-client milestone.',
 'Keep previous-brand redirects intact. Do not treat copyright, cache versions or the redesign date as company launch dates.',
 'Use portfolio-copy.json as the copy source; scripts/apply_portfolio_copy.py renders the public text and this report.',
]
report = ['# Portfolio audit and rewritten copy', '\n### Portfolio-wide findings', findings]
for p in PROJECTS:
    report += ['\n### ' + p['name'], '**Current perception:**  \n' + p['perception'],
      '**Missing or unclear information:**  \n' + p.get('unclear', ('The existing card does not connect the customer, business model, my role and delivered workflow. Operating-company details are not established by the independent build.' if p['kind'] == 'business' else 'The summary leaves the audience, precise work and outcome implicit. The available evidence is a portfolio description, not a verified commercial operation.')),
      '**Recommended positioning:**  \n' + p['category'] + '. ' + p['card'] + ' ' + p['scope'],
      '**Rewritten portfolio card:**  \n' + p['name'] + '  \n' + p['category'] + '  \n' + p['card'] + '  \nMy role: ' + p['role'],
      '**Rewritten company/project introduction:**  \n' + p['intro'],
      '**Suggested case-study structure:**\n\n' + '\n'.join('- **' + title + ':** ' + body for title, body in sections(p)) + '\n- **Brand positioning:** ' + p['identity'] + '\n- **Scope:** ' + p['scope'],
      '**Specific edits:**  \n' + p.get('edits', ('Replace Interactive preview as the primary card message with the company category; add my role and the nine-section case study. Use the same card text on the homepage and catalog. Give the website hero a concrete service/product introduction, preserve operational qualifications and link the footer to this case study.' if p['kind'] == 'business' else 'Replace learning-first introduction text with the product purpose and work shown above. Preserve factual release or research status; do not describe this work as a commissioned business. Add role, solution and outcome to the expanded entry.')),
      '**Missing facts:**\n\n' + ('\n'.join('- [NEEDS INPUT: ' + fact.rstrip('.') + '.]' for fact in p['missing']) if p['missing'] else 'No additional fact is needed to describe the documented work.')]
report += ['\n### Portfolio-wide consistency changes', '\n'.join('- ' + item for item in consistency), '\n### Final polished copy', '\n#### Homepage and global copy']
labels = {'title':'Page title','description':'Meta description','hero':'Hero introduction','work_heading':'Selected-work heading','work_intro':'Selected-work introduction','work_scope':'Collection scope','catalog_heading':'Catalog heading','catalog_intro':'Catalog introduction','lab_heading':'Earlier-work heading','lab_intro':'Earlier-work introduction','about':'About introduction','about_second':'About continuation','contact_heading':'Contact heading','contact':'Contact invitation','ui_intro':'Interface study introduction'}
for key, label in labels.items(): report += ['**' + label + ':**  \n' + GLOBAL[key]]
report += ['**Navigation:**  \nWork · Design · Systems · About · Recognition · Contact', '**Calls to action:**  \nView case studies · Read case study · Explore the website · View source code · Discuss a project', '**Interface state descriptions:**\n\n' + '\n'.join('- **' + k.title() + ':** ' + v for k,v in GLOBAL['ui_modes'].items())]
for p in PROJECTS:
    report += ['\n#### ' + p['name'], '**Card:**  \n' + p['name'] + '  \n' + p['category'] + '  \n' + p['card'] + '  \nMy role: ' + p['role'], '**Introduction:**  \n' + p['intro']]
    if 'hero' in p: report += ['**Company website hero:**  \n' + p['hero'], '**Company website metadata:**  \n' + p['name'] + ' | ' + p['category'] + '  \n' + p['card'] + ' Independent website build by Adrian Enev.']
    for title, body in sections(p)[1:]: report += ['**' + title + ':**  \n' + body]
    report += ['**Scope:**  \n' + p['scope']]
report += ['\n#### Additional interface wording', 'Root Ritual: Product details · Product information / no checkout · Choose your hair preference and care moment to find a matching routine and product.', 'The Sunday Table: Plan a table. Keep the notice that the planner does not place orders or reserve tables.', 'One More Plate: Volunteer role & time. Keep sample shifts and session-only planning explicit.', 'Microsite footer: Independent website build by Adrian Enev. Read the [company name] case study.', 'Timeline 2018–22: Early programming, algorithms and problem-solving foundations in Dobrich, followed by competition participation.', 'Current-work milestone: Continuing web application development and independent product work.']
report += ['\n#### Evidence inventory', 'Business websites: dist/sites/<slug>/index.html, app.js, styles.css and identity.css. Portfolio context: dist/index.html, dist/projects.html, dist/app.js, README.md, CONTENT_NOTES.md and SITE_PLAN.md. Earlier software claims use the existing local portfolio summaries and links; their external repositories and private Livepair source were not inspected or runtime-verified. New copy does not claim independent validation of those projects.']
(ROOT / 'PORTFOLIO_AUDIT.md').write_text('\n\n'.join(report) + '\n')
print('Rendered 17 case studies, 10 website introductions, shared portfolio copy and the full editorial report.')
