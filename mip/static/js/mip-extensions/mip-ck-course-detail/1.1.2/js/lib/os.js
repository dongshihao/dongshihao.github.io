"use strict";define("mip-ck-course-detail/js/lib/os",["require"],function(t){function i(t,i){var s=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),o=t.match(/(Android);?[\s\/]+([\d.]+)?/),r=!!t.match(/\(Macintosh\; Intel /),a=t.match(/(iPad).*OS\s([\d_]+)/),l=t.match(/(iPod)(.*OS\s([\d_]+))?/),c=!a&&t.match(/(iPhone\sOS)\s([\d_]+)/),h=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),p=/Win\d{2}|Windows/.test(i),d=t.match(/Windows Phone ([\d.]+)/),u=h&&t.match(/TouchPad/),f=t.match(/Kindle\/([\d.]+)/),m=t.match(/Silk\/([\d._]+)/),g=t.match(/(BlackBerry).*Version\/([\d.]+)/),b=t.match(/(BB10).*Version\/([\d.]+)/),v=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),y=t.match(/PlayBook/),x=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),w=t.match(/Firefox\/([\d.]+)/),k=t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),S=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),E=!x&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),T=E||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);if(n.webkit=!!s)n.version=s[1];if(o)e.android=!0,e.version=o[2];if(c&&!l)e.ios=e.iphone=!0,e.version=c[2].replace(/_/g,".");if(a)e.ios=e.ipad=!0,e.version=a[2].replace(/_/g,".");if(l)e.ios=e.ipod=!0,e.version=l[3]?l[3].replace(/_/g,"."):null;if(d)e.wp=!0,e.version=d[1];if(h)e.webos=!0,e.version=h[2];if(u)e.touchpad=!0;if(g)e.blackberry=!0,e.version=g[2];if(b)e.bb10=!0,e.version=b[2];if(v)e.rimtabletos=!0,e.version=v[2];if(y)n.playbook=!0;if(f)e.kindle=!0,e.version=f[1];if(m)n.silk=!0,n.version=m[1];if(!m&&e.android&&t.match(/Kindle Fire/))n.silk=!0;if(x)n.chrome=!0,n.version=x[1];if(w)n.firefox=!0,n.version=w[1];if(k)e.firefoxos=!0,e.version=k[1];if(S)n.ie=!0,n.version=S[1];if(T&&(r||e.ios||p))if(n.safari=!0,!e.ios)n.version=T[1];if(E)n.webview=!0;e.tablet=!!(a||y||o&&!t.match(/Mobile/)||w&&t.match(/Tablet/)||S&&!t.match(/Phone/)&&t.match(/Touch/)),e.phone=!(e.tablet||e.ipod||!(o||c||h||g||b||x&&t.match(/Android/)||x&&t.match(/CriOS\/([\d.]+)/)||w&&t.match(/Mobile/)||S&&t.match(/Touch/)))}var e={},n={weixin:/MicroMessenger/i.test(navigator.userAgent)};return i(navigator.userAgent,navigator.platform),{os:e,browser:n}});