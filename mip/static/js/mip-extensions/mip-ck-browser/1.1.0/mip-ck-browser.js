(window.MIP=window.MIP||[]).push({name:"mip-ck-browser",func:function(){define("mip-ck-browser/ck-browser",[],function(){var t=window.navigator.userAgent,i={};return i.UC=function(){return/UCBrowser/i.test(t)}(),i.QQ=function(){return/MQQBrowser/i.test(t)}(),i.QQ=function(){return/QQ/i.test(t)}(),i.Safari=function(){return/Safari/i.test(t)}(),i.browser=function(t){var i;switch(!0){case t.UC:i="UC";break;case t.QQ:i="QQ";break;case t.Safari:i="Safari";break;default:i=""}return i}(i),i}),define("mip-ck-browser/mip-ck-browser",["require","customElement","./ck-browser","zepto"],function(t){function i(t,i){var e=i.length,n=0,o="",a=t.getAttribute("converse"),l=i.join("-"),c="";if(null!==a)c="-converse";for(n;n<e;n++){o=i[n].toLocaleUpperCase();var h=!1;if(null===a){if(o===s){h=!0;break}}else if(o===s){h=!1;break}else h=!0}if(h)t.style.display="block",r.addClass("v-mip-ck-browser-"+l+c);else t.parentNode.removeChild(t)}var e=t("customElement").create(),n=t("./ck-browser"),s=n.browser,o=t("zepto"),r=o("body");return e.prototype.build=function(){var t=this,e=t.element.getAttribute("browser")||"",n=e.split(",")||[];i(t.element,n)},e}),define("mip-ck-browser",["mip-ck-browser/mip-ck-browser"],function(t){return t}),function(){function t(t,i){t.registerMipElement("mip-ck-browser",i)}if(window.MIP)require(["mip-ck-browser"],function(i){t(window.MIP,i)});else require(["mip","mip-ck-browser"],t)}()}});