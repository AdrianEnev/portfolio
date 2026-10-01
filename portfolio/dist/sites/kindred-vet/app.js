const navButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function setNavigationOpen(open) {
  navButton.setAttribute('aria-expanded', String(open));
  navButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', open);
}
navButton.addEventListener('click', () => {
  setNavigationOpen(navButton.getAttribute('aria-expanded') !== 'true');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  setNavigationOpen(false);
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navButton.getAttribute('aria-expanded') === 'true') {
    setNavigationOpen(false);
    navButton.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) setNavigationOpen(false);
});

const guidance = {
  checkup: {title:'A checkup is a great place to start.',intro:'A routine visit can help you talk through everyday wellbeing, habits, and anything that has changed.',bring:['Previous health records, if you have them','A list of current medicines or supplements','Your questions about behaviour, food, and routines']},
  vaccines: {title:'Let’s make a prevention plan.',intro:'A veterinary team can review your companion’s history and recommend protection suited to their age and lifestyle.',bring:['Any vaccination record or pet passport','Details of travel plans or time spent outdoors','Questions about parasite prevention']},
  dental: {title:'Healthy mouths make happier days.',intro:'A veterinary exam can help clarify whether your pet needs routine dental care or more attention.',bring:['Notes on changes in appetite or chewing','Any concerns about breath, teeth, or gums','A list of treats and dental products you use']},
  concern: {title:'We’ll take your concerns seriously.',intro:'A new change is worth discussing with a veterinary professional. Describe what you have noticed and when it began.',bring:['A short timeline of the change','Photos or videos if the symptom comes and goes','Details of appetite, energy, and current medicines']},
  senior: {title:'Comfort matters at every age.',intro:'A senior wellbeing visit is a chance to discuss movement, sleep, appetite, and the little shifts you may be noticing.',bring:['Notes on mobility, energy, and daily routines','Any medicines or supplements','Questions about comfort at home']},
  nutrition: {title:'Let’s talk about the everyday bowl.',intro:'Food and weight needs can change with age, activity, and health. A veterinary team can help make a suitable plan.',bring:['The brand and amount of food you serve','Treats, supplements, and feeding routine','Recent weight history if available']}
};
const speciesNames = {dog:'dog',cat:'cat',rabbit:'rabbit',other:'companion'};
const speciesNotes = {
  dog:'A leash and a few familiar treats can help your dog settle.',
  cat:'A secure carrier with a familiar blanket can help your cat feel safer.',
  rabbit:'Bring your rabbit in a secure, well ventilated carrier with familiar bedding.',
  other:'Ask the veterinary practice about safe transport for your companion before travelling.'
};

document.getElementById('planner-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const species = form.elements.species.value;
  const reason = form.elements.reason.value;
  if (!species || !reason) return;
  const item = guidance[reason];
  const result = document.getElementById('planner-result');
  result.innerHTML = `<div class="result-icon" aria-hidden="true">♥</div><p class="result-kicker">Visit guidance for your ${speciesNames[species]}</p><h3>${item.title}</h3><p>${item.intro}</p><p><strong>Good things to bring:</strong></p><ul>${item.bring.map(point => `<li>${point}</li>`).join('')}</ul><p>${speciesNotes[species]}</p><div class="result-help">This guide does not diagnose your pet or arrange a visit. If your pet has breathing trouble, has collapsed, or is seriously injured, seek urgent veterinary care now.</div>`;
  if (window.matchMedia('(max-width: 1050px)').matches) result.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'nearest'});
});

const visitNoteForm = document.getElementById('note-form');
const visitNoteResult = document.getElementById('note-result');
const visitNoteBody = document.getElementById('note-result-body');
let visitNoteText = '';
visitNoteForm.addEventListener('input', () => { visitNoteResult.hidden = true; });
visitNoteForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = visitNoteForm.elements.petName.value.trim();
  const observation = visitNoteForm.elements.observation.value.trim();
  const routine = visitNoteForm.elements.routine.value.trim();
  const questions = visitNoteForm.elements.questions.value.trim();
  if (!name || !observation) { visitNoteForm.reportValidity(); return; }
  const fields = [
    ['What I noticed', observation],
    ['Food, medicines, and supplements', routine || 'Not added'],
    ['Questions to ask', questions || 'Not added']
  ];
  document.getElementById('note-result-title').textContent = `${name}'s visit note`;
  visitNoteBody.replaceChildren();
  fields.forEach(([label, value]) => {
    const paragraph = document.createElement('p');
    const heading = document.createElement('strong');
    heading.textContent = `${label}: `;
    paragraph.append(heading, document.createTextNode(value));
    visitNoteBody.append(paragraph);
  });
  visitNoteText = [`Visit note for ${name}`, '', ...fields.flatMap(([label, value]) => [label, value, '']), 'Prepared with Kindred Vet demo. Share this note with a qualified veterinary professional.'].join('\n');
  visitNoteResult.hidden = false;
  visitNoteResult.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
});
document.getElementById('download-note').addEventListener('click', () => {
  if (!visitNoteText) return;
  const url = URL.createObjectURL(new Blob([visitNoteText], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'pet-visit-note.txt';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
document.getElementById('year').textContent = new Date().getFullYear();
