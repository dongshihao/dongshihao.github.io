(window.MIP=window.MIP||[]).push({name:"mip-iask-business",func:function(){define("mip-iask-business/mip-iask-business",["require","zepto","customElement"],function(t){function e(t,e){var n=!1,r=new Array(0),o=new Array(0),s=new Array(0);if(i.each(e,function(i){try{var a=e[i],l=a.qTags,c=a.mainTags,u=a.startTime,d=a.endTime,f="不限",p="不限";if(a.province)f=a.province;if(a.nprovince)p=a.nprovince;if("79"===t.qCid||"147"===t.bCid)if(C(t.nowTime,u,d)&&P(t.province,f,p)&&M(t.qTags,l,t.mainTags,c))for(var h=a.adPosition,m=h.split(","),g=0;g<m.length;g++){if("1"===m[g])r.push(a);if("2"===m[g])o.push(a);if("3"===m[g])s.push(a);n=!0}}catch(t){}}),r.length>0){var a=I(0,r.length-1);k(r[a],t)}if(o.length>0){var l=I(0,o.length-1);k(o[l],t)}if(s.length>0){var c=I(0,s.length-1);k(s[c],t)}return n}var i=t("zepto"),n=t("customElement").create(),r="",o=function(t){try{i.getJSON("https://mipp.iask.cn/iplookup/search?format=json&callback=?",function(e){t(e)})}catch(t){}},s=function(t,e,i,n){var r="";return r+="<li>",r+="<a href="+t+" target='_blank' class='href_log'"+n+">",r+="<mip-img class='mip-img' src="+e+">",r+="<p class='mip-img-subtitle'>"+i+"</p>",r+="</mip-img>",r+="</a></li>"},a=function(t,e){var i="";return i+="<li><a href="+t+" target='_blank' class='href_log'>"+e+"</a></li>"},l=function(){var t={};return t.COOPERATE_SOUTHNETWORK=100,t.COOPERATE_HUASHENG=201,t.COOPERATE_HUASHENG_QA=201,t.COOPERATE_HUASHENG_BY=202,t.COOPERATE_TIANZHU=300,t['"COOPERATE_XINYUHENG']=400,t.COOPERATE_COMMERCIAL=500,t.COMMERCIAL_CAD=501,t.COOPERATE_BRAND=600,t.COOPERATE_EFFECT=700,t.COOPERATE_YOULAI=1e3,t},c=function(t,e,i){if(202===t||500===t||501===t||600===t||700===t)return e;else if(1e3===t)return i;return""},u=function(t,e){var n=i(".paramDiv"),s=n.attr("qid")||"",a=n.attr("mainTags")||"",u="",d="",f="",p=n.attr("qcid")||"",h=n.attr("cid")||"",m=n.attr("uid")||"",g=n.attr("adOwnerId")||"",y=l()[t]||999;m=c(t,m,g)||r;var v="";o(function(t){if(u=t.ip||"",d=t.province||"",f=t.city||"",a)a=a.replace("[","").replace("]","");v=encodeURI("pv="+e+"_"+s+"_"+u+"_"+d+"_"+f+"_"+a+"_"+p+"_"+h+"_"+y+"_"+m+"_");var n="https://mipp.iask.cn/advLogInfo?"+v;i.get(n,function(t){})})},d=function(){var t=i(".business_source").attr("sources")||i(".business_source_type").attr("sourceType");i(".href_log").click(function(){if("COMMERCIAL_ZWZD"===t)t="COOPERATE_COMMERCIAL";u(t,1);var e=i(this).attr("href");window.open(e)})},f=function(t,e,i){var n="";return n+="<mip-fixed type='top' id='customid' >",n+="<div class='mip-adbd'>",n+="<div on='tap:customid.close' class='mip-adbd-close'><span>关闭</span></div>",n+="<div href="+t+" class='href_log' "+i+">",n+="<mip-img class='mip-img bottom-img' src="+e+"></mip-img>",n+="</div>",n+="<span class='icon-bai-bottom'></span>",n+="</div></mip-fixed>"},p=function(t,e,i,n,r){var o="<div class='firms-con'>";return o+="<div class='firms-pic'>",o+="<mip-img class='mip-img' src="+n+"></mip-img>",o+="<span class='icon-v'></span>",o+="</div>",o+="<div class='firms-text'>",o+="<p><span class='name'>"+t+"</span>",o+="<span class='time'> 1小时前</span><span class='icon-tui'>广告</span></p>",o+="<p>"+e+"</p>",o+="</div>",o+="<a href="+i+" target='_blank' class='btn-ask href_log' "+r+">咨询专家</a>",o+="</div>",o+="</div>"},h=function(){i(".bus_bottom_div").find("div").each(function(){var t=i(this).attr("area"),e=i(this).attr("imgurl"),n=i(this).attr("picurl");if(r=i(this).attr("uid"),""===t){var s=f(e,n,"");i(".mip_as_bottm_div").append(s)}else o(function(r){if(t.indexOf(r.province)>-1){var o=f(e,n,"");i(".mip_as_bottm_div").append(o)}})}),i(".bus_hot_recommend_div").find("div").each(function(){var t=i(this).attr("area"),e=i(this).attr("texturl"),n=i(this).attr("img");r=i(this).attr("uid");var a=i(this).attr("imgtitle");if(""===t)i(".hot-tui-list").append(s(e,n,a,"")),i(".hot_recomd_div").show();else o(function(t){i(".hot-tui-list").append(s(e,n,a,"")),i(".hot_recomd_div").show()})}),i(".bus_hot_spot").find("div").each(function(){var t=i(this).attr("area"),e=i(this).attr("texturl"),n=i(this).attr("imgtitle");if(r=i(this).attr("uid"),""===t)i(".hot-point-list").append(a(e,n));else o(function(t){i(".hot-point-list").append(a(e,n))})}),d()},m=function(){var t=i(".paramDiv"),e=t.attr("mainTags"),n=t.attr("qcid")||"",r=t.attr("sources"),o=t.attr("version"),s=t.attr("iscommercial");if("COOPERATE_BRAND"===r&&"2"===o)return!1;if("true"===s&&"COOPERATE_COMMERCIAL"!==r)return!1;if("82"===n&&(-1!==e.indexOf("财务税务")||-1!==e.indexOf("商业工具")))return!0;else return!1},g=function(){return f("https://mipp.iask.cn/html/yongyou/index.html","http://pic.iask.cn/fimg/5036459229_400.jpg","data-stats-baidu-obj=\"%20%7B%22type%22:%22click%22,%22data%22:%22%5B'_trackEvent',%20'100m,%20'0',%20'8002m'%5D%22%7D\"")},y=function(){i(".mip_as_haoping_div").remove(),i(".mip_as_qita_div").remove(),i(".mip_as_lswt_div").remove(),i(".mip_as_xgzs_div").remove(),i(".mip_as_jrjd").remove(),i(".mip_dl_jrjd").remove(),i(".mip_as_tbtj").remove(),i(".mip_dl_tbtj").remove(),i(".mip_as_djgz").remove(),i(".mip_as_wzss").remove(),i(".mip_as_bottm_div").empty()},v=function(t){var e=t.adList;for(var n in e)if("4"===e[n].type){var r='data-stats-baidu-obj="%7B%22type%22:%22click%22,%22data%22:%22%5B_trackEvent,%20%22M_commercial_youlai%22,%20%22M_commercial_youlai_skip%22,%20%22M_commercial_youlai_skip_top_xuanfu%22%5D%22%7D"';i(".mip_as_bottm_div").empty(),i(".mip_as_bottm_div").append(f(e[n].picLink,e[n].picUrl,r))}else if("3"===e[n].type){var o=e[n],a=o.companyName||"",l=o.drName||"",r='data-stats-baidu-obj="%7B%22type%22:%22click%22,%22data%22:%22%5B_trackEvent,%20%22M_commercial_youlai%22,%20%22M_commercial_youlai_skip%22,%20%22M_commercial_youlai_skip_qiye_info%22%5D%22%7D"',c=p(l,a,t.website,o.picUrl,r);if(i(".qs_bar").length>0)i(".qs_bar").eq(0).empty(),i(".qs_bar").eq(0).append(c);else i(".mip_as_other_qiye_div").eq(0).empty(),i(".mip_as_other_qiye_div").eq(0).append(c)}else if("5"===e[n].type){var u={};for(var h in e)if("3"===e[h].type)u=e[h];var o=e[n],m=o.picList,r="%7B%22type%22:%22click%22,%22data%22:%22%5B_trackEvent,%20%22M_commercial_youlai%22,%20%22M_commercial_youlai_skip%22,%20%22M_commercial_youlai_skip_feed%22%5D%22%7D",g=0,y='<mip-img class="mip-img" src="'+u.picUrl+'"></mip-img>';i(".youlai_feed_div .youlai_feed_title").text(o.title),i(".youlai_feed_div .youlai_feed_use_img").html(y),i(".youlai_feed_div .youlai_feed_use_name").html(u.companyName),i(".youlai_feed_div .youlai_feed_txt").text(o.describe),i(".youlai_feed_div a").attr("src",o.picLink),i(".youlai_feed_div a").attr("data-stats-baidu-obj",r),i(".youlai_feed_div .youlai_feed").each(function(){i(this).append('<mip-img class="mip-img" src="'+m[g++]+'"></mip-img>')}),i(".youlai_feed_div").show()}else if("6"===e[n].type){var o=e[n],m=o.adDetailList,r='data-stats-baidu-obj="%7B%22type%22:%22click%22,%22data%22:%22%5B_trackEvent,%20%22M_commercial_youlai%22,%20%22M_commercial_youlai_skip%22,%20%22M_commercial_youlai_skip_quantu%22%5D%22%7D"';for(var v in m){var b=o.picLink,w=m[v].picUrl,_=m[v].describe;i(".hot-tui-list").append(s(b,w,_,r)),i(".hot_recomd_div").show()}}d()},b=function(t,e,n){var r="";if("COOPERATE_HUASHENG"===t)r="HS";else if("COOPERATE_HUASHENG_QA"===t)r="HSQA";else if("COOPERATE_XINYUHENG"===t)r="XYH";else if("COOPERATE_YOULAI"===t)r="YL";else if(""===r)return;var o="https://mipp.iask.cn/t/wlsh?openCorporationId="+e+"&type="+r;i.get(o,function(t){var e=i.parseJSON(t);if("Y"===e.succ){var o=i.parseJSON(e.html),s=!0,a="",l="";if("YL"===r)return void v(o);if("XYH"===r)s=!1,a=f(o.pics[1].picLink,o.pics[1].picLocal);else{var c=o.pics[3]||"";a=f(c.picLink,c.picLocal);var u=o.companyName||"",h=o.drName||"",m=o.website||"",c=o.pics[0]||"";l=p(u,h,m,c.picLocal,"")}if(i(n).empty(),i(n).append(a),s)if(i(".qs_bar").length>0)i(".qs_bar").eq(0).empty(),i(".qs_bar").eq(0).append(l);else i(".mip_as_other_qiye_div").eq(0).empty(),i(".mip_as_other_qiye_div").eq(0).prev().prev().remove(),i(".mip_as_other_qiye_div").eq(0).append(l)}d()})},w=function(t,e){for(var n="https://mipp.iask.cn/mib/tag/",r=t.split(":"),s=0;s<r.length;s++)n+=r[s];try{var a="",l="",c="";o(function(t){a=t.province,l=t.city,c=t.ip,i.get(n,function(t){var n="";try{if(n=i.parseJSON(t),"Y"===n.succ){var r=e.split(":"),o=i.parseJSON(n.html),s=parseInt(r[0],0),c=parseInt(r[1],0),u=r[2],d=r[3],f=r[4],p=r[5],h=D(),m=r[6]||"79",g=r[7];r[8],r[9];if(void 0!==o){var y=_({mainTags:p,province:a,qCid:m,bCid:g,city:l,lenGood:s,lenother:c,commercialSource:d,qSourceType:u,qTags:f,nowTime:h});x(y,o)}}}catch(t){}})})}catch(t){}},_=function(t){var e={province:"",lenGood:0,lenother:0,commercialSource:"",qSourceType:""};return i.extend(e,t)},x=function(t,n){var r=!1;if("COMMERCIAL_ZWZD"===t.commercialSource||"COOPERATE_SOUTHNETWORK"===t.qSourceType||"COOPERATE_XINYUHENG"===t.qSourceType||"COOPERATE_HUASHENG"===t.qSourceType||"COOPERATE_HUASHENG_QA"===t.qSourceType)return r;if(!t.city)return e(t,n);else return i.each(n,function(e){try{var i=n[e],o=i.qTags,s=i.mainTags,a=i.startTime,l=i.endTime,c="不限",u="不限",d="不限",f="不限";if(i.city)d=i.city;if(i.ncity)f=i.ncity;if(i.province)c=i.province;if(i.nprovince)u=i.nprovince;if("79"===t.qCid||"147"===t.bCid)if(C(t.nowTime,a,l)&&P(t.province,c,u)&&O(t.city,d,f)&&M(t.qTags,o,t.mainTags,s))k(i,t),r=!0}catch(t){}}),r},k=function(t,e){if(void 0!==t)for(var i=t.adPosition,n=i.split(","),r=0;r<n.length;r++)T(n[r],t,e)},T=function(t,e,i){try{if("1"===t)A(e,i);else if("2"===t)S(e,i);else if("3"===t)E(e,i)}catch(t){}},j=function(t,e,n){if(e.lenGood>=t){var r=i(".qs_bar").eq(t-1);r.removeClass(),r.empty(),r.append(n)}else{t=e.lenGood>0?t-1:t;var r=i(".mip_as_other_qiye_div").eq(t-1);r.removeClass(),r.empty(),r.prev().prev().remove(),r.append(n)}},A=function(t,e){j(1,e,p(t.hospitalName,t.contacts,t.url,t.logo,""))},S=function(t,e){j(2,e,p(t.hospitalName,t.contacts,t.url,t.logo,""))},E=function(t,e){i(".mip_as_bottm_div").empty(),i(".mip_as_bottm_div").append(f(t.url,t.mSuspensionImage,""))},C=function(t,e,i){if(e<=t&&t<i)return!0;else return!1},O=function(t,e,i){if(-1!==i.indexOf(t))return!1;if("不限"===e)return!0;if(-1!==e.indexOf(t))return!0;else return!1},P=function(t,e,i){if(-1!==i.indexOf(t)&&"不限"!==i)return!1;if("不限"===e)return!0;if(-1!==e.indexOf(t))return!0;else return!1},M=function(t,e,i,n){if(e)for(var r=e.split(","),o=0;o<r.length;o++)if(-1!==t.indexOf(r[o]))return!0;if(n)for(var r=n.split(","),o=0;o<r.length;o++)if(-1!==i.indexOf(r[o]))return!0;return!1},I=function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,0);case 2:return parseInt(Math.random()*(e-t+1)+t,0);default:return 0}},D=function(){var t=new Date,e=t.getMonth()+1,i=t.getDate(),n=t.getHours(),r=t.getMinutes(),o=t.getSeconds();return t.getFullYear()+"-"+(e<10?"0"+e:e)+"-"+(i<10?"0"+i:i)+" "+(n<10?"0"+n:n)+":"+(r<10?"0"+r:r)+":"+(o<10?"0"+o:o)},B=function(t,e){b(t,e,".mip_as_bottm_div")},L=function(t,e){var n="https://imgv2-ssl.g3user.com/api/b.php?uid="+t+"&type=m&callback=?";try{i.getJSON(n,function(t){var n=f(t.m[0].link,t.m[0].pic,"");i(e).empty(),i(e).append(n),d()})}catch(t){}},R={newLoadAd:function(){var t=i(".business_source").attr("sources");if("COMMERCIAL_IAD"===t||"COMMERCIAL_ZWZD"===t||"COMMERCIAL_CAD"===t){if(y(),h(),"COMMERCIAL_ZWZD"===t)t="COOPERATE_COMMERCIAL";u(t,0)}else{var e=i(".business_source_type").attr("sourceType"),n=i(".business_source_type").attr("openId"),r=i(".business_source_type").attr("tags"),o=i(".business_source_type").attr("params");if("COOPERATE_XINYUHENG"===e||"COOPERATE_HUASHENG"===e||"COOPERATE_HUASHENG_QA"===e||"COOPERATE_YOULAI"===e)y(),B(e,n);else if("COOPERATE_SOUTHNETWORK"===e)y(),L(n,".mip_as_bottm_div");else if("COOPERATE_HUASHENG"!==e&&"COOPERATE_HUASHENG_QA"!==e)if(r)w(r,o);u(e,0)}},commercialLoad:function(){if(m()){var t=D();if("2017-07-03 00:00:00"<=t&&t<"2017-07-19 23:59:59"){var e="http://m.iask.sina.com.cn/html/yongyou/index.html";y(),i(".mip_as_bottm_div").append(g());i.ajax({type:"GET",url:"http://m.iask.sina.com.cn/t/mipdf?t=yongyou",dataType:"html",success:function(t){if(t)i(".breadcast_middle_commercial").empty(),i(".breadcast_middle_commercial").append(t)}}),i(".put-test-hh").click(function(){window.open(e)})}}},init:function(){this.newLoadAd(),this.commercialLoad()}};return n.prototype.build=function(){R.init()},n}),define("mip-iask-business",["mip-iask-business/mip-iask-business"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-iask-business",e)}if(window.MIP)require(["mip-iask-business"],function(e){t(window.MIP,e)});else require(["mip","mip-iask-business"],t)}()}});