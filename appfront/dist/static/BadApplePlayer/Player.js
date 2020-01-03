/*

	BadApplePlayerBoot [绚丽彩虹播放器引导]

	www.badapple.top —— 基于HTML5 免费、稳定、安全、人性化 的播放器插件

	████████████████████████████████████████████████████████
	██                                                    ██
	██  Copyright (C) 绚丽彩虹工作室 Flandre-Studio.cn    ██
	██                                                    ██
	██  任何人不得使用本代码诞生二开魔改作品！            ██
	██                                                    ██
	████████████████████████████████████████████████████████

	LastUpdate: 2018-09-12 00:29:50

*/
var _$_22cb = ["undefined", "[BadApplePlayerBoot] \u6ca1\u6709\u5b89\u88c5JQuery\uff01", "error", "xlch_player_isload", "getItem", "True", "xlch_player_runningtime", "getTime", "round", "[BadApplePlayerBoot] \u53d6\u6d88\u52a0\u8f7d\u64ad\u653e\u5668.\u539f\u56e0\uff1a", "\u5176\u4ed6\u9875\u9762\u5df2\u52a0\u8f7d", "\u624b\u52a8\u7981\u6b62", "info", "setItem", "onbeforeunload", "False", "<div id=\"BadApplePlayer\" class=\"show\">", "\x09<div class=\"player\">", "\x09\x09<div class=\"blur-img\">", "\x09\x09\x09<img class=\"blur\" style=\"top: 0px; display: inline;\">", "\x09\x09</div>", "\x09\x09<div class=\"infos\">", "\x09\x09\x09<div class=\"songstyle\">", "\x09\x09\x09\x09<i class=\"fa fa-music\"></i>", "\x09\x09\x09\x09<span class=\"song\"></span>", "\x09\x09\x09</div>", "\x09\x09\x09<div class=\"timestyle\">", "\x09\x09\x09\x09<span class=\"time\">00:00 / 00:00</span>", "\x09\x09\x09\x09<i class=\"fa fa-clock-o\"></i></div>", "\x09\x09\x09<div class=\"artiststyle\">", "\x09\x09\x09\x09<i class=\"fa fa-user\"></i>", "\x09\x09\x09\x09<span class=\"artist\"></span>", "\x09\x09\x09\x09<span class=\"moshi\">", "\x09\x09\x09\x09\x09\u968f\u673a\u64ad\u653e <i class=\"fa fa-random current\"></i></span>", "\x09\x09\x09\x09<i class=\"fa fa-folder\"></i>", "\x09\x09\x09\x09<span class=\"artist1\"></span>", "\x09\x09\x09\x09<span class=\"geci\"></span>", "\x09\x09<div class=\"control\">", "\x09\x09\x09<i class=\"playtype fa fa-retweet current\" title=\"\u5207\u6362\u6a21\u5f0f\"></i>", "\x09\x09\x09<i class=\"prev fa fa-backward\" title=\"\u4e0a\u4e00\u9996\"></i>", "\x09\x09\x09<div class=\"status\">", "\x09\x09\x09\x09<b>", "\x09\x09\x09\x09\x09<i class=\"play fa fa-play\" title=\"\u64ad\u653e\"></i>", "\x09\x09\x09\x09\x09<i class=\"pause fa fa-pause\" title=\"\u6682\u505c\"></i>", "\x09\x09\x09\x09</b>", "\x09\x09\x09<i class=\"next fa fa-forward\" title=\"\u4e0b\u4e00\u9996\"></i>", "\x09\x09\x09<i class=\"search fa fa-search\" title=\"\u641c\u7d22\u6b4c\u66f2\"></i>", "\x09\x09<div class=\"bottom\">", "\x09\x09\x09<div class=\"playprogress\">", "\x09\x09\x09\x09<div class=\"progressbg\">", "\x09\x09\x09\x09\x09<div class=\"progressbg1\"></div>", "\x09\x09\x09\x09\x09<div class=\"progressbg2\"></div>", "\x09\x09\x09\x09\x09<div class=\"ts\"></div>", "\x09\x09\x09\x09</div>", "\x09\x09\x09<ul class=\"bottomright\">", "\x09\x09\x09\x09<li class=\"ratecontrol\">", "\x09\x09\x09\x09\x09<div class=\"rate fa fa-play\" title=\"\u64ad\u653e\u53d8\u901f\"></div>", "\x09\x09\x09\x09\x09<div class=\"rateprogress\">", "\x09\x09\x09\x09\x09\x09<div class=\"progressbg\">", "\x09\x09\x09\x09\x09\x09\x09<div class=\"progressbg1\"></div>", "\x09\x09\x09\x09\x09\x09\x09<div class=\"ts\"></div>", "\x09\x09\x09\x09\x09\x09</div>", "\x09\x09\x09\x09\x09</div>", "\x09\x09\x09\x09</li>", "\x09\x09\x09\x09<li class=\"volumecontrol\">", "\x09\x09\x09\x09\x09<div class=\"volume fa fa-volume-up\" title=\"\u97f3\u91cf\u63a7\u5236\"></div>", "\x09\x09\x09\x09\x09<div class=\"volumeprogress\">", "\x09\x09\x09\x09<li class=\"switch-ksclrc\" style=\"display: list-item;\"><i title=\"\u6b4c\u8bcd\u5f00\u5173\" class=\"fa fa-toggle-on\"></i></li>", "\x09\x09\x09\x09<li class=\"switch-playlist\"><i class=\"fa fa-bars\" title=\"\u64ad\u653e\u5217\u8868\"></i></li>", "\x09\x09\x09</ul>", "\x09\x09\x09<div style=\"clear:both\"></div>", "\x09\x09<div class=\"cover\"></div>", "\x09</div>", "\x09<div class=\"playlist\">", "\x09\x09<div class=\"playlist-bd\">", "\x09\x09\x09<div class=\"album-list\">", "\x09\x09\x09\x09<div class=\"musicheader\"></div>", "\x09\x09\x09\x09<div class=\"list\"></div>", "\x09\x09\x09<div class=\"song-list\">", "\x09\x09\x09\x09<div class=\"musicheader\">", "\x09\x09\x09\x09\x09<i class=\"fa fa-angle-right\"></i>", "\x09\x09\x09\x09\x09<span></span>", "\x09\x09\x09\x09<div class=\"list\">", "\x09\x09\x09\x09\x09<ul></ul>", "\x09<div class=\"switch-player\">", "\x09\x09<i class=\"fa fa-angle-right\" style=\"margin-top: 20px;\"></i>", "\x09<div class=\"searchbox\"><input type=\"text\" placeholder=\"\u8f93\u5165\u6b4c\u624b+\u6b4c\u66f2\u540d\u5e76\u56de\u8f66...\" /><i title=\"\u6e05\u7a7a\u641c\u7d22\u64ad\u653e\u5217\u8868\" class=\"delsearchlist fa fa-trash\"></i><div class=\"searchlistbox\"><ul></ul></div></div>", "</div>", "<div id=\"BadAppleTips\"></div>", "<div id=\"BadAppleLrc\"></div>", "<div id=\"BadAppleKsc\"></div>", "<div class=\"xlch_pjax_loading_frame\">", "\x09<div class=\"double-bounce1\"></div>", "\x09<div class=\"double-bounce2\"></div>", "<div class=\"xlch_pjax_loading\"></div>", "<div id=\"BadApplePlayer_Ad\">", "<div id=\"BadApplePlayer_Ad_Close\" title=\"\u5173\u95ed\u540e\u4e00\u5929\u5185\u4e0d\u4f1a\u663e\u793a\">", "\x09<i class=\"fa fa-close\"></i>", "<div id=\"BadApplePlayer_Ad_Show\">", "\x09<a target=\"_blank\" href=\"{AdURL}\"><img src=\"{AdImg}\"></a>", "<div id=\"BadApplePlayer_Ad_bar\">", "\x09<div id=\"BadApplePlayer_Ad_Title\">", "\x09\x09<a href=\"http://bbs.qq-admin.cn/forum.php?mod=viewthread&tid=46\" target=\"_blank\">\u7eda\u4e3d\u5f69\u8679\u64ad\u653e\u5668\u8d5e\u52a9\u5546\u5e7f\u544a</a>", "https:", "protocol", "location", "domain", "test.badapple.top", "test2.badapple.top", "http://img.badapple.top/", "http://", "/", "http://api.badapple.top/", "http://www.badapple.top/", "https://img.https.badapple.top/", "https://static.https.badapple.top/", "http://static.badapple.top/", "https://api.https.badapple.top/", "charset", "UTF-8", "BadApplePlayer/Player.js", "script", "utf-8", "ajax", "[BadApplePlayerBoot] Try to fix the charset.", "head", "appendTo", "BadApplePlayer/css/player.css", "stylesheet", "text/css", "attr", "<link>", "<div id=\"XlchPlayer\" style=\"display:none;\"></div>", "append", "body", "#XlchPlayer", "/WebConfig2.php?Key=", "[BadApplePlayerBoot] Load Fail: WebConfig2.php", "ready", "mCustomScrollbar", "[BadApplePlayerBoot] \u672a\u68c0\u6d4b\u5230 scrollbar.js\u3002\u53ef\u80fd\u7684\u539f\u56e0\uff1a", "warn", "[BadApplePlayerBoot] 1.\u64ad\u653e\u5668\u4ee3\u7801\u7684\u4e0b\u9762\u53c8\u91cd\u65b0\u52a0\u8f7d\u4e86\u4e00\u904dJQuery,\u5bfc\u81f4\u7ec4\u4ef6\u6ce8\u518c\u7684Jquery\u51fd\u6570\u88ab\u6e05\u7a7a", "[BadApplePlayerBoot] \u89e3\u51b3\u529e\u6cd5\uff1a", "[BadApplePlayerBoot] 1.\u5c1d\u8bd5\u67e5\u770b\u7f51\u9875\u6e90\u4ee3\u7801\uff0c\u641c\u7d22\"jquery\"\uff0c\u67e5\u770b\u662f\u5426\u6709\u591a\u4e2ajquery\u88ab\u52a0\u8f7d\uff0c\u5982\u679c\u6709\uff0c\u8bf7\u5220\u9664\u8be5jquery\u3002", "[BadApplePlayerBoot] 2.\u52a0\u5165\u7eda\u4e3d\u5f69\u8679\u7ad9\u957f\u7fa4\uff0c\u5bfb\u627e\u6280\u672f\u5e2e\u52a9\u3002", "BadApplePlayer/js/scrollbar.js", "[BadApplePlayerBoot] Load Fail: scrollbar.js", "[BadApplePlayerBoot] \u5df2\u4e3a\u60a8\u91cd\u65b0\u52a0\u8f7d scrollbar.js", "match", "userAgent", "", "html", "BadApplePlayer/js/player.js", "[BadApplePlayerBoot] \u64ad\u653e\u5668\u7531\u4e8e\u8bfb\u53d6\u4e0d\u5230\u7ec4\u4ef6 scrollbar.js \u5bfc\u81f4\u5d29\u6e83", "\u64ad\u653e\u5668\u53ef\u80fd\u5df2\u7ecf\u5d29\u6e83\uff0c\u8bf7\u6309F12\u5207\u6362\u5230JS\u63a7\u5236\u53f0(Console)\u67e5\u770b\u3002", "show", "[BadApplePlayerBoot] \u7cfb\u7edf\u68c0\u6d4b\u5230\u60a8\u5b89\u88c5\u4e86\u5783\u573e\u7edf\u8ba1\u63d2\u4ef6CNZZ\uff0c\u8be5\u63d2\u4ef6\u7531\u4e8e\u7f16\u5199\u6280\u672f\u4eba\u5458\u7684\u758f\u5ffd\uff0c\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4f1a\u8bef\u91cd\u65b0\u52a0\u8f7dJQuery\uff0c\u5c06\u4f1a\u5bfc\u81f4\u67d0\u4e9b\u4f9d\u8d56\u4e8eJQuery\u7684js\u7c7b\u5e93\u5931\u6548\uff0c\u5e76\u5bfc\u81f4\u64ad\u653e\u5668\u5d29\u6e83\uff0c\u5efa\u8bae\u60a8\u4f7f\u7528\u767e\u5ea6\u7edf\u8ba1\u6216\u5c06\u8be5\u7edf\u8ba1\u4ee3\u7801\u79fb\u52a8\u5230\u64ad\u653e\u5668\u4ee3\u7801\u7684\u4e0b\u9762\uff0c\u4ee5\u514d\u51b2\u7a81\uff01", "[BadApplePlayerBoot] \u5728\u8fd9\u91cc\u79d1\u666e\u4e00\u4e0b\uff1a\u8fd9\u73a9\u610f\u5c31\u662f\u4e2a\u5e9f\u7269\uff0c\u51e0\u767e\u5e74ui\u4e0d\u66f4\u65b0\uff0c\u52a0\u5e7f\u544a\u5012\u662f\u633a\u79ef\u6781\uff0c\u670d\u52a1\u5668\u8fd8\u7ecf\u5e38boom\uff0c\u5f00\u53d1\u4eba\u5458\u4e0d\u4e13\u4e1a\u3002", "[BadApplePlayerBoot] Load Fail: player.js", "getMonth", "-", "getDate", "xlch_player_addate", ":visible", "is", "#BadApplePlayer_Ad", "opacity", "css", "1", "height", "width", "bottom", "0px", "right", "visibility", "collapse", "hidden", "http://img.badapple.top/Xlch/AD/prpr.png", "remove", "initial", "{AdImg}", "replace", "{AdURL}", "hide", "click", "#BadApplePlayer_Ad_Close", "createElement", "src", "https://hm.baidu.com/hm.js?e7832a384d37994887357af186b47e63", "getElementsByTagName", "insertBefore", "parentNode", "length", "options", "data", "dragObj", "dostop", "extend", "callback", "static", "position", "relative", "isPhone", "__start", "parentObj", "maxWidth", "max", "maxHeight", "targetTouches", "clientX", "offsetLeft", "clientY", "offsetTop", "touchmove", "__move", "on", "touchend", "__end", "offsetWidth", "offsetHeight", "lockX", "top", "style", "px", "lockY", "left", "off", "dostart", "touchstart", "mousemove", "mouseup", "setCapture", "captureEvents", "MOUSEMOVE", "MOUSEUP", "stopPropagation", "preventDefault", "releaseCapture", "releaseEvents", "mousedown", "fn"];
if (_$_22cb[0] == typeof BadApplePlayerCharset) {
    var BadApplePlayerCharset = false
}
;
if (typeof (jQuery) == _$_22cb[0]) {
    console[_$_22cb[2]](_$_22cb[1])
}
;var BadApplePlayerIsLoaded = (typeof (localStorage[_$_22cb[4]](_$_22cb[3])) != _$_22cb[0] ? ((localStorage[_$_22cb[4]](_$_22cb[3]) == _$_22cb[5] && parseInt(localStorage[_$_22cb[4]](_$_22cb[6])) + 10 > Math[_$_22cb[8]](new Date()[_$_22cb[7]]() / 1000)) ? true : false) : false);
var BadApplePlayerIsLoad = (typeof (BadApplePlayerIsLoad) != _$_22cb[0] ? BadApplePlayerIsLoad : !BadApplePlayerIsLoaded);
(function (IsLoad, $) {
    if (!IsLoad) {
        console[_$_22cb[12]](_$_22cb[9] + (BadApplePlayerIsLoaded ? _$_22cb[10] : _$_22cb[11]));
        return false
    }
    ;BadApplePlayerIsLoaded = true;
    localStorage[_$_22cb[13]](_$_22cb[3], _$_22cb[5]);
    setInterval(function () {
        localStorage[_$_22cb[13]](_$_22cb[6], Math[_$_22cb[8]](new Date()[_$_22cb[7]]() / 1000))
    }, 5000);
    window[_$_22cb[14]] = function () {
        localStorage[_$_22cb[13]](_$_22cb[3], _$_22cb[15])
    };
    var _0x1628D = _$_22cb[16] + _$_22cb[17] + _$_22cb[18] + _$_22cb[19] + _$_22cb[20] + _$_22cb[21] + _$_22cb[22] + _$_22cb[23] + _$_22cb[24] + _$_22cb[25] + _$_22cb[26] + _$_22cb[27] + _$_22cb[28] + _$_22cb[29] + _$_22cb[30] + _$_22cb[31] + _$_22cb[32] + _$_22cb[33] + _$_22cb[25] + _$_22cb[29] + _$_22cb[34] + _$_22cb[35] + _$_22cb[36] + _$_22cb[25] + _$_22cb[20] + _$_22cb[37] + _$_22cb[38] + _$_22cb[39] + _$_22cb[40] + _$_22cb[41] + _$_22cb[42] + _$_22cb[43] + _$_22cb[44] + _$_22cb[25] + _$_22cb[45] + _$_22cb[46] + _$_22cb[20] + _$_22cb[47] + _$_22cb[48] + _$_22cb[49] + _$_22cb[50] + _$_22cb[51] + _$_22cb[52] + _$_22cb[53] + _$_22cb[25] + _$_22cb[54] + _$_22cb[55] + _$_22cb[56] + _$_22cb[57] + _$_22cb[58] + _$_22cb[59] + _$_22cb[60] + _$_22cb[61] + _$_22cb[62] + _$_22cb[63] + _$_22cb[64] + _$_22cb[65] + _$_22cb[66] + _$_22cb[58] + _$_22cb[59] + _$_22cb[60] + _$_22cb[61] + _$_22cb[62] + _$_22cb[63] + _$_22cb[67] + _$_22cb[68] + _$_22cb[69] + _$_22cb[70] + _$_22cb[20] + _$_22cb[71] + _$_22cb[72] + _$_22cb[73] + _$_22cb[74] + _$_22cb[75] + _$_22cb[76] + _$_22cb[77] + _$_22cb[25] + _$_22cb[78] + _$_22cb[79] + _$_22cb[80] + _$_22cb[81] + _$_22cb[53] + _$_22cb[82] + _$_22cb[83] + _$_22cb[53] + _$_22cb[25] + _$_22cb[20] + _$_22cb[72] + _$_22cb[84] + _$_22cb[85] + _$_22cb[72] + _$_22cb[86] + _$_22cb[87] + _$_22cb[88] + _$_22cb[89] + _$_22cb[90] + _$_22cb[91] + _$_22cb[92] + _$_22cb[93] + _$_22cb[87] + _$_22cb[94];
    var _0x1623F = _$_22cb[95] + _$_22cb[96] + _$_22cb[97] + _$_22cb[87] + _$_22cb[98] + _$_22cb[99] + _$_22cb[87] + _$_22cb[100] + _$_22cb[101] + _$_22cb[102] + _$_22cb[72] + _$_22cb[87] + _$_22cb[87];
    BadApplePlayerIsSSL = (_$_22cb[103] == document[_$_22cb[105]][_$_22cb[104]]) ? true : false;
    if (document[_$_22cb[106]] == _$_22cb[107] || document[_$_22cb[106]] == _$_22cb[108]) {
        BadApplePlayerDomain_Img = _$_22cb[109];
        BadApplePlayerDomain_Static = _$_22cb[110] + document[_$_22cb[106]] + _$_22cb[111];
        BadApplePlayerDomain_API = _$_22cb[112];
        BadApplePlayerDomain_WWW = _$_22cb[113]
    } else {
        BadApplePlayerDomain_Img = (BadApplePlayerIsSSL ? _$_22cb[114] : _$_22cb[109]);
        BadApplePlayerDomain_Static = (BadApplePlayerIsSSL ? _$_22cb[115] : _$_22cb[116]);
        BadApplePlayerDomain_API = (BadApplePlayerIsSSL ? _$_22cb[117] : _$_22cb[112]);
        BadApplePlayerDomain_WWW = _$_22cb[113]
    }
    ;BadApplePlayerCharset = BadApplePlayerCharset ? BadApplePlayerCharset : document[_$_22cb[118]];
    if (BadApplePlayerCharset != _$_22cb[119]) {
        BadApplePlayerCharset = _$_22cb[119];
        $[_$_22cb[123]]({
            url: BadApplePlayerDomain_Static + _$_22cb[120],
            dataType: _$_22cb[121],
            scriptCharset: _$_22cb[122]
        });
        console[_$_22cb[12]](_$_22cb[124]);
        return
    }
    ;$(_$_22cb[131])[_$_22cb[130]]({
        href: BadApplePlayerDomain_Static + _$_22cb[127],
        rel: _$_22cb[128],
        type: _$_22cb[129]
    })[_$_22cb[126]](_$_22cb[125]);
    $(document)[_$_22cb[138]](function () {
        $(_$_22cb[134])[_$_22cb[133]](_$_22cb[132]);
        $(_$_22cb[135])[_$_22cb[133]](_0x1628D);
        _0x1628D = null;
        $[_$_22cb[123]]({
            url: BadApplePlayerDomain_API + _$_22cb[136] + "RainRose",
            dataType: _$_22cb[121],
            scriptCharset: _$_22cb[122],
            cache: false,
            async: true,
            success: _0x161F1,
            error: function (_0x16413) {
                console[_$_22cb[2]](_$_22cb[137], _0x16413)
            }
        })
    });

    function _0x161F1() {
        if (typeof ($(_$_22cb[134])[_$_22cb[139]]) == _$_22cb[0]) {
            console[_$_22cb[141]](_$_22cb[140]);
            console[_$_22cb[141]](_$_22cb[142]);
            console[_$_22cb[141]](_$_22cb[143]);
            console[_$_22cb[141]](_$_22cb[144]);
            console[_$_22cb[141]](_$_22cb[145]);
            $[_$_22cb[123]]({
                url: BadApplePlayerDomain_Static + _$_22cb[146],
                dataType: _$_22cb[121],
                cache: true,
                async: false,
                scriptCharset: _$_22cb[122],
                error: function (_0x16413) {
                    console[_$_22cb[2]](_$_22cb[147])
                },
                success: function (_0x1698F) {
                    console[_$_22cb[141]](_$_22cb[148])
                }
            })
        }
        ;
        if (navigator[_$_22cb[150]][_$_22cb[149]](/(iPhone|iPod|Android|ios)/i) && !onphone) {
            $(_$_22cb[135])[_$_22cb[152]](_$_22cb[151])
        } else {
            _0x161A3();
            $[_$_22cb[123]]({
                url: BadApplePlayerDomain_Static + _$_22cb[153],
                dataType: _$_22cb[121],
                async: true,
                scriptCharset: _$_22cb[122],
                success: function (_0x1698F) {
                    if (typeof ($(_$_22cb[134])[_$_22cb[139]]) == _$_22cb[0]) {
                        console[_$_22cb[141]](_$_22cb[154]);
                        setTimeout(function () {
                            BadAppleTips[_$_22cb[156]](_$_22cb[155])
                        }, 5000)
                    }
                    ;
                    if (typeof (cnzz_protocol) != _$_22cb[0]) {
                        console[_$_22cb[141]](_$_22cb[157]);
                        console[_$_22cb[141]](_$_22cb[158])
                    }
                    ;$(_$_22cb[135])[_$_22cb[156]]()
                },
                error: function (_0x16413) {
                    console[_$_22cb[2]](_$_22cb[159], _0x16413)
                }
            })
        }
    }

    var $isAD = false;
    var _0x16329 = false;
    var _0x162DB = new Date();
    var _0x163C5 = (_0x162DB[_$_22cb[160]]() + 1) + _$_22cb[161] + _0x162DB[_$_22cb[162]]();

    function _0x161A3() {
        _0x16155();
        _0x16107();
        _0x1606B(false);
        _0x160B9()
    }

    function _0x160B9() {
        setTimeout(function () {
            if ($isAD && localStorage[_$_22cb[4]](_$_22cb[163]) != _0x163C5 && _0x16329 != true && (!$(_$_22cb[166])[_$_22cb[165]](_$_22cb[164]) || $(_$_22cb[166])[_$_22cb[168]](_$_22cb[167]) != _$_22cb[169] || $(_$_22cb[166])[_$_22cb[170]]() != 300 || $(_$_22cb[166])[_$_22cb[171]]() != 300 || $(_$_22cb[166])[_$_22cb[168]](_$_22cb[172]) != _$_22cb[173] || $(_$_22cb[166])[_$_22cb[168]](_$_22cb[174]) != _$_22cb[173] || $(_$_22cb[166])[_$_22cb[168]](_$_22cb[175]) == _$_22cb[176] || $(_$_22cb[166])[_$_22cb[168]](_$_22cb[175]) == _$_22cb[177])) {
                BadApplePlayer_AdUrl = _$_22cb[113];
                BadApplePlayer_AdImg = _$_22cb[178];
                $(_$_22cb[166])[_$_22cb[179]]();
                _0x1606B(true);
                $(_$_22cb[166])[_$_22cb[168]](_$_22cb[167], _$_22cb[169]);
                $(_$_22cb[166])[_$_22cb[170]](300);
                $(_$_22cb[166])[_$_22cb[171]](300);
                $(_$_22cb[166])[_$_22cb[168]](_$_22cb[172], _$_22cb[173]);
                $(_$_22cb[166])[_$_22cb[168]](_$_22cb[174], _$_22cb[173]);
                $(_$_22cb[166])[_$_22cb[168]](_$_22cb[175], _$_22cb[180])
            }
        }, 5000)
    }

    function _0x1606B(_0x16461) {
        $isAD = BadApplePlayer_IsAd;
        if ((BadApplePlayer_IsAd && !navigator[_$_22cb[150]][_$_22cb[149]](/(iPhone|iPod|Android|ios)/i)) || _0x16461) {
            if (localStorage[_$_22cb[4]](_$_22cb[163]) != _0x163C5) {
                var _0x164AF = _0x1623F[_$_22cb[182]](_$_22cb[183], BadApplePlayer_AdUrl)[_$_22cb[182]](_$_22cb[181], BadApplePlayer_AdImg);
                $(_$_22cb[135])[_$_22cb[133]](_0x164AF)
            }
            ;$(_$_22cb[186])[_$_22cb[185]](function () {
                _0x16329 = true;
                localStorage[_$_22cb[13]](_$_22cb[163], _0x163C5);
                $(_$_22cb[166])[_$_22cb[184]]()
            })
        } else {
            _0x16329 = true
        }
    }

    function _0x16107() {
        var _0x164FD = _0x164FD || [];
        (function () {
            var _0x1654B = document[_$_22cb[187]](_$_22cb[121]);
            _0x1654B[_$_22cb[188]] = _$_22cb[189];
            var _0x16599 = document[_$_22cb[190]](_$_22cb[121])[0];
            _0x16599[_$_22cb[192]][_$_22cb[191]](_0x1654B, _0x16599)
        })()
    }

    function _0x16155() {
        jQuery[_$_22cb[241]][_$_22cb[198]]({
            DragClose: function () {
                if (this[_$_22cb[193]]) {
                    for (var _0x165E7 in $(this)[_$_22cb[195]](_$_22cb[194])) {
                        _$_22cb[196] == _0x165E7 && $(this)[_$_22cb[195]](_$_22cb[194])[_$_22cb[196]][_$_22cb[197]]()
                    }
                }
            }, Drag: function () {
                var _0x165E7 = {
                    dragObj: $(this),
                    parentObj: $(document),
                    callback: null,
                    isPhone: !1,
                    lockX: !1,
                    lockY: !1,
                    maxWidth: 0,
                    maxHeight: 0
                };
                arguments[_$_22cb[193]] && (_0x165E7 = $[_$_22cb[198]]({}, _0x165E7, arguments[0]));
                _0x165E7[_$_22cb[196]][_$_22cb[195]](_$_22cb[194], _0x165E7);
                var _0x16683 = $(this)[0], _0x16635 = _0x165E7[_$_22cb[196]], _0x16461 = 0, _0x166D1 = 0,
                    _0x1671F = _0x165E7[_$_22cb[199]];
                _$_22cb[200] == $(this)[_$_22cb[168]](_$_22cb[201]) && $(this)[_$_22cb[168]](_$_22cb[201], _$_22cb[202]);
                var _0x1676D = 0, _0x167BB = 0;
                _0x165E7[_$_22cb[203]] ? (_0x16635[_$_22cb[204]] = function (_0x16809) {
                    _0x1676D = Math[_$_22cb[207]](_0x165E7[_$_22cb[205]][_$_22cb[171]](), _0x165E7[_$_22cb[206]]);
                    _0x167BB = Math[_$_22cb[207]](_0x165E7[_$_22cb[205]][_$_22cb[170]](), _0x165E7[_$_22cb[208]]);
                    _0x16809 = event[_$_22cb[209]][0];
                    _0x16461 = _0x16809[_$_22cb[210]] - _0x16683[_$_22cb[211]];
                    _0x166D1 = _0x16809[_$_22cb[212]] - _0x16683[_$_22cb[213]];
                    _0x16635[_$_22cb[216]](_$_22cb[214], _0x16635[_$_22cb[215]]);
                    _0x16635[_$_22cb[216]](_$_22cb[217], _0x16635[_$_22cb[218]]);
                    return !1
                }, _0x16635[_$_22cb[215]] = function (_0x16809) {
                    touch = event[_$_22cb[209]][0];
                    _0x16809 = touch[_$_22cb[210]] - _0x16461;
                    var _0x16857 = touch[_$_22cb[210]] - _0x166D1, _0x168A5 = _0x16683[_$_22cb[219]],
                        _0x168F3 = _0x16683[_$_22cb[220]];
                    0 > _0x16809 ? _0x16809 = 0 : _0x16809 + _0x168A5 > _0x1676D && (_0x16809 = _0x1676D - _0x168A5);
                    0 > _0x16857 ? _0x16857 = 0 : _0x16857 + _0x168F3 > _0x167BB && (_0x16857 = _0x167BB - _0x168F3);
                    _0x165E7[_$_22cb[221]] || (_0x16683[_$_22cb[223]][_$_22cb[222]] = _0x16857 + _$_22cb[224]);
                    _0x165E7[_$_22cb[225]] || (_0x16683[_$_22cb[223]][_$_22cb[226]] = _0x16809 + _$_22cb[224]);
                    _0x1671F && _0x1671F(_0x16635[0], _0x16809, _0x16857, _0x168A5, _0x168F3);
                    return !1
                }, _0x16635[_$_22cb[218]] = function (_0x165E7) {
                    _0x16635[_$_22cb[227]](_$_22cb[214]);
                    _0x16635[_$_22cb[227]](_$_22cb[217]);
                    _flag = !1;
                    _0x166D1 = _0x16461 = 0;
                    _0x1671F && _0x1671F(_0x16635[0]);
                    return !1
                }, _0x16635[_$_22cb[228]] = function () {
                    _0x16635[_$_22cb[216]](_$_22cb[229], _0x16635[_$_22cb[204]])
                }, _0x16635[_$_22cb[197]] = function () {
                    _0x16635[_$_22cb[227]](_$_22cb[229]);
                    _0x16635[_$_22cb[227]](_$_22cb[214]);
                    _0x16635[_$_22cb[227]](_$_22cb[217])
                }) : (_0x16635[_$_22cb[204]] = function (_0x16809) {
                    _0x1676D = Math[_$_22cb[207]](_0x165E7[_$_22cb[205]][_$_22cb[171]](), _0x165E7[_$_22cb[206]]);
                    _0x167BB = Math[_$_22cb[207]](_0x165E7[_$_22cb[205]][_$_22cb[170]](), _0x165E7[_$_22cb[208]]);
                    _0x16461 = _0x16809[_$_22cb[210]] - _0x16683[_$_22cb[211]];
                    _0x166D1 = _0x16809[_$_22cb[212]] - _0x16683[_$_22cb[213]];
                    $(document)[_$_22cb[216]](_$_22cb[230], _0x16635[_$_22cb[215]]);
                    $(document)[_$_22cb[216]](_$_22cb[231], _0x16635[_$_22cb[218]]);
                    _0x16635[0][_$_22cb[232]] ? _0x16635[0][_$_22cb[232]]() : window[_$_22cb[233]] && window[_$_22cb[233]](Event[_$_22cb[234]] | Event[_$_22cb[235]]);
                    _0x16809[_$_22cb[236]]();
                    _0x16809[_$_22cb[237]]()
                }, _0x16635[_$_22cb[215]] = function (_0x16809) {
                    var _0x16857 = _0x16809[_$_22cb[210]] - _0x16461, _0x168A5 = _0x16809[_$_22cb[212]] - _0x166D1,
                        _0x168F3 = _0x16683[_$_22cb[219]], _0x16941 = _0x16683[_$_22cb[220]];
                    0 > _0x16857 ? _0x16857 = 0 : _0x16857 + _0x168F3 > _0x1676D && (_0x16857 = _0x1676D - _0x168F3);
                    0 > _0x168A5 ? _0x168A5 = 0 : _0x168A5 + _0x16941 > _0x167BB && (_0x168A5 = _0x167BB - _0x16941);
                    _0x165E7[_$_22cb[221]] || (_0x16683[_$_22cb[223]][_$_22cb[222]] = _0x168A5 + _$_22cb[224]);
                    _0x165E7[_$_22cb[225]] || (_0x16683[_$_22cb[223]][_$_22cb[226]] = _0x16857 + _$_22cb[224]);
                    _0x1671F && _0x1671F(_0x16635[0], _0x16857, _0x168A5, _0x168F3, _0x16941);
                    _0x16809[_$_22cb[236]]();
                    _0x16809[_$_22cb[237]]()
                }, _0x16635[_$_22cb[218]] = function (_0x165E7) {
                    _0x16635[0][_$_22cb[238]] ? _0x16635[0][_$_22cb[238]]() : window[_$_22cb[239]] && window[_$_22cb[239]](Event[_$_22cb[234]] | Event[_$_22cb[235]]);
                    $(document)[_$_22cb[227]](_$_22cb[230]);
                    $(document)[_$_22cb[227]](_$_22cb[231]);
                    _0x166D1 = _0x16461 = 0;
                    _0x1671F && _0x1671F(_0x16635[0]);
                    _0x165E7[_$_22cb[236]]();
                    _0x165E7[_$_22cb[237]]()
                }, _0x16635[_$_22cb[228]] = function () {
                    _0x16635[_$_22cb[216]](_$_22cb[240], _0x16635[_$_22cb[204]])
                }, _0x16635[_$_22cb[197]] = function () {
                    _0x16635[_$_22cb[227]](_$_22cb[240]);
                    $(document)[_$_22cb[227]](_$_22cb[230]);
                    $(document)[_$_22cb[227]](_$_22cb[231])
                });
                _0x16635[_$_22cb[228]]()
            }
        })
    }
})(BadApplePlayerIsLoad, jQuery)
