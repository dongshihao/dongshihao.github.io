(window.MIP=window.MIP||[]).push({name:"mip-askad",func:function(){define("mip-askad/mip-askad",["require","jquery","util","customElement"],function(e){function t(){var e=this.element;if(!e.isRender){e.isRender=!0;var t=e,r=e.getAttribute("type")||"yw-other",o={};o.ID=e.getAttribute("paramsid")||"",o.classparams=e.getAttribute("classparams")||"",o.otherparamkey=e.getAttribute("otherparamkey")||"0",o.otherparamvalue=e.getAttribute("otherparamvalue")||"",o.callbackconfig=e.getAttribute("cboptions")||[],o.callbacknboptions=e.getAttribute("nboptions")||[];var a=[];if(o.callbackconfig)try{a=new Function("return "+o.callbackconfig)()}catch(e){}var s=[];if(o.callbacknboptions)try{s=new Function("return "+o.callbacknboptions)()}catch(e){}var c=d(".g-under-ask h1"),l=d(".g-under-ask .crazy_keyword_inlink");if(0==c.length||0==l.length)var p="";else var p=c.html()+" "+l.html().slice(0,30);i(p,function(){n(r,o,a,t,s)})}}function i(e,t){if(f)t();else if(m)h.push(t);else{m=!0;for(var i=(new Date).valueOf(),n=d("#top_ad").attr("cid"),r=["//ip.120ask.com/lt?js=m.120ask.com&r="+i+"&cid="+n,"//scws.120ask.com/scws?t=js&content="+e+"&r="+i,"//m.120ask.com/pub/js/x_m_none_jquery.js?r="+i],o=3,a=0;a<r.length;a++){var s=document.createElement("script");s.src=r[a];var c=document.head.firstChild;document.head.insertBefore(s,c),s.onload=function(){if(1==o){f=!0;for(var e=0;e<h.length;e++)h[e]()}if(0===(o-=1))setTimeout(function(){if(_RET_IP&&0===_RET_IP.status&&_RET_IP.message&&_RET_IP.message[0]&&_RET_IP.message[0].ip&&_RET_IP.message[0].id)t();else{var e=new Image,i="//m.120ask.com/jhg.php?from=baidu&time="+(new Date).getTime()+"&msg="+encodeURIComponent(location.href);e.src=i}},20)}}}}function n(e,t,i,n,o){switch(YWBD.prototype.YWBD_WRITE=function(e,t,i,n){var o=e.code;if(p.fn.isCacheUrl(location.href))o=o.replace(/http:\/\/cdn.120askimages.com/g,"/i/cdn.120askimages.com");if(t.append(o),i&&0!=i.length)r(i)},YWBD.prototype.YWBD_NONE=function(e){if(e&&0!=e.length)r(e)},l=new YWBD,l.YWBD_SET_PARAMS("Id",t.ID),e){case"yw-class":l.YWBD_SET_CLASS_PARAMS(t.classparams.toString());break;case"yw-keyword":l.YWBD_SET_KEYWORD_PARAMS();break;default:l.YWBD_SET_OTHER_PARAM(Number(t.otherparamkey),t.otherparamvalue.toString())}l.YWBD_SET_AREA_PARAMS(),l.YWBD_SET_LOG(),l.YWBD_AD_AJAX(d(n),i,o)}function r(e){var t=0;for(t=0;t<e.length;t++)if("show"==e[t].type)s(e[t].target);else if("hide"==e[t].type)c(e[t].target);else if("remove"==e[t].type)a(e[t].target);else if("removead"==e[t].type)o(e[t].target)}function o(e){if(e){for(var t,i=document.querySelectorAll("iframe"),n=i.length,r=0;r<n;r++)if(i[r].id.indexOf(e)>-1)t=i[r];if(t)for(var o=t.parentNode;;){if("fixed"===o.style.position){o.outerHTML="";break}var o=o.parentNode;if("BODY"===o.tagName.toUpperCase())break}}}function a(e){d(e).remove()}function s(e){d(e).show()}function c(e){d(e).hide()}var l,d=e("jquery"),p=e("util"),u=e("customElement").create(),f=!1,m=!1,h=[];return u.prototype.build=t,u}),define("mip-askad",["mip-askad/mip-askad"],function(e){return e}),function(){function e(e,t){e.registerMipElement("mip-askad",t)}if(window.MIP)require(["mip-askad"],function(t){e(window.MIP,t)});else require(["mip","mip-askad"],e)}()}});