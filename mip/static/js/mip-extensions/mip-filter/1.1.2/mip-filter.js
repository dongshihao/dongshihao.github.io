(window.MIP=window.MIP||[]).push({name:"mip-filter",func:function(){define("mip-filter/mip-filter",["require","customElement"],function(t){function e(){var t=this.element;new i({filterWrap:t.querySelector(t.getAttribute("mip-filter-filterWrap")),itemWrap:t.querySelector(t.getAttribute("mip-filter-itemWrap")),enableHash:t.getAttribute("mip-filter-enableHash")}).init()}function i(t){var e=this;if(t&&t.filterWrap&&t.itemWrap){t.mobileWidth=t.mobileWidth||767,t.emptyTip=t.emptyTip||"没有符合的内容",t.enableHash=t.enableHash&&"false"===t.enableHash?!1:!0,this.init=function(){var e="",i="";if(t.enableHash)e=window.location.hash;if(e)i=e.replace("#","");else i="all";var n=t.filterWrap.querySelector('[data-filtertype="'+i+'"]');this.filterSelect(n)},this.filterSelect=function(i){var n=t.filterWrap.querySelector(".active")||"",o=i;if(n)r.removeClass(n,"active");r.addClass(i,"active");var s=o.textContent.replace(o.querySelector(".filter-num").textContent,"");if("查看全部"===s)s="无";if(t.filterWrap.querySelector(".filter-result").innerText="筛选："+s,window.innerWidth<=t.mobileWidth&&n)e.toggleFilter();e.applyFilter(o.dataset.filtertype)},this.toggleFilter=function(){var e=t.filterWrap.querySelector(".filter-list");if(window.innerWidth<=t.mobileWidth){if(r.hasClass(e,"show"))e.style.height="0px";else{e.style.transition="none",e.style.WebkitTransition="none",e.style.height="auto";var i=getComputedStyle(e).height;e.style.height="0px",e.style.transition="height 0.3s",setTimeout(function(){e.style.height=i},10)}r.toggleClass(e,"show")}},this.applyFilter=function(e){for(var i=0,n=0;n<t.itemWrap.querySelectorAll(".filter-item").length;n++){var o=t.itemWrap.querySelectorAll(".filter-item")[n];if(o.dataset.filtertype.match(r.containReg(e))||"all"===e)i++,o.style.display="block";else o.style.display="none"}if(!i){if(!t.itemWrap.querySelector(".filter-emptytip")){var s=document.createElement("div");r.addClass(s,"filter-emptytip"),s.innerHTML=t.emptyTip,t.itemWrap.appendChild(s)}}else{var s=t.itemWrap.querySelector(".filter-emptytip");if(s)t.itemWrap.removeChild(s)}if(t.enableHash)window.location.hash=e;window.scrollTo(0,0)};for(var i=0;i<t.filterWrap.querySelectorAll(".filter-link").length;i++){t.filterWrap.querySelectorAll(".filter-link")[i].addEventListener("click",function(t){e.filterSelect(t.target)})}t.filterWrap.querySelector(".filter-result").addEventListener("click",e.toggleFilter)}}var n=t("customElement").create(),r={containReg:function(t){return new RegExp("(\\s+|^)"+t+"(\\s+|$)")},hasClass:function(t,e){return t.className.match(this.containReg(e))},addClass:function(t,e){if(!this.hasClass(t,e))t.className=(t.className+" "+e).trim()},removeClass:function(t,e){if(this.hasClass(t,e))t.className=t.className.replace(this.containReg(e)," ").trim()},toggleClass:function(t,e){if(this.hasClass(t,e))this.removeClass(t,e);else this.addClass(t,e)}};return n.prototype.build=e,n}),define("mip-filter",["mip-filter/mip-filter"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-filter",e,"mip-filter .filter{display:inline-block;width:250px;float:left}mip-filter .filter ul{list-style:none}mip-filter .filter-result{display:none}mip-filter .filter-link{display:block;padding:0 25px;color:#333;line-height:50px;border-top:1px dotted #e6e6e6}mip-filter .filter-link:hover{background:#f8f8f8;text-decoration:none}mip-filter .filter-link.active{background:#88a0ec;color:white;font-weight:normal}mip-filter .filter-link:last-child{border-bottom:1px dotted #e6e6e6}mip-filter .filter-num{float:right}mip-filter .filter-emptytip{padding-left:10px}@media screen and (max-width:767px){mip-filter .filter{display:block;float:none;width:100%}mip-filter .filter-result{display:block;padding:0 10px;line-height:50px}mip-filter .filter-link{padding:0 10px}mip-filter .filter-list{height:0;overflow:hidden}}")}if(window.MIP)require(["mip-filter"],function(e){t(window.MIP,e)});else require(["mip","mip-filter"],t)}()}});