"use strict";function peg$subclass(r,t){function e(){this.constructor=r}e.prototype=t.prototype,r.prototype=new e}function peg$SyntaxError(r,t,e,n){this.message=r,this.expected=t,this.found=e,this.location=n,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,peg$SyntaxError)}function peg$parse(h,r){r=void 0!==r?r:{};var t,p={},e={GIFTQuestions:ie},n=ie,u=function(r){return r},o=ne("Category"),c="$",a=te("$",!1),i="CATEGORY:",s=te("CATEGORY:",!1),l=function(r){return{type:"Category",title:r}},f=ne("Description"),d=function(r,t){return Ie(),{type:"Description",title:r,stem:t,hasEmbeddedAnswers:!1}},g="{",v=te("{",!1),b="}",A=te("}",!1),m=function(r,t,e,n){var u=null!=n,o={format:t.format,text:t.text+(u?" _____ "+n.text:"")},c={type:e.type,title:r,stem:o,hasEmbeddedAnswers:null!=n};return c=function(r,t){switch(r.globalFeedback=t.globalFeedback,r.type){case"TF":r.isTrue=t.isTrue,r.incorrectFeedback=t.feedback[1],r.correctFeedback=t.feedback[2];break;case"MC":case"Numerical":case"Short":r.choices=t.choices;break;case"Matching":r.matchPairs=t.matchPairs}"MC"==r.type&&function(r){for(var t=!0,e=0;e<r.length;e++)t&=r[e].isCorrect;return t}(r.choices)&&(r.type="Short");return r}(c,e),Ie(),c},C=ne("{= match1 -> Match1\n...}"),x=function(r,t){return{type:"Matching",matchPairs:r,globalFeedback:t}},y=ne("matches"),w=function(r){return r},F=ne("match"),k="=",E=te("=",!1),S="->",T=te("->",!1),$=function(r,t){return{subquestion:{format:null!==r?r.format:De(),text:null!==r?r.text:""},subanswer:t}},M=ne("{T} or {F} or {True} or {False}"),j=function(r,t,e){return{type:"TF",isTrue:r,feedback:t,globalFeedback:e}},R=function(r){return r},L="true",N=te("TRUE",!0),_="t",q=te("T",!0),G=function(){return!0},O="false",P=te("FALSE",!0),D="f",I=te("F",!0),Q=function(){return!1},U=ne("{=correct choice ~incorrect choice ... }"),Y=function(r,t){return{type:"MC",choices:r,globalFeedback:t}},H=ne("Choices"),z=function(r){return r},B=ne("Choice"),J=/^[=~]/,K=ee(["=","~"],!1,!1),V=function(r,t){var e=r[2],n=r[4];return r={isCorrect:"="==r[0],weight:e,text:n,feedback:t}},W=ne("(weight)"),X="%",Z=te("%",!1),rr=/^[\-]/,tr=ee(["-"],!1,!1),er=function(r){return parseInt(r.join(""),10)},nr=ne("(percent)"),ur="100",or=te("100",!1),cr=/^[0-9]/,ar=ee([["0","9"]],!1,!1),ir=function(){return re()},sr=ne("(feedback)"),lr="#",fr=te("#",!1),hr="###",pr=te("###",!1),dr=function(r){return r},gr=ne("Essay question { ... }"),vr="",br=function(r){return{type:"Essay",globalFeedback:r}},Ar=ne("Single short answer { ... }"),mr=function(r,t,e){var n=[];return n.push({isCorrect:!0,text:r,feedback:t,weight:null}),{type:"Short",choices:n,globalFeedback:e}},Cr=ne("{#... }"),xr=function(r,t){return{type:"Numerical",choices:r,globalFeedback:t}},yr=ne("Numerical Answers"),wr=ne("Multiple Numerical Choices"),Fr=ne("Numerical Choice"),kr=function(r,t){var e=r[0],n=r[1],u=r[2];return r={isCorrect:"="==e,weight:n,text:null!==u?u:{format:De(),text:"*"},feedback:t}},Er=ne("Single numeric answer"),Sr=ne("(number with range)"),Tr=":",$r=te(":",!1),Mr=function(r,t){return{type:"range",number:r,range:t}},jr=ne("(number with high-low)"),Rr="..",Lr=te("..",!1),Nr=function(r,t){return{type:"high-low",numberHigh:t,numberLow:r}},_r=ne("(number answer)"),qr=function(r){return{type:"simple",number:r}},Gr=ne(":: Title ::"),Or="::",Pr=te("::",!1),Dr=function(r){return r.join("")},Ir=ne("Question stem"),Qr=function(r){var t;return t=r.format,Oe=t,r},Ur=ne("(blank line separator)"),Yr=ne("blank line"),Hr=ne("(Title text)"),zr=function(r){return r},Br=ne("(text character)"),Jr=ne("format"),Kr="[",Vr=te("[",!1),Wr="html",Xr=te("html",!1),Zr="markdown",rt=te("markdown",!1),tt="plain",et=te("plain",!1),nt="moodle",ut=te("moodle",!1),ot="]",ct=te("]",!1),at=function(r){return r},it=ne("(escape character)"),st="\\",lt=te("\\",!1),ft=ne("escape sequence"),ht="~",pt=te("~",!1),dt=function(r){return r},gt=ne(""),vt={type:"any"},bt=function(){return re()},At=ne("(formatted text)"),mt=function(r,t){return{format:null!==r?r:De(),text:"html"!==r?Pe(t.join("").trim()):t.join("").replace(/\r\n/g,"\n")}},Ct=ne("(unformatted text)"),xt=function(r){return Pe(r.join("").trim())},yt=function(r,t){return parseFloat(r.join("")+t)},wt=".",Ft=te(".",!1),kt=function(r){return"."+r.join("")},Et="####",St=te("####",!1),Tt=function(r){return r},$t=ne("(single line whitespace)"),Mt=ne("(multiple line whitespace)"),jt=ne("(comment)"),Rt="//",Lt=te("//",!1),Nt=function(){return null},_t=ne("(space)"),qt=" ",Gt=te(" ",!1),Ot="\t",Pt=te("\t",!1),Dt=ne("(end of line)"),It="\r\n",Qt=te("\r\n",!1),Ut="\n",Yt=te("\n",!1),Ht="\r",zt=te("\r",!1),Bt=function(){return"EOF"},Jt=0,Kt=0,Vt=[{line:1,column:1}],Wt=0,Xt=[],Zt=0;if("startRule"in r){if(!(r.startRule in e))throw new Error("Can't start parsing from rule \""+r.startRule+'".');n=e[r.startRule]}function re(){return h.substring(Kt,Jt)}function te(r,t){return{type:"literal",text:r,ignoreCase:t}}function ee(r,t,e){return{type:"class",parts:r,inverted:t,ignoreCase:e}}function ne(r){return{type:"other",description:r}}function ue(r){var t,e=Vt[r];if(e)return e;for(t=r-1;!Vt[t];)t--;for(e={line:(e=Vt[t]).line,column:e.column};t<r;)10===h.charCodeAt(t)?(e.line++,e.column=1):e.column++,t++;return Vt[r]=e}function oe(r,t){var e=ue(r),n=ue(t);return{start:{offset:r,line:e.line,column:e.column},end:{offset:t,line:n.line,column:n.column}}}function ce(r){Jt<Wt||(Wt<Jt&&(Wt=Jt,Xt=[]),Xt.push(r))}function ae(r,t,e){return new peg$SyntaxError(peg$SyntaxError.buildMessage(r,t),r,t,e)}function ie(){var r,t,e;if(r=Jt,t=[],(e=se())===p&&(e=le())===p&&(e=fe()),e!==p)for(;e!==p;)t.push(e),(e=se())===p&&(e=le())===p&&(e=fe());else t=p;return t!==p&&(e=je())!==p&&Re()!==p?(Kt=r,r=t=u(t)):(Jt=r,r=p),r}function se(){var r,t,e,n;return Zt++,r=Jt,Re()!==p?(36===h.charCodeAt(Jt)?(t=c,Jt++):(t=p,0===Zt&&ce(a)),t!==p?(h.substr(Jt,9)===i?(e=i,Jt+=9):(e=p,0===Zt&&ce(s)),e!==p&&je()!==p&&(n=Te())!==p&&Ce()!==p?(Kt=r,r=l(n)):(Jt=r,r=p)):(Jt=r,r=p)):(Jt=r,r=p),Zt--,r===p&&(p,0===Zt&&ce(o)),r}function le(){var r,t,e;return Zt++,r=Jt,Re()!==p?((t=Ae())===p&&(t=null),t!==p&&je()!==p&&(e=me())!==p&&Ce()!==p?(Kt=r,r=d(t,e)):(Jt=r,r=p)):(Jt=r,r=p),Zt--,r===p&&(p,0===Zt&&ce(f)),r}function fe(){var r,t,e,n,u,o,c;return r=Jt,Re()!==p?((t=Ae())===p&&(t=null),t!==p&&je()!==p&&(e=me())!==p&&je()!==p?(123===h.charCodeAt(Jt)?(n=g,Jt++):(n=p,0===Zt&&ce(v)),n!==p&&je()!==p?((u=function(){var r,t,e;Zt++,r=Jt,(t=function(){var r,t,e;if(Zt++,r=Jt,t=[],(e=he())!==p)for(;e!==p;)t.push(e),e=he();else t=p;return t!==p&&(Kt=r,t=w(t)),Zt--,(r=t)===p&&(t=p,0===Zt&&ce(y)),r}())!==p&&je()!==p?((e=Me())===p&&(e=null),e!==p&&je()!==p?(Kt=r,t=x(t,e),r=t):(Jt=r,r=p)):(Jt=r,r=p);Zt--,r===p&&(t=p,0===Zt&&ce(C));return r}())===p&&(u=function(){var r,t,e,n,u,o;Zt++,r=Jt,l=c=Jt,h.substr(Jt,4).toLowerCase()===L?(f=h.substr(Jt,4),Jt+=4):(f=p,0===Zt&&ce(N)),f===p&&(h.substr(Jt,1).toLowerCase()===_?(f=h.charAt(Jt),Jt++):(f=p,0===Zt&&ce(q))),f!==p&&(Kt=l,f=G()),(a=l=f)===p&&(i=Jt,h.substr(Jt,5).toLowerCase()===O?(s=h.substr(Jt,5),Jt+=5):(s=p,0===Zt&&ce(P)),s===p&&(h.substr(Jt,1).toLowerCase()===D?(s=h.charAt(Jt),Jt++):(s=p,0===Zt&&ce(I))),s!==p&&(Kt=i,s=Q()),a=i=s),a!==p&&(Kt=c,a=R(a)),(t=c=a)!==p&&je()!==p?(e=Jt,(n=je())!==p?((u=ge())===p&&(u=null),u!==p?((o=ge())===p&&(o=null),o!==p?e=n=[n,u,o]:(Jt=e,e=p)):(Jt=e,e=p)):(Jt=e,e=p),e!==p&&(n=je())!==p?((u=Me())===p&&(u=null),u!==p?(Kt=r,t=j(t,e,u),r=t):(Jt=r,r=p)):(Jt=r,r=p)):(Jt=r,r=p);var c,a,i,s,l,f;Zt--,r===p&&(t=p,0===Zt&&ce(M));return r}())===p&&(u=function(){var r,t,e;Zt++,r=Jt,(t=function(){var r,t,e;if(Zt++,r=Jt,t=[],(e=pe())!==p)for(;e!==p;)t.push(e),e=pe();else t=p;return t!==p&&(Kt=r,t=z(t)),Zt--,(r=t)===p&&(t=p,0===Zt&&ce(H)),r}())!==p&&je()!==p?((e=Me())===p&&(e=null),e!==p&&je()!==p?(Kt=r,t=Y(t,e),r=t):(Jt=r,r=p)):(Jt=r,r=p);Zt--,r===p&&(t=p,0===Zt&&ce(U));return r}())===p&&(u=function(){var r,t,e,n;Zt++,r=Jt,35===h.charCodeAt(Jt)?(t=lr,Jt++):(t=p,0===Zt&&ce(fr));t!==p&&je()!==p&&(e=function(){var r;Zt++,(r=function(){var r,t,e;if(Zt++,r=Jt,t=[],(e=ve())!==p)for(;e!==p;)t.push(e),e=ve();else t=p;return t!==p&&(Kt=r,t=z(t)),Zt--,(r=t)===p&&(t=p,0===Zt&&ce(wr)),r}())===p&&(r=be());Zt--,r===p&&(p,0===Zt&&ce(yr));return r}())!==p&&je()!==p?((n=Me())===p&&(n=null),n!==p?(Kt=r,t=xr(e,n),r=t):(Jt=r,r=p)):(Jt=r,r=p);Zt--,r===p&&(t=p,0===Zt&&ce(Cr));return r}())===p&&(u=function(){var r,t,e,n;Zt++,r=Jt,(t=Se())!==p&&je()!==p?((e=ge())===p&&(e=null),e!==p&&je()!==p?((n=Me())===p&&(n=null),n!==p&&je()!==p?(Kt=r,t=mr(t,e,n),r=t):(Jt=r,r=p)):(Jt=r,r=p)):(Jt=r,r=p);Zt--,r===p&&(t=p,0===Zt&&ce(Ar));return r}())===p&&(u=function(){var r,t,e;Zt++,r=Jt,(t=vr)!==p&&je()!==p?((e=Me())===p&&(e=null),e!==p&&je()!==p?(Kt=r,t=br(e),r=t):(Jt=r,r=p)):(Jt=r,r=p);Zt--,r===p&&(t=p,0===Zt&&ce(gr));return r}()),u!==p&&je()!==p?(125===h.charCodeAt(Jt)?(o=b,Jt++):(o=p,0===Zt&&ce(A)),o!==p&&je()!==p?((c=Le())===p&&(c=me()),c===p&&(c=null),c!==p&&Ce()!==p?(Kt=r,r=m(t,e,u,c)):(Jt=r,r=p)):(Jt=r,r=p)):(Jt=r,r=p)):(Jt=r,r=p)):(Jt=r,r=p)):(Jt=r,r=p),r}function he(){var r,t,e,n,u;return Zt++,r=Jt,je()!==p?(61===h.charCodeAt(Jt)?(t=k,Jt++):(t=p,0===Zt&&ce(E)),t!==p&&je()!==p?((e=Se())===p&&(e=null),e!==p&&je()!==p?(h.substr(Jt,2)===S?(n=S,Jt+=2):(n=p,0===Zt&&ce(T)),n!==p&&je()!==p&&(u=Te())!==p&&je()!==p?(Kt=r,r=$(e,u)):(Jt=r,r=p)):(Jt=r,r=p)):(Jt=r,r=p)):(Jt=r,r=p),Zt--,r===p&&(p,0===Zt&&ce(F)),r}function pe(){var r,t,e,n,u,o,c;return Zt++,r=Jt,je()!==p?(t=Jt,J.test(h.charAt(Jt))?(e=h.charAt(Jt),Jt++):(e=p,0===Zt&&ce(K)),e!==p&&(n=je())!==p?((u=de())===p&&(u=null),u!==p&&(o=je())!==p&&(c=Se())!==p?t=e=[e,n,u,o,c]:(Jt=t,t=p)):(Jt=t,t=p),t!==p?((e=ge())===p&&(e=null),e!==p&&(n=je())!==p?(Kt=r,r=V(t,e)):(Jt=r,r=p)):(Jt=r,r=p)):(Jt=r,r=p),Zt--,r===p&&(p,0===Zt&&ce(B)),r}function de(){var r,t,e,n,u;return Zt++,r=Jt,37===h.charCodeAt(Jt)?(t=X,Jt++):(t=p,0===Zt&&ce(Z)),t!==p?(e=Jt,rr.test(h.charAt(Jt))?(n=h.charAt(Jt),Jt++):(n=p,0===Zt&&ce(tr)),n===p&&(n=null),n!==p&&(u=function(){var r,t,e;Zt++,h.substr(Jt,3)===ur?(r=ur,Jt+=3):(r=p,0===Zt&&ce(or));r===p&&(r=Jt,cr.test(h.charAt(Jt))?(t=h.charAt(Jt),Jt++):(t=p,0===Zt&&ce(ar)),t!==p?(cr.test(h.charAt(Jt))?(e=h.charAt(Jt),Jt++):(e=p,0===Zt&&ce(ar)),e===p&&(e=null),e!==p?(Kt=r,t=ir(),r=t):(Jt=r,r=p)):(Jt=r,r=p));Zt--,r===p&&(t=p,0===Zt&&ce(nr));return r}())!==p?e=n=[n,u]:(Jt=e,e=p),e!==p?(37===h.charCodeAt(Jt)?(n=X,Jt++):(n=p,0===Zt&&ce(Z)),n!==p?(Kt=r,r=t=er(e)):(Jt=r,r=p)):(Jt=r,r=p)):(Jt=r,r=p),Zt--,r===p&&(t=p,0===Zt&&ce(W)),r}function ge(){var r,t,e,n,u;return Zt++,r=Jt,35===h.charCodeAt(Jt)?(t=lr,Jt++):(t=p,0===Zt&&ce(fr)),t!==p?(e=Jt,Zt++,h.substr(Jt,3)===hr?(n=hr,Jt+=3):(n=p,0===Zt&&ce(pr)),Zt--,n===p?e=void 0:(Jt=e,e=p),e!==p&&(n=je())!==p?((u=Se())===p&&(u=null),u!==p?(Kt=r,r=t=dr(u)):(Jt=r,r=p)):(Jt=r,r=p)):(Jt=r,r=p),Zt--,r===p&&(t=p,0===Zt&&ce(sr)),r}function ve(){var r,t,e,n,u;return Zt++,r=Jt,je()!==p?(t=Jt,J.test(h.charAt(Jt))?(e=h.charAt(Jt),Jt++):(e=p,0===Zt&&ce(K)),e!==p?((n=de())===p&&(n=null),n!==p?((u=be())===p&&(u=null),u!==p?t=e=[e,n,u]:(Jt=t,t=p)):(Jt=t,t=p)):(Jt=t,t=p),t!==p&&(e=je())!==p?((n=ge())===p&&(n=null),n!==p&&(u=je())!==p?(Kt=r,r=kr(t,n)):(Jt=r,r=p)):(Jt=r,r=p)):(Jt=r,r=p),Zt--,r===p&&(p,0===Zt&&ce(Fr)),r}function be(){var r;return Zt++,(r=function(){var r,t,e,n;Zt++,r=Jt,(t=$e())!==p?(58===h.charCodeAt(Jt)?(e=Tr,Jt++):(e=p,0===Zt&&ce($r)),e!==p&&(n=$e())!==p?(Kt=r,t=Mr(t,n),r=t):(Jt=r,r=p)):(Jt=r,r=p);Zt--,r===p&&(t=p,0===Zt&&ce(Sr));return r}())===p&&(r=function(){var r,t,e,n;Zt++,r=Jt,(t=$e())!==p?(h.substr(Jt,2)===Rr?(e=Rr,Jt+=2):(e=p,0===Zt&&ce(Lr)),e!==p&&(n=$e())!==p?(Kt=r,t=Nr(t,n),r=t):(Jt=r,r=p)):(Jt=r,r=p);Zt--,r===p&&(t=p,0===Zt&&ce(jr));return r}())===p&&(r=function(){var r,t;Zt++,r=Jt,(t=$e())!==p&&(Kt=r,t=qr(t));Zt--,(r=t)===p&&(t=p,0===Zt&&ce(_r));return r}()),Zt--,r===p&&(p,0===Zt&&ce(Er)),r}function Ae(){var r,t,e,n;if(Zt++,r=Jt,h.substr(Jt,2)===Or?(t=Or,Jt+=2):(t=p,0===Zt&&ce(Pr)),t!==p){if(e=[],(n=ye())!==p)for(;n!==p;)e.push(n),n=ye();else e=p;e!==p?(h.substr(Jt,2)===Or?(n=Or,Jt+=2):(n=p,0===Zt&&ce(Pr)),n!==p?(Kt=r,r=t=Dr(e)):(Jt=r,r=p)):(Jt=r,r=p)}else Jt=r,r=p;return Zt--,r===p&&(t=p,0===Zt&&ce(Gr)),r}function me(){var r,t;return Zt++,r=Jt,(t=Se())!==p&&(Kt=r,t=Qr(t)),Zt--,(r=t)===p&&(t=p,0===Zt&&ce(Ir)),r}function Ce(){var r,t,e,n;if(Zt++,r=Jt,(t=_e())!==p){if(e=[],(n=xe())!==p)for(;n!==p;)e.push(n),n=xe();else e=p;e!==p?r=t=[t,e]:(Jt=r,r=p)}else Jt=r,r=p;return r===p&&(r=Jt,(t=_e())===p&&(t=null),t!==p&&(e=qe())!==p?r=t=[t,e]:(Jt=r,r=p)),Zt--,r===p&&(t=p,0===Zt&&ce(Ur)),r}function xe(){var r,t,e;for(Zt++,r=Jt,t=[],e=Ne();e!==p;)t.push(e),e=Ne();return t!==p&&(e=_e())!==p?r=t=[t,e]:(Jt=r,r=p),Zt--,r===p&&(t=p,0===Zt&&ce(Yr)),r}function ye(){var r,t,e;return Zt++,t=r=Jt,Zt++,h.substr(Jt,2)===Or?(e=Or,Jt+=2):(e=p,0===Zt&&ce(Pr)),Zt--,e===p?t=void 0:(Jt=t,t=p),t!==p&&(e=Ee())!==p?(Kt=r,r=t=zr(e)):(Jt=r,r=p),Zt--,r===p&&(t=p,0===Zt&&ce(Hr)),r}function we(){var r;return Zt++,(r=Ee())===p&&(r=ke())===p&&(r=Fe()),Zt--,r===p&&(p,0===Zt&&ce(Br)),r}function Fe(){var r;return Zt++,92===h.charCodeAt(Jt)?(r=st,Jt++):(r=p,0===Zt&&ce(lt)),Zt--,r===p&&(p,0===Zt&&ce(it)),r}function ke(){var r,t;return Zt++,r=Jt,Fe()!==p?((t=Fe())===p&&(58===h.charCodeAt(Jt)?(t=Tr,Jt++):(t=p,0===Zt&&ce($r)),t===p&&(126===h.charCodeAt(Jt)?(t=ht,Jt++):(t=p,0===Zt&&ce(pt)),t===p&&(61===h.charCodeAt(Jt)?(t=k,Jt++):(t=p,0===Zt&&ce(E)),t===p&&(35===h.charCodeAt(Jt)?(t=lr,Jt++):(t=p,0===Zt&&ce(fr)),t===p&&(91===h.charCodeAt(Jt)?(t=Kr,Jt++):(t=p,0===Zt&&ce(Vr)),t===p&&(93===h.charCodeAt(Jt)?(t=ot,Jt++):(t=p,0===Zt&&ce(ct)),t===p&&(123===h.charCodeAt(Jt)?(t=g,Jt++):(t=p,0===Zt&&ce(v)),t===p&&(125===h.charCodeAt(Jt)?(t=b,Jt++):(t=p,0===Zt&&ce(A)))))))))),t!==p?(Kt=r,r=dt(t)):(Jt=r,r=p)):(Jt=r,r=p),Zt--,r===p&&(p,0===Zt&&ce(ft)),r}function Ee(){var r,t,e;return Zt++,t=r=Jt,Zt++,(e=ke())===p&&(e=function(){var r;61===h.charCodeAt(Jt)?(r=k,Jt++):(r=p,0===Zt&&ce(E));r===p&&(126===h.charCodeAt(Jt)?(r=ht,Jt++):(r=p,0===Zt&&ce(pt)),r===p&&(35===h.charCodeAt(Jt)?(r=lr,Jt++):(r=p,0===Zt&&ce(fr)),r===p&&(123===h.charCodeAt(Jt)?(r=g,Jt++):(r=p,0===Zt&&ce(v)),r===p&&(125===h.charCodeAt(Jt)?(r=b,Jt++):(r=p,0===Zt&&ce(A)),r===p&&(92===h.charCodeAt(Jt)?(r=st,Jt++):(r=p,0===Zt&&ce(lt)),r===p&&(h.substr(Jt,2)===S?(r=S,Jt+=2):(r=p,0===Zt&&ce(T)),r===p&&(58===h.charCodeAt(Jt)?(r=Tr,Jt++):(r=p,0===Zt&&ce($r)))))))));return r}())===p&&(e=Ce()),Zt--,e===p?t=void 0:(Jt=t,t=p),t!==p?(h.length>Jt?(e=h.charAt(Jt),Jt++):(e=p,0===Zt&&ce(vt)),e!==p?(Kt=r,r=t=bt()):(Jt=r,r=p)):(Jt=r,r=p),Zt--,r===p&&(t=p,0===Zt&&ce(gt)),r}function Se(){var r,t,e,n,u,o,c,a;if(Zt++,Zt++,u=r=Jt,91===h.charCodeAt(Jt)?(o=Kr,Jt++):(o=p,0===Zt&&ce(Vr)),o!==p?(h.substr(Jt,4)===Wr?(c=Wr,Jt+=4):(c=p,0===Zt&&ce(Xr)),c===p&&(h.substr(Jt,8)===Zr?(c=Zr,Jt+=8):(c=p,0===Zt&&ce(rt)),c===p&&(h.substr(Jt,5)===tt?(c=tt,Jt+=5):(c=p,0===Zt&&ce(et)),c===p&&(h.substr(Jt,6)===nt?(c=nt,Jt+=6):(c=p,0===Zt&&ce(ut))))),c!==p?(93===h.charCodeAt(Jt)?(a=ot,Jt++):(a=p,0===Zt&&ce(ct)),a!==p?(Kt=u,u=o=at(c)):(Jt=u,u=p)):(Jt=u,u=p)):(Jt=u,u=p),Zt--,u===p&&(o=p,0===Zt&&ce(Jr)),(t=u)===p&&(t=null),t!==p)if(je()!==p){if(e=[],(n=we())!==p)for(;n!==p;)e.push(n),n=we();else e=p;e!==p?(Kt=r,r=t=mt(t,e)):(Jt=r,r=p)}else Jt=r,r=p;else Jt=r,r=p;return Zt--,r===p&&(t=p,0===Zt&&ce(At)),r}function Te(){var r,t,e;if(Zt++,r=Jt,t=[],(e=we())!==p)for(;e!==p;)t.push(e),e=we();else t=p;return t!==p&&(Kt=r,t=xt(t)),Zt--,(r=t)===p&&(t=p,0===Zt&&ce(Ct)),r}function $e(){var r,t,e;if(r=Jt,t=[],cr.test(h.charAt(Jt))?(e=h.charAt(Jt),Jt++):(e=p,0===Zt&&ce(ar)),e!==p)for(;e!==p;)t.push(e),cr.test(h.charAt(Jt))?(e=h.charAt(Jt),Jt++):(e=p,0===Zt&&ce(ar));else t=p;return t!==p?((e=function(){var r,t,e,n,u;r=Jt,46===h.charCodeAt(Jt)?(t=wt,Jt++):(t=p,0===Zt&&ce(Ft));if(t!==p)if(e=Jt,Zt++,46===h.charCodeAt(Jt)?(n=wt,Jt++):(n=p,0===Zt&&ce(Ft)),Zt--,n===p?e=void 0:(Jt=e,e=p),e!==p){for(n=[],cr.test(h.charAt(Jt))?(u=h.charAt(Jt),Jt++):(u=p,0===Zt&&ce(ar));u!==p;)n.push(u),cr.test(h.charAt(Jt))?(u=h.charAt(Jt),Jt++):(u=p,0===Zt&&ce(ar));n!==p?(Kt=r,t=kt(n),r=t):(Jt=r,r=p)}else Jt=r,r=p;else Jt=r,r=p;return r}())===p&&(e=null),e!==p?(Kt=r,r=t=yt(t,e)):(Jt=r,r=p)):(Jt=r,r=p),r}function Me(){var r,t,e;return r=Jt,h.substr(Jt,4)===Et?(t=Et,Jt+=4):(t=p,0===Zt&&ce(St)),t!==p&&je()!==p&&(e=Se())!==p&&je()!==p?(Kt=r,r=t=Tt(e)):(Jt=r,r=p),r}function je(){var r,t,e,n,u;for(Zt++,r=[],(t=Ne())===p&&(t=Jt,(e=_e())!==p?(n=Jt,Zt++,u=xe(),Zt--,u===p?n=void 0:(Jt=n,n=p),n!==p?t=e=[e,n]:(Jt=t,t=p)):(Jt=t,t=p));t!==p;)r.push(t),(t=Ne())===p&&(t=Jt,(e=_e())!==p?(n=Jt,Zt++,u=xe(),Zt--,u===p?n=void 0:(Jt=n,n=p),n!==p?t=e=[e,n]:(Jt=t,t=p)):(Jt=t,t=p));return Zt--,r===p&&(t=p,0===Zt&&ce($t)),r}function Re(){var r,t;for(Zt++,r=[],(t=Le())===p&&(t=_e())===p&&(t=Ne());t!==p;)r.push(t),(t=Le())===p&&(t=_e())===p&&(t=Ne());return Zt--,r===p&&(t=p,0===Zt&&ce(Mt)),r}function Le(){var r,t,e,n,u,o;if(Zt++,r=Jt,h.substr(Jt,2)===Rt?(t=Rt,Jt+=2):(t=p,0===Zt&&ce(Lt)),t!==p){for(e=[],u=n=Jt,Zt++,o=_e(),Zt--,o===p?u=void 0:(Jt=u,u=p),u!==p?(h.length>Jt?(o=h.charAt(Jt),Jt++):(o=p,0===Zt&&ce(vt)),o!==p?n=u=[u,o]:(Jt=n,n=p)):(Jt=n,n=p);n!==p;)e.push(n),u=n=Jt,Zt++,o=_e(),Zt--,o===p?u=void 0:(Jt=u,u=p),u!==p?(h.length>Jt?(o=h.charAt(Jt),Jt++):(o=p,0===Zt&&ce(vt)),o!==p?n=u=[u,o]:(Jt=n,n=p)):(Jt=n,n=p);e!==p?(n=Jt,Zt++,(u=_e())===p&&(u=qe()),Zt--,u!==p?(Jt=n,n=void 0):n=p,n!==p?(Kt=r,r=t=Nt()):(Jt=r,r=p)):(Jt=r,r=p)}else Jt=r,r=p;return Zt--,r===p&&(t=p,0===Zt&&ce(jt)),r}function Ne(){var r;return Zt++,32===h.charCodeAt(Jt)?(r=qt,Jt++):(r=p,0===Zt&&ce(Gt)),r===p&&(9===h.charCodeAt(Jt)?(r=Ot,Jt++):(r=p,0===Zt&&ce(Pt))),Zt--,r===p&&(p,0===Zt&&ce(_t)),r}function _e(){var r;return Zt++,h.substr(Jt,2)===It?(r=It,Jt+=2):(r=p,0===Zt&&ce(Qt)),r===p&&(10===h.charCodeAt(Jt)?(r=Ut,Jt++):(r=p,0===Zt&&ce(Yt)),r===p&&(13===h.charCodeAt(Jt)?(r=Ht,Jt++):(r=p,0===Zt&&ce(zt)))),Zt--,r===p&&(p,0===Zt&&ce(Dt)),r}function qe(){var r,t,e;return t=r=Jt,Zt++,h.length>Jt?(e=h.charAt(Jt),Jt++):(e=p,0===Zt&&ce(vt)),Zt--,e===p?t=void 0:(Jt=t,t=p),t!==p&&(Kt=r,t=Bt()),r=t}var Ge="moodle",Oe=Ge;function Pe(r){return(r=r.replace(/[\n\r]/g," ")).replace(/\s\s+/g," ")}function De(){return Oe}function Ie(){Oe=Ge}if((t=n())!==p&&Jt===h.length)return t;throw t!==p&&Jt<h.length&&ce({type:"end"}),ae(Xt,Wt<h.length?h.charAt(Wt):null,Wt<h.length?oe(Wt,Wt+1):oe(Wt,Wt))}peg$subclass(peg$SyntaxError,Error),peg$SyntaxError.buildMessage=function(r,t){var e,o={literal:function(r){return'"'+u(r.text)+'"'},class:function(r){var t,e="";for(t=0;t<r.parts.length;t++)e+=r.parts[t]instanceof Array?c(r.parts[t][0])+"-"+c(r.parts[t][1]):c(r.parts[t]);return"["+(r.inverted?"^":"")+e+"]"},any:function(r){return"any character"},end:function(r){return"end of input"},other:function(r){return r.description}};function n(r){return r.charCodeAt(0).toString(16).toUpperCase()}function u(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(r){return"\\x0"+n(r)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(r){return"\\x"+n(r)})}function c(r){return r.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(r){return"\\x0"+n(r)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(r){return"\\x"+n(r)})}return"Expected "+function(r){var t,e,n,u=new Array(r.length);for(t=0;t<r.length;t++)u[t]=(n=r[t],o[n.type](n));if(u.sort(),0<u.length){for(e=t=1;t<u.length;t++)u[t-1]!==u[t]&&(u[e]=u[t],e++);u.length=e}switch(u.length){case 1:return u[0];case 2:return u[0]+" or "+u[1];default:return u.slice(0,-1).join(", ")+", or "+u[u.length-1]}}(r)+" but "+((e=t)?'"'+u(e)+'"':"end of input")+" found."},module.exports={SyntaxError:peg$SyntaxError,parse:peg$parse};
