(window.MIP=window.MIP||[]).push({name:"mip-ad-video",func:function(){define("mip-ad-video/mip-ad-video",["require","zepto","util","customElement"],function(e){var t=e("zepto"),i=e("util"),n=i.platform,r=e("customElement").create();return r.prototype.build=function(){var e=t(this.element),i=e.attr("ad-src"),r=e.attr("ad-src-end"),o=e.attr("target-src"),a=e.attr("poster"),s=document.createElement("div");s.innerHTML="广告",s.className="ad-tip";var c=document.createElement("video");if(t(c).attr({playsinline:"","webkit-playsinline":"",controls:"",poster:a,preload:"no"}),t(c).css("height",window.innerWidth/16*9+"px"),e[0].appendChild(c),c.onplay=function(){c.autoplay=!0},i&&(!n.isIos()||!n.isQQ()))c.src=i,e[0].appendChild(s),c.onended=function(){if(c.src===o&&r)s.style.display="block",c.src=r;else s.style.display="none",c.src=o;c.autoplay=!0,c.setAttribute("autoplay","autoplay"),c.play()};else c.src=o},r}),define("mip-ad-video",["mip-ad-video/mip-ad-video"],function(e){return e}),function(){function e(e,t){e.registerMipElement("mip-ad-video",t,"mip-ad-video{width:100%;position:relative}mip-ad-video video{width:100%;height:200px;display:block;background-color:#000}mip-ad-video .ad-tip{width:66px;text-align:center;position:absolute;right:0;top:0;color:#bbb;line-height:2em;background:rgba(0,0,0,0.4)}")}if(window.MIP)require(["mip-ad-video"],function(t){e(window.MIP,t)});else require(["mip","mip-ad-video"],e)}()}});