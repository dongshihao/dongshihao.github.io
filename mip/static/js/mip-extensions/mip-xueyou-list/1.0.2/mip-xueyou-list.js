(window.MIP=window.MIP||[]).push({name:"mip-xueyou-list",func:function(){define("mip-xueyou-list/mip-xueyou-list",["require","zepto","customElement"],function(t){var e=t("zepto"),i=t("customElement").create();return i.prototype.build=function(){e(".openself").attr("target","_self");var t=e("#more"),i=e(".spinner"),n=e("#listbox"),o=n.data("cid"),r=n.data("url");t.on("click",function(){var s=e("#listbox li").last().data("id");t.hide(),i.show(),e.get(r,{id:s,cid:o},function(e){n.append(e),t.show(),i.hide()})})},i}),define("mip-xueyou-list",["mip-xueyou-list/mip-xueyou-list"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-xueyou-list",e)}if(window.MIP)require(["mip-xueyou-list"],function(e){t(window.MIP,e)});else require(["mip","mip-xueyou-list"],t)}()}});