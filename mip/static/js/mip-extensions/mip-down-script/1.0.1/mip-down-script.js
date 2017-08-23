(window.MIP=window.MIP||[]).push({name:"mip-down-script",func:function(){define("mip-down-script/mip-down-script",["require","zepto","customElement"],function(t){var e=t("zepto"),i=t("customElement").create(),n={versions:function(){var t=navigator.userAgent;return{ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1,iPhone:t.indexOf("iPhone")>-1||t.indexOf("Mac")>-1,iPad:t.indexOf("iPad")>-1,ios9:t.indexOf("iPhone OS 9")>-1,MQQBrowser:t.indexOf("MQQBrowser")>-1,UCBrowser:t.indexOf("UCBrowser")>-1,Safari:t.indexOf("Safari")>-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()},r={webInfoId:e("#down-href").attr("downid"),webInfoCid:e("#down-href").attr("cid"),webInfoRid:e("#down-href").attr("rid"),platAndroidId:e("#plat_Android").attr("platid"),platAndroidAddress:e("#plat_Android").attr("Address"),platAndroidResSystem:e("#plat_Android").attr("ResSystem"),platAndroidResName:e("#plat_Android").attr("ResName"),platAndroidResVer:e("#plat_Android").attr("ResVer"),platAndroidCid:e("#plat_Android").attr("cid"),platAndroidRid:e("#plat_Android").attr("rid"),platIPhoneId:e("#plat_iPhone").attr("platid"),platIPhoneAddress:e("#plat_iPhone").attr("Address"),platIPhoneResSystem:e("#plat_iPhone").attr("ResSystem"),platIPhoneResName:e("#plat_iPhone").attr("ResName"),platIPhoneResVer:e("#plat_iPhone").attr("ResVer"),platIPhoneCid:e("#plat_iPhone").attr("cid"),platIPhoneRid:e("#plat_iPhone").attr("rid"),assid:parseInt(e("#info #Associate").html(),10),mrtit:function(){function t(t,e,r){for(var o=0;o<t.length;o++)if(n.indexOf(t[o])>0)i.html(e).attr("href",r)}var i=e("#cataName"),n=i.attr("href"),r=[631,632,633,634,636,694,695,696,697,700,727,728,729,730,731,732,733,734,735,797,798,799,800,801,806],o=[830,831,832,833,834,835,836,837,838,839,840,841,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,802,803,804,805,807,808,809,810,758,759,760,761,762,763,764,765,766,767,768,769,770,771,673,672,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,618,619,620,621,622,623,624,625,591,592,593,594,595,596,597,598,637,638,711,712,713,714,842,465,466,467,468,469,470,471,472,473,476,477,386,387,388,389,390,391,414,415,416,417,571,572,573,574,422,285,282,284,286,287,288,535,616,508,384,299,304,345,478,479,480,482,506,298,561,562,629,557];i.html("软件").attr("href","http://m.pc6.com/ruanj.html"),t(r,"网游","http://m.pc6.com/wangyou.html"),t(o,"单机","http://m.pc6.com/youxi.html")},xfNav:function(){var t=e("header").height()+90;e(window).scroll(function(){var i=e("#btns");if(e(window).scrollTop()>=t)i.css({position:"fixed",top:0}).addClass("on");else i.css({position:"relative"}).removeClass("on");if(e("#wrapper").offset().top+e("#wrapper").height()-35<=e(window).scrollTop())e("#xgk").addClass("fix");else e("#xgk").removeClass("fix")})},downHref:function(){if(this.assid>0)e("#info #btns a").attr("href","http://m.pc6.com/down.asp?id="+this.assid);if(n.versions.android&&void 0!==this.platAndroidAddress){if(this.platAndroidAddress.indexOf("http:")>=0||this.platAndroidAddress.indexOf("ftp:")>=0||this.platAndroidAddress.indexOf("https:")>=0)e("#info #btns a").attr("href",this.platAndroidAddress);else e("#info #btns a").attr("href","http://download.pc6.com/down/"+this.platAndroidId+"/");if(e("#ResSystem").html(this.platAndroidResSystem),",110974,110451,121665,115094,55819,49251,62433,140386,".indexOf(","+this.webInfoId+",")<0)if(e("body.dnb").length<1)e("#info .name").html("<h1>"+this.platAndroidResName+"</h1>"+this.platAndroidResVer)}else if(n.versions.ios&&void 0!==this.platIPhoneAddress){if(this.platIPhoneAddress.indexOf("http:")>=0||this.platIPhoneAddress.indexOf("ftp:")>=0||this.platIPhoneAddress.indexOf("https:")>=0)e("#info #btns a").attr("href",this.platIPhoneAddress);else e("#info #btns a").attr("href","http://download.pc6.com/down/"+this.platIPhoneId+"/");if(e("#ResSystem").html(this.platIPhoneResSystem),",110974,110451,121665,115094,55819,49251,62433,140386,".indexOf(","+this.webInfoId+",")<0)if(e("body.dnb").length<1)e("#info .name").html("<h1>"+this.platIPhoneResName+"</h1>"+this.platIPhoneResVer)}},titTab:function(){if(e(".xgwz ul li").length>0)e(".xgwz").show();else e(".xgwz").hide(),e("#tab span").eq(1).hide();e("#tab span").click(function(){if("简介"===e(this).text())e(this).addClass("cur").siblings().removeClass("cur"),e(".xyc,.cont,#comment,.xgwz,.similar,#tcsyy,.guess,#xgk").show();else if("教程"===e(this).text())e(this).addClass("cur").siblings().removeClass("cur"),e(".xgwz,#comment").show(),e(".cont,.xyc,.similar,#tcsyy,#xgk,.guess").hide();else if("评论"===e(this).text())e(this).addClass("cur").siblings().removeClass("cur"),e(".xgwz,.cont,.xyc,.similar,#tcsyy,#xgk,.guess").hide(),e("#comment").show()})},touchSlide:function(){function t(t){if("left"===t)u>=o.length-1?o.length:u++,r.animate({"-webkit-transform":"translate3d("+-l*u+"px, 0px, 0px)"});else if("reset"===t)r.animate({"-webkit-transform":"translate3d("+-l*u+"px, 0px, 0px)"});else if("right"===t)u<=0?u=0:u--,r.animate({"-webkit-transform":"translate3d("+-l*u+"px, 0px, 0px)"});i(),e(".pagenum span").eq(u).addClass("active").siblings().removeClass("active"),e(".guess-nav li").eq(u).addClass("active").siblings().removeClass("active")}function i(){setTimeout(function(){e("body").scrollTop(e("body").scrollTop()+1).scrollTop(e("body").scrollTop()-1)},150)}var n=e(".guess");if(0!==n.length){var r=n.find(".tags-main-ul"),o=r.find(".tags-main-box"),s=e("#wrapert ul li"),a='<span class="active"></span>',l=parseInt(e(window).width()-16,10),c={s:[],d:""},u=0;o.width(l),e("#tags-main").width(l);for(var d=1;d<o.length;d++)a+="<span></span>";if(e(".pagenum").html(a),r.width(o.length*o.width()),s.eq(0).addClass("active"),s.click(function(){var t=e(this).index();u=t,i(),s.eq(t).addClass("active").siblings().removeClass("active"),r.css({"-webkit-transform":"translate3d("+-l*t+"px, 0px, 0px)"})}),r[0].addEventListener("touchstart",function(t){c.s[0]=t.targetTouches[0].pageX,c.s[1]=t.targetTouches[0].pageY,c.s[2]=(new Date).getTime()},!1),r[0].addEventListener("touchmove",function(t){if(Math.abs(t.targetTouches[0].pageX-c.s[0])>=Math.abs(t.targetTouches[0].pageY-c.s[1])&&""===c.d)c.d=1;else if(""===c.d)c.d=0;if(1===c.d)t.preventDefault(),r.css({"-webkit-transform":"translate3d("+-(l*u-t.targetTouches[0].pageX+c.s[0])+"px, 0px, 0px)"})},!1),r[0].addEventListener("touchend",function(e){if(1===c.d)if((new Date).getTime()-c.s[2]>700)if(e.changedTouches[0].pageX-c.s[0]>l/3)t("right");else if(c.s[0]-e.changedTouches[0].pageX>l/3)t("left");else t("reset");else if(e.changedTouches[0].pageX>c.s[0])t("right");else if(c.s[0]>e.changedTouches[0].pageX)t("left");c.d=""},!1),e("#wrapper2").length>0)e("#wrapper2")[0].addEventListener("touchend",function(t){i()},!1);if(e("#wrapper4").length>0)e("#wrapper4")[0].addEventListener("touchend",function(t){i()},!1)}},hotRec:function(){var t=[],i=2,r=0,o=0,s=0,a=this;if(n.versions.android){if(i=0,void 0!==this.platAndroidAddress)o=this.platAndroidCid,s=this.platAndroidRid,r=this.platAndroidId}else if(n.versions.ios)if(i=1,void 0!==this.platIPhoneAddress)o=this.platIPhoneCid,s=this.platIPhoneRid,r=this.platAndroidId;if(2!==i)e("#xgk a").each(function(){t.push(e(this).text())}),0===t.length?t="":t=t.join(","),e.ajax({method:"get",data:{keys:t,id:a.webInfoId,platform:i,pid:r,cid:void 0!==a.webInfoCid?a.webInfoCid:0,rid:void 0!==a.webInfoRid?a.webInfoRid:0,rcid:o,rrid:s},url:"https://apis.pc6.com/ajax.asp?action=998",dataType:"json",success:function(t){if(void 0!==t.list){var n=t.list,r="";if(0===i)for(var o=0;o<n.length;++o)r+='<li><a href="http://m.pc6.com/down.asp?id='+n[o].ID+'"><mip-img src="'+n[o].SmallImg+"\" onclick=\"_czc.push(['_trackEvent','tuijian','tuijian"+(o+1)+"','"+n[o].ResName+"'])\"></mip-img>"+n[o].ResName+"</a></li>";else if(1===i)for(var o=0;o<n.length;++o)r+='<li><a href="http://m.pc6.com/mipd/'+n[o].ID+'.html" target="_blank"><mip-img src="'+n[o].SmallImg+"\" onclick=\"_czc.push(['_trackEvent','tuijian','tuijian"+(o+1)+"','"+n[o].ResName+"'])\"></mip-img>"+n[o].ResName+"</a></li>";e(".tjyxph #thelist3").append(r)}},error:function(){}})},init:function(){this.mrtit(),this.xfNav(),this.titTab(),this.downHref(),this.hotRec(),this.touchSlide()}};return i.prototype.build=function(){r.init()},i}),define("mip-down-script",["mip-down-script/mip-down-script"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-down-script",e)}if(window.MIP)require(["mip-down-script"],function(e){t(window.MIP,e)});else require(["mip","mip-down-script"],t)}()}});