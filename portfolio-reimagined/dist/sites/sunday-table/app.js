const menu = {
  dinner: [
    {name:'Roasted squash & burrata',detail:'Warm squash, basil oil, toasted pumpkin seeds, and whipped burrata.',price:10,icon:'🎃',bg:'#d6bf94',plate:'#f8e7c8',food:'#eea658',meatFree:true},
    {name:'Sunday kind of pasta',detail:'Slow tomato sauce, whipped ricotta, parmesan, and plenty of herbs.',price:14,icon:'🍅',bg:'#d6a680',plate:'#f5deae',food:'#c95639',meatFree:true},
    {name:'Charred garden greens',detail:'Seasonal greens, lemony yoghurt, and crunchy chilli oil.',price:9,icon:'🥬',bg:'#aab391',plate:'#f4e7cc',food:'#567145',meatFree:true},
    {name:'Golden chicken',detail:'Roasted with garlic, lemon, crispy potatoes, and pan juices.',price:17,icon:'🍋',bg:'#e6bf78',plate:'#f7e8cc',food:'#b77b3c'},
    {name:'Market fish',detail:"Today's catch with warm tomato broth and herbs from the garden.",price:18,icon:'🐟',bg:'#a5b2a3',plate:'#f4ecda',food:'#7b9c96'},
    {name:'Last spoon tiramisu',detail:'Espresso, soft cream, cocoa, and absolutely no sharing required.',price:7,icon:'☕',bg:'#bea284',plate:'#f7e8d2',food:'#8f6a4f',meatFree:true}
  ],
  lunch: [
    {name:'Tomato on toast',detail:'Slow-roasted tomatoes, whipped feta, basil, grilled sourdough.',price:8,icon:'🍅',bg:'#d6a77d',plate:'#f7e7c8',food:'#cb5136',meatFree:true},
    {name:'Big green bowl',detail:'Leaves, herbs, crispy chickpeas, warm grains, and green dressing.',price:10,icon:'🥬',bg:'#aab792',plate:'#f5ecd7',food:'#6a804c',meatFree:true},
    {name:"Sunday chicken sandwich",detail:'Herb mayo, crisp lettuce, pickles, and a soft sesame bun.',price:11,icon:'🥪',bg:'#e3b47f',plate:'#f8ebd4',food:'#b87942'},
    {name:'Lemon & olive cake',detail:'A little something sweet with softly whipped cream.',price:6,icon:'🍋',bg:'#e8c880',plate:'#fff0d1',food:'#e4ad55',meatFree:true}
  ],
  drinks: [
    {name:'Sunday spritz',detail:'Bitter orange, bubbles, and a sunny slice of citrus.',price:7,icon:'🍊',bg:'#e7b078',plate:'#f8e8d6',food:'#d1773e',meatFree:true},
    {name:'Garden tonic',detail:'Cucumber, basil, elderflower, and plenty of ice.',price:6,icon:'🌿',bg:'#aebd99',plate:'#f3eee0',food:'#8fa478',meatFree:true},
    {name:'House lemonade',detail:'Fresh lemon, not too sweet, served very cold.',price:5,icon:'🍋',bg:'#e6d18f',plate:'#fff2d7',food:'#edc16b',meatFree:true}
  ]
};

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
navToggle.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navToggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}));

