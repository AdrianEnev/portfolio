const meals={
  tuesday:{time:'TUESDAY · 12:30–14:00',title:'Roasted pumpkin & chickpea stew',description:'A warming bowl with tomatoes, spinach and lemon, served with crusty bread.',side:'Carrot slaw · seasonal fruit',diet:'Plant-based · bread contains gluten',role:'Prep and cooking shifts'},
  thursday:{time:'THURSDAY · 12:30–14:00',title:'White bean & herb soup',description:'Slow-simmered beans with vegetables and fresh herbs, finished with a spoon of bright green oil.',side:'Cucumber salad · baked apples',diet:'Plant-based · contains celery',role:'Welcome and packing shifts'},
  saturday:{time:'SATURDAY · 13:00–15:00',title:'Tomato & barley pilaf',description:'A generous shared pot of barley, roast vegetables and herbs, with lemon on the side.',side:'Leaf salad · orange slices',diet:'Plant-based · contains gluten',role:'Cooking and welcome shifts'}
};
document.querySelectorAll('.menu-day').forEach(button=>button.addEventListener('click',()=>{const meal=meals[button.dataset.meal];document.querySelectorAll('.menu-day').forEach(item=>{const active=item===button;item.classList.toggle('is-active',active);item.setAttribute('aria-pressed',String(active))});document.querySelector('#meal-time').textContent=meal.time;document.querySelector('#meal-title').textContent=meal.title;document.querySelector('#meal-description').textContent=meal.description;document.querySelector('#meal-side').textContent=meal.side;document.querySelector('#meal-diet').textContent=meal.diet;document.querySelector('#meal-role').textContent=meal.role}));
const shifts=[
  {id:'tue-prep',day:'Tuesday',time:'09:00–11:00',role:'Prep',title:'Morning prep',description:'Wash, chop and get the kitchen ready for a good day.',spots:3},
  {id:'tue-cook',day:'Tuesday',time:'11:00–14:00',role:'Cooking',title:'Lunch kitchen',description:'Cook a warm seasonal meal alongside neighbours.',spots:2},
  {id:'thu-welcome',day:'Thursday',time:'12:00–14:00',role:'Welcome',title:'A warm welcome',description:'Greet guests and make the room feel like home.',spots:4},
  {id:'thu-pack',day:'Thursday',time:'15:00–17:00',role:'Packing',title:'Meals to go',description:'Pack portions with care for neighbours beyond the table.',spots:2},
  {id:'sat-cook',day:'Saturday',time:'10:00–13:00',role:'Cooking',title:'Weekend potluck',description:'Bring the Saturday kitchen to life with the team.',spots:5},
  {id:'sat-welcome',day:'Saturday',time:'13:00–15:00',role:'Welcome',title:'The long table',description:'Set places, share stories and keep the tea flowing.',spots:3}
];
const filters={day:'all',role:'all'},saved=new Set();
function render(){const visible=shifts.filter(s=>(filters.day==='all'||s.day===filters.day)&&(filters.role==='all'||s.role===filters.role));const list=document.querySelector('#shift-list');list.innerHTML='';document.querySelector('#results-count').textContent=`${visible.length} sample ${visible.length===1?'shift':'shifts'} to explore`;if(!visible.length){list.innerHTML='<p class="no-results">No shifts match those filters. Try another day or role.</p>'}for(const shift of visible){const card=document.createElement('article');card.className='shift-card';const active=saved.has(shift.id);card.innerHTML=`<div class="shift-meta"><span>${shift.day.toUpperCase()} / ${shift.time}</span><span>${shift.role.toUpperCase()}</span></div><h3>${shift.title}</h3><p>${shift.description}</p><div class="shift-bottom"><span>${shift.spots} EXAMPLE PLACES</span><button type="button" data-id="${shift.id}" aria-pressed="${active}">${active?'✓ In my plan':'+ Add to plan'}</button></div>`;list.append(card)}document.querySelector('#saved-count').textContent=saved.size;document.querySelector('#plan-text').textContent=saved.size?`${saved.size} ${saved.size===1?'shift':'shifts'} in your local plan: ${shifts.filter(s=>saved.has(s.id)).map(s=>`${s.day} ${s.time} (${s.role})`).join('; ')}. This preview does not sign you up.`:'Save a shift above to build a plan. This preview stays in your browser; it does not sign you up.';document.querySelector('#clear-plan').disabled=!saved.size}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{const kind=button.dataset.filter;filters[kind]=button.dataset.value;document.querySelectorAll(`.filter[data-filter="${kind}"]`).forEach(el=>{const active=el===button;el.classList.toggle('is-active',active);el.setAttribute('aria-pressed',String(active))});render()}));
document.querySelector('#shift-list').addEventListener('click',event=>{const button=event.target.closest('button[data-id]');if(!button)return;const id=button.dataset.id;if(saved.has(id))saved.delete(id);else saved.add(id);render()});document.querySelector('#clear-plan').addEventListener('click',()=>{saved.clear();render()});render();

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
