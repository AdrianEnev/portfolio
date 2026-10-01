const serviceMeta = {
  'The haircut': { minutes: 45, price: '€28' },
  'Beard & detail': { minutes: 30, price: '€18' },
  'The full ritual': { minutes: 75, price: '€42' },
  'The tidy-up': { minutes: 20, price: '€15' },
  'The buzz cut': { minutes: 30, price: '€20' }
};
const sampleSlots = {
  Alex: { Tuesday: ['10:00','12:30','15:00'], Wednesday: ['09:30','13:00','16:00'], Friday: ['11:00','14:30','17:00'] },
  Niko: { Tuesday: ['11:30','14:00','17:30'], Wednesday: ['10:00','12:30','15:30'], Friday: ['09:30','13:30','16:30'] },
  Mila: { Tuesday: ['09:30','13:30','16:30'], Wednesday: ['11:00','14:00','17:00'], Friday: ['10:30','12:00','15:00'] }
};
const selections = { service: 'The haircut', barber: 'Alex', day: 'Tuesday', time: '10:00' };
const updateSummary = () => {
  const meta = serviceMeta[selections.service];
  document.getElementById('summary-service').textContent = selections.service;
  document.getElementById('summary-barber').textContent = selections.barber;
  document.getElementById('summary-slot').textContent = `${selections.day} at ${selections.time}`;
  document.getElementById('summary-duration').textContent = `${meta.minutes} min`;
  document.getElementById('summary-price').textContent = meta.price;
};
const choose = (container, button, key) => {
  selections[key] = button.dataset.value;
  container.querySelectorAll('button').forEach((choice) => {
    const selected = choice === button;
    choice.classList.toggle('is-selected', selected);
    choice.setAttribute('aria-pressed', String(selected));
  });
  if (key === 'barber' || key === 'day') renderTimes();
  updateSummary();
};
const renderTimes = () => {
  const container = document.getElementById('time-options');
  const slots = sampleSlots[selections.barber][selections.day];
  selections.time = slots[0];
  container.replaceChildren(...slots.map((time, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = index === 0 ? 'choice is-selected' : 'choice';
    button.dataset.value = time;
    button.setAttribute('aria-pressed', String(index === 0));
    button.textContent = time;
    button.addEventListener('click', () => choose(container, button, 'time'));
    return button;
  }));
};
[['service-options','service'], ['barber-options','barber'], ['day-options','day']].forEach(([id, key]) => {
  const container = document.getElementById(id);
  container.querySelectorAll('button').forEach((button) =>
    button.addEventListener('click', () => choose(container, button, key))
  );
});
renderTimes();
document.querySelectorAll('.service-list [data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    const choice = [...document.querySelectorAll('#service-options button')].find((button) => button.dataset.value === link.dataset.service);
    if (choice) choose(document.getElementById('service-options'), choice, 'service');
  });
});
const careGuides = {
  short: { title: 'Give the shape room.', description: 'Towel dry, then use a pea-sized amount of matte product. Work from the back forward so the front keeps its natural movement.', timing: 'A trim every 4–6 weeks keeps the outline crisp.' },
  beard: { title: 'Keep the lines intentional.', description: 'Comb in the direction of growth, then use a little beard oil through the longer areas. Clean the neckline gently between appointments.', timing: 'A shape-up every 2–3 weeks keeps the edges considered.' },
  textured: { title: 'Let texture do the work.', description: 'Apply a light styling cream to damp hair, scrunch gently, and let it air dry when possible. Avoid brushing out the shape once dry.', timing: 'A cut every 6–8 weeks helps the shape stay easy to style.' }
};
const careOptions = document.getElementById('care-options');
careOptions.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => {
  careOptions.querySelectorAll('button').forEach((item) => {
    const selected = item === button;
    item.classList.toggle('is-selected', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  const guide = careGuides[button.dataset.care];
  document.getElementById('care-index').textContent = 'YOUR GUIDE / ' + ({short:'01',beard:'02',textured:'03'})[button.dataset.care];
  document.getElementById('care-title').textContent = guide.title;
  document.getElementById('care-description').textContent = guide.description;
  document.getElementById('care-timing').textContent = guide.timing;
}));
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.getElementById('mobile-menu');
menuButton.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
  mobileMenu.hidden = !opening;
});
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.hidden = true;
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Open menu');
}));
document.getElementById('year').textContent = new Date().getFullYear();
