define("mip-install-serviceworker/urlRewriter",["require","./util","util"],function(t){function e(t,e,o){var s=this;this.urlMatchExpr=e,this.shellUrl=o,this.shellLoc=n.parseUrl(o),r.event.delegate(document,"a","click",function(t){i.call(s,t)})}function i(t){var e=t.target;if(e&&"A"===e.tagName&&e.href){var i=n.parseUrl(e.href);if(i.origin===this.shellLoc.origin&&i.pathname!==this.shellLoc.pathname&&this.urlMatchExpr.test(i.href)){if(e.getAttribute("i-miphtml-orig-href"))return;if(n.removeFragment(i.href)===n.removeFragment(window.location.href))return;e.setAttribute("i-miphtml-orig-href",e.href),e.href=this.shellUrl+"#href="+encodeURIComponent(i.pathname+i.search+i.hash)}}}var n=t("./util"),r=t("util");return e});