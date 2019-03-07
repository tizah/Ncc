var twitterShare = document.querySelector('[data-js="twitter-share"]');

twitterShare.onclick = function (e) {
    e.preventDefault();
    var twitterWindow = window.open('https://twitter.com/share?url=' + document.URL, 'twitter-popup', 'height=350,width=600');
    if (twitterWindow.focus) { twitterWindow.focus(); }
    return false;
};

var facebookShare = document.querySelector('[data-js="facebook-share"]');

facebookShare.onclick = function (e) {
    e.preventDefault();
    var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?_rdc=1&_rdr' + document.URL, 'facebook-popup', 'height=350,width=600');
    if (facebookWindow.focus) { facebookWindow.focus(); }
    return false;
};


var instagramShare = document.querySelector('[data-js="instagram-share"]');

instagramShare.onclick = function (e) {
    e.preventDefault();
    var instagramWindow = window.open('https://www.instagram.com/', 'instagram-popup', 'height=350,width=600');
    if (instagramWindow.focus) { instagramWindow.focus(); }
    return false;
};