(window.MIP=window.MIP||[]).push({name:"mip-huimee",func:function(){define("mip-huimee/mip-huimee",["require","customElement"],function(t){var e=t("customElement").create();return e.prototype.build=function(){var t=document.createElement("script");t.type="text/javascript",t.src="https://tt.huimee.net/huimee_ads.js",t.async="true";var e=document.getElementsByTagName("head")[0];if(e)e.insertBefore(t,e.firstChild)},e}),define("mip-huimee",["mip-huimee/mip-huimee"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-huimee",e)}if(window.MIP)require(["mip-huimee"],function(e){t(window.MIP,e)});else require(["mip","mip-huimee"],t)}()}});