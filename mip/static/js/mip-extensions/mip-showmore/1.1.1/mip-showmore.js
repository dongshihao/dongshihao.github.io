(window.MIP=window.MIP||[]).push({name:"mip-showmore",func:function(){define("mip-showmore/mip-showmore",["require","customElement","util","viewport"],function(t){function e(t){var e,i=t.ele,n=t.type,o=r||[];if(n&&i){if(void 0===t.transitionTime||isNaN(t.transitionTime))e=.24;else e=Math.min(parseFloat(t.transitionTime),1);var s,a=void 0!==t.oriHeight?t.oriHeight:getComputedStyle(i).height,l=t.cbFun||function(){};if("unfold"===n){if(void 0!==t.tarHeight)s=t.tarHeight;else i.style.transition="height 0s",i.style.height="auto",s=getComputedStyle(i).height;var c=setTimeout(function(){i.style.transition="height 0s",i.style.height="auto"},1e3*e);o[0]=c}else if("fold"===n)s=t.tarHeight||0;i.style.height=a;var u=setTimeout(function(){i.style.transition="height "+e+"s",i.style.height=s},10),d=setTimeout(function(){l()},1e3*e);o[1]=u,o[2]=d}}var i=t("customElement").create(),n=t("util"),o=t("viewport"),r=[],s=function(t){if(this.ele=t,this.clickBtn=t.querySelector("[showmorebtn]"),this.showBox=this.ele.querySelector("[showmorebox]"),this.animateTime=this.ele.getAttribute("animatetime")||0,this.heightType=["HEIGHTSCREEN","HEIGHT","LENGTH"],!this.showBox)this.showBox=this.ele};return s.prototype.init=function(){if(!isNaN(this.animateTime)){if(this.maxHeight=this.ele.getAttribute("maxheight"),this.maxLen=this.ele.getAttribute("maxlen"),this.bottomShadow="1"===this.ele.getAttribute("bottomshadow"),this.bottomShadowClassName="linear-gradient",this.maxHeight&&isNaN(this.maxHeight)){var t,e,i=this.maxHeight.split(":");if(i.length>1)switch(t=i[0].trim(),e=i[1].trim(),t){case"screen":this.showType=this.heightType[0],this.maxHeight=o.getHeight()*e,this._initHeight();break;case"heightpx":this.showType=this.heightType[1],this._initHeight()}}else if(this.maxHeight&&!isNaN(this.maxHeight))this.showType=this.heightType[1],this._initHeight();else if(this.maxLen&&!isNaN(this.maxLen))this.showType=this.heightType[2],this._maxLenFn();else this.maxHeight=0,this._initHeight();this._bindClick(),n.css(this.ele,{visibility:"visible"})}},s.prototype._initHeight=function(){if(this.showBoxHei=n.rect.getElementOffset(this.showBox).height,this.showBoxHei>this.maxHeight){n.css(this.showBox,{height:this.maxHeight+"px",overflow:"hidden"});var t=this.ele.querySelector(".mip-showmore-btnshow");n.css(t,{display:"block"}),this.bottomShadow&&this.showBox.classList.add(this.bottomShadowClassName)}},s.prototype._maxLenFn=function(){if(this.originalHtml=this.showBox.innerHTML,this.cutOffText=this._cutHtmlStr(this.maxLen),this.originalHtml.length!==this.cutOffText.length){var t=this.ele.querySelector(".mip-showmore-btnshow");n.css(t,{display:"block"}),this.bottomShadow&&this.showBox.classList.add(this.bottomShadowClassName),this.cutOffText="<p class='mip-showmore-abstract'>"+this.cutOffText+"...</p>",this.showBox.innerHTML=this.cutOffText}},s.prototype._bindClick=function(){if(this.clickBtn){var t=this;this.clickBtn.addEventListener("click",function(e){t.toggle.apply(t)})}},s.prototype.toggle=function(t){var i=this.ele.classList,n=t?t.target:null,o={};if(o.aniTime=this.animateTime||.3,this.showType===this.heightType[2])if(o.oriHeight=getComputedStyle(this.showBox).height,i.contains("mip-showmore-boxshow"))this.showBox.innerHTML=this.cutOffText,o.tarHeight=getComputedStyle(this.showBox).height,this.showBox.innerHTML=this.originalHtml,this.bottomShadow&&this.showBox.classList.add(this.bottomShadowClassName),o.type="fold",o.cbFun=function(t){t.showBox.innerHTML=t.cutOffText,t._toggleClickBtn(n,"showOpen"),i.remove("mip-showmore-boxshow")}.bind(void 0,this);else this.bottomShadow&&this.showBox.classList.remove(this.bottomShadowClassName),i.add("mip-showmore-boxshow"),this.showBox.innerHTML=this.originalHtml,o.type="unfold",o.cbFun=function(t){t._toggleClickBtn(n,"showClose")}.bind(void 0,this);else if(this.showType===this.heightType[1]||this.showType===this.heightType[0])if(i.contains("mip-showmore-boxshow"))this.bottomShadow&&this.showBox.classList.add(this.bottomShadowClassName),i.remove("mip-showmore-boxshow"),o.type="fold",o.tarHeight=this.maxHeight+"px",o.cbFun=function(t,e){t._toggleClickBtn(e,"showOpen")}.bind(void 0,this,n);else this.bottomShadow&&this.showBox.classList.remove(this.bottomShadowClassName),i.add("mip-showmore-boxshow"),o.type="unfold",o.cbFun=function(t,e){t._toggleClickBtn(e,"showClose")}.bind(void 0,this,n);e({ele:this.showBox,type:o.type,transitionTime:o.aniTime,tarHeight:o.tarHeight,oriHeight:o.oriHeight,cbFun:o.cbFun})},s.prototype._toggleClickBtn=function(t,e){if(e)if("showOpen"===e){if(t)t.innerText=t.dataset.opentext;this._changeBtnText({display:"block"},{display:"none"})}else{if(t){var i=t.innerText;t.innerText=t.dataset.closetext||"收起",t.dataset.opentext=i}this._changeBtnText({display:"none"},{display:"block"})}},s.prototype._cutHtmlStr=function(t){for(var e=this.showBox.childNodes,i="",n=0,o=[],r=0;r<e.length;r++){var s=e[r].textContent.replace(/(^\s*)|(\s*$)/g,"");if(i.length+s.length<=t)i+=s,n=i.length,o.push(e[r]);else{var a=t-n>0?t-n:n-t,l=s?s.slice(0,a):"";e[r].textContent=l,o.push(e[r]);break}}for(var c="",u=0;u<o.length;u++){var d=o[u].nodeType;if(1===d)c+=o[u].outerHTML;else if(3===d)c+=o[u].textContent}return c},s.prototype._changeBtnText=function(t,e){var i=this.ele.querySelector(".mip-showmore-btnshow"),n=this.ele.querySelector(".mip-showmore-btnhide");this._changeBtnShow(i,t),this._changeBtnShow(n,e)},s.prototype._changeBtnShow=function(t,e){n.css(t,e)},i.prototype.build=function(){var t=this.element,e=new s(t);e.init(),this.addEventAction("toggle",function(t){e.toggle(t)})},i.prototype.detachedCallback=function(){for(var t=0;t<r.length;t++)window.clearTimeout(r[t])},i}),define("mip-showmore",["mip-showmore/mip-showmore"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-showmore",e,'mip-showmore{visibility:hidden;overflow:hidden;transform:translateZ(0)}mip-showmore .mip-showmore-originalhtml,mip-showmore .mip-showmore-btnhide,mip-showmore .mip-showmore-btnshow{display:none}mip-showmore.linear-gradient:after{content:"";position:absolute;bottom:0;display:block;width:100%;height:90px;background:-moz-linear-gradient(to bottom, rgba(255,255,255,0), #fff);background:-webkit-linear-gradient(to bottom, rgba(255,255,255,0), #fff);background:linear-gradient(to bottom, rgba(255,255,255,0), #fff)}mip-showmore [showmorebox]{overflow:hidden}.mip-showmore-btn{display:inline-block;padding:15px;border:1px solid #ddd;background:#fafafa}.mip-showmore-btn:hover,.mip-showmore-btn:active{background:#f0f0f0}')}if(window.MIP)require(["mip-showmore"],function(e){t(window.MIP,e)});else require(["mip","mip-showmore"],t)}()}});