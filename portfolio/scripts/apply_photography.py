"""Apply reviewed photos and generate credits without changing the site layouts."""
from pathlib import Path
import html
import json
import re

ROOT = Path(__file__).resolve().parents[1]
photos = json.loads((ROOT / 'image-sources.json').read_text())
by_name = {p['filename']: p for p in photos}

def image(p, *, sizes='(max-width: 760px) 100vw, 50vw', eager=False):
    small, large = p['variants']
    url = lambda v: '/' + v['path'].removeprefix('dist/')
    priority = ' fetchpriority="high"' if eager else ''
    return (f'<img class="photograph" src="{url(large)}" '
            f'srcset="{url(small)} {small["width"]}w, {url(large)} {large["width"]}w" '
            f'sizes="{sizes}" width="{large["width"]}" height="{large["height"]}" '
            f'alt="{html.escape(p["alt"], quote=True)}" '
            f'loading="{"eager" if eager else "lazy"}" decoding="async"{priority}>')

def replace_frame(s, classes, p, caption='', *, eager=False, position=None, sizes=None):
    match = re.search(r'<div class="' + re.escape(classes) + r'(?: has-photography)?"[^>]*>', s)
    assert match, classes
    depth = 0
    for tag in re.finditer(r'</?div\b[^>]*>', s[match.start():]):
        depth += -1 if tag.group().startswith('</') else 1
        if depth == 0:
            end = match.start() + tag.end()
            break
    pos = position or p['object_position']
    opening = f'<div class="{classes} has-photography" style="--photo-position: {pos}">'
    options = {'eager': eager}
    if sizes:
        options['sizes'] = sizes
    return s[:match.start()] + opening + image(p, **options) + caption + '</div>' + s[end:]

secondary = {
    'first-whistle': ('news-card-art art-cones', 'youth-football-training', '<span class="photo-caption">TRAIN TOGETHER</span>'),
    'good-form': ('visit-art', 'leather-barber-chair', '<span class="photo-caption">THE SHOP / INTERIOR STUDY</span>'),
    'sunday-table': ('story-visual', 'seasonal-shared-table', '<span class="story-scribble">Come as you are.</span>'),
    'one-more-plate': ('kitchen-graphic', 'hands-preparing-vegetables', '<span class="photo-caption">STIR SOMETHING GOOD.</span>'),
    'honest-grain': ('material-visual', 'hand-planing-timber', '<div class="wood-stamp photo-caption">MATERIAL / WORKSHOP STUDY</div>'),
}
affected = set(secondary) | {'good-neighbour', 'slow-morning'}
for slug in sorted(affected):
    path = ROOT / f'dist/sites/{slug}/index.html'
    s = path.read_text()
    if slug in secondary:
        classes, filename, caption = secondary[slug]
        sizes = '(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 32vw' if slug == 'first-whistle' else None
        s = replace_frame(s, classes, by_name[filename], caption, sizes=sizes)
    elif slug == 'slow-morning':
        s = replace_frame(s, 'hero-visual', by_name['nest-daylight-bedroom'], '<div class="hero-visual-label photo-caption">01 — YOUR PAUSE IN THE CITY</div>', eager=True, position='50% 65%', sizes='(max-width: 760px) 92vw, (max-width: 1240px) 88vw, 1040px')
        for room, filename in [('nest', 'nest-daylight-bedroom'), ('garden', 'garden-soft-linen-bedroom'), ('loft', 'loft-blue-chair-bedroom')]:
            s = replace_frame(s, f'room-art {room}', by_name[filename], sizes='(max-width: 700px) 100vw, 33vw')
        s = replace_frame(s, 'house-art', by_name['sunlit-reading-corner'], '<div class="house-caption photo-caption">A PLACE TO SLOW DOWN</div>')
        original = 'Three distinct ways to feel at home. Each room pairs a calm palette with the little comforts that make a stay your own.'
        if original + ' Room photography illustrates the concept.' not in s:
            s = s.replace(original, original + ' Room photography illustrates the concept.')
    else:
        caption = '<div class="hero-art-top"><span>GOOD NEIGHBOUR / 001</span><span>THE CITY, REFRAMED</span></div><div class="hero-art-bottom"><span>SOFIA / A SENSE OF PLACE</span><span>42.6977° N / 23.3219° E</span></div>'
        s = replace_frame(s, 'hero-art', by_name['sofia-city-panorama'], caption, eager=True, sizes='(max-width: 760px) 100vw, 40vw')
        original = 'Search by what matters to you. Each home is presented with the essential details and the context around it.'
        if original + ' Photographs illustrate the sample collection.' not in s:
            s = s.replace(original, original + ' Photographs illustrate the sample collection.')
    if '/assets/photography.css' not in s:
        s = s.replace('</head>', '  <link rel="stylesheet" href="/assets/photography.css">\n</head>')
    s = s.replace('/assets/photography.css\"', '/assets/photography.css?v=photos-20260930\"')
    if slug == 'good-neighbour':
        s = re.sub(r'src=\"(?:\./)?app\.js(?:\?[^\"]*)?\"', 'src=\"app.js?v=photos-20260930\"', s)
    if 'photography-credit-link' not in s:
        s = re.sub(r'(<a class="portfolio-case-link"[^>]*>.*?</a>)', r'\1<a class="photography-credit-link" href="/image-credits.html#'+slug+'">Photography credits</a>', s, count=1)
    path.write_text(s)

