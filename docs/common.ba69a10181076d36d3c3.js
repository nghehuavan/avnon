(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/IAE":function(t,e,n){"use strict";n.d(e,"a",function(){return k});var a=n("p+bo"),o=n("eIep"),i=n("8J6U"),s=n("LRne"),r=n("fXoL"),c=n("8CXc"),l=n("ev4g"),u=n("euQB"),d=n("kmKP"),m=n("tyNb"),p=n("SVtl"),h=n("1kSV"),I=n("Jn3s"),g=n("ofXK");function D(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&t){const t=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"]("You've selected to apply to the ",t.programInstance.programTitle,".")}}function S(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"p",10),r["\u0275\u0275element"](1,"i",11),r["\u0275\u0275text"](2," Busy setting up your application "),r["\u0275\u0275elementEnd"]())}let k=(()=>{class t{constructor(t,e,n,a,o,i,s){this.programsService=t,this.taskService=e,this.portfolioService=n,this.userService=a,this.router=o,this.networkService=i,this.activeModal=s,this.taskSections=[],this.user=this.userService.user.getValue(),this.contactID=this.user.contactID,this.companyID=this.user.companyID}ngOnInit(){this.programInstanceStageID=this.initialStage.programInstanceStageID,this.getBaselineTask(),this.getSections()}activate(){const t={companyProgramInstanceStageID:this.stage.companyProgramInstanceStageID,companyProgramStageStartDate:this.stage.companyProgramStageStartDate||Object(i.a)(new Date),companyProgramStageEndDate:this.stage.companyProgramStageEndDate,companyProgramStageStatusID:this.stage.companyProgramStageStatusID,companyLocationID:this.stage.companyLocationID,companyProgramInstanceStageTypeID:this.stage.companyProgramInstanceStageTypeID,programInstanceStageID:this.stage.programInstanceStageID,companyProgramInstanceStageActivationStatusDate:Object(i.a)(new Date),companyProgramInstanceStageActivationStatusID:1,programInstanceStageStatusID:this.stage.programInstanceStageStatusID,companyProgramInstanceID:this.stage.companyProgramInstanceID};this.activation=!0,this.portfolioService.updateStage(t).pipe(Object(o.a)(()=>{const t=new a.a;return t.taskID=this.task.taskID,t.contactID=this.contactID,t.companyID=this.companyID,t.taskOwnerCategoryID=this.task.taskCategoryID,t.endDate=this.task.endDate,t.deadline=this.task.endDate,t.referenceID=this.stage.companyProgramInstanceStageID,this.taskService.addTaskOwner(t)})).subscribe(t=>{const e=new a.b;e.taskCategoryID=38,e.taskOwnerID=t.taskOwnerID,e.taskID=t.taskID,e.companyID=this.program.companyID,e.taskSectionReferenceID=this.programInstanceStageID,this.taskService.addTaskOwnerSection(e).subscribe(),this.customFormSection?this.singleFormSection(t.taskOwnerID):this.router.navigate(["/task",this.task.taskID]).then(()=>{const t=setTimeout(()=>{this.activeModal.dismiss(),clearTimeout(t),this.activation=!1},100)})},()=>{this.activation=!1})}singleFormSection(t){var e,n;const o=new a.a;o.taskID=this.customFormSection.taskID,o.contactID=this.contactID,o.companyID=this.companyID,o.taskOwnerCategoryID=this.customFormSection.taskCategoryID,o.deadline=null===(e=this.customFormSection)||void 0===e?void 0:e.endDate,o.endDate=null===(n=this.customFormSection)||void 0===n?void 0:n.endDate,this.taskService.addTaskOwner(o).subscribe(()=>{this.router.navigate(["/task",this.task.taskID]).then(()=>{const t=setTimeout(()=>{this.activeModal.dismiss(),clearTimeout(t),this.activation=!1},100)})})}apply(){this.applyRequest=!0;const t={companyID:this.companyID,dateAccepted:Object(i.a)(new Date),programInstanceID:this.programInstance.programInstanceID,contactID:this.contactID};this.portfolioService.addPortfolio(t).pipe(Object(o.a)(t=>{const e={programInstanceStageID:this.initialStage.programInstanceStageID,companyProgramStageStartDate:Object(i.a)(new Date),companyProgramStageEndDate:null,companyProgramStageStatusID:2,companyLocationID:t.companyLocationID,companyProgramInstanceID:t.inOut_CompanyProgramInstanceID,companyProgramInstanceStageTypeID:this.initialStage.programStageTypeID};return this.portfolioService.insertStage(e)})).subscribe(t=>{this.stage=t,this.stage.companyProgramStageStatusID=2,this.stage.companyProgramInstanceStageID=t.inOut_CompanyProgramInstanceStageID,this.activate(),this.joinNetwork(),this.applyRequest=!1})}getBaselineTask(){this.baselineTaskLoading=!0,this.taskService.getTask(0,38,this.programInstanceStageID,0,0,0,0,0,!1).subscribe(t=>{this.task=t[0]||null,this.baselineTaskLoading=!1})}getSections(){this.sectionsLoading=!0,this.taskService.getTaskSection(this.program.companyID,38,this.programInstanceStageID).subscribe(t=>{this.taskSections=t,t.some(t=>12===t.taskSectionCategoryID)&&1===t.length?this.getSectionTask():this.sectionsLoading=!1})}getSectionTask(){const t=this.taskSections.findIndex(t=>12===t.taskSectionCategoryID);this.taskService.getTask(0,1,this.taskSections[t].taskSectionID,0,0,0,0,0,!1).subscribe(t=>{this.customFormSection=t[0]||null,this.sectionsLoading=!1})}dismiss(){this.applyRequest||this.activation||this.activeModal.dismiss()}joinNetwork(){let t;this.networkService.getNetwork(0,0,0,0,this.programInstance.companyID,0,1).pipe(Object(o.a)(e=>(t=e[0]||null,e.length?this.networkService.getNetworkMember(e[0].networkID,2,0,this.companyID,0,0):Object(s.a)([]))),Object(o.a)(e=>t&&!e.length?this.networkService.saveNetworkMember({networkID:t?t.networkID:0,networkMemberCategoryID:2,referenceID:this.companyID,addedByContactID:this.contactID,networkMemberStatusID:2}):Object(s.a)([]))).subscribe()}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](c.a),r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](u.a),r["\u0275\u0275directiveInject"](d.a),r["\u0275\u0275directiveInject"](m.c),r["\u0275\u0275directiveInject"](p.a),r["\u0275\u0275directiveInject"](h.a))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-enrollment-stage-activation-modal"]],decls:14,vars:4,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body",3,"avnonLoader"],[4,"ngIf"],["class","twitter-fill p-2",4,"ngIf"],[1,"form-group","d-flex","justify-content-end","mt-4"],[1,"btn","btn-outline-primary","mr-2",3,"click"],[1,"btn","btn-primary",3,"disabled","click"],[1,"twitter-fill","p-2"],[1,"fas","fa-info-circle"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"h5",1),r["\u0275\u0275text"](2," Apply "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"button",2),r["\u0275\u0275listener"]("click",function(){return e.dismiss()}),r["\u0275\u0275elementStart"](4,"span",3),r["\u0275\u0275text"](5,"\xd7"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"div",4),r["\u0275\u0275template"](7,D,2,1,"p",5),r["\u0275\u0275template"](8,S,3,0,"p",6),r["\u0275\u0275elementStart"](9,"div",7),r["\u0275\u0275elementStart"](10,"button",8),r["\u0275\u0275listener"]("click",function(){return e.dismiss()}),r["\u0275\u0275text"](11,"Cancel"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"button",9),r["\u0275\u0275listener"]("click",function(){return e.apply()}),r["\u0275\u0275text"](13," Continue "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("avnonLoader",e.loading||e.applyRequest||e.baselineTaskLoading||e.sectionsLoading||e.activation),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!e.applyRequest&&!e.activation),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.activation||e.applyRequest),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("disabled",e.loading||e.applyRequest||e.baselineTaskLoading||!e.task))},directives:[I.a,g.n],styles:[""]}),t})()},"0snc":function(t,e,n){"use strict";n.d(e,"a",function(){return p});var a=n("cp0P"),o=n("LRne"),i=n("fXoL"),s=n("ev4g"),r=n("1kSV"),c=n("kmKP"),l=n("Jn3s"),u=n("ofXK");const d=function(){return[16,23,24,26]};function m(t,e){if(1&t){const t=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275elementStart"](1,"div",9),i["\u0275\u0275elementStart"](2,"div",10),i["\u0275\u0275elementStart"](3,"input",11),i["\u0275\u0275listener"]("change",function(){i["\u0275\u0275restoreView"](t);const n=e.index;return i["\u0275\u0275nextContext"]().checkSection(n)}),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"label",12),i["\u0275\u0275text"](5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementContainerEnd"]()}if(2&t){const t=e.$implicit,n=e.index;i["\u0275\u0275advance"](2),i["\u0275\u0275classProp"]("ml-3",i["\u0275\u0275pureFunction0"](6,d).includes(t.taskSectionCategoryID)),i["\u0275\u0275advance"](1),i["\u0275\u0275propertyInterpolate1"]("id","category-",n,""),i["\u0275\u0275property"]("checked",t.checked),i["\u0275\u0275advance"](1),i["\u0275\u0275propertyInterpolate1"]("for","category-",n,""),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](t.taskSectionCategory)}}let p=(()=>{class t{constructor(t,e,n){this.taskService=t,this.activeModal=e,this.userService=n,this.list=[],this.existingSections=[],this.taskSectionReferenceID=0,this.user=this.userService.user.getValue(),this.companyID=this.user.companyID}ngOnInit(){this.isQstp=window.location.hostname.toLocaleLowerCase().includes("qstp"),this.initData()}initData(){this.loading=!0,this.taskService.taskSectionCategory().subscribe(t=>{let e=t.filter(t=>8!==t.taskSectionCategoryID).map(t=>{var e;return t.taskSectionID=(null===(e=this.existingSections.find(e=>e.taskSectionCategoryID===t.taskSectionCategoryID))||void 0===e?void 0:e.taskSectionID)||null,t.checked=!!t.taskSectionID,t});const n=e.filter(t=>[16,23,24,26].includes(t.taskSectionCategoryID));e=e.filter(t=>![16,23,24,26].includes(t.taskSectionCategoryID)),n.reverse().forEach(t=>{const n=e.findIndex(t=>3===t.taskSectionCategoryID);-1!==n&&e.splice(n+1,0,t)}),this.list=e.filter(t=>!!this.isQstp||26!==t.taskSectionCategoryID),38===this.taskCategoryID&&(this.list=this.list.filter(t=>![19,20,21,22].includes(t.taskSectionCategoryID))),this.loading=!1})}onSubmit(){const t=[];this.list.filter(t=>t.checked&&!t.taskSectionID).forEach(e=>{t.push(this.taskService.postTaskSection({companyID:this.companyID,taskCategoryID:this.taskCategoryID,taskSectionCategoryID:e.taskSectionCategoryID,taskSectionReferenceID:this.taskSectionReferenceID}))}),this.list.filter(t=>!t.checked&&t.taskSectionID).forEach(e=>{t.push(this.taskService.deleteTaskSection(e.taskSectionID))}),this.loading=!0,(t.length>0?Object(a.a)(t):Object(o.a)([])).subscribe(t=>{this.loading=!1,this.activeModal.close(t.length>0)})}checkSection(t){const e=this.list[t];if(e.checked=!e.checked,[16,23,24,26].includes(e.taskSectionCategoryID)){const n=this.list.findIndex(t=>3===t.taskSectionCategoryID),a=this.list.findIndex(t=>16===t.taskSectionCategoryID),o=this.list.findIndex(t=>26===t.taskSectionCategoryID);if(-1!==a&&-1!==o&&[a,o].includes(t)&&(this.list[a].checked=e.checked,this.list[o].checked=e.checked),-1!==n){const t=this.list[n];!t.checked&&e.checked&&(t.checked=!0)}}}dismiss(){this.activeModal.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(i["\u0275\u0275directiveInject"](s.a),i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](c.a))},t.\u0275cmp=i["\u0275\u0275defineComponent"]({type:t,selectors:[["app-task-section-list"]],decls:12,vars:2,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body","d-flex","flex-column","pl-0","pr-0",3,"avnonLoader"],[1,"list-container","w-100","d-flex","flex-column","pl-3","pr-3"],[4,"ngFor","ngForOf"],[1,"text-right","pt-3","pr-3","pl-3"],[1,"btn","btn-primary",3,"click"],[1,"entry"],[1,"custom-control","custom-checkbox"],["type","checkbox",1,"custom-control-input",3,"checked","id","change"],[1,"custom-control-label",3,"for"]],template:function(t,e){1&t&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"h5",1),i["\u0275\u0275text"](2," Manage Sections "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"button",2),i["\u0275\u0275listener"]("click",function(){return e.dismiss()}),i["\u0275\u0275elementStart"](4,"span",3),i["\u0275\u0275text"](5,"\xd7"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",4),i["\u0275\u0275elementStart"](7,"div",5),i["\u0275\u0275template"](8,m,6,7,"ng-container",6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"div",7),i["\u0275\u0275elementStart"](10,"button",8),i["\u0275\u0275listener"]("click",function(){return e.onSubmit()}),i["\u0275\u0275text"](11," Submit "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&t&&(i["\u0275\u0275advance"](6),i["\u0275\u0275property"]("avnonLoader",e.loading),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",e.list))},directives:[l.a,u.m],styles:[".list-container[_ngcontent-%COMP%]{max-height:70vh;overflow-x:hidden;overflow-y:auto}"]}),t})()},ELnu:function(t,e,n){"use strict";n.d(e,"a",function(){return a});class a{static create(){return[{value:1,name:"January"},{value:2,name:"February"},{value:3,name:"March"},{value:4,name:"April"},{value:5,name:"May"},{value:6,name:"June"},{value:7,name:"July"},{value:8,name:"August"},{value:9,name:"September"},{value:10,name:"October"},{value:11,name:"November"},{value:12,name:"December"}]}}},KAtD:function(t,e,n){"use strict";n.d(e,"a",function(){return a});const a={API_KEY:"AIzaSyBYD2dWthFTQ5G-UqZvxUTS-yQoqP7864k"}},RPtq:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(t){return t[t.Global_Startup_Network=100]="Global_Startup_Network",t[t.Global_Mentor_Network=101]="Global_Mentor_Network",t[t.Global_Incubator_Network=102]="Global_Incubator_Network",t[t.Global_Investor_Network=103]="Global_Investor_Network",t[t.Global_Community_Network=104]="Global_Community_Network",t[t.Global_Service_Provider_Network=105]="Global_Service_Provider_Network",t}({})},VRnw:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var a=n("ofXK"),o=n("j4PG"),i=n("oAWB"),s=n("pr+S"),r=n("4Ptv"),c=n("fXoL");let l=(()=>{class t{}return t.\u0275mod=c["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[a.c,o.a,i.a,s.a,r.a]]}),t})()},"XSv+":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("fXoL"),o=n("tk/3");let i=(()=>{class t{constructor(t){this.http=t,this.BaseURI="https://api.incubatorportal.com/api"}getQuestion(t,e){return this.http.get(this.BaseURI+"/Question?QuestionCategoryID="+t+"&ReferenceID="+e)}addQuestion(t){return this.http.post(this.BaseURI+"/Question",t)}updateQuestion(t){return this.http.put(this.BaseURI+"/Question",t)}deleteQuestion(t){return this.http.delete(`${this.BaseURI}/Question/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275inject"](o.b))},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},esnG:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n("tk/3"),o=n("lJxs"),i=n("VgRj"),s=n("2Vo4"),r=n("fXoL");let c=(()=>{class t{constructor(t){this.http=t,this.BaseURI="https://api.incubatorportal.com/api",this.documentUrl=this.BaseURI+"/document",this._documentFolders=new s.a([]),this.course=[{courseID:1,courseTitle:"Daniel"},{courseID:2,courseTitle:"Bob"}]}get documentFolders(){return this._documentFolders.asObservable()}upload(t){return this.http.post(this.BaseURI,t,{reportProgress:!0,observe:"events"})}insertDocument(t,e,n,a,i,s,r=!1,c){return this.http.post(this.BaseURI+"/Document?documentCategoryID="+e+"&referenceID="+n+"&documentUploadedByID="+a+"&documentFolderID="+i+"&reference2ID="+s+"&IsStream="+r+"&documentDescription="+c,t,{reportProgress:!0,observe:"events"}).pipe(Object(o.a)(t=>t))}updateDocument(t){return this.http.put(this.BaseURI+"/Document",t)}deleteDocument(t){return this.http.delete(`${this.BaseURI}/document/${t}`).pipe(Object(o.a)(t=>t))}getDocuments(t,e,n=0,a,s){return this.http.get(`${this.documentUrl}?${i.a.toUrlEncodedString({documentCategoryID:t,referenceID:e,documentFolderID:n,reference2ID:a,documentUploadedByID:s})}`).pipe(Object(o.a)(t=>t))}getDocumentFoldertmp(t){return this._documentFolders.getValue().find(e=>e.documentFolderID===t)}getFolders(t,e,n){return this.http.get(`${this.documentUrl}/folder?CompanyID=${e}&ContactID=${t}&DocumentFolderID=${n}`).pipe(Object(o.a)(t=>t))}getDocumentFolder(t,e,n=0,a,s){return this.http.get(`${this.documentUrl}?${i.a.toUrlEncodedString({documentCategoryID:t,referenceID:e,documentFolderID:n,Reference2ID:a,DocumentUploadedByID:s})}`).pipe(Object(o.a)(t=>t))}storeFolder(t){return this.http.post(this.documentUrl+"/folder",t).pipe(Object(o.a)(t=>t))}updateFolder(t){return this.http.put(this.documentUrl+"/folder",t).pipe(Object(o.a)(t=>t))}deleteFolder(t){return this.http.delete(`${this.documentUrl}/folder/${t}`).pipe(Object(o.a)(t=>t))}getDocument(t,e,n,a,o){return this.http.get(`${this.documentUrl}?DocumentCategoryID=${e}&ReferenceID=${t}&DocumentFolderID=${o}&Reference2ID=${a}&DocumentUploadedByID=${n}`)}postDocumentLink(t){return this.http.post(this.documentUrl+"/link",t)}getDocumentLink(t=0,e=0,n=0){const o=new a.g({fromObject:{DocumentLinkCategoryID:String(t),DocumentLinkSubCategoryID:String(e),DocumentLinkReferenceID:String(n)}});return this.http.get(this.documentUrl+"/link",{params:o})}deleteDocumentLink(t){const e={headers:new a.f({"Content-Type":"application/json"}),body:{documentLinkID:t}};return this.http.delete(this.documentUrl+"/link",e)}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275inject"](a.b))},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);