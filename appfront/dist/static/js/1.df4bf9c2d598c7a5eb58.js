webpackJsonp([1],{FWlc:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("//Fk"),n=s.n(a),i=s("olkN"),o={name:"helloworld",props:["title1","post"],data:function(){return{msg:this.title1,posts:[{id:1,content:"im one"},{id:2,content:"im two"}]}},methods:{put:function(){alert("hello")}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"helloworld"},[s("h1",[e._v(e._s(e.msg))]),e._v(" "),e._l(e.posts,function(t){return s("h1",{key:t.id,attrs:{content:t.content,post:t}},[e._v("\n        "+e._s(t.id+"："+t.content)+"\n    ")])})],2)},staticRenderFns:[]},r={components:{HL:s("VU/8")(o,c,!1,null,null,null).exports,Light:s("Nmtv").a},data:function(){return{items:i.a.fetchTodoList(),todoValue:null,FinishedMsg:"待办事项",question:null,answer:"waitting for you question",checkedNames:[],star:i.a.fetchStar(),formData:{addProp:null},baseRules:{addProp:[{required:!0,type:"number",trigger:"blur",message:"请输入数字"}]}}},watch:{items:{handler:function(e){i.a.saveTodoList(e)},deep:!0},question:function(){this.answer="you'r typing",this.endtyping()},star:function(e){i.a.saveStar(e)}},methods:{addNew:function(){""!=this.todoValue?(this.items.push({label:this.todoValue,isFinished:!1,time:(new Date).Format("yyyy-MM-dd hh:mm:ss")}),this.todoValue=""):alert("事项不能为空")},delete1:function(){this.$router.push({name:"首页",params:{index:"5"}}),this.items.pop()},finish:function(e){e.isFinished=!e.isFinished},endtyping:function(){var e=this;-1!==this.question.indexOf("?")&&(this.answer="I'm thinking",this.sleep(5e3).then(function(){e.answer="you'r handsome "}))},sleep:function(e){return new n.a(function(t){return setTimeout(t,e)})}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"div"},[s("el-input",{staticClass:"input",nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.addNew(t):null}},model:{value:e.todoValue,callback:function(t){e.todoValue=t},expression:"todoValue"}}),e._v(" "),s("el-form",{attrs:{model:e.formData,rules:e.baseRules}},[s("el-form-item",{attrs:{prop:"addProp"}},[s("el-input",{staticClass:"input",attrs:{type:"number",placeholder:"验证表单"},model:{value:e.formData.addProp,callback:function(t){e.$set(e.formData,"addProp",e._n(t))},expression:"formData.addProp"}})],1)],1),e._v(" "),s("el-button",{on:{click:e.addNew}},[e._v("addNew")]),e._v(" "),s("el-button",{on:{click:e.delete1}},[e._v("delete")]),e._v(" "),s("el-button",{on:{click:e.text1}},[e._v("global")]),e._v(" "),s("el-button",{on:{click:e.greet}},[e._v("click me!")])],1),e._v(" "),s("div",{staticClass:"div"},[s("el-input",{staticClass:"input",model:{value:e.question,callback:function(t){e.question=t},expression:"question"}}),e._v(" "),s("span",[e._v(e._s(e.answer))])],1),e._v(" "),s("div",{staticClass:"div"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"jack",value:"Jack1"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Jack1")>-1:e.checkedNames},on:{change:function(t){var s=e.checkedNames,a=t.target,n=!!a.checked;if(Array.isArray(s)){var i=e._i(s,"Jack1");a.checked?i<0&&(e.checkedNames=s.concat(["Jack1"])):i>-1&&(e.checkedNames=s.slice(0,i).concat(s.slice(i+1)))}else e.checkedNames=n}}}),e._v(" "),s("label",{attrs:{for:"jack"}},[e._v("Jack")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"john",value:"John"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"John")>-1:e.checkedNames},on:{change:function(t){var s=e.checkedNames,a=t.target,n=!!a.checked;if(Array.isArray(s)){var i=e._i(s,"John");a.checked?i<0&&(e.checkedNames=s.concat(["John"])):i>-1&&(e.checkedNames=s.slice(0,i).concat(s.slice(i+1)))}else e.checkedNames=n}}}),e._v(" "),s("label",{attrs:{for:"john"}},[e._v("John")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"mike",value:"Mike"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Mike")>-1:e.checkedNames},on:{change:function(t){var s=e.checkedNames,a=t.target,n=!!a.checked;if(Array.isArray(s)){var i=e._i(s,"Mike");a.checked?i<0&&(e.checkedNames=s.concat(["Mike"])):i>-1&&(e.checkedNames=s.slice(0,i).concat(s.slice(i+1)))}else e.checkedNames=n}}}),e._v(" "),s("label",{attrs:{for:"mike"}},[e._v("Mike")])]),e._v(" "),s("br"),e._v(" "),s("span",[e._v("Checked names: "+e._s(e.checkedNames))]),e._v(" "),e._l(e.items,function(t,a){return s("h1",[s("ul",[s("li",{attrs:{title:e.FinishedMsg},on:{click:function(s){e.finish(t)}}},[s("span",{class:{Finished:t.isFinished}},[e._v(e._s(t.label))]),e._v(" "),s("span",[e._v(e._s(t.time))])])])])}),e._v(" "),s("div",{staticClass:"block"},[s("el-rate",{model:{value:e.star,callback:function(t){e.star=t},expression:"star"}})],1),e._v(" "),s("div",[s("HL",{attrs:{title1:"post successful","post.id":"1"}}),e._v(" "),s("Light")],1)],2)},staticRenderFns:[]};var d=s("VU/8")(r,l,!1,function(e){s("Tj40")},"data-v-4564f5ac",null);t.default=d.exports},Nmtv:function(e,t,s){"use strict";var a={data:function(){return{show_desc:!0,words:"",return_words:"请主动和我儿子说话",img_url:"https://api.r10086.com:8443/动漫综合2.php",changing:!1,point:"."}},methods:{read:function(){var e=this,t=sessionStorage.getItem("img_data_url"),s=document.querySelector("#img");if(null==t)this.getBase64Image(function(t){s.src=t,e.show_desc=!1;try{sessionStorage.setItem("img_data_url",dataURL)}catch(e){console.log("sessionStorage large")}});else{s.src=t,this.show_desc=!1;try{sessionStorage.setItem("img_data_url",dataURL)}catch(e){console.log("sessionStorage large")}}},getBase64Image:function(e){var t=new Image;t.setAttribute("crossOrigin","anonymous"),t.src=this.img_url;var s=document.createElement("canvas"),a=s.getContext("2d");t.onload=function(){s.width=t.width,s.height=t.height,a.drawImage(t,0,0,t.width,t.height);var n=t.src.substring(t.src.lastIndexOf(".")+1).toLowerCase(),i=s.toDataURL("image/"+n);e.call(this,i)}},dataURLtoBlob:function(e){for(var t=e.split(","),s=t[0].match(/:(.*?);/)[1],a=atob(t[1]),n=a.length,i=new Uint8Array(n);n--;)i[n]=a.charCodeAt(n);return new Blob([i],{type:s})},chat_with_tuling:function(){if(""!=this.words){var e={words:this.words},t=this;this.postData2Server("chat_with_tuling",e,function(e){"success"==e.msg&&(t.return_words=e.return_words)},!0)}else this.message("请输入内容再发送","error")},get_img_api:function(e){var t=this,s=sessionStorage.getItem("data_url"),a=document.querySelector("#img");if(null!=s&&!e)return a.src=s,void(t.show_desc=!1);e&&(this.changing=!0,this.point="."),this.postData2Server("get_img_api",{},function(e){a.src="data:"+e.content_type+";base64,"+e.img,t.show_desc=!1,t.changing=!1;try{sessionStorage.setItem("data_url",a.src)}catch(e){console.log("save data_url error : "+e)}},!0)}},mounted:function(){this.get_img_api(!1);var e=this;setInterval(function(){"....."!=e.point?e.point+=".":e.point="."},300)}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("img",{staticClass:"img",attrs:{src:"",id:"img",alt:""}}),e._v(" "),e.show_desc?s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v("\n            我这里有一张图片，你可以等我再加载一会儿0.0"),s("span",{staticClass:"dot"},[e._v("...")])]):e._e(),e._v(" "),s("div",[e.show_desc?e._e():s("el-button",{staticClass:"image-slot",attrs:{slot:"placeholder",size:"large",disabled:e.changing},on:{click:function(t){e.get_img_api(!0)}},slot:"placeholder"},[e._v("\n                "+e._s(e.changing?"更换中":"换一张")),e.changing?s("span",{staticStyle:{position:"absolute"}},[e._v(e._s(e.point))]):e._e()])],1),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("el-input",{staticClass:"tl_input",attrs:{placeholder:"和我儿子对话"},model:{value:e.words,callback:function(t){e.words=t},expression:"words"}}),e._v(" "),s("el-button",{on:{click:e.chat_with_tuling}},[e._v("发送")]),e._v(" "),s("el-card",{staticClass:"tl_output"},[s("div",[e._v(e._s(e.return_words))])])],1)},staticRenderFns:[]};var i=s("VU/8")(a,n,!1,function(e){s("PuU8"),s("aJeR")},"data-v-0d907330",null);t.a=i.exports},PuU8:function(e,t){},Tj40:function(e,t){},aJeR:function(e,t){},mvHQ:function(e,t,s){e.exports={default:s("qkKv"),__esModule:!0}},olkN:function(e,t,s){"use strict";var a=s("mvHQ"),n=s.n(a);t.a={fetchTodoList:function(){return JSON.parse(window.localStorage.getItem("todoList")||"[]")},saveTodoList:function(e){window.localStorage.setItem("todoList",n()(e))},fetchStar:function(){return Number(window.localStorage.getItem("star"))||null},saveStar:function(e){window.localStorage.setItem("star",e)},fetchusername:function(){return window.sessionStorage.getItem("username")}}},qkKv:function(e,t,s){var a=s("FeBl"),n=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}}});