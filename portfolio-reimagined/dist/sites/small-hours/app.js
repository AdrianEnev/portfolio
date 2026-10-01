const shows = [
  {title:'The Quiet City',poster:'THE<br>QUIET<br>CITY',date:'04 October · 19:30',posterDate:'04 OCTOBER · 19:30',description:'In a city that never stops talking, two strangers discover the courage to listen. A tender, electric portrait of the things we leave unsaid.',synopsis:'An original chamber drama in three scenes. Two commuters miss the final tram and begin an unlikely conversation that lasts until morning.',cast:'Two performers · one live sound artist',language:'Bulgarian · English surtitles',age:'Ages 14+',format:'90 minutes · no interval',genre:'Drama',duration:'90 minutes',color:'#852e28',price:22,unavailable:[2,5,14,23,30]},
  {title:'After the Rain',poster:'AFTER<br>THE<br>RAIN',date:'11 October · 19:30',posterDate:'11 OCTOBER · 19:30',description:'One long summer ends in a downpour. Three friends return to the place where everything changed, and find that memory has its own weather.',synopsis:'A new play about friendship, the stories families keep and the hard work of returning home. A restrained set moves from kitchen to shoreline.',cast:'Three performers',language:'Bulgarian',age:'Ages 12+',format:'75 minutes · no interval',genre:'New writing',duration:'75 minutes',color:'#3e5361',price:20,unavailable:[3,8,11,17,25,28]},
  {title:'Night Letters',poster:'NIGHT<br>LETTERS',date:'18 October · 20:00',posterDate:'18 OCTOBER · 20:00',description:'A late-night exchange of poems, piano and stories. Follow a trail of letters through all the lives they touched.',synopsis:'Spoken letters and live piano meet in a collection of intimate stories. Each letter opens a new room, a new voice and a new memory.',cast:'Two readers · one pianist',language:'Bulgarian · bilingual programme notes',age:'Ages 12+',format:'80 minutes · no interval',genre:'Poetry & music',duration:'80 minutes',color:'#5d4b58',price:24,unavailable:[1,6,15,22,31]}
];
let currentShow=0;
const selected=new Set();
const seatGrid=document.querySelector('#seat-grid');
const letters=['A','B','C','D'];
function renderSeats(){
  seatGrid.innerHTML=''; selected.clear();
  for(let n=0;n<32;n++){
    const label=`${letters[Math.floor(n/8)]}${n%8+1}`;
    const btn=document.createElement('button');
    btn.type='button';btn.className='seat';btn.textContent=n%8+1;btn.setAttribute('aria-label',`Seat ${label}`);btn.setAttribute('aria-pressed','false');
    if(shows[currentShow].unavailable.includes(n)){btn.disabled=true;btn.setAttribute('aria-label',`Seat ${label}, unavailable`)}
    else btn.addEventListener('click',()=>{if(selected.has(label)){selected.delete(label);btn.setAttribute('aria-pressed','false')}else{selected.add(label);btn.setAttribute('aria-pressed','true')}updateSummary()});
    seatGrid.append(btn);
  }
  updateSummary();
}
function updateSummary(){
  document.querySelector('#selected-seat-label').textContent=selected.size?[...selected].join(', '):'None yet';
  document.querySelector('#ticket-count').textContent=selected.size;
  document.querySelector('#total-price').textContent=`€${selected.size*shows[currentShow].price}`;
}
document.querySelectorAll('.show-option').forEach(button=>button.addEventListener('click',()=>{
  currentShow=Number(button.dataset.show);const show=shows[currentShow];
  document.querySelectorAll('.show-option').forEach(option=>{const active=option===button;option.classList.toggle('is-active',active);option.setAttribute('aria-pressed',String(active))});
  document.querySelector('#poster').style.background=show.color;
  document.querySelector('#poster-title').innerHTML=show.poster;
  document.querySelector('#poster-date').textContent=show.posterDate;
  document.querySelector('#show-title').textContent=show.title;
  document.querySelector('#show-description').textContent=show.description;
  document.querySelector('#show-genre').textContent=show.genre;
  document.querySelector('#show-duration').textContent=show.duration;
  document.querySelector('#show-price').textContent=`€${show.price}`;
  document.querySelector('#seat-unit-price').textContent=`€${show.price}`;
  document.querySelector('#notes-heading').textContent=show.title;
  document.querySelector('#notes-synopsis').textContent=show.synopsis;
  document.querySelector('#notes-cast').textContent=show.cast;
  document.querySelector('#notes-language').textContent=show.language;
  document.querySelector('#notes-age').textContent=show.age;
  document.querySelector('#notes-format').textContent=show.format;
  document.querySelector('#seat-show-title').textContent=show.title;
  document.querySelector('#seat-show-date').textContent=show.date;
  renderSeats();
}));
renderSeats();

const mobileMenuButton=document.querySelector('.mobile-menu-toggle');
const mobileHeaderNav=document.querySelector('#mobile-header-nav');
function setMobileHeaderOpen(open){
  mobileMenuButton.setAttribute('aria-expanded',String(open));
  mobileMenuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  mobileHeaderNav.classList.toggle('is-open',open);
}
mobileMenuButton.addEventListener('click',()=>setMobileHeaderOpen(mobileMenuButton.getAttribute('aria-expanded')!=='true'));
mobileHeaderNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMobileHeaderOpen(false)));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mobileMenuButton.getAttribute('aria-expanded')==='true'){setMobileHeaderOpen(false);mobileMenuButton.focus()}});
window.matchMedia('(min-width:651px)').addEventListener('change',event=>{if(event.matches)setMobileHeaderOpen(false)});
