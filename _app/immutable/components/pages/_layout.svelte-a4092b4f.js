import{S as ze,i as Oe,s as Se,C as Ue,a as L,k as c,q as Q,D as qe,h as s,c as A,l as n,m as u,r as W,n as e,b as X,E as t,F as Ce,G as Ge,H as je,f as Be,t as He,I as Le,J as Me,K as ye,u as Ae,L as De,M as Pe}from"../../chunks/index-1fe77128.js";import{p as Fe}from"../../chunks/stores-419be90c.js";function Ve(i,l,o){const r=i.slice();return r[5]=l[o],r[7]=o,r}function ke(i,l,o){const r=i.slice();return r[8]=l[o],r[10]=o,r}function we(i){let l,o,r=i[8].title+"",_,p,h,I,E;return{c(){l=c("li"),o=c("a"),_=Q(r),h=L(),this.h()},l(d){l=n(d,"LI",{class:!0});var m=u(l);o=n(m,"A",{class:!0,href:!0});var V=u(o);_=W(V,r),V.forEach(s),h=A(m),m.forEach(s),this.h()},h(){e(o,"class","nav-link text-bg-dark"),e(o,"href",p=i[8].url),e(l,"class","nav-item ps-4 svelte-1ygmzrw"),De(l,"active",i[1].url.pathname.replace(/\/$/,"")==i[8].url||i[1].url.pathname=="/"&&i[10]==0&&i[7]==0)},m(d,m){X(d,l,m),t(l,o),t(o,_),t(l,h),I||(E=Pe(o,"click",i[4]),I=!0)},p(d,m){m&1&&r!==(r=d[8].title+"")&&Ae(_,r),m&1&&p!==(p=d[8].url)&&e(o,"href",p),m&3&&De(l,"active",d[1].url.pathname.replace(/\/$/,"")==d[8].url||d[1].url.pathname=="/"&&d[10]==0&&d[7]==0)},d(d){d&&s(l),I=!1,E()}}}function Te(i){let l,o,r,_,p,h=i[5].title+"",I,E,d,m,V=i[5].items,b=[];for(let f=0;f<V.length;f+=1)b[f]=we(ke(i,V,f));return{c(){l=c("li"),o=c("strong"),r=c("img"),p=L(),I=Q(h),E=L(),d=c("ul");for(let f=0;f<b.length;f+=1)b[f].c();m=L(),this.h()},l(f){l=n(f,"LI",{class:!0});var y=u(l);o=n(y,"STRONG",{class:!0});var v=u(o);r=n(v,"IMG",{class:!0,width:!0,src:!0}),p=A(v),I=W(v,h),v.forEach(s),E=A(y),d=n(y,"UL",{class:!0});var k=u(d);for(let T=0;T<b.length;T+=1)b[T].l(k);k.forEach(s),m=A(y),y.forEach(s),this.h()},h(){e(r,"class","me-1"),e(r,"width","32"),ye(r.src,_=i[5].icon)||e(r,"src",_),e(o,"class","mb-0"),e(d,"class","list-unstyled"),e(l,"class","nav-item")},m(f,y){X(f,l,y),t(l,o),t(o,r),t(o,p),t(o,I),t(l,E),t(l,d);for(let v=0;v<b.length;v+=1)b[v].m(d,null);t(l,m)},p(f,y){if(y&1&&!ye(r.src,_=f[5].icon)&&e(r,"src",_),y&1&&h!==(h=f[5].title+"")&&Ae(I,h),y&3){V=f[5].items;let v;for(v=0;v<V.length;v+=1){const k=ke(f,V,v);b[v]?b[v].p(k,y):(b[v]=we(k),b[v].c(),b[v].m(d,null))}for(;v<b.length;v+=1)b[v].d(1);b.length=V.length}},d(f){f&&s(l),Le(b,f)}}}function Je(i){let l,o,r,_,p,h,I,E,d,m,V,b,f,y,v,k,T,B,N,U,H,ee,O,te,q,M,C,ae,P,F,le,G,se,re,J,K,j;document.title=l=i[1].data.title;let R=i[0].menu,D=[];for(let a=0;a<R.length;a+=1)D[a]=Te(Ve(i,R,a));const oe=i[3].default,w=Ue(oe,i,i[2],null);return{c(){o=L(),r=c("nav"),_=c("div"),p=c("div"),h=c("button"),I=c("span"),E=L(),d=c("div"),m=c("a"),V=Q("Illustrated Tx"),b=L(),f=c("div"),y=Q("\xA0"),v=L(),k=c("div"),T=c("div"),B=c("div"),N=c("div"),U=c("div"),H=c("h5"),ee=L(),O=c("button"),te=L(),q=c("div"),M=c("div"),C=c("ul");for(let a=0;a<D.length;a+=1)D[a].c();ae=L(),P=c("div"),F=c("p"),le=Q("Tx made with "),G=c("a"),se=Q("crosschain"),re=L(),J=c("div"),K=c("div"),w&&w.c(),this.h()},l(a){qe("svelte-7jht9m",document.head).forEach(s),o=A(a),r=n(a,"NAV",{class:!0});var g=u(r);_=n(g,"DIV",{class:!0});var S=u(_);p=n(S,"DIV",{class:!0});var ie=u(p);h=n(ie,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0});var de=u(h);I=n(de,"SPAN",{class:!0}),u(I).forEach(s),de.forEach(s),ie.forEach(s),E=A(S),d=n(S,"DIV",{class:!0});var ue=u(d);m=n(ue,"A",{class:!0,href:!0});var fe=u(m);V=W(fe,"Illustrated Tx"),fe.forEach(s),ue.forEach(s),b=A(S),f=n(S,"DIV",{class:!0});var ve=u(f);y=W(ve,"\xA0"),ve.forEach(s),S.forEach(s),g.forEach(s),v=A(a),k=n(a,"DIV",{class:!0});var he=u(k);T=n(he,"DIV",{class:!0});var Y=u(T);B=n(Y,"DIV",{class:!0});var _e=u(B);N=n(_e,"DIV",{class:!0,tabindex:!0,id:!0,"aria-labelledby":!0});var Z=u(N);U=n(Z,"DIV",{class:!0});var $=u(U);H=n($,"H5",{class:!0,id:!0});var Ne=u(H);Ne.forEach(s),ee=A($),O=n($,"BUTTON",{type:!0,class:!0,"data-bs-dismiss":!0,"data-bs-target":!0,"aria-label":!0}),u(O).forEach(s),$.forEach(s),te=A(Z),q=n(Z,"DIV",{class:!0});var x=u(q);M=n(x,"DIV",{class:!0});var me=u(M);C=n(me,"UL",{class:!0});var be=u(C);for(let ne=0;ne<D.length;ne+=1)D[ne].l(be);be.forEach(s),me.forEach(s),ae=A(x),P=n(x,"DIV",{class:!0});var ge=u(P);F=n(ge,"P",{});var ce=u(F);le=W(ce,"Tx made with "),G=n(ce,"A",{class:!0,href:!0});var pe=u(G);se=W(pe,"crosschain"),pe.forEach(s),ce.forEach(s),ge.forEach(s),x.forEach(s),Z.forEach(s),_e.forEach(s),re=A(Y),J=n(Y,"DIV",{class:!0});var Ee=u(J);K=n(Ee,"DIV",{class:!0});var Ie=u(K);w&&w.l(Ie),Ie.forEach(s),Ee.forEach(s),Y.forEach(s),he.forEach(s),this.h()},h(){e(I,"class","navbar-toggler-icon"),e(h,"class","navbar-toggler border-0 shadow-none p-1"),e(h,"type","button"),e(h,"data-bs-toggle","offcanvas"),e(h,"data-bs-target","#offcanvas"),e(h,"aria-controls","offcanvas"),e(p,"class","col"),e(m,"class","navbar-brand m-0"),e(m,"href","/"),e(d,"class","col text-center"),e(f,"class","col"),e(_,"class","container-fluid"),e(r,"class","navbar navbar-dark bg-dark navbar-expand-lg sticky-top"),e(H,"class","offcanvas-title"),e(H,"id","offcanvasLabel"),e(O,"type","button"),e(O,"class","btn-close shadow-none"),e(O,"data-bs-dismiss","offcanvas"),e(O,"data-bs-target","#offcanvas"),e(O,"aria-label","Close"),e(U,"class","offcanvas-header"),e(C,"class","nav flex-column list-unstyled"),e(M,"class","mb-auto"),e(G,"class","text-white"),e(G,"href","https://github.com/jumpcrypto/crosschain"),e(P,"class","mt-auto mb-2"),e(q,"class","offcanvas-body d-flex flex-column svelte-1ygmzrw"),e(N,"class","offcanvas-lg offcanvas-start w-75 text-bg-dark svelte-1ygmzrw"),e(N,"tabindex","-1"),e(N,"id","offcanvas"),e(N,"aria-labelledby","offcanvasLabel"),e(B,"class","col-lg-4"),e(K,"class","body p-2 d-flex flex-column svelte-1ygmzrw"),e(J,"class","col-lg-8"),e(T,"class","row"),e(k,"class","container")},m(a,z){X(a,o,z),X(a,r,z),t(r,_),t(_,p),t(p,h),t(h,I),t(_,E),t(_,d),t(d,m),t(m,V),t(_,b),t(_,f),t(f,y),X(a,v,z),X(a,k,z),t(k,T),t(T,B),t(B,N),t(N,U),t(U,H),t(U,ee),t(U,O),t(N,te),t(N,q),t(q,M),t(M,C);for(let g=0;g<D.length;g+=1)D[g].m(C,null);t(q,ae),t(q,P),t(P,F),t(F,le),t(F,G),t(G,se),t(T,re),t(T,J),t(J,K),w&&w.m(K,null),j=!0},p(a,[z]){if((!j||z&2)&&l!==(l=a[1].data.title)&&(document.title=l),z&3){R=a[0].menu;let g;for(g=0;g<R.length;g+=1){const S=Ve(a,R,g);D[g]?D[g].p(S,z):(D[g]=Te(S),D[g].c(),D[g].m(C,null))}for(;g<D.length;g+=1)D[g].d(1);D.length=R.length}w&&w.p&&(!j||z&4)&&Ce(w,oe,a,a[2],j?je(oe,a[2],z,null):Ge(a[2]),null)},i(a){j||(Be(w,a),j=!0)},o(a){He(w,a),j=!1},d(a){a&&s(o),a&&s(r),a&&s(v),a&&s(k),Le(D,a),w&&w.d(a)}}}function Ke(i,l,o){let r;Me(i,Fe,E=>o(1,r=E));let{$$slots:_={},$$scope:p}=l,{data:h}=l;const I=()=>{bootstrap.Offcanvas.getInstance("#offcanvas").hide()};return i.$$set=E=>{"data"in E&&o(0,h=E.data),"$$scope"in E&&o(2,p=E.$$scope)},[h,r,p,_,I]}class We extends ze{constructor(l){super(),Oe(this,l,Ke,Je,Se,{data:0})}}export{We as default};