# The same six photographs follow listings into the existing detail dialog.
ids = ['courtyard', 'orlova', 'garden-house', 'southline', 'corner-loft', 'parkside']
filenames = ['courtyard-living-room', 'orlova-living-dining-room', 'garden-house-facade', 'southline-warm-living-room', 'corner-loft-open-living-room', 'parkside-mid-century-living-room']
assets = {}
for id_, name in zip(ids, filenames):
    p = by_name[name]
    small, large = p['variants']
    assets[id_] = {'src': '/' + large['path'].removeprefix('dist/'), 'small': '/' + small['path'].removeprefix('dist/'), 'width': large['width'], 'height': large['height'], 'alt': p['alt']}
path = ROOT / 'dist/sites/good-neighbour/app.js'
s = path.read_text()
block = '// BEGIN REVIEWED PROPERTY PHOTOGRAPHY\nconst propertyPhotos = ' + json.dumps(assets, indent=2, ensure_ascii=False) + ';\n// END REVIEWED PROPERTY PHOTOGRAPHY\n'
if '// BEGIN REVIEWED PROPERTY PHOTOGRAPHY' in s:
    s = re.sub(r'// BEGIN REVIEWED PROPERTY PHOTOGRAPHY.*?// END REVIEWED PROPERTY PHOTOGRAPHY\n', lambda _: block, s, flags=re.S)
else:
    s = block + s
function = '''function propertyPhoto(property, detail = false) {
  const photo = propertyPhotos[property.id];
  const sizes = detail ? '(max-width: 760px) 100vw, 760px' : '(max-width: 560px) 100vw, (max-width: 1050px) 50vw, 33vw';
  return `<img class="photograph" src="${photo.src}" srcset="${photo.small} 800w, ${photo.src} 1600w" sizes="${sizes}" width="${photo.width}" height="${photo.height}" alt="${photo.alt}" loading="${detail ? 'eager' : 'lazy'}" decoding="async">`;
}'''
s = re.sub(r'function (?:illustration|propertyPhoto)\([^)]*\) \{.*?\n\}', lambda _: function, s, count=1, flags=re.S)
s = s.replace('${illustration(property)}', '${propertyPhoto(property)}')
s = s.replace('class="property-visual visual-${property.visual}"', 'class="property-visual has-photography visual-${property.visual}"')
s = s.replace('class="dialog-visual property-visual visual-${property.visual}"', 'class="dialog-visual property-visual has-photography visual-${property.visual}"')
s = s.replace('class="dialog-visual property-visual has-photography visual-${property.visual}">${propertyPhoto(property)}', 'class="dialog-visual property-visual has-photography visual-${property.visual}">${propertyPhoto(property, true)}')
s = s.replace('Illustrative property preview. Availability and details are not live.', 'Reference photography for an illustrative property. Availability and details are not live.')
path.write_text(s)

