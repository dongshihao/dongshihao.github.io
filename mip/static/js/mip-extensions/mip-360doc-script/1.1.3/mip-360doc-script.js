(window.MIP=window.MIP||[]).push({name:"mip-360doc-script",func:function(){define("mip-360doc-script/mip-360doc-script",["require","zepto","customElement","fetch-jsonp"],function(i){function c(){var i,c=!0,n=!0;if(a(".like_content")&&a(".like_content").eq(0))if(i=document.getElementsByClassName("like_content")[0],i.getElementsByTagName("iframe")&&i.getElementsByTagName("iframe")[0]&&i.getElementsByTagName("iframe")[0].src&&(i.getElementsByTagName("iframe")[0].src.indexOf("baidu.com")>0||i.getElementsByTagName("iframe")[0].src.indexOf("360doc.cn")>0))c=!1;if(a(".like_content")&&a(".like_content").eq(1))if(i=document.getElementsByClassName("like_content")[1],i.getElementsByTagName("iframe")&&i.getElementsByTagName("iframe")[0]&&i.getElementsByTagName("iframe")[0].src&&(i.getElementsByTagName("iframe")[0].src.indexOf("baidu.com")>0||i.getElementsByTagName("iframe")[0].src.indexOf("360doc.cn")>0))n=!1;if(c)e("mipads/iframe_likecontent");if(n)e("mipads/iframe_service")}function n(){try{var i=document.domain;e("mipConn?domain=_"+encodeURI(i)+"_&aid="+m())}catch(i){}}function e(i){var c=new Image,n="broswerlog_"+Math.floor(2147483648*Math.random()).toString(36);window[n]=c,c.onload=c.onerror=c.onabort=function(){c.onload=c.onerror=c.onabort=null,window[n]=null,c=null},c.src="https://mipeclick.360doc.com/"+i}function t(){var i=setTimeout(function(){r(1),clearTimeout(i),o()},3e3)}function o(){var i=setTimeout(function(){r(0),clearTimeout(i),t()},4e3)}function r(i){a(".mip-360doc-script-pic").eq(i).css("display","inline").siblings(".mip-360doc-script-pic").css("display","none")}function p(){var i=m();if(""!==i)a.ajax({type:"POST",url:"https://transfer.360doc.cn/ajax/Handler.ashx",data:"id="+i,success:function(i){var c=i.split("|");if(null!==c[1]&&""!==c[1])a(".mip-360doc-script-refnum").html(c[1]);else a(".mip-360doc-script-refnum").html("0");a(".mip-360doc-script-xh1").html("献花("+c[3]+")")},error:function(){}})}function s(){i("fetch-jsonp")("https://blockart.360doc.com/ajax/getstatusmip.ashx?aid="+m(),{jsonpCallback:"callback"}).then(function(i){return i.json()}).then(function(i){if(1===i.result)a(".mip-360doc-script-tit").html(""),a(".mip-360doc-script-con").html("对不起，该文章已被删除！")})}function m(){return a(".mip-360doc-script-saveid").html()}function l(){try{var i="",c="",n=-1,e=-1;if(document.referrer)i=document.referrer;if(i.length>0&&i.indexOf("//m.baidu.com")>=0){if((n=i.indexOf("word="))>0)e=i.indexOf("&",n);if(e>0)if(c=i.substring(n+5,e),c.length>0)a(".mip-360doc-script-keyword").val(decodeURI(c))}}catch(i){}}var a=i("zepto"),d=i("customElement").create();return d.prototype.build=function(){if(null!==a(".mip-360doc-script-wxggalink")){a(".mip-360doc-script-wxggalink").html("<span class='mip-360doc-script-pic'><img src='https://pubimage.360doc.com/transfer/images/zhaishou.png' class='pic2'/></span><span class='mip-360doc-script-pic'><img src='https://pubimage.360doc.com/transfer/images/xiazai.png'  class='pic2'/></span>");if(a(".mip-360doc-script-pic").length>1)a(".mip-360doc-script-pic").eq(0).css("display","inline").siblings(".mip-360doc-script-pic").hide();a(".mip-360doc-script-box960").css("display",""),t()}p(),n();var i=setTimeout(function(){c(),clearTimeout(i)},1e4);if(null!==a(".mip-360doc-script-plg2"))a(".mip-360doc-script-plg2").on("click",function(i){e("Componentclick?id=1")});if(null!==a(".mip-360doc-script-p_header_sc"))a(".mip-360doc-script-p_header_sc").on("click",function(i){e("Componentclick?id=2")});if(null!==a(".mip-360doc-scropt-plzs"))a(".mip-360doc-scropt-plzs").on("click",function(i){e("Componentclick?id=4")});if(null!==a(".mip-360doc-script-gz1"))a(".mip-360doc-script-gz1").on("click",function(i){e("Componentclick?id=5")});if(null!==a(".mip-360doc-script-xh1"))a(".mip-360doc-script-xh1").on("click",function(i){e("Componentclick?id=6")});if(null!==a(".mip-360doc-script-reflectionurl"))a(".mip-360doc-script-reflectionurl").on("click",function(i){e("Componentclick?id=7")});if(null!==a(".mip-360doc-script-p_footer_sc"))a(".mip-360doc-script-p_footer_sc").on("click",function(i){e("Componentclick?id=8")});if(s(),null!==a(".mip-360doc-script-keyword"))l()},d}),define("mip-360doc-script",["mip-360doc-script/mip-360doc-script"],function(i){return i}),function(){function i(i,c){i.registerMipElement("mip-360doc-script",c)}if(window.MIP)require(["mip-360doc-script"],function(c){i(window.MIP,c)});else require(["mip","mip-360doc-script"],i)}()}});