(function(e){function t(t){for(var r,i,s=t[0],l=t[1],u=t[2],c=0,h=[];c<s.length;c++)i=s[c],n[i]&&h.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0292":function(e,t,a){"use strict";var r=a("25a4"),n=a.n(r);n.a},"1eec":function(e,t,a){"use strict";var r=a("8167"),n=a.n(r);n.a},"25a4":function(e,t,a){},2856:function(e,t,a){},"2d09":function(e,t,a){},"3fd0":function(e,t,a){"use strict";var r=a("8dfe"),n=a.n(r);n.a},"5c0b":function(e,t,a){"use strict";var r=a("2856"),n=a.n(r);n.a},"6a85":function(e,t,a){},"7fc4":function(e,t,a){"use strict";var r=a("2d09"),n=a.n(r);n.a},8167:function(e,t,a){},"896d":function(e){e.exports={apiKey:"AIzaSyDSqMtZ3qFYb-PWgagij7by-cjvtNzd4QQ",authDomain:"aar-proj.firebaseapp.com",databaseURL:"https://aar-proj.firebaseio.com",projectId:"aar-proj",storageBucket:"aar-proj.appspot.com",messagingSenderId:"696363376544"}},"8dfe":function(e,t,a){},a868:function(e,t,a){"use strict";var r=a("e892"),n=a.n(r);n.a},c505:function(e,t,a){"use strict";var r=a("fc6c"),n=a.n(r);n.a},c691:function(e,t,a){"use strict";var r=a("d348"),n=a.n(r);n.a},cd49:function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=a("9f7b"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s=(a("5c0b"),a("2877")),l={},u=Object(s["a"])(l,o,i,!1,null,null,null);u.options.__file="App.vue";var d=u.exports,c=a("c93e"),h=(a("96cf"),a("3040")),m=a("8c4f"),f=a("59ca"),p=a.n(f),b=(a("66ce"),a("e71f"),a("ea7b"),a("896d")),v={apiKey:b.apiKey,authDomain:b.authDomain,databaseURL:b.databaseURL,storageBucket:b.storageBucket,projectId:b.projectId,messagingSenderId:b.messagingSenderId},g=p.a.initializeApp(v),y={timestampsInSnapshots:!0};p.a.firestore().settings(y);var T=g,w=a("2f62");r["a"].use(w["a"]);var W=new w["a"].Store({state:{user:{UserEmail:String,uid:String,TeamUID:String,name:String},team:{TeamName:String,TeamCreatedDate:String,TeamMembers:Array},teamAars:new Array,teamUsers:new Array},mutations:{updateUser:function(e,t){e.user=t},updateTeam:function(e,t){e.team=t},newUser:function(e,t){e.teamUsers.push(t)},newAar:function(e,t){e.teamAars.push(t)},removeAar:function(e,t){e.teamAars=e.teamAars.filter(function(e){return e.key!==t})},updateAar:function(e,t){e.teamAars=e.teamAars.filter(function(e){return e.key!==t.key}),e.teamAars.push(t.data)}},actions:{}}),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("b-btn",{staticClass:"signOut",attrs:{variant:"danger"},on:{click:e.signOut}},[e._v("Sign Out")]),a("b-card",{staticStyle:{width:"90vw"},attrs:{"no-body":"","border-variant":"light"}},[a("b-tabs",{attrs:{pills:"",card:""}},[a("b-tab",{staticClass:"tab-h",attrs:{"no-body":"",title:"My Aars",active:""}},[a("aar-table",{attrs:{trigger:0,aars:e.myAars,emptyText:"Aar list of aars I have created and saved <br> <br>\n        Individual Aar item"}})],1),a("b-tab",{staticClass:"tab-h",attrs:{"no-body":"",title:"Shared with me"}},[a("aar-table",{attrs:{trigger:1,aars:e.sharedAars,emptyText:"Aar list of aars others have shared with me and I have not saved my aars <br> <br>\n        Aar item shared with me"}})],1),a("b-tab",{staticClass:"tab-h",attrs:{"no-body":"",title:"Most influential"}},[a("aar-table",{attrs:{trigger:1,aars:e.influentialAars,emptyText:"Aar list of aars which have been shared the most"}})],1)],1),a("aar-modal")],1)],1)},S=[],A=(a("ac6a"),a("55dd"),a("7514"),a("17fb")),k=a.n(A),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.aarModal",modifiers:{aarModal:!0}}],staticClass:"aarBtn"},[e._v("New Aar")]),a("b-modal",{ref:"aarModal",attrs:{id:"aarModal",centered:"",size:"lg","hide-footer":!0,"hide-header":!0},on:{shown:e.modalOpen,hidden:e.modalClosed}},[a("b-container",{attrs:{fluid:""}},[e.sharing?e._e():a("b-form",[a("b-form-group",{attrs:{label:"Title","label-for":"titleInput",id:"titleGroupInput"}},[a("b-form-input",{attrs:{disabled:e.isDisabledInput,id:"titleInput",type:"text",required:"",placeholder:"Enter Title"},model:{value:e.form.Title,callback:function(t){e.$set(e.form,"Title",t)},expression:"form.Title"}})],1),a("b-form-group",{attrs:{label:"Related To","label-for":"relatedInput",id:"relatedGroupInput",horizontal:""}},[a("v-select",{attrs:{disabled:e.isDisabledInput,options:e.teamAarTitles},nativeOn:{input:function(t){return e.onNewRelated(t)}},model:{value:e.form.Related,callback:function(t){e.$set(e.form,"Related",t)},expression:"form.Related"}})],1),a("b-form-group",{attrs:{label:"Date of Aar","label-for":"dateInput",id:"dateGroupInput",horizontal:""}},[a("b-form-input",{staticStyle:{width:"20vw"},attrs:{disabled:e.isDisabledInput,id:"dateInput",type:"date"},model:{value:e.form.Date,callback:function(t){e.$set(e.form,"Date",t)},expression:"form.Date"}})],1),a("b-form-group",{attrs:{label:"What should have happened?","label-for":"WhatShouldHaveHappenedTextInput",id:"WhatShouldHaveHappenedTextGroupInput"}},[a("b-form-textarea",{attrs:{disabled:e.isDisabledInput,id:"WhatShouldHaveHappenedTextInput",type:"text",rows:2,placeholder:"Enter what should have happened"},model:{value:e.form.WhatShouldHaveHappenedText,callback:function(t){e.$set(e.form,"WhatShouldHaveHappenedText",t)},expression:"form.WhatShouldHaveHappenedText"}})],1),a("b-form-group",{attrs:{label:"What actually happened?","label-for":"WhatActuallyHappenedTextInput",id:"WhatActuallyHappenedTextGroupInput"}},[a("b-form-textarea",{attrs:{id:"WhatActuallyHappenedTextInput",type:"text",disabled:e.isDisabledInput,rows:2,placeholder:"Enter what actually happened"},model:{value:e.form.WhatActuallyHappenedText,callback:function(t){e.$set(e.form,"WhatActuallyHappenedText",t)},expression:"form.WhatActuallyHappenedText"}})],1),a("b-form-group",{attrs:{label:"What was learnt","label-for":"WhatWasLearnTextInput",id:"WhatWasLearntTextGroupInput"}},[a("div",{staticStyle:{display:"flex"}},[a("b-form-input",{attrs:{id:"WhatWasLearntTextInput",type:"text",disabled:e.isDisabledInput,placeholder:"Enter what was learnt"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.newLearntItem(t):null}},model:{value:e.WhatWasLearntText,callback:function(t){e.WhatWasLearntText=t},expression:"WhatWasLearntText"}}),a("b-btn",{staticClass:"add_learnt",on:{click:e.newLearntItem}},[e._v("+")])],1),a("div",{staticClass:"flex-center",staticStyle:{"flex-direction":"column","margin-top":"1vh"}},[a("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.myCollapse",modifiers:{myCollapse:!0}}],staticClass:"learnt_btn"},[a("span",{staticClass:"when-opened"},[e._v("Hide learnt items")]),a("span",{staticClass:"when-closed"},[e._v("Show learnt items")]),e._v("\n            My Collapse\n          ")]),a("b-collapse",{attrs:{id:"myCollapse"}},[a("b-list-group",e._l(e.form.WhatWasLearnt,function(t){return a("b-list-group-item",{key:t},[e._v(e._s(t)),a("b-button",{staticClass:"delLearntItem add_learnt",attrs:{disabled:e.isDisabledInput,variant:"danger"},on:{click:function(a){e.removeLearntItem(t)}}},[e._v("\n              X\n            ")])],1)}))],1)],1)]),a("b-form-group",{attrs:{label:"Who needs to know","label-for":"WhoNeedsToKnowTextInput",id:"WhoNeedsToKnowTextGroupInput"}},[a("v-select",{attrs:{multiple:"",disabled:e.isDisabledInput,options:e.teamUsers},nativeOn:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onNewShared(t):null}},model:{value:e.SharedWith,callback:function(t){e.SharedWith=t},expression:"SharedWith"}},[a("span",{attrs:{slot:"no-options"},slot:"no-options"},[e._v("\n                  Whoops! Cant't find any members!\n                ")])])],1),a("div",{staticClass:"flex-center",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("b-btn",{staticStyle:{"margin-right":"5px"},attrs:{variant:"warning"},on:{click:e.cancel}},[e._v("\n           Cancel\n         ")]),a("b-btn",{staticStyle:{"margin-right":"5px"},attrs:{variant:"primary"},on:{click:function(t){e.mode&&"edit"===e.mode?e.onEdit():e.mode&&"share"===e.mode?e.share():"editing"===e.mode?e.editAndSave():e.save()}}},[e._v("\n           "+e._s("edit"===e.mode?"Edit":"share"===e.mode?"Share":"editing"===e.mode?"Save Edit":"Save")+"\n         ")]),"edit"===e.mode||"editing"===e.mode?a("b-btn",{attrs:{variant:"danger"},on:{click:e.onDelete}},[e._v("\n           Delete\n         ")]):e._e()],1)],1),e.sharing?a("share",{attrs:{uid:e.key,form:e.form}}):e._e()],1)],1),a("b-modal",{ref:"delModal",attrs:{centered:"",size:"sm",id:"delModal",title:"Delete aar -  ?"}},[a("div",{staticClass:"flex-center",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("b-btn",{staticStyle:{"margin-right":"5px"},attrs:{variant:"warning"},on:{click:e.onCancelDelModal}},[e._v("\n           Cancel\n         ")]),a("b-btn",{attrs:{variant:"danger"},on:{click:e.onDeleteConfirm}},[e._v("\n           Delete\n         ")])],1)])],1)},_=[],I=a("4a7a"),D=a.n(I),U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-top":"15vh"}},[a("b-form",{staticClass:"share"},[a("b-form-group",{attrs:{id:"shareGroup",label:"Share With","label-for":"share"}},[a("b-form-textarea",{staticStyle:{width:"40vw"},attrs:{id:"share",type:"text",rows:3,value:e.shareList,required:"",placeholder:"Email address inputs separated by;"}})],1),a("b-form-group",[a("b-form-group",{attrs:{"label-for":"searchInput",id:"searchGroupInput"}},[a("b-form-input",{attrs:{id:"searchInput",type:"search",placeholder:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("b-form-checkbox-group",{staticClass:"main-group",attrs:{id:"checkboxes"},model:{value:e.shareWith,callback:function(t){e.shareWith=t},expression:"shareWith"}},[a("b-list-group",e._l(e.teamUsers,function(t){return a("b-list-group-item",{key:t.uid,staticClass:"selected-emails"},[a("b-form-checkbox",{staticClass:"checkbox",attrs:{value:t.uid}},[e._v("\n            "+e._s(t.UserEmail)+"\n          ")])],1)}))],1)],1),a("div",{staticClass:"flex-center",staticStyle:{"margin-top":"2vh","margin-bottom":"15vh"}},[a("b-button",{staticStyle:{"margin-right":"2vw"},on:{click:e.close}},[e._v("Cancel")]),a("b-button",{on:{click:e.shareAar}},[e._v("Share")])],1)],1)],1)},$=[],E=(a("4917"),a("386d"),r["a"].extend({props:{uid:{required:!0,type:String},form:{required:!0,type:Object}},data:function(){return{shareWith:[],search:"",alreadyShared:[]}},computed:{teamUsers:function(){var e=this,t=this.$store.state.teamUsers.filter(function(t){return!e.form.SharedWith.find(function(e){return t.uid===e.uid})});return this.search.length>0?t.filter(function(t){return t.UserEmail.match(e.search)}):t},shareList:function(){var e=this,t="";return this.shareWith.forEach(function(a){var r=e.$store.state.teamUsers.find(function(e){return a===e.uid});t+=r.UserEmail+";"}),t}},methods:{shareAar:function(){var e=this;this.form.SharedWith.forEach(function(t){return e.shareWith.push(t.uid)}),this.shareWith.length>0?T.database().ref("AAR Item/"+this.uid).update({SharedWith:this.shareWith}).then(function(){e.close()}).catch(function(e){console.log(e)}):this.close()},close:function(){this.$root.$emit("bv::hide::modal","aarModal")}}})),H=E,R=(a("0292"),Object(s["a"])(H,U,$,!1,null,"f10e45ac",null));R.options.__file="Share.vue";var O=R.exports,N=r["a"].extend({components:{Share:O,VSelect:D.a},data:function(){return{aarToDelete:{},SharedWith:[],learntItemClicked:{isClicked:!1,item:""},WhatWasLearntText:"",mode:null,key:null,sharing:!1,form:{Title:"",Related:"",Date:null,WhatShouldHaveHappenedText:"",WhatActuallyHappenedText:"",WhatWasLearnt:Array(),SharedWith:Array()}}},filters:{truncate:function(e,t,a){if(e=e||"",a=a||"...",t=t||30,e.length<=t)return e;var r=e.slice(0,t-a.length),n=r.length-1;while(n>0&&" "!==r[n]&&r[n]!==a[0])n-=1;return n=n||t-a.length,r=r.slice(0,n),r+a}},computed:{teamUsers:function(){var e=this;return k.a.uniq(this.$store.state.teamUsers.map(function(t){return t.uid!==e.$store.state.user.uid&&{label:t.UserEmail,uid:t.uid}}))},teamAarTitles:function(){return k.a.uniq(this.$store.state.teamAars.map(function(e){return"string"===typeof e.RelatedTo?e.RelatedTo:""}).filter(function(e){return e.length>0}))},isDisabledInput:function(){return"edit"===this.mode||"share"===this.mode}},methods:{getAarByKey:function(e){var t=this;return this.$store.state.teamAars.find(function(e){return e.key===t.key})},validateEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},modalOpen:function(){var e=this;if(this.$root.newModalData){var t=this.$root.newModalData;this.mode=t.mode,this.key=t.key,this.$root.newModalData={},this.form.Title=t.Title,this.form.Related=t.RelatedTo,this.form.Date=t.DateOfAAR,this.form.WhatShouldHaveHappenedText=t.WhatShouldHaveHappenedText,this.form.WhatActuallyHappenedText=t.WhatActuallyHappenedText,this.form.WhatWasLearnt=t.WhatWasLearnt,t.SharedWith&&(this.SharedWith=t.SharedWith.filter(function(t){return t!==e.$store.state.user.uid}).map(function(t){return e.$store.state.teamUsers.find(function(e){return e.uid===t})}).map(function(e){try{if("undefined"!==typeof e.UserEmail)return{label:e.UserEmail,uid:e.uid}}catch(e){}}))}},modalClosed:function(){this.sharing=!1,this.resetForm()},newLearntItem:function(){this.WhatWasLearntText.length>0&&(this.form.WhatWasLearnt||(this.form.WhatWasLearnt=[]),this.form.WhatWasLearnt.push(this.WhatWasLearntText),this.WhatWasLearntText="")},save:function(){var e=this,t=new Date;console.log(this.SharedWith);var a={Title:this.form.Title,Creator:this.$store.state.user.uid,RelatedTo:this.form.Related?this.form.Related.toLowerCase():null,DateCreated:"".concat(t.toDateString()," ").concat(t.getUTCHours(),":").concat(t.getUTCMinutes()),DateOfAAR:this.form.Date||null,WhatShouldHaveHappenedText:this.form.WhatShouldHaveHappenedText||null,WhatActuallyHappenedText:this.form.WhatActuallyHappenedText||null,WhatWasLearnt:this.form.WhatWasLearnt||null,SharedWith:this.SharedWith[0]?this.SharedWith.map(function(e){return e.uid}):null,Impact:0,Team:this.$store.state.user.TeamUID};a.SharedWith&&(a.SharedWith[0]||(a.SharedWith=[0])),T.database().ref("AAR Item").push(a).then(function(){e.resetForm(),e.hideModal()})},showLearntItem:function(e){this.learntItemClicked={isClicked:!0,item:e}},removeLearntItem:function(e){this.form.WhatWasLearnt=this.form.WhatWasLearnt.filter(function(t){return t!==e})},onNewRelated:function(e){this.form.Related=e.target.value},onNewShared:function(e){var t=e.target.value;this.validateEmail(t)&&this.SharedWith.push(e.target.value)},onEdit:function(){this.mode="editing"},editAndSave:function(){var e=this;T.database().ref("AAR Item/"+this.key).update({Title:this.form.Title,RelatedTo:this.form.Related||null,DateOfAAR:this.form.Date||null,WhatShouldHaveHappenedText:this.form.WhatShouldHaveHappenedText||null,WhatActuallyHappenedText:this.form.WhatActuallyHappenedText||null,WhatWasLearnt:this.form.WhatWasLearnt||null,SharedWith:this.SharedWith[0]?this.SharedWith.map(function(e){return e.uid}):null}).then(function(){e.resetForm(),e.hideModal()})},share:function(){this.sharing=!0},cancel:function(){this.resetForm(),this.hideModal()},resetForm:function(){this.form.Title="",this.form.Related="",this.form.Date=null,this.form.WhatShouldHaveHappenedText="",this.form.WhatActuallyHappenedText="",this.form.WhatWasLearnt=[],this.form.SharedWith=[]},onDelete:function(){this.aarToDelete=this.getAarByKey(this.key),this.aarToDelete=this.form,this.hideModal(),this.$refs.delModal.show()},onCancelDelModal:function(){this.$refs.delModal.hide()},onDeleteConfirm:function(){T.database().ref("AAR Item/"+this.key).remove(),this.$refs.delModal.hide()},hideModal:function(){this.learntItemClicked.isClicked=!1,this.$refs.aarModal.hide()},showModal:function(){this.$refs.aarModal.show()}}}),L=N,M=(a("3fd0"),Object(s["a"])(L,C,_,!1,null,"9471e2e0",null));M.options.__file="newAarModal.vue";var j=M.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-table",{staticClass:"table",attrs:{striped:"",hover:"",items:e.aars,fields:e.fields,"show-empty":!0,"empty-text":e.emptyText},on:{"row-clicked":e.rowClicked}})],1)},B=[],q=(a("c5f6"),r["a"].extend({name:"aar-table",props:{trigger:{required:!0,type:Number},aars:{required:!0,type:Array},emptyText:{required:!0,type:String}},data:function(){return{fields:[{key:"Title",sortable:!0},{key:"RelatedTo",sortable:!0},{key:"CreatedBy",sortable:!0},{key:"DateCreated",sortable:!0},{key:"Impact",sortable:!0}]}},methods:{rowClicked:function(e){this.$root.$emit("bv::show::modal","aarModal"),0===this.trigger?this.$root.newModalData=Object(c["a"])({mode:"edit"},e):1===this.trigger?this.$root.newModalData=Object(c["a"])({mode:"share"},e):this.$root.newModalData=null}}})),G=q,F=Object(s["a"])(G,P,B,!1,null,null,null);F.options.__file="aarTable.vue";var z=F.exports,K=r["a"].extend({name:"home",components:{AarModal:j,AarTable:z},data:function(){return{items:[]}},computed:{myAars:function(){var e=this;return k.a.uniq(this.$store.state.teamAars.filter(function(t){return t.Creator===e.$store.state.user.uid}).map(function(t){return{isActive:!1,Title:t.Title,RelatedTo:t.RelatedTo,CreatedBy:e.getUserByUIDFromStore(t.Creator),DateCreated:t.DateCreated,Impact:t.Impact,DateOfAAR:t.DateOfAAR,WhatShouldHaveHappenedText:t.WhatShouldHaveHappenedText,WhatNeedsToKnow:t.WhatNeedsToKnow,WhatActuallyHappenedText:t.WhatActuallyHappenedText,WhatWasLearnt:t.WhatWasLearnt,key:t.key,SharedWith:t.SharedWith}}),!1,function(e){return e.key})},sharedAars:function(){var e=this;return k.a.uniq(this.$store.state.teamAars.filter(function(t){return t.Creator!==e.$store.state.user.uid&&(t.SharedWith?t.SharedWith.find(function(t){return t===e.$store.state.user.uid}):void 0)}).map(function(t){return{isActive:!1,Title:t.Title,RelatedTo:t.RelatedTo,DateCreated:t.DateCreated,CreatedBy:e.getUserByUIDFromStore(t.Creator),Impact:t.Impact,DateOfAAR:t.DateOfAAR,WhatShouldHaveHappenedText:t.WhatShouldHaveHappenedText,WhatNeedsToKnow:t.WhatNeedsToKnow,WhatActuallyHappenedText:t.WhatActuallyHappenedText,WhatWasLearnt:t.WhatWasLearnt,key:t.key,SharedWith:t.SharedWith}}),!1,function(e){return e.key})},influentialAars:function(){var e=this;return k.a.uniq(this.$store.state.teamAars.sort(function(e,t){if(e.SharedWith&&t.SharedWith)return e.SharedWith.length>t.SharedWith.length?1:t.SharedWith.length>e.SharedWith.length?-1:0}).map(function(t){return{isActive:!1,Title:t.Title,RelatedTo:t.RelatedTo,DateCreated:t.DateCreated,CreatedBy:e.getUserByUIDFromStore(t.Creator),Impact:t.Impact,DateOfAAR:t.DateOfAAR,WhatShouldHaveHappenedText:t.WhatShouldHaveHappenedText,WhatNeedsToKnow:t.WhatNeedsToKnow,WhatActuallyHappenedText:t.WhatActuallyHappenedText,WhatWasLearnt:t.WhatWasLearnt,key:t.key,SharedWith:t.SharedWith}}).reverse(),!1,function(e){return e.key})}},methods:{getUserByUID:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.database().ref("Users/"+t).once("value");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),signOut:function(){var e=this;T.auth().signOut().then(function(){e.$router.push("/login")})},getUserByUIDFromStore:function(e){if(e===this.$store.state.user.uid)return this.$store.state.user.UserEmail;var t=this.$store.state.teamUsers,a="";return t.forEach(function(t){t.uid===e&&(a=t.UserEmail)}),a},getTeamUsers:function(){var e=this;T.database().ref("Teams/"+this.$store.state.user.TeamUID+"/TeamMembers").on("child_added",function(t){t&&t.val()!==e.$store.state.user.uid&&e.getUserByUID(t.val()).then(function(t){e.$store.commit("newUser",{uid:t.key,UserEmail:t.val().UserEmail,TeamUID:t.val().TeamUID})})})},getTeamAars:function(){var e=this;T.database().ref("AAR Item").orderByChild("Team").equalTo(this.$store.state.user.TeamUID).on("child_added",function(t){e.$store.commit("newAar",Object(c["a"])({key:t.key},t.val()))})},init:function(){var e=this;T.database().ref("AAR Item").orderByChild("Team").equalTo(this.$store.state.user.TeamUID).on("child_changed",function(t){e.$store.commit("updateAar",{key:t.key,data:t.val()})}),T.database().ref("AAR Item").orderByChild("Team").equalTo(this.$store.state.user.TeamUID).on("child_removed",function(t){e.$store.commit("removeAar",t.key)}),this.getTeamUsers(),this.getTeamAars()}},created:function(){this.init()}}),Z=K,J=(a("c691"),Object(s["a"])(Z,x,S,!1,null,"c7e76794",null));J.options.__file="Home.vue";var V=J.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"auth"},[e.isSignedUp?e._e():a("sign-up",{on:{verify:e.awaitVerify}}),e.isSignedUp?a("confirmation"):e._e()],1)},X=[],Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form",{staticClass:"sign-up",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit(t)}}},[a("h1",[e._v("Sign Up")]),a("div",{staticClass:"buttons-group"},[a("router-link",{staticClass:"myBtn",attrs:{to:"/",tag:"b-button"}},[e._v("Register")]),a("router-link",{staticClass:"myBtn",attrs:{to:"/login",tag:"b-button"}},[e._v("Sign In")])],1),a("b-form-group",{attrs:{id:"nameGroup",label:"Name","label-for":"name","label-text-align":"right"}},[a("b-form-input",{attrs:{id:"name",type:"text",required:"",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"===typeof t?t.trim():t)},expression:"form.name"}})],1),a("b-form-group",{attrs:{id:"emailGroup",label:"Email","label-for":"email"}},[a("b-form-input",{attrs:{id:"email",type:"email",required:"",state:e.form.email.length>0?e.validateEmail:null,placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email","string"===typeof t?t.trim():t)},expression:"form.email"}})],1),a("b-form-group",{attrs:{id:"passwordGroup",label:"Password","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",type:"password",required:"",state:e.form.password.length>0?e.validatePassword:null,placeholder:"Enter password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),e.emailTaken?a("span",{staticClass:"error"},[e._v("Email Already In Use")]):e._e(),e.weakPassword?a("span",{staticClass:"error"},[e._v("Password must be atleast 6 characters")]):e._e(),a("b-button",{staticClass:"center-it",attrs:{type:"submit"}},[e._v("Get started now")])],1)],1)},ee=[],te=(a("7f7f"),r["a"].extend({name:"SignUp",data:function(){return{form:{email:"",name:"",password:""},emailTaken:!1,weakPassword:!1}},computed:{validateEmail:function(){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(this.form.email)},validatePassword:function(){var e=/^(?=.*\w).{6,15}$/;return e.test(this.form.password)}},methods:{onSubmit:function(e){var t=this;this.emailTaken=!1,this.weakPassword=!1;var a=this;e.preventDefault(),T.auth().createUserWithEmailAndPassword(this.form.email,this.form.password).then(function(e){var a={UserEmail:t.form.email,uid:T.auth().currentUser.uid,TeamUID:""};e.user&&e.user.updateProfile({displayName:t.form.name,photoURL:null}),T.database().ref("Users/"+a.uid).set({UserEmail:a.UserEmail,TeamUID:a.TeamUID}),T.auth().currentUser.sendEmailVerification().then(function(){t.$emit("verify",a),t.$store.commit("updateUser",a)}).catch(function(e){})}).catch(function(e){var t=e.code;console.log(e),"auth/weak-password"==t&&(a.weakPassword=!0),"auth/email-already-in-use"==t&&(a.emailTaken=!0)})}}})),ae=te,re=(a("e29f"),Object(s["a"])(ae,Y,ee,!1,null,"0b4e0008",null));re.options.__file="SignUp.vue";var ne=re.exports,oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form",{staticClass:"confirm",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit(t)}}},[a("b-form-group",{attrs:{id:"ccodeGroup",label:"ENTER CONFIRMATION CODE",maxlength:"4","label-for":"ccode","label-text-align":"center"}},[a("b-form-input",{attrs:{id:"ccode",type:"text",required:"",placeholder:"Enter code",disabled:e.form.code.length>3},on:{input:e.codeInputted},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code","string"===typeof t?t.trim():t)},expression:"form.code"}})],1)],1)],1)},ie=[],se=r["a"].extend({name:"Auth",components:{},data:function(){return{form:{code:""}}},watch:{form:{handler:function(e){this.form.code.length>3&&this.codeSubmitted(this.form.code)},deep:!0}},methods:{codeSubmitted:function(e){console.log("submitted",e),this.$router.push("/join")},codeInputted:function(){this.form.code.length>4&&(this.form.code="0")}}}),le=se,ue=(a("a868"),Object(s["a"])(le,oe,ie,!1,null,"50dc3f05",null));ue.options.__file="Confirmation.vue";var de=ue.exports,ce=r["a"].extend({name:"Auth",components:{SignUp:ne,Confirmation:de},data:function(){return{isSignedUp:!1}},methods:{awaitVerify:function(){this.isSignedUp=!0}}}),he=ce,me=(a("7fc4"),Object(s["a"])(he,Q,X,!1,null,"251c4a08",null));me.options.__file="Auth.vue";var fe=me.exports,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form",{staticClass:"confirm",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit(t)}}},[a("b-form-group",{attrs:{id:"teamNameGroup",label:"Welcome To or Enter Team Name","label-for":"team","label-text-align":"center"}},[a("b-form-textarea",{attrs:{id:"team",type:"text","no-resize":!0,required:"",rows:2,placeholder:"Existing team name if invited, or option to enter new team"},model:{value:e.form.teamName,callback:function(t){e.$set(e.form,"teamName","string"===typeof t?t.trim():t)},expression:"form.teamName"}})],1),a("b-button",{staticClass:"center-it",attrs:{disabled:0===e.form.teamName.length,type:"submit"}},[e._v("Lets Go!")])],1)],1)},be=[],ve=(a("8615"),a("456d"),r["a"].extend({name:"Join",components:{},data:function(){return{form:{teamName:""}}},methods:{findTeamByName:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.database().ref("Teams").orderByChild("TeamName").equalTo(this.form.teamName).once("value");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),addNewMemberToTeam:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.database().ref("Teams/"+t+"/TeamMembers/").push(this.$store.state.user.uid);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),updateUserTeam:function(e){T.database().ref("Users/"+this.$store.state.user.uid).update({TeamUID:e})},onSubmit:function(){var e=this;T.database().ref("Teams").orderByChild("TeamName").equalTo(this.form.teamName).once("value").then(function(t){if(t.val())e.findTeamByName().then(function(t){var a=t.val(),r=Object.keys(a)[0];e.updateUserTeam(r),e.addNewMemberToTeam(r).then(function(t){e.findTeamByName().then(function(t){e.$store.commit("updateTeam",Object.values(t.val())[0]),e.$router.push("/home")})})});else{var a=new Date,r={TeamName:e.form.teamName,TeamCreatedDate:"".concat(a.toDateString()," ").concat(a.getUTCHours(),":").concat(a.getUTCMinutes()),TeamMembers:[e.$store.state.user.uid]};T.database().ref("Teams/").push(r).then(function(t){e.updateUserTeam(t.key),e.$store.commit("updateTeam",r),e.$router.push("/home")})}}).catch(function(e){console.log(e)})}}})),ge=ve,ye=(a("1eec"),Object(s["a"])(ge,pe,be,!1,null,"5b5a90ba",null));ye.options.__file="Join.vue";var Te=ye.exports,we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form",{staticClass:"login",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit(t)}}},[a("h1",[e._v("Sign In")]),a("div",{staticClass:"buttons-group"},[a("router-link",{staticClass:"myBtn",attrs:{to:"/",tag:"b-button"}},[e._v("Register")]),a("router-link",{staticClass:"myBtn",attrs:{to:"/login",tag:"b-button"}},[e._v("Sign In")])],1),a("b-form-group",{attrs:{id:"emailGroup",label:"Email","label-for":"email"}},[a("b-form-input",{attrs:{id:"email",type:"email",required:"",state:e.form.email.length>0?e.validateEmail:null,placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email","string"===typeof t?t.trim():t)},expression:"form.email"}})],1),a("b-form-group",{attrs:{id:"passwordGroup",label:"Password","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",type:"password",required:"",state:e.form.password.length>0?e.validatePassword:null,placeholder:"Enter password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),e.emailNotFound?a("span",{staticClass:"error"},[e._v("User email not found")]):e._e(),e.wrongPassword?a("span",{staticClass:"error"},[e._v("Password does not match")]):e._e(),a("b-button",{staticClass:"center-it",attrs:{type:"submit"}},[e._v("Get started now")])],1)],1)},We=[],xe=r["a"].extend({name:"SignUp",data:function(){return{form:{email:"",name:"",password:""},emailNotFound:!1,wrongPassword:!1}},computed:{validateEmail:function(){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(this.form.email)},validatePassword:function(){var e=/^(?=.*\w).{6,15}$/;return e.test(this.form.password)}},methods:{onSubmit:function(e){var t=this;this.emailNotFound=!1,this.wrongPassword=!1;var a=this;e.preventDefault(),T.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then(function(){t.$router.push("/join")}).catch(function(e){var t=e.code;console.log(e),"auth/wrong-password"==t&&(a.wrongPassword=!0),"auth/user-not-found"==t&&(a.emailNotFound=!0)})}}}),Se=xe,Ae=(a("c505"),Object(s["a"])(Se,we,We,!1,null,"867672ca",null));Ae.options.__file="Login.vue";var ke=Ae.exports;r["a"].use(m["a"]);var Ce=function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.database().ref("/Users/"+t).once("value");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),_e=function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.database().ref("/Teams/"+t).once("value");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),Ie=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"auth",component:fe,beforeEnter:function(e,t,a){T.auth().onAuthStateChanged(function(e){e?a("/home"):a()})}},{path:"/login",name:"login",component:ke,beforeEnter:function(e,t,a){T.auth().onAuthStateChanged(function(e){e?a("/home"):a()})}},{path:"/join",name:"join",component:Te,beforeEnter:function(e,t,a){T.auth().onAuthStateChanged(function(e){e?Ce(e.uid).then(function(t){W.commit("updateUser",Object(c["a"])({uid:e.uid},t.val(),{name:e.displayName})),t.val().TeamUID.length>0?_e(t.val().TeamUID).then(function(e){W.commit("updateTeam",e.val()),a("/home")}).catch(function(e){a("/")}):a()}).catch(function(e){a("/")}):a("/")})}},{path:"/home",name:"home",component:V,beforeEnter:function(e,t,a){T.auth().onAuthStateChanged(function(e){e?Ce(e.uid).then(function(t){W.commit("updateUser",Object(c["a"])({uid:e.uid},t.val(),{name:e.displayName})),t.val().TeamUID.length>0?_e(t.val().TeamUID).then(function(e){W.commit("updateTeam",e.val()),a()}).catch(function(e){a("/")}):a("/join")}).catch(function(e){a("/")}):a("/")})}}]});a("f9e3"),a("2dd8");r["a"].use(n["a"]),r["a"].config.productionTip=!1,new r["a"]({router:Ie,store:W,render:function(e){return e(d)}}).$mount("#app")},d348:function(e,t,a){},e29f:function(e,t,a){"use strict";var r=a("6a85"),n=a.n(r);n.a},e892:function(e,t,a){},fc6c:function(e,t,a){}});
//# sourceMappingURL=app.03c18bb2.js.map