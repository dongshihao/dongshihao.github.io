define("mip-ck-course-detail/js/tpl-data",["require","zepto"],function(t){var e=t("zepto"),i={},n={courseInfo:function(t){return t.courseid=+t.courseid,t.sid=+t.sid,t.cid=+t.cid,t.userid=+t.uid||0,t.uid=+t.uid||0,t.cost=+t.cost||0,t.type=+t.type,t.ucid=+t.ucid,t},courseAppDownloadInfo:function(t){return t.isInCoursePage=!!t.isInCoursePage,t},playerInfo:function(t){t.hasVideo=!!t.hasVideo,t.boundTips=!!t.boundTips;var e=t.vodSource;if(e)try{var i=new Function("return ["+e+"];");e=i()}catch(t){e=[]}else e=[];return t.vodSource=e,t}};return e("script.tpl-json-data").each(function(t,r){var o,s=e(r),a=s.text(),l=s.attr("data-key");try{o=e.parseJSON(a)}catch(t){o={}}if(n[l])o=n[l](o);i[l]=o}),{get:function(t){return i[t]},set:function(t,e){i[t]=e}}});