function wireTabs(tabList, callback) {
  const tabs = [...tabList.querySelectorAll('[role="tab"]')];
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      tabs[next].focus(); activate(tabs[next]);
    });
  });
  function activate(selected) {
    tabs.forEach(tab => {
      const active = tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    callback(selected);
  }
}

wireTabs(document.querySelector('.mode-tabs'), selected => {
  const reserve = selected.id === 'reserve-tab';
  document.getElementById('reserve-panel').hidden = !reserve;
  document.getElementById('pickup-panel').hidden = reserve;
});

const menuGrid = document.getElementById('menu-grid');
const basket = new Map();
let activeMenu = 'dinner';
const meatFreeFilter = document.getElementById('meat-free-filter');
wireTabs(document.querySelector('.menu-controls'), selected => { activeMenu = selected.dataset.menu; renderMenu(); });
meatFreeFilter.addEventListener('change', renderMenu);
// Small ink illustrations make the printed menu feel like part of the bistro.
const ingredientDrawings = {
  '🎃': '<path d="M16 21C8 24 7 39 15 47C22 53 44 53 51 43C58 34 53 23 45 21C36 16 25 17 16 21Z" fill="#dfa553"/><path d="M29 21C20 29 21 43 27 50M35 20C44 28 43 42 38 50M31 19C31 12 35 9 39 10M31 18C20 10 15 13 17 18C22 22 27 22 31 18Z"/>',
  '🍅': '<path d="M16 26C7 35 14 50 25 52C39 58 56 48 54 34C53 24 45 18 35 22C26 17 18 19 16 26Z" fill="#c96042"/><path d="M33 27L25 15L32 19L37 10L37 19L46 17L38 26L45 28L34 30L25 27ZM19 35C16 39 18 43 22 45" fill="none"/>',
  '🥬': '<path d="M32 55C14 47 7 28 12 16C21 12 28 15 31 22C36 12 47 10 52 15C60 32 48 49 32 55Z" fill="#86986a"/><path d="M32 55L32 24M32 43L19 28M32 39L45 26M32 48L49 35"/>',
  '🍋': '<path d="M11 36C13 21 22 15 34 14L42 10L47 18C57 31 48 44 35 48L25 53L20 46C14 44 10 42 11 36Z" fill="#e5c161"/><path d="M20 38C19 32 25 25 31 24M39 15C42 9 51 8 56 12C53 20 48 22 43 20"/>',
  '🐟': '<path d="M10 35C24 18 41 18 50 30L60 22L59 46L50 39C37 51 22 51 10 35Z" fill="#a4b5a4"/><path d="M27 23C32 15 40 14 41 21M28 47L39 53L44 45M25 27C20 34 21 41 26 44"/><circle cx="16" cy="33" r="1.9" fill="#66533c" stroke="none"/>',
  '☕': '<path d="M13 25H44L42 45C39 50 20 50 16 44Z" fill="#ede0c5"/><path d="M44 28C59 25 58 42 44 41M10 53H48M21 17C17 12 25 9 22 5M31 17C28 12 36 9 33 5"/><ellipse cx="29" cy="25" rx="15" ry="4" fill="#977250"/>',
  '🥪': '<path d="M11 39L32 14L56 37L36 56Z" fill="#d1ab76"/><path d="M10 35L31 10L54 32L35 51Z" fill="#ecce94"/><path d="M11 38L35 54L56 36M15 33L34 47L49 31M17 30L29 16M23 34L34 22M29 38L40 28"/>',
  '🍊': '<circle cx="33" cy="34" r="23" fill="#dea45c"/><circle cx="33" cy="34" r="17" fill="#edc08b"/><path d="M33 17V51M16 34H50M21 22L45 46M21 46L45 22"/><circle cx="33" cy="34" r="3" fill="#f5e4c4"/>',
  '🌿': '<path d="M26 56C27 40 36 20 42 9M31 43C14 43 11 33 15 28C30 26 36 32 31 43ZM36 29C49 34 58 29 56 21C44 16 38 21 36 29ZM40 18C27 20 19 13 22 7C34 4 40 9 40 18Z" fill="#96aa7a"/>'
};
function dishIllustration(icon) {
  return `<svg class="dish-illustration" viewBox="0 0 68 68" focusable="false" aria-hidden="true"><g fill="none" stroke="#6d593e" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ingredientDrawings[icon] || ingredientDrawings['🌿']}</g></svg>`;
}
function renderMenu(category) {
  const visible = menu[activeMenu].map((dish,index) => ({dish,index})).filter(({dish}) => !meatFreeFilter.checked || dish.meatFree);
  document.getElementById('menu-count').textContent = `${visible.length} ${visible.length === 1 ? 'item' : 'items'} shown`;
  menuGrid.innerHTML = visible.map(({dish,index}) => `
    <article class="dish-card">
      <div class="dish-art" style="--dish-bg:${dish.bg};--dish-plate:${dish.plate};--dish-food:${dish.food}" aria-hidden="true"><span>${dishIllustration(dish.icon)}</span></div>
      <div class="dish-card-content"><div class="dish-card-top"><h3>${dish.name}</h3><span class="price">€${dish.price}</span></div><p>${dish.detail}</p><div class="dish-card-actions">${dish.meatFree && activeMenu !== 'drinks' ? '<span class="dish-tag">No meat or fish</span>' : '<span></span>'}<button type="button" data-dish="${activeMenu}-${index}">Add to pickup +</button></div></div>
    </article>`).join('');
}
menuGrid.addEventListener('click', event => {
  const button = event.target.closest('[data-dish]');
  if (!button) return;
  const [kind, index] = button.dataset.dish.split('-');
  addToBasket(`${kind}-${index}`);
  button.textContent = 'Added ✓ Add another';
});
renderMenu();
function addToBasket(key) {
  const [kind, index] = key.split('-');
  const item = menu[kind]?.[Number(index)];
  if (!item) return;
  basket.set(key, {item, count:(basket.get(key)?.count || 0) + 1});
  updateBasket();
}
document.getElementById('add-table-edit').addEventListener('click', event => {
  ['dinner-0','dinner-1','dinner-3','dinner-5'].forEach(addToBasket);
  document.getElementById('pickup-tab').click();
  event.currentTarget.textContent = 'Added to your basket ✓';
  document.getElementById('pickup-result').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'center'});
});
function updateBasket() {
  const result = document.getElementById('pickup-result');
  const items = [...basket.entries()];
  const count = items.reduce((sum, [,entry]) => sum + entry.count, 0);
  const total = items.reduce((sum, [,entry]) => sum + entry.item.price * entry.count, 0);
  if (!count) { result.textContent = 'Your basket is empty. Explore the menu to add something delicious.'; return; }
  result.innerHTML = `<strong>${count} ${count === 1 ? 'dish' : 'dishes'} in your pickup basket</strong><div class="basket-items">${items.map(([key,entry]) => `<div class="basket-row"><span>${entry.item.name}</span><div class="basket-quantity"><button type="button" data-quantity="${key}" data-step="-1" aria-label="Remove one ${entry.item.name}">−</button><span aria-label="Quantity ${entry.count}">${entry.count}</span><button type="button" data-quantity="${key}" data-step="1" aria-label="Add one ${entry.item.name}">+</button></div><strong>€${entry.item.price * entry.count}</strong></div>`).join('')}</div><div class="basket-total">Estimated total: €${total}</div><small>Basket planning only. Menu, prices, collection times, and ingredients are illustrative; no order is placed.</small>`;
};
document.getElementById('pickup-result').addEventListener('click', event => {
  const button = event.target.closest('[data-quantity]');
  if (!button) return;
  const key = button.dataset.quantity;
  const entry = basket.get(key);
  if (!entry) return;
  const next = entry.count + Number(button.dataset.step);
  if (next <= 0) basket.delete(key); else basket.set(key, {...entry,count:next});
  updateBasket();
  document.querySelector(`[data-quantity="${key}"][data-step="${button.dataset.step}"]`)?.focus();
});

