(window.MIP=window.MIP||[]).push({name:"mip-hk-share",func:function(){define("mip-hk-share/mip-hk-share",["require","zepto","customElement"],function(require){function build(){var t=this.element,e=getConfig();$(t).find("#J_detail_share").click(function(){$(this).find(".J_share").show()}),$(t).find("#J_detail_share").bind("touchstart",function(t){t.stopPropagation()}),$("body").bind("touchstart",function(){$(t).find(".J_share").hide()}),$(t).find("#J_share_close").click(function(e){$(t).find(".J_share").hide(),e.stopPropagation()}),$(t).find(".J_share a").bind("click",function(){var t=$(this).data("type"),i={url:encodeURIComponent(window.location.href),title:e.shareTitle,content:e.shareTitle,picurl:e.sharePic};if("wb"===t){var n="http://service.weibo.com/share/share.php?language=zh_cn&title="+i.title;n+="&url="+i.url+"&content=utf-8&sourceUrl="+i.url+"&pic="+i.picurl,(new Image).src=e.tj+"share&t="+(new Date).getTime()}if("qq"===t){var n="http://qzs.qzone.qq.com/open/connect/widget/mobile/qzshare/index.html?title="+i.title;n+="&summary="+i.content+"&url="+i.url+"&imageUrl="+i.picurl,n+="&loginpage=loginindex.html&logintype=qzone&page=qzshare.html",(new Image).src=e.tj+"share&t="+(new Date).getTime()}return window.location.href=n,!1})}function getConfig(){var defOpt={shareTitle:"百度好看-发现我的好看",shareContent:"百度好看-发现我的好看",sharePic:encodeURIComponent("http://s0.haokan.bdimg.com/static/haokan/h5/img/ios-180_15c58b9.png"),tj:"/tj.gif?page=er_detail_news&pos="},strOpt=$("#J_config").html();if(strOpt)try{return eval("("+strOpt+")")}catch(t){return defOpt}else return defOpt}var $=require("zepto"),customElem=require("customElement").create();return customElem.prototype.build=build,customElem}),define("mip-hk-share",["mip-hk-share/mip-hk-share"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-hk-share",e)}if(window.MIP)require(["mip-hk-share"],function(e){t(window.MIP,e)});else require(["mip","mip-hk-share"],t)}()}});