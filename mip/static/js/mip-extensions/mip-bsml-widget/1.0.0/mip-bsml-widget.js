(window.MIP=window.MIP||[]).push({name:"mip-bsml-widget",func:function(){define("mip-bsml-widget/mip-bsml-widget",["require","zepto","customElement"],function(t){function i(){if(window.bsmlChannel)return window.bsmlChannel;window.bsmlChannel="";var t=location.search.replace("?","").split("&");return n.each(t,function(t,i){var e=i.split("=");if("channel_id"===e[0])return window.bsmlChannel=e[1],!1}),window.bsmlChannel}function e(){if(window.bsmlCuid)return window.bsmlCuid;else return window.bsmlCuid="",window.bsmlCuid}function s(t){if(t){var s=this.element;try{t=JSON.parse(t);var o=n("#pageinfo"),a={action_id:t.action_id?t.action_id:"site_comp_click",action_name:t.action_name?t.action_name:"普通组件点击",guid:o.attr("guid"),site_id:o.attr("siteid"),channel_id:i(),time_stamp:Math.round((new Date).getTime()/1e3),page_name:o.attr("pagename"),page_type:o.attr("pagetype"),refer:document.referrer,url:location.href,cuid:e(),extra:{}};if("site_bar_click"===a.action_id)a.extra.type=t.type;else if("site_comp_click"===a.action_id)a.extra={comp_name:n(s).attr("name"),comp_type:n(s).attr("type")};a.extra=JSON.stringify(a.extra);var l=r+"?"+n.param(a);(new Image).src=l}catch(t){}}}var n=t("zepto"),o=t("customElement").create(),r="https://jianzhan.baidu.com/v.gif";return o.prototype.build=function(){var t=this.element,i=this;if(n(t).on("click","[data-click]",function(){s.call(i,n(this).attr("data-click"))}),!window.bsmlLog){window.bsmlLog=1;s.call(i,'{"action_id":"site_page_show","action_name":"页面渲染"}')}},o}),define("mip-bsml-widget",["mip-bsml-widget/mip-bsml-widget"],function(t){return t}),function(){function t(t,i){t.registerMipElement("mip-bsml-widget",i)}if(window.MIP)require(["mip-bsml-widget"],function(i){t(window.MIP,i)});else require(["mip","mip-bsml-widget"],t)}()}});