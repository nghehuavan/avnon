(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{KGtp:function(t,e,n){"use strict";n.r(e),n.d(e,"AssignmentModule",function(){return j});var a=n("ofXK"),i=n("tyNb"),s=n("AytR"),r=n("cp0P"),o=n("eIep"),c=n("sSaZ"),m=n("OzGw"),l=n("fXoL"),p=n("k9EJ"),d=n("Hu2X"),g=n("kmKP"),u=n("1kSV");function h(t,e){if(1&t&&l["\u0275\u0275element"](0,"img",24),2&t){const t=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("src",t.assignment.companyLogo?t.apiBlob+t.assignment.companyLogo:"assets/img/placeholder.jpg",l["\u0275\u0275sanitizeUrl"])}}function f(t,e){if(1&t&&(l["\u0275\u0275elementStart"](0,"p",25),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&t){const t=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate3"](" ",null==t.assignment?null:t.assignment.companyName," with ",t.contract.members[0].firstName," ",t.contract.members[0].surname," ")}}function v(t,e){if(1&t&&(l["\u0275\u0275elementStart"](0,"span",26),l["\u0275\u0275element"](1,"i",27),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"]()),2&t){const t=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",t.assignment.monthWorking," ")}}function I(t,e){if(1&t&&(l["\u0275\u0275elementStart"](0,"span",26),l["\u0275\u0275element"](1,"i",28),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"]()),2&t){const t=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",t.assignment.totalSessions," sessions ")}}function b(t,e){if(1&t&&(l["\u0275\u0275elementStart"](0,"span",26),l["\u0275\u0275element"](1,"i",29),l["\u0275\u0275text"](2),l["\u0275\u0275pipe"](3,"percent"),l["\u0275\u0275elementEnd"]()),2&t){const t=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](3,1,t.assignmentImpact.confidenceRating||0)," stability ")}}const S=function(t){return["/assignment",t]},y=function(){return{exact:!0}},x=[{path:"",component:(()=>{class t{constructor(t,e,n,a,i,r){this.contractService=t,this.activatedRoute=e,this.companyService=n,this.userService=a,this.location=i,this.ngbModal=r,this.apiBlob=s.a.apiBlobUrl+"/",this.contracts=[],this.user=this.userService.user.getValue(),this.contactID=this.user.contactID,this.companyID=this.user.companyID}ngOnInit(){this.contractAssignmentID=+this.activatedRoute.parent.snapshot.params.contractAssignmentID,this.contractService.getAssignmentImpact(0,this.contractAssignmentID).subscribe(t=>{t[0]&&(this.assignmentImpact=t[0],this.assignmentImpact.salesPercentIncrease>1&&(this.assignmentImpact.salesPercentIncrease-=1))}),this.getProfile()}getProfile(){this.loading=!0,this.contractService.getContractAssignment(0,this.contractAssignmentID,0,0,0,0,0,0).pipe(Object(o.a)(t=>{this.assignment=t[0];const e=new Date(this.assignment.assignmentStartDate),n=new Date,a=n.getMonth()-e.getMonth()+12*(e.getFullYear()-n.getFullYear());return this.assignment.monthWorking=a>1?a+" month":1===a?"a month":"less then a month",Object(r.a)(this.contractService.getContract(0,0,this.assignment.contractID,0,0,0,0,0,0),this.companyService.getCompanyProfile(this.assignment.companyID))})).subscribe(t=>{this.contract=t[0][0],console.log("\ud83d\ude80 > AssignmentComponent > .subscribe > this.contract",this.contract),this.company=t[1],this.loading=!1})}onEdit(){const t=this.ngbModal.open(c.a);t.componentInstance.contractAssignment=this.assignment,t.result.then(()=>{this.getProfile()})}onDelete(){const t=this.ngbModal.open(m.a);t.componentInstance.objectType="Contract Assignment",t.componentInstance.objectDetails=`${this.assignment.companyName} with ${this.contract.members[0].firstName} ${this.contract.members[0].surname}`,t.result.then(t=>{"Yes"===t&&this.contractService.deleteContractAssignment(this.contractAssignmentID).subscribe(()=>{this.location.back()})})}back(){this.location.back()}}return t.\u0275fac=function(e){return new(e||t)(l["\u0275\u0275directiveInject"](p.a),l["\u0275\u0275directiveInject"](i.a),l["\u0275\u0275directiveInject"](d.a),l["\u0275\u0275directiveInject"](g.a),l["\u0275\u0275directiveInject"](a.j),l["\u0275\u0275directiveInject"](u.p))},t.\u0275cmp=l["\u0275\u0275defineComponent"]({type:t,selectors:[["app-assignment"]],decls:38,vars:12,consts:[[1,"page-title"],[1,"cursor-pointer","text-primary","display-inline","mr-2",3,"click"],[1,"fas","fa-long-arrow-alt-left"],[1,"display-inline"],[1,"entry","border-none"],[1,"media","avatar","avatar-48","avatar-48-square"],["class","img-fluid img-48","alt","Avatar",3,"src",4,"ngIf"],[1,"mt-1"],[1,"meta"],[1,"bottom-actions","d-flex","justify-content-end","align-items-center"],[1,"actions","mt-3","mr-3"],[1,"dropdown"],["type","button","id","dd1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-30"],[1,"ico","dots-ico","dots-ico--gray"],["aria-labelledby","dd1",1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"click"],[1,"profile-overview","pb-0","pt-0","mt-0"],["class","p-23",4,"ngIf"],[1,"icon-list","mt-2"],["class","text-muted other mt-2 mr-4",4,"ngIf"],[1,"tabs"],[1,"nav","nav-fill","justify-content-center"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLink","routerLinkActiveOptions"],["alt","Avatar",1,"img-fluid","img-48",3,"src"],[1,"p-23"],[1,"text-muted","other","mt-2","mr-4"],[1,"fas","fa-clock"],[1,"fas","fa-user"],[1,"fas","fa-heartbeat"]],template:function(t,e){1&t&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275elementStart"](1,"div",0),l["\u0275\u0275elementStart"](2,"span",1),l["\u0275\u0275listener"]("click",function(){return e.back()}),l["\u0275\u0275element"](3,"i",2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"h1",3),l["\u0275\u0275text"](5," Mentoring Assignment "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"div",4),l["\u0275\u0275elementStart"](7,"span",5),l["\u0275\u0275template"](8,h,1,1,"img",6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"h2",7),l["\u0275\u0275elementStart"](10,"a"),l["\u0275\u0275text"](11),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"span",8),l["\u0275\u0275text"](13),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"div",9),l["\u0275\u0275elementStart"](15,"div",10),l["\u0275\u0275elementStart"](16,"div",11),l["\u0275\u0275elementStart"](17,"button",12),l["\u0275\u0275element"](18,"span",13),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](19,"ul",14),l["\u0275\u0275elementStart"](20,"li"),l["\u0275\u0275elementStart"](21,"a",15),l["\u0275\u0275listener"]("click",function(){return e.onEdit()}),l["\u0275\u0275text"](22,"Edit"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](23,"li"),l["\u0275\u0275elementStart"](24,"a",15),l["\u0275\u0275listener"]("click",function(){return e.onDelete()}),l["\u0275\u0275text"](25,"Delete"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](26,"div",16),l["\u0275\u0275template"](27,f,2,3,"p",17),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](28,"div",18),l["\u0275\u0275template"](29,v,3,1,"span",19),l["\u0275\u0275template"](30,I,3,1,"span",19),l["\u0275\u0275template"](31,b,4,3,"span",19),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](32,"div",20),l["\u0275\u0275elementStart"](33,"ul",21),l["\u0275\u0275elementStart"](34,"li",22),l["\u0275\u0275elementStart"](35,"a",23),l["\u0275\u0275text"](36," Journal "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](37,"router-outlet")),2&t&&(l["\u0275\u0275advance"](8),l["\u0275\u0275property"]("ngIf",e.assignment),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate1"](" ",null==e.assignment?null:e.assignment.companyName," "),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" @",null==e.assignment?null:e.assignment.companyName," "),l["\u0275\u0275advance"](14),l["\u0275\u0275property"]("ngIf",e.assignment&&e.contract),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",null==e.assignment?null:e.assignment.monthWorking),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.assignment),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.assignmentImpact),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction1"](9,S,e.contractAssignmentID))("routerLinkActiveOptions",l["\u0275\u0275pureFunction0"](11,y)))},directives:[a.n,i.f,i.e,i.h],pipes:[a.t],styles:[""]}),t})(),children:[{path:"",component:n("Nyq6").a}]}];let E=(()=>{class t{}return t.\u0275mod=l["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.g.forChild(x)],i.g]}),t})();var k=n("3Pt+"),A=n("oAWB"),w=n("j4PG"),D=n("ro8G");let j=(()=>{class t{}return t.\u0275mod=l["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[a.c,E,A.a,w.a,k.l,k.z,D.AssignmentMenteeDetailModule]]}),t})()}}]);