(window.MIP=window.MIP||[]).push({name:"mip-wkfun",func:function(){define("mip-wkfun/mip-wkfun",["require","zepto","customElement"],function(t){var e=t("zepto"),i=t("customElement").create(),n=function(){function t(t){function e(e){localStorage.longitude=r=e.coords.longitude,localStorage.latitude=s=e.coords.latitude,t(r,s)}function i(t){n=new Image,n.src="https://stat-z.xywy.com/test.png?t_c=3&tt"+Math.random()}var o,r=0,s=0;if(o={enableHighAccuracy:!0,maximumAge:1e4},"function"!=typeof t)return!1;if(localStorage.longitude&&localStorage.latitude)return t(localStorage.longitude,localStorage.latitude),!1;if(navigator.geolocation)navigator.geolocation.getCurrentPosition(e,i,o)}var i="帮您寻医问药";e("#item_so_keyword").on({focus:function(){if(e(this).val()==i)e(this).val(""),e(this).css("color","#666")},blur:function(){if(""==e(this).val())e(this).val(i),e(this).css("color","#c6c6c6")}}),e(".item-hd-so-input-box").on("click",function(){e(".item-hd-so-area").addClass("item-hd-so-focus")}),e(".item-hd-so-back").on("click",function(){e(".item-hd-so-area").removeClass("item-hd-so-focus"),e("#item_so_keyword").val(i).css("color","#c6c6c6")}),e("#item_hd_form form").on("submit",function(){var t=e.trim(e("#item_so_keyword").val()),i=e("#item_so_keyword").attr("src_type");if("帮您寻医问药"==t)t="";else t=t;e(this).attr("method","post").attr("action","http://m.so.xywy.com/comse.php?src="+i+"&keyword="+encodeURIComponent(t))}),e(".login-bar").click(function(){e(this).toggleClass("lonsg"),e(".Extension").toggle()}),window.Quan_X=0,window.Quan_Y=0;var n=new Image;if(n.src="https://stat-z.xywy.com/test.png?t_c=1&tt"+Math.random(),navigator.userAgent.indexOf("UCBrowser")>-1)return!1;else t(function(t,e){n=new Image,n.src="https://stat-z.xywy.com/test.png?t_c=2&tt"+Math.random(),Quan_X=t,Quan_Y=e})};return i.prototype.build=function(){this.element;n()},i}),define("mip-wkfun",["mip-wkfun/mip-wkfun"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-wkfun",e)}if(window.MIP)require(["mip-wkfun"],function(e){t(window.MIP,e)});else require(["mip","mip-wkfun"],t)}()}});