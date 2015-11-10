(function(){"use strict";var e=window,t={};t.ajax=function(){var t={},n=function(e){var t;try{t=JSON.parse(e.responseText)}catch(n){t=e.responseText}return[t,e]},r=function(t,r){var o={success:function(){},error:function(){}},a=function(){try{return new window.XMLHttpRequest||ActiveXObject}catch(e){}},i=new a("MSXML2.XMLHTTP.3.0");if("string"==typeof r){var s=r;r={},r.url=s}if(r.url=((r.url||location.href)+"").replace(/#.*$/,"").replace(/^\/\//,location.protocol+"//"),r.params){var c=r.url.match(/\?/g)?"&":"?";r.url=r.url+c+e.__.string.serialize(r.params)}if(i.open(t,r.url,!0),t.match(/POST|PUT/g)&&i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.headers)for(var u in r.headers)i.setRequestHeader(u,r.headers[u]);i.onreadystatechange=function(){4===i.readyState&&(i.status>=200&&i.status<300?o.success.apply(o,n(i)):o.error.apply(o,n(i)))},i.send(r.data);var l={success:function(e){return o.success=e,l},error:function(e){return o.error=e,l}};return l};return t.get=function(e){return r("GET",e)},t.post=function(e){return r("POST",e)},t.put=function(e){return r("PUT",e)},t["delete"]=function(e){return r("DELETE",e)},t}(),e.__=e._.extend(e.__||e._,t)}).call(this),function(){"use strict";var e=window,t={};t.memory=function(){var e={},t="localStorage"in window&&null!==window.localStorage?"localStorage":"cookie",n=function(e,t){return moment().add(e,t).unix()};return e.set=function(n,r,o,a){return r?void e[t].set(n,r,o,a):(console.log("LONGDASH: Memory: Can't store empty data."),!1)},e.get=function(n){var r=e[t].get(n,!0);if(r){var o=moment.locale();return moment.locale("en"),console.log('LONGDASH: Memory: "'+n+'" will expire '+moment().add(r.timestamp-moment().unix(),"seconds").fromNow()+" from "+t+"."),moment.locale(o),r.value}return null},e["delete"]=function(n){e[t]["delete"](n)},e.cookie={set:function(e,t,r,o){var a;a=r?"; expires="+n(r,o):"",document.cookie=e+"-expires="+n(r,o)+"; path=/",document.cookie=e+"="+t+a+"; path=/",console.log('LONGDASH: Memory: "'+e+'" [CREATED with cookies]')},get:function(e,t){var n,r={},o=e+"-expires=",a=e+"=",i=document.cookie.split(";");for(n=0;n<i.length;n++){for(var s=i[n];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(o)&&(r.timestamp=s.substring(o.length,s.length)),0===s.indexOf(a))return r.value=s.substring(a.length,s.length),t?r:r.value}return null},"delete":function(t){e.set(t+"-expires","",-1),e.set(t,"",-1),console.log('LONGDASH: Memory: "'+t+'" [DELETED from cookies]')}},e.localStorage={set:function(e,t,r,o){try{window.localStorage.setItem(e,JSON.stringify({value:t,timestamp:n(r,o)}))}catch(a){}console.log('LONGDASH: Memory: "'+e+'" [CREATED with localStorage]')},get:function(t){var n=window.localStorage.getItem(t);if(n){n=JSON.parse(n);var r=moment().unix(),o=n.timestamp;return o>r?n:(console.log('LONGDASH: Memory: "'+t+'" has expired.'),e["delete"](t),null)}return null},"delete":function(e){window.localStorage.removeItem(e),console.log('LONGDASH: Memory: "'+e+'" [DELETED from localStorage]')}},e}(),e.__=e._.extend(e.__||e._,t)}.call(this),function(){"use strict";var e=window,t={};t.string=function(){var t={},n=function(e){return null==e?"":""+e},r=function(e){return n(e).split("")};return t.camelcase=function(t){return t=n(t),e._.trim(t).replace(/[-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})},t.count=function(e,t,r){e=n(e),t=n(t),r=r||!1;var o;return 0===e.length||0===t.length?0:o=r?e.toLowerCase().split(t.toLowerCase()).length-1:e.split(t).length-1},t.quote=function(e,n){return t.surround(e,n||'"')},t.reverse=function(e){return r(e).reverse().join("")},t.serialize=function(e){var t="";for(var n in e)t+=n+"="+encodeURIComponent(e[n])+"&";return t=t.slice(0,-1)},t.slugfy=function(t){var r="ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșšŝťțŭùúüűûñÿýçżźž",o="aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz";r+=r.toUpperCase(),o+=o.toUpperCase();var a=e._.trim(n(t)).toLowerCase();return a=a.replace(/.{1}/g,function(e){var t=r.indexOf(e);return-1===t?e:o[t]}),a=a.replace(/[-_\s]+/g,"-").replace(/[^\w\s-]/g,"-").replace(/-+/g,"-"),e._.endsWith(t,"-")&&(a=a.slice(0,a.length-1)),a},t.surround=function(e,t){return e=n(e),[t,e,t].join("")},t.swapcase=function(e){return e=n(e),e.replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})},t.unquote=function(t){return e._.startsWith(t,'"')&&e._.endsWith(t,'"')?t.slice(1,t.length-1):t},t}(),e.__=e._.extend(e.__||e._,t)}.call(this),function(){"use strict";var e=window,t={};t.url=function(){var e={},t=window.location,n=new RegExp(/\.(asia|aero|arpa|biz|com|co|edu|gov|guru|info|int|jobs|mil|mobi|name|net|org|pro|site|tel|work|web)(?:\.|$)/g),r=new RegExp(/\.(ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|bq|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cw|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|krd|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zr|zw)$/g),o=new RegExp(/\.(([a-z]{2,4})|()\.[a-z]{2,3})(?:\.|$)/g);return e.address=function(){return t.href},e.domain=function(e){var a=t.hostname;return e=e||!0,a.split(".").length<3?a.split(".")[0]:(a=e?a.replace(r,"").replace(n,""):a.replace(o,"").replace(o,""),a=a.split("."),a.length>0?a[a.length-1]:a[0])},e.hash=function(){return t.hash},e.isExternal=function(e){return e.match(t.hostname)?!0:!1},e.param=function(e,n){var r,o=t.search,a=o.substring(1).split("&"),n=n||!1;for(n&&a.reverse(),r=0;r<a.length;r++){var i=a[r].split("=");if(e===i[0])return i[1]}return null},e.path=function(){return t.pathname},e.protocol=function(){return t.protocol},e.search=function(){return t.search},e.subdomain=function(){var e=t.hostname;return e.split(".").length<3?e.split(".")[0]:(e=e.replace(r,"").replace(n,""),e=e.split(".").shift())},e.tld=function(e){var a,i,s=t.hostname,c=[];if(e=e||!0,s.split(".").length<3)return s.split(".")[0];var u=s.split(".").reverse();if(e)for(a=0;a<u.length;a++){var l="."+u[a];if(i=l.match(r)||l.match(n),i&&c.push(i[0].replace(".","")),c.length>1)break}else for(a=0;a<u.length&&(i=("."+u[a]).match(o),i&&c.push(i[0].replace(".","")),!(c.length>1||u[a].length>4));a++);return c},e}(),e.__=e._.extend(e.__||e._,t)}.call(this);
//# sourceMappingURL=longdash.js.map
