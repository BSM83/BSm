const t=new Date('2026-08-08T12:00:00').getTime();
setInterval(()=>{
const d=t-Date.now();
days.innerText=Math.max(0,Math.floor(d/86400000));
hours.innerText=Math.max(0,Math.floor((d%86400000)/3600000));
minutes.innerText=Math.max(0,Math.floor((d%3600000)/60000));
seconds.innerText=Math.max(0,Math.floor((d%60000)/1000));
},1000);