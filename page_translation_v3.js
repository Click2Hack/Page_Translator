// page translation script by krish Gupta t.me/@kt777mia

(function () {
    var ID = 'google_translate_element';

    // 🔁 OFF mode
    if (window.__gt_enabled) {
        var el = document.getElementById(ID);
        if (el) el.remove();

        delete window.googleTranslateElementInit;
        window.__gt_enabled = false;

        console.log('Google Translate OFF');
        return;
    }

    // 🔛 ON mode
    window.__gt_enabled = true;

    var div = document.createElement('div');
    div.id = ID;
    div.style.cssText =
        'z-index:9999999; position:fixed; top:10px; left:10px; background:#fff;';
    document.body.prepend(div);

    window.googleTranslateElementInit = function () {
        new google.translate.TranslateElement(
            { layout: google.translate.TranslateElement.InlineLayout.VERTICAL },
            ID
        );
    };

    var s = document.createElement('script');
    s.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(s);

    console.log('Google Translate ON');
})();
