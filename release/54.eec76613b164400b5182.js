(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{X7t3:function(e,t,i){"use strict";i.r(t),i.d(t,"ContactPageModule",function(){return b});var n=i("ofXK"),o=i("tyNb"),r=i("3Pt+"),a=i("AytR"),p=i("fXoL"),s=i("5eHb"),l=i("1bi4"),d=i("HVA4"),m=i("rV3Q"),g=i("5eqV"),c=i("p3he");const x=[{path:"",component:(()=>{class e{constructor(e,t,i,n,o){this.renderer2=e,this.document=t,this.formBuilder=i,this.toastrService=n,this.distributionService=o,this.companyAddress=a.a.companyAddress,this.companyPhone=a.a.companyPhone,this.companyEmail=a.a.companyEmail}ngOnInit(){const e=this.document.getElementsByTagName("html")[0];e&&(this.renderer2.removeClass(e,"avnon"),this.renderer2.addClass(e,"avnon-new")),this.initForm()}initForm(){this.form=this.formBuilder.group({name:["",[r.C.required]],email:["",[r.C.required,r.C.email]],location:["",[r.C.required]],message:["",[r.C.required]]})}submit(){this.loading=!0,this.distributionService.sendSimpleEmail(a.a.systemEmail,a.a.danielEmail,"Contact US",`\n      <table>\n        <tr>\n            <td>Contact Name</td>\n            <td>${this.form.value.name}</td>\n        </tr>\n        <tr>\n            <td>Contact Email</td>\n            <td>${this.form.value.email}</td>\n        </tr>\n         <tr>\n            <td>Contact Company</td>\n            <td>${this.form.value.location}</td>\n        </tr>\n         <tr>\n            <td>Contact Message</td>\n            <td>${this.form.value.message}</td>\n        </tr>\n      </table>\n      `,"").subscribe(()=>{this.loading=!1,this.form.reset(),this.toastrService.success("Thanks, we'll contact you as soon as possible.")})}ngOnDestroy(){const e=this.document.getElementsByTagName("html")[0];e&&(this.renderer2.addClass(e,"avnon"),this.renderer2.removeClass(e,"avnon-new"))}}return e.\u0275fac=function(t){return new(t||e)(p["\u0275\u0275directiveInject"](p.Renderer2),p["\u0275\u0275directiveInject"](n.d),p["\u0275\u0275directiveInject"](r.e),p["\u0275\u0275directiveInject"](s.b),p["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["app-contact"]],decls:30,vars:6,consts:[[1,"contact_us","container","container-left"],[1,"contact_us__title","h2"],[1,"contact_us__desc"],[1,"contact_us__content"],[1,"left"],[1,"contact_us_form"],[1,"form__title","h4","mt-0"],[1,"form_demo","form_grey","form-contact",3,"formGroup","appSpinner","submit"],["placeholder","Name","type","text","formControlName","name",1,"form_demo__input","input"],["placeholder","Email","type","email","formControlName","email",1,"form_demo__input","input"],["placeholder","Company Name","type","text","formControlName","location",1,"form_demo__input","input"],[1,"input-group"],["rows","3","autosize","","formControlName","message","placeholder","Message",1,"form_demo__textarea","input","message_input"],[1,"btn","btn_green","btn_large","btn_uppercase",3,"disabled"],[1,"right"],[1,"contact_us__block"],[1,"section","nowrap"]],template:function(e,t){1&e&&(p["\u0275\u0275element"](0,"app-new-header"),p["\u0275\u0275elementStart"](1,"div",0),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275text"](3," Contact Us "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"p",2),p["\u0275\u0275text"](5,"If you\u2019d like more information about any of our products or services, or to schedule a live demo or training session please get in touch."),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"div",3),p["\u0275\u0275elementStart"](7,"div",4),p["\u0275\u0275elementStart"](8,"div",5),p["\u0275\u0275elementStart"](9,"div",6),p["\u0275\u0275text"](10,"Send us a message"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"form",7),p["\u0275\u0275listener"]("submit",function(){return t.submit()}),p["\u0275\u0275element"](12,"input",8),p["\u0275\u0275element"](13,"input",9),p["\u0275\u0275element"](14,"input",10),p["\u0275\u0275elementStart"](15,"div",11),p["\u0275\u0275element"](16,"textarea",12),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](17,"button",13),p["\u0275\u0275text"](18,"Send"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](19,"div",14),p["\u0275\u0275elementStart"](20,"div",15),p["\u0275\u0275elementStart"](21,"div",16),p["\u0275\u0275text"](22," Mailing Address "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](23,"span"),p["\u0275\u0275text"](24),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](25,"span"),p["\u0275\u0275text"](26),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](27,"span"),p["\u0275\u0275text"](28),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](29,"app-new-footer")),2&e&&(p["\u0275\u0275advance"](11),p["\u0275\u0275property"]("formGroup",t.form)("appSpinner",t.loading),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("disabled",t.form.invalid),p["\u0275\u0275advance"](7),p["\u0275\u0275textInterpolate"](t.companyAddress),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate"](t.companyPhone),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate"](t.companyEmail))},directives:[d.a,r.E,r.r,r.j,m.a,r.b,r.q,r.h,g.a,c.a],styles:['*{padding:0;margin:0}p{margin-bottom:20px}ul{list-style:none}ul strong{margin-bottom:20px;display:block}p,ul{line-height:160%;font-size:14px;color:#6d6d7e}.form_grey{background:#f5f5f5;padding:30px 27px;box-sizing:initial}.form__title{text-align:left;margin-top:38px;margin-bottom:26px}.form_demo{display:flex;flex-direction:column;width:513px;max-width:100%}.form_demo__input{margin-bottom:20px;position:relative}.form_demo__textarea{height:132px;margin-bottom:0;font-family:Lato,sans-serif}.form_demo__checkbox{margin-top:24px;margin-bottom:32px}.form_demo select{position:absolute;width:100%;height:100%;border:none;top:0;left:0;padding:20px;font-size:18px;line-height:15px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-family:Lato,sans-serif;color:rgba(81,91,105,.3)}.form_demo select.visited{color:#1b2437}.select{background:url(arrow-select.8d214314d7fab6f96eb1.svg) no-repeat}.upload{display:flex;align-items:center;font-size:18px;line-height:22px;color:#6d6d7e;margin-top:25px;position:relative}.upload__img{margin-right:16px;width:32px}.upload__file{opacity:0;width:100%;height:100%;position:absolute}.header{height:100px;box-sizing:border-box;border-bottom:1px solid hsla(0,0%,71%,.3)}.header .footer{display:none}.header .humburger{display:none;position:relative;width:36px;height:16px}.header .humburger .line{width:100%;height:2px;left:0;top:0;background:#1b2437;position:absolute;transition:transform .3s}.header .humburger .line:nth-of-type(2){top:7px}.header .humburger .line:nth-of-type(3){top:14px}.header .container{height:100%;padding-left:10px;padding-right:75px;display:flex;align-items:center;justify-content:space-between}.header__logo{width:128px;height:47px}.header__items{display:flex;margin-right:130px;z-index:100;height:100%}.header__items>*{margin-right:55px}.header__items>:last-child{margin-right:0}.header__link,.header__right,.header__submenu{display:flex;align-items:center;height:100%}.header__link,.header__submenu{font-size:16px;line-height:19px;letter-spacing:.04em;color:#1b2437}.header__submenu{position:relative;cursor:pointer}@media (min-width:800px){.header__submenu:hover .submenu{display:block}.header__submenu:hover img{transform:rotate(0)}}.header__submenu img{margin-left:13px;transform:rotate(180deg);transition:transform .3s}.submenu{display:none;position:absolute;right:0;top:calc(50% + 13px);width:362px;background:#fff;border:1px solid #f6f6f6;box-shadow:0 0 2px hsla(0,0%,78.8%,.12),0 2px 2px hsla(0,0%,78.8%,.24);padding:28px 0;box-sizing:border-box;z-index:15}.submenu span{display:flex;align-items:center}.submenu__line{width:10px;height:1px;background:#3fb1b5;border:none;margin-right:8px}.submenu__item{display:flex;align-items:center;font-weight:700;font-size:14px;line-height:17px;text-transform:capitalize;height:32px;color:#3fb1b5;cursor:pointer;padding:0 16px;margin-bottom:4px}.submenu__item:last-of-type{margin-bottom:0}.submenu__item:hover{background:#f6f6f6}.footer{padding:80px 90px 47px;background:#f5f5f5;color:#1b2437}.footer__top{display:flex;align-items:flex-start}.footer__logo{margin-right:100px}.footer__newsletter{margin-right:130px}.footer__content{display:flex}.footer__links{min-width:156px;max-width:300px;color:#1b2437;margin-right:130px;position:relative;margin-top:-17px}.footer__links:last-of-type{margin-right:0}.footer__links .footer__section{font-family:"Noto Serif KR",serif;font-weight:700;margin-bottom:44px;font-size:24px;line-height:34px}.footer__links a{display:block;font-size:14px;line-height:17px;margin-bottom:28px;color:#1b2437}.footer__links a:last-of-type{margin-bottom:0}.footer__hr{height:1px;background:#fff;margin:33px auto 47px;width:1200px;max-width:100%}.footer__bottom{font-size:12px;line-height:18px;justify-content:space-between;color:#200707}.footer__bottom,.footer__social,.footer__social a{display:flex;align-items:center}.footer__social a{height:100%}.footer__social a:first-of-type{margin-right:44px}.newsletter{display:flex;flex-direction:column;width:288px}.newsletter__title{font-size:14px;line-height:13px;font-family:"Noto Serif KR",serif;font-weight:700}.newsletter__desc{font-size:12px;line-height:14px;margin-top:14px;margin-bottom:18px}.newsletter__email{background:transparent;border:none;border-bottom:1px solid #1b2437;font-size:14px;line-height:24px;padding:14px 0;background:url(email-arrow.556b41df75a5da07c4b6.svg) no-repeat;background-position:100%}.newsletter__email:focus{outline:none}.h1{font-family:"Noto Serif KR",serif;font-weight:900;font-size:56px;line-height:130%}.btn,a{cursor:pointer}a{text-decoration:none}.h2,.h3,.h4,.title{font-weight:700;font-family:"Noto Serif KR",serif}.title{font-size:44px;line-height:63px;text-align:center;font-weight:900}.h2{font-size:56px;line-height:150%}.h3{font-size:44px;line-height:63px}.h4{font-size:34px;line-height:150%}.input{background:#fff;height:65px;width:100%;border:1px solid rgba(81,91,105,.3);border-radius:2px;padding:24px 25px;box-sizing:border-box;font-size:18px;line-height:15px}.input::placeholder{color:rgba(81,91,105,.3)}.input-group{display:flex;flex-direction:column}.input-group__info{font-size:12px;line-height:15px;display:block;margin-left:auto;margin-top:8px;color:#6d6d7e}.checkbox-group{display:block;margin-bottom:15px}.checkbox-group input{padding:0;height:auto;width:auto;margin-bottom:0;display:none;cursor:pointer}.checkbox-group input:checked+label:after{content:"";display:block;position:absolute;top:-1px;left:9px;width:6px;height:13px;border:solid #3fb1b5;border-width:0 2px 2px 0;transform:rotate(45deg)}.checkbox-group label{position:relative;cursor:pointer;font-size:13px;line-height:16px;color:#6d6d7e}.checkbox-group label:before{content:"";-webkit-appearance:none;background-color:initial;border:1px solid #515b69;top:-2px;border-radius:3px;width:24px;height:24px;display:inline-block;position:relative;vertical-align:middle;cursor:pointer;margin-right:10px}.btn{box-shadow:none;background:none;border:none;box-sizing:border-box;font-weight:700;letter-spacing:.04em}.btn_large{width:380px;max-width:100%;height:50px;margin:auto;font-size:16px;line-height:19px}.btn_medium{width:165px;height:44px;font-size:14px;line-height:19px}.btn_small{width:131px;height:51px}.btn_green{background-color:#3fb1b5;color:#fff}.btn_dark_green{background-color:#2c7c7f;color:#fff}.btn_blue{background:#7892d3;color:#fff}.btn_dark_blue{background:#547594;color:#fff}.btn_white{background-color:#fff;color:#3fb1b5}.btn_transparent{color:#3fb1b5;border:1.5px solid #3fb1b5}.btn_transparent_black{color:#1b2437}.btn_uppercase{text-transform:uppercase}.btn_google{border:2px solid #4285f4;box-shadow:0 1px 20px hsla(0,0%,65.5%,.24)}.btn_fb{background-color:#3b5998;color:#fff}.btn_fb,.btn_google{font-size:14px;line-height:17px;letter-spacing:.4px;display:flex;align-items:center;justify-content:center}.btn_fb img,.btn_google img{margin-right:20px}@media (max-width:800px){.btn_medium{width:145px;height:42px;font-size:14px;line-height:19px}}.container{width:1248px;max-width:100%;margin:auto;box-sizing:border-box}@media (max-width:1250px){.container{max-width:calc(100% - 32px)}}.container.container-left{margin-left:17%;width:842px}@media (min-width:1600px){.container.container-left{margin-left:auto;margin-right:auto;position:relative;left:-5%}}@media (max-width:1200px){.header__items{margin-right:62px}}@media (max-width:1240px){.container.container-left{margin:40px auto 60px}}@media (max-width:950px){.header .container{padding:0}.header__items{margin-right:0}.footer__newsletter{order:2;margin-top:30px;margin-bottom:0}.footer__content{margin-top:30px}.footer__top{flex-direction:column}.footer__links{margin-top:0}}@media (max-width:800px){.form_grey{box-sizing:border-box}section,section.container{padding:20px 0;margin:20px auto}.title{font-size:32px;line-height:130%}.header{height:60px}.header .container{padding:0}.header .footer{background:none;padding:0;margin-top:auto;width:100%;display:block}.header .footer__newsletter{margin:48px 0 36px}.header .footer__bottom{margin-top:0}.header__logo{width:74px;height:32px}.header.open{position:fixed;top:0;left:0;width:100%;background:#fff;z-index:100}.header.open .header__right{display:flex}.header.open .humburger .line{top:7px;transform:rotate(-45deg)}.header.open .humburger .line:nth-of-type(2){transform:rotate(45deg)}.header__right{display:none;align-items:flex-start;position:fixed;left:0;top:60px;width:100%;z-index:100;min-height:calc(100vh - 60px);background:#fff;padding:78px 36px 20px;box-sizing:border-box}.header__items,.header__right{flex-direction:column;height:auto}.header__items>*{margin-bottom:30px}.header__link,.header__submenu{height:auto}.header .btn{display:block}.header .btn_transparent_black{margin-bottom:20px;border:1.5px solid #3fb1b5;color:#3fb1b5}.header .btn_small{width:165px}.header .humburger{display:block;margin-left:auto}.submenu{position:relative;top:0;padding:13px 0;box-shadow:none;border:none}.submenu__line{display:none}.submenu__item{padding:0 13px}.header__submenu{display:flex;flex-direction:column;align-items:flex-start}.header__submenu.open .submenu{display:block}.header__submenu.open img{transform:rotate(0)}.footer{padding-top:47px}.footer__links .footer__section{margin-bottom:20px}.footer__newsletter{margin-top:30px}.footer__social a:first-of-type{margin-right:20px}}.newsletter__btn{border:none;background:transparent;background:url(email-arrow.556b41df75a5da07c4b6.svg) no-repeat;background-position:50%;position:absolute;right:0;width:46px;height:32px;background-size:46px 32px;top:10px}.newsletter__form__group{position:relative}.newsletter__form__group .newsletter__email{width:100%;padding-right:50px;box-sizing:border-box}@media (max-width:512px){.h1{font-size:42px}.h2{font-size:36px}.h3{font-size:32px}.h4{font-size:24px}.header__actions{margin:0 auto}.footer__content{margin-top:0}.footer__links{margin-top:30px}.footer__links .footer__section{font-size:16px;line-height:22px}.footer__links a{margin-bottom:16px;font-size:12px;line-height:17px}.footer__hr{margin:33px auto}.newsletter__email{padding:2px 35px 0 0;background-size:auto 20px;width:256px}.newsletter__btn{width:28px;height:28px;top:0;background-size:100%}.form_demo select,.input{font-size:16px}.footer__links{max-width:50%;min-width:45%}}@media (max-width:340px){.header__right{padding:30px 16px 20px}}.mt-24{margin-top:24px}.main{padding-top:49px;background:url(Business\\ x5F_people_x5F_6.2b1f99b5c37404a1e9e8.svg) no-repeat;background-size:634px 494px;background-position:top 44px right 86px;width:1274px;padding-left:14px}.main__title{font-family:"Noto Serif KR",serif;color:#3fb1b5;width:551px;max-width:100%;line-height:120%}.main__desc{font-weight:400;font-size:20px;line-height:145%;width:480px;margin:19px 0 41px;opacity:.9;max-width:100%}.main__actions{display:flex}.main__btn{margin-right:9px}.main__powering_programs{margin-top:60px}.powering_programs{font-family:Lato,sans-serif;font-weight:600;font-size:15px;line-height:130%;color:#828b9c}.powering_programs__companies{display:flex;align-items:center;margin-top:17px}.powering_programs__companies img{max-width:25%}.powering_programs__companies img:first-of-type{margin-right:26px;max-width:15%}.powering_programs__companies img:nth-of-type(2){max-width:10%;margin-right:33px}.powering_programs__companies img:nth-of-type(3){margin-right:9px}.powering_programs__companies img:nth-of-type(4){margin-right:3px}.ecosystems{margin:66px auto;background:url(main.4ceaffacd6c61416ee21.jpg) no-repeat;background-size:cover;height:644px;padding:27px 42px;color:#fff}.ecosystems__top{margin-left:12px}.ecosystems__title{margin-top:215px;height:146px;width:790px;max-width:100%;font-family:"Noto Serif KR",serif;font-weight:700;font-size:42px;line-height:130%;letter-spacing:.04em}.ecosystems__links{display:flex}.ecosystems__links a{margin-right:14px;width:380px;height:190px;padding:32px 18px 28px;box-sizing:border-box;color:#fff;background-color:#3fb1b5}.ecosystems__links a:last-of-type{margin-right:0}.ecosystems__links span{font-family:"Noto Serif KR",serif;font-weight:700;font-size:24px;line-height:140%}.learn_more{display:flex;align-items:center;margin-top:31px;font-weight:700;font-size:20px;line-height:24px}.learn_more img{width:35px;height:25px;position:relative;top:2px;left:19px}.metrics{background-color:#f5f5f5;text-align:center}.metrics .container{padding:46px 69px}.metrics__desc{margin-top:14px;margin-bottom:62px;line-height:22px;display:block}.metrics__items{display:flex;justify-content:center;flex-wrap:wrap}.metrics__item{width:250px;text-align:center}.metrics__item:nth-of-type(2){width:300px}.metrics__item:last-of-type{margin-right:0}.metrics__item span{display:block}.metrics__item .num{font-family:"Noto Serif KR",serif;color:#3fb1b5;font-weight:700;font-size:42px;line-height:60px;text-transform:uppercase}.metrics__item .title{font-family:Lato,sans-serif;line-height:150%;letter-spacing:.02em;font-size:18px;opacity:.85;margin-top:16px;font-weight:400}.enterprise{margin:60px auto;color:#fff;background:url(bg.49da8446c881863367f5.jpg) no-repeat 0 0;background-size:contain}.enterprise.container{width:1236px}.enterprise__content{width:474px;max-width:100%;box-sizing:border-box;padding:28px 33px 86px;background-color:#3fb1b5;margin-left:auto}.enterprise__top{font-weight:700;font-size:14px;line-height:150%;height:20px;display:block}.enterprise__title{margin-top:75px;font-weight:700;font-size:36px;line-height:130%;letter-spacing:.04em;font-family:"Noto Serif KR",serif;height:94px}.enterprise__desc{margin:22px 0 36px;font-size:15px;line-height:150%;width:339px;color:#fff;max-width:100%}.services{margin-bottom:70px;margin-top:70px}.services__title{text-align:center}.articles{margin-top:60px;display:flex;justify-content:center;flex-wrap:wrap}.articles .article:first-of-type,.articles .article:nth-of-type(2),.articles .article:nth-of-type(3){margin-top:0}.articles .article:nth-of-type(3n){margin-right:0}.article{margin-top:88px;width:380px;max-width:100%;margin-right:20px}.article__img{max-height:190px;max-width:100%}.article__title{margin:20px 0 18px;font-weight:700;font-size:24px;line-height:29px;font-family:"Noto Serif KR",monospace}.article__desc{font-size:14px;line-height:150%;color:#6d6d7e;margin-bottom:0}.funded{background-color:#f5f0dc;overflow:hidden}.funded__content{padding:111px 90px}.funded__items{display:flex;align-items:center;margin-top:40px}.funded__items>div:first-of-type{margin-right:116px}.funded__items>div:nth-of-type(2){margin-right:112px}.funded__items>div:nth-of-type(3){margin-right:93px}.schedule{display:flex;padding:60px 92px}.schedule__text{width:400px;max-width:100%;margin-right:147px}.schedule__title{text-align:left}.schedule__desc{margin-top:24px;font-size:16px;line-height:160%;color:#6d6d7e}@media (max-width:1250px){.main{background-size:auto 359px;background-position:100%;padding-left:0}.main__title{font-size:50px}.main__desc{font-size:18px;width:423px}.articles{justify-content:space-around}.article{margin-right:0}.funded__items{flex-wrap:wrap;justify-content:space-around}.funded__items>div{width:50%;display:flex;justify-content:center}.funded__items>div:nth-of-type(n){margin-right:0}.funded__items>div img{margin:0 20px}.metrics__item,.metrics__item:nth-of-type(2){width:50%}.footer,.schedule{padding-left:0;padding-right:0}.schedule{justify-content:center}}@media (max-width:1170px){.articles .article:nth-of-type(3n){margin-top:88px}.footer__top{justify-content:space-between;flex-wrap:wrap}.footer__links,.footer__logo,.footer__newsletter{margin-right:0}.metrics__items{justify-content:center;align-items:center}.metrics__item{margin-top:20px}.ecosystems__links a{display:flex;flex-direction:column;justify-content:space-between}.ecosystems__links .learn_more{margin-top:0}}@media (max-width:950px){.schedule{display:flex;flex-direction:column;align-items:center}.schedule__text{margin-right:0;text-align:center;margin-bottom:40px}.main{background-size:45% auto}.enterprise{background-position:50%;background-size:cover}.ecosystems__title{font-size:37px}}@media (max-width:800px){.articles .article,.articles .article:nth-of-type(2),.articles .article:nth-of-type(3n){margin-top:48px}section.services{margin-top:40px}section.services .articles{margin-top:30px}.main{display:flex;justify-content:space-between;flex-direction:column;background-position:top;background-size:auto 305px}.main__title{margin-top:325px;font-size:35px}.main__desc{margin:16px 0 30px;font-size:18px}.main__powering_programs{margin-top:30px;font-weight:400}.powering_programs img{max-height:60px;width:auto}.powering_programs img:nth-of-type(n){margin-right:10px}.funded__content{padding:40px 0}.funded__items{margin-top:0}.funded__items>div:nth-of-type(n){margin:0}.funded__items>div:first-of-type img{max-width:56%}.funded__items>div:nth-of-type(2) img{max-width:35%}.funded__items>div:nth-of-type(3) img,.funded__items>div:nth-of-type(4) img{max-width:80%}.ecosystems{height:auto;background-size:100%}.ecosystems__title{margin-top:129px;height:auto;font-size:24px;margin-bottom:6px;margin-left:10px}.ecosystems__links{flex-direction:column}.ecosystems__links span{font-size:18px}.ecosystems__links .learn_more{font-size:16px}.ecosystems__links a{margin-top:6px;margin-right:0;width:100%;height:150px}.schedule__title{text-align:center}.metrics__item .num{font-size:32px;line-height:130%}.metrics__item .title{font-size:14px;margin-top:12px}section.enterprise{padding:0}section.enterprise .enterprise__content{width:100%}section.enterprise{padding-top:350px;background-size:100%;background-position:top}}@media (max-width:650px){section.enterprise .enterprise__content{width:100%}}@media (max-width:525px){.main{background-size:auto 205px}.main__title{margin-top:205px}.main__desc{font-size:14px}.powering_programs img{height:28px}section.enterprise{padding-top:250px}.enterprise__content{padding-bottom:48px}.enterprise__title{height:auto;font-size:32px;margin-top:40px}.metrics__desc{margin-bottom:40px;font-size:16px}.metrics .container{padding:20px 0}.ecosystems{height:auto;background-size:auto 300px}.article__title{margin:18px 0 14px!important;font-size:18px!important;line-height:120%!important}.articles .article,.articles .article:nth-of-type(2),.articles .article:nth-of-type(3n){margin-top:28px}}.report_slider{background:#faf0ff;padding:50px 130px;display:flex;justify-content:center}@media (max-width:800px){.report_slider{padding:16px 40px;flex-direction:column-reverse;align-items:center}.report_slider .report_slider__left{max-width:100%!important}.report_slider .report_slider__left .report_slider__left__title{font-size:32px}.report_slider .report_slider__right{max-width:100%!important;margin-top:20px}}.report_slider .report_slider__left{max-width:50%;width:610px;display:flex;flex-direction:column}.report_slider .report_slider__left__title{font-family:"Noto Serif KR",sans-serif;font-style:normal;font-weight:900;font-size:44px;line-height:140%;color:#1b2437;margin-bottom:10px;margin-top:40px}.report_slider .report_slider__left__desc{font-family:Lato,sans-serif;font-style:normal;font-weight:400;font-size:16px;line-height:150%;color:#6d6d7e}.report_slider .report_slider__left .slider_menu{display:flex;flex-direction:column;list-style:none;padding:0;margin:50px 0 0;width:100%}.report_slider .report_slider__left .slider_menu li{font-family:Lato,sans-serif;font-style:normal;font-weight:400;font-size:24px;line-height:1;margin-bottom:24px;color:#1b2437;display:flex;align-items:center;cursor:pointer}.report_slider .report_slider__left .slider_menu li.active{font-weight:700;font-size:30px}.report_slider .report_slider__left .slider_menu li.active .dash{width:34px;height:4px;background:#1b2437;border-radius:24px;margin-right:24px;display:flex}.report_slider .report_slider__right{max-width:50%;display:flex;align-items:center;height:700px}.report_slider .report_slider__right .slider_container{display:flex;align-items:center;justify-content:center}.report_slider .report_slider__right .slider_container .slider_content{max-width:510px;width:100%;margin-left:30px;margin-right:30px;margin-bottom:20px;display:flex;flex-direction:column}.report_slider .report_slider__right .slider_container .slider_content img{display:none;width:100%;height:auto}.report_slider .report_slider__right .slider_container .slider_content img.active{display:block}.report_slider .report_slider__right .slider_arrow{cursor:pointer}.report_slider .report_slider__right .slider_desc{margin:24px 0 0;font-family:Lato,sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:150%;text-align:center;color:#6d6d7e}.contact_us{margin-top:120px}.contact_us__title{margin-bottom:19px}.contact_us__desc{max-width:100%;width:600px;margin-top:19px;font-size:18px}.contact_us__content{display:flex;margin-top:72px;margin-bottom:72px}.contact_us__content .left,.contact_us__content .right{width:auto}.contact_us__content .right{margin-left:156px}.contact_us__content span{font-size:16px;line-height:160%;margin-bottom:10px}.contact_us_form .btn{margin-top:24px}.contact_us__block{display:flex;flex-direction:column;max-width:100%;margin-bottom:36px}.contact_us__block:last-of-type{margin-bottom:0}.contact_us__block .section{font-size:26px;line-height:160%;font-family:"Noto Serif KR",serif;margin-bottom:8px;color:#1b2437}.contact_us__block a{color:#3fb1b5}.contact_us__block span{color:#6d6d7e}@media (max-width:1024px){.contact_us__content{margin-top:50px;flex-direction:column}.contact_us__content .right{margin-left:0;margin-top:36px}}@media (max-width:525px){.contact_us__content{margin-top:50px;flex-direction:column}.contact_us__content .right{margin-left:0;margin-top:36px}.contact_us__desc{font-size:14px}.contact_us__block .section{font-size:23px;line-height:140%}}.form-contact{width:443px!important}.mt-0{margin-top:0!important}.nowrap{white-space:nowrap}'],encapsulation:3}),e})()}];let _=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.g.forChild(x)],o.g]}),e})();var h=i("U9L3"),f=i("gs/p"),u=i("v6ps");let b=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.c,r.l,o.g,r.z,g.b,h.a,f.a,_,u.a]]}),e})()}}]);