const ritualGuide = {
  fine: { morning:{name:'The light touch',description:'Start with one or two drops. Warm them between your palms, then smooth over the mid lengths and ends for a gentle finish.',steps:['Begin with a small amount.','Work through the lengths and ends.','Add only what feels right for you.']},evening:{name:'The gentle reset',description:'Before washing, take a quiet moment to massage the pre-wash oil into your scalp, then continue with your usual wash routine.',steps:['Part dry hair into loose sections.','Massage a few drops over the scalp.','Wash thoroughly as you usually would.']},both:{name:'The balanced pause',description:'A light touch in the morning and a slower pre-wash moment when your hair asks for more.',steps:['Use one or two drops for a daytime finish.','Keep application to the lengths and ends.','Return to a slower ritual before washing.']}},
  dry: { morning:{name:'The soft finish',description:'Warm a few drops in your palms and smooth through the mid lengths and ends to bring a softer feel to your day.',steps:['Begin with a few drops.','Focus on areas that feel dry.','Add more only if your hair asks for it.']},evening:{name:'The slow soak',description:'Make the pre-wash moment your own. Massage a few drops over the scalp, take your time, then shampoo thoroughly.',steps:['Part dry hair into loose sections.','Massage a few drops over the scalp.','Wash thoroughly as usual.']},both:{name:'The nourishing rhythm',description:'Keep a little oil close for everyday softness, with a slower pre-wash ritual when you have time.',steps:['Use a small amount to finish styling.','Revisit the lengths when they feel dry.','Enjoy a longer pre-wash ritual when you can.']}},
  balanced: { morning:{name:'The everyday glow',description:'A couple of drops can give the ends a considered finish without changing the routine you already love.',steps:['Warm two drops between your palms.','Glide over the ends.','Let the rest of your routine stay simple.']},evening:{name:'The evening pause',description:'Let hair care mark the transition out of your day with a gentle pre-wash scalp massage.',steps:['Part dry hair into loose sections.','Massage a few drops over the scalp.','Continue with your usual wash.']},both:{name:'The everyday ritual',description:'Make Root Ritual a small, flexible part of your week: a light finishing touch or a slower pre-wash pause.',steps:['Start small each time.','Use more only where it feels helpful.','Keep the moment yours.']}}
};
const choiceState = { hair:'fine', moment:'morning' };
[['hair-options','hair'],['moment-options','moment']].forEach(([id,key]) => {
  const group = document.getElementById(id);
  group.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => {
    choiceState[key] = button.dataset.value;
    group.querySelectorAll('button').forEach((item) => { const selected = item === button; item.classList.toggle('is-selected', selected); item.setAttribute('aria-pressed', String(selected)); });
    const result = ritualGuide[choiceState.hair][choiceState.moment];
    document.getElementById('ritual-name').textContent = result.name;
    document.getElementById('ritual-description').textContent = result.description;
    document.getElementById('step-one').textContent = result.steps[0];
    document.getElementById('step-two').textContent = result.steps[1];
    document.getElementById('step-three').textContent = result.steps[2];
    updateProductRecommendation();
  }));
});
const menuButton = document.querySelector('.menu-button');
const mobileNav = document.getElementById('mobile-nav');
function setNavigationOpen(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
}
menuButton.addEventListener('click', () => setNavigationOpen(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setNavigationOpen(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setNavigationOpen(false);
    menuButton.focus();
  }
});
window.matchMedia('(min-width:901px)').addEventListener('change', event => {
  if (event.matches) setNavigationOpen(false);
});
document.getElementById('year').textContent = new Date().getFullYear();

const productDetails = {
  everyday: {
    label: 'SELECTED PRODUCT / CONCEPT 01', title: 'Everyday Hair Oil',
    description: 'The flexible bottle for a simple finishing step. It gives mid lengths and ends a soft, considered feel without adding a whole new routine.',
    size: '50 ml', ingredients: 'Jojoba, argan and rosemary',
    usage: 'Warm 1–3 drops in your palms. Smooth lightly through mid lengths and ends on dry or damp hair.'
  },
  scalp: {
    label: 'SELECTED PRODUCT / CONCEPT 02', title: 'Pre-Wash Scalp Oil',
    description: 'A slower wash-day step for a gentle scalp massage before shampoo. Its finish is designed to be washed out rather than worn through the day.',
    size: '50 ml', ingredients: 'Jojoba, sunflower and rosemary leaf',
    usage: 'Part dry hair, apply a few drops to the scalp, and massage gently. Wash out thoroughly with your usual shampoo.'
  },
  ends: {
    label: 'SELECTED PRODUCT / CONCEPT 03', title: 'Ends & Shine Oil',
    description: 'A small, light finishing bottle made for the tips that need a little extra polish without weighing down the rest of the hair.',
    size: '30 ml', ingredients: 'Jojoba, argan and vitamin E',
    usage: 'Begin with one drop on your palms. Touch only the ends after styling, adding more only if needed.'
  }
};
const productButtons = [...document.querySelectorAll('.product-select')];
const selectProduct = (key) => {
  const product = productDetails[key];
  productButtons.forEach((button) => {
    const selected = button.dataset.product === key;
    button.setAttribute('aria-pressed', String(selected));
    button.closest('.product-card').classList.toggle('is-selected', selected);
  });
  document.querySelector('.product-detail-label').textContent = product.label;
  document.getElementById('product-title').textContent = product.title;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-size').textContent = product.size;
  document.getElementById('product-ingredients').textContent = product.ingredients;
  document.getElementById('product-usage').textContent = product.usage;
};
productButtons.forEach((button) => button.addEventListener('click', () => selectProduct(button.dataset.product)));
const productMatch = {
  fine: { morning: 'ends', evening: 'scalp', both: 'everyday' },
  dry: { morning: 'everyday', evening: 'scalp', both: 'everyday' },
  balanced: { morning: 'ends', evening: 'scalp', both: 'everyday' }
};
function updateProductRecommendation() {
  const key = productMatch[choiceState.hair][choiceState.moment];
  const link = document.getElementById('routine-product');
  link.textContent = productDetails[key].title + ' ↗';
  link.dataset.product = key;
}
document.getElementById('routine-product').addEventListener('click', (event) => {
  selectProduct(event.currentTarget.dataset.product);
});
updateProductRecommendation();
