(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{P085:function(e,t,n){"use strict";n.r(t),n.d(t,"AccountVerifyModule",function(){return d});var r=n("ofXK"),i=n("tyNb"),o=n("quSY"),c=n("fXoL"),s=n("kmKP");const a=[{path:"",component:(()=>{class e{constructor(e,t,n){this.router=e,this.route=t,this.userService=n,this.subscription=new o.a}ngOnInit(){this.subscription.add(this.route.queryParams.subscribe(e=>{this.userService.verify({hash:e.hash}).subscribe(()=>{localStorage.setItem("accountVerified","true"),this.router.navigate(["/login"])},()=>{this.router.navigate(["/"])})}))}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](i.c),c["\u0275\u0275directiveInject"](i.a),c["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-account-verify"]],decls:9,vars:0,consts:[[1,"body","body-login"],[1,"row","justify-content-center"],[1,"col-lg-4","col-md-5","col-sm-6","login-box"],[1,"box"],[1,"form-group"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"div",2),c["\u0275\u0275elementStart"](3,"div",3),c["\u0275\u0275elementStart"](4,"h1"),c["\u0275\u0275text"](5,"Verification underway"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"div",4),c["\u0275\u0275elementStart"](7,"label"),c["\u0275\u0275text"](8,"We're activating your account!"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]())},styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.g.forChild(a)],i.g]}),e})(),d=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,u]]}),e})()}}]);