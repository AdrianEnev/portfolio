// BEGIN REVIEWED PROPERTY PHOTOGRAPHY
const propertyPhotos = {
  "courtyard": {
    "src": "/assets/images/courtyard-living-room-1600.webp",
    "small": "/assets/images/courtyard-living-room-800.webp",
    "width": 1600,
    "height": 1068,
    "alt": "Light-filled living room with neutral sofas and large windows."
  },
  "orlova": {
    "src": "/assets/images/orlova-living-dining-room-1600.webp",
    "small": "/assets/images/orlova-living-dining-room-800.webp",
    "width": 1600,
    "height": 1067,
    "alt": "Connected living and dining spaces with warm neutral furnishings."
  },
  "garden-house": {
    "src": "/assets/images/garden-house-facade-1600.webp",
    "small": "/assets/images/garden-house-facade-800.webp",
    "width": 1600,
    "height": 1067,
    "alt": "Contemporary grey and white house facade beside a small garden tree."
  },
  "southline": {
    "src": "/assets/images/southline-warm-living-room-1600.webp",
    "small": "/assets/images/southline-warm-living-room-800.webp",
    "width": 1600,
    "height": 1067,
    "alt": "Warm living room with a leather sofa, green wall and houseplants."
  },
  "corner-loft": {
    "src": "/assets/images/corner-loft-open-living-room-1600.webp",
    "small": "/assets/images/corner-loft-open-living-room-800.webp",
    "width": 1600,
    "height": 1068,
    "alt": "Open loft living space with exposed timber beams and tall windows."
  },
  "parkside": {
    "src": "/assets/images/parkside-mid-century-living-room-1600.webp",
    "small": "/assets/images/parkside-mid-century-living-room-800.webp",
    "width": 1600,
    "height": 1067,
    "alt": "Living room with timber furniture, a neutral sofa and broad glazing."
  }
};
// END REVIEWED PROPERTY PHOTOGRAPHY
const properties = [
  { id: 'courtyard', name: 'The Courtyard', area: 'Lozenets', type: 'Apartment', price: 399000, beds: 2, size: 112, floor: '3rd', outdoor: 'South-facing balcony', orientation: 'South / east', standout: 'A generous living room opening onto a quiet courtyard.', question: 'Ask how the courtyard is maintained and whether the balcony is included in the stated area.', tag: 'NEW PERSPECTIVE', visual: 1, x: 38, y: 59, reference: 'GN / 001', description: 'Calm proportions, a generous living area, and an outlook towards the quieter streets of Lozenets.' },
  { id: 'orlova', name: 'Orlova Residence', area: 'Oborishte', type: 'Apartment', price: 475000, beds: 3, size: 138, floor: '4th', outdoor: 'Two terraces', orientation: 'East / west', standout: 'Flexible third room for a studio or a guest.', question: 'Ask about the building’s common areas and the condition of the terraces.', tag: 'CITY CHARACTER', visual: 2, x: 52, y: 31, reference: 'GN / 002', description: 'A light-filled city home with room to gather, tucked into a neighbourhood known for its culture and character.' },
  { id: 'garden-house', name: 'Garden House', area: 'Boyana', type: 'House', price: 790000, beds: 4, size: 246, floor: 'Two levels', outdoor: 'Private garden', orientation: 'South / west', standout: 'Separate family and work spaces beside the garden.', question: 'Ask to review the garden boundary, heating system, and maintenance needs.', tag: 'MORE ROOM', visual: 3, x: 18, y: 78, reference: 'GN / 003', description: 'A generous home and garden, with a slower rhythm close to the mountain.' },
  { id: 'southline', name: 'Southline', area: 'Lozenets', type: 'Apartment', price: 279000, beds: 1, size: 76, floor: '5th', outdoor: 'Compact balcony', orientation: 'South', standout: 'A bright, easy-to-arrange layout for one or two.', question: 'Ask about lift access and the building’s planned maintenance.', tag: 'WELL PLACED', visual: 4, x: 48, y: 64, reference: 'GN / 004', description: 'An easy-to-live-in apartment with warm light and a direct connection to the city.' },
  { id: 'corner-loft', name: 'The Corner Loft', area: 'Centre', type: 'Loft', price: 345000, beds: 2, size: 96, floor: '2nd', outdoor: 'No private outdoor space', orientation: 'North / east', standout: 'Tall windows and an open plan that can flex with the day.', question: 'Ask how the open plan is registered and what changes would need approval.', tag: 'ARCHITECTURAL', visual: 5, x: 36, y: 25, reference: 'GN / 005', description: 'An expressive layout, tall windows, and an address close to the centre of everything.' },
  { id: 'parkside', name: 'Parkside', area: 'Mladost', type: 'Apartment', price: 228000, beds: 2, size: 84, floor: '6th', outdoor: 'Park-facing terrace', orientation: 'East', standout: 'A practical second bedroom and an open green outlook.', question: 'Ask to see the building documents and discuss any shared maintenance costs.', tag: 'GREEN OUTLOOK', visual: 6, x: 77, y: 67, reference: 'GN / 006', description: 'Practical spaces and a leafy outlook for a balanced everyday routine.' }
];

