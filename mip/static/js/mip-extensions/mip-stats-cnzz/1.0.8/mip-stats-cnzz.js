(window.MIP=window.MIP||[]).push({name:"mip-stats-cnzz",func:function(){define("mip-stats-cnzz/mip-stats-cnzz",["require","zepto","customElement"],function(t){function e(){for(var t=document.querySelectorAll("*[data-stats-cnzz-obj]"),e=0;e<t.length;e++){var o=t[e].getAttribute("data-stats-cnzz-obj");if(!o)return;try{o=JSON.parse(decodeURIComponent(o))}catch(t){return void console.warn("事件追踪data-stats-cnzz-obj数据不正确")}var r=o.type;if(!o.data)return;var s=i(o.data);if("click"!==r&&"mouseup"!==r&&"load"!==r)return;if(n(t[e]).hasClass("mip-stats-eventload"))return;if(n(t[e]).addClass("mip-stats-eventload"),"load"===r)_czc.push(s);else t[e].addEventListener(r,function(t){var e=this.getAttribute("data-stats-cnzz-obj");if(e){var n;try{n=JSON.parse(decodeURIComponent(e))}catch(t){return void console.warn("事件追踪data-stats-cnzz-obj数据不正确")}if(n.data){var o=i(n.data);_czc.push(o)}}},!1)}}function i(t){if(t){for(var e=t.slice(1,t.length-1).split(","),i=[],n=0;n<e.length;n++){var o=e[n].replace(/(^\s*)|(\s*$)/g,"").replace(/\'/g,"");if("false"===o||"true"===o)o=Boolean(o);i.push(o)}return i}}var n=t("zepto"),o=t("customElement").create();return o.prototype.build=function(){var t=this.element,o=n(t),r=t.getAttribute("token"),s=t.getAttribute("setconfig");if(r){if(window._czc=window._czc||[],_czc.push(["_setAccount",r]),s){var a=i(decodeURIComponent(s));_czc.push(a)}var l=document.createElement("script"),c="https://s11.cnzz.com/z_stat.php?id="+r+"&web_id="+r;l.setAttribute("language","JavaScript"),l.src=c,o.append(n(l)),e()}},o}),define("mip-stats-cnzz",["mip-stats-cnzz/mip-stats-cnzz"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-stats-cnzz",e)}if(window.MIP)require(["mip-stats-cnzz"],function(e){t(window.MIP,e)});else require(["mip","mip-stats-cnzz"],t)}()}});