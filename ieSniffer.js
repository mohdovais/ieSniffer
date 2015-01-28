/*
add ie class in body
 */
(function () {
    var v = 3,
    div = document.createElement('div'),
    all = div.getElementsByTagName('i'),
    browser,
    isIE;
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]);
    v = v > 4 ? v : document.documentMode;

    if (v) {
        browser = ' ie ie' + v;
        isIE = {
            "version" : v
        }
    } else {
        browser = ' notie';
        isIE = false;
    }
    document.documentElement.className += browser;

    window.ie = isIE;
}());
