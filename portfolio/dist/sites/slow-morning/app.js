const rooms={nest:{name:'The Nest',size:'23 m²',beds:'Queen bed',view:'Courtyard',features:'Rain shower · reading nook',rate:92,capacity:2},garden:{name:'The Garden',size:'32 m²',beds:'King bed',view:'Garden',features:'Balcony · lounge chair',rate:124,capacity:2},loft:{name:'The Loft',size:'48 m²',beds:'King + sofa bed',view:'City rooftops',features:'Separate lounge · kitchenette',rate:178,capacity:4}};
const selected=new Set();
const checkIn=document.querySelector('#check-in'),checkOut=document.querySelector('#check-out'),guestInput=document.querySelector('#guests'),breakfastInput=document.querySelector('#breakfast');
const today=new Date();today.setHours(12,0,0,0);const tomorrow=new Date(today);tomorrow.setDate(today.getDate()+1);const nextDay=new Date(today);nextDay.setDate(today.getDate()+2);
const formatDate=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
checkIn.min=formatDate(today);checkIn.value=formatDate(tomorrow);checkOut.min=formatDate(nextDay);checkOut.value=formatDate(nextDay);
function nights(){const start=new Date(`${checkIn.value}T12:00:00`),end=new Date(`${checkOut.value}T12:00:00`);return Math.round((end-start)/86400000)}
function render(){
  const count=nights(),guests=Number(guestInput.value),breakfast=Number(breakfastInput.value);
  const valid=Number.isFinite(count)&&count>0;
  document.querySelector('#date-message').textContent=valid?`${count} ${count===1?'night':'nights'} · ${guests} ${guests===1?'guest':'guests'} · ${breakfast?'breakfast added':'room only'} · indicative rates shown.`:'Choose a check-in date and a later check-out date.';
  const content=document.querySelector('#comparison-content');content.innerHTML='';
  if(!selected.size){content.innerHTML='<p class="empty-compare">Choose up to three rooms to compare their space, features and estimated stay rates.</p>';return}
  for(const id of selected){
    const room=rooms[id],card=document.createElement('article'),available=guests<=room.capacity;
    card.className='compare-item';
    const roomPrice=valid?`€${room.rate*count}`:'Choose dates';
    const breakfastPrice=breakfast?(valid?`€${breakfast*guests*count}`:'Choose dates'):'Not added';
    const nightLabel=valid?(count===1?'one night':`${count} nights`):'your stay';
    card.innerHTML=`<h4>${room.name}</h4><dl><dt>Space</dt><dd>${room.size}</dd><dt>Sleeping</dt><dd>${room.beds}</dd><dt>View</dt><dd>${room.view}</dd><dt>Details</dt><dd>${room.features}</dd><dt>Room for ${nightLabel}</dt><dd>${roomPrice}</dd><dt>Breakfast${breakfast?' for '+guests:''}</dt><dd>${breakfastPrice}</dd></dl><div class="rate"><span>${!available?'Too many guests for this room':valid?`${count} ${count===1?'night':'nights'} · indicative total`:'Choose valid dates'}</span><strong>${valid&&available?`€${(room.rate+breakfast*guests)*count}`:'—'}</strong></div>`;
    content.append(card);
  }
}
document.querySelectorAll('.compare-button').forEach(button=>button.addEventListener('click',()=>{const id=button.dataset.room;if(selected.has(id))selected.delete(id);else selected.add(id);const active=selected.has(id);button.setAttribute('aria-pressed',String(active));button.textContent=active?'✓ Comparing':'+ Compare';render()}));
checkIn.addEventListener('change',()=>{const min=new Date(`${checkIn.value}T12:00:00`);min.setDate(min.getDate()+1);if(Number.isFinite(min.getTime())){checkOut.min=formatDate(min);if(checkOut.value<checkOut.min)checkOut.value=checkOut.min}render()});checkOut.addEventListener('change',render);guestInput.addEventListener('change',render);breakfastInput.addEventListener('change',render);render();

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
window.matchMedia('(min-width:701px)').addEventListener('change',event=>{if(event.matches)setMobileHeaderOpen(false)});
