(()=>{let ge=i=>document.getElementById(i),ce=(t)=>document.createElement(t),cd=(i,c,t)=>{let e=ce("div");if (i) e.id=i;if (c) e.className=c;if (t) e.textContent=t;return e;},ap=(p,c)=>p.appendChild(c),apd=(p,i,c,t)=>ap(p,cd(i,c,t)),rc=c=>c.parentNode.removeChild(c),ael=(e,t,l,o)=>e.addEventListener(t,l,o),apb=e=>ap(body(),e),html=document.documentElement;let state=new Proxy({touch:false,standalone:false,sources:[],cId:{},current:[],hold:[],lastMoved:null,dark:false,menuShowed:false,controllerShowed:false},{set:(o,p,v)=>{o[p]=v;html.className=`${o.dark?"dark":"light"} ${o.standalone?"standalone":""}`;},get:(o,p)=>{return o[p];}});state.standalone=navigator.standalone===true||(/standalone=yes/).test(location.search);let body=ce("body");let il=apd(body,"inputLayer");let pl=apd(body,"positionLayer");let wl=apd(body,"waveLayer");let tl=apd(body,"textLayer");let remove=(a,o)=>{var p=false;for (var n=0;n<a.length;n++) {if (p) a[n-1]=a[n];else if (a[n]==o) p=true;}a.length--;return a;};let st=v=>{if (v==0) return "50%";else if (v>0) return `calc( 50% + ${v}px )`;else if (v<0) return `calc( 50% - ${-v}px )`;};let cir=(c,x,y,r)=>{let ct=cd(null,c);let f=()=>{ct.style.left=st(x-r);ct.style.right=st(-x-r);ct.style.top=st(y-r);ct.style.bottom=st(-y-r);};let cdn=(x2,y2,r2)=>{if (typeof(x2)=="number") x=x2;if (typeof(y2)=="number") y=y2;if (typeof(r2)=="number") r=r2;else r=state.touch?30:10;f();};ct.coordinate=(x,y,r)=>{cdn(x,y,r);};let ani=(t,r2,c)=>{ct.style.transitionDuration=`${t}s,${t}s,${t}s,${t}s,${t}s,0.5s`;cdn(x,y,r2);if (c) ct.style.opacity="0";};ct.animate=(t,r,c)=>{ani(t,r,c);};cdn(x,y,r);return ct;};state.touch=il.ontouchstart===null;let catchHeld=(x,y,id)=>{var o=null;state.hold.forEach(e=>{if (Math.hypot(x-e.x,y-e.y)<=(state.touch?30:10)) o=e;});if (o) {state.current.push(o);state.cId[id]=o;state.lastMoved=o;o.id=id;o.moving=true;}return !!o;};let toggleHold=o=>{if (o.hold) {o.hold=false;remove(state.hold,o);if (o==state.lastMoved) state.lastMoved=null;if (!o.moving) deinit(o);}else {o.hold=true;state.lastMoved=o;state.hold.push(o);}};let deinit=o=>{o.stop();rc(o.node);remove(state.sources,o);};var toggleMenu=null;var toggleController=null;var toggleDarkMode=null;var tcq=null,tcb=null;(()=>{let createP=(id,x,y)=>{var int=null;let o={x:x,y:y,L:Math.min(wl.offsetWidth,wl.offsetHeight)/6,F:90,update:null,oscillating:false,hold:false,moving:true,id:id,node:ap(pl,cir("pointer",x,y)),oscillate:()=>{if (!int) {var T=60/o.F,l=o.L,u=false,t=state.touch;let f=()=>{let w=Math.hypot(wl.offsetWidth/2+Math.abs(o.x),wl.offsetHeight/2+Math.abs(o.y))*1.1-(t?30:10);let d=w/l*T;let wave=ap(wl,cir("wave",o.x,o.y,t?30:10));setTimeout(()=>{wave.animate(d,w,true);},0);setTimeout(()=>{rc(wave);},d*1000);if (u) {u=false;clearInterval(int);T=60/o.F,l=o.L;int=setInterval(f,T*1000);}};o.update=()=>{u=true;};f();int=setInterval(f,T*1000);o.oscillating=true;}},stop:()=>{if (int) {o.oscillating=false;o.update=null;clearInterval(int);int=null;}}};state.lastMoved=o;state.sources.push(o);state.current.push(o);state.cId[id]=o;o.oscillate();return o;};let moveP=(id,x,y)=>{let o=state.cId[id];o.x=x;o.y=y;o.node.coordinate(x,y);return o;};let removeP=(id)=>{let o=state.cId[id];o.id=null;o.moving=false;if (!o.hold) {state.lastMoved=null;deinit(o);}remove(state.current,o);delete state.cId[id];return o;};let X=e=>e.clientX-(il.offsetWidth/2);let Y=e=>e.clientY-(il.offsetHeight/2);if (state.touch) {ael(il,"touchstart",e=>{e.preventDefault();removeStartup();var done=false;if (e.touches.length==1) {let t=e.touches[0];done=catchHeld(X(t),Y(t),t.identifier);}if (!done) for (var n=0;n<e.changedTouches.length;n++) {let t=e.changedTouches[n];createP(t.identifier,X(t),Y(t));}return false;});ael(il,"touchmove",e=>{e.preventDefault();for (var n=0;n<e.changedTouches.length;n++) {let t=e.changedTouches[n];moveP(t.identifier,t.clientX-(il.offsetWidth/2),t.clientY-(il.offsetHeight/2));}return false;});let f=e=>{e.preventDefault();for (var n=0;n<e.changedTouches.length;n++) {let t=e.changedTouches[n];removeP(t.identifier);}return false;};ael(il,"touchend",f);ael(il,"touchcancel",f);}else {ael(il,"mousedown",e=>{e.preventDefault();removeStartup();if (!catchHeld(X(e),Y(e),"current")) createP("current",X(e),Y(e));return false;});ael(il,"mousemove",e=>{if (state.cId.current) moveP("current",X(e),Y(e));return false;});let f=()=>{if (state.current.length) removeP("current");return false;};ael(il,"mouseup",f);ael(il,"mouseout",f);ael(html,"keyup",e=>{switch (e.key) {case "h":if (state.lastMoved) toggleHold(state.lastMoved);break;case "m":case "M":toggleMenu();break;case "d":case "D":toggleDarkMode();break;case "e":case "E":tcq();break;case "Delete": case "Backspace": case "Clear": if (state.current.length) il.dispatchEvent("mouseup");else if (state.lastMoved) toggleHold(state.lastMoved);break;}return false;});}})();let icon=apd(body,"icon","hidden");let mc=apd(body,"menu","hidden");let menu=apd(mc);let mb=apd(body,"menu-backface","hidden");let sb=apd(body,"statusbar","hidden");(()=>{var uh=false,moving=false;let current=[],t=state.touch?"touchend":"mouseup";let f=w=>{h.className="";if (w) {moving=state.current.length>0;if (moving) {uh=true;state.current.forEach(o=>{uh=uh&&(!o.hold);current.push(o);if (!o.hold) toggleHold(o);});h.className=uh?"":"selected";}else if (state.lastMoved) {current[0]=state.lastMoved;h.className="selected";}}else {if (state.controllerShowed) toggleController();if (moving) {while (current.length) {if (uh) toggleHold(current[0]);current.shift();}uh=false;}else current.length=0;}state.menuShowed=w;icon.className=mc.className=mb.className=sb.className=w?"":"hidden";};toggleMenu=()=>{f(!state.menuShowed);};ael(apd(menu,null,null,"×"),t,()=>{f(false);return false;});ael(mb,"click",()=>{f(false);return false;});ael(icon,t,()=>{f(true);return false;});let h=apd(menu,null,null,"H");ael(h,t,()=>{if (moving) {uh=!uh;h.className=uh?"":"selected";}else if (state.lastMoved) {h.className="";toggleHold(state.lastMoved);}return false;});let e=apd(menu,null,null,"E");ael(e,t,tcq=()=>{toggleController(current);return false;});tcb=e;let d=apd(menu,null,null,"D");d.className=state.dark?"selected":"";toggleDarkMode=()=>{let v=!state.dark;state.dark=v;document.getElementsByName("theme-color")[0].content=v?"#000":"#fff";d.className=v?"selected":"";};ael(d,t,()=>{toggleDarkMode();return false;});})();let ctrl=apd(body,"controller","hidden");let al=apd(ctrl,"axisLayer");let pt=apd(apd(ctrl,"pointLayer"));let gil=apd(ctrl,"graphInputLayer");(()=>{var a=apd(al);apd(a,null,null,"f");let Ft=apd(a,null,null,"♩ = 90");a=apd(al);apd(a,null,null,"λ");let Lt=apd(a,null,null,"100 %");let tc=tcb;tcb=null;let t=state.touch?30:10;pt.style.left=pt.style.right=pt.style.top=pt.style.bottom=`calc( 50% - ${t}px )`;let l=[];toggleController=cu=>{if (state.controllerShowed) {l.length=0;ctrl.className="hidden";state.controllerShowed=false;tc.className="";}else {let f=()=>{if (!cu) {if (state.lastMoved) cu=[state.lastMoved];else cu=[];}var F=0,L=0;cu.forEach(o=>{l.push(o);F+=Fr(o.F);L+=Lr(o.L);});if (l.length) {F/=l.length;L/=l.length;let x=Fp(F),y=Lp(L);pt.style.left=`calc( ${x}% - ${t}px )`;pt.style.right=`calc( ${100-x}% - ${t}px )`;pt.style.top=`calc( ${y}% - ${t}px )`;pt.style.bottom=`calc( ${100-y}% - ${t}px )`;ctrl.className="";state.controllerShowed=true;tc.className="selected";}};if (state.menuShowed) f();else {toggleMenu();setTimeout(f,500);}}};let Lb=()=>Math.min(wl.offsetWidth,wl.offsetHeight)/6;let Fc=e=>{let r=gil.getBoundingClientRect();var x=0;for (var n=0;n<e.length;n++) x+=e[n].clientX;x/=e.length;return (x-r.left)/r.width*2-1};let Lc=e=>{let r=gil.getBoundingClientRect();var y=0;for (var n=0;n<e.length;n++) y+=e[n].clientY;y/=e.length;return 1-((y-r.top)/r.height*2);};let Fw=v=>90*(3**v);let Lw=v=>Lb()*(3**v);let Fr=c=>Math.log(c/90)/Math.log(3);let Lr=c=>Math.log(c/Lb())/Math.log(3);let Fp=v=>(1+v)*50;let Lp=v=>(1-v)*50;let move=e=>{let F=Fc(e),L=Lc(e);let x=Fp(F),y=Lp(L);pt.style.left=`calc( ${x}% - ${t}px )`;pt.style.right=`calc( ${100-x}% - ${t}px )`;pt.style.top=`calc( ${y}% - ${t}px )`;pt.style.bottom=`calc( ${100-y}% - ${t}px )`;Ft.textContent=`♩ = ${Math.round(Fw(F))}`;Lt.textContent=`${Math.round((3**L)*100)} %`;l.forEach(o=>{o.F=Fw(F);o.L=Lw(L);o.update();});};if (state.touch) {ael(gil,"touchstart",e=>{e.preventDefault();move(e.targetTouches);return false;});ael(gil,"touchmove",e=>{e.preventDefault();move(e.targetTouches);return false;});let f=e=>{e.preventDefault();move(targetTouches);return false;};ael(gil,"touchend",f);ael(gil,"touchcancel",f);}else {var valid=false;ael(gil,"mousedown",e=>{e.preventDefault();valid=true;move([e]);return false;});ael(gil,"mousemove",e=>{e.preventDefault();if (valid) move([e]);return false;});let f=e=>{e.preventDefault();if (valid) move([e]);valid=false;return false;};ael(gil,"mouseup",f);ael(gil,"mouseout",f);}})();let startup=apd(tl,null,null,state.touch?"Tap here":"Click here");var startupVisible=true;let removeStartup=()=>{if (startupVisible) {startupVisible=false;tl.className="hidden";setTimeout(()=>{tl.className="";rc(startup);},1000);}};if (state.standalone) {let l=document.getElementsByClassName("standalone");for (var n=0;n<l.length;n++) rc(l[n]);}ael(window,"load",()=>{html.replaceChild(body,document.body)});})();