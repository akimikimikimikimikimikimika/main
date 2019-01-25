(()=>{

    let env={
        touch:false
    };

    let ge=i=>document.getElementById(i),ce=(i,c,t)=>{
        let e=document.createElement("div");
        if (i) e.id=i;
        if (c) e.className=c;
        if (t) e.textContent=t;
        return e;
    },ap=(p,c)=>p.appendChild(c),ape=(p,i,c,t)=>ap(p,ce(i,c,t));



})();
