(window.MIP=window.MIP||[]).push({name:"mip-xueyou-ad",func:function(){define("mip-xueyou-ad/mip-xueyou-ad",["require","zepto","customElement"],function(t){var e=t("zepto"),i=navigator.userAgent.toLowerCase(),n=t("customElement").create();return n.prototype.createdCallback=function(){var t=this.element,n=t.getAttribute("type"),o=t.getAttribute("token"),r=e(t),s=[];switch(n){case"alibaba":if(!/micromessenger/.test(i))s.push('<a style="display:none!important" id="tanx-a-mm_10011797_2351313_'+o+'"></a>'),s.push('<script type="text/javascript">'),s.push('tanx_s = document.createElement("script");'),s.push('tanx_s.type = "text/javascript";'),s.push('tanx_s.charset = "gbk";'),s.push('tanx_s.id = "tanx-s-mm_10011797_2351313_'+o+'";'),s.push("tanx_s.async = true;"),s.push('tanx_s.src = "http://ac429.gkstk.com/ex?i=mm_10011797_2351313_'+o+'";'),s.push('tanx_h = document.getElementsByTagName("head")[0];'),s.push("if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);"),s.push("<\/script>");break;case"google":s.push('<ins class="adsbygoogle"'),s.push('     style="display:block"'),s.push('     data-ad-client="ca-pub-2743127670892157"'),s.push('     data-ad-slot="'+o+'"'),s.push('     data-ad-format="auto">'),s.push("</ins>"),s.push("<script>"),s.push("(adsbygoogle = window.adsbygoogle || []).push({});"),s.push("<\/script>"),s.push('<script type="text/javascript">'),s.push('google_s = document.createElement("script");'),s.push('google_s.type = "text/javascript";'),s.push('google_s.id = "google-adsense-'+o+'";'),s.push("google_s.async = true;"),s.push('google_s.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";'),s.push('google_h = document.getElementsByTagName("head")[0];'),s.push("if(google_h)google_h.insertBefore(google_s,google_h.firstChild);"),s.push("<\/script>")}r.append(s.join(""))},n}),define("mip-xueyou-ad",["mip-xueyou-ad/mip-xueyou-ad"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-xueyou-ad",e)}if(window.MIP)require(["mip-xueyou-ad"],function(e){t(window.MIP,e)});else require(["mip","mip-xueyou-ad"],t)}()}});