const storageKey = 'portfolio-property-shortlist-v1';
const legacyStorageKey = 'breg-imoti-saved-v1';
const validIds = new Set(properties.map(property => property.id));
let saved = new Set();
try {
  const stored = JSON.parse((localStorage.getItem(storageKey) ?? localStorage.getItem(legacyStorageKey)) || '[]');
  if (Array.isArray(stored)) saved = new Set(stored.filter(id => validIds.has(id)));
} catch (_) { /* Storage can be unavailable in a private browser session. */ }
const compared = new Set([...saved].slice(0, 3));

const state = { area: 'all', type: 'all', price: 'all', savedOnly: false, view: 'list', selectedMapId: null };
const areaFilter = document.getElementById('area-filter');
const typeFilter = document.getElementById('type-filter');
const priceFilter = document.getElementById('price-filter');
const savedToggle = document.getElementById('saved-toggle');
const savedCount = document.getElementById('saved-count');
const listView = document.getElementById('list-view');
const mapView = document.getElementById('map-view');
const propertyGrid = document.getElementById('property-grid');
const mapPanel = document.getElementById('map-panel');
const mapMarkers = document.getElementById('map-markers');
const mapDetail = document.getElementById('map-detail');
const emptyState = document.getElementById('empty-state');
const resultCount = document.getElementById('result-count');
const resultsStatus = document.getElementById('results-status');
const dialog = document.getElementById('property-dialog');
const dialogContent = document.getElementById('dialog-content');
const shortlistPicker = document.getElementById('shortlist-picker');
const compareContent = document.getElementById('compare-content');

const money = value => new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
const shortMoney = value => `€${Math.round(value / 1000)}k`;

function propertyPhoto(property, detail = false) {
  const photo = propertyPhotos[property.id];
  const sizes = detail ? '(max-width: 760px) 100vw, 760px' : '(max-width: 560px) 100vw, (max-width: 1050px) 50vw, 33vw';
  return `<img class="photograph" src="${photo.src}" srcset="${photo.small} 800w, ${photo.src} 1600w" sizes="${sizes}" width="${photo.width}" height="${photo.height}" alt="${photo.alt}" loading="${detail ? 'eager' : 'lazy'}" decoding="async">`;
}

