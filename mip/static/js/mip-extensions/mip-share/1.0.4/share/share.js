define("mip-share/share/share",["require","zepto","util","./detect","./aio","viewer"],function(t){var e,i=t("zepto"),n=t("util"),o=n.platform,r={url:window.location.href,title:"百度搜索有惊喜",content:"百度搜索有惊喜",iconUrl:"//m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg",custom:[]},s=t("./detect"),a=s.os,l=s.browser,c="zbios"==l.n?1:0,u="uc"==l.n&&("undefined"!=typeof ucweb||"undefined"!=typeof ucbrowser)?1:0,d=o.isQQ()&&l.v&&l.v>"5.4"?1:0,p=o.isWechatApp()?1:0,f=new Promise(function(t,e){if(d){var n=document.createElement("script");n.type="text/javascript",n.onload=n.onreadystatechange=function(){if(!this.readyState||"loaded"===this.readyState||"complete"===this.readyState)t()},n.src="//jsapi.qq.com/get?api=app.share",i("head").append(n)}}),h=function(e,i){if(i)e.url=encodeURIComponent(e.url),e.linkUrl=encodeURIComponent(e.url);if(t("./aio"),Box.os.android)Box.android.invokeApp("Bdbox_android_utils","callShare",[JSON.stringify(e),window.successFnName||"console.log",window.errorFnName||"console.log"]);else Box.ios.invokeApp("callShare",{options:encodeURIComponent(JSON.stringify(e)),errorcallback:"onFail",successcallback:"onSuccess"})},m=function(t,e){var i={sinaweibo:["kSinaWeibo","SinaWeibo",11,"新浪微博"],wxfriend:["kWeixin","WechatFriends",1,"微信好友"],pyq:["kWeixinFriend","WechatTimeline","8","微信朋友圈"],qqfriend:["kQQ","QQ","4","QQ好友"],qzone:["kQZone","QZone","3","QQ空间"]},n=e.url,o=e.title,r="";e.content;if(t=""==t?"":"ios"==a.n?i[t][0]:i[t][1],"undefined"!=typeof ucweb)ucweb.startRequest("shell.page_share",[o,o,n,t,"","@"+r,""]);else if("undefined"!=typeof ucbrowser)ucbrowser.web_share(o,o,n,t,"","@"+r,"")},g=function(e,i){var n=t("viewer"),r=e,s={sinaweibo:["kSinaWeibo","SinaWeibo",11,"新浪微博"],wxfriend:["kWeixin","WechatFriends",1,"微信好友"],pyq:["kWeixinFriend","WechatTimeline","8","微信朋友圈"],qqfriend:["kQQ","QQ","4","QQ好友"],qzone:["kQZone","QZone","3","QQ空间"]};e=""==e?"":s[e][2];var a={url:i.url,title:i.title,description:i.content,img_url:"",img_title:"",to_app:e,cus_txt:"请输入此时此刻想要分享的内容"};if(a=""==e?"":a,n.isIframed&&o.isIos()&&o.isQQ())n.sendMessage("mip-share",{key:r,opt:a});f.then(function(){if("undefined"!=typeof browser&&void 0!==browser.app)browser.app.share(a)})},v=function(){if(i(".c-share-wechat-tips").length)i(".c-share-wechat-tips").show();else i("body").append(i('<div class="c-share-wechat-tips"></div>')),i(".c-share-wechat-tips").on("click",function(){i(this).hide(),clearTimeout(e)});e=setTimeout(function(){i(".c-share-wechat-tips").hide(),clearTimeout(e)},2e3)},b={key:"pyq",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/pyq.png",title:"朋友圈",cb:function(){var t;if(c)t=function(t){t.mediaType="weixin_timeline",h(t,!1)};else if(u)t=function(t){m("pyq",t)};else if(d)t=function(t){g("pyq",t)};else if(p)t=function(t){v()};return t}()},y={key:"wxfriend",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/wxfriend.png",title:"微信好友",cb:function(){var t;if(c)t=function(t){t.mediaType="weixin_friend",h(t,!1)};else if(u)t=function(t){m("wxfriend",t)};else if(d)t=function(t){g("wxfriend",t)};else if(p)t=function(t){v()};return t}()},w={key:"qqfriend",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/qqfriend.png",title:"QQ好友",cb:function(){var t;if(c)t=function(t){t.mediaType="qqfriend",h(t,!1)};else if(u)t=function(t){m("qqfriend",t)};else if(d)t=function(t){g("qqfriend",t)};return t}()},_={key:"qzone",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/qzone.png",title:"QQ空间",cb:function(){var t;if(c)t=function(t){t.mediaType="qqdenglu",h(t,!1)};else if(u&&"ios"==a.n)t=function(t){m("qzone",t)};else if(d)t=function(t){g("qzone",t)};else t=function(t){var e="url="+encodeURIComponent(t.url)+"&successurl="+encodeURIComponent(window.location.href)+"&summary="+t.content+"&title="+t.title+"&pics="+encodeURIComponent(t.iconUrl);window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+e)};return t}()},x={key:"sinaweibo",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/sinaweibo.png",title:"新浪微博",cb:function(){var t;if(c)t=function(t){t.mediaType="sinaweibo",h(t,!1)};else if(u)t=function(t){m("sinaweibo",t)};else if(d)t=function(t){g("sinaweibo",t)};else t=function(t){window.open("http://v.t.sina.com.cn/share/share.php?url="+encodeURIComponent(t.url)+"&title="+encodeURIComponent(t.title))};return t}()},k={key:"more",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/more.png",title:"更多",cb:function(){var t;if(c)t=function(t){t.mediaType="all",h(t,!1)};else if(u)t=function(t){m("",t)};else if(d)t=function(t){g("",t)};return t}()},j=function(t){if(this.opt=i.extend({},r,t),!this.opt.content)this.opt.content=this.opt.title;if(/^\/\/.+/.test(this.opt.url))this.opt.url="http:"+this.opt.url;this.opt.linkUrl=this.opt.url,this._init()};return j.prototype={version:"1.0.0",_init:function(){var t=this;t.isRender=!1,t._initShareList()},_initShareList:function(){var t=this,e=[];if(c||u||d||p)e.push(b,y);if(c||u||d)e.push(w);if(e.push(_,x),c||u||d&&"ios"==a.n)e.push(k);e=e.concat(t.opt.custom),t.list=e;var n="";if("array"==i.type(e)&&e.length>0){n+='<div class="c-share-list">';for(var o=e.length,r=Math.ceil(o/4),s=0;s<r;s++){n+='<div class="c-row c-gap-bottom">';for(var l=0;l<4;l++){var f=4*s+l,h=e[f];if(h)n+='<div class="c-span3 c-share-btn c-share-btn-'+h.key+'">',n+='<div class="c-img c-img-s">',n+='<img src="'+h.icon+'" />',n+="</div>",n+='<div class="c-line-clamp1">'+h.title+"</div>";else n+='<div class="c-span3 c-share-btn">';n+="</div>"}n+="</div>"}n+="</div>"}t.$dom_shareList=i(n),t._bindEvent()},_bindEvent:function(){var t=this;t.$dom_shareList.find(".c-share-btn").each(function(e){if(t.list[e])i(this).on("click",function(){t.list[e].cb(t.opt),t._sendLog(t.list[e].key)})})},_sendLog:function(t){var e=this,n={pyq:{ct:40,cst:2},wxfriend:{ct:40,cst:1},qqfriend:{ct:40,cst:5},qzone:{ct:40,cst:3},sinaweibo:{ct:40,cst:4},more:{ct:40,cst:9},close:{ct:40,cst:0}};if(t&&n[t]&&"object"==typeof B&&B.log&&B.log.send){var o=n[t];if(e.opt&&"object"==typeof e.opt.loginfo)o=i.extend(o,e.opt.loginfo);B.log.send(o)}},render:function(t,e){var n=this;if(t&&i(t).length){var o=i(t);if(e&&e.customClassName)n.$dom_shareList.addClass(e.customClassName);if(o.append(n.$dom_shareList),n.isRender=!0,e&&"function"==typeof e.onRender)e.onRender()}},popup:function(e){var n=this,e=e||{};if(n.isRender)n.$dom_shareList=n.$dom_shareList.clone(),n._bindEvent();if(e&&e.customClassName)n.$dom_shareList.addClass(e.customClassName);var o=i('<div class="c-row c-gap-top-large"><div class="c-span12"><div class="c-btn c-share-cancel-btn">取消</div></div></div>');t(["pmd/popup/popup"],function(t){n.sharePopup=new t({content:n.$dom_shareList.add(o),customClassName:"c-share-popup-modal",onOpen:e.onOpen||function(){},onClose:e.onClose||function(){}}),n.sharePopup.$popupContent.css({"max-width":n._horizontalHack()+"px"}),o.on("click",function(){n.sharePopup.closePopup(),n._sendLog("close")})})},close:function(){var t=this;if(t.sharePopup)t.sharePopup.closePopup()},_horizontalHack:function(){var t;if(void 0!=window.orientation){if(0==window.orientation||180==window.orientation)t=Math.min(window.screen.width,i(window).width());else if(90==window.orientation||-90==window.orientation)t=Math.min(window.screen.width,window.screen.height),t=t*i(window).width()/Math.max(window.screen.width,window.screen.height)}else t=Math.min(window.screen.width,window.screen.height);return t},constructor:j},j});