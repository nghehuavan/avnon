(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{lE0e:function(e,t,n){"use strict";n.r(t),n.d(t,"StartupDashboardModule",function(){return I});var a=n("ofXK"),r=n("tyNb"),o=n("8J6U"),i=n("AytR"),l=n("XNiG"),c=n("1G5W"),p=n("fXoL"),m=n("Hu2X"),s=n("kmKP"),d=n("Jn3s"),g=n("SdWN");function u(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"p",10),p["\u0275\u0275text"](1," You're not part of a program yet. "),p["\u0275\u0275elementStart"](2,"a",15),p["\u0275\u0275text"](3,"Click here to find one"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"div",16),p["\u0275\u0275listener"]("click",function(){p["\u0275\u0275restoreView"](e);const n=t.$implicit;return p["\u0275\u0275nextContext"]().navigateToProgram(n.companyProgramInstanceID)}),p["\u0275\u0275elementStart"](1,"span",6),p["\u0275\u0275element"](2,"img",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"div",17),p["\u0275\u0275elementStart"](4,"h2"),p["\u0275\u0275text"](5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"div",9),p["\u0275\u0275elementStart"](7,"span"),p["\u0275\u0275text"](8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("src",e.programLogo?n.apiBlob+"256px/"+e.programLogo:"assets/img/card-placeholder.jpg",p["\u0275\u0275sanitizeUrl"]),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](e.programTitle),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](e.programInstanceTitle)}}function y(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"div",16),p["\u0275\u0275listener"]("click",function(){p["\u0275\u0275restoreView"](e);const n=t.$implicit;return p["\u0275\u0275nextContext"]().navigateToProgram(n.companyProgramInstanceID)}),p["\u0275\u0275elementStart"](1,"span",6),p["\u0275\u0275element"](2,"img",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"div",17),p["\u0275\u0275elementStart"](4,"h2"),p["\u0275\u0275text"](5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"div",9),p["\u0275\u0275elementStart"](7,"span"),p["\u0275\u0275text"](8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("src",e.programLogo?n.apiBlob+"256px/"+e.programLogo:"assets/img/card-placeholder.jpg",p["\u0275\u0275sanitizeUrl"]),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](e.programTitle),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](e.programInstanceTitle)}}const f=[{path:"",component:(()=>{class e{constructor(e,t,n,a){this.companyService=e,this.location=t,this.router=n,this.userService=a,this.apiBlob=i.a.apiBlobUrl+"/",this.active=[],this.applied=[],this.destroy$=new l.a,this.user=this.userService.user.getValue(),this.contactID=this.user.contactID,this.companyID=this.user.companyID}ngOnInit(){this.getCompany(),this.getPrograms()}getCompany(){this.companyService.getCompanyProfile(this.companyID).pipe(Object(c.a)(this.destroy$)).subscribe(e=>{this.company=e})}getPrograms(){this.programLoading=!0,this.companyService.getPortfolioList(this.companyID,0,0,0,0,0,this.contactID).pipe(Object(c.a)(this.destroy$)).subscribe(e=>{const t=e.filter(e=>[1,2].includes(e.programStageTypeID)),n=e.filter(e=>[3,4].includes(e.programStageTypeID));this.applied=Object(o.j)(t,"companyProgramInstanceID"),this.active=Object(o.j)(n,"companyProgramInstanceID"),this.programLoading=!1})}navigateToProgram(e){this.router.navigate(["/enrollment/program",e])}back(){this.location.back()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(p["\u0275\u0275directiveInject"](m.a),p["\u0275\u0275directiveInject"](a.j),p["\u0275\u0275directiveInject"](r.c),p["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["app-startup-dashboard"]],decls:26,vars:11,consts:[[3,"avnonLoader"],[1,"page-title"],[1,"cursor-pointer","text-primary","display-inline","mr-2",3,"click"],[1,"fas","fa-long-arrow-alt-left"],[1,"display-inline"],[1,"entry","border-none"],[1,"media","avatar","avatar-48","avatar-48-square"],["alt","Avatar",1,"img-fluid","img-48",3,"src"],[1,"mt-1"],[1,"meta"],[1,"pl-3","pr-3"],[1,"filter-container","d-flex","w-100","align-items-center","border-bottom","border-top"],["class","pl-3 pr-3",4,"ngIf"],["class","entry",3,"click",4,"ngFor","ngForOf"],[1,"filter-container","d-flex","w-100","align-items-center","border-bottom","mt-4"],["routerLink","/explore/opportunities"],[1,"entry",3,"click"],[1,"d-flex"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",0),p["\u0275\u0275elementStart"](1,"div",1),p["\u0275\u0275elementStart"](2,"span",2),p["\u0275\u0275listener"]("click",function(){return t.back()}),p["\u0275\u0275element"](3,"i",3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"h1",4),p["\u0275\u0275text"](5,"Dashboar"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"div",5),p["\u0275\u0275elementStart"](7,"span",6),p["\u0275\u0275element"](8,"img",7),p["\u0275\u0275pipe"](9,"avatar"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](10,"h2",8),p["\u0275\u0275text"](11),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](12,"div",9),p["\u0275\u0275elementStart"](13,"span"),p["\u0275\u0275text"](14),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](15,"p",10),p["\u0275\u0275text"](16),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](17,"div",11),p["\u0275\u0275elementStart"](18,"span"),p["\u0275\u0275text"](19,"Programs we've applied to:"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](20,u,4,0,"p",12),p["\u0275\u0275template"](21,v,9,3,"div",13),p["\u0275\u0275elementStart"](22,"div",14),p["\u0275\u0275elementStart"](23,"span"),p["\u0275\u0275text"](24),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](25,y,9,3,"div",13),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("avnonLoader",t.loading||t.programLoading),p["\u0275\u0275advance"](8),p["\u0275\u0275property"]("src",p["\u0275\u0275pipeBind1"](9,9,null==t.company?null:t.company.companyLogo),p["\u0275\u0275sanitizeUrl"]),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate1"](" ",null==t.company?null:t.company.companyName," "),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](null==t.company?null:t.company.industry),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate"](null==t.company?null:t.company.companyMission),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("ngIf",!t.applied.length),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",t.applied),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate1"]("Active on ",t.active.length," programs"),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",t.active))},directives:[d.a,a.n,a.m,r.f],pipes:[g.a],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.g.forChild(f)],r.g]}),e})();var S=n("j4PG"),x=n("pr+S");let I=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,h,S.a,x.a]]}),e})()}}]);