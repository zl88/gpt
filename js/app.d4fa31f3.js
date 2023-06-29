(function(){"use strict";var e={7730:function(e,t,n){var a=n(9242),o=(n(541),n(7658),n(3396)),l=n(7139),i=n(4870),s=n(4161);const c={id:"main"},u={id:"center"},r={id:"bottom"};var d=(0,o.aZ)({__name:"dialogCom",props:{title:null,show:{type:Boolean}},setup(e){const t=e;return(e,n)=>((0,o.wg)(),(0,o.iD)("div",{id:"dialog",class:(0,l.C_)({show:t.show})},[(0,o._)("div",c,[(0,o._)("p",null,(0,l.zw)(t.title),1),(0,o._)("div",u,[(0,o.WI)(e.$slots,"center")]),(0,o._)("div",r,[(0,o.WI)(e.$slots,"bottom")])])],2))}}),v=n(89);const p=(0,v.Z)(d,[["__scopeId","data-v-db0620d8"]]);var g=p;let h=0;function f(e){const t=document.querySelector("body"),n=document.createElement("div");n.id="messageBox",n.className="messageBox-"+ ++h,n.innerHTML=`<div class="${e.type}">${e.content}</div>`,t?.appendChild(n),setTimeout((()=>{h--,n.remove()}),3e3)}var m=f,y=n(5792),w=n(8134),k=n.n(w),_=n(3099),b=n.n(_);const C=(0,i.iH)("");function S(e){window.localStorage.setItem("n0ts-chatgpt-theme",e),C.value=e}function T(){const e=window.localStorage.getItem("n0ts-chatgpt-theme");e?C.value=e:S("light"),document.documentElement.setAttribute("theme",e||"light")}function D(){C.value=window.localStorage.getItem("n0ts-chatgpt-theme"),C.value="light"===C.value?"dark":"light",S(C.value),T()}var O={switchTheme:D,load:T,themeCache:C},x={apiBaseUrl:"https://api.n0ts.top",key:"",model:"gpt-3.5-turbo",models:["gpt-4","gpt-4-0613","gpt-4-32k","gpt-4-32k-0613","gpt-3.5-turbo","gpt-3.5-turbo-16k","gpt-3.5-turbo-0613","gpt-3.5-turbo-16k-0613","text-davinci-003","text-davinci-002","code-davinci-002"],system:"",robot:"chatgpt",nbCookie:""};function H(){return window.localStorage.setItem("n0ts-chatgpt-config",JSON.stringify(x)),x}function U(){const e=JSON.parse(window.localStorage.getItem("n0ts-chatgpt-config")??"{}");return e.key?(x.key=e.key,x.model=e.model,x.models=e.models,x.system=e.system,x.apiBaseUrl=e.apiBaseUrl,x.robot=e.robot,x.nbCookie=e.nbCookie,x):H()}var P={save:H,read:U,config:x},j=n(3812),B=n.n(j),E=n(469),N=n.n(E),I=n(2269),M=n.n(I),A=n(8914);async function q(e,t){return new Promise(((n,a)=>{const o=document.querySelector(t);o&&M()(o).then((t=>{const a=new A.ZP("p","mm","a4"),o=t.getContext("2d"),l=190,i=272,s=Math.floor(i*t.width/l);if(!o)return;let c=0;while(c<t.height){const e=document.createElement("canvas");e.width=t.width,e.height=Math.min(s,t.height-c);const n=e.getContext("2d");if(!n)return;n.putImageData(o.getImageData(0,c,t.width,Math.min(s,t.height-c)),0,0),a.addImage(e.toDataURL("image/jpeg",1),"JPEG",10,10,l,Math.min(i,l*e.height/e.width)),c+=s,c<t.height&&a.addPage()}a.save(`${e}.pdf`),n(null)}))}))}const z=e=>((0,o.dD)("data-v-1d3e2d3e"),e=e(),(0,o.Cn)(),e),Y=z((()=>(0,o._)("div",{class:"title",style:{padding:"10px"}},[(0,o._)("a",{href:"#",rel:"noopener",title:"关于本站",onclick:'document.getElementById("dome").innerHTML=obj.sites[0].hello'},[(0,o._)("i",{class:"jiaran"})]),(0,o._)("h1",{style:{display:"none"}},"小陈GPT💕"),(0,o._)("a",{target:"_blank",rel:"noopener",class:"xiaochen",href:"https://cn.bing.com/search?q=%E5%A4%8Fdj%E5%AF%BC%E8%88%AA"},"小陈GPT💕")],-1))),G=z((()=>(0,o._)("i",{class:"line"},null,-1))),K={key:0,id:"chats"},L=["onClick"],J=["onClick"],$={id:"bottom"},F={key:0,class:"money"},W={id:"main",class:"box"},Z={class:"img"},V={key:0,class:"system"},R={key:1,class:"user"},Q={key:2,class:"ai"},X=["innerHTML"],ee={key:0,id:"stretch"},te={class:"img"},ne={key:0,class:"system"},ae={key:1,class:"user"},oe={key:2,class:"ai"},le=["innerHTML"],ie={key:0,class:"links"},se=["href"],ce={key:0,id:"stretch"},ue={key:2,id:"home"},re=(0,o.uE)('<div data-v-1d3e2d3e><p data-v-1d3e2d3e>小陈GPT💕 基于 gpt-3.5-turbo</p><h3 data-v-1d3e2d3e>可以聊天，问问题</h3><div class="content" data-v-1d3e2d3e><p data-v-1d3e2d3e> 因女朋友使用chatgpt有一定困难， 小陈gpt💕 是为我的女朋友小陈制作， 同时提供给我的朋友使用 </p><p data-v-1d3e2d3e>感谢室友小白和禹哥为此免费提供openai的key</p><p data-v-1d3e2d3e> 本网站使用已开源项目构建，感谢作者开源 地址:<a href="https://gitee.com/n0ts/chat-gpt" target="_blank" data-v-1d3e2d3e>Gitee</a></p><p data-v-1d3e2d3e> 请放心使用，数据仅储存在浏览器本地 其他公益GPT项目🍀： <a href="https://www.zlblog.cf/posts/58959#Chat-GtP" target="_blank" data-v-1d3e2d3e>点我进入</a></p><p data-v-1d3e2d3e> ChatGPT 提问指南：<a target="_blank" rel="noopener" href="https://prompts.chat/" data-v-1d3e2d3e>Awesome ChatGPT Prompts</a><span class="p red" data-v-1d3e2d3e>👈英文更新版 | 中文版本👉</span><a target="_blank" rel="noopener" href="https://zhuanlan.zhihu.com/p/597957542" data-v-1d3e2d3e>ChatGPT 提问的艺术-知乎文章</a></p></div></div>',1),de=[re],ve={key:3,id:"input"},pe={class:"textarea"},ge={class:"btns"},he={class:"questions"},fe=["onClick"],me=z((()=>(0,o._)("p",null,"请在下方输入你的 GPT Key",-1))),ye=z((()=>(0,o._)("p",null,[(0,o.Uk)(" 申请地址："),(0,o._)("a",{href:"https://platform.openai.com/account/api-keys",target:"_blank"},"点我")],-1))),we=z((()=>(0,o._)("p",null,[(0,o.Uk)(" 小张的朋友："),(0,o._)("a",{href:"https://www.zlblog.cf/posts/21814.html",target:"_blank"},"点我")],-1))),ke=["onKeydown"],_e=z((()=>(0,o._)("p",{class:"tips"}," key 会保存在本地浏览器(localStorage)中，只供本地使用 ",-1))),be={class:"panel"},Ce=z((()=>(0,o._)("p",null,"GPT Key：",-1))),Se=z((()=>(0,o._)("p",{class:"tips"},"OpenAI 申请的 Key",-1))),Te=z((()=>(0,o._)("p",null,"Model：",-1))),De=["value"],Oe=z((()=>(0,o._)("p",{class:"tips"},"ChatGPT 模型选择",-1))),xe=z((()=>(0,o._)("p",null,"行为设定：",-1))),He=z((()=>(0,o._)("p",{class:"tips"},[(0,o._)("span",null,"给 OpenAI 设定一个行为，比如："),(0,o._)("br"),(0,o._)("span",null,"“你是一直猫，每句话后面加个 喵~”")],-1))),Ue=z((()=>(0,o._)("p",null,"BingCookie：",-1))),Pe=z((()=>(0,o._)("p",{class:"tips"},[(0,o._)("span",null,[(0,o.Uk)("前往 "),(0,o._)("a",{href:"https://cn.bing.com/",target:"_blank"},"Bing"),(0,o.Uk)("，F12 打开控制台输入 “document.cookie”")]),(0,o._)("br"),(0,o._)("span",null,"复制内容到这即可")],-1)));var je=(0,o.aZ)({__name:"App",setup(e){const{config:t,read:n,save:c}=P,u=JSON.parse(JSON.stringify(t));n();const r=(0,i.iH)("");t.apiBaseUrl&&""!==t.apiBaseUrl?r.value=t.apiBaseUrl:r.value=u.apiBaseUrl;const d=new(B());d.use(N());const v=(0,i.iH)(""==t.key);let p=null,h=null;(0,o.bv)((()=>{h=new(b())(document.querySelector("#main")),p=document.querySelector("#messages"),O.load(),t.key&&Je()}));const f=(0,i.iH)("");function w(){if(""==f.value)return m({type:"warning",content:"key 不能为空"});t.key=f.value,f.value="",c(),v.value=!1,m({type:"success",content:"key 存储成功，向小陈gpt提问吧"}),Je()}function _(){v.value=!1,t.key="暂无配置",c(),m({type:"warning",content:"暂未配置 key，无法使用 小陈gpt"})}const C=(0,i.iH)(!1),S=(0,i.iH)(t.robot);async function T(){C.value=!0;let e=[];if("chatgpt"==S.value){const t=Be[Ee.value].contents,n=t[t.length-1];"assistant"!=n.role&&x("assistant","");let a=null;"system"==t[0].role&&(a=t[0]),e=t.slice(2*Be[Ee.value].exceedTokens),a&&e.unshift(a)}"chatgpt"==S.value?D(e):ut()}function D(e){fetch(`${r.value}/chatgpt-stream`,{method:"POST",body:JSON.stringify({key:t.key,model:t.model,messages:e.map((e=>({role:e.role,content:e.stream}))),timeout:6e4}),headers:{"Content-Type":"application/json"}}).then((e=>{const t=e.body.getReader(),n=new TextDecoder("utf-8");let a="";t.read().then((async function e(l){if(l.done||!C.value)return;const i=n.decode(l.value);if(i.includes('"error": {\n'))return C.value=!1,Fe(i);if(i.includes("data: [DONE]")){C.value=!1;const e=Be[Ee.value].contents[Be[Ee.value].contents.length-1];return e.tokens=await We(e.content),H(),await(0,o.Y3)(),Me(),void h.update()}return i.replaceAll("data: ","").split("\n").filter(Boolean).forEach((async e=>{const t=JSON.parse(e);if(!t.choices[0].delta.content)return;const n=t.choices[0].delta.content;a+=n,Be[Ee.value].contents[Be[Ee.value].contents.length-1].content=d.render(a),Be[Ee.value].contents[Be[Ee.value].contents.length-1].stream=a,await(0,o.Y3)(),Me()})),t.read().then(e)}))})).catch((()=>{Be[Ee.value].contents[Be[Ee.value].contents.length-1].content="<p>发起网络请求失败，服务器可能正在维护中，请稍后重试</p>",m({type:"danger",content:"发起网络请求失败，请稍后重试"}),H(),C.value=!1}))}async function x(e,t,n){const a=n||t,l={role:e,content:d.render(a),tokens:0,stream:a};"chatgpt"==S.value?Be[Ee.value].contents.push(l):st.value.contents.push(l),H(),await(0,o.Y3)(),Me(),h.update()}function H(){window.localStorage.setItem("message-data",JSON.stringify(Be)),Ve()}const U=(0,i.iH)("");function j(){if(""!=U.value&&""!=U.value.trim()&&!C.value){if("chatgpt"==S.value&&-1==Ee.value&&(Be.unshift({name:"",contents:[],exceedTokens:0}),Ee.value=0),"chatgpt"==S.value&&t.system&&0==Be[Ee.value].contents.length&&x("system",t.system),x("user",U.value),"chatgpt"==S.value&&(1==Be[Ee.value].contents.length||"system"==Be[Ee.value].contents[0].role&&2==Be[Ee.value].contents.length)&&"chatgpt"==S.value){const e=U.value;let t=1;Be.forEach((n=>{0==n.name.indexOf(e)&&t++})),Be[Ee.value].name=e+(1==t?"":` #${t}`),document.title=e+" | 小陈gpt💕"}U.value="",T()}}let E=!1;function I(){E||(E=!0,setTimeout((()=>{E=!1,p=document.querySelector("#messages"),p?p.scrollTo({top:p.scrollHeight,behavior:"smooth"}):I()}),300))}let M=!1;function A(e){if(16===e.keyCode&&(M=!0),!M&&13===e.keyCode)return j(),e.preventDefault(),!1}function z(e){16===e.keyCode&&(M=!1)}const re=(0,i.iH)(24);(0,o.YP)((()=>U.value),(()=>{const e=U.value.split("\n").length;re.value=24*e}));const je=window.localStorage.getItem("message-data"),Be=(0,i.qj)(je?JSON.parse(je):[]),Ee=(0,i.iH)(-1);function Ne(){H();let e=1;Be.forEach((t=>{0==t.name.indexOf("新会话")&&e++})),Be.unshift({name:"新会话"+(1==e?"":` #${e}`),contents:[],exceedTokens:0}),U.value="",Ee.value=0}function Ie(e){document.title="小陈gpt💕",Be.splice(e,1),Ee.value=-1,H()}async function Me(){const e=[],t=document.querySelectorAll("#messages pre code");t.forEach((t=>{const n=t;if(n.getAttribute("class")?.includes("hljs"))return;const a=document.createElement("div");a.className="copyBtn",a.innerHTML="复制",a.setAttribute("code",n.innerText),a.addEventListener("click",(e=>{ze(e)})),n.parentElement?.appendChild(a),y.Z.highlightElement(n),e.push(n)})),Ae(e),I()}function Ae(e){for(let t=0;t<e.length;t++){const n=e[t].innerHTML.replace(/\n/g,"</li><li>");e[t].innerHTML=`<ol><li>${n}</li></ol>`.replace("<li></li></ol>","</ol>")}}(0,o.YP)((()=>Ee.value),(async()=>{Be[Ee.value]&&(document.title=Be[Ee.value].name+" | 小陈gpt💕",await(0,o.Y3)(),Ve(),Me(),h.update())}));const qe=(0,i.iH)(!1);function ze(e){const t=e.target.getAttribute("code");t&&(k().copy(t),m({type:"success",content:"复制成功"}))}function Ye(){window.localStorage.removeItem("message-data"),window.localStorage.removeItem("n0ts-chatgpt-theme"),window.localStorage.removeItem("n0ts-chatgpt-config"),window.location.reload()}const Ge=(0,i.iH)(!1);function Ke(){Ge.value=!Ge.value,c(),m({type:"success",content:"设置已保存"})}const Le=(0,i.iH)(null);async function Je(){}function $e(e,t){return Number(e.toFixed(t))}function Fe(e){const n=JSON.parse(e.replace("未知错误，请联系站长解决！",""));return console.error("报错了哥们",n),"invalid_api_key"==n.error.code?(m({type:"danger",content:"API Key 错误，请重新配置"}),t.key="",c(),void(v.value=!0)):"context_length_exceeded"==n.error.code?(Be[Ee.value].exceedTokens+=1,T()):void(Be[Ee.value].contents[Be[Ee.value].contents.length-1].content=e)}async function We(e){return 0}const Ze=(0,i.iH)(0);function Ve(){if(!Be[Ee.value])return;let e=0;Be[Ee.value].contents.forEach((t=>{e+=t.tokens})),Ze.value=e}function Re(){C.value=!1,"newbing"==S.value&&ct.close()}const Qe=(0,i.iH)(!1);async function Xe(){Qe.value=!0,await(0,o.Y3)(),await q("对话导出 | "+(new Date).toLocaleDateString().replaceAll("/","-").toString(),"#main"),m({type:"success",content:"正在导出中，耐心稍等一会~"}),Qe.value=!1}function et(){t.robot=S.value="chatgpt"==S.value?"newbing":"chatgpt",c()}const tt=(0,i.iH)(null);async function nt(){if(tt.value)return tt.value;const{data:e}=await s.Z.post(`${r.value}/bing/new`,{cookie:t.nbCookie});return tt.value=e.data,tt.value}let at=!0;const ot=(0,i.iH)([]),lt=(0,i.iH)([]),it=(0,i.iH)([]),st=(0,i.iH)({name:"newbing",contents:[],exceedTokens:0});let ct=null;async function ut(){if(!t.nbCookie)return dt(!0),m({type:"danger",content:"请在配置中填写 Bing Cookie 后使用"});it.value=[];const e=st.value.contents;e.push({role:"assistant",content:"",tokens:0,stream:""});const n=e[e.length-2],a=e[e.length-1];let l=await nt();ct=new WebSocket("wss://api.n0ts.top/newbing"),ct.onopen=()=>{console.log("NewBing Ws Open，Content："+n.stream),ct.send(JSON.stringify({text:n.stream,isStartOfSession:at,...l})),at=!1},ct.onmessage=async e=>{try{const t=JSON.parse(e.data);(t.question||t.links)&&(ot.value=t)}catch{console.log(e.data),a.content=d.render(a.stream=e.data),await(0,o.Y3)(),Me()}},ct.onclose=async()=>{console.log("NewBing Ws Close"),C.value=!1,H(),await(0,o.Y3)(),Me(),h.update(),lt.value=ot.value.links,it.value=ot.value.question,console.log(ot.value),console.log("相关链接",lt.value),console.log("相关问题",it.value)}}function rt(){return"chatgpt"==S.value?"ChatGPT":"NewBing"}function dt(e){st.value.contents=[],tt.value=null,ct=null,at=!0,C.value=!1,lt.value=[],it.value=[],e||m({type:"success",content:"对话重载成功"})}function vt(e){U.value=e.text,it.value=[],j()}return(e,n)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",{id:"chatgpt",class:(0,l.C_)({print:Qe.value})},[Qe.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",{key:0,id:"sidebar",class:(0,l.C_)({sideBarShow:qe.value})},[Y,(0,o._)("div",{class:"btns"},[(0,o._)("div",{class:"btn",onClick:Ne},[(0,o.Uk)(" ➕ 新建会话"),G])]),Qe.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",K,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Be,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,onClick:e=>Ee.value=t,class:(0,l.C_)({active:Ee.value==t})},[(0,o._)("p",null,(0,l.zw)(e.name),1),(0,o._)("span",{onClick:(0,a.iM)((e=>Ie(t)),["stop"])},"🗑 删除",8,J)],10,L)))),128))])),(0,o._)("div",$,[(0,o._)("div",{class:"btn",onClick:et},(0,l.zw)("chatgpt"==S.value?"🔎 切换为 NewBing":"💬 切换为 ChatGPT"),1),(0,o._)("div",{class:"btn",onClick:n[0]||(n[0]=(...e)=>(0,i.SU)(O).switchTheme&&(0,i.SU)(O).switchTheme(...e))},(0,l.zw)("light"==(0,i.SU)(O).themeCache.value?"🌃 暗色模式":"🌇 亮色模式"),1),(0,o._)("div",{class:"btn",onClick:n[1]||(n[1]=e=>Ge.value=!0)},"👐 打开配置"),(0,o._)("div",{class:"btn",onClick:Ye},"👊 重置配置"),Le.value?((0,o.wg)(),(0,o.iD)("div",F," 余额："+(0,l.zw)($e(Le.value.soft_limit_usd,2))+" $，已用："+(0,l.zw)($e(Le.value.system_hard_limit_usd-Le.value.soft_limit_usd,2))+" $ ",1)):(0,o.kq)("",!0)]),(0,o._)("div",{id:"showBtn",onClick:n[2]||(n[2]=e=>qe.value=!qe.value)},(0,l.zw)(qe.value?"👈":"👉"),1)],2)),(0,o._)("div",W,["chatgpt"==S.value&&Be[Ee.value]?((0,o.wg)(),(0,o.iD)("div",{key:0,id:"messages",class:(0,l.C_)({print:Qe.value})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Be[Ee.value].contents,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n,class:(0,l.C_)("user"==e.role?"right":"left")},[(0,o._)("div",Z,["system"==e.role?((0,o.wg)(),(0,o.iD)("div",V," SY ")):"user"==e.role?((0,o.wg)(),(0,o.iD)("div",R," 我 ")):((0,o.wg)(),(0,o.iD)("div",Q,(0,l.zw)("chatgpt"==(0,i.SU)(t).robot?"GPT":"Bing"),1))]),(0,o._)("div",{class:(0,l.C_)(["content",{end:!C.value||n!=Be[Ee.value].contents.length-1}]),innerHTML:e.content},null,10,X)],2)))),128)),Qe.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ee))],2)):"newbing"==S.value?((0,o.wg)(),(0,o.iD)("div",{key:1,id:"messages",class:(0,l.C_)({print:Qe.value})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(st.value.contents,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n,class:(0,l.C_)("user"==e.role?"right":"left")},[(0,o._)("div",te,["system"==e.role?((0,o.wg)(),(0,o.iD)("div",ne," SY ")):"user"==e.role?((0,o.wg)(),(0,o.iD)("div",ae," 我 ")):((0,o.wg)(),(0,o.iD)("div",oe,(0,l.zw)("chatgpt"==(0,i.SU)(t).robot?"GPT":"Bing"),1))]),(0,o._)("div",{class:(0,l.C_)(["content",{end:!C.value||n!=st.value.contents.length-1}]),innerHTML:e.content},null,10,le),n!=st.value.contents.length-1||C.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ie,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(lt.value,((e,t)=>((0,o.wg)(),(0,o.iD)("a",{href:e.seeMoreUrl,target:"_blank",key:t},"🔗 "+(0,l.zw)(e.providerDisplayName),9,se)))),128))]))],2)))),128)),Qe.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ce))],2)):((0,o.wg)(),(0,o.iD)("div",ue,de)),Qe.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ve,[(0,o._)("div",{class:(0,l.C_)(["stop",{stopShow:C.value}]),onClick:Re}," 停止回复 🛑 ",2),(0,o._)("div",pe,[(0,o._)("div",ge,[(0,o._)("div",{onClick:Xe},"📄 导出PDF"),"newbing"==S.value?((0,o.wg)(),(0,o.iD)("div",{key:0,onClick:n[3]||(n[3]=e=>dt(!1))}," 🔃 重载对话 ")):(0,o.kq)("",!0)]),(0,o._)("div",he,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(it.value,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,onClick:t=>vt(e)}," ❓ "+(0,l.zw)(e.text),9,fe)))),128))]),(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":n[4]||(n[4]=e=>U.value=e),onKeydown:A,onKeyup:z,style:(0,l.j5)({height:re.value+"px"})},null,36),[[a.nr,U.value]])]),(0,o._)("p",null," 当前 AI："+(0,l.zw)(rt())+" | 当前 Model："+(0,l.zw)((0,i.SU)(t).model),1)]))])],2),(0,o.Wm)(g,{title:"初次配置",show:v.value},{center:(0,o.w5)((()=>[me,ye,we,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[5]||(n[5]=e=>f.value=e),onKeydown:(0,a.D2)(w,["enter"])},null,40,ke),[[a.nr,f.value]]),_e])),bottom:(0,o.w5)((()=>[(0,o._)("button",{class:"success",onClick:w},"存储"),(0,o._)("button",{class:"info",onClick:_},"跳过")])),_:1},8,["show"]),(0,o.Wm)(g,{title:"设置",show:Ge.value},{center:(0,o.w5)((()=>[(0,o._)("div",be,[(0,o._)("div",null,[Ce,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":n[6]||(n[6]=e=>(0,i.SU)(t).key=e)},null,512),[[a.nr,(0,i.SU)(t).key]])]),Se,(0,o._)("div",null,[Te,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":n[7]||(n[7]=e=>(0,i.SU)(t).model=e)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,i.SU)(t).models,((e,t)=>((0,o.wg)(),(0,o.iD)("option",{key:t,value:e},(0,l.zw)(e),9,De)))),128))],512),[[a.bM,(0,i.SU)(t).model]])]),Oe,(0,o._)("div",null,[xe,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":n[8]||(n[8]=e=>(0,i.SU)(t).system=e)},null,512),[[a.nr,(0,i.SU)(t).system]])]),He,(0,o._)("div",null,[Ue,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":n[9]||(n[9]=e=>(0,i.SU)(t).nbCookie=e)},null,512),[[a.nr,(0,i.SU)(t).nbCookie]])]),Pe])])),bottom:(0,o.w5)((()=>[(0,o._)("button",{class:"success",onClick:Ke},"保存"),(0,o._)("button",{class:"info",onClick:n[10]||(n[10]=e=>Ge.value=!Ge.value)}," 关闭 ")])),_:1},8,["show"])],64))}});const Be=(0,v.Z)(je,[["__scopeId","data-v-1d3e2d3e"]]);var Ee=Be;const Ne=(0,a.ri)(Ee);Ne.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,l){if(!a){var i=1/0;for(r=0;r<e.length;r++){a=e[r][0],o=e[r][1],l=e[r][2];for(var s=!0,c=0;c<a.length;c++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,l<i&&(i=l));if(s){e.splice(r--,1);var u=o();void 0!==u&&(t=u)}}return t}l=l||0;for(var r=e.length;r>0&&e[r-1][2]>l;r--)e[r]=e[r-1];e[r]=[a,o,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(a,o){if(1&o&&(a=this(a)),8&o)return a;if("object"===typeof a&&a){if(4&o&&a.__esModule)return a;if(16&o&&"function"===typeof a.then)return a}var l=Object.create(null);n.r(l);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&a;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return a[e]}}));return i["default"]=function(){return a},n.d(l,i),l}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{297:"24d71ff2",617:"6232c743"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="chatgpt:";n.l=function(a,o,l,i){if(e[a])e[a].push(o);else{var s,c;if(void 0!==l)for(var u=document.getElementsByTagName("script"),r=0;r<u.length;r++){var d=u[r];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+l){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+l),s.src=a),e[a]=[o];var v=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=v.bind(null,s.onerror),s.onload=v.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var l=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=l);var i=n.p+n.u(t),s=new Error,c=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var l=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+l+": "+i+")",s.name="ChunkLoadError",s.type=l,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,i=a[0],s=a[1],c=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var r=c(n)}for(t&&t(a);u<i.length;u++)l=i[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(r)},a=self["webpackChunkchatgpt"]=self["webpackChunkchatgpt"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7730)}));a=n.O(a)})();
//# sourceMappingURL=app.d4fa31f3.js.map