function propertyCard(property) {
  const isSaved = saved.has(property.id);
  return `<article class="property-card">
    <div class="property-visual has-photography visual-${property.visual}">
      ${propertyPhoto(property)}
      <span class="visual-tag">${property.tag}</span>
      <button class="favourite${isSaved ? ' is-saved' : ''}" type="button" data-save="${property.id}" aria-label="${isSaved ? 'Remove' : 'Save'} ${property.name} ${isSaved ? 'from' : 'to'} saved homes" aria-pressed="${isSaved}">${isSaved ? '♥' : '♡'}</button>
      <span class="visual-ref">${property.reference}</span>
    </div>
    <div class="property-info"><div class="property-location"><span>SOFIA / ${property.area.toUpperCase()}</span><span>${property.type.toUpperCase()}</span></div><h3>${property.name}</h3><p class="property-highlight">${property.standout}</p>
      <div class="property-meta"><span>${property.beds} ${property.beds === 1 ? 'bedroom' : 'bedrooms'}</span><span>${property.size} m²</span><span>${property.type}</span></div>
      <div class="property-bottom"><strong>${money(property.price)}</strong><button class="detail-button" type="button" data-detail="${property.id}">View details <span aria-hidden="true">↗</span></button></div>
    </div>
  </article>`;
}

function filteredProperties() {
  return properties.filter(property =>
    (state.area === 'all' || property.area === state.area) &&
    (state.type === 'all' || property.type === state.type) &&
    (state.price === 'all' || property.price <= Number(state.price)) &&
    (!state.savedOnly || saved.has(property.id))
  );
}

function renderMapDetail(property) {
  if (!property) {
    mapDetail.innerHTML = '<span class="detail-overline">SELECT A MAP MARKER</span><h3>A different way to look around.</h3><p>Choose a price marker to see a home from the collection.</p>';
    return;
  }
  mapDetail.innerHTML = `<span class="detail-overline">SOFIA / ${property.area.toUpperCase()}</span><h3>${property.name}</h3><p>${property.beds} ${property.beds === 1 ? 'bedroom' : 'bedrooms'} · ${property.size} m² · ${property.type}</p><strong class="map-detail-price">${money(property.price)}</strong><button type="button" data-detail="${property.id}">View property details <span aria-hidden="true">↗</span></button>`;
}

