(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{q7Yr:function(e,t,n){"use strict";n.r(t),n.d(t,"ExploreOpportunitiesModule",function(){return j});var i=n("ofXK"),r=n("tyNb"),a=n("fXoL");let o=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-explore-opportunities"]],decls:1,vars:0,template:function(e,t){1&e&&a["\u0275\u0275element"](0,"router-outlet")},directives:[r.h],styles:[""]}),e})();var l=n("AytR"),c=n("69f4"),p=n("8J6U"),s=n("kmKP"),m=n("Hu2X"),d=n("8CXc"),g=n("4gaG"),u=n("sYmb");function f(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",11),a["\u0275\u0275elementStart"](1,"div",12),a["\u0275\u0275listener"]("click",function(){a["\u0275\u0275restoreView"](e);const t=a["\u0275\u0275nextContext"]();return t.isMobileFilteringOn=!t.isMobileFilteringOn}),a["\u0275\u0275elementStart"](2,"span",13),a["\u0275\u0275element"](3,"i",14),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"h3",15),a["\u0275\u0275text"](5),a["\u0275\u0275pipe"](6,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}2&e&&(a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](6,1,"COMMON.FILTERS")))}function x(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",25),a["\u0275\u0275element"](1,"img",26),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"](2).$implicit,t=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("src",e.bannerImage?t.apiBlobUrl+"512px/"+e.bannerImage:"assets/img/program-banner.jpg",a["\u0275\u0275sanitizeUrl"])}}function v(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",19),a["\u0275\u0275listener"]("click",function(){a["\u0275\u0275restoreView"](e);const t=a["\u0275\u0275nextContext"]().$implicit;return a["\u0275\u0275nextContext"](2).navigateToOpportunity(t.programInstanceID)}),a["\u0275\u0275elementStart"](1,"span",20),a["\u0275\u0275element"](2,"img",21),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"h2"),a["\u0275\u0275text"](4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"div",22),a["\u0275\u0275elementStart"](6,"span"),a["\u0275\u0275text"](7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"div",23),a["\u0275\u0275elementStart"](9,"p"),a["\u0275\u0275text"](10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](11,x,2,1,"div",24),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=a["\u0275\u0275nextContext"]().$implicit,t=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("src",e.companyLogo?t.apiBlobUrl+"256px/"+e.companyLogo:"assets/img/card-placeholder.jpg",a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](e.programTitle),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](e.programInstanceTitle),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](e.programOverview),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",e.bannerImage)}}function y(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,v,12,5,"div",18),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",4!==(null==e?null:e.activationStatusID)||4===(null==e?null:e.activationStatusID)&&n.companyID===(null==e?null:e.companyID))}}function h(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",16),a["\u0275\u0275template"](1,y,2,1,"ng-container",17),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",e.filteredOpportunities)}}function I(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",25),a["\u0275\u0275element"](1,"img",29),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit,t=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("src",e.bannerImage?t.apiBlobUrl+"512px/"+e.bannerImage:"assets/img/program-banner.jpg",a["\u0275\u0275sanitizeUrl"])}}function O(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",19),a["\u0275\u0275listener"]("click",function(){a["\u0275\u0275restoreView"](e);const n=t.$implicit;return a["\u0275\u0275nextContext"](2).navigateToProgram(n.companyProgramInstanceID)}),a["\u0275\u0275elementStart"](1,"span",20),a["\u0275\u0275element"](2,"img",28),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"h2"),a["\u0275\u0275text"](4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"div",22),a["\u0275\u0275elementStart"](6,"span"),a["\u0275\u0275text"](7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"div",23),a["\u0275\u0275elementStart"](9,"p"),a["\u0275\u0275text"](10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](11,I,2,1,"div",24),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("src",e.programLogo?n.apiBlobUrl+"256px/"+e.programLogo:"assets/img/card-placeholder.jpg",a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](e.programTitle),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](e.programInstanceTitle),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](e.programOverview),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",e.bannerImage)}}function S(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",16),a["\u0275\u0275template"](1,O,12,5,"div",27),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",e.programs)}}function E(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",31),a["\u0275\u0275elementStart"](1,"div",32),a["\u0275\u0275elementStart"](2,"input",35),a["\u0275\u0275listener"]("change",function(t){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"](2).onFilter(null==t.target?null:t.target.checked)}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"label",36),a["\u0275\u0275text"](4),a["\u0275\u0275pipe"](5,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("checked",3===e.filterType),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind1"](5,2,"EXPLORE.OPPORTUNITIES-FILTER.OUR-OPPORTUNITIES")," ")}}function C(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275template"](0,E,6,4,"div",30),a["\u0275\u0275elementStart"](1,"div",31),a["\u0275\u0275elementStart"](2,"div",32),a["\u0275\u0275elementStart"](3,"input",33),a["\u0275\u0275listener"]("change",function(t){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().myApplications(t.target.checked)}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"label",34),a["\u0275\u0275text"](5),a["\u0275\u0275pipe"](6,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("ngIf",5===e.user.userGroupID),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("checked",2===e.filterType),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind1"](6,3,"EXPLORE.OPPORTUNITIES-FILTER.MY-APPLICATIONS")," ")}}function b(e,t){}function w(e,t){}function M(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",37),a["\u0275\u0275elementStart"](1,"div",38),a["\u0275\u0275elementStart"](2,"div"),a["\u0275\u0275elementStart"](3,"span",39),a["\u0275\u0275listener"]("click",function(){a["\u0275\u0275restoreView"](e);const t=a["\u0275\u0275nextContext"]();return t.isMobileFilteringOn=!t.isMobileFilteringOn}),a["\u0275\u0275element"](4,"i",40),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"h3",41),a["\u0275\u0275text"](6),a["\u0275\u0275pipe"](7,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"div",42),a["\u0275\u0275template"](9,w,0,0,"ng-template",9),a["\u0275\u0275elementStart"](10,"div",43),a["\u0275\u0275elementStart"](11,"button",44),a["\u0275\u0275listener"]("click",function(){a["\u0275\u0275restoreView"](e);const t=a["\u0275\u0275nextContext"]();return t.isMobileFilteringOn=!t.isMobileFilteringOn}),a["\u0275\u0275text"](12),a["\u0275\u0275pipe"](13,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){a["\u0275\u0275nextContext"]();const e=a["\u0275\u0275reference"](5);a["\u0275\u0275advance"](6),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](7,3,"COMMON.FILTERS")),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngTemplateOutlet",e),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind1"](13,5,"COMMON.DONE")," ")}}const P=function(e){return{"d-none-imp":e}},T=[{path:"",component:o,children:[{path:"",component:(()=>{class e extends c.a{constructor(e,t,n,i,r,a){super(r,a),this.userService=e,this.router=t,this.companyService=n,this.programsService=i,this.mobileResponsiveService=r,this.location=a,this.opportunities=[],this.filteredOpportunities=[],this.filterType=1,this.programs=[],this.apiBlobUrl=l.a.apiBlobUrl+"/",this.user=this.userService.user.getValue(),this.contactID=this.user.contactID,this.companyID=this.user.companyID}ngOnInit(){super.ngOnInit(),this.getOpportunities()}getOpportunities(){this.loading=!0;let e=0;const t=window.location.hostname.toLocaleLowerCase();t.includes("enviroserv")?e=4092:t.includes("edgegrowth")?e=3630:t.includes("qstp")&&(e=3628),this.programsService.getOpenInstances(0,e).subscribe(e=>{this.opportunities=e,this.filteredOpportunities=e,this.loading=!1})}navigateToOpportunity(e){this.router.navigate(["/apply",e])}onFilter(e){this.filterType=3,this.filteredOpportunities=e?this.opportunities.filter(e=>e.companyID===this.companyID):this.opportunities}myApplications(e){if(!e)return this.opportunities=[],this.filterType=1,void this.getOpportunities();this.loading=!0,this.programs=[],this.filterType=2,this.companyService.getPortfolioList(this.companyID,0,0,0,0,0,this.contactID).subscribe(e=>{this.programs=Object(p.j)(e,"companyProgramInstanceID"),this.loading=!1})}navigateToProgram(e){this.router.navigate(["/enrollment/program",e])}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](r.c),a["\u0275\u0275directiveInject"](m.a),a["\u0275\u0275directiveInject"](d.a),a["\u0275\u0275directiveInject"](g.a),a["\u0275\u0275directiveInject"](i.j))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-opportunity-list"]],features:[a["\u0275\u0275InheritDefinitionFeature"]],decls:16,vars:11,consts:[[3,"ngClass"],["class","page-title d-flex py-2 justify-content-end",4,"ngIf"],["class","network-list w-100 d-flex flex-column",4,"ngIf"],["Filter",""],[1,"col-auto","filter-section"],[1,"sticky-container","d-flex","flex-column"],[1,"card","w-100"],[1,"card-header"],[1,"card-body"],[3,"ngTemplateOutlet"],["class","d-flex flex-column w-100",4,"ngIf"],[1,"page-title","d-flex","py-2","justify-content-end"],[1,"d-flex","align-items-center","cursor-pointer",3,"click"],[1,"cursor-pointer","text-primary","display-inline","mr-2"],[1,"fas","fa-cog","is-gray"],[1,"display-inline","mb-0","meta"],[1,"network-list","w-100","d-flex","flex-column"],[4,"ngFor","ngForOf"],["class","entry",3,"click",4,"ngIf"],[1,"entry",3,"click"],[1,"media","avatar","avatar-48","avatar-48-square"],[1,"img-fluid","img-48",3,"src"],[1,"meta"],[1,"entry-content"],["class","entry-media",4,"ngIf"],[1,"entry-media"],[1,"img-fluid","img-border",3,"src"],["class","entry",3,"click",4,"ngFor","ngForOf"],["alt","Future Robotics",1,"img-fluid","img-48",3,"src"],["alt","",1,"img-fluid","img-border",3,"src"],["class","form-group d-flex flex-column",4,"ngIf"],[1,"form-group","d-flex","flex-column"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","myApplications",1,"custom-control-input",3,"checked","change"],["for","myApplications",1,"custom-control-label"],["type","checkbox","id","filter",1,"custom-control-input",3,"checked","change"],["for","filter",1,"custom-control-label"],[1,"d-flex","flex-column","w-100"],[1,"page-title","d-flex","justify-content-between","py-2"],[1,"cursor-pointer","text-primary","display-inline","mr-2",3,"click"],[1,"fas","fa-long-arrow-alt-left"],[1,"display-inline","meta"],[1,"filter-container"],[1,"text-right"],[1,"btn","btn-primary",3,"click"]],template:function(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275template"](1,f,7,3,"div",1),a["\u0275\u0275template"](2,h,2,1,"div",2),a["\u0275\u0275template"](3,S,2,1,"div",2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](4,C,7,5,"ng-template",null,3,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275elementStart"](6,"div",4),a["\u0275\u0275elementStart"](7,"div",5),a["\u0275\u0275elementStart"](8,"div",6),a["\u0275\u0275elementStart"](9,"div",7),a["\u0275\u0275elementStart"](10,"h3"),a["\u0275\u0275text"](11),a["\u0275\u0275pipe"](12,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](13,"div",8),a["\u0275\u0275template"](14,b,0,0,"ng-template",9),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](15,M,14,7,"div",10)),2&e){const e=a["\u0275\u0275reference"](5);a["\u0275\u0275property"]("ngClass",a["\u0275\u0275pureFunction1"](9,P,t.isMobileFilteringOn)),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.isMobileScreenSize),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",2!==t.filterType),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",2===t.filterType),a["\u0275\u0275advance"](8),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](12,7,"COMMON.FILTERS")),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngTemplateOutlet",e),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.isMobileFilteringOn)}},directives:[i.l,i.n,i.r,i.m],pipes:[u.c],styles:[".filter-section[_ngcontent-%COMP%]{width:100%;max-width:calc(100% - 600px)}@media (max-width:768px){.filter-section[_ngcontent-%COMP%]{display:none!important}}.filter-section[_ngcontent-%COMP%]   .sticky-container[_ngcontent-%COMP%]{max-width:300px;transform:translateY(-45px)}.filter-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{max-width:300px}.filter-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{background:none}.filter-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin:0}.non-toggle[_ngcontent-%COMP%]{background-size:0!important}.non-toggle[_ngcontent-%COMP%]:after, .non-toggle[_ngcontent-%COMP%]:before{display:none}.opportunity-container[_ngcontent-%COMP%]{max-width:600px;flex:1;width:100%;min-height:calc(100vh - 105px)}"]}),e})()}]}];let k=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.g.forChild(T)],r.g]}),e})();var F=n("j4PG");let j=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,k,F.a,u.b]]}),e})()}}]);