const programmeData = {
  u7: { number:'01 / 03', title:'A brilliant first touch.', description:'Playful, ball rich sessions make football feel like an adventure. Players discover movement, coordination and the joy of belonging to a team.', focus:['Ball confidence','Movement','Playing together'], duration:'60 MIN', format:'PLAY + SKILL', schedule:[['TUE','Technical play','17:00'],['THU','Team games','17:00'],['SAT','Match play','10:00']] },
  u10: { number:'02 / 03', title:'Ready for the next play.', description:'Players grow their technique and begin to read the game. Small sided challenges bring decision making, teamwork and creativity into every session.', focus:['First touch','Game awareness','Team shape'], duration:'75 MIN', format:'SKILL + GAME', schedule:[['MON','Technical practice','18:00'],['WED','Small sided games','18:00'],['SAT','Match play','11:30']] },
  u13: { number:'03 / 03', title:'Make every moment count.', description:'A more focused training rhythm supports ambition with skill work, game understanding and the resilience to keep improving.', focus:['Tactical thinking','Position play','Match preparation'], duration:'90 MIN', format:'GAME + REVIEW', schedule:[['MON','Individual development','18:30'],['THU','Team training','18:30'],['SUN','Match day','10:30']] }
};
const ageTabs = document.querySelectorAll('.age-tab');
ageTabs.forEach((tab) => tab.addEventListener('click', () => {
  const data = programmeData[tab.dataset.age];
  ageTabs.forEach((item) => { const active = item === tab; item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', String(active)); });
  document.querySelector('#group-number').textContent = data.number;
  document.querySelector('#group-title').textContent = data.title;
  document.querySelector('#group-description').textContent = data.description;
  document.querySelector('#group-focus').replaceChildren(...data.focus.map((value) => { const chip=document.createElement('span'); chip.textContent=value; return chip; }));
  document.querySelector('#group-duration').textContent = data.duration;
  document.querySelector('#group-format').textContent = data.format;
  document.querySelector('#group-schedule').replaceChildren(...data.schedule.map(([day,activity,time]) => { const row=document.createElement('div'); const label=document.createElement('b'); const name=document.createElement('span'); const hour=document.createElement('strong'); label.textContent=day; name.textContent=activity; hour.textContent=time; row.append(label,name,hour); return row; }));
}));
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') !== 'true'; menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); primaryNav.classList.toggle('is-open', open); });
primaryNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { primaryNav.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label','Open navigation'); }));
document.querySelector('#year').textContent = new Date().getFullYear();

const kitItems = [...document.querySelectorAll('.kit-item')];
const updateKit = () => {
  const ready = kitItems.filter((item) => item.checked).length;
  document.querySelector('#kit-count').textContent = `${ready} / ${kitItems.length}`;
  document.querySelector('#kit-status').textContent = ready === kitItems.length ? 'Bag packed. Enjoy the session.' : 'Ready when you are.';
};
kitItems.forEach((item) => item.addEventListener('change', updateKit));
document.querySelector('#kit-reset').addEventListener('click', () => {
  kitItems.forEach((item) => { item.checked = false; });
  updateKit();
});
