(window.MIP=window.MIP||[]).push({name:"mip-xem-review",func:function(){define("mip-xem-review/mip-xem-review",["require","jquery","customElement"],function(t){var e=t("jquery"),i=t("customElement").create();return i.prototype.build=function(){function t(){a.button("loading"),e.post(r,{yid:n,listofreadcid:i.getAttribute("listofreadcid"),formhash:o,reviewsubmit:!0},function(t,e){if(t)s.html(function(){var e=","+t.tid,n=i.getAttribute("listofreadcid");return s.data("listofreadcid",n+e),a.button("reset"),t.message})},"json")}var i=this.element,n=i.getAttribute("yid"),o=i.getAttribute("formhash"),r=i.getAttribute("url"),s=e(i),a=e(".nextreview");e(document).ready(function(){t()}),a.on("click",function(){t()})},i}),define("mip-xem-review",["mip-xem-review/mip-xem-review"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-xem-review",e)}if(window.MIP)require(["mip-xem-review"],function(e){t(window.MIP,e)});else require(["mip","mip-xem-review"],t)}()}});