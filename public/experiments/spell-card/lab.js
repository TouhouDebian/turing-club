(() => {
  const $ = (id) => document.getElementById(id);
  const canvas = $('field');
  const ctx = canvas.getContext('2d');
  const duration = 8;
  const waveInterval = 0.55;
  const texts = {
    zh: {title:'符卡轨迹实验',simulation:'计算机模拟',pattern:'阵型',ring:'环形',spiral:'螺旋',seal:'封印',count:'每轮弹数',speed:'径向速度',angle:'初始角度',export:'导出 CSV',ready:'就绪',running:'运行中',paused:'已暂停',finished:'已结束',time:'时间',active:'可见粒子',first:'首粒子',caption:'固定坐标：900 × 560 u；速度单位 u/s。同一参数与时间对应同一结果，无重力、碰撞或能量建模。',play:'开始',pause:'暂停',reset:'复位',step:'前进 0.1 秒'},
    en: {title:'Spell Card Trajectory Lab',simulation:'Computer simulation',pattern:'Pattern',ring:'Ring',spiral:'Spiral',seal:'Seal',count:'Particles / wave',speed:'Radial speed',angle:'Initial angle',export:'Export CSV',ready:'Ready',running:'Running',paused:'Paused',finished:'Finished',time:'Time',active:'Visible',first:'First particle',caption:'Fixed coordinates: 900 × 560 u; speed in u/s. Identical parameters and time give identical positions. Gravity, collisions, and energy are not modeled.',play:'Play',pause:'Pause',reset:'Reset',step:'Step 0.1 seconds'},
  };
  let language = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh';
  let time = 0;
  let running = false;
  let last = null;
  let frame = 0;
  let inView = true;
  let syncObserver;
  const config = () => ({pattern:$('pattern').value,count:Number($('count').value),speed:Number($('speed').value),angle:Number($('angle').value)});

  function particles(at, settings) {
    const result = [];
    const base = settings.angle * Math.PI / 180;
    const waves = settings.pattern === 'ring' ? 1 : Math.min(8, Math.floor(at / waveInterval) + 1);
    for (let wave = 0; wave < waves; wave++) {
      const age = at - wave * waveInterval;
      for (let index = 0; index < settings.count; index++) {
        const theta = 2 * Math.PI * index / settings.count + base + (settings.pattern === 'ring' ? 0 : wave * 0.2);
        const radius = settings.speed * age;
        let x = 450 + radius * Math.cos(theta);
        let y = 280 + radius * Math.sin(theta);
        if (settings.pattern === 'seal') {
          // A prescribed curve for visualization, not a force-based model.
          const turning = theta + age * 0.65;
          x = 450 + radius * Math.cos(turning);
          y = 280 + radius * Math.sin(turning);
        }
        result.push({wave,index,x,y,age});
      }
    }
    return result;
  }

  function render() {
    const settings = config();
    const dark = document.documentElement.classList.contains('dark');
    ctx.fillStyle = dark ? '#0c1420' : '#101b29';
    ctx.fillRect(0,0,900,560);
    ctx.strokeStyle = '#25394e';
    ctx.lineWidth = 1;
    for (let x = 50; x < 900; x += 50) {ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,560);ctx.stroke();}
    for (let y = 30; y < 560; y += 50) {ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(900,y);ctx.stroke();}
    ctx.fillStyle = '#b6cadd';ctx.font = '13px monospace';ctx.fillText('x / u',845,25);ctx.fillText('y / u',12,540);
    ctx.strokeStyle = '#8dabc2';ctx.beginPath();ctx.arc(450,280,10,0,Math.PI*2);ctx.stroke();
    const all = particles(time, settings);
    const visible = all.filter((p) => p.x >= 0 && p.x <= 900 && p.y >= 0 && p.y <= 560);
    for (const p of visible) {
      ctx.fillStyle = ['#f5c469','#7bcaff','#f497b2','#b4e5cd'][p.wave % 4];
      ctx.beginPath();ctx.arc(p.x,p.y,4,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(p.x-0.8,p.y-0.8,1.2,0,Math.PI*2);ctx.fill();
    }
    $('time-value').textContent = `${time.toFixed(2)} s`;
    $('active-value').textContent = String(visible.length);
    $('first-value').textContent = all.length ? `(${all[0].x.toFixed(1)}, ${all[0].y.toFixed(1)})` : '—';
    $('count-value').textContent = String(settings.count);
    $('speed-value').textContent = `${settings.speed} u/s`;
    $('angle-value').textContent = `${settings.angle}°`;
    const t = texts[language];
    const stateText = running ? t.running : time >= duration ? t.finished : time === 0 ? t.ready : t.paused;
    if ($('state').textContent !== stateText) $('state').textContent = stateText;
    $('play').textContent = running ? 'Ⅱ' : '▶';
    $('play').title = running ? t.pause : t.play;
    $('play').setAttribute('aria-label',$('play').title);
  }

  function tick(now) {
    frame = 0;
    if (!running || !inView || document.hidden) {last = null;return;}
    if (last !== null) time = Math.min(duration,time + (now-last)/1000);
    last = now;
    if (time >= duration) running = false;
    render();
    if (running) frame = requestAnimationFrame(tick);
  }
  function schedule() {if (running && inView && !document.hidden && !frame) {last=null;frame=requestAnimationFrame(tick);}}
  function stop() {running=false;cancelAnimationFrame(frame);frame=0;last=null;}
  $('play').onclick = () => {if(running)stop();else{if(time>=duration)time=0;running=true;schedule();}render();};
  $('reset').onclick = () => {stop();time=0;render();};
  $('step').onclick = () => {stop();time=Math.min(duration,Math.round((time+0.1)*1000)/1000);render();};
  for (const id of ['pattern','count','speed','angle']) $(id).addEventListener('input',() => {stop();time=0;render();});
  $('export').onclick = () => {
    const settings=config();
    const rows=['pattern,count,speed_u_per_s,initial_angle_deg,time_s,wave,index,x_u,y_u'];
    for(let sample=0;sample<=80;sample++){
      const at=sample/10;
      for(const p of particles(at,settings)) rows.push([settings.pattern,settings.count,settings.speed,settings.angle,at.toFixed(1),p.wave,p.index,p.x.toFixed(6),p.y.toFixed(6)].join(','));
    }
    const url=URL.createObjectURL(new Blob([rows.join('\n')],{type:'text/csv;charset=utf-8'}));
    const a=document.createElement('a');a.href=url;a.download=`spell-card-${settings.pattern}.csv`;a.hidden=true;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  };

  function sync() {
    let dark = matchMedia('(prefers-color-scheme: dark)').matches;
    try {
      if(parent!==window){language=parent.document.documentElement.dataset.language==='en'?'en':'zh';dark=parent.document.documentElement.classList.contains('dark');}
    } catch {}
    document.documentElement.classList.toggle('dark',dark);
    document.documentElement.lang=language==='en'?'en':'zh-CN';
    for(const el of document.querySelectorAll('[data-text]'))el.textContent=texts[language][el.dataset.text];
    for(const id of ['reset','step']){$(id).title=texts[language][id];$(id).setAttribute('aria-label',texts[language][id]);}
    render();
  }
  try {
    if(parent!==window){syncObserver=new MutationObserver(sync);syncObserver.observe(parent.document.documentElement,{attributes:true,attributeFilter:['class','data-language']});}
  } catch {}
  new IntersectionObserver((entries)=>{inView=entries[0].isIntersecting;if(!inView)last=null;else schedule();}).observe(canvas);
  document.addEventListener('visibilitychange',()=>{last=null;schedule();});
  window.addEventListener('pagehide',()=>{stop();syncObserver?.disconnect();});
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change',sync);
  new ResizeObserver(() => {
    try {if(window.frameElement)window.frameElement.style.height=`${Math.ceil(document.querySelector('main').getBoundingClientRect().height)+4}px`;} catch {}
  }).observe(document.querySelector('main'));
  sync();
})();
