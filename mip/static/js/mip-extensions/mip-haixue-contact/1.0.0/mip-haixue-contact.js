(window.MIP=window.MIP||[]).push({name:"mip-haixue-contact",func:function(){define("mip-haixue-contact/mip-haixue-contact",["require","customElement"],function(t){function e(t){var e=document.getElementsByTagName("head").item(0),i=document.createElement("script");i.type="text/javascript",i.src=t,e.appendChild(i)}var i;e("https://dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9778");var n=t("customElement").create();return n.prototype.build=function(){function t(t){e(),i.im_openInPageChat(t)}function e(){i=window.NTKF||{};var t,e,n,r,o,s;o=window.location.href;var a=null;if(a)t=a.split(",")[0];if(e="YJ_bjh",n="C7522C73-FC40-0001-A872-14C016BD5770",s=i?i.global.pcid:"",r="",t)r=r+"quot;customerIdquot;:quot;"+t+"quot;,";if(n)r=r+"quot;cookieIdquot;:quot;"+n+"quot;,";if(e)r=r+"quot;webFromquot;:quot;"+e+"quot;,";if(o)r=r+"quot;viewUrlquot;:quot;"+o+"quot;,";if(s)r=r+"quot;ntkfClientIdquot;:quot;"+s+"quot;,";if(t)i.im_updatePageInfo({uid:t,erpparam:r});else i.im_updatePageInfo({uid:"",erpparam:r})}var n=this,r=n.element,o=r.getAttribute("siteid"),s=r.getAttribute("kfid");s=s?s:"kf_9778_1481685802962";var a={siteid:o||"kf_9778",settingid:s,uid:"",uname:""};!function(t){function e(t){if(void 0===typeof console){if(void 0!==typeof console.error)console.error(t);if(void 0!==typeof console.info)console.info(t)}}function i(t){var i=!1;for(var n in t)try{if("function"==typeof t[n])t[n]=null}catch(t){e("clear element function")}if(t.parentNode)try{t.parentNode.removeChild(t),i=!0}catch(t){}if(!i){var r=document.createElement("DIV");if(r.appendChild(t),r.innerHTML="",r.parentNode)try{r.parentNode.removeChild(r),i=!0}catch(t){}}return i}var n,r,o,s;if(void 0===a)return e("ERROR: NTKF_PARAM is not defined"),!1;if(!a.siteid)return e("ERROR: NTKF_PARAM.siteid is not defined"),!1;s=document.getElementsByTagName("script");for(var l=0;l<s.length;l++)if(s[l].src&&/(ntkfstat|ntkf|nt)\.js/gi.test(s[l].src)){o=s[l].src.substr(0,s[l].src.lastIndexOf("/")),i(s[l]);break}if(!o)return e("ERROR: script server url get failure."),!1;n=document.getElementsByTagName("head")[0],r=document.createElement("script"),r.type="text/javascript",r.async="async",r.charset="utf-8",r.src=o+"/ntkfstat.js?siteid="+a.siteid,n.insertBefore(r,n.lastChild)}(window),$(r).on("click",".mip-contact",function(){t(s)})},n}),define("mip-haixue-contact",["mip-haixue-contact/mip-haixue-contact"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-haixue-contact",e)}if(window.MIP)require(["mip-haixue-contact"],function(e){t(window.MIP,e)});else require(["mip","mip-haixue-contact"],t)}()}});