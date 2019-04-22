window.TILE_VERSION = { "ditu": { "normal": { "version": "088", "updateDate": "20181205" }, "satellite": { "version": "009", "updateDate": "20181205" }, "normalTraffic": { "version": "081", "updateDate": "20181205" }, "satelliteTraffic": { "version": "083", "updateDate": "20181205" }, "mapJS": { "version": "104", "updateDate": "20181205" }, "satelliteStreet": { "version": "083", "updateDate": "20181205" }, "panoClick": { "version": "1033", "updateDate": "20181128" }, "panoUdt": { "version": "20181128", "updateDate": "20181128" }, "panoSwfAPI": { "version": "20150123", "updateDate": "20150123" }, "panoSwfPlace": { "version": "20141112", "updateDate": "20141112" }, "earthVector": { "version": "001", "updateDate": "20181205" } }, "webapp": { "high_normal": { "version": "001", "updateDate": "20181205" }, "lower_normal": { "version": "002", "updateDate": "20181205" } }, "api_for_mobile": { "vector": { "version": "002", "updateDate": "20181205" }, "vectorIcon": { "version": "002", "updateDate": "20181205" } } };
window.BMAP_AUTHENTIC_KEY = "E4805d16520de693a3fe707cdc962045";
(function() {
    function aa(a) { throw a; }
    var l = void 0,
        p = !0,
        q = null,
        t = !1;

    function u() { return function() {} }

    function ba(a) { return function(b) { this[a] = b } }

    function w(a) { return function() { return this[a] } }

    function ca(a) { return function() { return a } }
    var da, ea = [];

    function ga(a) { return function() { return ea[a].apply(this, arguments) } }

    function ha(a, b) { return ea[a] = b }
    var ia, z = ia = z || { version: "1.3.4" };
    z.aa = "$BAIDU$";
    window[z.aa] = window[z.aa] || {};
    z.object = z.object || {};
    z.extend = z.object.extend = function(a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]); return a };
    z.D = z.D || {};
    z.D.$ = function(a) { return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : q };
    z.$ = z.zc = z.D.$;
    z.D.U = function(a) {
        a = z.D.$(a);
        if (a === q) return a;
        a.style.display = "none";
        return a
    };
    z.U = z.D.U;
    z.lang = z.lang || {};
    z.lang.gg = function(a) { return "[object String]" == Object.prototype.toString.call(a) };
    z.gg = z.lang.gg;
    z.lang.em = function(a) { if ("[object Object]" === Object.prototype.toString.call(a)) { for (var b in a) return t; return p } return t };
    z.em = z.lang.em;
    z.D.vj = function(a) { return z.lang.gg(a) ? document.getElementById(a) : a };
    z.vj = z.D.vj;
    z.D.getElementsByClassName = function(a, b) {
        var c;
        if (a.getElementsByClassName) c = a.getElementsByClassName(b);
        else {
            var e = a;
            e == q && (e = document);
            c = [];
            var e = e.getElementsByTagName("*"),
                f = e.length,
                g = RegExp("(^|\\s)" + b + "(\\s|$)"),
                i, k;
            for (k = i = 0; i < f; i++) g.test(e[i].className) && (c[k] = e[i], k++)
        }
        return c
    };
    z.getElementsByClassName = z.D.getElementsByClassName;
    z.D.contains = function(a, b) {
        var c = z.D.vj,
            a = c(a),
            b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    };
    z.ca = z.ca || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (z.ca.ia = z.ia = document.documentMode || +RegExp.$1);
    var ja = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", rowspan: "rowSpan", valign: "vAlign", usemap: "useMap", frameborder: "frameBorder" };
    8 > z.ca.ia ? (ja["for"] = "htmlFor", ja["class"] = "className") : (ja.htmlFor = "for", ja.className = "class");
    z.D.yF = ja;
    z.D.fE = function(a, b, c) {
        a = z.D.$(a);
        if (a === q) return a;
        if ("style" == b) a.style.cssText = c;
        else {
            b = z.D.yF[b] || b;
            a.setAttribute(b, c)
        }
        return a
    };
    z.fE = z.D.fE;
    z.D.gE = function(a, b) { a = z.D.$(a); if (a === q) return a; for (var c in b) z.D.fE(a, c, b[c]); return a };
    z.gE = z.D.gE;
    z.Ak = z.Ak || {};
    (function() {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        z.Ak.trim = function(b) { return ("" + b).replace(a, "") }
    })();
    z.trim = z.Ak.trim;
    z.Ak.oo = function(a, b) {
        var a = "" + a,
            c = Array.prototype.slice.call(arguments, 1),
            e = Object.prototype.toString;
        if (c.length) { c = c.length == 1 ? b !== q && /\[object Array\]|\[object Object\]/.test(e.call(b)) ? b : c : c; return a.replace(/#\{(.+?)\}/g, function(a, b) { var i = c[b]; "[object Function]" == e.call(i) && (i = i(b)); return "undefined" == typeof i ? "" : i }) }
        return a
    };
    z.oo = z.Ak.oo;
    z.D.nc = function(a, b) {
        a = z.D.$(a);
        if (a === q) return a;
        for (var c = a.className.split(/\s+/), e = b.split(/\s+/), f, g = e.length, i, k = 0; k < g; ++k) {
            i = 0;
            for (f = c.length; i < f; ++i)
                if (c[i] == e[k]) { c.splice(i, 1); break }
        }
        a.className = c.join(" ");
        return a
    };
    z.nc = z.D.nc;
    z.D.Qw = function(a, b, c) {
        a = z.D.$(a);
        if (a === q) return a;
        var e;
        if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
        else {
            e = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                e.selectNodeContents(a);
                e.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                e[b ? "setStartBefore" : "setEndAfter"](a);
                e.collapse(b)
            }
            e.insertNode(e.createContextualFragment(c))
        }
        return a
    };
    z.Qw = z.D.Qw;
    z.D.show = function(a) {
        a = z.D.$(a);
        if (a === q) return a;
        a.style.display = "";
        return a
    };
    z.show = z.D.show;
    z.D.DC = function(a) { a = z.D.$(a); return a === q ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document };
    z.D.Za = function(a, b) {
        a = z.D.$(a);
        if (a === q) return a;
        for (var c = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, i = c.length; g < i; g++) f.indexOf(" " + c[g] + " ") < 0 && (e = e + (" " + c[g]));
        a.className = e;
        return a
    };
    z.Za = z.D.Za;
    z.D.IA = z.D.IA || {};
    z.D.sl = z.D.sl || [];
    z.D.sl.filter = function(a, b, c) {
        for (var e = 0, f = z.D.sl, g; g = f[e]; e++)
            if (g = g[c]) b = g(a, b);
        return b
    };
    z.Ak.oN = function(a) { return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) { return a.charAt(1).toUpperCase() }) };
    z.D.$Z = function(a) { z.D.gs(a, "expand") ? z.D.nc(a, "expand") : z.D.Za(a, "expand") };
    z.D.gs = function(a) {
        if (arguments.length <= 0 || typeof a === "function") return this;
        if (this.size() <= 0) return t;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
            b = a.split(" "),
            c;
        z.forEach(this, function(a) {
            for (var a = a.className, f = 0; f < b.length; f++)
                if (!~(" " + a + " ").indexOf(" " + b[f] + " ")) { c = t; return } c !== t && (c = p)
        });
        return c
    };
    z.D.fg = function(a, b) {
        var c = z.D,
            a = c.$(a);
        if (a === q) return a;
        var b = z.Ak.oN(b),
            e = a.style[b];
        if (!e) var f = c.IA[b],
            e = a.currentStyle || (z.ca.ia ? a.style : getComputedStyle(a, q)),
            e = f && f.get ? f.get(a, e) : e[f || b];
        if (f = c.sl) e = f.filter(b, e, "get");
        return e
    };
    z.fg = z.D.fg;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (z.ca.opera = +RegExp.$1);
    z.ca.cL = /webkit/i.test(navigator.userAgent);
    z.ca.xX = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    z.ca.rD = "CSS1Compat" == document.compatMode;
    z.D.fa = function(a) {
        a = z.D.$(a);
        if (a === q) return a;
        var b = z.D.DC(a),
            c = z.ca,
            e = z.D.fg;
        c.xX > 0 && b.getBoxObjectFor && e(a, "position");
        var f = { left: 0, top: 0 },
            g;
        if (a == (c.ia && !c.rD ? b.body : b.documentElement)) return f;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            f.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            f.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            f.left = f.left - b.documentElement.clientLeft;
            f.top = f.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(e(a, "borderLeftWidth"));
            e = parseInt(e(a, "borderTopWidth"));
            if (c.ia && !c.rD) {
                f.left = f.left - (isNaN(b) ? 2 : b);
                f.top = f.top - (isNaN(e) ? 2 : e)
            }
        } else {
            g = a;
            do {
                f.left = f.left + g.offsetLeft;
                f.top = f.top + g.offsetTop;
                if (c.cL > 0 && e(g, "position") == "fixed") {
                    f.left = f.left + b.body.scrollLeft;
                    f.top = f.top + b.body.scrollTop;
                    break
                }
                g = g.offsetParent
            } while (g && g != a);
            if (c.opera > 0 || c.cL > 0 && e(a, "position") == "absolute") f.top = f.top - b.body.offsetTop;
            for (g = a.offsetParent; g && g != b.body;) {
                f.left = f.left - g.scrollLeft;
                if (!c.opera || g.tagName != "TR") f.top = f.top - g.scrollTop;
                g = g.offsetParent
            }
        }
        return f
    };
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (z.ca.Je = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (z.ca.$0 = p);
    var la = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) && !/chrome/i.test(la) && (z.ca.Bx = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (z.ca.Kv = +RegExp.$1);
    z.cc = z.cc || {};
    z.cc.Jb = function(a, b) {
        var c, e, f = a.length;
        if ("function" == typeof b)
            for (e = 0; e < f; e++) {
                c = a[e];
                c = b.call(a, c, e);
                if (c === t) break
            }
        return a
    };
    z.Jb = z.cc.Jb;
    z.lang.aa = function() { return "TANGRAM__" + (window[z.aa]._counter++).toString(36) };
    window[z.aa]._counter = window[z.aa]._counter || 1;
    window[z.aa]._instances = window[z.aa]._instances || {};
    z.lang.rs = function(a) { return "[object Function]" == Object.prototype.toString.call(a) };
    z.lang.Ca = function(a) {
        this.aa = a || z.lang.aa();
        window[z.aa]._instances[this.aa] = this
    };
    window[z.aa]._instances = window[z.aa]._instances || {};
    z.lang.Ca.prototype.Jh = ga(0);
    z.lang.Ca.prototype.toString = function() { return "[object " + (this.mP || "Object") + "]" };
    z.lang.Lt = function(a, b) {
        this.type = a;
        this.returnValue = p;
        this.target = b || q;
        this.currentTarget = q
    };
    z.lang.Ca.prototype.addEventListener = function(a, b, c) {
        if (z.lang.rs(b)) {
            !b.Kk && (b.Kk = {});
            !this.oi && (this.oi = {});
            var e = this.oi,
                f;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                f = b.Hw = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof e[a] != "object" && (e[a] = {});
            typeof b.Kk[a] != "object" && (b.Kk[a] = {});
            f = f || z.lang.aa();
            b.Kk[a].Hw = f;
            e[a][f] = b
        }
    };
    z.lang.Ca.prototype.removeEventListener = function(a, b) {
        a.indexOf("on") != 0 && (a = "on" + a);
        if (z.lang.rs(b)) {
            if (!b.Kk || !b.Kk[a]) return;
            b = b.Kk[a].Hw
        } else if (!z.lang.gg(b)) return;
        !this.oi && (this.oi = {});
        var c = this.oi;
        c[a] && c[a][b] && delete c[a][b]
    };
    z.lang.Ca.prototype.dispatchEvent = function(a, b) {
        z.lang.gg(a) && (a = new z.lang.Lt(a));
        !this.oi && (this.oi = {});
        var b = b || {},
            c;
        for (c in b) a[c] = b[c];
        var e = this.oi,
            f = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        f.indexOf("on") != 0 && (f = "on" + f);
        z.lang.rs(this[f]) && this[f].apply(this, arguments);
        if (typeof e[f] == "object")
            for (c in e[f]) e[f][c].apply(this, arguments);
        return a.returnValue
    };
    z.lang.sa = function(a, b, c) {
        var e, f, g = a.prototype;
        f = new Function;
        f.prototype = b.prototype;
        f = a.prototype = new f;
        for (e in g) f[e] = g[e];
        a.prototype.constructor = a;
        a.NZ = b.prototype;
        if ("string" == typeof c) f.mP = c
    };
    z.sa = z.lang.sa;
    z.lang.Hc = function(a) { return window[z.aa]._instances[a] || q };
    z.platform = z.platform || {};
    z.platform.WK = /macintosh/i.test(navigator.userAgent);
    z.platform.c3 = /MicroMessenger/i.test(navigator.userAgent);
    z.platform.dL = /windows/i.test(navigator.userAgent);
    z.platform.HX = /x11/i.test(navigator.userAgent);
    z.platform.aj = /android/i.test(navigator.userAgent);
    /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (z.platform.aB = z.aB = RegExp.$1);
    z.platform.zX = /ipad/i.test(navigator.userAgent);
    z.platform.nD = /iphone/i.test(navigator.userAgent);

    function ma(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) { a.touches = []; for (var c = 0; c < b.touches.length; c++) a.touches.push({ clientX: b.touches[c].clientX, clientY: b.touches[c].clientY, screenX: b.touches[c].screenX, screenY: b.touches[c].screenY, pageX: b.touches[c].pageX, pageY: b.touches[c].pageY, target: b.touches[c].target, identifier: b.touches[c].identifier }) }
        if (b.changedTouches) { a.changedTouches = []; for (c = 0; c < b.changedTouches.length; c++) a.changedTouches.push({ clientX: b.changedTouches[c].clientX, clientY: b.changedTouches[c].clientY, screenX: b.changedTouches[c].screenX, screenY: b.changedTouches[c].screenY, pageX: b.changedTouches[c].pageX, pageY: b.changedTouches[c].pageY, target: b.changedTouches[c].target, identifier: b.changedTouches[c].identifier }) }
        if (b.targetTouches) { a.targetTouches = []; for (c = 0; c < b.targetTouches.length; c++) a.targetTouches.push({ clientX: b.targetTouches[c].clientX, clientY: b.targetTouches[c].clientY, screenX: b.targetTouches[c].screenX, screenY: b.targetTouches[c].screenY, pageX: b.targetTouches[c].pageX, pageY: b.targetTouches[c].pageY, target: b.targetTouches[c].target, identifier: b.targetTouches[c].identifier }) } a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    z.lang.aw = function(a) {
        var b = window[z.aa];
        b.sR && delete b.sR[a]
    };
    z.event = {};
    z.M = z.event.M = function(a, b, c) {
        if (!(a = z.$(a))) return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    };
    z.Xc = z.event.Xc = function(a, b, c) {
        if (!(a = z.$(a))) return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    };
    z.D.gs = function(a, b) { if (!a || !a.className || typeof a.className != "string") return t; var c = -1; try { c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)")) } catch (e) { return t } return c > -1 };
    z.JJ = function() {
        function a(a) { document.addEventListener && (this.element = a, this.MJ = this.gk ? "touchstart" : "mousedown", this.lC = this.gk ? "touchmove" : "mousemove", this.kC = this.gk ? "touchend" : "mouseup", this.Xg = t, this.lt = this.kt = 0, this.element.addEventListener(this.MJ, this, t), ia.M(this.element, "mousedown", u()), this.handleEvent(q)) } a.prototype = {
            gk: "ontouchstart" in window || "createTouch" in document,
            start: function(a) {
                na(a);
                this.Xg = t;
                this.kt = this.gk ? a.touches[0].clientX : a.clientX;
                this.lt = this.gk ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.lC, this, t);
                this.element.addEventListener(this.kC, this, t)
            },
            move: function(a) { oa(a); var c = this.gk ? a.touches[0].clientY : a.clientY; if (10 < Math.abs((this.gk ? a.touches[0].clientX : a.clientX) - this.kt) || 10 < Math.abs(c - this.lt)) this.Xg = p },
            end: function(a) {
                oa(a);
                this.Xg || (a = document.createEvent("Event"), a.initEvent("tap", t, p), this.element.dispatchEvent(a));
                this.element.removeEventListener(this.lC, this, t);
                this.element.removeEventListener(this.kC, this, t)
            },
            handleEvent: function(a) {
                if (a) switch (a.type) {
                    case this.MJ:
                        this.start(a);
                        break;
                    case this.lC:
                        this.move(a);
                        break;
                    case this.kC:
                        this.end(a)
                }
            }
        };
        return function(b) { return new a(b) }
    }();
    var D = window.BMap || {};
    D.version = "3.0";
    D.R0 = 0.34 > Math.random();
    0 <= D.version.indexOf("#") && (D.version = "3.0");
    D.Mq = [];
    D.Pe = function(a) { this.Mq.push(a) };
    D.Cq = [];
    D.nm = function(a) { this.Cq.push(a) };
    D.GT = D.apiLoad || u();
    D.y_ = D.verify || function() {
        D.version && D.version >= 1.5 && pa(D.Rd + "?qt=verify&ak=" + qa, function(a) {
            if (a && a.error !== 0) {
                if (typeof map !== "undefined") {
                    map.Pa().innerHTML = "";
                    map.oi = {}
                }
                D = q;
                var b = "\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                switch (a.error) {
                    case 101:
                        b = "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                        break;
                    case 102:
                        b = "\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"
                }
                alert(b)
            }
        })
    };
    var qa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = q;
    var sa = window.BMap_loadScriptTime,
        ta = (new Date).getTime(),
        ua = q,
        wa = p,
        xa = 5042,
        za = 5002,
        Aa = 5003,
        Ba = "load_mapclick",
        Ca = 5038,
        Da = 5041,
        Fa = 5047,
        Ga = 5036,
        Ha = 5039,
        Ia = 5037,
        Ja = 5040,
        Ka = 5011,
        La = 7E3;
    var Ma = 0;

    function Na(a, b) {
        if (a = z.$(a)) {
            var c = this;
            z.lang.Ca.call(c);
            b = b || {};
            c.K = { nB: 200, Qb: p, hw: t, aC: p, ko: p, lo: b.enableWheelZoom || t, HJ: p, dC: p, Nr: p, Mr: p, hC: p, io: b.enable3DBuilding || t, Cc: 25, L_: 240, tT: 450, tc: H.tc, xd: H.xd, Vw: !!b.Vw, Zb: Math.round(b.minZoom) || 1, hc: Math.round(b.maxZoom) || 19, wb: b.mapType || Oa, d4: t, EJ: b.drawer || Ma, gw: p, ew: 500, vV: b.enableHighResolution !== t, cC: b.enableMapClick !== t, devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1, NE: 99, pe: b.mapStyle || q, PX: b.logoControl === t ? t : p, NT: [], c1: b.beforeClickIcon || q, Pi: t, fw: t, NL: p };
            c.K.pe && (this.lX(c.K.pe.controls), this.RK(c.K.pe.geotableId));
            c.K.pe && c.K.pe.styleId && c.A2(c.K.pe.styleId);
            c.K.qB = { dark: { backColor: "#2D2D2D", textColor: "#bfbfbf", iconUrl: "dicons" }, normal: { backColor: "#F3F1EC", textColor: "#c61b1b", iconUrl: "icons" }, light: { backColor: "#EBF8FC", textColor: "#017fb4", iconUrl: "licons" } };
            b.enableAutoResize && (c.K.Mr = b.enableAutoResize);
            b.enableStreetEntrance === t && (c.K.hC = b.enableStreetEntrance);
            b.enableDeepZoom === t && (c.K.HJ = b.enableDeepZoom);
            var e = c.K.NT;
            if (I())
                for (var f = 0, g = e.length; f < g; f++)
                    if (z.ca[e[f]]) { c.K.devicePixelRatio = 1; break } e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || e && f) c.K.NE = 99;
            c.Ua = a;
            c.BA(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.va());
            b.size && this.te(b.size);
            e = c.Ab();
            c.width = e.width;
            c.height = e.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.qe = c.platform.firstChild;
            c.qe.style.width = c.width + "px";
            c.qe.style.height = c.height + "px";
            c.Nd = {};
            c.ie = new J(0, 0);
            c.mc = new J(0, 0);
            c.Sa = 3;
            c.wc = 0;
            c.BB = q;
            c.AB = q;
            c.Pb = "";
            c.Lv = "";
            c.qh = {};
            c.qh.custom = {};
            c.Qa = 0;
            b.useWebGL === t && Pa(t);
            c.P = new Qa(a, { af: "api", xR: p });
            c.P.U();
            c.P.kE(c);
            b = b || {};
            e = c.wb = c.K.wb;
            c.Jc = e.Ul();
            e === Sa && Ta(za);
            e === Va && Ta(Aa);
            e = c.K;
            e.HN = Math.round(b.minZoom);
            e.GN = Math.round(b.maxZoom);
            c.cu();
            c.R = { Dc: t, dc: 0, ys: 0, jL: 0, h3: 0, fB: t, VD: -1, Df: [] };
            c.platform.style.cursor = c.K.tc;
            for (f = 0; f < D.Mq.length; f++) D.Mq[f](c);
            c.R.VD = f;
            c.ba();
            K.load("map", function() { c.fb() });
            c.K.cC && (setTimeout(function() { Ta(Ba) }, 1E3), K.load("mapclick", function() {
                // window.MPC_Mgr = window.MPC_Mgr || {};
                // window.MPC_Mgr[c.aa] = new Wa(c)
            }, p));
            Xa() && K.load("oppc", function() { c.uy() });
            I() && K.load("opmb", function() { c.uy() });
            a = q;
            c.OA = []
        }
    }
    z.lang.sa(Na, z.lang.Ca, "Map");
    z.extend(Na.prototype, {
        va: function() {
            var a = N("div"),
                b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = N("div", { "class": "BMap_mask" }),
                c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        BA: function(a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" !== Ya(a).position && (b.position = "relative", b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        ba: function() {
            var a = this;
            a.Ln = function() {
                var b = a.Ab();
                if (a.width !== b.width || a.height !== b.height) {
                    var c = new P(a.width, a.height),
                        e = new Q("onbeforeresize");
                    e.size = c;
                    a.dispatchEvent(e);
                    a.Oj((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.qe.style.width = (a.width = b.width) + "px";
                    a.qe.style.height = (a.height = b.height) + "px";
                    c = new Q("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            };
            a.K.Mr && (a.R.Cl = setInterval(a.Ln, 80))
        },
        Oj: function(a, b, c, e) {
            var f = this.ra().lc(this.ga()),
                g = this.Jc,
                i = p;
            c && J.VK(c) && (this.ie = new J(c.lng, c.lat), i = t);
            if (c = c && e ? g.Uh(c, this.Pb) : this.mc)
                if (this.mc = new J(c.lng + a * f, c.lat - b * f), (a = g.Wg(this.mc, this.Pb)) && i) this.ie = a
        },
        pg: function(a, b) {
            if (Za(a) && (this.cu(), this.dispatchEvent(new Q("onzoomstart")), a = this.hn(a).zoom, a !== this.Sa)) {
                this.wc = this.Sa;
                this.Sa = a;
                var c;
                b ? c = b : this.Rg() && (c = this.Rg().fa());
                c && (c = this.Tb(c, this.wc), this.Oj(this.width / 2 - c.x, this.height / 2 - c.y, this.Bb(c, this.wc), p));
                this.dispatchEvent(new Q("onzoomstartcode"))
            }
        },
        Kc: function(a) { this.pg(a) },
        TE: function(a) { this.pg(this.Sa + 1, a) },
        UE: function(a) { this.pg(this.Sa - 1, a) },
        bi: function(a) { a instanceof J && (this.mc = this.Jc.Uh(a, this.Pb), this.ie = J.VK(a) ? new J(a.lng, a.lat) : this.Jc.Wg(this.mc, this.Pb)) },
        kg: function(a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.Oj(-a, -b)
        },
        xv: function(a) { a && $a(a.ye) && (a.ye(this), this.dispatchEvent(new Q("onaddcontrol", a))) },
        wM: function(a) { a && $a(a.remove) && (a.remove(), this.dispatchEvent(new Q("onremovecontrol", a))) },
        On: function(a) { a && $a(a.ta) && (a.ta(this), this.dispatchEvent(new Q("onaddcontextmenu", a))) },
        Ro: function(a) { a && $a(a.remove) && (this.dispatchEvent(new Q("onremovecontextmenu", a)), a.remove()) },
        Ka: function(a) { a && $a(a.ye) && (a.ye(this), this.dispatchEvent(new Q("onaddoverlay", a))) },
        Nb: function(a) { a && $a(a.remove) && (a.remove(), this.dispatchEvent(new Q("onremoveoverlay", a))) },
        $I: function() { this.dispatchEvent(new Q("onclearoverlays")) },
        Fe: function(a) { a && this.dispatchEvent(new Q("onaddtilelayer", a)) },
        Lf: function(a) { a && this.dispatchEvent(new Q("onremovetilelayer", a)) },
        ng: function(a) {
            if (this.wb !== a) {
                var b = new Q("onsetmaptype");
                b.V3 = this.wb;
                this.wb = this.K.wb = a;
                this.Jc = this.wb.Ul();
                this.Oj(0, 0, this.ub(), p);
                this.cu();
                var c = this.hn(this.ga()).zoom;
                this.pg(c);
                this.dispatchEvent(b);
                b = new Q("onmaptypechange");
                b.Sa = c;
                b.wb = a;
                this.dispatchEvent(b);
                (a === ab || a === Va) && Ta(Aa)
            }
        },
        hf: function(a) {
            var b = this;
            if (a instanceof J) b.bi(a, { noAnimation: p });
            else if (bb(a))
                if (b.wb === Sa) {
                    var c = H.jB[a];
                    c && (pt = c.k, b.hf(pt))
                } else {
                    var e = this.BG();
                    e.$s(function(c) { 0 === e.Vl() && 2 === e.Ha.result.type && (b.hf(c.dk(0).point), Sa.Zj(a) && b.hE(a)) });
                    e.search(a, { log: "center" })
                }
        },
        ud: function(a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            D.Gp("cus.fire", "time", { z_loadscripttime: ta - sa });
            var c = this;
            if (bb(a))
                if (c.wb === Sa) {
                    var e = H.jB[a];
                    e && (pt = e.k, c.ud(pt, b))
                } else {
                    var f = c.BG();
                    f.$s(function(e) {
                        if (0 === f.Vl() && (2 === f.Ha.result.type || 11 === f.Ha.result.type)) {
                            var e = e.dk(0).point,
                                g = b || db.mw(f.Ha.content.level, c);
                            c.ud(e, g);
                            Sa.Zj(a) && c.hE(a)
                        }
                    });
                    f.search(a, { log: "center" })
                }
            else if (a instanceof J && b) {
                b = c.hn(b).zoom;
                c.wc = c.Sa || b;
                c.Sa = b;
                e = c.ie;
                c.ie = new J(a.lng, a.lat);
                c.mc = c.Jc.Uh(c.ie, c.Pb);
                c.BB = c.BB || c.Sa;
                c.AB = c.AB || c.ie;
                var g = new Q("onload"),
                    i = new Q("onloadcode");
                g.point = new J(a.lng, a.lat);
                g.pixel = c.Tb(c.ie, c.Sa);
                g.zoom = b;
                c.loaded || (c.loaded = p, c.dispatchEvent(g), ua || (ua = eb()));
                c.dispatchEvent(i);
                g = new Q("onmoveend");
                g.Yy = "centerAndZoom";
                e.gc(c.ie) || c.dispatchEvent(g);
                c.dispatchEvent(new Q("onmoveend"));
                c.wc !== c.Sa && (e = new Q("onzoomend"), e.Yy = "centerAndZoom", c.dispatchEvent(e));
                c.K.io && c.io()
            }
        },
        BG: function() { this.R.vL || (this.R.vL = new fb(1)); return this.R.vL },
        reset: function() { this.ud(this.AB, this.BB, p) },
        enableDragging: function() { this.K.Qb = p },
        disableDragging: function() { this.K.Qb = t },
        enableInertialDragging: function() { this.K.gw = p },
        disableInertialDragging: function() { this.K.gw = t },
        enableScrollWheelZoom: function() { this.K.lo = p },
        disableScrollWheelZoom: function() { this.K.lo = t },
        enableContinuousZoom: function() { this.K.ko = p },
        disableContinuousZoom: function() { this.K.ko = t },
        enableDoubleClickZoom: function() { this.K.aC = p },
        disableDoubleClickZoom: function() { this.K.aC = t },
        enableKeyboard: function() { this.K.hw = p },
        disableKeyboard: function() { this.K.hw = t },
        enablePinchToZoom: function() { this.K.Nr = p },
        disablePinchToZoom: function() { this.K.Nr = t },
        enableAutoResize: function() {
            this.K.Mr = p;
            this.Ln();
            this.R.Cl || (this.R.Cl = setInterval(this.Ln, 80))
        },
        disableAutoResize: function() {
            this.K.Mr = t;
            this.R.Cl && (clearInterval(this.R.Cl), this.R.Cl = q)
        },
        io: function() {
            this.K.io = p;
            this.Vm || (this.Vm = new BuildingLayer({ K1: p }), this.Fe(this.Vm))
        },
        WU: function() {
            this.K.io = t;
            this.Vm && (this.Lf(this.Vm), this.Vm = q, delete this.Vm)
        },
        Ab: function() { return this.zr && this.zr instanceof P ? new P(this.zr.width, this.zr.height) : new P(this.Ua.clientWidth, this.Ua.clientHeight) },
        te: function(a) { a && a instanceof P ? (this.zr = a, this.Ua.style.width = a.width + "px", this.Ua.style.height = a.height + "px") : this.zr = q },
        ub: w("ie"),
        ga: w("Sa"),
        lU: function() { this.Ln() },
        hn: function(a) {
            var b = this.K.Zb,
                c = this.K.hc,
                e = t,
                a = Math.round(a);
            a < b && (e = p, a = b);
            a > c && (e = p, a = c);
            return { zoom: a, mC: e }
        },
        Pa: w("Ua"),
        Tb: function(a, b) { b = b || this.ga(); return this.Jc.Tb(a, b, this.mc, this.Ab(), this.Pb) },
        Bb: function(a, b) { b = b || this.ga(); return this.Jc.Bb(a, b, this.mc, this.Ab(), this.Pb) },
        Oe: function(a, b) {
            if (a) {
                var c = this.Tb(new J(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        fM: function(a, b) {
            if (a) {
                var c = new R(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.Bb(c, b)
            }
        },
        pointToPixelFor3D: function(a, b) {
            var c = map.Pb;
            this.wb === Sa && c && gb.fJ(a, this, b)
        },
        N3: function(a, b) {
            var c = map.Pb;
            this.wb === Sa && c && gb.eJ(a, this, b)
        },
        O3: function(a, b) {
            var c = this,
                e = map.Pb;
            c.wb === Sa && e && gb.fJ(a, c, function(a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        K3: function(a, b) {
            var c = map.Pb;
            this.wb === Sa && c && (a.x += this.offsetX, a.y += this.offsetY, gb.eJ(a, this, b))
        },
        le: function(a) {
            if (!this.Uw()) return new hb;
            var b = a || {},
                a = b.margins || [0, 0, 0, 0],
                c = b.zoom || q,
                b = this.Bb({ x: a[3], y: this.height - a[2] }, c),
                a = this.Bb({ x: this.width - a[1], y: a[0] }, c);
            return new hb(b, a)
        },
        Uw: function() { return !!this.loaded },
        BQ: function(a, b) {
            for (var c = this.ra(), e = b.margins || [10, 10, 10, 10], f = b.zoomFactor || 0, g = e[1] + e[3], e = e[0] + e[2], i = c.Ti(), k = c = c.Ph(); k >= i; k--) { var m = this.ra().lc(k); if (a.EE().lng / m < this.width - g && a.EE().lat / m < this.height - e) break } k += f;
            k < i && (k = i);
            k > c && (k = c);
            return k
        },
        fs: function(a, b) {
            var c = { center: this.ub(), zoom: this.ga() };
            if (!a || !a instanceof hb && 0 === a.length || a instanceof hb && a.dj()) return c;
            var e = [];
            a instanceof hb ? (e.push(a.Ff()), e.push(a.Le())) : e = a.slice(0);
            for (var b = b || {}, f = [], g = 0, i = e.length; g < i; g++) f.push(this.Jc.Uh(e[g], this.Pb));
            e = new hb;
            for (g = f.length - 1; 0 <= g; g--) e.extend(f[g]);
            if (e.dj()) return c;
            c = e.ub();
            f = this.BQ(e, b);
            b.margins && (e = b.margins, g = (e[1] - e[3]) / 2, e = (e[0] - e[2]) / 2, i = this.ra().lc(f), b.offset && (g = b.offset.width, e = b.offset.height), c.lng += i * g, c.lat += i * e);
            c = this.Jc.Wg(c, this.Pb);
            return { center: c, zoom: f }
        },
        eh: function(a, b) {
            var c;
            c = a && a.center ? a : this.fs(a, b);
            var b = b || {},
                e = b.delay || 200;
            if (c.zoom === this.Sa && b.enableAnimation !== t) {
                var f = this;
                setTimeout(function() { f.bi(c.center, { duration: 210 }) }, e)
            } else this.ud(c.center, c.zoom)
        },
        Gf: w("Nd"),
        Rg: function() { return this.R.nb && this.R.nb.Va() ? this.R.nb : q },
        getDistance: function(a, b) {
            if (a && b) {
                if (a.gc(b)) return 0;
                var c = 0,
                    c = S.so(a, b);
                if (c === q || c === l) c = 0;
                return c
            }
        },
        Aw: function() {
            var a = [],
                b = this.xa,
                c = this.ve;
            if (b)
                for (var e in b) b[e] instanceof ib && a.push(b[e]);
            if (c) { e = 0; for (b = c.length; e < b; e++) a.push(c[e]) }
            return a
        },
        ra: w("wb"),
        uy: function() {
            for (var a = this.R.VD; a < D.Mq.length; a++) D.Mq[a](this);
            this.R.VD = a
        },
        hE: function(a) {
            this.Pb = Sa.Zj(a);
            this.Lv = Sa.$J(this.Pb);
            this.wb === Sa && this.Jc instanceof jb && (this.Jc.Li = this.Pb)
        },
        setDefaultCursor: function(a) {
            this.K.tc = a;
            this.platform && (this.platform.style.cursor = this.K.tc)
        },
        getDefaultCursor: function() { return this.K.tc },
        setDraggingCursor: function(a) { this.K.xd = a },
        getDraggingCursor: function() { return this.K.xd },
        Mw: function() { return this.K.vV && 1.5 <= this.K.devicePixelRatio },
        TA: function(a, b) {
            b ? this.qh[b] || (this.qh[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof kb && (this.qh[b][a.aa] = a, a.ta(this));
            var c = this;
            K.load("hotspot", function() { c.uy() }, p)
        },
        JY: function(a, b) {
            b || (b = "custom");
            this.qh[b][a.aa] && delete this.qh[b][a.aa]
        },
        Nv: function(a) {
            a || (a = "custom");
            this.qh[a] = {}
        },
        cu: function() {
            var a = this.wb.Ti(),
                b = this.wb.Ph(),
                c = this.K;
            c.Zb = c.HN || a;
            c.hc = c.GN || b;
            c.Zb < a && (c.Zb = a);
            c.hc > b && (c.hc = b)
        },
        setMinZoom: function(a) {
            a = Math.round(a);
            a > this.K.hc && (a = this.K.hc);
            this.K.HN = a;
            this.jI()
        },
        setMaxZoom: function(a) {
            a = Math.round(a);
            a < this.K.Zb && (a = this.K.Zb);
            this.K.GN = a;
            this.jI()
        },
        jI: function() {
            this.cu();
            var a = this.K;
            this.Sa < a.Zb ? this.Kc(a.Zb) : this.Sa > a.hc && this.Kc(a.hc);
            var b = new Q("onzoomspanchange");
            b.Zb = a.Zb;
            b.hc = a.hc;
            this.dispatchEvent(b)
        },
        C2: w("OA"),
        getKey: function() { return qa },
        nZ: function(a) {
            var b = this;
            D.Gp("cus.fire", "count", "z_setmapstylev2count");
            this.TM(t);
            window.hh = {};
            window.Et = [];
            window.Ra = {};
            var c = this.ga(),
                e = {};
            z.extend(e, a);
            window.cb = function(a) {
                if (z.em(window.hh)) window.ey = a, b.KE(c);
                else {
                    b.DN(a, c);
                    b.KE(c);
                    var a = b.eU(window.hh, c),
                        f;
                    for (f in a) {
                        var k = {};
                        z.extend(k, e);
                        b.vW(f, k)
                    }
                }
                b.sX()
            };
            var f = D.Rd + "custom/v2/mapstyle?ak=" + qa + "&callback=cb&";
            a.styleJson ? f += "styles=" + encodeURIComponent(b.fN(a.styleJson, c)) : a.style && (f += "customid=" + a.style);
            window.iconSetInfo_high || pa(D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/sty/icons_na2x.js?udt=20180907&v=001&from=jsapi");
            pa(f)
        },
        vW: function(a, b) {
            var c = this,
                e = (1E5 * Math.random()).toFixed(0);
            window["_cbk" + e] = function(b) {
                c.DN(b, a);
                c.KE(a);
                b = new Q("onzoomfeatureload" + a);
                c.dispatchEvent(b);
                delete window["_cbk" + e]
            };
            var f = D.Rd + "custom/v2/mapstyle?ak=" + qa + "&callback=_cbk" + e + "&";
            b.styleJson ? f += "styles=" + encodeURIComponent(this.fN(b.styleJson, parseInt(a, 10))) : b.style && (f += "customid=" + b.style);
            pa(f)
        },
        dZ: function(a, b) {
            var c = new Q("oncopyrightoffsetchange", { OX: a, FU: b });
            this.K.jJ = b;
            this.dispatchEvent(c)
        },
        Ws: function(a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.aa] && window.MPC_Mgr[b.aa].close();
            b.K.cC = t;
            D.Gp("cus.fire", "count", "z_setmapstylecount");
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.KZ(a.styleJson));
                I() && z.ca.Bx ? setTimeout(function() {
                    b.K.pe = a;
                    b.dispatchEvent(new Q("onsetcustomstyles", a))
                }, 50) : (this.K.pe = a, this.dispatchEvent(new Q("onsetcustomstyles", a)), this.RK(b.K.pe.geotableId));
                var c = { style: a.style };
                a.features && 0 < a.features.length && (c.features = p);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = p);
                Ta(5050, c);
                a.style && (c = b.K.qB[a.style] ? b.K.qB[a.style].backColor : b.K.qB.normal.backColor) && (this.Pa().style.backgroundColor = c)
            }
        },
        lX: function(a) {
            this.controls || (this.controls = { navigationControl: new lb, scaleControl: new mb, overviewMapControl: new nb, mapTypeControl: new ob });
            var b = this,
                c;
            for (c in this.controls) b.wM(b.controls[c]);
            a = a || [];
            z.cc.Jb(a, function(a) { b.xv(b.controls[a]) })
        },
        RK: function(a) { a ? this.xr && this.xr.qf === a || (this.Lf(this.xr), this.xr = new pb({ geotableId: a }), this.Fe(this.xr)) : this.Lf(this.xr) },
        Ed: function() {
            var a = this.ga() >= this.K.NE && this.ra() === Oa && 18 >= this.ga(),
                b = t;
            try { document.createElement("canvas").getContext("2d"), b = p } catch (c) { b = t }
            return a && b
        },
        getCurrentCity: function() { return { name: this.Kg, code: this.lr } },
        bs: function() { this.P.nn(); return this.P },
        pX: function(a) {
            Oa.setMaxZoom(a.maxZoom || 19);
            var b = new Q("oninitindoorlayer");
            b.Me = a;
            this.dispatchEvent(b);
            this.K.Pi = t
        },
        sX: function(a) {
            if (this.K.Pi) {
                var b = new Q("onupdatestyles");
                this.dispatchEvent(b)
            } else b = new Q("oninitindoorlayer"), b.Me = a, this.dispatchEvent(b), this.K.Pi = p, this.K.fw = p
        },
        TM: function(a) {
            this.K.NL = a;
            this.hi.$b.parentElement.style.display = a ? "block" : "none"
        },
        setPanorama: function(a) {
            this.P = a;
            this.P.kE(this)
        },
        fN: function(a, b) {
            var c = { featureType: "t", elementType: "e", visibility: "v", color: "c", lightness: "l", saturation: "s", weight: "w", level: "z", hue: "h", fontsize: "f" },
                e = { all: "all", geometry: "g", "geometry.fill": "g.f", "geometry.stroke": "g.s", labels: "l", "labels.text.fill": "l.t.f", "labels.text.stroke": "l.t.s", "labels.text": "l.t", "labels.icon": "l.i" },
                f = [];
            window.Ra[b] = {};
            for (var g = 0, i; i = a[g]; g++)
                if (!this.AX(i) && (window.hh = this.VW(i, window.hh), this.BX(i, b))) {
                    if (("land" === i.featureType || "all" === i.featureType || "background" === i.featureType) && "string" === typeof i.elementType && ("geometry" === i.elementType || "geometry.fill" === i.elementType || "all" === i.elementType) && i.stylers)
                        if (i.stylers.color && (window.Ra[b].bmapLandColor = i.stylers.color, window.Ra[b].iL = p, window.bmapLandColor = i.stylers.color), i.stylers.visibility && "off" === i.stylers.visibility) window.Ra[b].bmapLandColor = "#00000000", window.Ra[b].iL = p, window.bmapLandColor = "#00000000";
                    if ("railway" === i.featureType && "string" === typeof i.elementType && i.stylers) {
                        if (i.stylers.color && ("geometry" === i.elementType && (window.bmapRailwayFillColor = i.stylers.color, window.bmapRailwayStrokeColor = i.stylers.color, window.Ra[b].bmapRailwayFillColor = i.stylers.color, window.Ra[b].bmapRailwayStrokeColor = i.stylers.color, window.Ra[b].sM = p, window.Ra[b].tM = p), "geometry.fill" === i.elementType && (window.bmapRailwayFillColor = i.stylers.color, window.Ra[b].bmapRailwayFillColor = i.stylers.color, window.Ra[b].sM = p), "geometry.stroke" === i.elementType)) window.bmapRailwayStrokeColor = i.stylers.color, window.Ra[b].bmapRailwayStrokeColor = i.stylers.color, window.Ra[b].tM = p;
                        i.stylers.visibility && (window.bmapRailwayVisibility = i.stylers.visibility, window.Ra[b].bmapRailwayVisibility = i.stylers.visibility, window.Ra[b].GY = p)
                    }
                    var k = {};
                    z.extend(k, i);
                    i = k.stylers;
                    delete k.stylers;
                    z.extend(k, i);
                    i = [];
                    for (var m in c)
                        if (k[m] && !this.wX(m))
                            if ("elementType" === m) i.push(c[m] + ":" + e[k[m]]);
                            else {
                                switch (k[m]) {
                                    case "poilabel":
                                        k[m] = "poi";
                                        break;
                                    case "districtlabel":
                                        k[m] = "label"
                                }
                                i.push(c[m] + ":" + k[m])
                            } 2 < i.length && f.push(i.join("|"))
                }! window.Ra[b].iL && window.Ra[b].bmapLandColor && delete window.Ra[b].bmapLandColor;
            !window.Ra[b].sM && window.Ra[b].bmapRailwayFillColor && delete window.Ra[b].bmapRailwayFillColor;
            !window.Ra[b].tM && window.Ra[b].bmapRailwayStrokeColor && delete window.Ra[b].bmapRailwayStrokeColor;
            !window.Ra[b].GY && window.Ra[b].bmapRailwayVisibility && delete window.Ra[b].bmapRailwayVisibility;
            return f.join(",")
        },
        KZ: function(a) {
            for (var b = { featureType: "t", elementType: "e", visibility: "v", color: "c", lightness: "l", saturation: "s", weight: "w", zoom: "z", hue: "h" }, c = { all: "all", geometry: "g", "geometry.fill": "g.f", "geometry.stroke": "g.s", labels: "l", "labels.text.fill": "l.t.f", "labels.text.stroke": "l.t.s", "lables.text": "l.t", "labels.icon": "l.i" }, e = [], f = 0, g; g = a[f]; f++) {
                var i = g.stylers;
                delete g.stylers;
                z.extend(g, i);
                var i = [],
                    k;
                for (k in b)
                    if (g[k])
                        if ("elementType" === k) i.push(b[k] + ":" + c[g[k]]);
                        else {
                            switch (g[k]) {
                                case "poilabel":
                                    g[k] = "poi";
                                    break;
                                case "districtlabel":
                                    g[k] = "label"
                            }
                            i.push(b[k] + ":" + g[k])
                        } 2 < i.length && e.push(i.join("|"))
            }
            return e.join(",")
        },
        AX: function(a) {
            var b = {};
            z.extend(b, a.stylers);
            delete b.curZoomRegionId;
            delete b.curZoomRegion;
            delete b.level;
            return z.em(b) ? p : t
        },
        BX: function(a, b) { var c = a.stylers.level; return c === l ? p : c === b ? p : t },
        wX: function(a) { return { curZoomRegionId: p, curZoomRegion: p } [a] ? p: t },
        VW: function(a, b) {
            var c = a.stylers.level,
                e = {};
            z.extend(e, b);
            c !== l && (e[c] = p);
            return e
        },
        DN: function(a, b) {
            window.Et[b] = a;
            if (!window.hh[b])
                for (var c = this.wb.Ti(), e = this.wb.Ph(); c <= e; c++) window.hh[c] || (window.Et[c] = a)
        },
        KE: function(a) {
            if (!window.hh[a])
                for (var b = this.wb.Ti(), c = this.wb.Ph(); b <= c; b++) window.hh[b] || (window.Ra[b] || (window.Ra[b] = {}), window.Ra[b].bmapLandColor = window.Ra[a].bmapLandColor, window.Ra[b].bmapRailwayFillColor = window.Ra[a].bmapRailwayFillColor, window.Ra[b].bmapRailwayStrokeColor = window.Ra[a].bmapRailwayStrokeColor)
        },
        eU: function(a, b) {
            var c = {};
            z.extend(c, a);
            if (c[b]) {
                for (var e = this.wb.Ti(), f = this.wb.Ph(); e <= f; e++)
                    if (!c[e]) { c[e] = p; break } delete c[b]
            }
            return c
        }
    });

    function Ta(a, b) {
        if (a) {
            var b = b || {},
                c = "",
                e;
            for (e in b) c = c + "&" + e + "=" + encodeURIComponent(b[e]);
            var f = function(a) { a && (qb = p, setTimeout(function() { rb.src = "/static/BMap/images/blank.gif" }, 50)) },
                g = function() {
                    var a = sb.shift();
                    a && f(a)
                };
            e = (1E8 * Math.random()).toFixed(0);
            qb ? sb.push({ src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c }) : f({ src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c });
            tb || (z.M(rb, "load", function() {
                qb = t;
                g()
            }), z.M(rb, "error", function() {
                qb = t;
                g()
            }), tb = p)
        }
    }
    var qb, tb, sb = [],
        rb = new Image;
    Ta(5E3, { device_pixel_ratio: window.devicePixelRatio, platform: navigator.platform });
    D.LK = { TILE_BASE_URLS: ["gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"], TILE_ONLINE_URLS: ["gss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlRMgBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlRcgBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv"], TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"], geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3", TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"], traffic: "gsp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa", iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K", baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq", wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a", pano: ["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"], main_domain_nocdn: { baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3", other: "api.map.baidu.com" }, main_domain_cdn: { baidu: ["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"], other: ["api.map.baidu.com"], webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"] }, map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK", vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a" };
    D.cX = { TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"], TILE_ONLINE_URLS: ["online0.map.bdimg.com", "online1.map.bdimg.com", "online2.map.bdimg.com", "online3.map.bdimg.com", "online4.map.bdimg.com"], TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"], geolocControl: "loc.map.baidu.com", TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"], traffic: "its.map.baidu.com:8002", iw_pano: "pcsv0.map.bdimg.com", message: "j.map.baidu.com", baidumap: "map.baidu.com", wuxian: "wuxian.baidu.com", pano: ["pcsv0.map.bdimg.com", "pcsv1.map.bdimg.com", "pcsv2.map.bdimg.com"], main_domain_nocdn: { baidu: "api.map.baidu.com" }, main_domain_cdn: { baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"], webmap: ["webmap0.map.bdimg.com"] }, map_click: "mapclick.map.baidu.com", vector_traffic: "or.map.bdimg.com" };
    D.o_ = { "0": { proto: "http://", domain: D.cX }, 1: { proto: "https://", domain: D.LK }, 2: { proto: "https://", domain: D.LK } };
    window.BMAP_PROTOCOL && "https" === window.BMAP_PROTOCOL && (window.HOST_TYPE = 2);
    D.zt = window.HOST_TYPE || "0";
    D.url = D.o_[D.zt];
    D.Ko = D.url.proto + D.url.domain.baidumap + "/";
    D.Rd = D.url.proto + ("2" == D.zt ? D.url.domain.main_domain_nocdn.other : D.url.domain.main_domain_nocdn.baidu) + "/";
    D.ka = D.url.proto + ("2" == D.zt ? D.url.domain.main_domain_cdn.other[0] : D.url.domain.main_domain_cdn.baidu[0]) + "/";
    D.Ji = D.url.proto + D.url.domain.main_domain_cdn.webmap[0] + "/";
    D.Qh = function(a, b) {
        var c, e, b = b || "";
        switch (a) {
            case "main_domain_nocdn":
                c = D.Rd + b;
                break;
            case "main_domain_cdn":
                c = D.ka + b;
                break;
            default:
                e = D.url.domain[a], "[object Array]" == Object.prototype.toString.call(e) ? (c = [], z.cc.Jb(e, function(a, e) { c[e] = D.url.proto + a + "/" + b })) : c = D.url.proto + D.url.domain[a] + "/" + b
        }
        return c
    };

    function ub(a) {
        var b = { duration: 1E3, Cc: 30, eo: 0, Vb: vb.rL, Is: u() };
        this.Of = [];
        if (a)
            for (var c in a) b[c] = a[c];
        this.j = b;
        if (Za(b.eo)) {
            var e = this;
            setTimeout(function() { e.start() }, b.eo)
        } else b.eo != wb && this.start()
    }
    var wb = "INFINITE";
    ub.prototype.start = function() {
        this.Vt = eb();
        this.Xy = this.Vt + this.j.duration;
        xb(this)
    };
    ub.prototype.add = function(a) { this.Of.push(a) };

    function xb(a) {
        var b = eb();
        b >= a.Xy ? ($a(a.j.va) && a.j.va(a.j.Vb(1)), $a(a.j.finish) && a.j.finish(), 0 < a.Of.length && (b = a.Of[0], b.Of = [].concat(a.Of.slice(1)), b.start())) : (a.Cx = a.j.Vb((b - a.Vt) / a.j.duration), $a(a.j.va) && a.j.va(a.Cx), a.yE || (a.fr = setTimeout(function() { xb(a) }, 1E3 / a.j.Cc)))
    }
    ub.prototype.stop = function(a) {
        this.yE = p;
        for (var b = 0; b < this.Of.length; b++) this.Of[b].stop(), this.Of[b] = q;
        this.Of.length = 0;
        this.fr && (clearTimeout(this.fr), this.fr = q);
        this.j.Is(this.Cx);
        a && (this.Xy = this.Vt, xb(this))
    };
    ub.prototype.cancel = ga(1);
    var vb = { rL: function(a) { return a }, reverse: function(a) { return 1 - a }, WB: function(a) { return a * a }, UB: function(a) { return Math.pow(a, 3) }, Kr: function(a) { return -(a * (a - 2)) }, FJ: function(a) { return Math.pow(a - 1, 3) + 1 }, VB: function(a) { return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1 }, A1: function(a) { return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1 }, B1: function(a) { return (1 - Math.cos(Math.PI * a)) / 2 } };
    vb["ease-in"] = vb.WB;
    vb["ease-out"] = vb.Kr;
    var H = { XE: 34, YE: 21, ZE: new P(21, 32), XN: new P(10, 32), WN: new P(24, 36), VN: new P(12, 36), VE: new P(13, 1), oa: "/static/BMap/images/", S2: "/static/BMap/images/", WE: "/static/BMap/images/markers_new.png", TN: 24, UN: 73, jB: { "\u5317\u4eac": { sx: "bj", k: new J(116.403874, 39.914889) }, "\u4e0a\u6d77": { sx: "sh", k: new J(121.487899, 31.249162) }, "\u6df1\u5733": { sx: "sz", k: new J(114.025974, 22.546054) }, "\u5e7f\u5dde": { sx: "gz", k: new J(113.30765, 23.120049) } }, fontFamily: "arial,sans-serif" };
    z.ca.Je ? (z.extend(H, { rJ: "url(" + H.oa + "ruler.cur),crosshair", tc: "-moz-grab", xd: "-moz-grabbing" }), z.platform.dL && (H.fontFamily = "arial,simsun,sans-serif")) : z.ca.Kv || z.ca.Bx ? z.extend(H, { rJ: "url(" + H.oa + "ruler.cur) 2 6,crosshair", tc: "url(" + H.oa + "openhand.cur) 8 8,default", xd: "url(" + H.oa + "closedhand.cur) 8 8,move" }) : z.extend(H, { rJ: "url(" + H.oa + "ruler.cur),crosshair", tc: "url(" + H.oa + "openhand.cur),default", xd: "url(" + H.oa + "closedhand.cur),move" });

    function yb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }

    function zb(a) { 0 < z.ca.ia ? a.unselectable = "on" : a.style.MozUserSelect = "none" }

    function Ab(a) { return a && a.parentNode && 11 !== a.parentNode.nodeType }

    function Bb(a, b) { z.D.Qw(a, "beforeEnd", b); return a.lastChild }

    function Cb(a) { for (var b = { left: 0, top: 0 }; a && a.offsetParent;) b.left += a.offsetLeft, b.top += a.offsetTop, a = a.offsetParent; return b }

    function na(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = p
    }

    function Db(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = t;
        return t
    }

    function oa(a) { na(a); return Db(a) }

    function Eb() {
        var a = document.documentElement,
            b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }

    function Fb(a, b) { if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))) }

    function Gb(a, b) {
        var c = [],
            b = b || function(a) { return a },
            e;
        for (e in a) c.push(e + "=" + b(a[e]));
        return c.join("&")
    }

    function N(a, b, c) {
        var e = document.createElement(a);
        c && (e = document.createElementNS(c, a));
        return z.D.gE(e, b || {})
    }

    function Ya(a) { if (a.currentStyle) return a.currentStyle; if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a, q) }

    function $a(a) { return "function" === typeof a }

    function Za(a) { return "number" === typeof a }

    function bb(a) { return "string" == typeof a }

    function Hb(a) { return "undefined" != typeof a }

    function Ib(a) { return "object" == typeof a }
    var Jb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function Kb(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var e = a.charCodeAt(c) << 1,
                f = e = e.toString(2);
            8 > e.length && (f = "00000000" + e, f = f.substr(e.length, 8));
            b += f
        }
        a = 5 - b.length % 5;
        e = [];
        for (c = 0; c < a; c++) e[c] = "0";
        b = e.join("") + b;
        f = [];
        for (c = 0; c < b.length / 5; c++) e = b.substr(5 * c, 5), f.push(String.fromCharCode(parseInt(e, 2) + 50));
        return f.join("") + a.toString()
    }

    function Lb(a) {
        var b = "",
            c, e, f = "",
            g, i = "",
            k = 0;
        g = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || g.exec(a)) return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do c = Jb.indexOf(a.charAt(k++)), e = Jb.indexOf(a.charAt(k++)), g = Jb.indexOf(a.charAt(k++)), i = Jb.indexOf(a.charAt(k++)), c = c << 2 | e >> 4, e = (e & 15) << 4 | g >> 2, f = (g & 3) << 6 | i, b += String.fromCharCode(c), 64 != g && (b += String.fromCharCode(e)), 64 != i && (b += String.fromCharCode(f)); while (k < a.length);
        return b
    }
    var Q = z.lang.Lt;

    function I() { return !(!z.platform.nD && !z.platform.zX && !z.platform.aj) }

    function Xa() { return !(!z.platform.dL && !z.platform.WK && !z.platform.HX) }

    function eb() { return (new Date).getTime() }

    function Mb() {
        var a = document.body.appendChild(N("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style) return t;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" === typeof b.adj : p;
        a.parentNode.removeChild(a);
        return b
    }

    function Nb() { return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1") }

    function Ob() { return !!N("canvas").getContext }

    function Pb(a) { return a * Math.PI / 180 } D.NX = function() {
        var a = p,
            b = p,
            c = p,
            e = p,
            f = 0,
            g = 0,
            i = 0,
            k = 0;
        return {
            xP: function() {
                f += 1;
                a && (a = t, setTimeout(function() {
                    Ta(5054, { pic: f });
                    a = p;
                    f = 0
                }, 1E4))
            },
            e0: function() {
                g += 1;
                b && (b = t, setTimeout(function() {
                    Ta(5055, { move: g });
                    b = p;
                    g = 0
                }, 1E4))
            },
            g0: function() {
                i += 1;
                c && (c = t, setTimeout(function() {
                    Ta(5056, { zoom: i });
                    c = p;
                    i = 0
                }, 1E4))
            },
            f0: function(a) {
                k += a;
                e && (e = t, setTimeout(function() {
                    Ta(5057, { tile: k });
                    e = p;
                    k = 0
                }, 5E3))
            }
        }
    }();
    D.wp = { lF: "#83a1ff", yp: "#808080" };

    function Qb(a, b, c) {
        b.DD || (b.DD = [], b.handle = {});
        b.DD.push({ filter: c, Rr: a });
        b.addEventListener || (b.addEventListener = function(a, c) { b.attachEvent("on" + a, c) });
        b.handle.click || (b.addEventListener("click", function(a) {
            for (var c = a.target || a.srcElement; c != b;) {
                Rb(b.DD, function(b, i) { RegExp(i.filter).test(c.getAttribute("filter")) && i.Rr.call(c, a, c.getAttribute("filter")) });
                c = c.parentNode
            }
        }, t), b.handle.click = p)
    }

    function Rb(a, b) { for (var c = 0, e = a.length; c < e; c++) b(c, a[c]) } void

    function(a, b, c) {
        void

        function(a, b, c) {
            function i(a) {
                if (!a.co) {
                    for (var c = p, e = [], g = a.MY, k = 0; g && k < g.length; k++) {
                        var m = g[k],
                            n = ka[m] = ka[m] || {};
                        if (n.co || n == a) e.push(n.Hc);
                        else {
                            c = t;
                            if (!n.RU && (m = (va.get("alias") || {})[m] || m + ".js", !O[m])) {
                                O[m] = p;
                                var o = b.createElement("script"),
                                    s = b.getElementsByTagName("script")[0];
                                o.async = p;
                                o.src = m;
                                s.parentNode.insertBefore(o, s)
                            }
                            n.Vx = n.Vx || {};
                            n.Vx[a.name] = a
                        }
                    }
                    if (c) {
                        a.co = p;
                        a.mJ && (a.Hc = a.mJ.apply(a, e));
                        for (var v in a.Vx) i(a.Vx[v])
                    }
                }
            }

            function k(a) { return (a || new Date) - F }

            function m(a, b, c) { if (a) { "string" == typeof a && (c = b, b = a, a = L); try { a == L ? (M[b] = M[b] || [], M[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c) } catch (e) {} } }

            function n(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b, b = a, a = L);
                    try {
                        if (a == L) {
                            var e = M[b];
                            if (e)
                                for (var f = e.length; f--;) e[f] === c && e.splice(f, 1)
                        } else a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c)
                    } catch (g) {}
                }
            }

            function o(a) {
                var b = M[a],
                    c = 0;
                if (b) { for (var e = [], f = arguments, g = 1; g < f.length; g++) e.push(f[g]); for (g = b.length; g--;) b[g].apply(this, e) && c++; return c }
            }

            function s(a, b) {
                if (a && b) {
                    var c = new Image(1, 1),
                        e = [],
                        f = "img_" + +new Date,
                        g;
                    for (g in b) b[g] && e.push(g + "=" + encodeURIComponent(b[g]));
                    L[f] = c;
                    c.onload = c.onerror = function() {
                        L[f] = c = c.onload = c.onerror = q;
                        delete L[f]
                    };
                    c.src = a + "?" + e.join("&")
                }
            }

            function v() {
                var a = arguments,
                    b = a[0];
                if (this.lJ || /^(on|un|set|get|create)$/.test(b)) { for (var b = y.prototype[b], c = [], e = 1, f = a.length; e < f; e++) c.push(a[e]); "function" == typeof b && b.apply(this, c) } else this.KI.push(a)
            }

            function x(a, b) {
                var c = {},
                    e;
                for (e in a) a.hasOwnProperty(e) && (c[e] = a[e]);
                for (e in b) b.hasOwnProperty(e) && (c[e] = b[e]);
                return c
            }

            function y(a) {
                this.name = a;
                this.Pr = { protocolParameter: { postUrl: q, protocolParameter: q } };
                this.KI = [];
                this.alog = L
            }

            function A(a) {
                a = a || "default";
                if ("*" == a) {
                    var a = [],
                        b;
                    for (b in Y) a.push(Y[b]);
                    return a
                }(b = Y[a]) || (b = Y[a] = new y(a));
                return b
            }
            var C = c.alog;
            if (!C || !C.co) {
                var B = b.all && a.attachEvent,
                    F = C && C.vD || +new Date,
                    E = a.k3 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3),
                    G = 0,
                    O = {},
                    L = function(a) {
                        var b = arguments,
                            c, e, f, g;
                        if ("define" == a || "require" == a) {
                            for (e = 1; e < b.length; e++) switch (typeof b[e]) {
                                case "string":
                                    c = b[e];
                                    break;
                                case "object":
                                    f = b[e];
                                    break;
                                case "function":
                                    g = b[e]
                            }
                            "require" == a && (c && !f && (f = [c]), c = q);
                            c = !c ? "#" + G++ : c;
                            e = ka[c] = ka[c] || {};
                            e.co || (e.name = c, e.MY = f, e.mJ = g, "define" == a && (e.RU = p), i(e))
                        } else "function" == typeof a ? a(L) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function(a, c, e) {
                            b[0] = e;
                            v.apply(L.IE(c), b)
                        })
                    },
                    M = {},
                    Y = {},
                    ka = { U0: { name: "alog", co: p, Hc: L } };
                y.prototype.start = y.prototype.create = function(a) {
                    if (!this.lJ) {
                        "object" == typeof a && this.set(a);
                        this.lJ = new Date;
                        for (this.Qr("create", this); a = this.KI.shift();) v.apply(this, a)
                    }
                };
                y.prototype.send = function(a, b) {
                    var c = x({ ts: k().toString(36), t: a, sid: E }, this.Pr);
                    if ("object" == typeof b) c = x(c, b);
                    else {
                        var e = arguments;
                        switch (a) {
                            case "pageview":
                                e[1] && (c.page = e[1]);
                                e[2] && (c.title = e[2]);
                                break;
                            case "event":
                                e[1] && (c.eventCategory = e[1]);
                                e[2] && (c.eventAction = e[2]);
                                e[3] && (c.eventLabel = e[3]);
                                e[4] && (c.eventValue = e[4]);
                                break;
                            case "timing":
                                e[1] && (c.timingCategory = e[1]);
                                e[2] && (c.timingVar = e[2]);
                                e[3] && (c.timingValue = e[3]);
                                e[4] && (c.timingLabel = e[4]);
                                break;
                            case "exception":
                                e[1] && (c.exDescription = e[1]);
                                e[2] && (c.exFatal = e[2]);
                                break;
                            default:
                                return
                        }
                    }
                    this.Qr("send", c);
                    var f;
                    if (e = this.Pr.protocolParameter) {
                        var g = {};
                        for (f in c) e[f] !== q && (g[e[f] || f] = c[f]);
                        f = g
                    } else f = c;
                    s(this.Pr.postUrl, f)
                };
                y.prototype.set = function(a, b) {
                    if ("string" == typeof a) "protocolParameter" == a && (b = x({ postUrl: q, protocolParameter: q }, b)), this.Pr[a] = b;
                    else if ("object" == typeof a)
                        for (var c in a) this.set(c, a[c])
                };
                y.prototype.get = function(a, b) { var c = this.Pr[a]; "function" == typeof b && b(c); return c };
                y.prototype.Qr = function(a, b) { return L.Qr(this.name + "." + a, b) };
                y.prototype.M = function(a, b) { L.M(this.name + "." + a, b) };
                y.prototype.Xc = function(a, b) { L.Xc(this.name + "." + a, b) };
                L.name = "alog";
                L.xk = E;
                L.co = p;
                L.timestamp = k;
                L.Xc = n;
                L.M = m;
                L.Qr = o;
                L.IE = A;
                L("init");
                var fa = y.prototype;
                T(fa, { start: fa.start, create: fa.create, send: fa.send, set: fa.set, get: fa.get, on: fa.M, un: fa.Xc, fire: fa.Qr });
                var va = A();
                va.set("protocolParameter", { T0: q });
                if (C) {
                    fa = [].concat(C.tb || [], C.Ps || []);
                    C.tb = C.Ps = q;
                    for (var ya in L) L.hasOwnProperty(ya) && (C[ya] = L[ya]);
                    L.tb = L.Ps = { push: function(a) { L.apply(L, a) } };
                    for (C = 0; C < fa.length; C++) L.apply(L, fa[C])
                }
                c.alog = L;
                B && m(b, "mouseup", function(a) {
                    a = a.target || a.srcElement;
                    1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
                });
                var Ea = t;
                a.onerror = function(a, b, e, f) {
                    var i = p;
                    !b && /^script error/i.test(a) && (Ea ? i = t : Ea = p);
                    i && c.alog("exception.send", "exception", { Es: a, uD: b, As: e, Hl: f });
                    return t
                };
                c.alog("exception.on", "catch", function(a) { c.alog("exception.send", "exception", { Es: a.Es, uD: a.path, As: a.As, method: a.method, PJ: "catch" }) })
            }
        }(a, b, c);
        void

        function(a, b, c) {
            var i = "18_3";
            I() && (i = "18_4");
            var k = "http://static.tieba.baidu.com";
            "https:" === a.location.protocol && (k = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
            var m = Math.random,
                k = k + "/tb/pms/img/st.gif",
                n = { bh: "0.1" },
                o = { bh: "0.1" },
                s = { bh: "0.1" },
                v = { bh: "0" };
            if (n && n.bh && m() < n.bh) {
                var x = c.alog.IE("monkey"),
                    y, n = a.screen,
                    A = b.referrer;
                x.set("ver", 5);
                x.set("pid", 241);
                n && x.set("px", n.width + "*" + n.height);
                x.set("ref", A);
                c.alog("monkey.on", "create", function() {
                    y = c.alog.timestamp;
                    x.set("protocolParameter", { reports: q })
                });
                c.alog("monkey.on", "send", function(a) {
                    "pageview" == a.t && (a.cmd = "open");
                    a.now && (a.ts = y(a.now).toString(36), a.now = "")
                });
                c.alog("monkey.create", { page: i, pid: "241", p: "18", dv: 6, postUrl: k, reports: { refer: 1 } });
                c.alog("monkey.send", "pageview", { now: +new Date })
            }
            if (o && o.bh && m() < o.bh) {
                var C = t;
                a.onerror = function(a, b, e, f) {
                    var i = p;
                    !b && /^script error/i.test(a) && (C ? i = t : C = p);
                    i && c.alog("exception.send", "exception", { Es: a, uD: b, As: e, Hl: f });
                    return t
                };
                c.alog("exception.on", "catch", function(a) { c.alog("exception.send", "exception", { Es: a.Es, uD: a.path, As: a.As, method: a.method, PJ: "catch" }) });
                c.alog("exception.create", { postUrl: k, dv: 7, page: i, pid: "170", p: "18" })
            }
            s && (s.bh && m() < s.bh) && (c.alog("cus.on", "time", function(a) {
                var b = {},
                    e = t,
                    f;
                if ("[object Object]" === a.toString()) {
                    for (var i in a) "page" == i ? b.page = a[i] : (f = parseInt(a[i]), 0 < f && /^z_/.test(i) && (e = p, b[i] = f));
                    e && c.alog("cus.send", "time", b)
                }
            }), c.alog("cus.on", "count", function(a) {
                var b = {},
                    e = t;
                "string" === typeof a && (a = [a]);
                if (a instanceof Array)
                    for (var f = 0; f < a.length; f++) /^z_/.test(a[f]) ? (e = p, b[a[f]] = 1) : /^page:/.test(a[f]) && (b.page = a[f].substring(5));
                e && c.alog("cus.send", "count", b)
            }), c.alog("cus.create", { dv: 3, postUrl: k, page: i, p: "18" }));
            if (v && v.bh && m() < v.bh) {
                var B = ["Moz", "O", "ms", "Webkit"],
                    F = ["-webkit-", "-moz-", "-o-", "-ms-"],
                    E = function() { return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments) },
                    G = E("dpFeatureTest").style,
                    O = function(a) { return L(a, l, l) },
                    L = function(a, b, c) {
                        var e = a.charAt(0).toUpperCase() + a.slice(1),
                            f = (a + " " + B.join(e + " ") + e).split(" ");
                        if (typeof b === "string" || typeof b === "undefined") return M(f, b);
                        f = (a + " " + B.join(e + " ") + e).split(" ");
                        a: {
                            var a = f,
                                g;
                            for (g in a)
                                if (a[g] in b) {
                                    if (c === t) { b = a[g]; break a } g = b[a[g]];
                                    b = typeof g === "function" ? fnBind(g, c || b) : g;
                                    break a
                                } b = t
                        }
                        return b
                    },
                    M = function(a, b) {
                        var c, e, f;
                        e = a.length;
                        for (c = 0; c < e; c++) { f = a[c];~("" + f).indexOf("-") && (f = Y(f)); if (G[f] !== l) return b == "pfx" ? f : p }
                        return t
                    },
                    Y = function(a) { return a.replace(/([a-z])-([a-z])/g, function(a, b, c) { return b + c.toUpperCase() }).replace(/^-/, "") },
                    ka = function(a, b, c) {
                        if (a.indexOf("@") === 0) return atRule(a);
                        a.indexOf("-") != -1 && (a = Y(a));
                        return !b ? L(a, "pfx") : L(a, b, c)
                    },
                    fa = function() { var a = E("canvas"); return !(!a.getContext || !a.getContext("2d")) },
                    va = function() { var a = E("div"); return "draggable" in a || "ondragstart" in a && "ondrop" in a },
                    ya = function() {
                        try {
                            localStorage.setItem("localStorage", "localStorage");
                            localStorage.removeItem("localStorage");
                            return p
                        } catch (a) { return t }
                    },
                    Ea = function() { return "content" in b.createElement("template") },
                    ra = function() { return "createShadowRoot" in b.createElement("a") },
                    Ua = function() { return "registerElement" in b },
                    re = function() { return "import" in b.createElement("link") },
                    Oc = function() { return "getItems" in b },
                    Di = function() { return "EventSource" in window },
                    se = function(a, b) {
                        var c = new Image;
                        c.onload = function() { b(a, c.width > 0 && c.height > 0) };
                        c.onerror = function() { b(a, t) };
                        c.src = "data:image/webp;base64," + { n3: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", m3: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==", alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==", Qj: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA" } [a]
                    },
                    te = function(a, b) { return Vb.Lh["WebP-" + a] = b },
                    Ei = function() { return "openDatabase" in a },
                    Fi = function() { return "performance" in a && "timing" in a.performance },
                    Gi = function() { return "performance" in a && "mark" in a.performance },
                    Hi = function() { return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray) },
                    Ii = function() {
                        return "Promise" in a && "cast" in a.zp && "resolve" in a.zp && "reject" in a.zp && "all" in a.zp && "race" in a.zp && function() {
                            var b;
                            new a.zp(function(a) { b = a });
                            return typeof b === "function"
                        }()
                    },
                    Ji = function() {
                        var b = !!a.S_,
                            c = a.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                        return !!a.W_ && b && c
                    },
                    Ki = function() { return "geolocation" in navigator },
                    Li = function() {
                        var b = E("canvas"),
                            c = "probablySupportsContext" in b ? "probablySupportsContext" : "supportsContext";
                        return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext" in a
                    },
                    Mi = function() { return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").n1 },
                    Ni = function() { return !!a.c0 },
                    Oi = function() { return "WebSocket" in a && a.$_.P_ === 2 },
                    Pi = function() { return !!b.createElement("video").canPlayType },
                    Qi = function() { return !!b.createElement("audio").canPlayType },
                    Ri = function() { return !!(a.history && "pushState" in a.history) },
                    Si = function() { return !(!a.Q_ || !a.R_) },
                    Ti = function() { return "postMessage" in window },
                    Ui = function() { return !!a.webkitNotifications || "Notification" in a && "permission" in a.pO && "requestPermission" in a.pO },
                    Vi = function() { for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, f = 0; f < b.length && !c; ++f) c = a[b[f] + "RequestAnimationFrame"]; return !!c },
                    Wi = function() { return "JSON" in a && "parse" in JSON && "stringify" in JSON },
                    Xi = function() { return !(!ka("exitFullscreen", b, t) && !ka("cancelFullScreen", b, t)) },
                    Yi = function() { return !!ka("Intl", a) },
                    Zi = function() { return O("flexBasis") },
                    $i = function() { return !!O("perspective") },
                    aj = function() { return O("shapeOutside") },
                    bj = function() {
                        var a = E("div");
                        a.style.cssText = F.join("filter:blur(2px); ");
                        return !!a.style.length && (b.documentMode === l || b.documentMode > 9)
                    },
                    cj = function() { return "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest },
                    dj = function() { return E("progress").max !== l },
                    ej = function() { return E("meter").max !== l },
                    fj = function() { return "sendBeacon" in navigator },
                    gj = function() { return O("borderRadius") },
                    hj = function() { return O("boxShadow") },
                    ij = function() {
                        var a = E("div").style;
                        a.cssText = F.join("opacity:.55;");
                        return /^0.55$/.test(a.opacity)
                    },
                    jj = function() { return M(["textShadow"], l) },
                    kj = function() { return O("animationName") },
                    lj = function() { return O("transition") },
                    mj = function() { return navigator.userAgent.indexOf("Android 2.") === -1 && O("transform") },
                    Vb = {
                        Lh: {},
                        na: function(a, b, c) { this.Lh[a] = b.apply(this, [].slice.call(arguments, 2)) },
                        td: function(a, b) { a.apply(this, [].slice.call(arguments, 1)) },
                        RY: function() {
                            this.na("bdrs", gj);
                            this.na("bxsd", hj);
                            this.na("opat", ij);
                            this.na("txsd", jj);
                            this.na("anim", kj);
                            this.na("trsi", lj);
                            this.na("trfm", mj);
                            this.na("flex", Zi);
                            this.na("3dtr", $i);
                            this.na("shpe", aj);
                            this.na("fltr", bj);
                            this.na("cavs", fa);
                            this.na("dgdp", va);
                            this.na("locs", ya);
                            this.na("wctem", Ea);
                            this.na("wcsdd", ra);
                            this.na("wccse", Ua);
                            this.na("wchti", re);
                            this.td(se, "lossy", te);
                            this.td(se, "lossless", te);
                            this.td(se, "alpha", te);
                            this.td(se, "animation", te);
                            this.na("wsql", Ei);
                            this.na("natm", Fi);
                            this.na("ustm", Gi);
                            this.na("arra", Hi);
                            this.na("prms", Ii);
                            this.na("xhr2", Ji);
                            this.na("wbgl", Li);
                            this.na("geol", Ki);
                            this.na("svg", Mi);
                            this.na("work", Ni);
                            this.na("wbsk", Oi);
                            this.na("vido", Pi);
                            this.na("audo", Qi);
                            this.na("hsty", Ri);
                            this.na("file", Si);
                            this.na("psmg", Ti);
                            this.na("wknf", Ui);
                            this.na("rqaf", Vi);
                            this.na("json", Wi);
                            this.na("flsc", Xi);
                            this.na("i18n", Yi);
                            this.na("cors", cj);
                            this.na("prog", dj);
                            this.na("metr", ej);
                            this.na("becn", fj);
                            this.na("mcrd", Oc);
                            this.na("esrc", Di)
                        }
                    },
                    x = c.alog.IE("feature");
                x.M("commit", function() {
                    Vb.RY();
                    var a = setInterval(function() {
                        if ("WebP-lossy" in Vb.Lh && "WebP-lossless" in Vb.Lh && "WebP-alpha" in Vb.Lh && "WebP-animation" in Vb.Lh) {
                            for (var b in Vb.Lh) Vb.Lh[b] = Vb.Lh[b] ? "y" : "n";
                            x.send("feature", Vb.Lh);
                            clearInterval(a)
                        }
                    }, 500)
                });
                c.alog("feature.create", { y1: 4, R3: k, page: i, tb: "18" });
                c.alog("feature.fire", "commit")
            }
        }(a, b, c)
    }(window, document, D);
    D.Gp = D.alog || u();
    D.alog("cus.fire", "count", "z_loadscriptcount");
    "https:" === location.protocol && D.alog("cus.fire", "count", "z_httpscount");

    function Sb(a) {
        var b = window.TILE_VERSION,
            c = "20170927";
        b && b.ditu && (b = b.ditu, b[a] && b[a].updateDate && (c = b[a].updateDate));
        return c
    };

    function pa(a, b) {
        if (b) {
            var c = (1E5 * Math.random()).toFixed(0);
            D._rd["_cbk" + c] = function(a) {
                b && b(a);
                delete D._rd["_cbk" + c]
            };
            a += "&callback=BMap._rd._cbk" + c
        }
        var e = N("script", { type: "text/javascript" });
        e.charset = "utf-8";
        e.src = a;
        e.addEventListener ? e.addEventListener("load", function(a) {
            a = a.target;
            // a.parentNode.removeChild(a)
        }, t) : e.attachEvent && e.attachEvent("onreadystatechange", function() {
            var a = window.event.srcElement;
            // a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(e);
            e = q
        }, 1)
    };
    var Tb = { map: "fssuk1", common: "mfhamr", style: "oxbewy", tile: "4ofw1v", groundoverlay: "0fb0mo", pointcollection: "lgxvys", marker: "qwxlyf", symbol: "4azegc", canvablepath: "gdt0wr", vmlcontext: "0rz35z", markeranimation: "jm3ewf", poly: "eo1c3x", draw: "xodk02", drawbysvg: "ze25cg", drawbyvml: "3wawx2", drawbycanvas: "aogsxj", infowindow: "jgueaa", oppc: "gdvmfs", opmb: "33ruow", menu: "ereyay", control: "vs5nq2", navictrl: "erjwfq", geoctrl: "q115ik", copyrightctrl: "pemtxe", citylistcontrol: "al1bv2", scommon: "mekhij", local: "qp0i0m", route: "1ny2sm", othersearch: "pkjxyz", mapclick: "3bmdh0", buslinesearch: "chgmq2", hotspot: "wuareq", autocomplete: "s0qgmc", coordtrans: "s5dlsn", coordtransutils: "pkds3w", convertor: "ph3sib", clayer: "p3kaxq", pservice: "orkl4k", pcommon: "tfvaws", panorama: "qcciet", panoramaflash: "utefhf" };
    z.Ox = function() {
        function a(a) { return e && !!c[b + a + "_" + Tb[a]] }
        var b = "BMap_",
            c = window.localStorage,
            e = "localStorage" in window && c !== q && c !== l;
        return { CX: e, set: function(a, g) { if (e) { for (var i = b + a + "_", k = c.length, m; k--;) m = c.key(k), -1 < m.indexOf(i) && c.removeItem(m); try { c.setItem(b + a + "_" + Tb[a], g) } catch (n) { c.clear() } } }, get: function(f) { return e && a(f) ? c.getItem(b + f + "_" + Tb[f]) : t }, XI: a }
    }();

    function K() {} z.object.extend(K, {
        lj: { mF: -1, DO: 0, rp: 1 },
        cK: function() { var a = "canvablepath"; if (!I() || !Ob()) Nb() || (Mb() ? a = "vmlcontext" : Ob()); return { tile: ["style"], control: [], marker: ["symbol"], symbol: ["canvablepath", "common"], canvablepath: "canvablepath" === a ? [] : [a], vmlcontext: [], style: [], poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"], drawbysvg: ["draw"], drawbyvml: ["draw"], drawbycanvas: ["draw"], infowindow: ["common", "marker"], menu: [], oppc: [], opmb: [], scommon: [], local: ["scommon"], route: ["scommon"], othersearch: ["scommon"], autocomplete: ["scommon"], citylistcontrol: ["autocomplete"], mapclick: ["scommon"], buslinesearch: ["route"], hotspot: [], coordtransutils: ["coordtrans"], convertor: [], clayer: ["tile"], pservice: [], pcommon: ["style", "pservice"], panorama: ["pcommon"], panoramaflash: ["pcommon"] } },
        U3: {},
        eF: {
            MO: "/static/BMap/js/getmodules.js",
            iT: 5E3
//             MO: D.ka + "getmodules?v=3.0",
//             iT: 5E3 
        },
        CB: t,
        Gd: { bl: {}, Pm: [], av: [] },
        load: function(a, b, c) {
            var e = this.hb(a);
            if (e.De == this.lj.rp) c && b();
            else {
                if (e.De == this.lj.mF) {
                    this.bJ(a);
                    this.qM(a);
                    var f = this;
                    f.CB == t && (f.CB = p, setTimeout(function() {
                        for (var a = [], b = 0, c = f.Gd.Pm.length; b < c; b++) {
                            var e = f.Gd.Pm[b],
                                n = "";
                            ia.Ox.XI(e) ? n = ia.Ox.get(e) : (n = "", a.push(e + "_" + Tb[e]));
                            f.Gd.av.push({ HL: e, HD: n })
                        }
                        f.CB = t;
                        f.Gd.Pm.length = 0;
                        // 0 == a.length ? f.LJ() : pa(f.eF.MO + "&mod=" + a.join(","))
                        0 == a.length ? f.LJ() : pa(f.eF.MO)
						// 0 == a.length ? f.LJ() : pa(f.eF.MO + "&mod=" + a.join(","))
                        // 0 == a.length ? e.kz() : Ma(e.Cv.yC)
                    }, 1));
                    e.De = this.lj.DO
                }
                e.Zt.push(b)
            }
        },
        bJ: function(a) {
            if (a && this.cK()[a])
                for (var a = this.cK()[a], b = 0; b < a.length; b++) this.bJ(a[b]), this.Gd.bl[a[b]] || this.qM(a[b])
        },
        qM: function(a) {
            for (var b = 0; b < this.Gd.Pm.length; b++)
                if (this.Gd.Pm[b] == a) return;
            this.Gd.Pm.push(a)
        },
        QY: function(a, b) {
            var c = this.hb(a);
            try { eval(b) } catch (e) { return } c.De = this.lj.rp;
            for (var f = 0, g = c.Zt.length; f < g; f++) c.Zt[f]();
            c.Zt.length = 0
        },
        XI: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() { c.Gd.bl[a].De != c.lj.rp ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout) }, c.eF.iT)
        },
        hb: function(a) { this.Gd.bl[a] || (this.Gd.bl[a] = {}, this.Gd.bl[a].De = this.lj.mF, this.Gd.bl[a].Zt = []); return this.Gd.bl[a] },
        remove: function(a) { delete this.hb(a) },
        iU: function(a, b) {
            for (var c = this.Gd.av, e = p, f = 0, g = c.length; f < g; f++) "" == c[f].HD && (c[f].HL == a ? c[f].HD = b : e = t);
            e && this.LJ()
        },
        LJ: function() {
            for (var a = this.Gd.av, b = 0, c = a.length; b < c; b++) this.QY(a[b].HL, a[b].HD);
            this.Gd.av.length = 0
        }
    });

    function R(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    R.prototype.gc = function(a) { return a && a.x == this.x && a.y == this.y };

    function P(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    P.prototype.gc = function(a) { return a && this.width == a.width && this.height == a.height };

    function kb(a, b) { a && (this.Hb = a, this.aa = "spot" + kb.aa++, b = b || {}, this.Fg = b.text || "", this.Hu = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5], this.lI = b.userData || q, this.uh = b.minZoom || q, this.vf = b.maxZoom || q) } kb.aa = 0;
    z.extend(kb.prototype, {
        ta: function(a) {
            this.uh == q && (this.uh = a.K.Zb);
            this.vf == q && (this.vf = a.K.hc)
        },
        qa: function(a) { a instanceof J && (this.Hb = a) },
        fa: w("Hb"),
        at: ba("Fg"),
        TC: w("Fg"),
        setUserData: ba("lI"),
        getUserData: w("lI")
    });

    function Ub() {
        this.B = q;
        this.Ib = "control";
        this.Na = this.QI = p
    }
    z.lang.sa(Ub, z.lang.Ca, "Control");
    z.extend(Ub.prototype, {
        initialize: function(a) { this.B = a; if (this.C) return a.Ua.appendChild(this.C), this.C },
        ye: function(a) {
            !this.C && (this.initialize && $a(this.initialize)) && (this.C = this.initialize(a));
            this.j = this.j || { mg: t };
            this.BA();
            this.Uq();
            this.C && (this.C.uq = this)
        },
        BA: function() {
            var a = this.C;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.yy || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.j.mg || z.D.Za(a, "BMap_noprint");
                I() || z.M(a, "contextmenu", oa)
            }
        },
        remove: function() {
            this.B = q;
            this.C && (this.C.parentNode && this.C.parentNode.removeChild(this.C), this.C = this.C.uq = q)
        },
        Aa: function() {
            this.C = Bb(this.B.Ua, "<div unselectable='on'></div>");
            this.Na == t && z.D.U(this.C);
            return this.C
        },
        Uq: function() { this.oc(this.j.anchor) },
        oc: function(a) {
            if (this.V0 || !Za(a) || isNaN(a) || a < Wb || 3 < a) a = this.defaultAnchor;
            this.j = this.j || { mg: t };
            this.j.za = this.j.za || this.defaultOffset;
            var b = this.j.anchor;
            this.j.anchor = a;
            if (this.C) {
                var c = this.C,
                    e = this.j.za.width,
                    f = this.j.za.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                    case Wb:
                        c.style.top = f + "px";
                        c.style.left = e + "px";
                        break;
                    case Xb:
                        c.style.top = f + "px";
                        c.style.right = e + "px";
                        break;
                    case Yb:
                        c.style.bottom = f + "px";
                        c.style.left = e + "px";
                        break;
                    case 3:
                        c.style.bottom = f + "px", c.style.right = e + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                z.D.nc(this.C, "anchor" + c[b]);
                z.D.Za(this.C, "anchor" + c[a])
            }
        },
        vC: function() { return this.j.anchor },
        getContainer: w("C"),
        ae: function(a) { a instanceof P && (this.j = this.j || { mg: t }, this.j.za = new P(a.width, a.height), this.C && this.oc(this.j.anchor)) },
        Ui: function() { return this.j.za },
        zd: w("C"),
        show: function() { this.Na != p && (this.Na = p, this.C && z.D.show(this.C)) },
        U: function() { this.Na != t && (this.Na = t, this.C && z.D.U(this.C)) },
        isPrintable: function() { return !!this.j.mg },
        Ic: function() { return !this.C && !this.B ? t : !!this.Na }
    });
    var Wb = 0,
        Xb = 1,
        Yb = 2;

    function lb(a) {
        Ub.call(this);
        a = a || {};
        this.j = { mg: t, sE: a.showZoomInfo || p, anchor: a.anchor, za: a.offset, type: a.type, uV: a.enableGeolocation || t };
        this.defaultAnchor = I() ? 3 : Wb;
        this.defaultOffset = new P(10, 10);
        this.oc(a.anchor);
        this.zm(a.type);
        this.nf()
    }
    z.lang.sa(lb, Ub, "NavigationControl");
    z.extend(lb.prototype, {
        initialize: function(a) { this.B = a; return this.C },
        zm: function(a) { this.j.type = Za(a) && 0 <= a && 3 >= a ? a : 0 },
        Ao: function() { return this.j.type },
        nf: function() {
            var a = this;
            K.load("navictrl", function() { a.mf() })
        }
    });

    function Zb(a) {
        Ub.call(this);
        a = a || {};
        this.j = { anchor: a.anchor || Yb, za: a.offset || new P(10, 30), AZ: a.showAddressBar !== t, D1: a.enableAutoLocation || t, zL: a.locationIcon || q };
        var b = this;
        this.yy = 1200;
        b.r_ = [];
        this.ge = [];
        K.load("geoctrl", function() {
            (function e() {
                if (0 !== b.ge.length) {
                    var a = b.ge.shift();
                    b[a.method].apply(b, a.arguments);
                    e()
                }
            })();
            b.LO()
        });
        Ta(La)
    }
    z.lang.sa(Zb, Ub, "GeolocationControl");
    z.extend(Zb.prototype, { location: function() { this.ge.push({ method: "location", arguments: arguments }) }, getAddressComponent: ca(q) });

    function $b(a) {
        Ub.call(this);
        a = a || {};
        this.j = { mg: t, anchor: a.anchor, za: a.offset };
        this.Xb = [];
        this.defaultAnchor = Yb;
        this.defaultOffset = new P(5, 2);
        this.oc(a.anchor);
        this.QI = t;
        this.nf()
    }
    z.lang.sa($b, Ub, "CopyrightControl");
    z.object.extend($b.prototype, {
        initialize: function(a) { this.B = a; return this.C },
        yv: function(a) {
            if (a && Za(a.id) && !isNaN(a.id)) {
                var b = { bounds: q, content: "" },
                    c;
                for (c in a) b[c] = a[c];
                if (a = this.Pl(a.id))
                    for (var e in b) a[e] = b[e];
                else this.Xb.push(b)
            }
        },
        Pl: function(a) {
            for (var b = 0, c = this.Xb.length; b < c; b++)
                if (this.Xb[b].id == a) return this.Xb[b]
        },
        CC: w("Xb"),
        WD: function(a) { for (var b = 0, c = this.Xb.length; b < c; b++) this.Xb[b].id == a && (r = this.Xb.splice(b, 1), b--, c = this.Xb.length) },
        nf: function() {
            var a = this;
			//去掉百度的copyright
            // K.load("copyrightctrl", function() { a.mf() })
        }
    });

    function nb(a) {
        Ub.call(this);
        a = a || {};
        this.j = { mg: t, size: a.size || new P(150, 150), padding: 5, Va: a.isOpen === p ? p : t, J_: 4, za: a.offset, anchor: a.anchor };
        this.defaultAnchor = 3;
        this.defaultOffset = new P(0, 0);
        this.Lp = this.Mp = 13;
        this.oc(a.anchor);
        this.te(this.j.size);
        this.nf()
    }
    z.lang.sa(nb, Ub, "OverviewMapControl");
    z.extend(nb.prototype, {
        initialize: function(a) { this.B = a; return this.C },
        oc: function(a) { Ub.prototype.oc.call(this, a) },
        je: function() {
            this.je.An = p;
            this.j.Va = !this.j.Va;
            this.C || (this.je.An = t)
        },
        te: function(a) {
            a instanceof P || (a = new P(150, 150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.j.size = a
        },
        Ab: function() { return this.j.size },
        Va: function() { return this.j.Va },
        nf: function() {
            var a = this;
            K.load("control", function() { a.mf() })
        }
    });

    function ac(a) {
        Ub.call(this);
        a = a || {};
        this.defaultAnchor = Wb;
        this.gU = a.canCheckSize === t ? t : p;
        this.Li = "";
        this.defaultOffset = new P(10, 10);
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this.j = { mg: t, za: a.offset || this.defaultOffset, anchor: a.anchor || this.defaultAnchor, expand: !!a.expand };
        a.onChangeBefore && $a(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
        a.onChangeAfter && $a(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
        a.onChangeSuccess && $a(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
        this.oc(a.anchor);
        this.nf()
    }
    z.lang.sa(ac, Ub, "CityListControl");
    z.object.extend(ac.prototype, {
        initialize: function(a) { this.B = a; return this.C },
        nf: function() {
            var a = this;
            K.load("citylistcontrol", function() { a.mf() }, p)
        }
    });

    function mb(a) {
        Ub.call(this);
        a = a || {};
        this.j = { mg: t, color: "black", Yc: "metric", za: a.offset };
        this.defaultAnchor = Yb;
        this.defaultOffset = new P(81, 18);
        this.oc(a.anchor);
        this.Ch = { metric: { name: "metric", dJ: 1, QK: 1E3, AN: "\u7c73", BN: "\u516c\u91cc" }, us: { name: "us", dJ: 3.2808, QK: 5280, AN: "\u82f1\u5c3a", BN: "\u82f1\u91cc" } };
        this.Ch[this.j.Yc] || (this.j.Yc = "metric");
        this.JH = q;
        this.iH = {};
        this.nf()
    }
    z.lang.sa(mb, Ub, "ScaleControl");
    z.object.extend(mb.prototype, {
        initialize: function(a) { this.B = a; return this.C },
        sk: function(a) { this.j.color = a + "" },
        Z1: function() { return this.j.color },
        oE: function(a) { this.j.Yc = this.Ch[a] && this.Ch[a].name || this.j.Yc },
        RW: function() { return this.j.Yc },
        nf: function() {
            var a = this;
            K.load("control", function() { a.mf() })
        }
    });
    var bc = 0;

    function ob(a) {
        Ub.call(this);
        a = a || {};
        this.defaultAnchor = Xb;
        this.defaultOffset = new P(10, 10);
        this.j = { mg: t, Vg: [Oa, ab, Va, Sa], QU: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"], type: a.type || bc, za: a.offset || this.defaultOffset, yV: p };
        this.oc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.j.Vg = a.mapTypes.slice(0));
        this.nf()
    }
    z.lang.sa(ob, Ub, "MapTypeControl");
    z.object.extend(ob.prototype, {
        initialize: function(a) { this.B = a; return this.C },
        Px: function(a) { this.B.ln = a },
        nf: function() {
            var a = this;
            K.load("control", function() { a.mf() }, p)
        }
    });

    function cc(a) {
        Ub.call(this);
        a = a || {};
        this.j = { mg: t, za: a.offset, anchor: a.anchor };
        this.yi = t;
        this.fv = q;
        this.rH = new dc({ af: "api" });
        this.sH = new ec(q, { af: "api" });
        this.defaultAnchor = Xb;
        this.defaultOffset = new P(10, 10);
        this.oc(a.anchor);
        this.nf();
        Ta(xa)
    }
    z.lang.sa(cc, Ub, "PanoramaControl");
    z.extend(cc.prototype, {
        initialize: function(a) { this.B = a; return this.C },
        nf: function() {
            var a = this;
            K.load("control", function() { a.mf() })
        }
    });

    function fc(a) {
        z.lang.Ca.call(this);
        this.j = { Ua: q, cursor: "default" };
        this.j = z.extend(this.j, a);
        this.Ib = "contextmenu";
        this.B = q;
        this.wa = [];
        this.xf = [];
        this.we = [];
        this.Yv = this.tr = q;
        this.th = t;
        var b = this;
        K.load("menu", function() { b.fb() })
    }
    z.lang.sa(fc, z.lang.Ca, "ContextMenu");
    z.object.extend(fc.prototype, {
        ta: function(a, b) {
            this.B = a;
            this.gl = b || q
        },
        remove: function() { this.B = this.gl = q },
        zv: function(a) {
            if (a && !("menuitem" != a.Ib || "" == a.Fg || 0 >= a.Gi)) {
                for (var b = 0, c = this.wa.length; b < c; b++)
                    if (this.wa[b] === a) return;
                this.wa.push(a);
                this.xf.push(a)
            }
        },
        removeItem: function(a) {
            if (a && "menuitem" == a.Ib) {
                for (var b = 0, c = this.wa.length; b < c; b++) this.wa[b] === a && (this.wa[b].remove(), this.wa.splice(b, 1), c--);
                b = 0;
                for (c = this.xf.length; b < c; b++) this.xf[b] === a && (this.xf[b].remove(), this.xf.splice(b, 1), c--)
            }
        },
        WA: function() {
            this.wa.push({ Ib: "divider", sj: this.we.length });
            this.we.push({ D: q })
        },
        YD: function(a) {
            if (this.we[a]) {
                for (var b = 0, c = this.wa.length; b < c; b++) this.wa[b] && ("divider" == this.wa[b].Ib && this.wa[b].sj == a) && (this.wa.splice(b, 1), c--), this.wa[b] && ("divider" == this.wa[b].Ib && this.wa[b].sj > a) && this.wa[b].sj--;
                this.we.splice(a, 1)
            }
        },
        zd: w("C"),
        show: function() { this.th != p && (this.th = p) },
        U: function() { this.th != t && (this.th = t) },
        fZ: function(a) { a && (this.j.cursor = a) },
        getItem: function(a) { return this.xf[a] }
    });
    var gc = H.oa + "menu_zoom_in.png",
        hc = H.oa + "menu_zoom_out.png";

    function ic(a, b, c) {
        if (a && $a(b)) {
            z.lang.Ca.call(this);
            this.j = { width: 100, id: "", $l: "" };
            c = c || {};
            this.j.width = 1 * c.width ? c.width : 100;
            this.j.id = c.id ? c.id : "";
            this.j.$l = c.iconUrl ? c.iconUrl : "";
            this.Fg = a + "";
            this.By = b;
            this.B = q;
            this.Ib = "menuitem";
            this.br = this.wu = this.C = this.mh = q;
            this.ph = p;
            var e = this;
            K.load("menu", function() { e.fb() })
        }
    }
    z.lang.sa(ic, z.lang.Ca, "MenuItem");
    z.object.extend(ic.prototype, {
        ta: function(a, b) {
            this.B = a;
            this.mh = b
        },
        remove: function() { this.B = this.mh = q },
        at: function(a) { a && (this.Fg = a + "") },
        Ob: function(a) { a && (this.j.$l = a) },
        zd: w("C"),
        enable: function() { this.ph = p },
        disable: function() { this.ph = t }
    });

    function hb(a, b) {
        a && !b && (b = a);
        this.ze = this.Md = this.Ee = this.Od = this.tl = this.el = q;
        a && (this.tl = new J(a.lng, a.lat), this.el = new J(b.lng, b.lat), this.Ee = a.lng, this.Od = a.lat, this.ze = b.lng, this.Md = b.lat)
    }
    z.object.extend(hb.prototype, {
        dj: function() { return !this.tl || !this.el },
        gc: function(a) { return !(a instanceof hb) || this.dj() ? t : this.Le().gc(a.Le()) && this.Ff().gc(a.Ff()) },
        Le: w("tl"),
        Ff: w("el"),
        wU: function(a) { return !(a instanceof hb) || this.dj() || a.dj() ? t : a.Ee > this.Ee && a.ze < this.ze && a.Od > this.Od && a.Md < this.Md },
        ub: function() { return this.dj() ? q : new J((this.Ee + this.ze) / 2, (this.Od + this.Md) / 2) },
        os: function(a) {
            if (!(a instanceof hb) || Math.max(a.Ee, a.ze) < Math.min(this.Ee, this.ze) || Math.min(a.Ee, a.ze) > Math.max(this.Ee, this.ze) || Math.max(a.Od, a.Md) < Math.min(this.Od, this.Md) || Math.min(a.Od, a.Md) > Math.max(this.Od, this.Md)) return q;
            var b = Math.max(this.Ee, a.Ee),
                c = Math.min(this.ze, a.ze),
                e = Math.max(this.Od, a.Od),
                a = Math.min(this.Md, a.Md);
            return new hb(new J(b, e), new J(c, a))
        },
        or: function(a) { return !(a instanceof J) || this.dj() ? t : a.lng >= this.Ee && a.lng <= this.ze && a.lat >= this.Od && a.lat <= this.Md },
        extend: function(a) {
            if (a instanceof J) {
                var b = a.lng,
                    a = a.lat;
                this.tl || (this.tl = new J(0, 0));
                this.el || (this.el = new J(0, 0));
                if (!this.Ee || this.Ee > b) this.tl.lng = this.Ee = b;
                if (!this.ze || this.ze < b) this.el.lng = this.ze = b;
                if (!this.Od || this.Od > a) this.tl.lat = this.Od = a;
                if (!this.Md || this.Md < a) this.el.lat = this.Md = a
            }
        },
        EE: function() { return this.dj() ? new J(0, 0) : new J(Math.abs(this.ze - this.Ee), Math.abs(this.Md - this.Od)) }
    });

    function J(a, b) {
        isNaN(a) && (a = Lb(a), a = isNaN(a) ? 0 : a);
        bb(a) && (a = parseFloat(a));
        isNaN(b) && (b = Lb(b), b = isNaN(b) ? 0 : b);
        bb(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    J.VK = function(a) { return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat };
    J.prototype.gc = function(a) { return a && this.lat == a.lat && this.lng == a.lng };

    function jc() {} jc.prototype.Tg = function() { aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0") };
    jc.prototype.gj = function() { aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0") };

    function kc() {};
    var gb = { fJ: function(a, b, c) { K.load("coordtransutils", function() { gb.JT(a, b, c) }, p) }, eJ: function(a, b, c) { K.load("coordtransutils", function() { gb.IT(a, b, c) }, p) } };

    function lc() {
        this.Ma = [];
        var a = this;
        K.load("convertor", function() { a.JO() })
    }
    z.sa(lc, z.lang.Ca, "Convertor");
    z.extend(lc.prototype, { translate: function(a, b, c, e) { this.Ma.push({ method: "translate", arguments: [a, b, c, e] }) } });
    T(lc.prototype, { translate: lc.prototype.translate });

    function S() {} S.prototype = new jc;
    z.extend(S, {
        gO: 6370996.81,
        qF: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        Pt: [75, 60, 45, 30, 15, 0],
        mO: [
            [1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7],
            [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7],
            [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
            [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
            [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
            [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]
        ],
        nF: [
            [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
            [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5],
            [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5],
            [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
            [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
            [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
        ],
        f2: function(a, b) {
            if (!a || !b) return 0;
            var c, e, a = this.Yb(a);
            if (!a) return 0;
            c = this.Ck(a.lng);
            e = this.Ck(a.lat);
            b = this.Yb(b);
            return !b ? 0 : this.bf(c, this.Ck(b.lng), e, this.Ck(b.lat))
        },
        so: function(a, b) {
            if (!a || !b) return 0;
            a.lng = this.JC(a.lng, -180, 180);
            a.lat = this.PC(a.lat, -74, 74);
            b.lng = this.JC(b.lng, -180, 180);
            b.lat = this.PC(b.lat, -74, 74);
            return this.bf(this.Ck(a.lng), this.Ck(b.lng), this.Ck(a.lat), this.Ck(b.lat))
        },
        Yb: function(a) {
            if (a === q || a === l) return new J(0, 0);
            var b, c;
            b = new J(Math.abs(a.lng), Math.abs(a.lat));
            for (var e = 0; e < this.qF.length; e++)
                if (b.lat >= this.qF[e]) { c = this.mO[e]; break } a = this.gJ(a, c);
            return a = new J(a.lng.toFixed(6), a.lat.toFixed(6))
        },
        zb: function(a) {
            if (a === q || a === l || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat) return new J(0, 0);
            var b, c;
            a.lng = this.JC(a.lng, -180, 180);
            a.lat = this.PC(a.lat, -74, 74);
            b = new J(a.lng, a.lat);
            for (var e = 0; e < this.Pt.length; e++)
                if (b.lat >= this.Pt[e]) { c = this.nF[e]; break } if (!c)
                for (e = 0; e < this.Pt.length; e++)
                    if (b.lat <= -this.Pt[e]) { c = this.nF[e]; break } a = this.gJ(a, c);
            return a = new J(a.lng.toFixed(2), a.lat.toFixed(2))
        },
        gJ: function(a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng),
                    e = Math.abs(a.lat) / b[9],
                    e = b[2] + b[3] * e + b[4] * e * e + b[5] * e * e * e + b[6] * e * e * e * e + b[7] * e * e * e * e * e + b[8] * e * e * e * e * e * e,
                    c = c * (0 > a.lng ? -1 : 1),
                    e = e * (0 > a.lat ? -1 : 1);
                return new J(c, e)
            }
        },
        bf: function(a, b, c, e) { return this.gO * Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(b - a)) },
        Ck: function(a) { return Math.PI * a / 180 },
        A4: function(a) { return 180 * a / Math.PI },
        PC: function(a, b, c) {
            b != q && (a = Math.max(a, b));
            c != q && (a = Math.min(a, c));
            return a
        },
        JC: function(a, b, c) { for (; a > c;) a -= c - b; for (; a < b;) a += c - b; return a }
    });
    z.extend(S.prototype, { Uh: function(a) { return S.zb(a) }, Tg: function(a) { a = S.zb(a); return new R(a.lng, a.lat) }, Wg: function(a) { return S.Yb(a) }, gj: function(a) { a = new J(a.x, a.y); return S.Yb(a) }, Tb: function(a, b, c, e, f) { if (a) return a = this.Uh(a, f), b = this.lc(b), new R(Math.round((a.lng - c.lng) / b + e.width / 2), Math.round((c.lat - a.lat) / b + e.height / 2)) }, Bb: function(a, b, c, e, f) { if (a) return b = this.lc(b), this.Wg(new J(c.lng + b * (a.x - e.width / 2), c.lat - b * (a.y - e.height / 2)), f) }, lc: function(a) { return Math.pow(2, 18 - a) } });

    function jb() { this.Li = "bj" } jb.prototype = new S;
    z.extend(jb.prototype, {
        Uh: function(a, b) { return this.uP(b, S.zb(a)) },
        Wg: function(a, b) { return S.Yb(this.vP(b, a)) },
        lngLatToPointFor3D: function(a, b) {
            var c = this,
                e = S.zb(a);
            K.load("coordtrans", function() {
                var a = kc.NC(c.Li || "bj", e),
                    a = new R(a.x, a.y);
                b && b(a)
            }, p)
        },
        pointToLngLatFor3D: function(a, b) {
            var c = this,
                e = new J(a.x, a.y);
            K.load("coordtrans", function() {
                var a = kc.KC(c.Li || "bj", e),
                    a = new J(a.lng, a.lat),
                    a = S.Yb(a);
                b && b(a)
            }, p)
        },
        uP: function(a, b) { if (K.hb("coordtrans").De == K.lj.rp) { var c = kc.NC(a || "bj", b); return new J(c.x, c.y) } K.load("coordtrans", u()); return new J(0, 0) },
        vP: function(a, b) { if (K.hb("coordtrans").De == K.lj.rp) { var c = kc.KC(a || "bj", b); return new J(c.lng, c.lat) } K.load("coordtrans", u()); return new J(0, 0) },
        lc: function(a) { return Math.pow(2, 20 - a) }
    });

    function mc() { this.Ib = "overlay" } z.lang.sa(mc, z.lang.Ca, "Overlay");
    mc.fk = function(a) { a *= 1; return !a ? 0 : -1E5 * a << 1 };
    z.extend(mc.prototype, {
        ye: function(a) {
            if (!this.V && $a(this.initialize) && (this.V = this.initialize(a))) this.V.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function() { aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0") },
        draw: function() { aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0") },
        remove: function() {
            this.V && this.V.parentNode && this.V.parentNode.removeChild(this.V);
            this.V = q;
            this.dispatchEvent(new Q("onremove"))
        },
        U: function() { this.V && z.D.U(this.V) },
        show: function() { this.V && z.D.show(this.V) },
        Ic: function() { return !this.V || "none" == this.V.style.display || "hidden" == this.V.style.visibility ? t : p }
    });
    D.Pe(function(a) {
        function b(a, b) {
            var c = N("div"),
                i = c.style;
            i.position = "absolute";
            i.top = i.left = i.width = i.height = "0";
            i.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.R;
        c.gd = a.gd = b(a.platform, 200);
        a.Nd.pC = b(c.gd, 800);
        a.Nd.CD = b(c.gd, 700);
        a.Nd.QJ = b(c.gd, 600);
        a.Nd.wD = b(c.gd, 500);
        a.Nd.DL = b(c.gd, 400);
        a.Nd.EL = b(c.gd, 300);
        a.Nd.MN = b(c.gd, 201);
        a.Nd.Bs = b(c.gd, 200)
    });

    function ib() {
        z.lang.Ca.call(this);
        mc.call(this);
        this.map = q;
        this.Na = p;
        this.vb = q;
        this.aG = 0
    }
    z.lang.sa(ib, mc, "OverlayInternal");
    z.extend(ib.prototype, {
        initialize: function(a) {
            this.map = a;
            z.lang.Ca.call(this, this.aa);
            return q
        },
        ww: w("map"),
        draw: u(),
        mj: u(),
        remove: function() {
            this.map = q;
            z.lang.aw(this.aa);
            mc.prototype.remove.call(this)
        },
        U: function() { this.Na !== t && (this.Na = t) },
        show: function() { this.Na !== p && (this.Na = p) },
        Ic: function() { return !this.V ? t : !!this.Na },
        Pa: w("V"),
        MM: function(a) {
            var a = a || {},
                b;
            for (b in a) this.z[b] = a[b]
        },
        gp: ba("zIndex"),
        Qi: function() { this.z.Qi = p },
        YU: function() { this.z.Qi = t },
        On: ba("Wf"),
        Ro: function() { this.Wf = q }
    });

    function nc() {
        this.map = q;
        this.xa = {};
        this.ve = []
    }
    D.Pe(function(a) {
        var b = new nc;
        b.map = a;
        a.xa = b.xa;
        a.ve = b.ve;
        a.addEventListener("load", function(a) { b.draw(a) });
        a.addEventListener("moveend", function(a) { b.draw(a) });
        z.ca.ia && 8 > z.ca.ia || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function(a) { setTimeout(function() { b.draw(a) }, 20) }) : a.addEventListener("zoomend", function(a) { b.draw(a) });
        a.addEventListener("maptypechange", function(a) { b.draw(a) });
        a.addEventListener("addoverlay", function(a) {
            a = a.target;
            if (a instanceof ib) b.xa[a.aa] || (b.xa[a.aa] = a);
            else {
                for (var e = t, f = 0, g = b.ve.length; f < g; f++)
                    if (b.ve[f] === a) { e = p; break } e || b.ve.push(a)
            }
        });
        a.addEventListener("removeoverlay", function(a) {
            a = a.target;
            if (a instanceof ib) delete b.xa[a.aa];
            else
                for (var e = 0, f = b.ve.length; e < f; e++)
                    if (b.ve[e] === a) { b.ve.splice(e, 1); break }
        });
        a.addEventListener("clearoverlays", function() {
            this.Rc();
            for (var a in b.xa) b.xa[a].z.Qi && (b.xa[a].remove(), delete b.xa[a]);
            a = 0;
            for (var e = b.ve.length; a < e; a++) b.ve[a].enableMassClear !== t && (b.ve[a].remove(), b.ve[a] = q, b.ve.splice(a, 1), a--, e--)
        });
        a.addEventListener("infowindowopen", function() {
            var a = this.vb;
            a && (z.D.U(a.uc), z.D.U(a.Ub))
        });
        a.addEventListener("movestart", function() { this.Rg() && this.Rg().PH() });
        a.addEventListener("moveend", function() { this.Rg() && this.Rg().EH() })
    });
    nc.prototype.draw = function(a) {
        if (D.vp) { var b = D.vp.Wr(this.map); "canvas" === b.Ib && b.canvas && b.pP(b.canvas.getContext("2d")) }
        for (var c in this.xa) this.xa[c].draw(a);
        z.cc.Jb(this.ve, function(a) { a.draw() });
        this.map.R.nb && this.map.R.nb.qa();
        D.vp && b.mE()
    };

    function oc(a) {
        ib.call(this);
        a = a || {};
        this.z = { strokeColor: a.strokeColor || "#3a6bdb", jc: a.strokeWeight || 5, kd: a.strokeOpacity || 0.65, strokeStyle: a.strokeStyle || "solid", Qi: a.enableMassClear === t ? t : p, ck: q, Sl: q, Ze: a.enableEditing === p ? p : t, IL: 5, p_: t, We: a.enableClicking === t ? t : p, Sh: a.icons && 0 < a.icons.length ? a.icons : q };
        0 >= this.z.jc && (this.z.jc = 5);
        if (0 > this.z.kd || 1 < this.z.kd) this.z.kd = 0.65;
        if (0 > this.z.dg || 1 < this.z.dg) this.z.dg = 0.65;
        "solid" != this.z.strokeStyle && "dashed" != this.z.strokeStyle && (this.z.strokeStyle = "solid");
        this.V = q;
        this.Wt = new hb(0, 0);
        this.Ue = [];
        this.kc = [];
        this.Oa = {}
    }
    z.lang.sa(oc, ib, "Graph");
    oc.tw = function(a) {
        var b = [];
        if (!a) return b;
        bb(a) && z.cc.Jb(a.split(";"), function(a) {
            a = a.split(",");
            b.push(new J(a[0], a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    };
    oc.ND = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    z.extend(oc.prototype, {
        initialize: function(a) { this.map = a; return q },
        draw: u(),
        Tq: function(a) {
            this.Ue.length = 0;
            this.ja = oc.tw(a).slice(0);
            this.jh()
        },
        be: function(a) { this.Tq(a) },
        jh: function() {
            if (this.ja) {
                var a = this;
                a.Wt = new hb;
                z.cc.Jb(this.ja, function(b) { a.Wt.extend(b) })
            }
        },
        Ke: w("ja"),
        ym: function(a, b) { b && this.ja[a] && (this.Ue.length = 0, this.ja[a] = new J(b.lng, b.lat), this.jh()) },
        setStrokeColor: function(a) { this.z.strokeColor = a },
        JW: function() { return this.z.strokeColor },
        fp: function(a) { 0 < a && (this.z.jc = a) },
        sK: function() { return this.z.jc },
        dp: function(a) { a == l || (1 < a || 0 > a) || (this.z.kd = a) },
        KW: function() { return this.z.kd },
        Us: function(a) { 1 < a || 0 > a || (this.z.dg = a) },
        eW: function() { return this.z.dg },
        ep: function(a) { "solid" != a && "dashed" != a || (this.z.strokeStyle = a) },
        rK: function() { return this.z.strokeStyle },
        setFillColor: function(a) { this.z.fillColor = a || "" },
        dW: function() { return this.z.fillColor },
        le: w("Wt"),
        remove: function() {
            this.map && this.map.removeEventListener("onmousemove", this.tu);
            ib.prototype.remove.call(this);
            this.Ue.length = 0
        },
        Ze: function() {
            if (!(2 > this.ja.length)) {
                this.z.Ze = p;
                var a = this;
                K.load("poly", function() { a.yl() }, p)
            }
        },
        XU: function() {
            this.z.Ze = t;
            var a = this;
            K.load("poly", function() { a.Sj() }, p)
        },
        aW: function() { return this.z.Ze }
    });

    function pc(a) {
        ib.call(this);
        this.V = this.map = q;
        this.z = { width: 0, height: 0, za: new P(0, 0), opacity: 1, background: "transparent", $w: 1, pL: "#000", MX: "solid", point: q };
        this.MM(a);
        this.point = this.z.point
    }
    z.lang.sa(pc, ib, "Division");
    z.extend(pc.prototype, {
        mj: function() {
            var a = this.z,
                b = this.content,
                c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.$w + "px " + a.MX + " " + a.pL + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.V = Bb(this.map.Gf().CD, c.join(""))
        },
        initialize: function(a) {
            this.map = a;
            this.mj();
            this.V && z.M(this.V, I() ? "touchstart" : "mousedown", function(a) { na(a) });
            return this.V
        },
        draw: function() {
            var a = this.map.Oe(this.z.point);
            this.z.za = new P(-Math.round(this.z.width / 2) - Math.round(this.z.$w), -Math.round(this.z.height / 2) - Math.round(this.z.$w));
            this.V.style.left = a.x + this.z.za.width + "px";
            this.V.style.top = a.y + this.z.za.height + "px"
        },
        fa: function() { return this.z.point },
        u0: function() { return this.map.Tb(this.fa()) },
        qa: function(a) {
            this.z.point = a;
            this.draw()
        },
        gZ: function(a, b) {
            this.z.width = Math.round(a);
            this.z.height = Math.round(b);
            this.V && (this.V.style.width = this.z.width + "px", this.V.style.height = this.z.height + "px", this.draw())
        }
    });

    function qc(a, b, c) { a && b && (this.imageUrl = a, this.size = b, a = new P(Math.floor(b.width / 2), Math.floor(b.height / 2)), c = c || {}, a = c.anchor || a, b = c.imageOffset || new P(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "") } z.extend(qc.prototype, { NM: function(a) { a && (this.imageUrl = a) }, wZ: function(a) { a && (this.printImageUrl = a) }, te: function(a) { a && (this.size = new P(a.width, a.height)) }, oc: function(a) { a && (this.anchor = new P(a.width, a.height)) }, Vs: function(a) { a && (this.imageOffset = new P(a.width, a.height)) }, lZ: function(a) { a && (this.infoWindowAnchor = new P(a.width, a.height)) }, iZ: function(a) { a && (this.imageSize = new P(a.width, a.height)) }, toString: ca("Icon") });

    function rc(a, b) {
        if (a) {
            b = b || {};
            this.style = { anchor: b.anchor || new P(0, 0), fillColor: b.fillColor || "#000", dg: b.fillOpacity || 0, scale: b.scale || 1, rotation: b.rotation || 0, strokeColor: b.strokeColor || "#000", kd: b.strokeOpacity || 1, jc: b.strokeWeight };
            this.Ib = "number" === typeof a ? a : "UserDefined";
            this.pi = this.style.anchor;
            this.zq = new P(0, 0);
            this.anchor = q;
            this.oA = a;
            var c = this;
            K.load("symbol", function() { c.Um() }, p)
        }
    }
    z.extend(rc.prototype, {
        setPath: ba("oA"),
        setAnchor: function(a) { this.pi = this.style.anchor = a },
        setRotation: function(a) { this.style.rotation = a },
        setScale: function(a) { this.style.scale = a },
        setStrokeWeight: function(a) { this.style.jc = a },
        setStrokeColor: function(a) {
            a = z.nr.tB(a, this.style.kd);
            this.style.strokeColor = a
        },
        setStrokeOpacity: function(a) { this.style.kd = a },
        setFillOpacity: function(a) { this.style.dg = a },
        setFillColor: function(a) { this.style.fillColor = a }
    });

    function sc(a, b, c, e) { a && (this.Mu = {}, this.OJ = e ? !!e : t, this.Oc = [], this.OZ = a instanceof rc ? a : q, this.xH = b === l ? p : !!(b.indexOf("%") + 1), this.Fj = isNaN(parseFloat(b)) ? 1 : this.xH ? parseFloat(b) / 100 : parseFloat(b), this.yH = !!(c.indexOf("%") + 1), this.repeat = c != l ? this.yH ? parseFloat(c) / 100 : parseFloat(c) : 0) };

    function tc(a, b) {
        z.lang.Ca.call(this);
        this.content = a;
        this.map = q;
        b = b || {};
        this.z = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            za: b.offset || new P(0, 0),
            title: b.title || "",
            ED: b.maxContent || "",
            Og: b.enableMaximize || t,
            Lr: b.enableAutoPan === t ? t : p,
            ZB: b.enableCloseOnClick === t ? t : p,
            margin: b.margin || [10, 10, 40, 10],
            pB: b.collisions || [
                [10, 10],
                [10, 10],
                [10, 10],
                [10, 10]
            ],
            fX: t,
            gY: b.onClosing || ca(p),
            IJ: t,
            eC: b.enableParano === p ? p : t,
            message: b.message,
            gC: b.enableSearchTool === p ? p : t,
            Iw: b.headerContent || "",
            $B: b.enableContentScroll || t
        };
        if (0 != this.z.width && (220 > this.z.width && (this.z.width = 220), 730 < this.z.width)) this.z.width = 730;
        if (0 != this.z.height && (60 > this.z.height && (this.z.height = 60), 650 < this.z.height)) this.z.height = 650;
        if (0 != this.z.maxWidth && (220 > this.z.maxWidth && (this.z.maxWidth = 220), 730 < this.z.maxWidth)) this.z.maxWidth = 730;
        this.Ud = t;
        this.ki = H.oa;
        this.ob = q;
        var c = this;
        K.load("infowindow", function() { c.fb() })
    }
    z.lang.sa(tc, z.lang.Ca, "InfoWindow");
    z.extend(tc.prototype, { setWidth: function(a) {!a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.width = a) }, setHeight: function(a) {!a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.z.height = a) }, RM: function(a) {!a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.maxWidth = a) }, yc: function(a) { this.z.title = a }, getTitle: function() { return this.z.title }, Wc: ba("content"), $j: w("content"), Xs: function(a) { this.z.ED = a + "" }, $d: u(), Lr: function() { this.z.Lr = p }, disableAutoPan: function() { this.z.Lr = t }, enableCloseOnClick: function() { this.z.ZB = p }, disableCloseOnClick: function() { this.z.ZB = t }, Og: function() { this.z.Og = p }, cw: function() { this.z.Og = t }, show: function() { this.Na = p }, U: function() { this.Na = t }, close: function() { this.U() }, dx: function() { this.Ud = p }, restore: function() { this.Ud = t }, Ic: function() { return this.Va() }, Va: ca(t), fa: function() { if (this.ob && this.ob.fa) return this.ob.fa() }, Ui: function() { return this.z.za } });
    Na.prototype.Uc = function(a, b) {
        if (a instanceof tc && b instanceof J) {
            var c = this.R;
            c.hm ? c.hm.qa(b) : (c.hm = new U(b, { icon: new qc("", { width: 1, height: 1 }), offset: new P(0, 0), clickable: t }), c.hm.pQ = 1);
            this.Ka(c.hm);
            c.hm.Uc(a)
        }
    };
    Na.prototype.Rc = function() {
        var a = this.R.nb || this.R.Wk;
        a && a.ob && a.ob.Rc()
    };
    ib.prototype.Uc = function(a) { this.map && (this.map.Rc(), a.Na = p, this.map.R.Wk = a, a.ob = this, z.lang.Ca.call(a, a.aa)) };
    ib.prototype.Rc = function() { this.map && this.map.R.Wk && (this.map.R.Wk.Na = t, z.lang.aw(this.map.R.Wk.aa), this.map.R.Wk = q) };

    function uc(a, b) {
        ib.call(this);
        this.content = a;
        this.V = this.map = q;
        b = b || {};
        this.z = { width: 0, za: b.offset || new P(0, 0), kp: { backgroundColor: "#fff", border: "1px solid #f00", padding: "1px", whiteSpace: "nowrap", font: "12px " + H.fontFamily, zIndex: "80", MozUserSelect: "none" }, position: b.position || q, Qi: b.enableMassClear === t ? t : p, We: p };
        0 > this.z.width && (this.z.width = 0);
        Hb(b.enableClicking) && (this.z.We = b.enableClicking);
        this.point = this.z.position;
        var c = this;
        K.load("marker", function() { c.fb() })
    }
    z.lang.sa(uc, ib, "Label");
    z.extend(uc.prototype, {
        fa: function() { return this.Bu ? this.Bu.fa() : this.point },
        qa: function(a) { a instanceof J && !this.xw() && (this.point = this.z.position = new J(a.lng, a.lat)) },
        Wc: ba("content"),
        lE: function(a) { 0 <= a && 1 >= a && (this.z.opacity = a) },
        ae: function(a) { a instanceof P && (this.z.za = new P(a.width, a.height)) },
        Ui: function() { return this.z.za },
        Cd: function(a) {
            a = a || {};
            this.z.kp = z.extend(this.z.kp, a)
        },
        ei: function(a) { return this.Cd(a) },
        yc: function(a) { this.z.title = a || "" },
        getTitle: function() { return this.z.title },
        QM: function(a) { this.point = (this.Bu = a) ? this.z.position = a.fa() : this.z.position = q },
        xw: function() { return this.Bu || q },
        $j: w("content")
    });

    function vc(a, b) {
        if (0 !== arguments.length) {
            ib.apply(this, arguments);
            b = b || {};
            this.z = { $a: a, opacity: b.opacity || 1, cm: b.cm || "", Cr: b.displayOnMinLevel || 1, Qi: b.enableMassClear === t ? t : p, Br: b.displayOnMaxLevel || 19, JZ: b.stretch || t };
            var c = this;
            K.load("groundoverlay", function() { c.fb() })
        }
    }
    z.lang.sa(vc, ib, "GroundOverlay");
    z.extend(vc.prototype, { setBounds: function(a) { this.z.$a = a }, getBounds: function() { return this.z.$a }, setOpacity: function(a) { this.z.opacity = a }, getOpacity: function() { return this.z.opacity }, setImageURL: function(a) { this.z.cm = a }, getImageURL: function() { return this.z.cm }, setDisplayOnMinLevel: function(a) { this.z.Cr = a }, getDisplayOnMinLevel: function() { return this.z.Cr }, setDisplayOnMaxLevel: function(a) { this.z.Br = a }, getDisplayOnMaxLevel: function() { return this.z.Br } });
    var wc = 3,
        xc = 4;

    function yc() { var a = document.createElement("canvas"); return !(!a.getContext || !a.getContext("2d")) }

    function zc(a, b) {
        var c = this;
        yc() && (a === l && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")), "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")), b = b || {}, ib.apply(c, arguments), c.ea = { ja: a }, c.z = { shape: b.shape || wc, size: b.size || xc, color: b.color || "#fa937e", Qi: p }, this.lA = [], this.ge = [], K.load("pointcollection", function() { for (var a = 0, b; b = c.lA[a]; a++) c[b.method].apply(c, b.arguments); for (a = 0; b = c.ge[a]; a++) c[b.method].apply(c, b.arguments) }))
    }
    z.lang.sa(zc, ib, "PointCollection");
    z.extend(zc.prototype, { initialize: function(a) { this.lA && this.lA.push({ method: "initialize", arguments: arguments }) }, setPoints: function(a) { this.ge && this.ge.push({ method: "setPoints", arguments: arguments }) }, setStyles: function(a) { this.ge && this.ge.push({ method: "setStyles", arguments: arguments }) }, clear: function() { this.ge && this.ge.push({ method: "clear", arguments: arguments }) }, remove: function() { this.ge && this.ge.push({ method: "remove", arguments: arguments }) } });
    var Ac = new qc(H.oa + "marker_red_sprite.png", new P(19, 25), { anchor: new P(10, 25), infoWindowAnchor: new P(10, 0) }),
        Bc = new qc(H.oa + "marker_red_sprite.png", new P(20, 11), { anchor: new P(6, 11), imageOffset: new P(-19, -13) });

    function U(a, b) {
        ib.call(this);
        b = b || {};
        this.point = a;
        this.Ip = this.map = q;
        this.z = { za: b.offset || new P(0, 0), ne: b.icon || Ac, vk: Bc, title: b.title || "", label: q, NI: b.baseZIndex || 0, We: p, a5: t, sD: t, Qi: b.enableMassClear === t ? t : p, Qb: t, uM: b.raiseOnDrag === p ? p : t, CM: t, xd: b.draggingCursor || H.xd, rotation: b.rotation || 0 };
        b.icon && !b.shadow && (this.z.vk = q);
        b.enableDragging && (this.z.Qb = b.enableDragging);
        Hb(b.enableClicking) && (this.z.We = b.enableClicking);
        var c = this;
        K.load("marker", function() { c.fb() })
    }
    U.St = mc.fk(-90) + 1E6;
    U.iF = U.St + 1E6;
    z.lang.sa(U, ib, "Marker");
    z.extend(U.prototype, {
        Ob: function(a) { if (a instanceof qc || a instanceof rc) this.z.ne = a },
        to: function() { return this.z.ne },
        Hx: function(a) { a instanceof qc && (this.z.vk = a) },
        getShadow: function() { return this.z.vk },
        wm: function(a) { this.z.label = a || q },
        IC: function() { return this.z.label },
        Qb: function() { this.z.Qb = p },
        IB: function() { this.z.Qb = t },
        fa: w("point"),
        qa: function(a) { a instanceof J && (this.point = new J(a.lng, a.lat)) },
        fi: function(a, b) {
            this.z.sD = !!a;
            a && (this.DF = b || 0)
        },
        yc: function(a) { this.z.title = a + "" },
        getTitle: function() { return this.z.title },
        ae: function(a) { a instanceof P && (this.z.za = a) },
        Ui: function() { return this.z.za },
        vm: ba("Ip"),
        cp: function(a) { this.z.rotation = a },
        pK: function() { return this.z.rotation }
    });

    function Cc(a) {
        this.options = a || {};
        this.kY = this.options.paneName || "labelPane";
        this.zIndex = this.options.zIndex || 0;
        this.xU = this.options.contextType || "2d"
    }
    Cc.prototype = new mc;
    Cc.prototype.initialize = function(a) {
        this.B = a;
        var b = this.canvas = document.createElement("canvas"),
            c = this.canvas.getContext(this.xU);
        b.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
        Dc(this);
        Ec(c);
        a.getPanes()[this.kY].appendChild(b);
        var e = this;
        a.addEventListener("resize", function() {
            Dc(e);
            Ec(c);
            e.fb()
        });
        return this.canvas
    };

    function Dc(a) {
        var b = a.B.Ab(),
            a = a.canvas;
        a.width = b.width;
        a.height = b.height;
        a.style.width = a.width + "px";
        a.style.height = a.height + "px"
    }

    function Ec(a) {
        var b = (window.devicePixelRatio || 1) / (a.MT || a.U4 || a.v3 || a.w3 || a.A3 || a.MT || 1),
            c = a.canvas.width,
            e = a.canvas.height;
        a.canvas.width = c * b;
        a.canvas.height = e * b;
        a.canvas.style.width = c + "px";
        a.canvas.style.height = e + "px";
        a.scale(b, b)
    }
    Cc.prototype.draw = function() {
        var a = this,
            b = arguments;
        clearTimeout(a.XZ);
        a.XZ = setTimeout(function() { a.fb.apply(a, b) }, 15)
    };
    da = Cc.prototype;
    da.fb = function() {
        var a = this.B;
        this.canvas.style.left = -a.offsetX + "px";
        this.canvas.style.top = -a.offsetY + "px";
        this.dispatchEvent("draw");
        this.options.update && this.options.update.apply(this, arguments)
    };
    da.Pa = w("canvas");
    da.show = function() {
        this.canvas || this.B.Ka(this);
        this.canvas.style.display = "block"
    };
    da.U = function() { this.canvas.style.display = "none" };
    da.gp = function(a) { this.canvas.style.zIndex = a };
    da.fk = w("zIndex");

    function Fc(a, b) {
        oc.call(this, b);
        b = b || {};
        this.z.dg = b.fillOpacity ? b.fillOpacity : 0.65;
        this.z.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.be(a);
        var c = this;
        K.load("poly", function() { c.fb() })
    }
    z.lang.sa(Fc, oc, "Polygon");
    z.extend(Fc.prototype, {
        be: function(a, b) {
            this.Jn = oc.tw(a).slice(0);
            var c = oc.tw(a).slice(0);
            1 < c.length && c.push(new J(c[0].lng, c[0].lat));
            oc.prototype.be.call(this, c, b)
        },
        ym: function(a, b) { this.Jn[a] && (this.Jn[a] = new J(b.lng, b.lat), this.ja[a] = new J(b.lng, b.lat), 0 == a && !this.ja[0].gc(this.ja[this.ja.length - 1]) && (this.ja[this.ja.length - 1] = new J(b.lng, b.lat)), this.jh()) },
        Ke: function() {
            var a = this.Jn;
            0 == a.length && (a = this.ja);
            return a
        }
    });

    function Gc(a, b) {
        oc.call(this, b);
        this.Tq(a);
        var c = this;
        K.load("poly", function() { c.fb() })
    }
    z.lang.sa(Gc, oc, "Polyline");

    function Hc(a, b, c) {
        this.point = a;
        this.ya = Math.abs(b);
        Fc.call(this, [], c)
    }
    Hc.ND = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    z.lang.sa(Hc, Fc, "Circle");
    z.extend(Hc.prototype, {
        initialize: function(a) {
            this.map = a;
            this.ja = this.ou(this.point, this.ya);
            this.jh();
            return q
        },
        ub: w("point"),
        hf: function(a) { a && (this.point = a) },
        nK: w("ya"),
        jf: function(a) { this.ya = Math.abs(a) },
        ou: function(a, b) {
            if (!a || !b || !this.map) return [];
            for (var c = [], e = b / 6378800, f = Math.PI / 180 * a.lat, g = Math.PI / 180 * a.lng, i = 0; 360 > i; i += 9) {
                var k = Math.PI / 180 * i,
                    m = Math.asin(Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k)),
                    k = new J(((g - Math.atan2(Math.sin(k) * Math.sin(e) * Math.cos(f), Math.cos(e) - Math.sin(f) * Math.sin(m)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), m * (180 / Math.PI));
                c.push(k)
            }
            e = c[0];
            c.push(new J(e.lng, e.lat));
            return c
        }
    });
    var Ic = {};

    function Jc(a) {
        this.map = a;
        this.gm = [];
        this.Mf = [];
        this.og = [];
        this.aU = 300;
        this.UD = 0;
        this.ig = {};
        this.Ki = {};
        this.lk = 0;
        this.mD = p;
        this.NU = {};
        this.qn = this.Sp(1);
        this.$f = this.Sp(2);
        this.fl = this.Sp(3);
        this.rh = this.Sp(4);
        a.platform.appendChild(this.qn);
        a.platform.appendChild(this.$f);
        a.platform.appendChild(this.fl);
        a.platform.appendChild(this.rh);
        var b = 256 * Math.pow(2, 15),
            c = 3 * b,
            a = S.zb(new J(180, 0)).lng,
            c = c - a,
            b = -3 * b,
            e = S.zb(new J(-180, 0)).lng;
        this.aH = a;
        this.bH = e;
        this.Sz = c + (e - b);
        this.cH = a - e
    }
    D.Pe(function(a) {
        var b = new Jc(a);
        b.ta();
        a.hi = b
    });
    z.extend(Jc.prototype, {
        ta: function() {
            var a = this,
                b = a.map;
            b.addEventListener("loadcode", function() { a.Jo() });
            b.addEventListener("addtilelayer", function(b) { a.Fe(b) });
            b.addEventListener("removetilelayer", function(b) { a.Lf(b) });
            b.addEventListener("setmaptype", function(b) { a.ng(b) });
            b.addEventListener("zoomstartcode", function(b) { a.Fc(b) });
            b.addEventListener("setcustomstyles", function(b) {
                a.Ws(b.target);
                a.Jf(p)
            });
            b.addEventListener("initindoorlayer", function(b) { a.iD(b) })
        },
        Jo: function() {
            var a = this;
            if (z.ca.ia) try { document.execCommand("BackgroundImageCache", t, p) } catch (b) {} this.loaded || a.Pw();
            a.Jf();
            this.loaded || (this.loaded = p, K.load("tile", function() { a.KO() }))
        },
        iD: function(a) {
            this.At = new Kc(this);
            this.At.Fe(new Lc(this.map, this.At, a.Me))
        },
        Pw: function() {
            for (var a = this.map.ra().Te, b = 0; b < a.length; b++) {
                var c = new Mc;
                z.extend(c, a[b]);
                this.gm.push(c);
                c.ta(this.map, this.qn)
            }
            this.Ws()
        },
        Sp: function(a) {
            var b = N("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        of: function() {
            this.lk--;
            var a = this;
            this.mD && (this.map.dispatchEvent(new Q("onfirsttileloaded")), this.mD = t);
            0 == this.lk && (this.ti && (clearTimeout(this.ti), this.ti = q), this.ti = setTimeout(function() {
                if (a.lk == 0) {
                    a.map.dispatchEvent(new Q("ontilesloaded"));
                    a.mD = p
                }
                a.ti = q
            }, 80))
        },
        UC: function(a, b) { return "TILE-" + b.aa + "-" + a[0] + "-" + a[1] + "-" + a[2] },
        Lw: function(a) {
            var b = a.Fb;
            b && Ab(b) && b.parentNode.removeChild(b);
            delete this.ig[a.name];
            a.loaded || (Nc(a), a.Fb = q, a.im = q)
        },
        wK: function(a, b, c) {
            var e = this.map,
                f = e.ra(),
                g = e.Sa,
                i = e.mc,
                k = f.lc(g),
                m = this.YV(),
                n = m[0],
                o = m[1],
                s = m[2],
                v = m[3],
                x = m[4],
                c = "undefined" != typeof c ? c : 0,
                f = f.me(),
                m = e.aa.replace(/^TANGRAM_/, "");
            for (this.ue ? this.ue.length = 0 : this.ue = []; n < s; n++)
                for (var y = o; y < v; y++) {
                    var A = n,
                        C = y;
                    this.ue.push([A, C]);
                    A = m + "_" + b + "_" + A + "_" + C + "_" + g;
                    this.NU[A] = A
                }
            this.ue.sort(function(a) { return function(b, c) { return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1])) } }([x[0] - 1, x[1] - 1]));
            i = [Math.round(-i.lng / k), Math.round(i.lat / k)];
            n = -e.offsetY + e.height / 2;
            a.style.left = -e.offsetX + e.width / 2 + "px";
            a.style.top = n + "px";
            this.Ge ? this.Ge.length = 0 : this.Ge = [];
            n = 0;
            for (e = a.childNodes.length; n < e; n++) y = a.childNodes[n], y.qq = t, this.Ge.push(y);
            if (n = this.lm)
                for (var B in n) delete n[B];
            else this.lm = {};
            this.He ? this.He.length = 0 : this.He = [];
            n = 0;
            for (e = this.ue.length; n < e; n++) {
                B = this.ue[n][0];
                k = this.ue[n][1];
                y = 0;
                for (o = this.Ge.length; y < o; y++)
                    if (s = this.Ge[y], s.id == m + "_" + b + "_" + B + "_" + k + "_" + g) {
                        s.qq = p;
                        this.lm[s.id] = s;
                        break
                    }
            }
            n = 0;
            for (e = this.Ge.length; n < e; n++) s = this.Ge[n], s.qq || this.He.push(s);
            this.BE = [];
            y = (f + c) * this.map.K.devicePixelRatio;
            n = 0;
            for (e = this.ue.length; n < e; n++) B = this.ue[n][0], k = this.ue[n][1], v = B * f + i[0] - c / 2, x = (-1 - k) * f + i[1] - c / 2, A = m + "_" + b + "_" + B + "_" + k + "_" + g, o = this.lm[A], s = q, o ? (s = o.style, s.left = v + "px", s.top = x + "px", o.$m || this.BE.push([B, k, o])) : (0 < this.He.length ? (o = this.He.shift(), o.getContext("2d").clearRect(-c / 2, -c / 2, y, y), s = o.style) : (o = document.createElement("canvas"), s = o.style, s.position = "absolute", s.width = f + c + "px", s.height = f + c + "px", this.FX() && (s.WebkitTransform = "scale(1.001)"), o.setAttribute("width", y), o.setAttribute("height", y), a.appendChild(o)), o.id = A, s.left = v + "px", s.top = x + "px", -1 < A.indexOf("bg") && (v = "#F3F1EC", this.map.K.KT && (v = this.map.K.KT), s.background = v ? v : ""), this.BE.push([B, k, o])), o.style.visibility = "";
            n = 0;
            for (e = this.He.length; n < e; n++) this.He[n].style.visibility = "hidden";
            return this.BE
        },
        FX: function() { return /M040/i.test(navigator.userAgent) },
        YV: function() {
            var a = this.map,
                b = a.ra(),
                c = b.BK(a.Sa),
                e = a.mc,
                f = Math.ceil(e.lng / c),
                g = Math.ceil(e.lat / c),
                b = b.me(),
                c = [f, g, (e.lng - f * c) / c * b, (e.lat - g * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        DZ: function(a, b, c, e) {
            var f = this;
            f.h1 = b;
            var g = this.map.ra(),
                i = f.UC(a, c),
                k = g.me(),
                b = [a[0] * k + b[0], (-1 - a[1]) * k + b[1]],
                m = this.ig[i];
            if (this.map.ra() !== ab && this.map.ra() !== Va) {
                var n = this.Fv(a[0], a[2]).offsetX;
                b[0] += n;
                b.B0 = n
            }
            m && m.Fb ? (yb(m.Fb, b), e && (e = new R(a[0], a[1]), g = this.map.K.pe ? this.map.K.pe.style : "normal", e = c.getTilesUrl(e, a[2], g), m.loaded = t, Pc(m, e)), m.loaded ? this.of() : Qc(m, function() { f.of() })) : (m = this.Ki[i]) && m.Fb ? (c.$b.insertBefore(m.Fb, c.$b.lastChild), this.ig[i] = m, yb(m.Fb, b), e && (e = new R(a[0], a[1]), g = this.map.K.pe ? this.map.K.pe.style : "normal", e = c.getTilesUrl(e, a[2], g), m.loaded = t, Pc(m, e)), m.loaded ? this.of() : Qc(m, function() { f.of() })) : (m = k * Math.pow(2, g.Ph() - a[2]), new J(a[0] * m, a[1] * m), e = new R(a[0], a[1]), g = this.map.K.pe ? this.map.K.pe.style : "normal", e = c.getTilesUrl(e, a[2], g), m = new Rc(this, e, b, a, c), Qc(m, function() { f.of() }), m.nn(), this.ig[i] = m)
        },
        of: function() {
            this.lk--;
            var a = this;
            0 == this.lk && (this.ti && (clearTimeout(this.ti), this.ti = q), this.ti = setTimeout(function() {
                if (a.lk == 0) {
                    a.map.dispatchEvent(new Q("ontilesloaded"));
                    if (wa) {
                        if (sa && ta && ua) {
                            var b = eb(),
                                c = a.map.Ab();
                            setTimeout(function() { Ta(5030, { load_script_time: ta - sa, load_tiles_time: b - ua, map_width: c.width, map_height: c.height, map_size: c.width * c.height }) }, 1E4);
                            D.Gp("cus.fire", "time", { z_imgfirstloaded: b - ua })
                        }
                        wa = t
                    }
                }
                a.ti = q
            }, 80))
        },
        UC: function(a, b) { return this.map.ra() === Sa ? "TILE-" + b.aa + "-" + this.map.Lv + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.aa + "-" + a[0] + "-" + a[1] + "-" + a[2] },
        Lw: function(a) {
            var b = a.Fb;
            b && (Sc(b), Ab(b) && b.parentNode.removeChild(b));
            delete this.ig[a.name];
            a.loaded || (Sc(b), Nc(a), a.Fb = q, a.im = q)
        },
        Fv: function(a, b) {
            for (var c = 0, e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2; a > f;) a -= e, c -= this.Sz;
            for (; a < g;) a += e, c += this.Sz;
            c = Math.round(c / Math.pow(2, 18 - b));
            return { offsetX: c, Hl: a }
        },
        cU: function(a) {
            for (var b = a.lng; b > this.aH;) b -= this.cH;
            for (; b < this.bH;) b += this.cH;
            a.lng = b;
            return a
        },
        dU: function(a, b) {
            for (var c = 256 * Math.pow(2, 18 - b), e = Math.floor(this.aH / c), f = Math.floor(this.bH / c), c = Math.floor(this.Sz / c), g = [], i = 0; i < a.length; i++) {
                var k = a[i],
                    m = k[0],
                    k = k[1];
                if (m >= e) {
                    var m = m + c,
                        n = "id_" + m + "_" + k + "_" + b;
                    a[n] || (a[n] = p, g.push([m, k]))
                } else m <= f && (m -= c, n = "id_" + m + "_" + k + "_" + b, a[n] || (a[n] = p, g.push([m, k])))
            }
            for (i = 0; i < g.length; i++) a.push(g[i]);
            return a
        },
        Jf: function(a) {
            if (!this.map.K.Pi) {
                var b = this;
                if (b.map.ra() == Sa) K.load("coordtrans", function() {
                    b.map.Pb || (b.map.Pb = Sa.Zj(b.map.Kg), b.map.Lv = Sa.$J(b.map.Pb));
                    b.eH()
                }, p);
                else {
                    if (a && a)
                        for (var c in this.Ki) delete this.Ki[c];
                    b.eH(a)
                }
            }
        },
        eH: function(a) {
            var b = this.gm.concat(this.Mf),
                c = b.length,
                e = this.map,
                f = e.ra(),
                g = e.mc;
            this.map.ra() !== ab && this.map.ra() !== Va && (g = this.cU(g));
            for (var i = 0; i < c; i++) {
                var k = b[i];
                if (k.Zb && e.Sa < k.Zb) break;
                if (k.Ev) {
                    var m = this.$b = k.$b;
                    if (a) {
                        var n = m;
                        if (n && n.childNodes)
                            for (var o = n.childNodes.length, s = o - 1; 0 <= s; s--) o = n.childNodes[s], n.removeChild(o), o = q
                    }
                    if (this.map.Ed()) {
                        this.$f.style.display = "block";
                        m.style.display = "none";
                        this.map.dispatchEvent(new Q("vectorchanged"), { isvector: p });
                        continue
                    } else m.style.display = "block", this.$f.style.display = "none", this.map.dispatchEvent(new Q("vectorchanged"), { isvector: t })
                }
                if (!k.A0 && !(k.Ww && !this.map.Ed() || k.bL && this.map.Ed())) {
                    e = this.map;
                    f = e.ra();
                    m = f.Ul();
                    o = e.Sa;
                    g = e.mc;
                    f == Sa && g.gc(new J(0, 0)) && (g = e.mc = m.Uh(e.ie, e.Pb));
                    var v = f.lc(o),
                        m = f.BK(o),
                        n = Math.ceil(g.lng / m),
                        x = Math.ceil(g.lat / m),
                        y = f.me(),
                        m = [n, x, (g.lng - n * m) / m * y, (g.lat - x * m) / m * y],
                        s = m[0] - Math.ceil((e.width / 2 - m[2]) / y),
                        n = m[1] - Math.ceil((e.height / 2 - m[3]) / y),
                        x = m[0] + Math.ceil((e.width / 2 + m[2]) / y),
                        A = 0;
                    f === Sa && 15 == e.ga() && (A = 1);
                    f = m[1] + Math.ceil((e.height / 2 + m[3]) / y) + A;
                    this.II = new J(g.lng, g.lat);
                    var C = this.ig,
                        y = -this.II.lng / v,
                        A = this.II.lat / v,
                        v = [Math.ceil(y), Math.ceil(A)],
                        g = e.ga(),
                        B;
                    for (B in C) {
                        var F = C[B],
                            E = F.info;
                        (E[2] != g || E[2] == g && (s > E[0] || x <= E[0] || n > E[1] || f <= E[1])) && this.Lw(F)
                    }
                    C = -e.offsetX + e.width / 2;
                    F = -e.offsetY + e.height / 2;
                    k.$b && (k.$b.style.left = Math.ceil(y + C) - v[0] + "px", k.$b.style.top = Math.ceil(A + F) - v[1] + "px", k.$b.style.WebkitTransform = "translate3d(0,0,0)");
                    y = [];
                    for (e.OA = []; s < x; s++)
                        for (A = n; A < f; A++) y.push([s, A]), e.OA.push({ x: s, y: A });
                    this.map.ra() !== ab && this.map.ra() !== Va && (y = this.dU(y, o));
                    y.sort(function(a) { return function(b, c) { return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1])) } }([m[0] - 1, m[1] - 1]));
                    o = y.length;
                    this.lk += o;
                    for (s = 0; s < o; s++) this.DZ([y[s][0], y[s][1], g], v, k, a)
                }
            }
        },
        Fe: function(a) {
            var b = this,
                c = a.target;
            b.map.Ed();
            c.Gm && this.map.Fe(c.Gm);
            if (c.Ww) {
                for (a = 0; a < b.og.length; a++)
                    if (b.og[a] == c) return;
                K.load("vector", function() {
                    c.ta(b.map, b.$f);
                    b.og.push(c)
                }, p)
            } else {
                for (a = 0; a < b.Mf.length; a++)
                    if (b.Mf[a] == c) return;
                c.ta(this.map, this.fl);
                b.Mf.push(c)
            }
        },
        Lf: function(a) {
            a = a.target;
            this.map.Ed();
            a.Gm && this.map.Lf(a.Gm);
            if (a.Ww)
                for (var b = 0, c = this.og.length; b < c; b++) a == this.og[b] && this.og.splice(b, 1);
            else { b = 0; for (c = this.Mf.length; b < c; b++) a == this.Mf[b] && this.Mf.splice(b, 1) } a.remove()
        },
        ng: function() {
            for (var a = this.gm, b = 0, c = a.length; b < c; b++) a[b].remove();
            delete this.$b;
            this.gm = [];
            this.Ki = this.ig = {};
            this.Pw();
            this.Jf()
        },
        Fc: function() {
            var a = this;
            a.md && z.D.U(a.md);
            setTimeout(function() {
                a.Jf();
                a.map.dispatchEvent(new Q("onzoomend"))
            }, 10)
        },
        N4: u(),
        Ws: function(a) {
            var b = this.map.ra();
            if (!this.map.Ed() && (a ? this.map.K.LZ = a : a = this.map.K.LZ, a))
                for (var c = q, c = "2" == D.zt ? [D.url.proto + D.url.domain.main_domain_cdn.other[0] + "/"] : [D.url.proto + D.url.domain.main_domain_cdn.baidu[0] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[1] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[2] + "/"], e = 0, f; f = this.gm[e]; e++)
                    if (f.yZ == p) {
                        b.j.hc = 18;
                        f.getTilesUrl = function(b, e) {
                            var f = b.x,
                                f = this.map.hi.Fv(f, e).Hl,
                                m = b.y,
                                n = Sb("normal"),
                                o = 1;
                            this.map.Mw() && (o = 2);
                            n = "customimage/tile?&x=" + f + "&y=" + m + "&z=" + e + "&udt=" + n + "&scale=" + o + "&ak=" + qa;
                            n = a.styleStr ? n + ("&styles=" + encodeURIComponent(a.styleStr)) : n + ("&customid=" + a.style);
                            return c[Math.abs(f + m) % c.length] + n
                        };
                        break
                    }
        }
    });

    function Rc(a, b, c, e, f) {
        this.im = a;
        this.position = c;
        this.au = [];
        this.name = a.UC(e, f);
        this.info = e;
        this.iI = f.ws();
        e = N("img");
        zb(e);
        e.TJ = t;
        var g = e.style,
            a = a.map.ra();
        g.position = "absolute";
        g.border = "none";
        g.width = a.me() + "px";
        g.height = a.me() + "px";
        g.left = c[0] + "px";
        g.top = c[1] + "px";
        g.maxWidth = "none";
        this.Fb = e;
        this.src = b;
        Tc && (this.Fb.style.opacity = 0);
        var i = this;
        this.Fb.onload = function() {
            D.NX.xP();
            i.loaded = p;
            if (i.im) {
                var a = i.im,
                    b = a.Ki;
                if (!b[i.name]) {
                    a.UD++;
                    b[i.name] = i
                }
                if (i.Fb && !Ab(i.Fb) && f.$b) { f.$b.appendChild(i.Fb); if (z.ca.ia <= 6 && z.ca.ia > 0 && i.iI) i.Fb.style.cssText = i.Fb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i.src + '",sizingMethod=scale);') }
                var c = a.UD - a.aU,
                    e;
                for (e in b) {
                    if (c <= 0) break;
                    if (!a.ig[e]) {
                        b[e].im = q;
                        var g = b[e].Fb;
                        if (g && g.parentNode) {
                            g.parentNode.removeChild(g);
                            Sc(g)
                        }
                        g = q;
                        b[e].Fb = q;
                        delete b[e];
                        a.UD--;
                        c--
                    }
                }
                Tc && new ub({ Cc: 20, duration: 200, va: function(a) { if (i.Fb && i.Fb.style) i.Fb.style.opacity = a * 1 }, finish: function() { i.Fb && i.Fb.style && delete i.Fb.style.opacity } });
                Nc(i)
            }
        };
        this.Fb.onerror = function() {
            Nc(i);
            if (i.im) {
                var a = i.im.map.ra();
                if (a.j.jC) {
                    i.error = p;
                    i.Fb.src = a.j.jC;
                    i.Fb && !Ab(i.Fb) && f.$b.appendChild(i.Fb)
                }
            }
        };
        e = q
    }

    function Qc(a, b) { a.au.push(b) } Rc.prototype.nn = function() { this.Fb.src = 0 < z.ca.ia && 6 >= z.ca.ia && this.iI ? H.oa + "blank.gif" : "" !== this.src && this.Fb.src == this.src ? this.src + "&t = " + Date.now() : this.src };

    function Nc(a) {
        for (var b = 0; b < a.au.length; b++) a.au[b]();
        a.au.length = 0
    }

    function Sc(a) {
        if (a) {
            a.onload = a.onerror = q;
            var b = a.attributes,
                c, e, f;
            if (b) { e = b.length; for (c = 0; c < e; c += 1) f = b[c].name, $a(a[f]) && (a[f] = q) }
            if (b = a.children) { e = b.length; for (c = 0; c < e; c += 1) Sc(a.children[c]) }
        }
    }

    function Pc(a, b) {
        a.src = b;
        a.nn()
    }
    var Tc = !z.ca.ia || 8 < z.ca.ia;

    function Mc(a) {
        this.Me = a || {};
        this.zU = this.Me.copyright || q;
        this.l_ = this.Me.transparentPng || t;
        this.Ev = this.Me.baseLayer || t;
        this.zIndex = this.Me.zIndex || 0;
        this.aa = Mc.gR++
    }
    Mc.gR = 0;
    z.lang.sa(Mc, z.lang.Ca, "TileLayer");
    z.extend(Mc.prototype, {
        ta: function(a, b) {
            this.Ev && (this.zIndex = -100);
            this.map = a;
            if (!this.$b) {
                var c = N("div"),
                    e = c.style;
                e.position = "absolute";
                e.overflow = "visible";
                e.zIndex = this.zIndex;
                e.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                e.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.$b = c
            }
        },
        remove: function() {
            this.$b && this.$b.parentNode && (this.$b.innerHTML = "", this.$b.parentNode.removeChild(this.$b));
            delete this.$b
        },
        ws: w("l_"),
        getTilesUrl: function(a, b) {
            if (this.map.ra() !== ab && this.map.ra() !== Va) var c = this.map.hi.Fv(a.x, b).Hl;
            var e = "";
            this.Me.tileUrlTemplate && (e = this.Me.tileUrlTemplate.replace(/\{X\}/, c), e = e.replace(/\{Y\}/, a.y), e = e.replace(/\{Z\}/, b));
            return e
        },
        Pl: w("zU"),
        ra: function() { return this.wb || Oa }
    });

    function Uc(a) {
        Mc.call(this, a);
        this.j = a || {};
        this.bL = p;
        if (this.j.predictDate) { if (1 > this.j.predictDate.weekday || 7 < this.j.predictDate.weekday) this.j.predictDate = 1; if (0 > this.j.predictDate.hour || 23 < this.j.predictDate.hour) this.j.predictDate.hour = 0 } this.hT = D.url.proto + D.url.domain.traffic + "/traffic/"
    }
    Uc.prototype = new Mc;
    Uc.prototype.ta = function(a, b) {
        Mc.prototype.ta.call(this, a, b);
        this.B = a
    };
    Uc.prototype.ws = ca(p);
    Uc.prototype.getTilesUrl = function(a, b) {
        var c = "";
        this.j.predictDate ? c = "HistoryService?day=" + (this.j.predictDate.weekday - 1) + "&hour=" + this.j.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&", c += "label=web2D&v=016&");
        var c = this.hT + c + "level=" + b + "&x=" + a.x + "&y=" + a.y,
            e = 1;
        this.B.Mw() && (e = 2);
        return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1")
    };
    var Vc = [D.url.proto + D.url.domain.TILES_YUN_HOST[0] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[1] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[2] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[3] + "/georender/gss"],
        Wc = D.url.proto + D.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle",
        Xc = 100;

    function pb(a, b) {
        Mc.call(this);
        var c = this;
        this.bL = p;
        try { document.createElement("canvas").getContext("2d") } catch (e) {} Ib(a) ? b = a || {} : (c.Zm = a, b = b || {});
        b.geotableId && (c.qf = b.geotableId);
        b.databoxId && (c.Zm = b.databoxId);
        var f = D.Rd + "geosearch";
        c.Wa = { mM: b.pointDensity || Xc, aX: f + "/detail/", bX: f + "/v2/detail/", FI: b.age || 36E5, Ps: b.q || "", WZ: "png", P2: [5, 5, 5, 5], JX: { backgroundColor: "#FFFFD5", borderColor: "#808080" }, $A: b.ak || qa, xE: b.tags || "", filter: b.filter || "", bN: b.sortby || "", aD: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0), ME: p };
        K.load("clayer", function() { c.Hd() })
    }
    pb.prototype = new Mc;
    pb.prototype.ta = function(a, b) {
        Mc.prototype.ta.call(this, a, b);
        this.B = a
    };
    pb.prototype.getTilesUrl = function(a, b) {
        var c = a.x,
            e = a.y,
            f = this.Wa,
            c = Vc[Math.abs(c + e) % Vc.length] + "/image?grids=" + c + "_" + e + "_" + b + "&q=" + f.Ps + "&tags=" + f.xE + "&filter=" + f.filter + "&sortby=" + f.bN + "&ak=" + this.Wa.$A + "&age=" + f.FI + "&page_size=" + f.mM + "&format=" + f.WZ;
        f.ME || (f = (1E5 * Math.random()).toFixed(0), c += "&timeStamp=" + f);
        this.qf ? c += "&geotable_id=" + this.qf : this.Zm && (c += "&databox_id=" + this.Zm);
        return c
    };
    pb.prototype.enableUseCache = function() { this.Wa.ME = p };
    pb.prototype.disableUseCache = function() { this.Wa.ME = t };
    pb.GS = /^point\(|\)$/ig;
    pb.HS = /\s+/;
    pb.JS = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    var Yc = {};

    function Zc(a, b) {
        this.bd = a;
        this.NO = 18;
        this.j = { Sx: 256, Jc: new S };
        z.extend(this.j, b || {})
    }
    var $c = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0],
        ad = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608],
        bd = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19],
        cd = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096];
    Zc.prototype = { getName: w("bd"), me: function(a) { return "na" === this.bd ? cd[a] : this.j.Sx }, qw: function(a) { return "na" === this.bd ? bd[a] : a }, Ul: function() { return this.j.Jc }, lc: function(a) { return Math.pow(2, this.NO - a) }, LC: function(a) { return "na" === this.bd ? ad[$c[a]] : this.lc(a) * this.me(a) } };
    var dd = {
        drawPoly: function(a, b, c, e, f, g) {
            var i = a[1];
            if (i)
                for (var a = a[6], k = 0; k < i.length; k++) {
                    var m = f.Zi(i[k][0], "polygon", c, g);
                    if (m && m.length)
                        for (var n = i[k][1], o = 0; o < n.length; o++) {
                            var s = n[o][1];
                            f.Ic(s[0], c) && (s["cache" + c] || (s["cache" + c] = f.om(s[1], c, e, a)), this.oV(b, s["cache" + c], m))
                        }
                }
        },
        oV: function(a, b, c) {
            c = c[0];
            a.fillStyle = c.lw;
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
            a.closePath();
            c.borderWidth && (a.strokeStyle = c.Vn, a.lineWidth = c.borderWidth / 2, a.stroke());
            a.fill()
        },
        drawGaoqingRoadBorder: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = f.Zi(g[i][0], "polygon", c);
                    if (k && k.length && k[0].borderWidth)
                        for (var m = g[i][1], n = 0; n < m.length; n++) {
                            var o = m[n][1];
                            f.Ic(o[0], c) && (o["cache" + c] || (o["cache" + c] = f.om(o[1], c, e, a)), this.qV(b, o["cache" + c], k))
                        }
                }
        },
        drawGaoqingRoadFill: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = f.Zi(g[i][0], "polygon", c);
                    if (k && k.length)
                        for (var m = g[i][1], n = 0; n < m.length; n++) {
                            var o = m[n][1];
                            f.Ic(o[0], c) && (o["cache" + c] || (o["cache" + c] = f.om(o[1], c, e, a)), this.rV(b, o["cache" + c], k))
                        }
                }
        },
        qV: function(a, b, c) {
            c = c[0];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
            a.closePath();
            a.strokeStyle = c.Vn;
            a.lineWidth = c.borderWidth / 2;
            a.stroke()
        },
        rV: function(a, b, c) {
            a.fillStyle = c[0].lw;
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var c = 2, e = b.length; c < e; c += 2) a.lineTo(b[c], b[c + 1]);
            a.closePath();
            a.fill()
        }
    };
    var ed = {
        drawArrow: function(a, b, c, e, f, g) {
            b.lineWidth = 1.5;
            b.lineCap = "butt";
            b.lineJoin = "miter";
            b.strokeStyle = "rgba(153,153,153,1)";
            var i = a[7];
            if (i) {
                a = i[1];
                e = g.om(i[0], c, e);
                for (i = 0; i < a.length; i++)
                    if (g.Ic(a[i], c)) {
                        var k = e[4 * i],
                            m = e[4 * i + 1],
                            n = e[4 * i + 2],
                            o = e[4 * i + 3],
                            s = (k + n) / 2,
                            v = (m + o) / 2,
                            n = (k - n) / f,
                            o = (m - o) / f,
                            k = s + n / 2,
                            n = s - n / 2,
                            m = v + o / 2,
                            o = v - o / 2;
                        this.hV(b, k, m, n, o)
                    }
            }
        },
        hV: function(a, b, c, e, f) {
            a.beginPath();
            a.moveTo(b, c);
            a.lineTo(e, f);
            a.stroke();
            c = this.bU([b, c], [e, f]);
            b = c[0];
            c = c[1];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            a.lineTo(c[0], c[1]);
            a.lineTo(e, f);
            a.closePath();
            a.stroke()
        },
        bU: function(a, b) {
            var c = b[0] - a[0],
                e = b[1] - a[1],
                f = 1.8 * Math.sqrt(c * c + e * e),
                g = b[0] + 4.8410665352790705 * (c / f),
                f = b[1] + 4.8410665352790705 * (e / f),
                c = Math.atan2(e, c) + Math.PI;
            return [
                [g + 4.8410665352790705 * Math.cos(c - 0.3), f + 4.8410665352790705 * Math.sin(c - 0.3)],
                [g + 4.8410665352790705 * Math.cos(c + 0.3), f + 4.8410665352790705 * Math.sin(c + 0.3)]
            ]
        }
    };
    var fd = {
        drawHregion: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = f.Zi(g[i][0], "polygon3d", c);
                    if (k && k.length)
                        for (var m = g[i][1], n = 0; n < m.length; n++) {
                            var o = m[n][2];
                            if (f.Ic(o[0], c)) {
                                var s = o[2];
                                o["cache" + c] || (o["cache" + c] = f.om(o[1], c, e, a));
                                this.pV(b, o["cache" + c], s, k)
                            }
                        }
                }
        },
        pV: function(a, b, c, e) {
            e = e[0];
            if (!(c < e.filter)) {
                a.fillStyle = e.HV;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
                a.closePath();
                e.borderWidth && (a.strokeStyle = e.Vn, a.lineWidth = e.borderWidth / 2, a.stroke());
                a.fill()
            }
        }
    };
    var gd = {
        parse: function(a, b, c, e, f) {
            for (var g = e.B, i = g.ga(), k = Math.pow(2, 18 - i), m = g.Jc.Uh(g.ub()), n = m.lng, o = m.lat, g = g.Ab(), s = g.width, v = g.height, g = [], m = 0; m < a.length; m++) {
                var x = [],
                    y = a[m].UZ;
                x.x = y[0];
                x.y = y[1];
                x.Z4 = y[2];
                for (var A = (y[0] * c * k - n) / k + s / 2, C = (o - (y[1] + 1) * c * k) / k + v / 2, B = 0; B < a[m].length; B++) a[m][B].hL ? this.iM(a[m][B].hL, y, e, b, c, A, C, i, k, s, v, x) : a[m][B].hX ? this.iM(a[m][B].hX, y, e, b, c, A, C, i, k, s, v, x, p, window.T2) : this.qY(a[m][B].KX, y, e, b, c, A, C, i, k, s, v, x, f);
                g.push(x)
            }
            if (/collision=0/.test(location.search)) {
                a = [];
                for (m = 0; m < g.length; m++)
                    for (B = 0; B < g[m].length; B++) a.push(g[m][B])
            } else a = this.CY(g, e.B.ga());
            for (m = 0; m < a.length; m++)
                if (c = a[m], !c.Sw)
                    if ("fixed" === c.type) {
                        f = t;
                        c.ne && (c.style && 4 === c.direction) && (f = p);
                        if (c.ne)
                            if (f) {
                                var F = this;
                                this.Jr(b, c, e, f, function(a) { for (var c = 0; c < a.kf.length; c++) F.CJ(b, a.kf[c].Sd, a.kf[c].Td, a.kf[c].text, a.style, e) })
                            } else this.Jr(b, c, e);
                        if (c.style && !f)
                            for (B = 0; B < c.kf.length; B++) this.CJ(b, c.kf[B].Sd, c.kf[B].Td, c.kf[B].text, c.style, e)
                    } else if ("line" === c.type)
                for (B = 0; B < c.RN.length; B++) f = c.RN[B], gd.kV(b, f.Sd, f.Td, f.FT, f.PN, f.width, f.height, c.style, e);
            return g
        },
        iM: function(a, b, c, e, f, g, i, k, m, n, o, s, v, x) {
            a = a[1];
            for (b = 0; b < a.length; b++) {
                var y = a[b],
                    A = y[0],
                    C = c.Zi(A, "point", k, x),
                    A = c.Zi(A, "pointText", k, x),
                    y = y[1],
                    B = q,
                    F = 100,
                    E = 0,
                    G = 0;
                C && C[0] && (C = C[0], B = C.ne, F = C.zoom || 100);
                A = A && A[0] ? A[0] : q;
                for (C = 0; C < y.length; C++) {
                    var O = y[C][4];
                    if (O && c.Ic(O[2], k)) {
                        var L = Math.round(O[0] / 100) / m + g,
                            M = f - Math.round(O[1] / 100) / m + i;
                        if (v || !(-50 > L || -50 > M || L > n + 50 || M > o + 50)) {
                            var Y = O[7] || "",
                                ka = { type: "fixed", uid: O[3] || "", name: Y, xx: O[4], ks: q, kf: [], lx: [L, M], style: A };
                            if (B) {
                                var fa = window.iconSetInfo_high[B];
                                if (!fa) {
                                    var va = B.charCodeAt(0);
                                    48 <= va && 57 >= va && (fa = window.iconSetInfo_high["_" + B])
                                }
                                fa && (E = fa[2], G = fa[3], E = E / 2 * F / 100, G = G / 2 * F / 100, ka.ks = { Sd: L - E / 2, Td: M - G / 2, width: E, height: G }, ka.ne = B)
                            }
                            if (A) {
                                O = O[5];
                                "number" !== typeof O && (O = 0);
                                var ya = fa = 0,
                                    va = (A.fontSize || 12) / 2,
                                    Ea = 0.2 * va;
                                e.font = gd.sw(A, c);
                                var Y = Y.split("\\"),
                                    ra = Y.length;
                                ka.direction = O;
                                for (var Ua = 0; Ua < ra; Ua++) {
                                    var re = Y[Ua],
                                        Oc = e.measureText(re).width;
                                    switch (O) {
                                        case 3:
                                            ya = M - va / 2 * ra - Ea * (ra - 1) / 2;
                                            fa = L - Oc - E / 2;
                                            ya = ya + va * Ua + Ea * Ua;
                                            break;
                                        case 1:
                                            ya = M - va / 2 * ra - Ea * (ra - 1) / 2;
                                            fa = L + E / 2;
                                            ya = ya + va * Ua + Ea * Ua;
                                            break;
                                        case 2:
                                            ya = M - G / 2 - va * ra - Ea * (ra - 1) - Ea;
                                            fa = L - Oc / 2;
                                            ya = ya + va * Ua + Ea * Ua;
                                            break;
                                        case 0:
                                            ya = M + G / 2 + Ea / 2;
                                            fa = L - Oc / 2;
                                            ya = ya + va * Ua + Ea * Ua;
                                            break;
                                        case 4:
                                            ya = M - va / 2 * ra - Ea * (ra - 1) / 2, fa = L - Oc / 2, ya = ya + va * Ua + Ea * Ua
                                    }
                                    ka.kf.push({ Sd: fa, Td: ya, width: Oc, height: va, text: re })
                                }
                            }
                            s.push(ka)
                        }
                    }
                }
            }
        },
        qY: function(a, b, c, e, f, g, i, k, m, n, o, s, v) {
            b = a[7].length;
            if ((n = c.Zi(a[0], "pointText", k)) && n.length) {
                n = n[0];
                e.font = gd.sw(n, c);
                for (var o = n.fontSize / 2, x = a[1], y = a[2], A = y.split("").length, C = a[4], B = C.slice(0, 2), F = 2; F < C.length; F += 2) B[F] = B[F - 2] + C[F], B[F + 1] = B[F - 1] + C[F + 1];
                for (F = 2; F < C.length; F += 2) 0 === F % (2 * A) || 1 === F % (2 * A) || (B[F] = B[F - 2] + C[F] / v, B[F + 1] = B[F - 1] + C[F + 1] / v);
                for (v = 0; v < b; v++)
                    if (c.Ic(a[7][v], k)) {
                        var F = [],
                            E = l,
                            G = l,
                            O = l,
                            L = l,
                            M = y.split("");
                        a[6][v] && M.reverse();
                        for (var C = 2 * v * A, C = B.slice(C, C + 2 * A), Y = 0; Y < A; Y++) {
                            var ka = a[5][A * v + Y],
                                fa = C[2 * Y] / 100 / m + g,
                                va = f - C[2 * Y + 1] / 100 / m + i,
                                ya = M[Y],
                                Ea = e.measureText(ya).width;
                            if (E === l) E = fa - Ea / 2, G = va - o / 2, O = E + Ea, L = G + o;
                            else {
                                var ra = fa - Ea / 2,
                                    Ua = va - o / 2;
                                ra < E && (E = ra);
                                Ua < G && (G = Ua);
                                ra + Ea > O && (O = ra + Ea);
                                Ua + o > L && (L = Ua + o)
                            }
                            F.push({ PN: ya, Sd: fa, Td: va, FT: ka, width: Ea, height: o })
                        }
                        s.push({ type: "line", xx: x, style: n, RN: F, Xh: E, Yh: G, ik: O, jk: L })
                    }
            }
        },
        Jr: function(a, b, c, e, f) {
            var g = b.ne;
            if ("lanche" !== g)
                if (gd.Nw[g]) this.zJ(a, b, gd.Nw[g], e, f);
                else {
                    var c = c.gK(g),
                        i = new Image,
                        k = this;
                    i.onload = function() {
                        gd.Nw[g] = this;
                        k.zJ(a, b, this, e, f);
                        i.onload = q
                    };
                    i.src = c
                }
        },
        zJ: function(a, b, c, e, f) {
            var g = b.ks,
                i = g.Sd,
                k = g.Td,
                m = q,
                n = q,
                o = p,
                s = b.style ? b.style.xk : q;
            if (b.style && 62203 === s) {
                for (var v = n = m = 0; v < b.kf.length; v++) m < b.kf[v].width && (m = b.kf[v].width), n += 20;
                m = Math.ceil(m) + 10
            }
            e && 519 === s && (o = t);
            m !== q && n !== q ? this.nV(a, b, c, 8, m, n) : e && o ? (m = Math.ceil(b.kf[0].width) + 6, this.gV(a, b, c, 12, m, c.height / 2)) : a.drawImage(c, i, k, g.width, g.height);
            f && f(b)
        },
        nV: function(a, b, c, e, f, g) {
            var i = b.lx[0] - f / 2,
                b = b.lx[1] - g / 2;
            0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
            var k = e / 2;
            a.drawImage(c, 0, 0, e, e, i, b, k, k);
            a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
            a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
            a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
            a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
            a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
            a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
            a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
            a.drawImage(c, c.width - e, c.height - e, e, e, i + f - k, b + g - k, k, k)
        },
        gV: function(a, b, c, e, f, g) {
            var i = b.lx[0] - f / 2,
                b = b.lx[1] - g / 2,
                g = e / 2;
            a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
            a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
            a.drawImage(c, c.width - e, 0, e, c.height, i + f - g, b, g, c.height / 2)
        },
        kV: function(a, b, c, e, f, g, i, k, m) {
            a.font = gd.sw(k, m);
            a.fillStyle = k.RJ;
            g /= 2;
            i /= 2;
            a.save();
            a.translate(b, c);
            a.rotate(-e / 180 * Math.PI);
            0 < k.Fw && (a.lineWidth = k.Fw, a.strokeStyle = k.GK, a.strokeText(f, -g, -i));
            a.fillText(f, -g, -i);
            a.restore()
        },
        CJ: function(a, b, c, e, f, g) {
            a.font = gd.sw(f, g);
            a.fillStyle = f.RJ;
            0 < f.Fw && (a.lineWidth = f.Fw, a.strokeStyle = f.GK, a.strokeText(e, b, c));
            a.fillText(e, b, c)
        },
        sw: function(a, b) {
            var c = a.fontSize / 2,
                e = 10 * a.fontWeight;
            return e = b.nD ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif' : e + (" " + c + "px") + " arial, sans-serif"
        },
        CY: function(a, b) {
            var c = [],
                e = 0;
            5 === b && (e = 1);
            a.sort(function(a, b) { return a.x * a.y < b.x * b.y ? -1 : 1 });
            for (var f = 0, g = a.length; f < g; f++)
                for (var i = a[f], k = 0, m = i.length; k < m; k++) {
                    var n = i[k],
                        o = l,
                        s = l,
                        v = l,
                        x = l;
                    if ("fixed" === n.type) {
                        var y = n.ks,
                            A = n.kf;
                        y && (o = y.Sd, s = y.Td, v = y.Sd + y.width, x = y.Td + y.height);
                        for (y = 0; y < A.length; y++) {
                            var C = A[y];
                            o !== l ? (C.Sd < o && (o = C.Sd), C.Td < s && (s = C.Td), C.Sd + C.width > v && (v = C.Sd + C.width), C.Td + C.height > x && (x = C.Td + C.height)) : (o = C.Sd, s = C.Td, v = C.Sd + C.width, x = C.Td + C.height)
                        }
                    } else "line" === n.type ? (o = n.Xh, s = n.Yh, v = n.ik, x = n.jk) : "biaopai" === n.type && (x = n.Q3, o = x.Sd, s = x.Td, v = x.Sd + x.width, x = x.Td + x.height);
                    o !== l && (n.Xh = o, n.Yh = s, n.ik = v, n.jk = x, c.push(n))
                }
            c.sort(function(a, b) { return b.xx - a.xx || b.Xh - a.Xh || b.Yh - a.Yh });
            f = 0;
            for (g = c.length; f < g; f++) {
                m = c[f];
                m.Sw = t;
                m.LI = [];
                for (k = f + 1; k < g; k++) i = c[k], m.ik - e < i.Xh || (m.Xh > i.ik - e || m.jk - e < i.Yh || m.Yh > i.jk - e) || m.LI.push(k)
            }
            f = 0;
            for (g = c.length; f < g; f++)
                if (k = c[f], k.Sw === t) {
                    e = k.LI;
                    k = 0;
                    for (m = e.length; k < m; k++) c[e[k]].Sw = p
                } return c
        },
        Nw: {}
    };
    var hd = ["round", "butt", "square"],
        id = ["miter", "round", "bevel"],
        jd = { q1: [{ stroke: "#FF6600", Eb: 1, Cb: "round", Db: "round", ce: [4, 3] }], r1: [{ stroke: "#f5f3f0", Eb: 1, Cb: "round", Db: "round", ce: [4, 3] }], e3: [{ stroke: "#DB7093", Eb: 1, Cb: "round", Db: "round", ce: [4, 3] }], o3: [{ stroke: "#5c91c5", Eb: 1, Cb: "round", Db: "round", ce: [10, 11] }], s4: [{ stroke: "#737373", Eb: 1, Cb: "round", Db: "round", ce: [6, 3] }], X4: [{ stroke: "#aea08a", Eb: 1, Cb: "round", Db: "round", ce: [4, 3] }] },
        kd = {};

    function ld(a, b) {
        if ("tielu" === a || "tielu_0" === a) {
            if ("off" === window.Ra[b].bmapRailwayVisibility) return [];
            var c = "#ffffff",
                e = "#949494";
            window.Ra[b].bmapRailwayStrokeColor && (c = window.Ra[b].bmapRailwayStrokeColor);
            window.Ra[b].bmapRailwayFillColor && (e = window.Ra[b].bmapRailwayFillColor);
            if (4 <= b && 9 >= b || 10 <= b && 16 >= b) return [{ stroke: c, Eb: 1.5, Cb: "butt", Db: "round", ce: [10, 11] }, { stroke: e, Eb: 2, Cb: "round", Db: "round" }];
            if (17 <= b && 18 >= b) return [{ stroke: c, Eb: 2.5, Cb: "butt", Db: "round", ce: [15, 16] }, { stroke: e, Eb: 5, Cb: "round", Db: "round" }];
            if (19 <= b && 20 >= b) return [{ stroke: c, Eb: 4.5, Cb: "butt", Db: "round", ce: [25, 26] }, { stroke: e, Eb: 5, Cb: "round", Db: "round" }]
        } else if (0 === a.indexOf("ditie_zj")) { if (12 <= b && 16 >= b) return [{ stroke: "#868686", Eb: 1, Cb: "round", Db: "round", ce: [7, 4] }]; if (17 <= b && 18 >= b || 19 <= b && 20 >= b) return [{ stroke: "#6e6e6e", Eb: 1, Cb: "round", Db: "round", ce: [7, 4] }] } else if (/^tongdaomian/.test(a)) { if (17 === b) return [{ stroke: "#e5e5e5", Eb: 4, Cb: "square", Db: "round" }, { stroke: "#a8a8a8", Eb: 6, Cb: "square", Db: "round" }]; if (18 === b) return [{ stroke: "#e5e5e5", Eb: 6, Cb: "square", Db: "round" }, { stroke: "#a8a8a8", Eb: 8, Cb: "square", Db: "round" }]; if (19 <= b && 21 >= b) return [{ stroke: "#e5e5e5", Eb: 8, Cb: "square", Db: "round" }, { stroke: "#a8a8a8", Eb: 10, Cb: "square", Db: "round" }] } else if (/^jietizhongduan|^dixiatongdaojieti/.test(a)) { if (17 === b) return [{ stroke: "#e5e5e5", Eb: 4, Cb: "butt", Db: "round", ce: [2, 1] }, { stroke: "#bebebe", Eb: 6, Cb: "butt", Db: "round" }]; if (18 === b) return [{ stroke: "#e5e5e5", Eb: 6, Cb: "butt", Db: "round", ce: [3, 1] }, { stroke: "#bebebe", Eb: 8, Cb: "butt", Db: "round" }]; if (19 <= b && 21 >= b) return [{ stroke: "#e5e5e5", Eb: 8, Cb: "butt", Db: "round", ce: [4, 2] }, { stroke: "#bebebe", Eb: 10, Cb: "butt", Db: "round" }] } else if (/^guojietianqiao/.test(a)) return 18 === b ? [{ stroke: "#ffffff", Eb: 6, Cb: "butt", Db: "round", ce: [4, 2] }, { stroke: "#bebebe", Eb: 8, Cb: "butt", Db: "round" }] : [{ stroke: "#ffffff", Eb: 8, Cb: "butt", Db: "round", ce: [4, 2] }, { stroke: "#bebebe", Eb: 10, Cb: "butt", Db: "round" }];
        return jd[a]
    }
    var md = {
        drawLink: function(a, b, c, e, f) {
            var g = a[1];
            g && (a = a[6], this.zN(g, c, e, b, a, f, p), this.zN(g, c, e, b, a, f, t))
        },
        zN: function(a, b, c, e, f, g, i) {
            for (var k = 0; k < a.length; k++) {
                var m = g.Zi(a[k][0], "line", b);
                if (m && m.length && (!i || m[0].borderWidth))
                    if (!m[0].no || ld(m[0].no, b))
                        for (var n = a[k][1], o = 0; o < n.length; o++) {
                            var s = n[o][3];
                            g.Ic(s[0], b) && (s["cache" + b] || (s["cache" + b] = g.om(s[1], b, c, f)), this.lV(e, s["cache" + b], m, i, b))
                        }
            }
        },
        drawSingleTexture: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = f.Zi(g[i][0], "line", c);
                    if (k && k.length)
                        for (var m = g[i][1], n = 0; n < m.length; n++) {
                            var o = m[n][11];
                            if (f.Ic(o[0], c)) {
                                var s;
                                o["cache" + c] || (o["cache" + c] = f.om(o[1], c, e, a));
                                s = o["cache" + c];
                                o = o[3];
                                o *= Math.pow(2, c - f.I_[c].Gc);
                                this.mV(b, s, k, o, f)
                            }
                        }
                }
        },
        mV: function(a, b, c, e, f) {
            var g = c[0].no,
                i = this;
            if (kd[g]) i.Jr(b, e, a, kd[g]);
            else {
                var c = f.gK(g),
                    k = new Image;
                k.onload = function() {
                    kd[g] = k;
                    i.Jr(b, e, a, k);
                    k.onload = q
                };
                k.src = c
            }
        },
        Jr: function(a, b, c, e) {
            var f = [a[0], a[1]],
                g = [a[2], a[3]],
                a = g[0] - f[0],
                g = g[1] - f[1],
                f = [f[0] + a / 2, f[1] + g / 2],
                i = Math.sqrt(a * a + g * g),
                b = b / 10,
                a = Math.atan2(g, a);
            c.save();
            c.translate(f[0], f[1]);
            c.rotate(Math.PI / 2 + a);
            c.drawImage(e, -b / 2, -i / 2, b, i);
            c.restore()
        },
        lV: function(a, b, c, e, f) {
            c = c[0];
            if (!e && c.no && ld(c.no, f)) this.sV(a, b, c, ld(c.no, f));
            else {
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var f = 2, g = b.length; f < g; f += 2) a.lineTo(b[f], b[f + 1]);
                c.borderWidth && e ? (a.strokeStyle = c.Vn, a.lineCap = hd[c.VT], a.lineJoin = id[1], a.lineWidth = c.borderWidth / 2, a.stroke()) : e || (a.strokeStyle = c.lw, a.lineCap = hd[c.GV], a.lineJoin = id[1], a.lineWidth = c.IV / 2, a.stroke())
            }
        },
        sV: function(a, b, c, e) {
            if (c = e[1]) {
                a.strokeStyle = c.stroke;
                a.lineCap = c.Cb;
                a.lineJoin = c.Db;
                a.lineWidth = c.Eb;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
                a.stroke()
            }
            if (e = e[0])
                if (e.ce) this.jV(a, b, e);
                else {
                    a.strokeStyle = e.stroke;
                    a.lineCap = e.Cb;
                    a.lineJoin = e.Db;
                    a.lineWidth = e.Eb;
                    a.beginPath();
                    a.moveTo(b[0], b[1]);
                    c = 2;
                    for (f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
                    a.stroke()
                }
        },
        jV: function(a, b, c) {
            a.strokeStyle = c.stroke;
            a.lineCap = c.Cb;
            a.lineJoin = c.Db;
            a.lineWidth = c.Eb;
            var e = p,
                c = c.ce[0];
            a.beginPath();
            for (var f = 0; f < b.length - 2; f += 2) {
                var g = b[f],
                    i = b[f + 1],
                    k = b[f + 2] - g,
                    m = b[f + 3] - i,
                    n = 0 !== k ? m / k : 0 < m ? 1E15 : -1E15,
                    m = Math.sqrt(k * k + m * m),
                    o = c;
                for (a.moveTo(g, i); 0.1 <= m;) {
                    o > m && (o = m);
                    var s = Math.sqrt(o * o / (1 + n * n));
                    0 > k && (s = -s);
                    g += s;
                    i += n * s;
                    a[e ? "lineTo" : "moveTo"](g, i);
                    m -= o;
                    e = !e
                }
            }
            a.stroke()
        }
    };
    var nd = 3,
        od = 4,
        pd = 7,
        qd = 8,
        rd = 15,
        sd = 16,
        td = {},
        ud = {},
        vd = {},
        wd = {},
        xd, yd = { 3: { start: 3, Gc: 3 }, 4: { start: 4, Gc: 5 }, 5: { start: 4, Gc: 5 }, 6: { start: 6, Gc: 7 }, 7: { start: 6, Gc: 7 }, 8: { start: 8, Gc: 9 }, 9: { start: 8, Gc: 9 }, 10: { start: 10, Gc: 10 }, 11: { start: 11, Gc: 12 }, 12: { start: 11, Gc: 12 }, 13: { start: 11, Gc: 12 }, 14: { start: 14, Gc: 15 }, 15: { start: 14, Gc: 15 }, 16: { start: 16, Gc: 17 }, 17: { start: 16, Gc: 17 }, 18: { start: 18, Gc: 19 }, 19: { start: 18, Gc: 19 }, 20: { start: 18, Gc: 19 }, 21: { start: 18, Gc: 19 } };

    function zd(a) {
        this.B = a;
        this.Pc = a.K.devicePixelRatio;
        this.I_ = yd
    }
    zd.prototype = {
        QB: function(a, b, c, e, f, g, i, k, m) {
            var n = this;
            m || (m = 0);
            if (!(z.em(window.hh) ? window.ey : window.Et[f]) && 100 > m) setTimeout(function() { n.QB(a, b, c, e, f, g, i, k, m + 1) }, 100);
            else {
                xd || (xd = k);
                var o = b.getContext("2d"),
                    s = b.parentNode;
                s.removeChild(b);
                o.clearRect(0, 0, g, g);
                s.appendChild(b);
                s = this.Pc;
                1 < s && !b._scale && (o.scale(s, s), b._scale = p);
                o.fillStyle = this.hM("#F5F3F0");
                window.Ra[f].bmapLandColor && (o.fillStyle = this.hM(window.Ra[f].bmapLandColor));
                s = b.style.width;
                b.style.width = "0px";
                b.style.width = s;
                o.fillRect(0, 0, g, g);
                if (a[0])
                    for (s = 0; s < a[0].length; s++) {
                        var v = a[0][s];
                        v[0] === pd && dd.drawPoly(v, o, f, g, this)
                    }
                17 <= this.B.ga() ? (n.BJ(a, o, f, g, i, c, e), b.$m = p) : setTimeout(function() {
                    if (!b.eG) {
                        n.BJ(a, o, f, g, i, c, e);
                        b.$m = p
                    }
                }, 1)
            }
        },
        BJ: function(a, b, c, e) {
            if (a[0])
                for (var f = 0; f < a[0].length; f++) {
                    var g = a[0][f],
                        i = g[0];
                    i === od ? md.drawLink(g, b, c, e, this) : i === sd ? md.drawLink(g, b, c, e, this) : i === rd ? (dd.drawGaoqingRoadBorder(g, b, c, e, this), dd.drawGaoqingRoadFill(g, b, c, e, this)) : 18 === i ? ed.drawArrow(g, b, c, e, Math.pow(2, c - yd[c].Gc), this) : i === qd ? fd.drawHregion(g, b, c, e, this) : 19 === i && md.drawSingleTexture(g, b, c, e, this)
                }
        },
        AJ: function(a, b, c, e, f, g, i) {
            var k = this;
            i || (i = 0);
            !(z.em(window.hh) ? window.ey : window.Et[g]) && 100 > i ? setTimeout(function() { k.AJ(a, b, c, e, f, g, i + 1) }, 100) : (xd || (xd = b), a.xY = gd.parse(a, c, e, this, f))
        },
        Zi: function(a, b, c, e) {
            var f = a + "-" + b + "-" + c;
            if (e) return ud[f] || (ud[f] = this.fg(a, b, c, e)), ud[f];
            td[f] = this.fg(a, b, c);
            return td[f]
        },
        fg: function(a, b, c, e) {
            var f;
            f = z.em(window.hh) ? e || window.ey : e || window.Et[c];
            e = f[2];
            if ("arrow" === b) return this.mY(e[2]);
            switch (b) {
                case "point":
                    e = e[0];
                    break;
                case "pointText":
                    e = e[1];
                    break;
                case "line":
                    e = e[3];
                    break;
                case "polygon":
                    e = e[4];
                    break;
                case "polygon3d":
                    e = e[5]
            }
            var g = [],
                c = f[1][c - 1][0][a];
            if (!c) return g;
            for (f = 0; f < c.length; f++) {
                var i = e[c[f]];
                if (i) {
                    switch (b) {
                        case "polygon":
                            i = this.vY(i, a);
                            break;
                        case "line":
                            i = this.rY(i, a);
                            break;
                        case "pointText":
                            i = this.tY(i, a);
                            break;
                        case "point":
                            i = this.sY(i, a);
                            break;
                        case "polygon3d":
                            i = this.uY(i, a)
                    }
                    g[g.length] = i
                }
            }
            return g
        },
        tY: function(a, b) { return { xk: b, RJ: this.lg(a[0]), GK: this.lg(a[1]), Z0: this.lg(a[2]), fontSize: a[3], Fw: a[4], fontWeight: a[5], fontStyle: a[6], TU: a[7] } },
        sY: function(a, b) { return { xk: b, xx: a[0], L4: a[1], ne: a[2], dX: a[3], y3: a[4], TU: a[5], zoom: a[6] } },
        rY: function(a, b) { return { xk: b, Vn: this.lg(a[0]), lw: this.lg(a[1]), borderWidth: a[2], IV: a[3], VT: a[4], GV: a[5], H2: a[6], I2: a[7], J2: a[8], Z2: a[9], a3: a[10], WT: a[11], no: a[12], XT: a[13], J1: a[14], Y2: a[15], F2: a[16], x3: a[17], b4: a[18] } },
        vY: function(a, b) { return { xk: b, lw: this.lg(a[0]), Vn: this.lg(a[1]), borderWidth: a[2], WT: a[3], XT: a[4], T4: a[5], E2: a[6], y4: a[7], z4: this.lg(a[8]) } },
        uY: function(a, b) { return { xk: b, filter: a[0], vM: a[1], G2: a[2], borderWidth: a[3], Vn: this.lg(a[4]), HV: this.lg(a[5]), I1: this.lg(a[6]), P3: a[7] } },
        mY: function(a) { for (var b in a) return a = a[b], { color: this.lg(a[0]), dX: a[1], ne: a[2] } },
        lg: function(a) {
            var b = a;
            if (wd[b]) return wd[b];
            a >>>= 0;
            wd[b] = "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255) / 255 + ")";
            return wd[b]
        },
        hM: function(a) {
            a = a.replace("#", "");
            6 === a.length && (a += "ff");
            for (var b = "rgba(", c = 0; 8 > c; c += 2) b = 6 > c ? b + (parseInt(a.slice(c, c + 2), 16) + ",") : b + (parseInt(a.slice(c, c + 2), 16) / 255 + ")");
            return b
        },
        Ic: function(a, b) {
            var c;
            vd[a] || (c = a.toString(2), 8 > c.length && (c = Array(8 - c.length + 1).join("0") + c), vd[a] = c);
            c = vd[a];
            return "1" === c[b - yd[b].start]
        },
        om: function(a, b, c) {
            var e = [],
                b = Math.pow(2, b - yd[b].Gc) / 100,
                f = a[0] * b,
                g = a[1] * b;
            e[e.length] = f;
            e[e.length] = c - g;
            for (var i = 2; i < a.length; i += 2) f += a[i] * b, g += a[i + 1] * b, e[e.length] = f, e[e.length] = c - g;
            return e
        },
        gK: function(a) {
            var b = a.length % xd.length,
                c = this.hW();
            return xd[b] + a + ".png?v=" + c.OE + "&udt=" + c.JE
        },
        hW: function() { if (this.dD) return this.dD; var a = "undefined" !== typeof MSV ? MSV.q3 : {}; return this.dD = { OE: a.version ? a.version : "001", JE: a.m_ ? a.m_ : "20150621" } }
    };
    Q = z.lang.Lt;
    nd = 3;
    od = 4;
    pd = 7;
    qd = 8;
    rd = 15;
    sd = 16;

    function Lc(a, b, c) {
        c = c || {};
        this.B = a;
        this.mv = b;
        this.Pc = b.vM;
        this.Wa = { VZ: "na", zIndex: 0, lN: c.tileUrls || { http: ["http://online0.map.bdimg.com/pvd/?qt=vtile", "http://online1.map.bdimg.com/pvd/?qt=vtile", "http://online2.map.bdimg.com/pvd/?qt=vtile", "http://online3.map.bdimg.com/pvd/?qt=vtile", "http://online4.map.bdimg.com/pvd/?qt=vtile"], https: ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss2.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss3.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv/pvd/?qt=vtile"] }, cD: c.iconUrls || ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/"], qE: p };
        this.MA = "";
        this.ER = {};
        var c = c.urlOpts || { styles: "pl", extdata: 1, textimg: 0, mesh3d: 0, limit: 30 },
            e;
        for (e in c) c.hasOwnProperty(e) && (this.MA = this.MA + "&" + e + "=" + c[e]);
        this.Lg = {};
        this.ur = [];
        this.xs = 0;
        this.Tw = t;
        this.Nw = {};
        a = this.Wa.VZ;
        Yc[a] ? a = Yc[a] : (b = new Zc(a, l), a = Yc[a] = b);
        this.Ig = a
    }
    window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
    da = Lc.prototype;
    da.ta = function() {
        var a = this.B,
            b = a.hi;
        if (!this.Kn) {
            var c = b.Sp(this.Wa.zIndex);
            c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
            this.Kn = c
        }
        b.rh.appendChild(this.Kn);
        b.U2 = c;
        if (this.Wa.qE) {
            Ad(this);
            var e = this;
            a.addEventListener("checkvectorclick", function(a) {
                var b;
                a: {
                    b = a.offsetX;
                    var c = a.offsetY,
                        k = e.ur.xY;
                    if (k)
                        for (var m = 0; m < k.length; m++)
                            for (var n = k[m], o = 0; o < n.length; o++)
                                if (a = n[o], !a.Sw && a.ks && b > a.Xh && b < a.ik && c > a.Yh && c < a.jk) {
                                    b = a.ks;
                                    b = { type: 9, name: a.name, uid: a.uid, point: { x: b.Sd + b.width / 2, y: b.Td + 6 } };
                                    break a
                                } b = q
                }
                b && (a = new Q("onvectorclick"), a.Q2 = b, a.af = "base", this.dispatchEvent(a))
            })
        }
    };

    function Ad(a) {
        var b = a.B,
            c = b.hi,
            e = a.Pc,
            f = b.Ab(),
            g = f.width,
            f = f.height,
            i = N("canvas");
        i.style.cssText = "position: absolute;left:0;top:0;width:" + g + "px;height:" + f + "px;z-index:2;";
        i.width = g * e;
        i.height = f * e;
        a.Yw = i;
        a.Go = i.getContext("2d");
        a.Go.scale(e, e);
        a.Go.textBaseline = "top";
        c.rh.appendChild(i);
        b.nR = i
    }
    da.update = function(a, b) {
        b = b || {};
        this.LE = b.LE;
        if (this.Wa.qE && (b.$n && this.$n(), b.EZ)) {
            var c = this.Pc,
                e = this.B.Ab(),
                f = e.width,
                e = e.height,
                g = this.Yw,
                i = g.style;
            i.width = f + "px";
            i.height = e + "px";
            g.width = f * c;
            g.height = e * c;
            this.Go.scale(c, c);
            this.Go.textBaseline = "top"
        }
        if (b.O4) {
            c = this.Kn;
            f = 0;
            for (e = c.childNodes.length; f < e; f++) c.childNodes[f].$m = t
        }
        this.Zv = a;
        this.Jo(a)
    };
    da.Jo = function(a) {
        this.ur = [];
        var b = this.B,
            c = b.ga(),
            e = b.Jc.Uh(b.ie),
            f = this.Ig.lc(c),
            e = [Math.round(-e.lng / f), Math.round(e.lat / f)],
            f = this.Ig.me(c),
            g = b.aa.replace(/^TANGRAM_/, ""),
            i = this.Ig.qw(c),
            b = this.B,
            k = -b.offsetY + b.height / 2,
            m = this.Kn;
        m.style.left = -b.offsetX + b.width / 2 + "px";
        m.style.top = k + "px";
        this.Ge ? this.Ge.length = 0 : this.Ge = [];
        b = 0;
        for (k = m.childNodes.length; b < k; b++) {
            var n = m.childNodes[b];
            n.qq = t;
            this.Ge.push(n)
        }
        if (b = this.lm)
            for (var o in b) delete b[o];
        else this.lm = {};
        this.He ? this.He.length = 0 : this.He = [];
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0],
                s = a[b][1];
            o = 0;
            for (var v = this.Ge.length; o < v; o++) {
                var x = this.Ge[o];
                if (x.id === g + "_" + n + "_" + s + "_" + i + "_" + c) {
                    x.qq = p;
                    this.lm[x.id] = x;
                    break
                }
            }
        }
        b = 0;
        for (k = this.Ge.length; b < k; b++) x = this.Ge[b], x.qq || (x.PA = q, delete x.PA, x.$m = t, this.He.push(x));
        o = [];
        v = f * this.Pc;
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0],
                s = a[b][1],
                x = n * f + e[0],
                y = (-1 - s) * f + e[1],
                A = g + "_" + n + "_" + s + "_" + i + "_" + c,
                C = this.lm[A],
                B = q;
            if (C) B = C.style, B.left = x + "px", B.top = y + "px", B.width = f + "px", B.height = f + "px", C.$m ? C.AE && C.AE && this.ur.push(C.AE) : (C.eG = p, C.PA = q, delete C.PA, o.push([n, s, C]));
            else {
                if (0 < this.He.length) {
                    var C = this.He.shift(),
                        F = C.getContext("2d");
                    C.getAttribute("width") !== v && (C._scale = t);
                    C.setAttribute("width", v);
                    C.setAttribute("height", v);
                    B = C.style;
                    B.width = f + "px";
                    B.height = f + "px";
                    F.clearRect(0, 0, v, v)
                } else C = document.createElement("canvas"), B = C.style, B.position = "absolute", this.Wa.backgroundColor && (B.background = this.Wa.backgroundColor), B.width = f + "px", B.height = f + "px", C.setAttribute("width", v), C.setAttribute("height", v), m.appendChild(C);
                C.id = A;
                B.left = x + "px";
                B.top = y + "px";
                o.push([n, s, C])
            }
            C.style.visibility = ""
        }
        b = 0;
        for (k = this.He.length; b < k; b++) this.He[b].style.visibility = "hidden";
        if (0 === o.length) {
            Bd(this);
            a = this.B.aa.replace(/^TANGRAM_/, "");
            c = this.B.ga();
            e = this.Ig.qw(c);
            f = {};
            for (g = 0; g < this.Zv.length; g++) i = this.Zv[g], i = a + "_" + i[0] + "_" + i[1] + "_" + e + "_" + c, this.Lg[i] && (f[i] = this.Lg[i], this.LE && this.mv.RB.QB(this.Lg[i].z_, this.Lg[i].TZ, this.Lg[i].Hl, this.Lg[i].Wo, this.Lg[i].BD, this.Ig.me(this.Lg[i].BD), this.Ig.LC(this.Lg[i].BD), this.Wa.cD));
            this.Lg = f
        } else {
            this.xs = o.length;
            this.Tw = t;
            c = this.Ig.qw(this.B.ga());
            for (e = 0; e < a.length; e++) a[e][3] = c;
            for (e = 0; e < o.length; e++) a = o[e][2], f = o[e][0], g = o[e][1], o[e][3] = c, a.$m = t, a.eG = t, Cd(this, f, g, c, a)
        }
    };

    function Cd(a, b, c, e, f) {
        var g = b + "_" + c + "_" + e,
            i = a.ER;
        if (i[g]) { if ("loading" === i[g].status) return } else i[g] = { status: "init", DM: 0 };
        var k = a,
            m = k.B,
            n = [],
            n = "0" === D.zt ? k.Wa.lN.http : k.Wa.lN.https,
            o = Math.abs(b + c) % n.length,
            s = "x=" + b + "&y=" + c + "&z=" + e,
            v = Dd(a.mv),
            x = v.OE,
            v = v.JE,
            y = "_" + (0 > b ? "_" : "") + (0 > c ? "$" : "") + parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e, 10).toString(36),
            s = s + a.MA + "v=" + x + "&udt=" + v + "&fn=window." + y,
            x = n[o] + "&" + s,
            x = n[o] + "&param=" + window.encodeURIComponent(Kb(s));
        window[y] = function(a) {
            clearTimeout(i[g].Bk);
            i[g] = q;
            if (a) {
                var n = m.ga(),
                    o;
                a: { for (o = 0; o < k.Zv.length; o++) { var s = k.Zv[o]; if (s[0] === b && s[1] === c && s[3] === e) { o = p; break a } } o = t }
                if (o !== t) {
                    o = new Q("updateindoor");
                    o.IndoorCanvas = [];
                    o.IndoorCanvas.push({ canvasDom: f, data: a, canvasID: f.id, ratio: k.Pc });
                    m.dispatchEvent(o);
                    if (m.K.fw) {
                        if (k.Lg[f.id] = { z_: a, TZ: f, Hl: b, Wo: c, BD: n }, k.mv.RB.QB(a, f, b, c, n, k.Ig.me(n), k.Ig.LC(n), k.Wa.cD), k.Wa.qE) {
                            n = [];
                            n.UZ = [b, c, e];
                            if (a[0])
                                for (o = 0; o < a[0].length; o++) a[0][o][0] === nd && n.push({ hL: a[0][o] });
                            if (a[2])
                                for (o = 0; o < a[2].length; o++) n.push({ KX: a[2][o] });
                            f.AE = n;
                            k.ur.push(n);
                            k.Tw === t && k.xs--;
                            (0 === k.xs || k.Tw === p) && Bd(k)
                        }
                    } else k.xs--, (0 === k.xs || k.Tw === p) && Bd(k);
                    delete window[y]
                }
            }
        };
        pa(x);
        i[g].status = "loading";
        k = a;
        i[g].Bk = setTimeout(function() { 3 > i[g].DM ? (i[g].DM++, i[g].status = "init", Cd(k, b, c, e, f)) : i[g] = q }, 4E3)
    }

    function Bd(a) {
        if (a.Yw) {
            var b = a.B;
            a.Yw.style.left = -b.offsetX + "px";
            a.Yw.style.top = -b.offsetY + "px";
            var c = new Q("updateindoorlabel");
            c.labelCanvasDom = b.nR;
            b.dispatchEvent(c);
            if (b.K.fw) {
                a.$n();
                var c = a.Ig,
                    e = b.ga(),
                    b = c.qw(b.ga());
                a.mv.RB.AJ(a.ur, a.Wa.cD, a.Go, c.me(e), Math.pow(2, e - b), e)
            }
        }
    }
    da.$n = function() {
        var a = this.B.Ab(),
            b = this.Pc;
        this.Go.clearRect(0, 0, a.width * b, a.height * b)
    };
    da.remove = function() {
        var a = this.B.hi;
        this.Kn && a.rh.removeChild(this.Kn)
    };

    function Kc(a) {
        this.B = a.map;
        this.Te = [];
        this.er = {};
        this.vM = this.B.K.devicePixelRatio;
        this.RB = new zd(this.B);
        this.ta()
    }
    window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
    da = Kc.prototype;
    da.ta = function() {
        var a = this,
            b = this.B;
        b.addEventListener("addtilelayer", function(b) { a.Fe(b.target) });
        b.addEventListener("removetilelayer", function(b) { a.Lf(b.target) });
        setTimeout(function() {
            b.addEventListener("onmoveend", function(b) { "centerAndZoom" !== b.Yy && a.update() });
            b.addEventListener("onmoving", function() { a.update() });
            b.addEventListener("onzoomend", function(b) { "centerAndZoom" !== b.Yy && a.update({ $n: p }) });
            b.addEventListener("centerandzoom", function() { a.update({ $n: p }) });
            b.addEventListener("onupdatestyles", function() {
                a.update({ $n: p, LE: p });
                a.B.hf(a.B.ub())
            })
        }, 1);
        b.addEventListener("indoor_data_refresh", u());
        b.addEventListener("onresize", function() { a.update({ EZ: p }) });
        a.update()
    };
    da.Fe = function(a) {
        if (a instanceof Lc) {
            for (var b = 0; b < this.Te.length; b++)
                if (this.Te[b] === a) return;
            this.Te.push(a);
            a.ta();
            this.B.loaded && this.update()
        }
    };
    da.Lf = function(a) {
        if (a instanceof Lc) {
            for (var b = 0; b < this.Te.length; b++)
                if (this.Te[b] === a) { this.Te.splice(b, 1); break } a.remove()
        }
    };
    da.wK = function(a) {
        var b = a.getName();
        if (this.er[b]) return this.er[b];
        var c = this.B,
            e = c.ga(),
            f = c.mc,
            g = a.LC(e);
        c.aa.replace(/^TANGRAM_/, "");
        var i = Math.ceil(f.lng / g),
            k = Math.ceil(f.lat / g),
            a = a.me(e),
            m = [i, k, (f.lng / g - i) * a, (f.lat / g - k) * a],
            e = m[0] - Math.ceil((c.width / 2 - m[2]) / a),
            f = m[1] - Math.ceil((c.height / 2 - m[3]) / a),
            g = m[0] + Math.ceil((c.width / 2 + m[2]) / a),
            c = m[1] + Math.ceil((c.height / 2 + m[3]) / a);
        this.ue ? this.ue.length = 0 : this.ue = [];
        for (a = e; a < g; a++)
            for (e = f; e < c; e++) this.ue.push([a, e]);
        this.ue.sort(function(a) { return function(b, c) { return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1])) } }([i, k]));
        this.er[b] = this.ue.slice(0);
        return this.er[b]
    };

    function Dd(a) {
        if (a.PE) return a.PE;
        a.PE = { OE: "001", JE: Sb("normal") };
        return a.PE
    }
    da.update = function(a) {
        this.er = {};
        for (var b = 0; b < this.Te.length; b++) {
            var c = this.Te[b],
                e = this.wK(c.Ig);
            c.update(e, a)
        }
    };

    function Ed(a, b, c) {
        this.bd = a;
        this.Te = b instanceof Mc ? [b] : b.slice(0);
        c = c || {};
        this.j = { YZ: c.tips || "", xD: "", Zb: c.minZoom || 3, hc: c.maxZoom || 18, O2: c.minZoom || 3, N2: c.maxZoom || 18, Sx: 256, zE: c.textColor || "black", jC: c.errorImageUrl || "", $a: new hb(new J(-21364736, -16023552), new J(23855104, 19431424)), Jc: c.projection || new S };
        1 <= this.Te.length && (this.Te[0].Ev = p);
        z.extend(this.j, c)
    }
    z.extend(Ed.prototype, { getName: w("bd"), es: function() { return this.j.YZ }, n2: function() { return this.j.xD }, NW: function() { return this.Te[0] }, B2: w("Te"), me: function() { return this.j.Sx }, Ti: function() { return this.j.Zb }, Ph: function() { return this.j.hc }, setMaxZoom: function(a) { this.j.hc = a }, Xl: function() { return this.j.zE }, Ul: function() { return this.j.Jc }, g2: function() { return this.j.jC }, me: function() { return this.j.Sx }, lc: function(a) { return Math.pow(2, 18 - a) }, BK: function(a) { return this.lc(a) * this.me() } });
    var Fd = [D.url.proto + D.url.domain.TILE_BASE_URLS[0] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[1] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[2] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[3] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[4] + "/it/"],
        Gd = ["/static/BMap/maptile/", "/static/BMap/maptile/", "/static/BMap/maptile/", "/static/BMap/maptile/", "/static/BMap/maptile/"],
        Hd = { dark: "dl", light: "ll", normal: "pl" },
        Id = new Mc;
    Id.yZ = p;
    Id.getTilesUrl = function(a, b, c) {
        var e = a.x,
            a = a.y,
            f = Sb("normal"),
            g = 1,
            c = Hd[c];
        this.map.Mw() && (g = 2);
        e = this.map.hi.Fv(e, b).Hl;
        return '/static/BMap/maptile/' + b + '/' + e + '/' + a + '.png';
    };
    var Oa = new Ed("\u5730\u56fe", Id, { tips: "\u663e\u793a\u666e\u901a\u5730\u56fe", maxZoom: 18 }),
        Jd = new Mc;
    Jd.kN = [D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    Jd.getTilesUrl = function(a, b) {
        var c = a.x,
            e = a.y,
            f = 256 * Math.pow(2, 20 - b),
            e = Math.round((9998336 - f * e) / f) - 1;
        return url = this.kN[Math.abs(c + e) % this.kN.length] + this.map.Pb + "/" + this.map.Lv + "/3/lv" + (21 - b) + "/" + c + "," + e + ".jpg"
    };
    var Sa = new Ed("\u4e09\u7ef4", Jd, { tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe", minZoom: 15, maxZoom: 20, textColor: "white", projection: new jb });
    Sa.lc = function(a) { return Math.pow(2, 20 - a) };
    Sa.Zj = function(a) {
        if (!a) return "";
        var b = H.jB,
            c;
        for (c in b)
            if (-1 < a.search(c)) return b[c].sx;
        return ""
    };
    Sa.$J = function(a) { return { bj: 2, gz: 1, sz: 14, sh: 4 } [a] };
    var Kd = new Mc({ Ev: p });
    Kd.getTilesUrl = function(a, b) {
        var c = a.x,
            e = a.y;
        return (Fd[Math.abs(c + e) % Fd.length] + "u=x=" + c + ";y=" + e + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Sb("satellite")).replace(/-(\d+)/gi, "M$1")
    };
    var ab = new Ed("\u536b\u661f", Kd, { tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf", minZoom: 1, maxZoom: 19, textColor: "white" }),
        Ld = new Mc({ transparentPng: p });
    Ld.getTilesUrl = function(a, b) {
        var c = a.x,
            e = a.y,
            f = Sb("satelliteStreet");
            return (Gd[Math.abs(c + e) % Gd.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (e + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == z.ca.ia ? "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
    };
    var Va = new Ed("\u6df7\u5408", [Kd, Ld], { tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf", labelText: "\u8def\u7f51", minZoom: 1, maxZoom: 19, textColor: "white" });
    var Md = 1,
        V = {};
    window.M_ = V;

    function W(a, b) {
        z.lang.Ca.call(this);
        this.qd = {};
        this.xm(a);
        b = b || {};
        b.la = b.renderOptions || {};
        this.j = { la: { Ja: b.la.panel || q, map: b.la.map || q, Jg: b.la.autoViewport || p, Ss: b.la.selectFirstResult, is: b.la.highlightMode, Qb: b.la.enableDragging || t }, Hs: b.onSearchComplete || u(), YL: b.onMarkersSet || u(), XL: b.onInfoHtmlSet || u(), $L: b.onResultsHtmlSet || u(), WL: b.onGetBusListComplete || u(), VL: b.onGetBusLineComplete || u(), TL: b.onBusListHtmlSet || u(), SL: b.onBusLineHtmlSet || u(), LD: b.onPolylinesSet || u(), So: b.reqFrom || "" };
        this.j.la.Jg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : p;
        this.j.la.Ja = z.zc(this.j.la.Ja)
    }
    z.sa(W, z.lang.Ca);
    z.extend(W.prototype, { getResults: function() { return this.Bc ? this.qi : this.ha }, enableAutoViewport: function() { this.j.la.Jg = p }, disableAutoViewport: function() { this.j.la.Jg = t }, xm: function(a) { a && (this.qd.src = a) }, $s: function(a) { this.j.Hs = a || u() }, setMarkersSetCallback: function(a) { this.j.YL = a || u() }, setPolylinesSetCallback: function(a) { this.j.LD = a || u() }, setInfoHtmlSetCallback: function(a) { this.j.XL = a || u() }, setResultsHtmlSetCallback: function(a) { this.j.$L = a || u() }, Vl: w("De") });
    var Nd = {
        rF: D.Rd,
        jb: function(a, b, c, e, f) {
            this.FY(b);
            var g = (1E5 * Math.random()).toFixed(0);
            D._rd["_cbk" + g] = function(b) { b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c = c || {}, a && a(b, c), delete D._rd["_cbk" + g]) };
            e = e || "";
            b = c && c.q_ ? Gb(b, encodeURI) : Gb(b, encodeURIComponent);
            this.rF = c && c.KJ ? c.BM ? c.BM : D.Ko : D.Rd;
            e = this.rF + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            f || (e += "&res=api");
            e = e + ("&callback=BMap._rd._cbk" + g) + ("&ak=" + qa);
            //pa(e)
        },
        FY: function(a) {
            if (a.qt) {
                var b = "";
                switch (a.qt) {
                    case "bt":
                        b = "z_qt|bt";
                        break;
                    case "nav":
                        b = "z_qt|nav";
                        break;
                    case "walk":
                        b = "z_qt|walk";
                        break;
                    case "bse":
                        b = "z_qt|bse";
                        break;
                    case "nse":
                        b = "z_qt|nse";
                        break;
                    case "drag":
                        b = "z_qt|drag"
                }
                "" !== b && D.alog("cus.fire", "count", b)
            }
        }
    };
    window.Z_ = Nd;
    D._rd = {};
    var db = {};
    window.Y_ = db;
    db.xM = function(a) { a = a.replace(/<\/?[^>]*>/g, ""); return a = a.replace(/[ | ]* /g, " ") };
    db.nY = function(a) { return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;") };
    db.oY = function(a, b) { return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1") };
    var Od = 2,
        Pd = 6,
        Qd = 8,
        Rd = 2,
        Sd = 3,
        Td = 6,
        Ud = 0,
        Vd = "bt",
        Wd = "nav",
        Xd = "walk",
        Yd = "bl",
        Zd = "bsl",
        $d = "ride",
        ae = 15,
        be = 18;
    D.I = window.Instance = z.lang.Hc;

    function ce(a, b, c) {
        z.lang.Ca.call(this);
        if (a) {
            this.Ua = "object" == typeof a ? a : z.zc(a);
            this.page = 1;
            this.Ad = 100;
            this.JI = "pg";
            this.Kf = 4;
            this.TI = b;
            this.update = p;
            a = { page: 1, E4: 100, Ad: 100, Kf: 4, JI: "pg", update: p };
            c || (c = a);
            for (var e in c) "undefined" != typeof c[e] && (this[e] = c[e]);
            this.va()
        }
    }
    z.extend(ce.prototype, {
        va: function() { this.ta() },
        ta: function() {
            this.kU();
            this.Ua.innerHTML = this.IU()
        },
        kU: function() {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Ad)) && (this.Ad = 1);
            1 > this.page && (this.page = 1);
            1 > this.Ad && (this.Ad = 1);
            this.page > this.Ad && (this.page = this.Ad);
            this.page = parseInt(this.page);
            this.Ad = parseInt(this.Ad)
        },
        s2: function() {
            location.search.match(RegExp("[?&]?" + this.JI + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        IU: function() {
            var a = [],
                b = this.page - 1,
                c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.Kf) {
                    var e;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.aa + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.aa + "').toPage(" + b + ");"))
            }
            if (this.page < this.Kf) e = 0 == this.page % this.Kf ? this.page - this.Kf - 1 : this.page - this.page % this.Kf + 1, b = e + this.Kf - 1;
            else {
                e = Math.floor(this.Kf / 2);
                var f = this.Kf % 2 - 1,
                    b = this.Ad > this.page + e ? this.page + e : this.Ad;
                e = this.page - e - f
            }
            this.page > this.Ad - this.Kf && this.page >= this.Kf && (e = this.Ad - this.Kf + 1, b = this.Ad);
            for (f = e; f <= b; f++) 0 < f && (f == this.page ? a.push('<span style="margin-right:3px">' + f + "</span>") : 1 <= f && f <= this.Ad && (e = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + f + "]</a></span>", a.push(e.replace("{temp3}", "BMap.I('" + this.aa + "').toPage(" + f + ");"))));
            c > this.Ad || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.aa + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function(a) {
            a = a ? a : 1;
            "function" == typeof this.TI && (this.TI(a), this.page = a);
            this.update && this.va()
        }
    });

    function fb(a, b) {
        W.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.bp(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.JB() : this.bC();
        this.xa = [];
        this.lf = [];
        this.kb = -1;
        this.Ma = [];
        var c = this;
        K.load("local", function() { c.Ey() }, p)
    }
    z.sa(fb, W, "LocalSearch");
    fb.up = 10;
    fb.U_ = 1;
    fb.Nm = 100;
    fb.hF = 2E3;
    fb.pF = 1E5;
    z.extend(fb.prototype, {
        search: function(a, b) { this.Ma.push({ method: "search", arguments: [a, b] }) },
        um: function(a, b, c) { this.Ma.push({ method: "searchInBounds", arguments: [a, b, c] }) },
        Zo: function(a, b, c, e) { this.Ma.push({ method: "searchNearby", arguments: [a, b, c, e] }) },
        Ie: function() {
            delete this.Ha;
            delete this.De;
            delete this.ha;
            delete this.ua;
            this.kb = -1;
            this.Ta();
            this.j.la.Ja && (this.j.la.Ja.innerHTML = "")
        },
        Yl: u(),
        bC: function() { this.j.la.Ss = p },
        JB: function() { this.j.la.Ss = t },
        bp: function(a) { this.j.nk = "number" == typeof a && !isNaN(a) ? 1 > a ? fb.up : a > fb.Nm ? fb.up : a : fb.up },
        cf: function() { return this.j.nk },
        toString: ca("LocalSearch")
    });
    var de = fb.prototype;
    T(de, { clearResults: de.Ie, setPageCapacity: de.bp, getPageCapacity: de.cf, gotoPage: de.Yl, searchNearby: de.Zo, searchInBounds: de.um, search: de.search, enableFirstResultSelection: de.bC, disableFirstResultSelection: de.JB });

    function ee(a, b) { W.call(this, a, b) } z.sa(ee, W, "BaseRoute");
    z.extend(ee.prototype, { Ie: u() });

    function fe(a, b) {
        W.call(this, a, b);
        b = b || {};
        this.Zs(b.policy);
        this.PM(b.intercityPolicy);
        this.YM(b.transitTypePolicy);
        this.bp(b.pageCapacity);
        this.xb = Vd;
        this.Ap = Md;
        this.xa = [];
        this.kb = -1;
        this.j.dn = b.enableTraffic || t;
        this.Ma = [];
        var c = this;
        K.load("route", function() { c.Hd() })
    }
    fe.Nm = 100;
    fe.hO = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    fe.iO = [0, 3, 4, 0, 0, 0, 5];
    z.sa(fe, ee, "TransitRoute");
    z.extend(fe.prototype, { Zs: function(a) { this.j.Zd = 0 <= a && 5 >= a ? a : 0 }, PM: function(a) { this.j.dm = 0 <= a && 2 >= a ? a : 0 }, YM: function(a) { this.j.Dm = 0 <= a && 2 >= a ? a : 0 }, Gz: function(a, b) { this.Ma.push({ method: "_internalSearch", arguments: [a, b] }) }, search: function(a, b) { this.Ma.push({ method: "search", arguments: [a, b] }) }, bp: function(a) { if ("string" === typeof a && (a = parseInt(a, 10), isNaN(a))) { this.j.nk = fe.Nm; return } this.j.nk = "number" !== typeof a ? fe.Nm : 1 <= a && a <= fe.Nm ? Math.round(a) : fe.Nm }, toString: ca("TransitRoute"), K0: function(a) { return a.replace(/\(.*\)/, "") } });
    var ge = fe.prototype;
    T(ge, { _internalSearch: ge.Gz });

    function he(a, b) {
        W.call(this, a, b);
        this.xa = [];
        this.kb = -1;
        this.Ma = [];
        var c = this,
            e = this.j.la;
        1 !== e.is && 2 !== e.is && (e.is = 1);
        this.ju = this.j.la.Qb ? p : t;
        K.load("route", function() { c.Hd() });
        this.kD && this.kD()
    }
    he.wO = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    z.sa(he, ee, "DWRoute");
    z.extend(he.prototype, { search: function(a, b, c) { this.Ma.push({ method: "search", arguments: [a, b, c] }) } });

    function ie(a, b) {
        he.call(this, a, b);
        b = b || {};
        this.j.dn = b.enableTraffic || t;
        this.Zs(b.policy);
        this.xb = Wd;
        this.Ap = Sd
    }
    z.sa(ie, he, "DrivingRoute");
    ie.prototype.Zs = function(a) { this.j.Zd = 0 <= a && 5 >= a ? a : 0 };

    function je(a, b) {
        he.call(this, a, b);
        this.xb = Xd;
        this.Ap = Rd;
        this.ju = t
    }
    z.sa(je, he, "WalkingRoute");

    function ke(a, b) {
        he.call(this, a, b);
        this.xb = $d;
        this.Ap = Td;
        this.ju = t
    }
    z.sa(ke, he, "RidingRoute");

    function le(a, b) {
        z.lang.Ca.call(this);
        this.If = [];
        this.ok = [];
        this.j = b;
        this.ej = a;
        this.map = this.j.la.map || q;
        this.JM = this.j.JM;
        this.vb = q;
        this.Tj = 0;
        this.wE = "";
        this.$e = 1;
        this.iC = "";
        this.To = [0, 0, 0, 0, 0, 0, 0];
        this.uL = [];
        this.sr = [1, 1, 1, 1, 1, 1, 1];
        this.sN = [1, 1, 1, 1, 1, 1, 1];
        this.Uo = [0, 0, 0, 0, 0, 0, 0];
        this.tm = [0, 0, 0, 0, 0, 0, 0];
        this.Gb = [{ m: "", td: 0, Em: 0, x: 0, y: 0, na: -1 }, { m: "", td: 0, Em: 0, x: 0, y: 0, na: -1 }, { m: "", td: 0, Em: 0, x: 0, y: 0, na: -1 }, { m: "", td: 0, Em: 0, x: 0, y: 0, na: -1 }, { m: "", td: 0, Em: 0, x: 0, y: 0, na: -1 }, { m: "", td: 0, Em: 0, x: 0, y: 0, na: -1 }, { m: "", td: 0, Em: 0, x: 0, y: 0, na: -1 }];
        this.Ih = -1;
        this.ut = [];
        this.HE = [];
        K.load("route", u())
    }
    z.lang.sa(le, z.lang.Ca, "RouteAddr");
    var ne = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(ne);
    var oe = /android/i.test(ne);

    function pe(a) { this.Me = a || {} } z.extend(pe.prototype, {
        IM: function(a, b, c) {
            var e = this;
            K.load("route", function() { e.Hd(a, b, c) })
        }
    });

    function qe(a) {
        this.j = {};
        z.extend(this.j, a);
        this.Ma = [];
        var b = this;
        K.load("othersearch", function() { b.Hd() })
    }
    z.sa(qe, z.lang.Ca, "Geocoder");
    z.extend(qe.prototype, { Tl: function(a, b, c) { this.Ma.push({ method: "getPoint", arguments: [a, b, c] }) }, Rl: function(a, b, c) { this.Ma.push({ method: "getLocation", arguments: [a, b, c] }) }, toString: ca("Geocoder") });
    var ue = qe.prototype;
    T(ue, { getPoint: ue.Tl, getLocation: ue.Rl });

    function Geolocation(a) {
        a = a || {};
        this.K = { timeout: a.timeout || 1E4, maximumAge: a.maximumAge || 6E5, enableHighAccuracy: a.enableHighAccuracy || t, li: a.SDKLocation || t };
        this.ge = [];
        var b = this;
        K.load("othersearch", function() { for (var a = 0, e; e = b.ge[a]; a++) b[e.method].apply(b, e.arguments) })
    }
    z.extend(Geolocation.prototype, { getCurrentPosition: function(a, b) { this.ge.push({ method: "getCurrentPosition", arguments: arguments }) }, getStatus: function() { return Od }, enableSDKLocation: function() { I() && (this.K.li = p) }, disableSDKLocation: function() { this.K.li = t } });

    function ve(a) {
        a = a || {};
        a.la = a.renderOptions || {};
        this.j = { la: { map: a.la.map || q } };
        this.Ma = [];
        var b = this;
        K.load("othersearch", function() { b.Hd() })
    }
    z.sa(ve, z.lang.Ca, "LocalCity");
    z.extend(ve.prototype, { get: function(a) { this.Ma.push({ method: "get", arguments: [a] }) }, toString: ca("LocalCity") });

    function we() {
        this.Ma = [];
        var a = this;
        K.load("othersearch", function() { a.Hd() })
    }
    z.sa(we, z.lang.Ca, "Boundary");
    z.extend(we.prototype, { get: function(a, b) { this.Ma.push({ method: "get", arguments: [a, b] }) }, toString: ca("Boundary") });

    function xe(a, b) {
        W.call(this, a, b);
        this.tO = Yd;
        this.vO = ae;
        this.sO = Zd;
        this.uO = be;
        this.Ma = [];
        var c = this;
        K.load("buslinesearch", function() { c.Hd() })
    }
    xe.xu = H.oa + "iw_plus.gif";
    xe.mR = H.oa + "iw_minus.gif";
    xe.dT = H.oa + "stop_icon.png";
    z.sa(xe, W);
    z.extend(xe.prototype, { getBusList: function(a) { this.Ma.push({ method: "getBusList", arguments: [a] }) }, getBusLine: function(a) { this.Ma.push({ method: "getBusLine", arguments: [a] }) }, setGetBusListCompleteCallback: function(a) { this.j.WL = a || u() }, setGetBusLineCompleteCallback: function(a) { this.j.VL = a || u() }, setBusListHtmlSetCallback: function(a) { this.j.TL = a || u() }, setBusLineHtmlSetCallback: function(a) { this.j.SL = a || u() }, setPolylinesSetCallback: function(a) { this.j.LD = a || u() } });

    function ye(a) {
        W.call(this, a);
        a = a || {};
        this.Wa = { input: a.input || q, cB: a.baseDom || q, types: a.types || [], Hs: a.onSearchComplete || u() };
        this.qd.src = a.location || "\u5168\u56fd";
        this.Hi = "";
        this.Zf = q;
        this.PG = "";
        this.xi();
        Ta(Ka);
        var b = this;
        K.load("autocomplete", function() { b.Hd() })
    }
    z.sa(ye, W, "Autocomplete");
    z.extend(ye.prototype, { xi: u(), show: u(), U: u(), nE: function(a) { this.Wa.types = a }, xm: function(a) { this.qd.src = a }, search: ba("Hi"), Ex: ba("PG"), $s: function(a) { this.Wa.Hs = a } });
    var Wa;

    function Qa(a, b) {
        function c() { f.j.visible ? ("inter" === f.Be && f.j.haveBreakId && f.j.indoorExitControl === p ? z.D.show(f.zz) : z.D.U(f.zz), this.j.closeControl && this.pf && this.B && this.B.Pa() === this.C ? z.D.show(f.pf) : z.D.U(f.pf), this.j.forceCloseControl && z.D.show(f.pf)) : (z.D.U(f.pf), z.D.U(f.zz)) } this.C = "string" == typeof a ? z.$(a) : a;
        this.aa = ze++;
        this.j = { enableScrollWheelZoom: p, panoramaRenderer: "flash", swfSrc: D.Qh("main_domain_nocdn", "res/swf/") + "APILoader.swf", visible: p, indoorExitControl: p, indoorFloorControl: t, linksControl: p, clickOnRoad: p, navigationControl: p, closeControl: p, indoorSceneSwitchControl: p, albumsControl: t, albumsControlOptions: {}, copyrightControlOptions: {}, forceCloseControl: t, haveBreakId: t };
        var b = b || {},
            e;
        for (e in b) this.j[e] = b[e];
        b.closeControl === p && (this.j.forceCloseControl = p);
        b.useWebGL === t && Pa(t);
        this.Da = { heading: 0, pitch: 0 };
        this.mn = [];
        this.Hb = this.Ya = q;
        this.Jj = this.lq();
        this.xa = [];
        this.Fc = 1;
        this.Be = this.LR = this.Ok = "";
        this.Ae = {};
        this.Bf = q;
        this.Bg = [];
        this.Eq = [];
        "cvsRender" == this.Jj || Pa() ? (this.Bj = 90, this.Dj = -90) : "cssRender" == this.Jj && (this.Bj = 45, this.Dj = -45);
        this.Iq = t;
        var f = this;
        this.nn = function() {
            this.Jj === "flashRender" ? K.load("panoramaflash", function() { f.xi() }, p) : K.load("panorama", function() { f.fb() }, p);
            b.af == "api" ? Ta(Ga) : Ta(Ha);
            this.nn = u()
        };
        this.j.xR !== p && (this.nn(), D.Gp("cus.fire", "count", "z_loadpanoramacount"));
        this.oS(this.C);
        this.addEventListener("id_changed", function() { Ta(Fa, { from: b.af }) });
        this.GO();
        this.addEventListener("indoorexit_options_changed", c);
        this.addEventListener("scene_type_changed", c);
        this.addEventListener("onclose_options_changed", c);
        this.addEventListener("onvisible_changed", c)
    }
    var Ae = 4,
        Be = 1,
        ze = 0;
    z.lang.sa(Qa, z.lang.Ca, "Panorama");
    z.extend(Qa.prototype, {
        GO: function() {
            var a = this,
                b = this.pf = N("div");
            b.className = "pano_close";
            b.style.cssText = "z-index: 1201;display: none";
            b.title = "\u9000\u51fa\u5168\u666f";
            b.onclick = function() { a.U() };
            this.C.appendChild(b);
            var c = this.zz = N("a");
            c.className = "pano_pc_indoor_exit";
            c.style.cssText = "z-index: 1201;display: none";
            c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
            c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
            c.onclick = function() { a.mo() };
            this.C.appendChild(c);
            window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)", c.style.backgroundColor = "rgb(37,37,37)")
        },
        mo: u(),
        oS: function(a) {
            var b, c;
            b = a.style;
            c = Ya(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
            if ("absolute" === c || "relative" === c)
                if (a = Ya(a).zIndex, !a || "auto" === a) b.zIndex = 0
        },
        mW: w("mn"),
        Rb: w("Ya"),
        OW: w("gv"),
        XM: w("gv"),
        fa: w("Hb"),
        Ea: w("Da"),
        ga: w("Fc"),
        Si: w("Ok"),
        u2: function() { return this.F0 || [] },
        p2: w("LR"),
        ds: w("Be"),
        Gx: function(a) { a !== this.Be && (this.Be = a, this.dispatchEvent(new Q("onscene_type_changed"))) },
        xc: function(a, b, c) {
            "object" === typeof b && (c = b, b = l);
            a != this.Ya && (this.Zk = this.Ya, this.$k = this.Hb, this.Ya = a, this.Be = b || "street", this.Hb = q, c && c.pov && this.hd(c.pov))
        },
        qa: function(a) { a.gc(this.Hb) || (this.Zk = this.Ya, this.$k = this.Hb, this.Hb = a, this.Ya = q) },
        hd: function(a) { a && (this.Da = a, a = this.Da.pitch, a > this.Bj ? a = this.Bj : a < this.Dj && (a = this.Dj), this.Iq = p, this.Da.pitch = a) },
        tZ: function(a, b) {
            this.Dj = 0 <= a ? 0 : a;
            this.Bj = 0 >= b ? 0 : b
        },
        Kc: function(a) { a != this.Fc && (a > Ae && (a = Ae), a < Be && (a = Be), a != this.Fc && (this.Fc = a), "cssRender" === this.Jj && this.hd(this.Da)) },
        zA: function() {
            if (this.B)
                for (var a = this.B.Aw(), b = 0; b < a.length; b++)(a[b] instanceof U || a[b] instanceof uc) && a[b].point && this.xa.push(a[b])
        },
        kE: ba("B"),
        Ys: function(a) { this.Bf = a || "none" },
        tk: function(a) {
            for (var b in a) {
                if ("object" == typeof a[b])
                    for (var c in a[b]) this.j[b][c] = a[b][c];
                else this.j[b] = a[b];
                a.closeControl === p && (this.j.forceCloseControl = p);
                a.closeControl === t && (this.j.forceCloseControl = t);
                switch (b) {
                    case "linksControl":
                        this.dispatchEvent(new Q("onlinks_visible_changed"));
                        break;
                    case "clickOnRoad":
                        this.dispatchEvent(new Q("onclickonroad_changed"));
                        break;
                    case "navigationControl":
                        this.dispatchEvent(new Q("onnavigation_visible_changed"));
                        break;
                    case "indoorSceneSwitchControl":
                        this.dispatchEvent(new Q("onindoor_default_switch_mode_changed"));
                        break;
                    case "albumsControl":
                        this.dispatchEvent(new Q("onalbums_visible_changed"));
                        break;
                    case "albumsControlOptions":
                        this.dispatchEvent(new Q("onalbums_options_changed"));
                        break;
                    case "copyrightControlOptions":
                        this.dispatchEvent(new Q("oncopyright_options_changed"));
                        break;
                    case "closeControl":
                        this.dispatchEvent(new Q("onclose_options_changed"));
                        break;
                    case "indoorExitControl":
                        this.dispatchEvent(new Q("onindoorexit_options_changed"));
                        break;
                    case "indoorFloorControl":
                        this.dispatchEvent(new Q("onindoorfloor_options_changed"))
                }
            }
        },
        hk: function() { this.hl.style.visibility = "hidden" },
        Kx: function() { this.hl.style.visibility = "visible" },
        xV: function() { this.j.enableScrollWheelZoom = p },
        ZU: function() { this.j.enableScrollWheelZoom = t },
        show: function() { this.j.visible = p },
        U: function() { this.j.visible = t },
        lq: function() { return Xa() && !I() && "javascript" != this.j.panoramaRenderer ? "flashRender" : !I() && Ob() ? "cvsRender" : "cssRender" },
        Ka: function(a) { this.Ae[a.cd] = a },
        Nb: function(a) { delete this.Ae[a] },
        ZC: function() { return this.j.visible },
        Pg: function() { return new P(this.C.clientWidth, this.C.clientHeight) },
        Pa: w("C"),
        XJ: function() {
            var a = D.Qh("baidumap", "?"),
                b = this.Rb();
            if (b) {
                var b = { panotype: this.ds(), heading: this.Ea().heading, pitch: this.Ea().pitch, pid: b, panoid: b, from: "api" },
                    c;
                for (c in b) a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        Jw: function() { this.tk({ copyrightControlOptions: { logoVisible: t } }) },
        rE: function() { this.tk({ copyrightControlOptions: { logoVisible: p } }) },
        VA: function(a) {
            function b(a, b) { return function() { a.Eq.push({ GL: b, FL: arguments }) } }
            for (var c = a.getPanoMethodList(), e = "", f = 0, g = c.length; f < g; f++) e = c[f], this[e] = b(this, e);
            this.Bg.push(a)
        },
        XD: function(a) { for (var b = this.Bg.length; b--;) this.Bg[b] === a && this.Bg.splice(b, 1) },
        jE: u()
    });
    var Ce = Qa.prototype;
    T(Ce, { setId: Ce.xc, setPosition: Ce.qa, setPov: Ce.hd, setZoom: Ce.Kc, setOptions: Ce.tk, getId: Ce.Rb, getPosition: Ce.fa, getPov: Ce.Ea, getZoom: Ce.ga, getLinks: Ce.mW, getBaiduMapUrl: Ce.XJ, hideMapLogo: Ce.Jw, showMapLogo: false, enableDoubleClickZoom: Ce.F1, disableDoubleClickZoom: Ce.w1, enableScrollWheelZoom: Ce.xV, disableScrollWheelZoom: Ce.ZU, show: Ce.show, hide: Ce.U, addPlugin: Ce.VA, removePlugin: Ce.XD, getVisible: Ce.ZC, addOverlay: Ce.Ka, removeOverlay: Ce.Nb, getSceneType: Ce.ds, setPanoramaPOIType: Ce.Ys, exitInter: Ce.mo, setInteractiveState: Ce.jE });
    T(window, { BMAP_PANORAMA_POI_HOTEL: "hotel", BMAP_PANORAMA_POI_CATERING: "catering", BMAP_PANORAMA_POI_MOVIE: "movie", BMAP_PANORAMA_POI_TRANSIT: "transit", BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene", BMAP_PANORAMA_POI_NONE: "none", BMAP_PANORAMA_INDOOR_SCENE: "inter", BMAP_PANORAMA_STREET_SCENE: "street" });

    function De() {
        z.lang.Ca.call(this);
        this.cd = "PanoramaOverlay_" + this.aa;
        this.P = q;
        this.Na = p
    }
    z.lang.sa(De, z.lang.Ca, "PanoramaOverlayBase");
    z.extend(De.prototype, { q2: w("cd"), ta: function() { aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0") }, remove: function() { aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0") }, Af: function() { aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0") } });

    function Ee(a, b) {
        De.call(this);
        var c = { position: q, altitude: 2, displayDistance: p },
            b = b || {},
            e;
        for (e in b) c[e] = b[e];
        this.Hb = c.position;
        this.qj = a;
        this.Hp = c.altitude;
        this.RP = c.displayDistance;
        this.zE = c.color;
        this.JK = c.hoverColor;
        this.backgroundColor = c.backgroundColor;
        this.MI = c.backgroundHoverColor;
        this.borderColor = c.borderColor;
        this.RI = c.borderHoverColor;
        this.fontSize = c.fontSize;
        this.padding = c.padding;
        this.eD = c.imageUrl;
        this.size = c.size;
        this.oe = c.image;
        this.width = c.width;
        this.height = c.height;
        this.gX = c.imageData;
        this.borderWidth = c.borderWidth
    }
    z.lang.sa(Ee, De, "PanoramaLabel");
    z.extend(Ee.prototype, {
        V1: w("borderWidth"),
        getImageData: w("gX"),
        Xl: w("zE"),
        k2: w("JK"),
        R1: w("backgroundColor"),
        S1: w("MI"),
        T1: w("borderColor"),
        U1: w("RI"),
        i2: w("fontSize"),
        r2: w("padding"),
        l2: w("eD"),
        Ab: w("size"),
        uw: w("oe"),
        qa: function(a) {
            this.Hb = a;
            this.Af("position", a)
        },
        fa: w("Hb"),
        Wc: function(a) {
            this.qj = a;
            this.Af("content", a)
        },
        $j: w("qj"),
        eE: function(a) {
            this.Hp = a;
            this.Af("altitude", a)
        },
        qo: w("Hp"),
        Ea: function() {
            var a = this.fa(),
                b = q,
                c = q;
            this.P && (c = this.P.fa());
            if (a && c)
                if (a.gc(c)) b = this.P.Ea();
                else {
                    b = {};
                    b.heading = Fe(a.lng - c.lng, a.lat - c.lat) || 0;
                    var a = b,
                        c = this.qo(),
                        e = this.gn();
                    a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0
                } return b
        },
        gn: function() {
            var a = 0,
                b, c;
            this.P && (b = this.P.fa(), (c = this.fa()) && !c.gc(b) && (a = S.so(b, c)));
            return a
        },
        U: function() { aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0") },
        show: function() { aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0") },
        Af: u()
    });
    var Ge = Ee.prototype;
    T(Ge, { setPosition: Ge.qa, getPosition: Ge.fa, setContent: Ge.Wc, getContent: Ge.$j, setAltitude: Ge.eE, getAltitude: Ge.qo, getPov: Ge.Ea, show: Ge.show, hide: Ge.U });

    function He(a, b) {
        De.call(this);
        var c = { icon: "", title: "", panoInfo: q, altitude: 2 },
            b = b || {},
            e;
        for (e in b) c[e] = b[e];
        this.Hb = a;
        this.MG = c.icon;
        this.fI = c.title;
        this.Hp = c.altitude;
        this.bS = c.panoInfo;
        this.Da = { heading: 0, pitch: 0 }
    }
    z.lang.sa(He, De, "PanoramaMarker");
    z.extend(He.prototype, {
        qa: function(a) {
            this.Hb = a;
            this.Af("position", a)
        },
        fa: w("Hb"),
        yc: function(a) {
            this.fI = a;
            this.Af("title", a)
        },
        yo: w("fI"),
        Ob: function(a) {
            this.MG = icon;
            this.Af("icon", a)
        },
        to: w("MG"),
        eE: function(a) {
            this.Hp = a;
            this.Af("altitude", a)
        },
        qo: w("Hp"),
        OC: w("bS"),
        Ea: function() {
            var a = q;
            if (this.P) {
                var a = this.P.fa(),
                    b = this.fa(),
                    a = Fe(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = { heading: a, pitch: 0 }
            } else a = this.Da;
            return a
        },
        Af: u()
    });
    var Ie = He.prototype;
    T(Ie, { setPosition: Ie.qa, getPosition: Ie.fa, setTitle: Ie.yc, getTitle: Ie.yo, setAltitude: Ie.eE, getAltitude: Ie.qo, getPanoInfo: Ie.OC, getIcon: Ie.to, setIcon: Ie.Ob, getPov: Ie.Ea });

    function Fe(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI),
                e = 0;
            0 < a && 0 > b && (e = 90);
            0 > a && 0 > b && (e = 180);
            0 > a && 0 < b && (e = 270);
            c = (c + 90) % 90 + e
        } else 0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }

    function Pa(a) {
        if ("boolean" === typeof Je) return Je;
        if (a === t || !window.WebGLRenderingContext) return Je = t;
        if (z.platform.aj) { a = 0; try { a = navigator.userAgent.split("Android ")[1].charAt(0) } catch (b) {} if (5 > a) return Je = t }
        var a = document.createElement("canvas"),
            c = q;
        try { c = a.getContext("webgl") } catch (e) { Je = t }
        return Je = c === q ? t : p
    }
    var Je;

    function Ke() {
        if ("boolean" === typeof Le) return Le;
        Le = p;
        if (z.platform.nD) return p;
        var a = navigator.userAgent;
        return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? p : Le = t
    }
    var Le;

    function ec(a, b) {
        this.P = a || q;
        var c = this;
        c.P && c.ba();
        K.load("pservice", function() { c.kP() });
        "api" == (b || {}).af ? Ta(Ia) : Ta(Ja);
        this.nd = { getPanoramaById: [], getPanoramaByLocation: [], getVisiblePOIs: [], getRecommendPanosById: [], getPanoramaVersions: [], checkPanoSupportByCityCode: [], getPanoramaByPOIId: [], getCopyrightProviders: [] }
    }
    D.nm(function(a) { "flashRender" !== a.lq() && new ec(a, { af: "api" }) });
    z.extend(ec.prototype, {
        ba: function() {
            function a(a) {
                if (a) {
                    if (a.id != b.gv) {
                        b.XM(a.id);
                        b.ea = a;
                        Ke() || b.dispatchEvent(new Q("onthumbnail_complete"));
                        b.Ya != q && (b.$k = b._position);
                        for (var c in a)
                            if (a.hasOwnProperty(c)) switch (b["_" + c] = a[c], c) {
                                case "position":
                                    b.Hb = a[c];
                                    break;
                                case "id":
                                    b.Ya = a[c];
                                    break;
                                case "links":
                                    b.mn = a[c];
                                    break;
                                case "zoom":
                                    b.Fc = a[c]
                            }
                        if (b.$k) {
                            var g = b.$k,
                                i = b._position;
                            c = g.lat;
                            var k = i.lat,
                                m = Pb(k - c),
                                g = Pb(i.lng - g.lng);
                            c = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(Pb(c)) * Math.cos(Pb(k)) * Math.sin(g / 2) * Math.sin(g / 2);
                            b.bG = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new Q("ondataload");
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new Q("onposition_changed"));
                        b.dispatchEvent(new Q("onlinks_changed"));
                        b.dispatchEvent(new Q("oncopyright_changed"), { copyright: a.copyright });
                        a.El && b.j.closeControl ? z.D.show(b.jQ) : z.D.U(b.jQ)
                    }
                } else b.Ya = b.Zk, b.Hb = b.$k, b.dispatchEvent(new Q("onnoresult"))
            }
            var b = this.P,
                c = this;
            b.addEventListener("id_changed", function() { c.wo(b.Rb(), a) });
            b.addEventListener("iid_changed", function() {
                c.Cg(ec.Jk + "qt=idata&iid=" + b.vz + "&fn=", function(b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo,
                            f = {};
                        f.El = b.BreakID;
                        for (var g = b.Defaultfloor, i = q, k = 0; k < b.Floors.length; k++)
                            if (b.Floors[k].Floor == g) { i = b.Floors[k]; break } f.id = i.StartID || i.Points[0].PID;
                        c.wo(f.id, a, f)
                    }
                })
            });
            b.addEventListener("position_changed_inner", function() { c.Vi(b.fa(), a) })
        },
        wo: function(a, b) { this.nd.getPanoramaById.push(arguments) },
        Vi: function(a, b, c) { this.nd.getPanoramaByLocation.push(arguments) },
        $C: function(a, b, c, e) { this.nd.getVisiblePOIs.push(arguments) },
        Dw: function(a, b) { this.nd.getRecommendPanosById.push(arguments) },
        Cw: function(a) { this.nd.getPanoramaVersions.push(arguments) },
        hB: function(a, b) { this.nd.checkPanoSupportByCityCode.push(arguments) },
        Bw: function(a, b) { this.nd.getPanoramaByPOIId.push(arguments) },
        aK: function(a) { this.nd.getCopyrightProviders.push(arguments) }
    });
    var Me = ec.prototype;
    T(Me, { getPanoramaById: Me.wo, getPanoramaByLocation: Me.Vi, getPanoramaByPOIId: Me.Bw });

    function dc(a) { Mc.call(this); "api" == (a || {}).af ? Ta(Ca) : Ta(Da) } dc.vF = D.Qh("pano", "tile/");
    dc.prototype = new Mc;
    dc.prototype.getTilesUrl = function(a, b) {
        var c = dc.vF[(a.x + a.y) % dc.vF.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
        z.ca.ia && 6 >= z.ca.ia && (c += "&color_dep=32");
        return c
    };
    dc.prototype.ws = ca(p);
    Ne.Ld = new S;

    function Ne() {} z.extend(Ne, {
        $U: function(a, b, c) {
            c = z.lang.Hc(c);
            b = { data: b };
            "position_changed" == a && (b.data = Ne.Ld.gj(new R(b.data.mercatorX, b.data.mercatorY)));
            c.dispatchEvent(new Q("on" + a), b)
        }
    });
    var Oe = Ne;
    T(Oe, { dispatchFlashEvent: Oe.$U });
    var Pe = { kO: 50 };
    Pe.Qt = D.Qh("pano")[0];
    Pe.Ot = { width: 220, height: 60 };
    z.extend(Pe, {
        SK: function(a, b, c, e) {
            if (!b || !c || !c.lngLat || !c.panoInstance) e();
            else {
                this.xn === l && (this.xn = new ec(q, { af: "api" }));
                var f = this;
                this.xn.hB(b, function(b) {
                    b ? f.xn.Vi(c.lngLat, Pe.kO, function(b) {
                        if (b && b.id) {
                            var g = b.id,
                                m = b.Yg,
                                b = b.Zg,
                                n = ec.Ld.Tg(c.lngLat),
                                o = f.PQ(n, { x: m, y: b }),
                                m = f.lK(g, o, 0, Pe.Ot.width, Pe.Ot.height);
                            a.content = f.QQ(a.content, m, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function() {
                                ia.M(z.zc("infoWndPano"), "click", function() {
                                    c.panoInstance.xc(g);
                                    c.panoInstance.show();
                                    c.panoInstance.hd({ heading: o, pitch: 0 })
                                })
                            })
                        }
                        e()
                    }) : e()
                })
            }
        },
        QQ: function(a, b, c, e) {
            var c = c || "",
                f;
            !e || !a.split(e)[0] ? (e = a, a = "") : (e = a.split(e)[0], f = e.lastIndexOf("<"), e = a.substring(0, f), a = a.substring(f));
            f = [];
            var g = Pe.Ot.width,
                i = Pe.Ot.height;
            f.push(e);
            f.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + i + "px;width:" + g + "px; margin-top: -19px;'>");
            f.push("<img class='pano_thumnail_img' width='" + g + "' height='" + i + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + g + ", " + i + ");' />");
            f.push("<div class='panoInfoBoxTitleBg' style='width:" + g + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
            f.push("</div>");
            f.push(a);
            return f.join("")
        },
        PQ: function(a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        lK: function(a, b, c, e, f) { var g = { panoId: a, panoHeading: b || 0, panoPitch: c || 0, width: e, height: f }; return (Pe.Qt + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function(a, b) { return g[b] }) }
    });
    var Qe = document,
        Re = Math,
        Se = Qe.createElement("div").style,
        Te;
    a: {
        for (var Ue = ["t", "webkitT", "MozT", "msT", "OT"], Ve, We = 0, Xe = Ue.length; We < Xe; We++)
            if (Ve = Ue[We] + "ransform", Ve in Se) { Te = Ue[We].substr(0, Ue[We].length - 1); break a } Te = t
    }
    var Ye = Te ? "-" + Te.toLowerCase() + "-" : "",
        $e = Ze("transform"),
        af = Ze("transitionProperty"),
        bf = Ze("transitionDuration"),
        cf = Ze("transformOrigin"),
        df = Ze("transitionTimingFunction"),
        ef = Ze("transitionDelay"),
        oe = /android/gi.test(navigator.appVersion),
        ff = /iphone|ipad/gi.test(navigator.appVersion),
        gf = /hp-tablet/gi.test(navigator.appVersion),
        hf = Ze("perspective") in Se,
        jf = "ontouchstart" in window && !gf,
        kf = Te !== t,
        lf = Ze("transition") in Se,
        mf = "onorientationchange" in window ? "orientationchange" : "resize",
        nf = jf ? "touchstart" : "mousedown",
        of = jf ? "touchmove" : "mousemove",
        pf = jf ? "touchend" : "mouseup",
        qf = jf ? "touchcancel" : "mouseup",
        rf = Te === t ? t : { "": "transitionend", webkit: "webkitTransitionEnd", Moz: "transitionend", O: "otransitionend", ms: "MSTransitionEnd" } [Te],
        sf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) { return setTimeout(a, 1) },
        tf = window.cancelRequestAnimationFrame || window.V4 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
        uf = hf ? " translateZ(0)" : "";

    function vf(a, b) {
        var c = this,
            e;
        c.Im = "object" == typeof a ? a : Qe.getElementById(a);
        c.Im.style.overflow = "hidden";
        c.Kb = c.Im.children[0];
        c.options = { Co: p, Fm: p, x: 0, y: 0, Wn: p, YT: t, ex: p, AD: p, Dk: p, ii: t, a_: 0, Jv: t, Gw: p, Rh: p, ji: p, oC: oe, Kw: ff, FV: ff && hf, bE: "", zoom: t, Fk: 1, pp: 4, bV: 2, QN: "scroll", ht: t, Nx: 1, ZL: q, RL: function(a) { a.preventDefault() }, bM: q, QL: q, aM: q, PL: q, kx: q, cM: q, UL: q, Oo: q, dM: q, No: q };
        for (e in b) c.options[e] = b[e];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.Dk = kf && c.options.Dk;
        c.options.Rh = c.options.Co && c.options.Rh;
        c.options.ji = c.options.Fm && c.options.ji;
        c.options.zoom = c.options.Dk && c.options.zoom;
        c.options.ii = lf && c.options.ii;
        c.options.zoom && oe && (uf = "");
        c.Kb.style[af] = c.options.Dk ? Ye + "transform" : "top left";
        c.Kb.style[bf] = "0";
        c.Kb.style[cf] = "0 0";
        c.options.ii && (c.Kb.style[df] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.Dk ? c.Kb.style[$e] = "translate(" + c.x + "px," + c.y + "px)" + uf : c.Kb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.ii && (c.options.oC = p);
        c.refresh();
        c.ba(mf, window);
        c.ba(nf);
        !jf && "none" != c.options.QN && (c.ba("DOMMouseScroll"), c.ba("mousewheel"));
        c.options.Jv && (c.jU = setInterval(function() { c.iP() }, 500));
        this.options.Gw && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function(a, b, c) {
            var e = Node.prototype.removeEventListener;
            a === "click" ? e.call(document.body, a, b.IK || b, c) : e.call(document.body, a, b, c)
        }, document.body.addEventListener = function(a, b, c) {
            var e = Node.prototype.addEventListener;
            a === "click" ? e.call(document.body, a, b.IK || (b.IK = function(a) { a.EY || b(a) }), c) : e.call(document.body, a, b, c)
        }), c.ba("click", document.body, p))
    }
    vf.prototype = {
        enabled: p,
        x: 0,
        y: 0,
        hj: [],
        scale: 1,
        xB: 0,
        yB: 0,
        Ne: [],
        gf: [],
        bB: q,
        Wx: 0,
        handleEvent: function(a) {
            switch (a.type) {
                case nf:
                    if (!jf && 0 !== a.button) break;
                    this.Zu(a);
                    break;
                case of:
                    this.NR(a);
                    break;
                case pf:
                case qf:
                    this.ku(a);
                    break;
                case mf:
                    this.sA();
                    break;
                case "DOMMouseScroll":
                case "mousewheel":
                    this.qT(a);
                    break;
                case rf:
                    this.mT(a);
                    break;
                case "click":
                    this.sP(a)
            }
        },
        iP: function() {!this.Xg && (!this.Gk && !(this.Bl || this.Dx == this.Kb.offsetWidth * this.scale && this.Yo == this.Kb.offsetHeight * this.scale)) && this.refresh() },
        Qu: function(a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Qe.createElement("div"), this.options.bE ? b.className = this.options.bE + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.ji ? "7" : "2") + "px" : "width:7px;bottom:" + (this.Rh ? "7" : "2") + "px;top:2px;right:1px"), b.style.cssText += ";pointer-events:none;" + Ye + "transition-property:opacity;" + Ye + "transition-duration:" + (this.options.FV ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Kw ? "0" : "1"), this.Im.appendChild(b), this[a + "ScrollbarWrapper"] = b, b = Qe.createElement("div"), this.options.bE || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + Ye + "background-clip:padding-box;" + Ye + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + Ye + "border-radius:3px;border-radius:3px"), b.style.cssText += ";pointer-events:none;" + Ye + "transition-property:" + Ye + "transform;" + Ye + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + Ye + "transition-duration:0;" + Ye + "transform: translate(0,0)" + uf, this.options.ii && (b.style.cssText += ";" + Ye + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[a + "ScrollbarWrapper"].appendChild(b), this[a + "ScrollbarIndicator"] = b), "h" == a ? (this.EK = this.FK.clientWidth, this.YW = Re.max(Re.round(this.EK * this.EK / this.Dx), 8), this.XW.style.width = this.YW + "px") : (this.IN = this.JN.clientHeight, this.u_ = Re.max(Re.round(this.IN * this.IN / this.Yo), 8), this.t_.style.height = this.u_ + "px"), this.tA(a, p)) : this[a + "ScrollbarWrapper"] && (kf && (this[a + "ScrollbarIndicator"].style[$e] = ""), this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]), this[a + "ScrollbarWrapper"] = q, this[a + "ScrollbarIndicator"] = q)
        },
        sA: function() {
            var a = this;
            setTimeout(function() { a.refresh() }, oe ? 200 : 0)
        },
        Hq: function(a, b) { this.Gk || (a = this.Co ? a : 0, b = this.Fm ? b : 0, this.options.Dk ? this.Kb.style[$e] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + uf : (a = Re.round(a), b = Re.round(b), this.Kb.style.left = a + "px", this.Kb.style.top = b + "px"), this.x = a, this.y = b, this.tA("h"), this.tA("v")) },
        tA: function(a, b) {
            var c = "h" == a ? this.x : this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"], 0 > c ? (this.options.oC || (c = this[a + "ScrollbarIndicatorSize"] + Re.round(3 * c), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"), c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.oC ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - Re.round(3 * (c - this[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px", c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))), this[a + "ScrollbarWrapper"].style[ef] = "0", this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Kw ? "0" : "1", this[a + "ScrollbarIndicator"].style[$e] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + uf)
        },
        sP: function(a) {
            if (a.kQ === p) return this.RA = a.target, this.kw = Date.now(), p;
            if (this.RA && this.kw) { if (600 < Date.now() - this.kw) return this.kw = this.RA = q, p } else { for (var b = a.target; b != this.Kb && b != document.body;) b = b.parentNode; if (b == document.body) return p }
            for (b = a.target; 1 != b.nodeType;) b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b) return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.EY = p, a.stopPropagation(), a.preventDefault(), this.kw = this.RA = q, t
        },
        Zu: function(a) {
            var b = jf ? a.touches[0] : a,
                c, e;
            if (this.enabled) {
                this.options.RL && this.options.RL.call(this, a);
                (this.options.ii || this.options.zoom) && this.hI(0);
                this.Gk = this.Bl = this.Xg = t;
                this.GB = this.FB = this.sv = this.rv = this.MB = this.LB = 0;
                this.options.zoom && (jf && 1 < a.touches.length) && (e = Re.abs(a.touches[0].pageX - a.touches[1].pageX), c = Re.abs(a.touches[0].pageY - a.touches[1].pageY), this.c_ = Re.sqrt(e * e + c * c), this.mx = Re.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.RE) / 2 - this.x, this.nx = Re.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.SE) / 2 - this.y, this.options.Oo && this.options.Oo.call(this, a));
                if (this.options.ex && (this.options.Dk ? (c = getComputedStyle(this.Kb, q)[$e].replace(/[^0-9\-.,]/g, "").split(","), e = +(c[12] || c[4]), c = +(c[13] || c[5])) : (e = +getComputedStyle(this.Kb, q).left.replace(/[^0-9-]/g, ""), c = +getComputedStyle(this.Kb, q).top.replace(/[^0-9-]/g, "")), e != this.x || c != this.y)) this.options.ii ? this.Pd(rf) : tf(this.bB), this.hj = [], this.Hq(e, c), this.options.kx && this.options.kx.call(this);
                this.tv = this.x;
                this.uv = this.y;
                this.kt = this.x;
                this.lt = this.y;
                this.Yg = b.pageX;
                this.Zg = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.bM && this.options.bM.call(this, a);
                this.ba( of , window);
                this.ba(pf, window);
                this.ba(qf, window)
            }
        },
        NR: function(a) {
            var b = jf ? a.touches[0] : a,
                c = b.pageX - this.Yg,
                e = b.pageY - this.Zg,
                f = this.x + c,
                g = this.y + e,
                i = a.timeStamp || Date.now();
            this.options.QL && this.options.QL.call(this, a);
            if (this.options.zoom && jf && 1 < a.touches.length) f = Re.abs(a.touches[0].pageX - a.touches[1].pageX), g = Re.abs(a.touches[0].pageY - a.touches[1].pageY), this.b_ = Re.sqrt(f * f + g * g), this.Gk = p, b = 1 / this.c_ * this.b_ * this.scale, b < this.options.Fk ? b = 0.5 * this.options.Fk * Math.pow(2, b / this.options.Fk) : b > this.options.pp && (b = 2 * this.options.pp * Math.pow(0.5, this.options.pp / b)), this.Ho = b / this.scale, f = this.mx - this.mx * this.Ho + this.x, g = this.nx - this.nx * this.Ho + this.y, this.Kb.style[$e] = "translate(" + f + "px," + g + "px) scale(" + b + ")" + uf, this.options.dM && this.options.dM.call(this, a);
            else {
                this.Yg = b.pageX;
                this.Zg = b.pageY;
                if (0 < f || f < this.Yd) f = this.options.Wn ? this.x + c / 2 : 0 <= f || 0 <= this.Yd ? 0 : this.Yd;
                if (g > this.ef || g < this.fd) g = this.options.Wn ? this.y + e / 2 : g >= this.ef || 0 <= this.fd ? this.ef : this.fd;
                this.LB += c;
                this.MB += e;
                this.rv = Re.abs(this.LB);
                this.sv = Re.abs(this.MB);
                6 > this.rv && 6 > this.sv || (this.options.AD && (this.rv > this.sv + 5 ? (g = this.y, e = 0) : this.sv > this.rv + 5 && (f = this.x, c = 0)), this.Xg = p, this.Hq(f, g), this.FB = 0 < c ? -1 : 0 > c ? 1 : 0, this.GB = 0 < e ? -1 : 0 > e ? 1 : 0, 300 < i - this.startTime && (this.startTime = i, this.kt = this.x, this.lt = this.y), this.options.aM && this.options.aM.call(this, a))
            }
        },
        ku: function(a) {
            if (!(jf && 0 !== a.touches.length)) {
                var b = this,
                    c = jf ? a.changedTouches[0] : a,
                    e, f, g = { Ba: 0, time: 0 },
                    i = { Ba: 0, time: 0 },
                    k = (a.timeStamp || Date.now()) - b.startTime;
                e = b.x;
                f = b.y;
                b.Pd( of , window);
                b.Pd(pf, window);
                b.Pd(qf, window);
                b.options.PL && b.options.PL.call(b, a);
                if (b.Gk) e = b.scale * b.Ho, e = Math.max(b.options.Fk, e), e = Math.min(b.options.pp, e), b.Ho = e / b.scale, b.scale = e, b.x = b.mx - b.mx * b.Ho + b.x, b.y = b.nx - b.nx * b.Ho + b.y, b.Kb.style[bf] = "200ms", b.Kb.style[$e] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + uf, b.Gk = t, b.refresh(), b.options.No && b.options.No.call(b, a);
                else {
                    if (b.Xg) {
                        if (300 > k && b.options.ex) {
                            g = e ? b.dH(e - b.kt, k, -b.x, b.Dx - b.Dt + b.x, b.options.Wn ? b.Dt : 0) : g;
                            i = f ? b.dH(f - b.lt, k, -b.y, 0 > b.fd ? b.Yo - b.Jm + b.y - b.ef : 0, b.options.Wn ? b.Jm : 0) : i;
                            e = b.x + g.Ba;
                            f = b.y + i.Ba;
                            if (0 < b.x && 0 < e || b.x < b.Yd && e < b.Yd) g = { Ba: 0, time: 0 };
                            if (b.y > b.ef && f > b.ef || b.y < b.fd && f < b.fd) i = { Ba: 0, time: 0 }
                        }
                        g.Ba || i.Ba ? (c = Re.max(Re.max(g.time, i.time), 10), b.options.ht && (g = e - b.tv, i = f - b.uv, Re.abs(g) < b.options.Nx && Re.abs(i) < b.options.Nx ? b.scrollTo(b.tv, b.uv, 200) : (g = b.YH(e, f), e = g.x, f = g.y, c = Re.max(g.time, c))), b.scrollTo(Re.round(e), Re.round(f), c)) : b.options.ht ? (g = e - b.tv, i = f - b.uv, Re.abs(g) < b.options.Nx && Re.abs(i) < b.options.Nx ? b.scrollTo(b.tv, b.uv, 200) : (g = b.YH(b.x, b.y), (g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time))) : b.zn(200)
                    } else {
                        if (jf)
                            if (b.tJ && b.options.zoom) clearTimeout(b.tJ), b.tJ = q, b.options.Oo && b.options.Oo.call(b, a), b.zoom(b.Yg, b.Zg, 1 == b.scale ? b.options.bV : 1), b.options.No && setTimeout(function() { b.options.No.call(b, a) }, 200);
                            else if (this.options.Gw) {
                            for (e = c.target; 1 != e.nodeType;) e = e.parentNode;
                            f = e.tagName.toLowerCase();
                            "select" != f && "input" != f && "textarea" != f ? (f = Qe.createEvent("MouseEvents"), f.initMouseEvent("click", p, p, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, q), f.kQ = p, e.dispatchEvent(f)) : e.focus()
                        }
                        b.zn(400)
                    }
                    b.options.cM && b.options.cM.call(b, a)
                }
            }
        },
        zn: function(a) {
            var b = 0 <= this.x ? 0 : this.x < this.Yd ? this.Yd : this.x,
                c = this.y >= this.ef || 0 < this.fd ? this.ef : this.y < this.fd ? this.fd : this.y;
            if (b == this.x && c == this.y) { if (this.Xg && (this.Xg = t, this.options.kx && this.options.kx.call(this)), this.Rh && this.options.Kw && ("webkit" == Te && (this.FK.style[ef] = "300ms"), this.FK.style.opacity = "0"), this.ji && this.options.Kw) "webkit" == Te && (this.JN.style[ef] = "300ms"), this.JN.style.opacity = "0" } else this.scrollTo(b, c, a || 0)
        },
        qT: function(a) {
            var b = this,
                c, e;
            if ("wheelDeltaX" in a) c = a.wheelDeltaX / 12, e = a.wheelDeltaY / 12;
            else if ("wheelDelta" in a) c = e = a.wheelDelta / 12;
            else if ("detail" in a) c = e = 3 * -a.detail;
            else return;
            if ("zoom" == b.options.QN) { if (e = b.scale * Math.pow(2, 1 / 3 * (e ? e / Math.abs(e) : 0)), e < b.options.Fk && (e = b.options.Fk), e > b.options.pp && (e = b.options.pp), e != b.scale) !b.Wx && b.options.Oo && b.options.Oo.call(b, a), b.Wx++, b.zoom(a.pageX, a.pageY, e, 400), setTimeout(function() { b.Wx--;!b.Wx && b.options.No && b.options.No.call(b, a) }, 400) } else c = b.x + c, e = b.y + e, 0 < c ? c = 0 : c < b.Yd && (c = b.Yd), e > b.ef ? e = b.ef : e < b.fd && (e = b.fd), 0 > b.fd && b.scrollTo(c, e, 0)
        },
        mT: function(a) { a.target == this.Kb && (this.Pd(rf), this.FA()) },
        FA: function() {
            var a = this,
                b = a.x,
                c = a.y,
                e = Date.now(),
                f, g, i;
            a.Bl || (a.hj.length ? (f = a.hj.shift(), f.x == b && f.y == c && (f.time = 0), a.Bl = p, a.Xg = p, a.options.ii) ? (a.hI(f.time), a.Hq(f.x, f.y), a.Bl = t, f.time ? a.ba(rf) : a.zn(0)) : (i = function() {
                var k = Date.now(),
                    m;
                if (k >= e + f.time) {
                    a.Hq(f.x, f.y);
                    a.Bl = t;
                    a.options.fY && a.options.fY.call(a);
                    a.FA()
                } else {
                    k = (k - e) / f.time - 1;
                    g = Re.sqrt(1 - k * k);
                    k = (f.x - b) * g + b;
                    m = (f.y - c) * g + c;
                    a.Hq(k, m);
                    if (a.Bl) a.bB = sf(i)
                }
            }, i()) : a.zn(400))
        },
        hI: function(a) {
            a += "ms";
            this.Kb.style[bf] = a;
            this.Rh && (this.XW.style[bf] = a);
            this.ji && (this.t_.style[bf] = a)
        },
        dH: function(a, b, c, e, f) {
            var b = Re.abs(a) / b,
                g = b * b / 0.0012;
            0 < a && g > c ? (c += f / (6 / (6.0E-4 * (g / b))), b = b * c / g, g = c) : 0 > a && g > e && (e += f / (6 / (6.0E-4 * (g / b))), b = b * e / g, g = e);
            return { Ba: g * (0 > a ? -1 : 1), time: Re.round(b / 6.0E-4) }
        },
        Fj: function(a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft, c -= a.offsetTop;
            a != this.Im && (b *= this.scale, c *= this.scale);
            return { left: b, top: c }
        },
        YH: function(a, b) {
            var c, e, f;
            f = this.Ne.length - 1;
            c = 0;
            for (e = this.Ne.length; c < e; c++)
                if (a >= this.Ne[c]) { f = c; break } f == this.xB && (0 < f && 0 > this.FB) && f--;
            a = this.Ne[f];
            e = (e = Re.abs(a - this.Ne[this.xB])) ? 500 * (Re.abs(this.x - a) / e) : 0;
            this.xB = f;
            f = this.gf.length - 1;
            for (c = 0; c < f; c++)
                if (b >= this.gf[c]) { f = c; break } f == this.yB && (0 < f && 0 > this.GB) && f--;
            b = this.gf[f];
            c = (c = Re.abs(b - this.gf[this.yB])) ? 500 * (Re.abs(this.y - b) / c) : 0;
            this.yB = f;
            f = Re.round(Re.max(e, c)) || 200;
            return { x: a, y: b, time: f }
        },
        ba: function(a, b, c) {
            (b || this.Kb).addEventListener(a, this, !!c)
        },
        Pd: function(a, b, c) {
            (b || this.Kb).removeEventListener(a, this, !!c)
        },
        DB: ga(2),
        refresh: function() {
            var a, b, c, e = 0;
            b = 0;
            this.scale < this.options.Fk && (this.scale = this.options.Fk);
            this.Dt = this.Im.clientWidth || 1;
            this.Jm = this.Im.clientHeight || 1;
            this.ef = -this.options.a_ || 0;
            this.Dx = Re.round(this.Kb.offsetWidth * this.scale);
            this.Yo = Re.round((this.Kb.offsetHeight + this.ef) * this.scale);
            this.Yd = this.Dt - this.Dx;
            this.fd = this.Jm - this.Yo + this.ef;
            this.GB = this.FB = 0;
            this.options.ZL && this.options.ZL.call(this);
            this.Co = this.options.Co && 0 > this.Yd;
            this.Fm = this.options.Fm && (!this.options.YT && !this.Co || this.Yo > this.Jm);
            this.Rh = this.Co && this.options.Rh;
            this.ji = this.Fm && this.options.ji && this.Yo > this.Jm;
            a = this.Fj(this.Im);
            this.RE = -a.left;
            this.SE = -a.top;
            if ("string" == typeof this.options.ht) {
                this.Ne = [];
                this.gf = [];
                c = this.Kb.querySelectorAll(this.options.ht);
                a = 0;
                for (b = c.length; a < b; a++) e = this.Fj(c[a]), e.left += this.RE, e.top += this.SE, this.Ne[a] = e.left < this.Yd ? this.Yd : e.left * this.scale, this.gf[a] = e.top < this.fd ? this.fd : e.top * this.scale
            } else if (this.options.ht) {
                for (this.Ne = []; e >= this.Yd;) this.Ne[b] = e, e -= this.Dt, b++;
                this.Yd % this.Dt && (this.Ne[this.Ne.length] = this.Yd - this.Ne[this.Ne.length - 1] + this.Ne[this.Ne.length - 1]);
                b = e = 0;
                for (this.gf = []; e >= this.fd;) this.gf[b] = e, e -= this.Jm, b++;
                this.fd % this.Jm && (this.gf[this.gf.length] = this.fd - this.gf[this.gf.length - 1] + this.gf[this.gf.length - 1])
            }
            this.Qu("h");
            this.Qu("v");
            this.Gk || (this.Kb.style[bf] = "0", this.zn(400))
        },
        scrollTo: function(a, b, c, e) {
            var f = a;
            this.stop();
            f.length || (f = [{ x: a, y: b, time: c, HY: e }]);
            a = 0;
            for (b = f.length; a < b; a++) f[a].HY && (f[a].x = this.x - f[a].x, f[a].y = this.y - f[a].y), this.hj.push({ x: f[a].x, y: f[a].y, time: f[a].time || 0 });
            this.FA()
        },
        disable: function() {
            this.stop();
            this.zn(0);
            this.enabled = t;
            this.Pd( of , window);
            this.Pd(pf, window);
            this.Pd(qf, window)
        },
        enable: function() { this.enabled = p },
        stop: function() {
            this.options.ii ? this.Pd(rf) : tf(this.bB);
            this.hj = [];
            this.Bl = this.Xg = t
        },
        zoom: function(a, b, c, e) {
            var f = c / this.scale;
            this.options.Dk && (this.Gk = p, e = e === l ? 200 : e, a = a - this.RE - this.x, b = b - this.SE - this.y, this.x = a - a * f + this.x, this.y = b - b * f + this.y, this.scale = c, this.refresh(), this.x = 0 < this.x ? 0 : this.x < this.Yd ? this.Yd : this.x, this.y = this.y > this.ef ? this.ef : this.y < this.fd ? this.fd : this.y, this.Kb.style[bf] = e + "ms", this.Kb.style[$e] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + uf, this.Gk = t)
        }
    };

    function Ze(a) {
        if ("" === Te) return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return Te + a
    }
    Se = q;

    function wf(a) {
        this.j = { anchor: Yb, offset: new P(0, 0), maxWidth: "100%", imageHeight: 80 };
        var a = a || {},
            b;
        for (b in a) this.j[b] = a[b];
        this.pl = new ec(q, { af: "api" });
        this.Hj = [];
        this.P = q;
        this.Tf = { height: this.j.imageHeight, width: this.j.imageHeight * xf };
        this.Lc = this.uA = this.El = this.Sc = q
    }
    var yf = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10],
        zf = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
    D.nm(function(a) {
        var b = q;
        a.addEventListener("position_changed", function() { a.j.visible && a.j.albumsControl === p && (b ? b.yx(a.Rb()) : (b = new wf(a.j.albumsControlOptions), b.ta(a))) });
        a.addEventListener("albums_visible_changed", function() { a.j.albumsControl === p ? (b ? b.yx(a.Rb()) : (b = new wf(a.j.albumsControlOptions), b.ta(a)), b.show()) : b.U() });
        a.addEventListener("albums_options_changed", function() { b && b.tk(a.j.albumsControlOptions) });
        a.addEventListener("visible_changed", function() { b && (a.ZC() ? a.j.albumsControl === p && (b.C.style.visibility = "visible") : b.C.style.visibility = "hidden") })
    });
    var xf = 1.8;
    I() && (xf = 1);
    z.extend(wf.prototype, {
        tk: function(a) {
            for (var b in a) this.j[b] = a[b];
            a = this.j.imageHeight + "px";
            this.oc(this.j.anchor);
            this.C.style.width = isNaN(Number(this.j.maxWidth)) === p ? this.j.maxWidth : this.j.maxWidth + "px";
            this.C.style.height = a;
            this.Mj.style.height = a;
            this.Ah.style.height = a;
            this.Tf = { height: this.j.imageHeight, width: this.j.imageHeight * xf };
            this.Lj.style.height = this.Tf.height - 6 + "px";
            this.Lj.style.width = this.Tf.width - 6 + "px";
            this.yx(this.P.Rb(), p)
        },
        ta: function(a) {
            this.P = a;
            this.rr();
            this.RO();
            this.oX();
            this.yx(a.Rb())
        },
        rr: function() {
            var a = this.j.imageHeight + "px";
            this.C = N("div");
            var b = this.C.style;
            b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.j.maxWidth)) === p ? this.j.maxWidth : this.j.maxWidth + "px";
            b.padding = "8px 0";
            b.visibility = "hidden";
            b.height = a;
            this.Mj = N("div");
            b = this.Mj.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.Ah = N("div");
            b = this.Ah.style;
            b.height = a;
            this.Mj.appendChild(this.Ah);
            this.C.appendChild(this.Mj);
            this.P.C.appendChild(this.C);
            this.Lj = N("div", { "class": "pano_photo_item_seleted" });
            this.Lj.style.height = this.Tf.height - 6 + "px";
            this.Lj.style.width = this.Tf.width - 6 + "px";
            this.oc(this.j.anchor)
        },
        wG: function(a) {
            for (var b = this.Hj, c = b.length - 1; 0 <= c; c--)
                if (b[c].panoId == a) return c;
            return -1
        },
        yx: function(a, b) {
            if (b || !this.Hj[this.Sc] || !(this.Hj[this.Sc].panoId == a && 3 !== this.Hj[this.Sc].recoType)) {
                var c = this,
                    e = this.wG(a);
                !b && -1 !== e && this.Hj[e] && 3 !== this.Hj[e].recoType ? this.ap(e) : this.DW(function(a) {
                    for (var b = {}, e, k, m = t, n = [], o = 0, s = a.length; o < s; o++) e = a[o].catlog, k = a[o].floor, l !== e && ("" === e && l !== k ? (m = p, b[k] || (b[k] = []), b[k].push(a[o])) : (b[yf[e]] || (b[yf[e]] = []), b[yf[e]].push(a[o])));
                    for (var v in b) m ? n.push({ data: v + "F", index: v }) : n.push({ data: zf[v], index: v });
                    c.QF = b;
                    c.vi = n;
                    c.ml(a);
                    0 == a.length ? c.U() : c.show()
                })
            }
        },
        JU: function() {
            if (!this.si) {
                var a = this.pW(this.vi),
                    b = N("div");
                b.style.cssText = ["width:" + 134 * this.vi.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                b.innerHTML = a;
                a = N("div");
                a.appendChild(b);
                a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                new vf(a, { Wn: t, ex: p, Rh: t, ji: t, Fm: t, AD: p, Jv: p, Gw: p });
                this.C.appendChild(a);
                for (var c = this, e = b.getElementsByTagName("span"), f = 0, g = e.length; f < g; f++) b = e[f], z.M(b, "click", function() {
                    if (this.getAttribute("dataindex")) {
                        c.ml(c.QF[this.getAttribute("dataindex")]);
                        for (var a = 0, b = e.length; a < b; a++) e[a].style.color = "#FFFFFF";
                        this.style.color = "#3383FF"
                    }
                });
                this.si = a
            }
        },
        GU: function() {
            if (this.si) a = this.ZJ(this.vi), this.gP.innerHTML = a;
            else {
                var a = this.ZJ(this.vi),
                    b = N("ul"),
                    c = this;
                b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                b.innerHTML = a;
                z.M(b, "click", function(a) { if (a = (a.srcElement || a.target).getAttribute("dataindex")) { c.ml(c.QF[a]); for (var e = b.getElementsByTagName("li"), f = 0, g = e.length; f < g; f++) e[f].childNodes[0].getAttribute("dataindex") === a ? z.D.Za(e[f], "pano_catlogLiActive") : z.D.nc(e[f], "pano_catlogLiActive") } });
                var a = N("div"),
                    e = N("a"),
                    f = N("span"),
                    g = N("a"),
                    i = N("span"),
                    k = ["background:url(" + H.oa + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                f.style.cssText = k + "background-position:-18px 0;";
                e.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                i.style.cssText = k + "background-position:0 0;";
                g.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                g.style.top = this.j.imageHeight - 7 + "px";
                a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                e.appendChild(f);
                g.appendChild(i);
                z.M(e, "mouseover", function() {
                    var a = parseInt(b.style.top, 10);
                    7 !== a && (f.style.backgroundPosition = "-27px 0");
                    new ub({ Cc: 60, Vb: vb.Kr, duration: 300, va: function(c) { b.style.top = a + (7 - a) * c + "px" } })
                });
                z.M(e, "mouseout", function() { f.style.backgroundPosition = "-18px 0" });
                z.M(g, "mouseover", function() {
                    var a = parseInt(b.style.top, 10),
                        e = c.j.imageHeight - 14;
                    if (!(parseInt(b.offsetHeight, 10) < e)) {
                        var f = e - parseInt(b.offsetHeight, 10) + 7;
                        f !== a && (i.style.backgroundPosition = "-9px 0");
                        new ub({ Cc: 60, Vb: vb.Kr, duration: 300, va: function(c) { b.style.top = a + (f - a) * c + "px" } })
                    }
                });
                z.M(g, "mouseout", function() { i.style.backgroundPosition = "0 0" });
                a.appendChild(e);
                a.appendChild(g);
                e = N("div");
                e.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.j.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                e.appendChild(b);
                e.appendChild(a);
                this.si = e;
                this.gP = b;
                this.C.appendChild(e)
            }
        },
        HU: function() {
            if (this.vi && !(0 >= this.vi.length)) {
                var a = N("div");
                a.innerHTML = this.Zy;
                a.style.cssText = "position:absolute;background:#252525";
                this.C.appendChild(a);
                this.Or = a;
                this.Lc.Uf.style.left = this.Tf.width + 8 + "px";
                this.si && (this.si.style.left = parseInt(this.si.style.left, 10) + this.Tf.width + 8 + "px");
                var b = this;
                z.M(a, "click", function() { b.P.xc(b.BV) })
            }
        },
        ml: function(a) {
            this.Hj = a;
            this.j.showCatalog && (0 < this.vi.length ? (Xa() ? this.GU() : this.JU(), this.Lc.offsetLeft = 60) : (this.Or && (this.C.removeChild(this.Or), this.Or = q, this.Lc.Uf.style.left = "0px"), this.si && (this.C.removeChild(this.si), this.si = q), this.Lc.offsetLeft = 0));
            var b = this.jW(a);
            Xa() && (this.vi && 0 < this.vi.length && this.j.showExit && this.Zy) && (this.Lc.offsetLeft += this.Tf.width + 8, this.Or ? this.Or.innerHTML = this.Zy : this.HU());
            this.Ah.innerHTML = b;
            this.Ah.style.width = (this.Tf.width + 8) * a.length + 8 + "px";
            a = this.C.offsetWidth;
            b = this.Ah.offsetWidth;
            this.Lc.Vr && (b += this.Lc.Vr());
            b < a - 2 * this.Lc.mi - this.Lc.offsetLeft ? this.C.style.width = b + this.Lc.offsetLeft + "px" : (this.C.style.width = isNaN(Number(this.j.maxWidth)) === p ? this.j.maxWidth : this.j.maxWidth + "px", b < this.C.offsetWidth - 2 * this.Lc.mi - this.Lc.offsetLeft && (this.C.style.width = b + this.Lc.offsetLeft + "px"));
            this.Lc.refresh();
            this.uA = this.Ah.children;
            this.Ah.appendChild(this.Lj);
            this.Lj.style.left = "-100000px";
            a = this.wG(this.P.Rb(), this.J0); - 1 !== a && this.ap(a)
        },
        pW: function(a) { for (var b = "", c, e = 0, f = a.length; e < f; e++) c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[e].index + '">' + a[e].data + "</span></div>", b += c; return b },
        ZJ: function(a) { for (var b = "", c, e = 0, f = a.length; e < f; e++) c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[e].index + '">' + a[e].data + "</span></li>", b += c; return b },
        jW: function(a) { for (var b, c, e, f, g = [], i = this.Tf.height, k = this.Tf.width, m = 0; m < a.length; m++) b = a[m], recoType = b.recoType, e = b.panoId, f = b.name, c = b.heading, b = b.pitch, c = Pe.lK(e, c, b, 198, 108), b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><span class="pano_photo_decs" data-index="' + m + '" style="width:' + k + "px;font-size:" + Math.floor(i / 6) + "px; line-height:" + Math.floor(i / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + f + "</span></a>", 3 === recoType ? Xa() ? (this.Zy = b, this.BV = e, a.splice(m, 1), m--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.j.imageHeight + 'px;" data-index="' + m + '"><img src="' + H.oa + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + m + '" alt=""/></div></a>', g.push(b)) : g.push(b); return g.join("") },
        DW: function(a) {
            var b = this,
                c = this.P.Rb();
            c && this.pl.Dw(c, function(e) { b.P.Rb() === c && a(e) })
        },
        oc: function(a) {
            if (!Za(a) || isNaN(a) || a < Wb || 3 < a) a = this.defaultAnchor;
            var b = this.C,
                c = this.j.offset.width,
                e = this.j.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
                case Wb:
                    b.style.top = e + "px";
                    b.style.left = c + "px";
                    break;
                case Xb:
                    b.style.top = e + "px";
                    b.style.right = c + "px";
                    break;
                case Yb:
                    b.style.bottom = e + "px";
                    b.style.left = c + "px";
                    break;
                case 3:
                    b.style.bottom = e + "px", b.style.right = c + "px"
            }
        },
        RO: function() { this.PO() },
        PO: function() {
            var a = this;
            z.M(this.C, "touchstart", function(a) { a.stopPropagation() });
            z.M(this.Mj, "click", function(b) { if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Sc) a.ap(b), a.P.xc(a.Hj[b].panoId) });
            z.M(this.Ah, "mouseover", function(b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== q && a.cJ(b, p)
            });
            this.P.addEventListener("size_changed", function() { isNaN(Number(a.j.maxWidth)) && a.tk({ maxWidth: a.j.maxWidth }) })
        },
        ap: function(a) {
            this.Lj.style.left = this.uA[a].offsetLeft + 8 + "px";
            this.Lj.setAttribute("data-index", this.uA[a].getAttribute("data-index"));
            this.Sc = a;
            this.cJ(a)
        },
        cJ: function(a, b) {
            var c = this.Tf.width + 8,
                e = 0;
            this.Lc.Vr && (e = this.Lc.Vr() / 2);
            var f = this.Mj.offsetWidth - 2 * e,
                g = this.Ah.offsetLeft || this.Lc.x,
                g = g - e,
                i = -a * c;
            i > g && this.Lc.scrollTo(i + e);
            c = i - c;
            g -= f;
            c < g && (!b || b && 8 < i - g) && this.Lc.scrollTo(c + f + e)
        },
        oX: function() { this.Lc = I() ? new vf(this.Mj, { Wn: t, ex: p, Rh: t, ji: t, Fm: t, AD: p, Jv: p, Gw: p }) : new Af(this.Mj) },
        U: function() { this.C.style.visibility = "hidden" },
        show: function() { this.C.style.visibility = "visible" }
    });

    function Af(a) {
        this.C = a;
        this.Eg = a.children[0];
        this.Wq = q;
        this.mi = 20;
        this.offsetLeft = 0;
        this.ta()
    }
    Af.prototype = {
        ta: function() {
            this.Eg.style.position = "relative";
            this.refresh();
            this.rr();
            this.dB()
        },
        refresh: function() {
            this.vn = this.C.offsetWidth - this.Vr();
            this.Uz = -(this.Eg.offsetWidth - this.vn - this.mi);
            this.Cu = this.mi + this.offsetLeft;
            this.Eg.style.left = this.Cu + "px";
            this.Eg.children[0] && (this.Wq = this.Eg.children[0].offsetWidth);
            this.Uf && (this.Uf.children[0].style.marginTop = this.Oq.children[0].style.marginTop = this.Uf.offsetHeight / 2 - this.Uf.children[0].offsetHeight / 2 + "px")
        },
        Vr: function() { return 2 * this.mi },
        rr: function() {
            this.Ru = N("div");
            this.Ru.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
            this.Uf = this.Ru.children[0];
            this.Oq = this.Ru.children[1];
            this.C.appendChild(this.Ru);
            this.Uf.children[0].style.marginTop = this.Oq.children[0].style.marginTop = this.Uf.offsetHeight / 2 - this.Uf.children[0].offsetHeight / 2 + "px"
        },
        dB: function() {
            var a = this;
            z.M(this.Uf, "click", function() { a.scrollTo(a.Eg.offsetLeft + a.vn) });
            z.M(this.Oq, "click", function() { a.scrollTo(a.Eg.offsetLeft - a.vn) })
        },
        nT: function() {
            z.D.nc(this.Uf, "pano_arrow_disable");
            z.D.nc(this.Oq, "pano_arrow_disable");
            var a = this.Eg.offsetLeft;
            a >= this.Cu && z.D.Za(this.Uf, "pano_arrow_disable");
            a - this.vn <= this.Uz && z.D.Za(this.Oq, "pano_arrow_disable")
        },
        scrollTo: function(a) {
            a = a < this.Eg.offsetLeft ? Math.ceil((a - this.mi - this.vn) / this.Wq) * this.Wq + this.vn + this.mi - 8 : Math.ceil((a - this.mi) / this.Wq) * this.Wq + this.mi;
            a < this.Uz ? a = this.Uz : a > this.Cu && (a = this.Cu);
            var b = this.Eg.offsetLeft,
                c = this;
            new ub({ Cc: 60, Vb: vb.Kr, duration: 300, va: function(e) { c.Eg.style.left = b + (a - b) * e + "px" }, finish: function() { c.nT() } })
        }
    };
    D.Map = Na;
    D.Hotspot = kb;
    D.MapType = Ed;
    D.Point = J;
    D.Pixel = R;
    D.Size = P;
    D.Bounds = hb;
    D.TileLayer = Mc;
    D.Projection = jc;
    D.MercatorProjection = S;
    D.PerspectiveProjection = jb;
    D.Copyright = function(a, b, c) {
        this.id = a;
        this.$a = b;
        this.content = c
    };
    D.Overlay = mc;
    D.Label = uc;
    D.GroundOverlay = vc;
    D.PointCollection = zc;
    D.Marker = U;
    D.CanvasLayer = Cc;
    D.Icon = qc;
    D.IconSequence = sc;
    D.Symbol = rc;
    D.Polyline = Gc;
    D.Polygon = Fc;
    D.InfoWindow = tc;
    D.Circle = Hc;
    D.Control = Ub;
    D.NavigationControl = lb;
    D.GeolocationControl = Zb;
    D.OverviewMapControl = nb;
    D.CopyrightControl = $b;
    D.ScaleControl = mb;
    D.MapTypeControl = ob;
    D.CityListControl = ac;
    D.PanoramaControl = cc;
    D.TrafficLayer = Uc;
    D.CustomLayer = pb;
    D.ContextMenu = fc;
    D.MenuItem = ic;
    D.LocalSearch = fb;
    D.TransitRoute = fe;
    D.DrivingRoute = ie;
    D.WalkingRoute = je;
    D.RidingRoute = ke;
    D.Autocomplete = ye;
    D.RouteSearch = pe;
    D.Geocoder = qe;
    D.LocalCity = ve;
    D.Geolocation = Geolocation;
    D.Convertor = lc;
    D.BusLineSearch = xe;
    D.Boundary = we;
    D.Panorama = Qa;
    D.PanoramaLabel = Ee;
    D.PanoramaService = ec;
    D.PanoramaCoverageLayer = dc;
    D.PanoramaFlashInterface = Ne;

    function T(a, b) { for (var c in b) a[c] = b[c] } T(window, {
        BMap: D,
        _jsload2: function(a, b) {
            ia.Ox.CX && ia.Ox.set(a, b);
            K.iU(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var Bf = Na.prototype;
    T(Bf, { getBounds: Bf.le, getCenter: Bf.ub, getMapType: Bf.ra, getSize: Bf.Ab, setSize: Bf.te, getViewport: Bf.fs, getZoom: Bf.ga, centerAndZoom: Bf.ud, panTo: Bf.bi, panBy: Bf.kg, setCenter: Bf.hf, setCurrentCity: Bf.hE, setMapType: Bf.ng, setViewport: Bf.eh, setZoom: Bf.Kc, highResolutionEnabled: Bf.Mw, zoomTo: Bf.pg, zoomIn: Bf.TE, zoomOut: Bf.UE, addHotspot: Bf.TA, removeHotspot: Bf.JY, clearHotspots: Bf.Nv, checkResize: Bf.lU, addControl: Bf.xv, removeControl: Bf.wM, getContainer: Bf.Pa, addContextMenu: Bf.On, removeContextMenu: Bf.Ro, addOverlay: Bf.Ka, removeOverlay: Bf.Nb, clearOverlays: Bf.$I, openInfoWindow: Bf.Uc, closeInfoWindow: Bf.Rc, pointToOverlayPixel: Bf.Oe, overlayPixelToPoint: Bf.fM, getInfoWindow: Bf.Rg, getOverlays: Bf.Aw, getPanes: function() { return { floatPane: this.Nd.pC, markerMouseTarget: this.Nd.CD, floatShadow: this.Nd.QJ, labelPane: this.Nd.wD, markerPane: this.Nd.DL, markerShadow: this.Nd.EL, mapPane: this.Nd.Bs, vertexPane: this.Nd.MN } }, addTileLayer: Bf.Fe, removeTileLayer: Bf.Lf, pixelToPoint: Bf.Bb, pointToPixel: Bf.Tb, setFeatureStyle: Bf.p4, selectBaseElement: Bf.i4, setMapStyle: Bf.Ws, enable3DBuilding: Bf.io, disable3DBuilding: Bf.WU, getPanorama: Bf.bs, initIndoorLayer: Bf.pX, setNormalMapDisplay: Bf.TM, setMapStyleV2: Bf.nZ, setBMapCopyrightOffset: Bf.dZ });
    var Cf = Ed.prototype;
    T(Cf, { getTileLayer: Cf.NW, getMinZoom: Cf.Ti, getMaxZoom: Cf.Ph, getProjection: Cf.Ul, getTextColor: Cf.Xl, getTips: Cf.es });
    T(window, { BMAP_NORMAL_MAP: Oa, BMAP_PERSPECTIVE_MAP: Sa, BMAP_SATELLITE_MAP: ab, BMAP_HYBRID_MAP: Va });
    var Df = S.prototype;
    T(Df, { lngLatToPoint: Df.Tg, pointToLngLat: Df.gj });
    var Ef = jb.prototype;
    T(Ef, { lngLatToPoint: Ef.Tg, pointToLngLat: Ef.gj });
    var Ff = hb.prototype;
    T(Ff, { equals: Ff.gc, containsPoint: Ff.or, containsBounds: Ff.wU, intersects: Ff.os, extend: Ff.extend, getCenter: Ff.ub, isEmpty: Ff.dj, getSouthWest: Ff.Le, getNorthEast: Ff.Ff, toSpan: Ff.EE });
    var Gf = mc.prototype;
    T(Gf, { isVisible: Gf.Ic, show: Gf.show, hide: Gf.U });
    mc.getZIndex = mc.fk;
    var Hf = ib.prototype;
    T(Hf, { openInfoWindow: Hf.Uc, closeInfoWindow: Hf.Rc, enableMassClear: Hf.Qi, disableMassClear: Hf.YU, show: Hf.show, hide: Hf.U, getMap: Hf.ww, addContextMenu: Hf.On, removeContextMenu: Hf.Ro });
    var If = U.prototype;
    T(If, { setIcon: If.Ob, getIcon: If.to, setPosition: If.qa, getPosition: If.fa, setOffset: If.ae, getOffset: If.Ui, getLabel: If.IC, setLabel: If.wm, setTitle: If.yc, setTop: If.fi, enableDragging: If.Qb, disableDragging: If.IB, setZIndex: If.gp, getMap: If.ww, setAnimation: If.vm, setShadow: If.Hx, hide: If.U, setRotation: If.cp, getRotation: If.pK });
    T(window, { BMAP_ANIMATION_DROP: 1, BMAP_ANIMATION_BOUNCE: 2 });
    var Jf = uc.prototype;
    T(Jf, { setStyle: Jf.Cd, setStyles: Jf.ei, setContent: Jf.Wc, setPosition: Jf.qa, getPosition: Jf.fa, setOffset: Jf.ae, getOffset: Jf.Ui, setTitle: Jf.yc, setZIndex: Jf.gp, getMap: Jf.ww, getContent: Jf.$j });
    var Kf = qc.prototype;
    T(Kf, { setImageUrl: Kf.NM, setSize: Kf.te, setAnchor: Kf.oc, setImageOffset: Kf.Vs, setImageSize: Kf.iZ, setInfoWindowAnchor: Kf.lZ, setPrintImageUrl: Kf.wZ });
    var Lf = tc.prototype;
    T(Lf, { redraw: Lf.$d, setTitle: Lf.yc, setContent: Lf.Wc, getContent: Lf.$j, getPosition: Lf.fa, enableMaximize: Lf.Og, disableMaximize: Lf.cw, isOpen: Lf.Va, setMaxContent: Lf.Xs, maximize: Lf.dx, enableAutoPan: Lf.Lr });
    var Mf = oc.prototype;
    T(Mf, { getPath: Mf.Ke, setPath: Mf.be, setPositionAt: Mf.ym, getStrokeColor: Mf.JW, setStrokeWeight: Mf.fp, getStrokeWeight: Mf.sK, setStrokeOpacity: Mf.dp, getStrokeOpacity: Mf.KW, setFillOpacity: Mf.Us, getFillOpacity: Mf.eW, setStrokeStyle: Mf.ep, getStrokeStyle: Mf.rK, getFillColor: Mf.dW, getBounds: Mf.le, enableEditing: Mf.Ze, disableEditing: Mf.XU, getEditing: Mf.aW });
    var Nf = Hc.prototype;
    T(Nf, { setCenter: Nf.hf, getCenter: Nf.ub, getRadius: Nf.nK, setRadius: Nf.jf });
    var Of = Fc.prototype;
    T(Of, { getPath: Of.Ke, setPath: Of.be, setPositionAt: Of.ym });
    var Pf = kb.prototype;
    T(Pf, { getPosition: Pf.fa, setPosition: Pf.qa, getText: Pf.TC, setText: Pf.at });
    J.prototype.equals = J.prototype.gc;
    R.prototype.equals = R.prototype.gc;
    P.prototype.equals = P.prototype.gc;
    T(window, { BMAP_ANCHOR_TOP_LEFT: Wb, BMAP_ANCHOR_TOP_RIGHT: Xb, BMAP_ANCHOR_BOTTOM_LEFT: Yb, BMAP_ANCHOR_BOTTOM_RIGHT: 3 });
    var Qf = Ub.prototype;
    T(Qf, { setAnchor: Qf.oc, getAnchor: Qf.vC, setOffset: Qf.ae, getOffset: Qf.Ui, show: Qf.show, hide: Qf.U, isVisible: Qf.Ic, toString: Qf.toString });
    var Rf = lb.prototype;
    T(Rf, { getType: Rf.Ao, setType: Rf.zm });
    T(window, { BMAP_NAVIGATION_CONTROL_LARGE: 0, BMAP_NAVIGATION_CONTROL_SMALL: 1, BMAP_NAVIGATION_CONTROL_PAN: 2, BMAP_NAVIGATION_CONTROL_ZOOM: 3 });
    var Sf = nb.prototype;
    T(Sf, { changeView: Sf.je, setSize: Sf.te, getSize: Sf.Ab });
    var Tf = mb.prototype;
    T(Tf, { getUnit: Tf.RW, setUnit: Tf.oE });
    T(window, { BMAP_UNIT_METRIC: "metric", BMAP_UNIT_IMPERIAL: "us" });
    var Uf = $b.prototype;
    T(Uf, { addCopyright: Uf.yv, removeCopyright: Uf.WD, getCopyright: Uf.Pl, getCopyrightCollection: Uf.CC });
    T(window, { BMAP_MAPTYPE_CONTROL_HORIZONTAL: bc, BMAP_MAPTYPE_CONTROL_DROPDOWN: 1, BMAP_MAPTYPE_CONTROL_MAP: 2 });
    var Vf = Mc.prototype;
    T(Vf, { getMapType: Vf.ra, getCopyright: Vf.Pl, isTransparentPng: Vf.ws });
    var Wf = fc.prototype;
    T(Wf, { addItem: Wf.zv, addSeparator: Wf.WA, removeSeparator: Wf.YD });
    var Xf = ic.prototype;
    T(Xf, { setText: Xf.at });
    var Yf = W.prototype;
    T(Yf, { getStatus: Yf.Vl, setSearchCompleteCallback: Yf.$s, getPageCapacity: Yf.cf, setPageCapacity: Yf.bp, setLocation: Yf.xm, disableFirstResultSelection: Yf.JB, enableFirstResultSelection: Yf.bC, gotoPage: Yf.Yl, searchNearby: Yf.Zo, searchInBounds: Yf.um, search: Yf.search });
    T(window, { BMAP_STATUS_SUCCESS: 0, BMAP_STATUS_CITY_LIST: 1, BMAP_STATUS_UNKNOWN_LOCATION: Od, BMAP_STATUS_UNKNOWN_ROUTE: 3, BMAP_STATUS_INVALID_KEY: 4, BMAP_STATUS_INVALID_REQUEST: 5, BMAP_STATUS_PERMISSION_DENIED: Pd, BMAP_STATUS_SERVICE_UNAVAILABLE: 7, BMAP_STATUS_TIMEOUT: Qd });
    T(window, { BMAP_POI_TYPE_NORMAL: 0, BMAP_POI_TYPE_BUSSTOP: 1, BMAP_POI_TYPE_BUSLINE: 2, BMAP_POI_TYPE_SUBSTOP: 3, BMAP_POI_TYPE_SUBLINE: 4 });
    T(window, { BMAP_TRANSIT_POLICY_RECOMMEND: 0, BMAP_TRANSIT_POLICY_LEAST_TIME: 4, BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1, BMAP_TRANSIT_POLICY_LEAST_WALKING: 2, BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3, BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5, BMAP_LINE_TYPE_BUS: 0, BMAP_LINE_TYPE_SUBWAY: 1, BMAP_LINE_TYPE_FERRY: 2, BMAP_LINE_TYPE_TRAIN: 3, BMAP_LINE_TYPE_AIRPLANE: 4, BMAP_LINE_TYPE_COACH: 5 });
    T(window, { BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0, BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1, BMAP_TRANSIT_TYPE_POLICY_COACH: 2 });
    T(window, { BMAP_INTERCITY_POLICY_LEAST_TIME: 0, BMAP_INTERCITY_POLICY_EARLY_START: 1, BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2 });
    T(window, { BMAP_TRANSIT_TYPE_IN_CITY: 0, BMAP_TRANSIT_TYPE_CROSS_CITY: 1 });
    T(window, { BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0, BMAP_TRANSIT_PLAN_TYPE_LINE: 1 });
    var Zf = ee.prototype;
    T(Zf, { clearResults: Zf.Ie });
    ge = fe.prototype;
    T(ge, { setPolicy: ge.Zs, toString: ge.toString, setPageCapacity: ge.bp, setIntercityPolicy: ge.PM, setTransitTypePolicy: ge.YM });
    T(window, { BMAP_DRIVING_POLICY_DEFAULT: 0, BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3, BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5, BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4 });
    T(window, { BMAP_MODE_DRIVING: "driving", BMAP_MODE_TRANSIT: "transit", BMAP_MODE_WALKING: "walking", BMAP_MODE_NAVIGATION: "navigation" });
    var $f = pe.prototype;
    T($f, { routeCall: $f.IM });
    T(window, { BMAP_HIGHLIGHT_STEP: 1, BMAP_HIGHLIGHT_ROUTE: 2 });
    T(window, { BMAP_ROUTE_TYPE_DRIVING: Sd, BMAP_ROUTE_TYPE_WALKING: Rd, BMAP_ROUTE_TYPE_RIDING: Td });
    T(window, { BMAP_ROUTE_STATUS_NORMAL: Ud, BMAP_ROUTE_STATUS_EMPTY: 1, BMAP_ROUTE_STATUS_ADDRESS: 2 });
    var ag = ie.prototype;
    T(ag, { setPolicy: ag.Zs });
    var cg = ye.prototype;
    T(cg, { show: cg.show, hide: cg.U, setTypes: cg.nE, setLocation: cg.xm, search: cg.search, setInputValue: cg.Ex });
    T(pb.prototype, {});
    var dg = we.prototype;
    T(dg, { get: dg.get });
    T(dc.prototype, {});
    T(window, { BMAP_POINT_DENSITY_HIGH: 200, BMAP_POINT_DENSITY_MEDIUM: Xc, BMAP_POINT_DENSITY_LOW: 50 });
    T(window, { BMAP_POINT_SHAPE_STAR: 1, BMAP_POINT_SHAPE_WATERDROP: 2, BMAP_POINT_SHAPE_CIRCLE: wc, BMAP_POINT_SHAPE_SQUARE: 4, BMAP_POINT_SHAPE_RHOMBUS: 5 });
    T(window, { BMAP_POINT_SIZE_TINY: 1, BMAP_POINT_SIZE_SMALLER: 2, BMAP_POINT_SIZE_SMALL: 3, BMAP_POINT_SIZE_NORMAL: xc, BMAP_POINT_SIZE_BIG: 5, BMAP_POINT_SIZE_BIGGER: 6, BMAP_POINT_SIZE_HUGE: 7 });
    T(window, { BMap_Symbol_SHAPE_CAMERA: 11, BMap_Symbol_SHAPE_WARNING: 12, BMap_Symbol_SHAPE_SMILE: 13, BMap_Symbol_SHAPE_CLOCK: 14, BMap_Symbol_SHAPE_POINT: 9, BMap_Symbol_SHAPE_PLANE: 10, BMap_Symbol_SHAPE_CIRCLE: 1, BMap_Symbol_SHAPE_RECTANGLE: 2, BMap_Symbol_SHAPE_RHOMBUS: 3, BMap_Symbol_SHAPE_STAR: 4, BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5, BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6, BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7, BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8 });
    T(window, { BMAP_CONTEXT_MENU_ICON_ZOOMIN: gc, BMAP_CONTEXT_MENU_ICON_ZOOMOUT: hc });
    T(window, { BMAP_SYS_DRAWER: Ma, BMAP_SVG_DRAWER: 1, BMAP_VML_DRAWER: 2, BMAP_CANVAS_DRAWER: 3, BMAP_SVG_DRAWER_FIRST: 4 });
    D.GT();
})()