(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{i5ln:function(t,e,n){"use strict";n.r(e),n.d(e,"YoutubeModule",(function(){return G}));var i=n("tyNb"),c=n("LjFu"),r=n("PCNd"),a=n("l7P3"),o=n("GtpR"),s=n("Ndu9");const d=Object(a.o)(s.a),p=Object(a.p)(d,t=>t.videos),b=Object(a.p)(d,t=>t.customVideos),l=Object(a.p)(d,t=>t.loading),u=Object(a.p)(d,t=>t.error);var g=n("6jC6"),f=n("fXoL"),_=n("cplz"),m=n("dNgK"),h=n("ofXK"),v=n("bv9b"),x=n("Wp6s");let y=(()=>{class t{dateToDay(t){const e=Date.now();return Math.round((e-t)/1e3/60/60/24)}transform(t){const e=new Date(t).valueOf(),n=this.dateToDay(e),i={"#005eff":n<7,"#2d8000":n>7&&n<30,"#ffff00":n>30&&n<180,"#ff0000":n>180};for(const c in i)if(i[c])return c}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=f.Lb({name:"videoDate",type:t,pure:!0}),t})();const w=function(t){return{"border-color":t}};let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f.Gb({type:t,selectors:[["app-custom-search-item"]],inputs:{videoData:"videoData"},decls:11,vars:9,consts:[[1,"search-item"],[1,"card",3,"ngStyle"],[1,"card__figure"],["target","_blank",3,"href"],["mat-card-image","","alt","Picture",1,"card__img",3,"src"],[1,"card__content"],[1,"card__title"],[1,"card__description"]],template:function(t,e){1&t&&(f.Sb(0,"div",0),f.Sb(1,"mat-card",1),f.ec(2,"videoDate"),f.Sb(3,"div",2),f.Sb(4,"a",3),f.Nb(5,"img",4),f.Rb(),f.Rb(),f.Sb(6,"mat-card-content",5),f.Sb(7,"h3",6),f.Ac(8),f.Rb(),f.Sb(9,"p",7),f.Ac(10),f.Rb(),f.Rb(),f.Rb(),f.Rb()),2&t&&(f.Bb(1),f.jc("ngStyle",f.lc(7,w,f.fc(2,5,e.videoData.date))),f.Bb(3),f.jc("href",e.videoData.videoLink,f.rc),f.Bb(1),f.jc("src",e.videoData.imgLink,f.rc),f.Bb(3),f.Bc(e.videoData.title),f.Bb(2),f.Bc(e.videoData.description))},directives:[x.a,h.l,x.e,x.c],pipes:[y],styles:["[_nghost-%COMP%]{cursor:pointer}.search-item[_ngcontent-%COMP%]{padding:14px}.card[_ngcontent-%COMP%], .search-item[_ngcontent-%COMP%]{box-sizing:border-box}.card[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:263px;height:365px;border-bottom:5px solid}.card__info-list[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;padding:0;margin:0 0 10px;list-style-type:none}.card__info-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:5px;vertical-align:-1px}.card__content[_ngcontent-%COMP%]{flex:1}.card__title[_ngcontent-%COMP%]{max-height:90px;font-style:normal;font-weight:700;font-size:20px;line-height:23px;text-align:right;color:#4f4f4f;overflow:auto}.card__description[_ngcontent-%COMP%]{max-height:100px;word-break:break-word;overflow:auto}.card__footer[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:flex-end}"]}),t})();var C=n("bTqV");const M=function(t){return{"border-color":t}},S=function(t){return["/youtube",t]};let D=(()=>{class t{ngOnInit(){this.statistics=this.videoData.statistics,this.snippet=this.videoData.snippet}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f.Gb({type:t,selectors:[["app-search-item"]],inputs:{videoData:"videoData"},decls:28,vars:14,consts:[[1,"search-item"],[1,"card",3,"ngStyle"],[1,"card__figure"],["mat-card-image","","alt","Picture",1,"card__img",3,"src"],[1,"card__content"],[1,"card__info-list"],[1,"card__info-item"],["src","../../../../assets/img/viewed.svg","alt","view"],[1,"card__info-num"],["src","../../../../assets/img/liked.svg","alt","like"],["src","../../../../assets/img/dislike.svg","alt","dislike"],["src","../../../../assets/img/comments.svg","alt","comments"],[1,"card__title"],[1,"card__footer"],["mat-button","",3,"routerLink"]],template:function(t,e){1&t&&(f.Sb(0,"div",0),f.Sb(1,"mat-card",1),f.ec(2,"videoDate"),f.Sb(3,"div",2),f.Nb(4,"img",3),f.Rb(),f.Sb(5,"mat-card-content",4),f.Sb(6,"ul",5),f.Sb(7,"li",6),f.Nb(8,"img",7),f.Sb(9,"span",8),f.Ac(10),f.Rb(),f.Rb(),f.Sb(11,"li",6),f.Nb(12,"img",9),f.Sb(13,"span",8),f.Ac(14),f.Rb(),f.Rb(),f.Sb(15,"li",6),f.Nb(16,"img",10),f.Sb(17,"span",8),f.Ac(18),f.Rb(),f.Rb(),f.Sb(19,"li",6),f.Nb(20,"img",11),f.Sb(21,"span",8),f.Ac(22),f.Rb(),f.Rb(),f.Rb(),f.Sb(23,"h3",12),f.Ac(24),f.Rb(),f.Rb(),f.Sb(25,"mat-card-actions",13),f.Sb(26,"button",14),f.Ac(27,"more..."),f.Rb(),f.Rb(),f.Rb(),f.Rb()),2&t&&(f.Bb(1),f.jc("ngStyle",f.lc(10,M,f.fc(2,8,e.snippet.publishedAt))),f.Bb(3),f.jc("src",e.snippet.thumbnails.medium.url,f.rc),f.Bb(6),f.Bc(e.statistics.viewCount),f.Bb(4),f.Bc(e.statistics.likeCount),f.Bb(4),f.Bc(e.statistics.dislikeCount),f.Bb(4),f.Bc(e.statistics.commentCount),f.Bb(2),f.Bc(e.snippet.title),f.Bb(2),f.jc("routerLink",f.lc(12,S,e.videoData.id)))},directives:[x.a,h.l,x.e,x.c,x.b,C.a,i.c],pipes:[y],styles:["[_nghost-%COMP%]{cursor:pointer}.search-item[_ngcontent-%COMP%]{padding:14px}.card[_ngcontent-%COMP%], .search-item[_ngcontent-%COMP%]{box-sizing:border-box}.card[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:263px;height:365px;border-bottom:5px solid}.card__info-list[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;padding:0;margin:0 0 10px;list-style-type:none}.card__info-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:5px;vertical-align:-1px}.card__content[_ngcontent-%COMP%]{flex:1}.card__title[_ngcontent-%COMP%]{max-height:90px;font-style:normal;font-weight:700;font-size:20px;line-height:23px;text-align:right;color:#4f4f4f;overflow:auto}.card__footer[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:flex-end}"],changeDetection:0}),t})(),P=(()=>{class t{transform(t,e){return t&&e&&t.sort((t,n)=>e.includes("up")?parseInt(t.statistics.viewCount,10)-parseInt(n.statistics.viewCount,10):parseInt(n.statistics.viewCount,10)-parseInt(t.statistics.viewCount,10)),t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=f.Lb({name:"sortByView",type:t,pure:!0}),t})(),B=(()=>{class t{transform(t,e){return t&&e&&t.sort((t,n)=>e.includes("up")?new Date(t.snippet.publishedAt).valueOf()-new Date(n.snippet.publishedAt).valueOf():new Date(n.snippet.publishedAt).valueOf()-new Date(t.snippet.publishedAt).valueOf()),t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=f.Lb({name:"sortByDate",type:t,pure:!0}),t})(),R=(()=>{class t{transform(t,e){return t&&e&&"string"==typeof e?t.filter(t=>t.snippet.title.toLowerCase().includes(e.toLowerCase())):t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=f.Lb({name:"sortByName",type:t,pure:!0}),t})();function j(t,e){1&t&&f.Nb(0,"mat-progress-bar",3)}function k(t,e){1&t&&f.Nb(0,"app-custom-search-item",4),2&t&&f.jc("videoData",e.$implicit)}function A(t,e){1&t&&f.Nb(0,"app-search-item",4),2&t&&f.jc("videoData",e.$implicit)}let N=(()=>{class t{constructor(t,e,n,i,c){this.router=t,this.cdr=e,this.dataService=n,this.snackBar=i,this.store$=c,this.loading$=this.store$.pipe(Object(a.q)(l)),this.videos$=this.store$.pipe(Object(a.q)(p)),this.customVideos$=this.store$.pipe(Object(a.q)(b))}sortBy(t){const[e,n]=t;((t,e)=>{this["sort"+Object(g.a)(t)]=e})(e,n),this.cdr.detectChanges()}openSnackBar(t,e){this.snackBar.open(t,e,{duration:2e3})}ngOnInit(){this.error$=this.store$.pipe(Object(a.q)(u)).subscribe({next:t=>{t&&this.openSnackBar(t,"error")}}),this.router.queryParams.subscribe(t=>{Object.entries(t).forEach(([t,e])=>{"videoName"===t&&this.store$.dispatch(new o.b({name:e})),["date","view","word"].includes(t)&&this.sortBy([t,e])})})}ngOnDestroy(){this.error$.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(f.Mb(i.a),f.Mb(f.h),f.Mb(_.a),f.Mb(m.a),f.Mb(a.h))},t.\u0275cmp=f.Gb({type:t,selectors:[["app-search-results"]],decls:10,vars:18,consts:[[1,"search-result"],["mode","indeterminate",4,"ngIf"],[3,"videoData",4,"ngFor","ngForOf"],["mode","indeterminate"],[3,"videoData"]],template:function(t,e){1&t&&(f.Sb(0,"div",0),f.zc(1,j,1,0,"mat-progress-bar",1),f.ec(2,"async"),f.zc(3,k,1,1,"app-custom-search-item",2),f.ec(4,"async"),f.zc(5,A,1,1,"app-search-item",2),f.ec(6,"sortByView"),f.ec(7,"sortByDate"),f.ec(8,"sortByName"),f.ec(9,"async"),f.Rb()),2&t&&(f.Bb(1),f.jc("ngIf",f.fc(2,3,e.loading$)),f.Bb(2),f.jc("ngForOf",f.fc(4,5,e.customVideos$)),f.Bb(2),f.jc("ngForOf",f.gc(6,7,f.gc(7,10,f.gc(8,13,f.fc(9,16,e.videos$),e.sortWord),e.sortDate),e.sortView)))},directives:[h.k,h.j,v.a,O,D],pipes:[h.b,P,B,R],styles:["[_nghost-%COMP%]{height:100%}.search-result[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;max-width:1168px;margin:0 auto}"],changeDetection:0}),t})();var $=n("lJxs");let L=(()=>{class t{transform(t){return new Date(t).toLocaleString("en-En",{weekday:"long",month:"short",day:"2-digit",year:"numeric"})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=f.Lb({name:"customDate",type:t,pure:!0}),t})();const z=function(t){return{"border-bottom-color":t}},I=function(){return["/youtube"]},V=function(t){return{"background-color":t}};function q(t,e){if(1&t&&(f.Sb(0,"div",1),f.Sb(1,"mat-card",2),f.ec(2,"videoDate"),f.Sb(3,"div",3),f.Nb(4,"img",4),f.Rb(),f.Sb(5,"mat-card-content",5),f.ec(6,"videoDate"),f.Sb(7,"div",6),f.Sb(8,"h2",7),f.Ac(9),f.Rb(),f.Sb(10,"p",8),f.Ac(11),f.ec(12,"customDate"),f.Rb(),f.Rb(),f.Sb(13,"div",9),f.Sb(14,"h3",10),f.Ac(15," Description: "),f.Rb(),f.Sb(16,"p",11),f.Ac(17),f.Rb(),f.Rb(),f.Sb(18,"div",12),f.Sb(19,"ul",13),f.Sb(20,"li",14),f.Nb(21,"img",15),f.Sb(22,"span",16),f.Ac(23),f.Rb(),f.Rb(),f.Sb(24,"li",14),f.Nb(25,"img",17),f.Sb(26,"span",16),f.Ac(27),f.Rb(),f.Rb(),f.Sb(28,"li",14),f.Nb(29,"img",18),f.Sb(30,"span",16),f.Ac(31),f.Rb(),f.Rb(),f.Sb(32,"li",14),f.Nb(33,"img",19),f.Sb(34,"span",16),f.Ac(35),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Nb(36,"div",20),f.ec(37,"videoDate"),f.Rb()),2&t){const t=f.dc();f.Bb(1),f.vc("filter: drop-shadow(5px 10px 10px ",f.fc(2,14,t.videoData.snippet.publishedAt),")"),f.Bb(3),f.jc("src",t.videoData.snippet.thumbnails.standard.url,f.rc),f.Bb(1),f.jc("ngStyle",f.lc(22,z,f.fc(6,16,t.videoData.snippet.publishedAt))),f.Bb(4),f.Cc(" ",t.videoData.snippet.title," "),f.Bb(2),f.Cc(" ",f.fc(12,18,t.videoData.snippet.publishedAt)," "),f.Bb(6),f.Cc(" ",t.videoData.snippet.description," "),f.Bb(6),f.Bc(t.videoData.statistics.viewCount),f.Bb(4),f.Bc(t.videoData.statistics.likeCount),f.Bb(4),f.Bc(t.videoData.statistics.dislikeCount),f.Bb(4),f.Bc(t.videoData.statistics.commentCount),f.Bb(1),f.jc("routerLink",f.kc(24,I))("ngStyle",f.lc(25,V,f.fc(37,20,t.videoData.snippet.publishedAt)))}}const F=[{path:"",component:N,canActivate:[c.a]},{path:":id",component:(()=>{class t{constructor(t,e,n){this.router=t,this.route=e,this.store$=n}ngOnInit(){this.route.params.subscribe(t=>{const{id:e}=t;this.video$=this.store$.pipe(Object(a.q)(p),Object($.a)(t=>{const n=t.find(t=>t.id===e);if(!n)throw new Error("Video not find");return n})).subscribe({next:t=>{this.videoData=t},error:t=>{this.router.navigate(["error"])}})})}ngOnDestroy(){this.video$.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(f.Mb(i.b),f.Mb(i.a),f.Mb(a.h))},t.\u0275cmp=f.Gb({type:t,selectors:[["app-detailed-information"]],decls:1,vars:1,consts:[["class","card__wrap",4,"ngIf"],[1,"card__wrap"],[1,"card"],[1,"card__aside"],["alt","Picture",1,"card__img",3,"src"],[1,"card__content",3,"ngStyle"],[1,"card__header"],[1,"card__title"],[1,"card__date"],[1,"card__body"],[1,"card__subtitle"],[1,"card__description"],[1,"card__footer"],[1,"card__info-list"],[1,"card__info-item"],["src","../../../../assets/img/viewed.svg","alt","view"],[1,"card__info-num"],["src","../../../../assets/img/liked.svg","alt","like"],["src","../../../../assets/img/dislike.svg","alt","dislike"],["src","../../../../assets/img/comments.svg","alt","comments"],[1,"card__btn",3,"routerLink","ngStyle"]],template:function(t,e){1&t&&f.zc(0,q,38,27,"div",0),2&t&&f.jc("ngIf",e.videoData)},directives:[h.k,x.a,x.c,h.l,i.c],pipes:[y,L],styles:["[_nghost-%COMP%]{height:100%;padding-top:50px}.card[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;justify-content:center}.card[_ngcontent-%COMP%]{padding:0;color:#000;font-style:normal}@media screen and (max-width:1024px){.card[_ngcontent-%COMP%]{max-width:436px;flex-direction:column}}.card__wrap[_ngcontent-%COMP%]{position:relative;padding-left:32px}.card__btn[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:32px;width:32px;background-image:url(Vector\\ 1.e49152f88a48d781d157.svg);background-repeat:no-repeat;background-position:50%;border-radius:5px 0 0 5px;cursor:pointer;outline:none}.card__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-bottom:5px solid}.card__img[_ngcontent-%COMP%]{width:100%;height:100%}.card__body[_ngcontent-%COMP%], .card__footer[_ngcontent-%COMP%]{flex:1}.card__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card__title[_ngcontent-%COMP%]{font-weight:700;font-size:24px}.card__date[_ngcontent-%COMP%]{margin:0;font-weight:400;font-size:10px;color:#828282}.card__content[_ngcontent-%COMP%]{max-width:436px;padding:35px}.card__subtitle[_ngcontent-%COMP%]{font-size:14px;line-height:16px}.card__description[_ngcontent-%COMP%]{max-height:180px;font-size:12px;color:#828282;overflow:auto}.card__footer[_ngcontent-%COMP%]{align-items:flex-end}.card__footer[_ngcontent-%COMP%], .card__info-list[_ngcontent-%COMP%]{display:flex;justify-content:center}.card__info-list[_ngcontent-%COMP%]{list-style-type:none}.card__info-item[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:16px}.card__info-num[_ngcontent-%COMP%]{margin-left:3px;font-size:10px}"]}),t})(),canActivate:[c.a]}];let G=(()=>{class t{}return t.\u0275mod=f.Kb({type:t}),t.\u0275inj=f.Jb({factory:function(e){return new(e||t)},imports:[[r.a,i.d.forChild(F)]]}),t})()}}]);