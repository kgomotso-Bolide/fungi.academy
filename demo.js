  /* ---- AI in Action: typewriter demo ---- */
  (function(){
    const chat=document.getElementById('aiChat'),tabs=document.getElementById('aiTabs');if(!chat||!tabs)return;
    const SCENES=[
      {u:"Draft an email to a tenant whose bill jumped — her meter was estimated for two months and we've now taken an actual reading.",
       b:"<b>Subject: Your statement — actual reading now taken</b><br><br>Hi Nomsa,<br><br>Your latest statement is higher than usual because we couldn't access your meter in June or July, so both months were <b>estimated</b>. We've now taken an actual reading (<b>04 821 kWh</b>) and the catch-up for those two months appears on this invoice.<br><br>Your tariff hasn't changed. If you'd prefer to spread the difference over three months, reply to this mail and we'll set that up.<br><br>Kind regards,<br>Fungi Customer Care"},
      {u:"Summarise this month's metering report into 3 points for the ops meeting.",
       b:"Three things worth raising:<br><br>• <b>Reading success rate 96.4%</b> — up from 91% since the Route 7 handsets were replaced.<br>• <b>Non-technical losses at Sandton Ridge still 14%</b> — three meters flagged for bypass inspection.<br>• <b>212 estimated reads</b> this cycle, 78% of them in two complexes with access problems — worth booking after-hours visits."},
      {u:"Here's 5,000 rows of half-hourly consumption data. Which meters look wrong?",
       b:"Three anomalies stand out:<br><br>• <b>14 meters reading zero for 30+ days</b> while the units are occupied — likely stalled or bypassed.<br>• <b>Meter 8842-C draws 4.1 kW at 02:00 every night</b> — that's a geyser-sized load on an empty tariff profile.<br>• <b>Block D's bulk meter is 11% above</b> the sum of its sub-meters — check calibration before you send anyone out."},
      {u:"Plan a 6-week rollout to install prepaid smart meters across a 480-unit estate.",
       b:"Here's a phased plan:<br><br>• <b>Wk 1:</b> Site survey + asset register; confirm DB positions and access windows.<br>• <b>Wk 2–4:</b> Two teams, 40 installs a day, commissioned to the vending platform same-day.<br>• <b>Wk 5:</b> Tenant onboarding — vending, balance checks, WhatsApp help line.<br>• <b>Wk 6:</b> Reconcile bulk vs sub-meter readings, close out exceptions, hand over to billing."}
    ];
    let active=-1,timer=null;
    const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
    function clearTimers(){if(timer){clearTimeout(timer);timer=null;}}
    function typeHTML(el,html,done){
      // tokens are either HTML tags (injected whole) or text runs (typed char-by-char)
      const tokens=html.match(/<[^>]+>|[^<]+/g)||[];
      const caret='<span class="ai-caret"></span>';
      let ti=0,ci=0,built='';
      (function step(){
        if(ti>=tokens.length){el.innerHTML=html;done&&done();return;}
        const tk=tokens[ti];
        if(tk[0]==='<'){built+=tk;ti++;ci=0;el.innerHTML=built+caret;timer=setTimeout(step,12);return;}
        ci++;
        el.innerHTML=built+tk.slice(0,ci)+caret;
        if(ci>=tk.length){built+=tk;ti++;ci=0;}
        timer=setTimeout(step,tk.length>40?7:16);
      })();
    }
    function run(i){
      if(i===active)return;active=i;clearTimers();chat.innerHTML='';
      [...tabs.children].forEach((b,bi)=>b.classList.toggle('active',bi===i));
      const sc=SCENES[i];
      const u=document.createElement('div');u.className='ai-msg user';
      u.innerHTML='<div class="av">You</div><div class="bubble">'+sc.u+'</div>';
      chat.appendChild(u);
      timer=setTimeout(()=>{
        const b=document.createElement('div');b.className='ai-msg bot';
        b.innerHTML='<div class="av">AI</div><div class="bubble"></div>';
        chat.appendChild(b);
        typeHTML(b.querySelector('.bubble'),sc.b);
      },450);
    }
    tabs.addEventListener('click',e=>{const t=e.target.closest('.ai-tab');if(t)run(+t.dataset.i);});
    // start when section scrolls into view
    new IntersectionObserver((es,ob)=>es.forEach(e=>{if(e.isIntersecting){run(0);ob.disconnect();}}),{threshold:.35}).observe(chat);
  })();

  /* ---- Animated stat counters ---- */
  (function(){
    const nums=[...document.querySelectorAll('.ai-stats .num')];if(!nums.length)return;
    const obs=new IntersectionObserver((es,ob)=>es.forEach(e=>{
      if(!e.isIntersecting)return;ob.unobserve(e.target);
      const el=e.target,txt=el.dataset.txt;
      if(txt){el.textContent=txt;return;}
      const to=+el.dataset.to,suf=el.dataset.suf||'';let s=null;
      (function tick(t){if(!s)s=t;const p=Math.min((t-s)/1100,1);el.textContent=Math.round(p*to)+suf;if(p<1)requestAnimationFrame(tick);})(performance.now());
    }),{threshold:.6});
    nums.forEach(n=>obs.observe(n));
  })();

