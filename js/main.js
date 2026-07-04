(function(){
  'use strict';

  // ===== LOADER =====
  const loader=document.getElementById('loader');
  window.addEventListener('load',()=>{
    loader.classList.add('hidden');
  });
  setTimeout(()=>loader.classList.add('hidden'),3000);

  // ===== NAVBAR =====
  const navbar=document.getElementById('navbar');
  const navToggle=document.getElementById('navToggle');
  const navLinks=document.getElementById('navLinks');

  let lastScroll=0;
  window.addEventListener('scroll',()=>{
    const y=window.scrollY;
    navbar.classList.toggle('scrolled',y>80);
    lastScroll=y;
  });

  navToggle.addEventListener('click',()=>{
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.addEventListener('click',()=>{
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ===== SCROLL TOP =====
  const scrollTop=document.getElementById('scrollTop');
  window.addEventListener('scroll',()=>{
    scrollTop.classList.toggle('visible',window.scrollY>600);
  });
  scrollTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

  // ===== COUNTER ANIMATION =====
  function animateCounters(){
    document.querySelectorAll('.stat-num[data-count]').forEach(el=>{
      const target=parseInt(el.dataset.count);
      if(el.dataset.animated)return;
      el.dataset.animated='true';
      let current=0;
      const step=Math.ceil(target/60);
      const timer=setInterval(()=>{
        current+=step;
        if(current>=target){current=target;clearInterval(timer)}
        el.textContent=current;
      },20);
    });
  }

  // ===== SECTIONS OBSERVER =====
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        if(e.target.classList.contains('hero-stats'))animateCounters();
      }
    });
  },{threshold:.2});

  // Observe stats for counter
  const heroStats=document.querySelector('.hero-stats');
  if(heroStats)observer.observe(heroStats);

  // ===== RENDER TOPICS =====
  const topicsGrid=document.getElementById('topicsGrid');
  const topicDetail=document.getElementById('topicDetail');
  const btnBack=document.getElementById('btnBack');
  const detailTag=document.getElementById('detailTag');
  const detailTitle=document.getElementById('detailTitle');
  const detailDesc=document.getElementById('detailDesc');
  const detailContent=document.getElementById('detailContent');

  const iconMap={
    history:'history',
    settings:'settings',
    dashboard:'dashboard',
    schema:'schema',
    inventory:'inventory_2',
    timer:'timer',
    balance:'balance',
    trending:'trending_up',
    accounting:'account_balance',
    finance:'payments',
    hub:'hub',
    compute:'memory',
    engineering:'engineering',
    eco:'eco',
    psychology:'psychology',
    warning:'warning',
    map:'map',
    assignment:'assignment',
    equalizer:'equalizer',
    trending_up:'trending_up',
    cleaning:'cleaning_services',
    gpp_good:'gpp_good',
    speed:'speed',
    visibility:'visibility',
    school:'school',
    loop:'loop',
    show_chart:'show_chart',
    grading:'grading',
    verified:'verified',
    planner:'planner_instructions',
    handyman:'handyman',
    auto_graph:'auto_graph',
    question_answer:'question_answer',
    warning_amber:'warning_amber',
    home:'home',
    description:'description',
    safety:'safety',
    domino:'domino',
    layers:'layers',
    shield:'shield',
    groups:'groups',
    report:'report',
    critical:'critical',
    analytics:'analytics',
    gavel:'gavel',
    book:'book',
    directions_car:'directions_car',
    accessibility:'accessibility',
    straighten:'straighten',
    fitness:'fitness',
    healing:'healing',
    assessment:'assessment',
    ac_unit:'ac_unit',
    people:'people',
    map:'map',
    school:'school',
    sensors:'sensors',
    view_in_ar:'view_in_ar',
    precision_manufacturing:'precision_manufacturing',
    dns:'dns',
    mental_health:'mental_health',
    campaign:'campaign',
    account_tree:'account_tree',
    build:'build',
    view_timeline:'view_timeline',
    3d_rotation:'3d_rotation',
    lightbulb:'lightbulb',
    science:'science',
    local_fire_department:'local_fire_department',
    factory:'factory',
    whatshot:'whatshot',
    plumbing:'plumbing',
    thermostat:'thermostat',
    bug_report:'bug_report',
    category:'category',
    thermostate:'thermostat',
    bug:'bug_report',
    water:'water_drop',
    hot:'local_fire_department',
  };

  function getIcon(iconName){
    const svg=`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`;
    return `<span class="h-icon">${svg}</span>`;
  }

  function renderTopics(){
    topicsGrid.innerHTML='';
    TOPICS_DATA.forEach(t=>{
      const card=document.createElement('div');
      card.className='topic-card fade-in';
      card.innerHTML=`
        <div class="card-num">Capítulo ${t.num}</div>
        <h3>${t.id}. ${t.title}</h3>
        <p>${t.desc}</p>
        <div class="card-topics">${t.keywords.map(k=>`<span>${k}</span>`).join('')}</div>
      `;
      card.addEventListener('click',()=>openDetail(t.id));
      topicsGrid.appendChild(card);
    });
    // Observe new cards
    document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));
  }

  function openDetail(id){
    const topic=TOPICS_DATA.find(t=>t.id===id);
    if(!topic)return;
    detailTag.textContent=`Capítulo ${topic.num} — ${topic.tag}`;
    detailTitle.textContent=`${topic.id}. ${topic.title}`;
    detailDesc.textContent=topic.desc;
    detailContent.innerHTML=topic.blocks.map(b=>{
      const icon=getIcon(b.icon);
      const tags=b.content.match(/<span class="detail-tag">[^<]+<\/span>/g);
      return `<div class="detail-block fade-in"><h4>${icon} ${b.title}</h4>${b.content}</div>`;
    }).join('');

    topicsGrid.parentElement.style.display='none';
    topicDetail.style.display='block';
    window.scrollTo({top:topicDetail.offsetTop-100,behavior:'smooth'});
    // Observe detail blocks
    document.querySelectorAll('.detail-block').forEach(el=>observer.observe(el));
  }

  btnBack.addEventListener('click',()=>{
    topicDetail.style.display='none';
    topicsGrid.parentElement.style.display='block';
    window.scrollTo({top:topicsGrid.parentElement.offsetTop-80,behavior:'smooth'});
  });

  // ===== INIT =====
  renderTopics();

  // ===== HASH NAVIGATION =====
  function handleHash(){
    const hash=window.location.hash;
    if(hash==='#topicos'){
      setTimeout(()=>{
        document.getElementById('topicos')?.scrollIntoView({behavior:'smooth'});
      },500);
    }
  }
  window.addEventListener('hashchange',handleHash);
  if(window.location.hash)handleHash();

  // ===== ACTIVE NAV LINK =====
  const sections=document.querySelectorAll('section[id]');
  const navAnchors=document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll',()=>{
    let current='inicio';
    sections.forEach(s=>{
      const top=s.offsetTop-200;
      if(window.scrollY>=top)current=s.id;
    });
    navAnchors.forEach(a=>{
      a.classList.toggle('active',a.getAttribute('href')==='#'+current);
    });
  });

  // ===== KEYBOARD =====
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape' && topicDetail.style.display==='block'){
      btnBack.click();
    }
  });

  console.log('%c EngPro — Portal Técnico de Engenharia de Produção ',
    'background:#f7a600;color:#070b15;font-size:14px;font-weight:bold;padding:8px 12px;border-radius:4px;');
  console.log('%c 16 capítulos · Conteúdo técnico completo ', 'font-size:12px;color:#6b7a99');
})();
