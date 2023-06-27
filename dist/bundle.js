(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(e){t(1,arguments);var r=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===r?new Date(e.getTime()):"number"==typeof e||"[object Number]"===r?new Date(e):("string"!=typeof e&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function a(e){t(1,arguments);var n=r(e),o=n.getUTCDay(),a=(o<1?7:0)+o-1;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function i(e){t(1,arguments);var n=r(e),o=n.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(o+1,0,4),i.setUTCHours(0,0,0,0);var u=a(i),s=new Date(0);s.setUTCFullYear(o,0,4),s.setUTCHours(0,0,0,0);var d=a(s);return n.getTime()>=u.getTime()?o+1:n.getTime()>=d.getTime()?o:o-1}var u={};function s(){return u}function d(e,n){var a,i,u,d,c,l,m,h;t(1,arguments);var f=s(),g=o(null!==(a=null!==(i=null!==(u=null!==(d=null==n?void 0:n.weekStartsOn)&&void 0!==d?d:null==n||null===(c=n.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==u?u:f.weekStartsOn)&&void 0!==i?i:null===(m=f.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==a?a:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=r(e),w=v.getUTCDay(),p=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-p),v.setUTCHours(0,0,0,0),v}function c(e,n){var a,i,u,c,l,m,h,f;t(1,arguments);var g=r(e),v=g.getUTCFullYear(),w=s(),p=o(null!==(a=null!==(i=null!==(u=null!==(c=null==n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null==n||null===(l=n.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==u?u:w.firstWeekContainsDate)&&void 0!==i?i:null===(h=w.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==a?a:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(v+1,0,p),y.setUTCHours(0,0,0,0);var b=d(y,n),C=new Date(0);C.setUTCFullYear(v,0,p),C.setUTCHours(0,0,0,0);var T=d(C,n);return g.getTime()>=b.getTime()?v+1:g.getTime()>=T.getTime()?v:v-1}function l(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const m=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return l("yy"===e?r%100:r,e.length)},h=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):l(n+1,2)},f=function(t,e){return l(t.getUTCDate(),e.length)},g=function(t,e){return l(t.getUTCHours()%12||12,e.length)},v=function(t,e){return l(t.getUTCHours(),e.length)},w=function(t,e){return l(t.getUTCMinutes(),e.length)},p=function(t,e){return l(t.getUTCSeconds(),e.length)},y=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return l(Math.floor(r*Math.pow(10,n-3)),e.length)};var b={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return m(t,e)},Y:function(t,e,n,r){var o=c(t,r),a=o>0?o:1-o;return"YY"===e?l(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):l(a,e.length)},R:function(t,e){return l(i(t),e.length)},u:function(t,e){return l(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return l(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return l(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return h(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return l(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,a,i){var u=function(e,n){t(1,arguments);var a=r(e),i=d(a,n).getTime()-function(e,n){var r,a,i,u,l,m,h,f;t(1,arguments);var g=s(),v=o(null!==(r=null!==(a=null!==(i=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(l=n.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==a?a:null===(h=g.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==r?r:1),w=c(e,n),p=new Date(0);return p.setUTCFullYear(w,0,v),p.setUTCHours(0,0,0,0),d(p,n)}(a,n).getTime();return Math.round(i/6048e5)+1}(e,i);return"wo"===n?a.ordinalNumber(u,{unit:"week"}):l(u,n.length)},I:function(e,n,o){var u=function(e){t(1,arguments);var n=r(e),o=a(n).getTime()-function(e){t(1,arguments);var n=i(e),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),a(r)}(n).getTime();return Math.round(o/6048e5)+1}(e);return"Io"===n?o.ordinalNumber(u,{unit:"week"}):l(u,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):f(t,e)},D:function(e,n,o){var a=function(e){t(1,arguments);var n=r(e),o=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var a=o-n.getTime();return Math.floor(a/864e5)+1}(e);return"Do"===n?o.ordinalNumber(a,{unit:"dayOfYear"}):l(a,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var o=t.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return l(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var o=t.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return l(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return l(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,o=t.getUTCHours();switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,o=t.getUTCHours();switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return g(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):v(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):l(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):l(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):w(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):p(t,e)},S:function(t,e){return y(t,e)},X:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return T(o);case"XXXX":case"XX":return S(o);default:return S(o,":")}},x:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return T(o);case"xxxx":case"xx":return S(o);default:return S(o,":")}},O:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+C(o,":");default:return"GMT"+S(o,":")}},z:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+C(o,":");default:return"GMT"+S(o,":")}},t:function(t,e,n,r){var o=r._originalDate||t;return l(Math.floor(o.getTime()/1e3),e.length)},T:function(t,e,n,r){return l((r._originalDate||t).getTime(),e.length)}};function C(t,e){var n=t>0?"-":"+",r=Math.abs(t),o=Math.floor(r/60),a=r%60;if(0===a)return n+String(o);var i=e||"";return n+String(o)+i+l(a,2)}function T(t,e){return t%60==0?(t>0?"-":"+")+l(Math.abs(t)/60,2):S(t,e)}function S(t,e){var n=e||"",r=t>0?"-":"+",o=Math.abs(t);return r+l(Math.floor(o/60),2)+n+l(o%60,2)}const M=b;var k=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},x=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},D={p:x,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],o=r[1],a=r[2];if(!a)return k(t,e);switch(o){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",k(o,e)).replace("{{time}}",x(a,e))}};const L=D;var E=["D","DD"],P=["YY","YYYY"];function U(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function j(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var W,Y={date:j({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:j({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:j({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},O={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function N(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=null!=n&&n.width?String(n.width):o;r=t.formattingValues[a]||t.formattingValues[o]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function H(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;var i,u=a[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(s):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(s);return i=t.valueCallback?t.valueCallback(d):d,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}const F={code:"en-US",formatDistance:function(t,e,n){var r,o=q[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Y,formatRelative:function(t,e,n,r){return O[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:N({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:N({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:N({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:N({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:N({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(W={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(W.matchPattern);if(!n)return null;var r=n[0],o=t.match(W.parsePattern);if(!o)return null;var a=W.valueCallback?W.valueCallback(o[0]):o[0];return{value:a=e.valueCallback?e.valueCallback(a):a,rest:t.slice(r.length)}}),era:H({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:H({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:H({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:H({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:H({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var A=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Q=/^'([^]*?)'?$/,B=/''/g,G=/[a-zA-Z]/;function X(n,a,i){var u,d,c,l,m,h,f,g,v,w,p,y,b,C,T,S,k,x;t(2,arguments);var D=String(a),q=s(),j=null!==(u=null!==(d=null==i?void 0:i.locale)&&void 0!==d?d:q.locale)&&void 0!==u?u:F,W=o(null!==(c=null!==(l=null!==(m=null!==(h=null==i?void 0:i.firstWeekContainsDate)&&void 0!==h?h:null==i||null===(f=i.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:q.firstWeekContainsDate)&&void 0!==l?l:null===(v=q.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==c?c:1);if(!(W>=1&&W<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Y=o(null!==(p=null!==(y=null!==(b=null!==(C=null==i?void 0:i.weekStartsOn)&&void 0!==C?C:null==i||null===(T=i.locale)||void 0===T||null===(S=T.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==b?b:q.weekStartsOn)&&void 0!==y?y:null===(k=q.locale)||void 0===k||null===(x=k.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==p?p:0);if(!(Y>=0&&Y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!j.localize)throw new RangeError("locale must contain localize property");if(!j.formatLong)throw new RangeError("locale must contain formatLong property");var O=r(n);if(!function(n){if(t(1,arguments),!function(n){return t(1,arguments),n instanceof Date||"object"===e(n)&&"[object Date]"===Object.prototype.toString.call(n)}(n)&&"number"!=typeof n)return!1;var o=r(n);return!isNaN(Number(o))}(O))throw new RangeError("Invalid time value");var N=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(O),H=function(e,n){return t(2,arguments),function(e,n){t(2,arguments);var a=r(e).getTime(),i=o(n);return new Date(a+i)}(e,-o(n))}(O,N),X={firstWeekContainsDate:W,weekStartsOn:Y,locale:j,_originalDate:O};return D.match(z).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,L[e])(t,j.formatLong):t})).join("").match(A).map((function(t){if("''"===t)return"'";var e,r,o=t[0];if("'"===o)return(r=(e=t).match(Q))?r[1].replace(B,"'"):e;var u,s=M[o];if(s)return null!=i&&i.useAdditionalWeekYearTokens||(u=t,-1===P.indexOf(u))||U(t,a,String(n)),null!=i&&i.useAdditionalDayOfYearTokens||!function(t){return-1!==E.indexOf(t)}(t)||U(t,a,String(n)),s(H,t,j.localize,X);if(o.match(G))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return t})).join("")}class R{static todos=[];constructor(t,e,n,r,o,a){this.todoProject=t,this.title=e,this.description=n,this.dueDate=new Date(r),this.notes=o,this.priority=a,this.isComplete=!1,this.constructor.todos.push(this)}}class I{static projects=[];constructor(t,e){this.projectTitle=t,this.dueDate=new Date(e),this.projectTodoList=[],this.isComplete=!1,this.constructor.projects.push(this)}toggleCompletion(){this.isComplete?this.isComplete=!1:this.isComplete=!0}addTodoToProject(t){t.projectTitle===this.projectTitle&&this.projectTodoList.push(t)}}function J(t){const e=document.querySelector(".main-section"),n=document.createElement("div");n.classList.add("todo-container"),e.appendChild(n);const r=document.createElement("div");r.classList.add("upper-container"),n.appendChild(r);const o=document.createElement("span");o.classList.add("todo-is-complete"),o.setAttribute("title","Click to complete"),r.appendChild(o),o.addEventListener("click",(()=>{!function(t,e){const n=R.todos.indexOf(t);-1!==n&&R.todos.splice(n,1),e.remove()}(t,n)}));const a=document.createElement("time");a.classList.add("todo-due-date"),a.setAttribute("datetime",t.dueDate.toISOString()),a.innerHTML=X(t.dueDate,"EEE d MMM"),r.appendChild(a);const i=document.createElement("h2");i.classList.add("todo-title"),i.textContent=t.title,n.appendChild(i);const u=document.createElement("p");u.classList.add("todo-description"),u.textContent=t.description,n.appendChild(u),"High"===t.priority?o.classList.add("high-priority"):"Medium"===t.priority?o.classList.add("medium-priority"):"Low"===t.priority&&o.classList.add("low-priority"),function(t){const e=document.querySelector("#expanded-todo-overlay"),n=document.querySelector(".expanded-todo");t.addEventListener("click",(t=>{t.stopPropagation(),n.classList.toggle("expanded-todo-hidden"),e.classList.toggle("overlay-on");const r=t.target.closest(".todo-container").querySelector(".todo-title").textContent;R.todos.forEach((t=>{t.title===r&&function(t,e,n){t.innerHTML="";const r=document.createElement("h1");r.classList.add("todo-project"),r.textContent=e.todoProject,t.appendChild(r);const o=document.createElement("input");o.classList.add("todo-due-date"),o.setAttribute("type","date"),o.value=e.dueDate.toISOString().split("T")[0],t.appendChild(o);const a=document.createElement("h2");a.classList.add("todo-title"),a.contentEditable=!0,a.textContent=e.title,t.appendChild(a);const i=document.createElement("p");i.classList.add("todo-description"),i.textContent=e.description,t.appendChild(i);const u=document.createElement("p");u.classList.add("todo-notes"),u.textContent=e.notes,t.appendChild(u);const s=document.createElement("button");s.classList.add("submit-button"),s.textContent="APPLY",t.appendChild(s);const d=a.textContent;s.addEventListener("click",(()=>{const e=a.textContent.trim();R.todos.forEach((t=>{console.log(t.title),console.log(a.textContent),t.title===d&&(t.title=e,console.log(R.todos))})),V(),t.classList.toggle("expanded-todo-hidden"),n.classList.toggle("overlay-on")}))}(n,t,e)}))})),e.addEventListener("click",(t=>{t.stopPropagation(),t.target.classList.contains("overlay")&&(n.classList.add("expanded-todo-hidden"),e.classList.toggle("overlay-on"))}))}(n)}function _(){document.querySelectorAll(".todo-container").forEach((t=>{t.remove()}))}function V(){_(),R.todos.forEach((t=>{J(t)}))}!function(){const t=document.querySelector(".create-project-container"),e=document.querySelector("#project-overlay"),n=document.querySelector(".create-project-form-container"),r=document.querySelector("#project-form-submit");t.addEventListener("click",(()=>{n.classList.toggle("form-hidden"),e.classList.toggle("overlay-on")})),e.addEventListener("click",(t=>{t.target.classList.contains("overlay-on")&&(n.classList.add("form-hidden"),e.classList.toggle("overlay-on"))})),r.addEventListener("click",(()=>{n.classList.add("form-hidden"),e.classList.toggle("overlay-on")}))}(),function(){const t=document.querySelector(".create-todo-container"),e=document.querySelector("#todo-overlay"),n=document.querySelector(".create-todo-form-container"),r=document.querySelector("#todo-form-submit");t.addEventListener("click",(()=>{n.classList.toggle("form-hidden"),e.classList.toggle("overlay-on")})),e.addEventListener("click",(t=>{t.target.classList.contains("overlay-on")&&(n.classList.add("form-hidden"),e.classList.toggle("overlay-on"))})),r.addEventListener("click",(()=>{n.classList.add("form-hidden"),e.classList.toggle("overlay-on")}))}(),document.querySelector(".main-list-container").addEventListener("click",V),document.querySelector("#create-todo-form").addEventListener("submit",(function(t){t.preventDefault();const e=document.querySelector("#todo-project-title").value,n=document.querySelector("#todo-title").value,r=document.querySelector("#todo-description").value,o=document.querySelector("#todo-due-date").value,a=document.querySelector("#todo-notes").value,i=document.querySelector('input[name="priority"]:checked').value;new R(e,n,r,o,a,i),V()})),document.querySelector("#create-project-form").addEventListener("submit",(function(t){t.preventDefault();const e=document.querySelector("#project-title").value,n=document.querySelector("#project-due-date").value;new I(e,n),function(){const t=document.querySelector(".all-projects-container"),e=document.getElementById("todo-project-title");t.innerHTML="",e.innerHTML="";const n=document.createElement("option");n.value="",n.textContent="",e.appendChild(n),I.projects.forEach((t=>{!function(t){const e=document.querySelector(".all-projects-container"),n=document.createElement("li");n.classList.add("project-list"),n.textContent=t.projectTitle,e.appendChild(n)}(t),function(t){const e=document.getElementById("todo-project-title"),n=document.createElement("option");n.value=t.projectTitle,n.textContent=t.projectTitle,e.appendChild(n)}(t)})),document.querySelectorAll(".project-list").forEach((t=>{t.addEventListener("click",(t=>{_();const e=t.target.innerText;R.todos.filter((t=>e===t.todoProject)).forEach((t=>{J(t)}))}))}))}()}))})();