function renderShortlist() {
  const savedHomes = properties.filter(property => saved.has(property.id));
  const selectedHomes = properties.filter(property => compared.has(property.id));
  if (!savedHomes.length) {
    shortlistPicker.innerHTML = '<p class="shortlist-empty">No homes saved yet. Use the heart on a property to add it to your shortlist.</p><a href="#listings">Browse illustrative homes ↗</a>';
    compareContent.innerHTML = '';
    return;
  }
  shortlistPicker.innerHTML = `<div class="picker-heading"><strong>CHOOSE UP TO THREE HOMES</strong><span>${selectedHomes.length} of 3 selected</span></div><div class="picker-homes">${savedHomes.map(property => `<button type="button" data-compare="${property.id}" aria-pressed="${compared.has(property.id)}" ${!compared.has(property.id) && compared.size >= 3 ? 'disabled title="Choose no more than three homes"' : ''}><span>${property.name}<small>${property.area} · ${money(property.price)}</small></span><span aria-hidden="true">${compared.has(property.id) ? '✓' : '+'}</span></button>`).join('')}</div>`;
  if (!selectedHomes.length) {
    compareContent.innerHTML = '<p class="shortlist-empty">Choose a saved home above to see its details in the comparison.</p>';
    return;
  }
  const rows = [
    ['Price', property => money(property.price)],
    ['Price / m²', property => money(Math.round(property.price / property.size))],
    ['Floor area', property => `${property.size} m²`],
    ['Bedrooms', property => String(property.beds)],
    ['Floor', property => property.floor],
    ['Outdoor space', property => property.outdoor],
    ['Aspect', property => property.orientation],
    ['One detail to remember', property => property.standout]
  ];
  compareContent.innerHTML = `<div class="compare-scroll"><table class="compare-table"><caption>Illustrative saved home comparison</caption><thead><tr><th scope="col">DETAIL</th>${selectedHomes.map(property => `<th scope="col">${property.name}<small>${property.area}</small></th>`).join('')}</tr></thead><tbody>${rows.map(([label, value]) => `<tr><th scope="row">${label}</th>${selectedHomes.map(property => `<td>${value(property)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="compare-foot">Property information and prices are demonstration content. Verify all facts with a real agent before making a decision.</p>`;
}

function render() {
  const matches = filteredProperties();
  resultCount.textContent = `${matches.length} ${matches.length === 1 ? 'home' : 'homes'}`;
  savedCount.textContent = String(saved.size);
  savedToggle.setAttribute('aria-pressed', String(state.savedOnly));
  savedToggle.classList.toggle('is-active', state.savedOnly);
  listView.setAttribute('aria-pressed', String(state.view === 'list'));
  mapView.setAttribute('aria-pressed', String(state.view === 'map'));
  listView.classList.toggle('is-active', state.view === 'list');
  mapView.classList.toggle('is-active', state.view === 'map');
  emptyState.hidden = matches.length > 0;
  propertyGrid.hidden = matches.length === 0 || state.view !== 'list';
  mapPanel.hidden = matches.length === 0 || state.view !== 'map';
  propertyGrid.innerHTML = matches.map(propertyCard).join('');
  if (!matches.some(property => property.id === state.selectedMapId)) state.selectedMapId = null;
  mapMarkers.innerHTML = matches.map(property => `<button class="map-marker${state.selectedMapId === property.id ? ' is-selected' : ''}" type="button" data-map="${property.id}" style="left:${property.x}%;top:${property.y}%" aria-label="${property.name}, ${property.area}, ${money(property.price)}" aria-pressed="${state.selectedMapId === property.id}">${shortMoney(property.price)}</button>`).join('');
  renderMapDetail(matches.find(property => property.id === state.selectedMapId));
  renderShortlist();
  resultsStatus.textContent = `${matches.length} illustrative ${matches.length === 1 ? 'home' : 'homes'} shown${state.savedOnly ? ' in saved homes' : ''}, ${state.view} view.`;
}

function storeSaved() {
  try { localStorage.setItem(storageKey, JSON.stringify([...saved])); } catch (_) { /* Keep the current session usable. */ }
}

function toggleSaved(id) {
  if (!validIds.has(id)) return;
  const returnFocusToCard = document.activeElement?.dataset?.save === id;
  if (saved.has(id)) { saved.delete(id); compared.delete(id); }
  else { saved.add(id); if (compared.size < 3) compared.add(id); }
  storeSaved();
  render();
  if (returnFocusToCard) (document.querySelector(`[data-save="${id}"]`) || savedToggle).focus();
  const dialogSave = dialog.querySelector('[data-dialog-save]');
  if (dialog.open && dialogSave && dialogSave.dataset.dialogSave === id) {
    dialogSave.textContent = saved.has(id) ? 'Remove from saved homes' : 'Save this home';
    dialogSave.setAttribute('aria-pressed', String(saved.has(id)));
  }
}

function openDetails(id) {
  const property = properties.find(item => item.id === id);
  if (!property) return;
  dialogContent.innerHTML = `<div class="dialog-visual property-visual has-photography visual-${property.visual}">${propertyPhoto(property, true)}<span class="visual-tag">${property.tag}</span><span class="visual-ref">${property.reference}</span></div><div class="dialog-content-body"><span>SOFIA / ${property.area.toUpperCase()}</span><h2 id="dialog-title">${property.name}</h2><p>${property.description}</p><div class="dialog-facts"><span>${property.type}</span><span>${property.beds} ${property.beds === 1 ? 'bedroom' : 'bedrooms'}</span><span>${property.size} m²</span></div><dl class="dialog-more"><div><dt>FLOOR</dt><dd>${property.floor}</dd></div><div><dt>OUTDOOR</dt><dd>${property.outdoor}</dd></div><div><dt>ASPECT</dt><dd>${property.orientation}</dd></div></dl><div class="viewing-prompt"><strong>On a viewing, ask about</strong><p>${property.question}</p></div><div class="dialog-price"><strong>${money(property.price)}</strong><button type="button" data-dialog-save="${property.id}" aria-pressed="${saved.has(property.id)}">${saved.has(property.id) ? 'Remove from saved homes' : 'Save this home'}</button></div><p><small>Reference photography for an illustrative property. Availability and details are not live.</small></p></div>`;
  if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
}

areaFilter.addEventListener('change', () => { state.area = areaFilter.value; render(); });
typeFilter.addEventListener('change', () => { state.type = typeFilter.value; render(); });
priceFilter.addEventListener('change', () => { state.price = priceFilter.value; render(); });
function clearFilters() {
  areaFilter.value = 'all'; typeFilter.value = 'all'; priceFilter.value = 'all';
  state.area = 'all'; state.type = 'all'; state.price = 'all'; state.savedOnly = false;
  render();
}
document.getElementById('clear-filters').addEventListener('click', clearFilters);
document.getElementById('empty-reset').addEventListener('click', clearFilters);
savedToggle.addEventListener('click', () => { state.savedOnly = !state.savedOnly; render(); });
listView.addEventListener('click', () => { state.view = 'list'; render(); });
mapView.addEventListener('click', () => { state.view = 'map'; render(); });

document.addEventListener('click', event => {
  const compareButton = event.target.closest('[data-compare]');
  if (compareButton) {
    const id = compareButton.dataset.compare;
    if (compared.has(id)) compared.delete(id);
    else if (saved.has(id) && compared.size < 3) compared.add(id);
    renderShortlist();
    document.querySelector(`[data-compare="${id}"]`)?.focus();
    return;
  }
  const saveButton = event.target.closest('[data-save]');
  if (saveButton) { toggleSaved(saveButton.dataset.save); return; }
  const detailButton = event.target.closest('[data-detail]');
  if (detailButton) { openDetails(detailButton.dataset.detail); return; }
  const mapButton = event.target.closest('[data-map]');
  if (mapButton) { state.selectedMapId = mapButton.dataset.map; render(); document.querySelector(`[data-map="${state.selectedMapId}"]`)?.focus(); return; }
  const dialogSave = event.target.closest('[data-dialog-save]');
  if (dialogSave) { toggleSaved(dialogSave.dataset.dialogSave); return; }
  const areaButton = event.target.closest('[data-area]');
  if (areaButton) {
    state.area = areaButton.dataset.area; areaFilter.value = state.area;
    state.savedOnly = false; state.view = 'list'; render();
    document.getElementById('listings').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    return;
  }
});

document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

const menuButton = document.querySelector('.menu-toggle');
const primaryNav = document.getElementById('primary-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  primaryNav.classList.toggle('is-open', open);
});
primaryNav.addEventListener('click', event => {
  if (event.target.closest('a')) {
    primaryNav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && primaryNav.classList.contains('is-open')) {
    primaryNav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.focus();
  }
});

const valuationArea = document.getElementById('valuation-area');
const valuationType = document.getElementById('valuation-type');
const valuationSize = document.getElementById('valuation-size');
const sizeOutput = document.getElementById('size-output');
const estimateRange = document.getElementById('estimate-range');
const indicativeRates = { Lozenets: 3500, Oborishte: 3900, Centre: 3400, Mladost: 2600, Boyana: 3100 };
function updateEstimate() {
  const size = Number(valuationSize.value);
  const multiplier = valuationType.value === 'House' ? 1.28 : valuationType.value === 'Loft' ? 1.1 : 1;
  const midpoint = indicativeRates[valuationArea.value] * size * multiplier;
  const low = Math.round(midpoint * .9 / 5000) * 5000;
  const high = Math.round(midpoint * 1.1 / 5000) * 5000;
  sizeOutput.textContent = `${size} m²`;
  estimateRange.textContent = `${money(low)} – ${money(high)}`;
}
[valuationArea, valuationType].forEach(control => control.addEventListener('change', updateEstimate));
valuationSize.addEventListener('input', updateEstimate);
document.getElementById('year').textContent = String(new Date().getFullYear());
updateEstimate();
render();