names = {'first-whistle': 'First Whistle Academy', 'good-form': 'Good Form Barbers', 'root-ritual': 'Root Ritual', 'sunday-table': 'The Sunday Table', 'kindred-vet': 'Kindred Vet', 'good-neighbour': 'Good Neighbour Homes', 'small-hours': 'Small Hours Theatre', 'slow-morning': 'Slow Morning House', 'honest-grain': 'Honest Grain', 'one-more-plate': 'One More Plate'}
notes = {
'first-whistle': 'Replaced the generic cone scene in the academy-life card. Retained tactical hero and editorial type artwork.',
'good-form': 'Replaced the visit section’s generic pole scene with an authentic chair/interior photograph. Retained hero chair illustration and fictional staff avatars.',
'root-ritual': 'Retained fitting botanical specimens, branded bottle artwork and product illustrations; unrelated real products would misrepresent the range.',
'sunday-table': 'Replaced the three tomato shapes in the story panel with professionally photographed shared dishes. Retained illustrated hero, gingham and menu interface.',
'kindred-vet': 'Retained the fitting dog/cat illustration, care icons and approach infographic; stock staff portraits would add no useful evidence.',
'good-neighbour': 'Replaced the schematic hero with authentic Sofia photography and six repetitive listing scenes with distinct real photographs, also reused in detail dialogs. Retained maps, neighbourhood graphics and adviser avatars.',
'small-hours': 'Retained intentional stage artwork, production posters and seating interface.',
'slow-morning': 'Replaced the suite hero, three schematic room images and the generic house scene. Preserved all existing arched frames and room comparison behavior; the Nest image also serves the wide hero.',
'honest-grain': 'Replaced the synthetic woodgrain scene with genuine hand-planing detail. Retained measured furniture illustrations and the live configurator.',
'one-more-plate': 'Replaced the generic cooking pot with authentic vegetable-preparation photography. Retained collage hero, community symbols and planning interfaces.',
}
md = ['# Image sources and imagery review', '', 'Verified on 30 September 2026. All selected photographs are downloaded locally as 800px and 1600px WebP variants. They are reference photography for independent fictional business previews, not claims about the named businesses’ actual premises, properties, meals, employees or customers. The Sofia panorama depicts the real city.', '', 'The Unsplash License and Pexels License permit free website use and modification, including commercial use. They do not imply endorsement by pictured people or brands. The Sofia panorama is CC0 1.0. Source pages and creators are credited below even where attribution is optional.', '', 'Machine-readable registry: `image-sources.json`. Restore missing assets with `python3 scripts/fetch_photography.py`, then apply metadata/credits with `python3 scripts/apply_photography.py`. Requires system curl, cwebp and sips. Photos are not hotlinked.', '']
sections = []
for slug, name in names.items():
    md += ['## ' + name, '', notes[slug], '']
    entries = [p for p in photos if p['project'] == slug]
    if entries:
        md += ['| Local filename | Original source | Photographer | Source website | License |', '| --- | --- | --- | --- | --- |']
        rows = []
        for p in entries:
            files = '<br>'.join('`' + v['path'] + '`' for v in p['variants'])
            md.append(f'| {files} | [Source page]({p["source_url"]}) | {p["creator"]} | {p["website"]} | [{p["license"]}]({p["license_url"]}) |')
            rows.append('<li><strong>'+html.escape(p['creator'])+'</strong> · '+html.escape(p['website'])+' — <a href="'+p['source_url']+'">Original photograph</a> · <a href="'+p['license_url']+'">'+p['license']+'</a><small>'+html.escape(p['filename'])+'-800.webp / -1600.webp</small></li>')
        md += ['', 'Placement and crop details are recorded in the JSON registry.', '']
        sections.append('<section id="'+slug+'"><h2>'+html.escape(name)+'</h2><ul>'+''.join(rows)+'</ul><a href="/sites/'+slug+'/">Back to this website ↗</a></section>')
for name in ['InfraLock', 'Livepair', 'Lunge', 'Adrian Cuts', 'The Original Portfolio', 'Algorithmic Research', 'Interface Interaction Study']:
    md += ['## '+name, '', 'Reviewed and retained. The portfolio entry uses interface artwork, technical documentation or text; there is no weak photographic placeholder. Unrelated stock imagery would not improve the project evidence.', '']
md += ['## Portfolio assets', '', 'Retained Adrian’s existing portrait and the purpose-built brand preview artwork in the homepage and catalogue.', '']
(ROOT / 'IMAGE_SOURCES.md').write_text('\n'.join(md))
(ROOT / 'dist/image-credits.html').write_text('''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Photography credits | Adrian Enev</title><style>body{margin:0;background:#f3f1e8;color:#252b25;font-family:system-ui,sans-serif;font-size:16px;line-height:1.6}main{max-width:960px;margin:auto;padding:64px 24px}h1{font-family:Georgia,serif;font-weight:400;font-size:clamp(40px,6vw,72px);line-height:1.1}h2{font-size:24px;font-weight:500}section{border-top:1px solid #c7cabe;padding:24px 0;margin-top:32px;scroll-margin-top:24px}ul{padding-left:20px}li{margin:14px 0}small{display:block;color:#556052;font-size:12px;overflow-wrap:anywhere}a{color:inherit;text-underline-offset:4px}:focus-visible{outline:3px solid #627e65;outline-offset:4px}p{max-width:75ch}</style></head><body><main><a href="/projects.html">← Portfolio case studies</a><h1>Photography credits.</h1><p>Real photography, generously shared by the creators below. These images illustrate independent business website concepts. Pictured spaces, meals and people are not presented as the named businesses’ actual premises, products or teams. The Sofia panorama shows the real city.</p><p>Photographs are saved and optimized locally. Each original source and applicable license is linked below.</p>'''+''.join(sections)+'''</main></body></html>''')
print('Applied all reviewed photographs and generated project + public credits.')
