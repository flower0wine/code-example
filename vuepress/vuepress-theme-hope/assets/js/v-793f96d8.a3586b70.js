"use strict";(self.webpackChunkvuepress_hope=self.webpackChunkvuepress_hope||[]).push([[5424],{8152:(e,n)=>{n.c=(e,n)=>{const a=e.__vccOpts||e;for(const[e,t]of n)a[e]=t;return a}},7516:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>We,data:()=>Je});var t=a(6760),r=a(8752);const l=(0,t.QD)("p",null,"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.",-1),s=(0,t.QD)("p",null,"You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.",-1),o=(0,t.QD)("h2",{id:"markdown-introduction",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#markdown-introduction"},[(0,t.QD)("span",null,"Markdown Introduction")])],-1),i={href:"https://theme-hope.vuejs.press/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://theme-hope.vuejs.press/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},p=(0,t.QD)("h2",{id:"markdown-config",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#markdown-config"},[(0,t.QD)("span",null,"Markdown Config")])],-1),d=(0,t.QD)("p",null,"VuePress introduce configuration for each markdown page using Frontmatter.",-1),u={class:"hint-container info"},m=(0,t.QD)("p",{class:"hint-container-title"},"Info",-1),c={href:"https://theme-hope.vuejs.press/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},D=(0,t.QD)("h2",{id:"markdown-extension",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#markdown-extension"},[(0,t.QD)("span",null,"Markdown Extension")])],-1),Q={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},f=(0,t.QD)("h3",{id:"vuepress-enhancement",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#vuepress-enhancement"},[(0,t.QD)("span",null,"VuePress Enhancement")])],-1),k=(0,t.QD)("p",null,"To enrich document writing, VuePress has extended Markdown syntax.",-1),w={href:"https://theme-hope.vuejs.press/basic/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},v=(0,t.QD)("h3",{id:"theme-enhancement",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#theme-enhancement"},[(0,t.QD)("span",null,"Theme Enhancement")])],-1),b={href:"https://md-enhance.vuejs.press/",target:"_blank",rel:"noopener noreferrer"},y=(0,t.QD)("code",null,"vuepress-plugin-md-enhance",-1),Y=(0,t.IL)('<h4 id="hint-box" tabindex="-1"><a class="header-anchor" href="#hint-box"><span>Hint box</span></a></h4><div><p>Safely use {{ variable }} in Markdown.</p></div><div class="hint-container info"><p class="hint-container-title">Custom Title</p><p>A custom information container with <code>code</code>, <a href="#hint-box">link</a>.</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">Custom Title</p><p>A custom tip container</p></div><div class="hint-container warning"><p class="hint-container-title">Custom Title</p><p>A custom warning container</p></div><div class="hint-container caution"><p class="hint-container-title">Custom Title</p><p>A custom caution container</p></div><details class="hint-container details"><summary>Custom Title</summary><p>A custom details container</p></details>',7),x={href:"https://theme-hope.vuejs.press/guide/markdown/hint.html",target:"_blank",rel:"noopener noreferrer"},j=(0,t.QD)("h4",{id:"tabs",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#tabs"},[(0,t.QD)("span",null,"Tabs")])],-1),V=(0,t.QD)("p",null,"Apple",-1),_=(0,t.QD)("p",null,"Banana",-1),K=(0,t.QD)("p",null,"Orange",-1),M={href:"https://theme-hope.vuejs.press/guide/markdown/tabs.html",target:"_blank",rel:"noopener noreferrer"},A=(0,t.QD)("h4",{id:"code-tabs",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#code-tabs"},[(0,t.QD)("span",null,"Code Tabs")])],-1),P=(0,t.QD)("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[(0,t.QD)("pre",{class:"language-bash"},[(0,t.QD)("code",null,[(0,t.QD)("span",{class:"token function"},"pnpm"),(0,t.mY)(),(0,t.QD)("span",{class:"token function"},"add"),(0,t.mY)(),(0,t.QD)("span",{class:"token parameter variable"},"-D"),(0,t.mY)(" vuepress-theme-hope\n")])]),(0,t.QD)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t.QD)("div",{class:"line-number"})])],-1),E=(0,t.QD)("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[(0,t.QD)("pre",{class:"language-bash"},[(0,t.QD)("code",null,[(0,t.QD)("span",{class:"token function"},"yarn"),(0,t.mY)(),(0,t.QD)("span",{class:"token function"},"add"),(0,t.mY)(),(0,t.QD)("span",{class:"token parameter variable"},"-D"),(0,t.mY)(" vuepress-theme-hope\n")])]),(0,t.QD)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t.QD)("div",{class:"line-number"})])],-1),T=(0,t.QD)("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[(0,t.QD)("pre",{class:"language-bash"},[(0,t.QD)("code",null,[(0,t.QD)("span",{class:"token function"},"npm"),(0,t.mY)(" i "),(0,t.QD)("span",{class:"token parameter variable"},"-D"),(0,t.mY)(" vuepress-theme-hope\n")])]),(0,t.QD)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t.QD)("div",{class:"line-number"})])],-1),C={href:"https://theme-hope.vuejs.press/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},I=(0,t.QD)("h4",{id:"superscript-and-subscript",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#superscript-and-subscript"},[(0,t.QD)("span",null,"Superscript and Subscript")])],-1),S=(0,t.QD)("p",null,[(0,t.mY)("19"),(0,t.QD)("sup",null,"th"),(0,t.mY)(" H"),(0,t.QD)("sub",null,"2"),(0,t.mY)("O")],-1),z={href:"https://theme-hope.vuejs.press/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},F=(0,t.QD)("h4",{id:"align",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#align"},[(0,t.QD)("span",null,"Align")])],-1),H=(0,t.QD)("div",{style:{"text-align":"center"}},[(0,t.QD)("p",null,"I am center")],-1),B=(0,t.QD)("div",{style:{"text-align":"right"}},[(0,t.QD)("p",null,"I am right align")],-1),O={href:"https://theme-hope.vuejs.press/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},$=(0,t.QD)("h4",{id:"attrs",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#attrs"},[(0,t.QD)("span",null,"Attrs")])],-1),R=(0,t.QD)("p",null,[(0,t.mY)("A "),(0,t.QD)("strong",{id:"word"},"word"),(0,t.mY)(" having id.")],-1),G={href:"https://theme-hope.vuejs.press/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},L=(0,t.QD)("h4",{id:"footnote",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#footnote"},[(0,t.QD)("span",null,"Footnote")])],-1),N=(0,t.QD)("p",null,"This text has footnote[^first].",-1),U=(0,t.QD)("p",null,"[^first]: This is footnote content",-1),W={href:"https://theme-hope.vuejs.press/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},J=(0,t.QD)("h4",{id:"mark",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#mark"},[(0,t.QD)("span",null,"Mark")])],-1),q=(0,t.QD)("p",null,[(0,t.mY)("You can mark "),(0,t.QD)("mark",null,"important words"),(0,t.mY)(" .")],-1),X={href:"https://theme-hope.vuejs.press/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},Z=(0,t.QD)("h4",{id:"tasklist",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#tasklist"},[(0,t.QD)("span",null,"Tasklist")])],-1),ee=(0,t.QD)("li",null,[(0,t.QD)("p",null,"[x] Plan A")],-1),ne=(0,t.QD)("li",null,[(0,t.QD)("p",null,"[ ] Plan B")],-1),ae={href:"https://theme-hope.vuejs.press/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},te=(0,t.QD)("h4",{id:"image-enhancement",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#image-enhancement"},[(0,t.QD)("span",null,"Image Enhancement")])],-1),re=(0,t.QD)("p",null,"Support setting color scheme and size",-1),le={href:"https://theme-hope.vuejs.press/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},se=(0,t.QD)("h4",{id:"component",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#component"},[(0,t.QD)("span",null,"Component")])],-1),oe={href:"https://theme-hope.vuejs.press/guide/markdown/component.html",target:"_blank",rel:"noopener noreferrer"},ie=(0,t.QD)("h4",{id:"include-files",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#include-files"},[(0,t.QD)("span",null,"Include files")])],-1),he={href:"https://theme-hope.vuejs.press/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},pe=(0,t.QD)("h4",{id:"stylize",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#stylize"},[(0,t.QD)("span",null,"Stylize")])],-1),de={href:"https://theme-hope.vuejs.press/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},ue=(0,t.QD)("h4",{id:"tex",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#tex"},[(0,t.QD)("span",null,"Tex")])],-1),me=(0,t.QD)("p",null,"$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$",-1),ce={href:"https://theme-hope.vuejs.press/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},De=(0,t.QD)("h4",{id:"chart-js",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#chart-js"},[(0,t.QD)("span",null,"Chart.js")])],-1),Qe=(0,t.QD)("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html",width:"100%",height:"450"},null,-1),ge={href:"https://theme-hope.vuejs.press/guide/markdown/chartjs.html",target:"_blank",rel:"noopener noreferrer"},fe=(0,t.QD)("h4",{id:"echarts",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#echarts"},[(0,t.QD)("span",null,"Echarts")])],-1),ke=(0,t.QD)("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html",width:"100%",height:"800"},null,-1),we={href:"https://theme-hope.vuejs.press/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},ve=(0,t.QD)("h4",{id:"flowchart",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#flowchart"},[(0,t.QD)("span",null,"Flowchart")])],-1),be=(0,t.QD)("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html",width:"100%",height:"450"},null,-1),ye={href:"https://theme-hope.vuejs.press/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},Ye=(0,t.QD)("h4",{id:"markmap",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#markmap"},[(0,t.QD)("span",null,"MarkMap")])],-1),xe=(0,t.QD)("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html",width:"100%",height:"380"},null,-1),je={href:"https://theme-hope.vuejs.press/guide/markdown/markmap.html",target:"_blank",rel:"noopener noreferrer"},Ve=(0,t.QD)("h4",{id:"mermaid",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#mermaid"},[(0,t.QD)("span",null,"Mermaid")])],-1),_e=(0,t.QD)("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html",width:"100%",height:"620"},null,-1),Ke={href:"https://theme-hope.vuejs.press/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},Me=(0,t.QD)("h4",{id:"code-demo",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#code-demo"},[(0,t.QD)("span",null,"Code Demo")])],-1),Ae=(0,t.QD)("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html",width:"100%",height:"450"},null,-1),Pe={href:"https://theme-hope.vuejs.press/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},Ee=(0,t.QD)("h4",{id:"playground",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#playground"},[(0,t.QD)("span",null,"Playground")])],-1),Te=(0,t.QD)("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html",width:"100%",height:"480"},null,-1),Ce={href:"https://theme-hope.vuejs.press/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},Ie=(0,t.QD)("h4",{id:"kotlin-playground",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#kotlin-playground"},[(0,t.QD)("span",null,"Kotlin Playground")])],-1),Se=(0,t.QD)("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html",width:"100%",height:"220"},null,-1),ze={href:"https://theme-hope.vuejs.press/guide/markdown/kotlin-playground.html",target:"_blank",rel:"noopener noreferrer"},Fe=(0,t.QD)("h4",{id:"vue-playground",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#vue-playground"},[(0,t.QD)("span",null,"Vue Playground")])],-1),He=(0,t.QD)("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html",width:"100%",height:"380"},null,-1),Be={href:"https://theme-hope.vuejs.press/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},Oe=(0,t.QD)("h4",{id:"sandpack-playground",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#sandpack-playground"},[(0,t.QD)("span",null,"Sandpack Playground")])],-1),$e=(0,t.QD)("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html",width:"100%",height:"380"},null,-1),Re={href:"https://theme-hope.vuejs.press/guide/markdown/sandpack.html",target:"_blank",rel:"noopener noreferrer"},Ge=(0,t.QD)("h4",{id:"reveal-js",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#reveal-js"},[(0,t.QD)("span",null,"Reveal.js")])],-1),Le=(0,t.QD)("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/revealjs.html",width:"100%",height:"400"},null,-1),Ne={href:"https://theme-hope.vuejs.press/guide/markdown/revealjs.html",target:"_blank",rel:"noopener noreferrer"},Ue={},We=(0,a(8152).c)(Ue,[["render",function(e,n){const a=(0,t.E1)("ExternalLinkIcon"),Ue=(0,t.E1)("Tabs"),We=(0,t.E1)("CodeTabs"),Je=(0,t.E1)("VPCard"),qe=(0,t.E1)("Badge");return(0,t.Wz)(),(0,t.An)("div",null,[l,s,(0,t.g1)(" more "),o,(0,t.QD)("p",null,[(0,t.mY)("If you are a new learner and don't know how to write Markdown, please read "),(0,t.QD)("a",i,[(0,t.mY)("Markdown Intro"),(0,t.K2)(a)]),(0,t.mY)(" and "),(0,t.QD)("a",h,[(0,t.mY)("Markdown Demo"),(0,t.K2)(a)]),(0,t.mY)(".")]),p,d,(0,t.QD)("div",u,[m,(0,t.QD)("p",null,[(0,t.mY)("Frontmatter is a important concept in VuePress. If you don't know it, you need to read "),(0,t.QD)("a",c,[(0,t.mY)("Frontmatter Introduction"),(0,t.K2)(a)]),(0,t.mY)(".")])]),D,(0,t.QD)("p",null,[(0,t.mY)("The Markdown content in VuePress will be parsed by "),(0,t.QD)("a",Q,[(0,t.mY)("markdown-it"),(0,t.K2)(a)]),(0,t.mY)(", which supports "),(0,t.QD)("a",g,[(0,t.mY)("syntax extensions"),(0,t.K2)(a)]),(0,t.mY)(" via markdown-it plugins.")]),f,k,(0,t.QD)("p",null,[(0,t.mY)("For these extensions, please read "),(0,t.QD)("a",w,[(0,t.mY)("Markdown extensions in VuePress"),(0,t.K2)(a)]),(0,t.mY)(".")]),v,(0,t.QD)("p",null,[(0,t.mY)("By using "),(0,t.QD)("a",b,[y,(0,t.K2)(a)]),(0,t.mY)(", the theme extends more Markdown syntax and provides richer writing functions.")]),Y,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",x,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),j,(0,t.K2)(Ue,{id:"89",data:[{id:"apple"},{id:"banana"},{id:"orange"}],"tab-id":"fruit"},{title0:(0,t.Ql)((({value:e,isActive:n})=>[(0,t.mY)("apple")])),title1:(0,t.Ql)((({value:e,isActive:n})=>[(0,t.mY)("banana")])),title2:(0,t.Ql)((({value:e,isActive:n})=>[(0,t.mY)("orange")])),tab0:(0,t.Ql)((({value:e,isActive:n})=>[V])),tab1:(0,t.Ql)((({value:e,isActive:n})=>[_])),tab2:(0,t.Ql)((({value:e,isActive:n})=>[K])),_:1}),(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",M,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),A,(0,t.K2)(We,{id:"116",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2,"tab-id":"shell"},{title0:(0,t.Ql)((({value:e,isActive:n})=>[(0,t.mY)("pnpm")])),title1:(0,t.Ql)((({value:e,isActive:n})=>[(0,t.mY)("yarn")])),title2:(0,t.Ql)((({value:e,isActive:n})=>[(0,t.mY)("npm")])),tab0:(0,t.Ql)((({value:e,isActive:n})=>[P])),tab1:(0,t.Ql)((({value:e,isActive:n})=>[E])),tab2:(0,t.Ql)((({value:e,isActive:n})=>[T])),_:1}),(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",C,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),I,S,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",z,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),F,H,B,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",O,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),$,R,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",G,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),L,N,U,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",W,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),J,q,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",X,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),Z,(0,t.QD)("ul",null,[ee,ne,(0,t.QD)("li",null,[(0,t.QD)("p",null,[(0,t.QD)("a",ae,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])])]),te,re,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",le,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),se,(0,t.K2)(Je,(0,r.Gk)((0,t.o9)({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16),(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",oe,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),ie,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",he,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),pe,(0,t.QD)("p",null,[(0,t.mY)("Donate Mr.Hope a cup of coffee. "),(0,t.K2)(qe,{type:"tip"},{default:(0,t.Ql)((()=>[(0,t.mY)("Recommended")])),_:1})]),(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",de,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),ue,me,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",ce,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),De,Qe,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",ge,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),fe,ke,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",we,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),ve,be,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",ye,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),Ye,xe,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",je,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),Ve,_e,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",Ke,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),Me,Ae,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",Pe,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),Ee,Te,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",Ce,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),Ie,Se,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",ze,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),Fe,He,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",Be,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),Oe,$e,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",Re,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])]),Ge,Le,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.QD)("a",Ne,[(0,t.mY)("View Detail"),(0,t.K2)(a)])])])])}]]),Je=JSON.parse('{"path":"/demo/markdown.html","title":"Markdown Enhance","lang":"en-US","frontmatter":{"title":"Markdown Enhance","icon":"fab fa-markdown","order":2,"category":["Guide"],"tag":["Markdown"],"description":"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily. You should create and write Markdown files, so that VueP...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://mister-hope.github.io/vuepress/vuepress-theme-hope/zh/demo/markdown.html"}],["meta",{"property":"og:url","content":"https://mister-hope.github.io/vuepress/vuepress-theme-hope/demo/markdown.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:title","content":"Markdown Enhance"}],["meta",{"property":"og:description","content":"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily. You should create and write Markdown files, so that VueP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Markdown"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown Enhance\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Markdown Introduction","slug":"markdown-introduction","link":"#markdown-introduction","children":[]},{"level":2,"title":"Markdown Config","slug":"markdown-config","link":"#markdown-config","children":[]},{"level":2,"title":"Markdown Extension","slug":"markdown-extension","link":"#markdown-extension","children":[{"level":3,"title":"VuePress Enhancement","slug":"vuepress-enhancement","link":"#vuepress-enhancement","children":[]},{"level":3,"title":"Theme Enhancement","slug":"theme-enhancement","link":"#theme-enhancement","children":[]}]}],"git":{},"readingTime":{"minutes":2.4,"words":719},"filePathRelative":"demo/markdown.md","excerpt":"<p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>\\n<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>\\n","autoDesc":true}')}}]);