const dateInput = document.getElementById('reserve-date');
const now = new Date();
const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0,10);
dateInput.min = today;
dateInput.value = today;
document.getElementById('reserve-form').addEventListener('submit', event => {
  event.preventDefault();
  const date = new Date(`${dateInput.value}T12:00:00`);
  const result = document.getElementById('reserve-result');
  if (!dateInput.value || Number.isNaN(date.getTime()) || dateInput.value < today) {
    result.textContent = 'Please choose today or a future date.'; return;
  }
  if (date.getDay() === 1) {
    result.textContent = 'Our kitchen takes a breather on Mondays. Choose another day to explore table times.'; return;
  }
  const guests = document.getElementById('reserve-guests').value;
  const time = document.getElementById('reserve-time').value;
  const clock = [Number(time.slice(0,2)) - 1, Number(time.slice(0,2)), Number(time.slice(0,2)) + 1].map(hour => `${String(hour).padStart(2,'0')}:00`);
  const prettyDate = new Intl.DateTimeFormat('en-GB',{weekday:'long',day:'numeric',month:'long'}).format(date);
  result.innerHTML = `<p><strong>${prettyDate} for ${guests} ${guests === '1' ? 'guest' : 'guests'}</strong> · Suggested seating around your preferred time:</p><div class="suggested-times">${clock.map(slot => `<span>${slot}</span>`).join('')}</div><small>Times are an illustration. Speak with the team to confirm a table.</small>`;
});
document.getElementById('year').textContent = new Date().getFullYear();
