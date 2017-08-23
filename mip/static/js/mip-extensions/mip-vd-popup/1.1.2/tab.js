define("mip-vd-popup/tab",[],function(){function t(t,n,o,r,s){var a=0;if(t<n);else if(t>=r-n)a=o.parent().offset().width;else a=o.offset().left-o.parent().offset().left-o.width();if(!i)if(s)e(o.parent().parent().scrollLeft(),a,o.parent().parent());else o.parent().parent().scrollLeft(a)}function e(t,e,n){var o=(e-t)/8;i=setInterval(function(){var t=n.scrollLeft();if(o>0&&t>=e||0==o)o=0,clearInterval(i);else if(o<0&&t<=e)o=0,clearInterval(i);n.scrollLeft(t+o)},30),setTimeout(function(){clearInterval(i),n.scrollLeft(e),i=null},270)}var i,n=function(){},o=function(t){var e=this,i=$(e.panel);this.toggle=i.find("."+e.toggleClass),this.view=i.find("."+e.viewClass),this.wrapper=i.find("."+e.navWrapperClass),this.navs=this.wrapper.find("."+e.navClass),this.conts=i.find("."+e.contClass),this.sum=this.navs.length,this.tabScroll=void 0,l.call(this),this.allowScroll&&this.view.length&&s.call(this),this.toggleMore&&this.allowScroll&&this.view.length&&a.call(this)},r=function(t){var e=this;if(t.children().eq(0).wrap('<div class="mip-vd-tabs-scroll-touch"></div>'),t.children().eq(1).hasClass(e.toggleClass))t.find("."+e.navWrapperClass).append('<div class="mip-vd-tabs-nav-toggle-holder"></div>');return t},s=function(){var e=this;if(e.tabScroll=r.call(e,e.view),e.current>0&&e.current<e.sum){var i=Math.min(e.current+1,e.sum-1);if(e.navs.eq(i).length&&e.navs.eq(i).position().left>e.view.width()-29)t(i,1,e.navs.eq(e.current),e.navs.length,!1)}if("function"==typeof e.onTabScrollEnd)e.tabScroll.on("scrollEnd",function(){if(!this.customFlag||!this.customFlag.autoScroll)e.onTabScrollEnd.call(e,this)})},a=function(){function t(){o.empty(),n.hide(),i.toggle.css({"-webkit-transform":"scaleY(1)",transform:"scaleY(1)"}),i.toggleState=0}function e(){o.html(i.navs.clone()),n.append(o),i.view.after(n.show()),i.toggle.css({"-webkit-transform":"scaleY(1)",transform:"scaleY(-1)"}),i.toggleState=1}var i=this,n=$('<div class="'+i.layerClass+'"><p>'+i.toggleLabel+"</p></div>"),o=$('<ul class="'+i.layerUlClass+'"></ul>');i.toggleState=0,o.on("click","."+i.navClass,function(){var e=$(this);i.navs.eq(e.attr("data-tid")).trigger("click"),t()}),i.toggle.on("click",function(){if(0==i.toggleState)e();else t()})},l=function(){var e=this;$.each(e.navs,function(i,o){var r=$(o);if(r.hasClass(e.currentClass))e.current=i;r.addClass(e.logClass),r.attr("data-tid",i),r.on("click",function(){var i=parseInt($(this).attr("data-tid"));if(i!==e.current){if(e.last=e.current,e.current=i,e.hideTab(e.last),e.showTab(e.current),e.onResetChange==n)e.hideContent(e.last),e.showContent(e.current),e.onChange.call(e,e.current,e.conts[e.current]);else e.onResetChange.call(e,e.current);if(e.tabScroll)t(e.current+1,1,r,e.navs.length,!0)}})}),$.each(e.conts,function(t,i){if(t==e.current)e.showTab(t),e.showContent(t);else e.hideTab(t),e.hideContent(t)})},c=function(t,e){e=e||{},this.panel=t,this.current=e.current||0,this.currentClass=e.currentClass||"c-tabs-nav-selected",this.navWrapperClass=e.navWrapperClass||"c-tabs-nav",this.navClass=e.navClass||"c-tabs-nav-li",this.contClass=e.contClass||"c-tabs-content",this.viewClass=e.viewClass||"c-tabs-nav-view",this.toggleClass=e.toggleClass||"c-tabs-nav-toggle",this.layerClass=e.layerClass||"c-tabs-nav-layer",this.layerUlClass=e.layerUlClass||"c-tabs-nav-layer-ul",this.allowScroll=e.allowScroll||!1,this.toggleMore=e.toggleMore||!1,this.toggleLabel=e.toggleLabel||"请选择",this.logClass=e.logClass||"WA_LOG_TAB",this.scrollSize=e.scrollSize||"-40",this.navs=[],this.seps=[],this.conts=[],this.sum=0,this.last=null,this.onChange=e.onChange||n,this.onResetChange=e.onResetChange||n,this.onTabScrollEnd=e.onTabScrollEnd,t&&o.call(this,e)};return $.extend(c.prototype,{showContent:function(t){if(this.conts[t])$(this.conts[t]).show()},hideContent:function(t){var e=this.conts[t];if(e)$(e).hide()},showTab:function(t){var e=this,i=e.navs;e.seps;$(i[t]).addClass(e.currentClass)},hideTab:function(t){var e=this,i=e.navs;e.seps;$(i[t]).removeClass(e.currentClass)}}),c});