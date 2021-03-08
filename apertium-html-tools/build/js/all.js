'use strict';
/* eslint-disable */
// jquery.jsonp 2.4.0 (c)2012 Julian Aubourg | MIT License
// https://github.com/jaubourg/jquery-jsonp
;(function(e){function t(){}function n(e){C=[e]}function r(e,t,n){return e&&e.apply&&e.apply(t.context||t,n)}function i(e){return/\?/.test(e)?"&":"?"}function O(c){function Y(e){z++||(W(),j&&(T[I]={s:[e]}),D&&(e=D.apply(c,[e])),r(O,c,[e,b,c]),r(_,c,[c,b]))}function Z(e){z++||(W(),j&&e!=w&&(T[I]=e),r(M,c,[c,e]),r(_,c,[c,e]))}c=e.extend({},k,c);var O=c.success,M=c.error,_=c.complete,D=c.dataFilter,P=c.callbackParameter,H=c.callback,B=c.cache,j=c.pageCache,F=c.charset,I=c.url,q=c.data,R=c.timeout,U,z=0,W=t,X,V,J,K,Q,G;return S&&S(function(e){e.done(O).fail(M),O=e.resolve,M=e.reject}).promise(c),c.abort=function(){!(z++)&&W()},r(c.beforeSend,c,[c])===!1||z?c:(I=I||u,q=q?typeof q=="string"?q:e.param(q,c.traditional):u,I+=q?i(I)+q:u,P&&(I+=i(I)+encodeURIComponent(P)+"=?"),!B&&!j&&(I+=i(I)+"_"+(new Date).getTime()+"="),I=I.replace(/=\?(&|$)/,"="+H+"$1"),j&&(U=T[I])?U.s?Y(U.s[0]):Z(U):(E[H]=n,K=e(y)[0],K.id=l+N++,F&&(K[o]=F),L&&L.version()<11.6?(Q=e(y)[0]).text="document.getElementById('"+K.id+"')."+p+"()":K[s]=s,A&&(K.htmlFor=K.id,K.event=h),K[d]=K[p]=K[v]=function(e){if(!K[m]||!/i/.test(K[m])){try{K[h]&&K[h]()}catch(t){}e=C,C=0,e?Y(e[0]):Z(a)}},K.src=I,W=function(e){G&&clearTimeout(G),K[v]=K[d]=K[p]=null,x[g](K),Q&&x[g](Q)},x[f](K,J=x.firstChild),Q&&x[f](Q,J),G=R>0&&setTimeout(function(){Z(w)},R)),c)}var s="async",o="charset",u="",a="error",f="insertBefore",l="_jqjsp",c="on",h=c+"click",p=c+a,d=c+"load",v=c+"readystatechange",m="readyState",g="removeChild",y="<script>",b="success",w="timeout",E=window,S=e.Deferred,x=e("head")[0]||document.documentElement,T={},N=0,C,k={callback:l,url:location.href},L=E.opera,A=!!e("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;O.setup=function(t){e.extend(k,t)},e.jsonp=O})(jQuery);
var config = {
    "HTML_URL": "https://www.apertium.org",
    "APY_URL": "https://www.apertium.org/apy",
    "SUBTITLE": null,
    "SUBTITLE_COLOR": null,
    "ALLOWED_LANGS": [
        "br",
        "fr"
    ],
    "ALLOWED_VARIANTS": null,
    "ALLOWED_PAIRS": null,
    "ENABLED_MODES": [
        "translation"
    ],
    "DEFAULT_MODE": "translation",
    "TRANSLATION_CHAINING": false,
    "DEFAULT_LOCALE": "eng",
    "SHOW_NAVBAR": false,
    "PIWIK_SITEID": null,
    "PIWIK_URL": null,
    "LIST_REQUEST_CACHE_EXPIRY": 24,
    "LANGUAGE_NAME_CACHE_EXPIRY": 24,
    "LOCALIZATION_CACHE_EXPIRY": 24,
    "AVAILABLE_LOCALES_CACHE_EXPIRY": 24,
    "REPLACEMENTS": {
        "maintainer": "<a href='http://wiki.apertium.org/wiki/Apertium' target='_blank' rel='noopener'>Apertium</a>"
    },
    "LANGNAMES": null,
    "LOCALES": null,
    "PAIRS": null,
    "GENERATORS": null,
    "ANALYZERS": null,
    "TAGGERS": null
};
config.LOCALES = {
	"ara": "العَرَبِيَّة",
	"arg": "aragonés",
	"ava": "магӏарул мацӏ",
	"cat": "català",
	"deu": "deutsch",
	"eng": "English",
	"eus": "euskara",
	"fin": "suomi",
	"fra": "français",
	"frp": "arpetan",
	"glg": "galego",
	"heb": "עברית",
	"kaa": "qaraqalpaqsha",
	"kaz": "қазақша",
	"kir": "кыргызча",
	"mar": "मराठी",
	"nno": "nynorsk",
	"nob": "norsk bokmål",
	"oci": "occitan",
	"por": "português",
	"ron": "românǎ",
	"rus": "русский",
	"sme": "davvisámegiella",
	"spa": "español",
	"srd": "sardu",
	"swe": "svenska",
	"szl": "ślōnskŏ mŏwa",
	"tat": "татарча",
	"tur": "Türkçe",
	"uig": "ئۇيغۇرچە",
	"uzb": "oʻzbekcha",
	"zho": "汉语"
};
config.PAIRS = {"responseData": [{"sourceLanguage": "slv", "targetLanguage": "bos"}, {"sourceLanguage": "slv", "targetLanguage": "hrv"}, {"sourceLanguage": "slv", "targetLanguage": "srp"}, {"sourceLanguage": "afr", "targetLanguage": "nld"}, {"sourceLanguage": "arg", "targetLanguage": "spa"}, {"sourceLanguage": "ara", "targetLanguage": "mlt"}, {"sourceLanguage": "ara", "targetLanguage": "mlt_translit"}, {"sourceLanguage": "arg", "targetLanguage": "cat"}, {"sourceLanguage": "ast", "targetLanguage": "spa"}, {"sourceLanguage": "bel", "targetLanguage": "rus"}, {"sourceLanguage": "bul", "targetLanguage": "mkd"}, {"sourceLanguage": "bre", "targetLanguage": "fra"}, {"sourceLanguage": "cat", "targetLanguage": "epo"}, {"sourceLanguage": "cat", "targetLanguage": "oci"}, {"sourceLanguage": "cat", "targetLanguage": "oci_aran"}, {"sourceLanguage": "cat", "targetLanguage": "arg"}, {"sourceLanguage": "cat", "targetLanguage": "eng"}, {"sourceLanguage": "cat", "targetLanguage": "eng_US"}, {"sourceLanguage": "cat", "targetLanguage": "ita"}, {"sourceLanguage": "cat", "targetLanguage": "por"}, {"sourceLanguage": "cat", "targetLanguage": "por_BR"}, {"sourceLanguage": "cat", "targetLanguage": "por_PTpre1990"}, {"sourceLanguage": "cat", "targetLanguage": "por_br"}, {"sourceLanguage": "cat", "targetLanguage": "ron"}, {"sourceLanguage": "cat", "targetLanguage": "spa"}, {"sourceLanguage": "cat", "targetLanguage": "srd"}, {"sourceLanguage": "crh", "targetLanguage": "tur"}, {"sourceLanguage": "cym", "targetLanguage": "eng"}, {"sourceLanguage": "dan", "targetLanguage": "nno"}, {"sourceLanguage": "dan", "targetLanguage": "nob"}, {"sourceLanguage": "dan", "targetLanguage": "swe"}, {"sourceLanguage": "eng", "targetLanguage": "epo"}, {"sourceLanguage": "eng", "targetLanguage": "spa"}, {"sourceLanguage": "eng", "targetLanguage": "glg"}, {"sourceLanguage": "eng", "targetLanguage": "cat"}, {"sourceLanguage": "eng", "targetLanguage": "cat_iec2017"}, {"sourceLanguage": "eng", "targetLanguage": "cat_valencia"}, {"sourceLanguage": "epo", "targetLanguage": "eng"}, {"sourceLanguage": "spa", "targetLanguage": "arg"}, {"sourceLanguage": "spa", "targetLanguage": "ast"}, {"sourceLanguage": "spa", "targetLanguage": "eng"}, {"sourceLanguage": "spa", "targetLanguage": "eng_US"}, {"sourceLanguage": "spa", "targetLanguage": "epo"}, {"sourceLanguage": "spa", "targetLanguage": "fra"}, {"sourceLanguage": "spa", "targetLanguage": "glg"}, {"sourceLanguage": "spa", "targetLanguage": "oci"}, {"sourceLanguage": "spa", "targetLanguage": "oci_aran"}, {"sourceLanguage": "spa", "targetLanguage": "por"}, {"sourceLanguage": "spa", "targetLanguage": "por_BR"}, {"sourceLanguage": "eus", "targetLanguage": "eng"}, {"sourceLanguage": "eus", "targetLanguage": "spa"}, {"sourceLanguage": "fra", "targetLanguage": "epo"}, {"sourceLanguage": "fra", "targetLanguage": "spa"}, {"sourceLanguage": "fra", "targetLanguage": "oci"}, {"sourceLanguage": "glg", "targetLanguage": "eng"}, {"sourceLanguage": "glg", "targetLanguage": "spa"}, {"sourceLanguage": "glg", "targetLanguage": "por"}, {"sourceLanguage": "hbs", "targetLanguage": "eng"}, {"sourceLanguage": "hbs", "targetLanguage": "slv"}, {"sourceLanguage": "hin", "targetLanguage": "urd"}, {"sourceLanguage": "ind", "targetLanguage": "zlm"}, {"sourceLanguage": "isl", "targetLanguage": "eng"}, {"sourceLanguage": "isl", "targetLanguage": "swe"}, {"sourceLanguage": "ita", "targetLanguage": "cat"}, {"sourceLanguage": "ita", "targetLanguage": "spa"}, {"sourceLanguage": "ita", "targetLanguage": "srd"}, {"sourceLanguage": "kaz", "targetLanguage": "tat"}, {"sourceLanguage": "mkd", "targetLanguage": "bul"}, {"sourceLanguage": "mkd", "targetLanguage": "eng"}, {"sourceLanguage": "mlt", "targetLanguage": "ara"}, {"sourceLanguage": "nld", "targetLanguage": "afr"}, {"sourceLanguage": "nno", "targetLanguage": "dan"}, {"sourceLanguage": "nno", "targetLanguage": "nno_e"}, {"sourceLanguage": "nno", "targetLanguage": "nob"}, {"sourceLanguage": "nno", "targetLanguage": "swe"}, {"sourceLanguage": "nno_e", "targetLanguage": "nno"}, {"sourceLanguage": "nob", "targetLanguage": "dan"}, {"sourceLanguage": "nob", "targetLanguage": "nno"}, {"sourceLanguage": "nob", "targetLanguage": "nno_e"}, {"sourceLanguage": "nob", "targetLanguage": "swe"}, {"sourceLanguage": "oci", "targetLanguage": "cat"}, {"sourceLanguage": "oci", "targetLanguage": "spa"}, {"sourceLanguage": "oci_aran", "targetLanguage": "cat"}, {"sourceLanguage": "oci_aran", "targetLanguage": "spa"}, {"sourceLanguage": "pol", "targetLanguage": "szl"}, {"sourceLanguage": "por", "targetLanguage": "cat"}, {"sourceLanguage": "por", "targetLanguage": "spa"}, {"sourceLanguage": "por", "targetLanguage": "glg"}, {"sourceLanguage": "ron", "targetLanguage": "spa"}, {"sourceLanguage": "ron", "targetLanguage": "cat"}, {"sourceLanguage": "ron", "targetLanguage": "cat_iec2017"}, {"sourceLanguage": "rus", "targetLanguage": "bel"}, {"sourceLanguage": "rus", "targetLanguage": "ukr"}, {"sourceLanguage": "slv", "targetLanguage": "hbs_BS"}, {"sourceLanguage": "slv", "targetLanguage": "hbs_HR"}, {"sourceLanguage": "slv", "targetLanguage": "hbs_SR"}, {"sourceLanguage": "sme", "targetLanguage": "nob"}, {"sourceLanguage": "spa", "targetLanguage": "cat"}, {"sourceLanguage": "spa", "targetLanguage": "cat_iec2017"}, {"sourceLanguage": "spa", "targetLanguage": "cat_valencia"}, {"sourceLanguage": "spa", "targetLanguage": "ita"}, {"sourceLanguage": "swe", "targetLanguage": "dan"}, {"sourceLanguage": "swe", "targetLanguage": "isl"}, {"sourceLanguage": "swe", "targetLanguage": "nno"}, {"sourceLanguage": "swe", "targetLanguage": "nob"}, {"sourceLanguage": "szl", "targetLanguage": "pol"}, {"sourceLanguage": "tat", "targetLanguage": "kaz"}, {"sourceLanguage": "tur", "targetLanguage": "crh"}, {"sourceLanguage": "urd", "targetLanguage": "hin"}, {"sourceLanguage": "zlm", "targetLanguage": "ind"}, {"sourceLanguage": "fra", "targetLanguage": "cat"}, {"sourceLanguage": "cat", "targetLanguage": "fra"}, {"sourceLanguage": "fra", "targetLanguage": "frp"}, {"sourceLanguage": "frp", "targetLanguage": "fra"}], "responseDetails": null, "responseStatus": 200};
config.GENERATORS = {"afr": "afr-gener", "bel": "bel-gener", "crh": "crh-gener", "dan": "dan-gener", "eng": "eng-gener", "ind": "ind-gener", "ita": "ita-gener", "nld": "nld-gener", "nno": "nno-gener", "nob": "nob-gener", "oci": "oci-gener", "por": "por-gener", "ron": "ron-gener", "rus": "rus-gener", "spa": "spa-gener", "srd": "srd-gener", "swe": "swe-gener", "tur": "tur-gener", "ukr": "ukr-gener", "zlm": "zlm-gener", "cat": "cat-gener", "fra": "fra-gener", "frp": "frp-gener"};
config.ANALYZERS = {"afr": "afr-morph", "bel": "bel-morph", "crh": "crh-morph", "dan": "dan-morph", "eng": "eng-morph", "ind": "ind-morph", "ita": "ita-morph", "nld": "nld-morph", "nno": "nno-morph", "nob": "nob-morph", "oci": "oci-morph", "por": "por-morph", "ron": "ron-morph", "rus": "rus-morph", "spa": "spa-morph", "srd": "srd-morph", "swe": "swe-morph", "tur": "tur-morph", "ukr": "ukr-morph", "zlm": "zlm-morph", "cat": "cat-morph", "fra": "fra-morph", "frp": "frp-morph"};
config.TAGGERS = {"afr": "afr-tagger", "bel": "bel-tagger", "crh": "crh-tagger", "eng": "eng-tagger", "ind": "ind-tagger", "ita": "ita-tagger", "nld": "nld-tagger", "nno": "nno-tagger", "nob": "nob-tagger", "oci": "oci-tagger", "por": "por-tagger", "ron": "ron-tagger", "rus": "rus-tagger", "spa": "spa-tagger", "srd": "srd-tagger", "swe": "swe-tagger", "tur": "tur-tagger", "ukr": "ukr-tagger", "zlm": "zlm-tagger", "cat": "cat-tagger", "fra": "fra-tagger", "frp": "frp-tagger"};
// @flow

/* exported ajaxComplete, ajaxSend, allowedLang, apyRequestTimeout, callApy, debounce, filterLangList, filterLangPairList, getURLParam,
    isSubset, isURL, modeEnabled, onlyUnique, resizeFooter, sendEvent, synchronizeTextareaHeights, removeSoftHyphens, parentLang,
    isVariant */
/* exported ENTER_KEY_CODE, HTTP_BAD_REQUEST_CODE, HTTP_OK_CODE, SPACE_KEY_CODE, XHR_DONE, XHR_LOADING */

/* global _paq, config */

var SPACE_KEY_CODE = 32, ENTER_KEY_CODE = 13,
    HTTP_OK_CODE = 200, HTTP_BAD_REQUEST_CODE = 400,
    XHR_LOADING = 3, XHR_DONE = 4;

var TEXTAREA_AUTO_RESIZE_MINIMUM_WIDTH = 768,
    APY_REQUEST_URL_THRESHOLD_LENGTH = 2000, // maintain 48 characters buffer for generated parameters
    DEFAULT_DEBOUNCE_DELAY = 100;

var INSTALLATION_NOTIFICATION_REQUESTS_BUFFER_LENGTH = 5,
    INSTALLATION_NOTIFICATION_INDIVIDUAL_DURATION_THRESHOLD = 4000,
    INSTALLATION_NOTIFICATION_CUMULATIVE_DURATION_THRESHOLD = 3000,
    INSTALLATION_NOTIFICATION_DURATION = 10000;

var apyRequestTimeout /*: TimeoutID */, apyRequestStartTime/*: ?number */;
var installationNotificationShown = false, lastNAPyRequestDurations = [];

// These polyfills are placed here since all versions of IE require them and IE10+
// does not support conditional comments. They could be moved to a separate file.

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
/* eslint-disable */
if (typeof Object.assign != 'function') {
  // $FlowFixMe
  Object.assign = function(target /*: ?{} */, varArgs /*: {}[] */) { // .length of function is 2
    'use strict';
    if (!target) { // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource /*: ?{} */ = arguments[index];

      if (nextSource) { // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#Polyfill
if (!String.prototype.startsWith) {
    // $FlowFixMe
	String.prototype.startsWith = function(search /*: string */, pos /*: ?number */) {
		return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
	};
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#Polyfill
if (!String.prototype.endsWith) {
    // $FlowFixMe
	String.prototype.endsWith = function(search /*: string */, this_len /*: number|undefined */) {
		if (this_len === undefined || this_len > this.length) {
			this_len = this.length;
		}
        return this.substring(this_len - search.length, this_len) === search;
	};
}
/* eslint-enable */

function debounce(func /*: any */, delay /*: ?number */) { // eslint-disable-line no-unused-vars
    var clock = null;
    return function () {
        var context = this, args = arguments;
        if(clock) {
            clearTimeout(clock);
        }
        clock = setTimeout(function () {
            func.apply(context, args);
        }, delay || DEFAULT_DEBOUNCE_DELAY);
    };
}

function ajaxSend() {
    $('#loadingIndicator').show();
}

function ajaxComplete() {
    $('#loadingIndicator').hide();
    clearTimeout(apyRequestTimeout);
    if(apyRequestStartTime) {
        handleAPyRequestCompletion(Date.now() - apyRequestStartTime);
        apyRequestStartTime = null;
    }
}

/* eslint-disable id-blacklist */
function sendEvent/*:: <T> */(category /*: string */, action /*: string */, label /*: ?string */, value /*: T */) {
    if(config.PIWIK_SITEID && config.PIWIK_URL && _paq) {
        var args = [category, action];
        if(label && value) {
            args = args.concat([label, value]);
        }
        else if(label) {
            args.push(label);
        }

        _paq.push(['trackEvent'].concat(args));
    }
}
/* eslint-enable id-blacklist */

function modeEnabled(mode /*: string */) {
    return !config.ENABLED_MODES || config.ENABLED_MODES.indexOf(mode) !== -1;
}

function removeSoftHyphens(text /*: string */) {
    return text.replace(/\u00AD/g, '');
}

function resizeFooter() {
    var footerHeight = $('#footer').height();
    $('#push').css('height', footerHeight);
    $('#wrap').css('margin-bottom', -footerHeight);
}

function parentLang(code /*: string */) {
    return code.split('_')[0];
}

function isVariant(code /*: string */) {
    return code.indexOf('_') !== -1;
}

function allowedLang(code /*: string */) {
    if(isVariant(code)) {
        return allowedLang(parentLang(code)) &&
            (!config.ALLOWED_VARIANTS || config.ALLOWED_VARIANTS.indexOf(code.split('_')[1]) !== -1);
    }
    else {
        return !config.ALLOWED_LANGS || config.ALLOWED_LANGS.indexOf(code) !== -1;
    }
}

function filterLangList(langs /*: string[] */, _filterFn /*: ?(lang: string) => boolean */) {
    if(config.ALLOWED_LANGS || config.ALLOWED_VARIANTS) {
        var filterFn = _filterFn;
        if(!filterFn) {
            filterFn = function (code /*: string */) {
                return allowedLang(code) ||
                    ((code.indexOf('-') !== -1 && (allowedLang(code.split('-')[0]) || allowedLang(code.split('-')[1]))));
            };
        }

        return (langs.filter(filterFn) /*: string[] */);
    }
    else {
        return langs;
    }
}

function filterLangPairList(langPairs /*: [string, string][] */, filterFn /*: [string, string] => boolean */) {
    if(config.ALLOWED_LANGS || config.ALLOWED_VARIANTS) {
        return langPairs.filter(filterFn);
    }
    else {
        return langPairs;
    }
}

function getURLParam(name /*: string */) {
    var escapedName = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regexS = '[\\?&]' + escapedName + '=([^&#]*)';
    var regex = new RegExp(regexS);
    var results /*: ?string[] */ = regex.exec(window.location.href);
    return results ? results[1] : '';
}

/* eslint-disable */
// From: http://stackoverflow.com/a/19696443/1266600 (source: AOSP)
function isURL(text /*: string */) {
    var re = /^((?:(http|https):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\s*$)/i;
    return text.search(re) === 0;
}
/* eslint-enable */

// eslint-disable-next-line id-blacklist
function onlyUnique/*:: <T> */(value /*: T */, index /*: number */, self /*: T[] */) {
    return self.indexOf(value) === index;
}

function isSubset/*:: <T> */(subset /*: T[] */, superset /*: T[] */) {
    // eslint-disable-next-line id-blacklist, id-length
    return subset.every(function (val /*: T */) {
        return superset.indexOf(val) >= 0;
    });
}

function synchronizeTextareaHeights() {
    if($(window).width() < TEXTAREA_AUTO_RESIZE_MINIMUM_WIDTH) {
        return;
    }

    $('#originalText').css({
        'overflow-y': 'hidden',
        'height': 'auto'
    });
    var originalTextScrollHeight = $('#originalText')[0].scrollHeight;
    $('#originalText').css('height', originalTextScrollHeight + 'px');
    $('#translatedText').css('height', originalTextScrollHeight + 'px');
}

function callApy(options /*: {} */, endpoint /*: string */, useAjax /*: ?boolean */) {
    var requestOptions /*: any */ = Object.assign({
        url: config.APY_URL + endpoint,
        beforeSend: ajaxSend,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    }, options);

    var requestUrl /*: string */ = window.location.protocol + window.location.hostname +
        window.location.pathname + '?' + $.param(requestOptions.data);

    requestOptions.type = requestUrl.length > APY_REQUEST_URL_THRESHOLD_LENGTH ? 'POST' : 'GET';

    apyRequestStartTime = Date.now();
    apyRequestTimeout = setTimeout(function () {
        displayInstallationNotification();
        clearTimeout(apyRequestTimeout);
    }, INSTALLATION_NOTIFICATION_INDIVIDUAL_DURATION_THRESHOLD);

    if(useAjax || requestUrl.length > APY_REQUEST_URL_THRESHOLD_LENGTH) {
        return $.ajax(requestOptions);
    }

    return $.jsonp(requestOptions);
}

function handleAPyRequestCompletion(requestDuration) {
    var cumulativeAPyRequestDuration = 0;

    if(lastNAPyRequestDurations.length === INSTALLATION_NOTIFICATION_REQUESTS_BUFFER_LENGTH) {
        cumulativeAPyRequestDuration = lastNAPyRequestDurations.reduce(
            function (totalDuration, duration) {
                return totalDuration + duration;
            });

        lastNAPyRequestDurations.shift();
        lastNAPyRequestDurations.push(requestDuration);
    }
    else {
        lastNAPyRequestDurations.push(requestDuration);
    }

    var averageRequestDuration = cumulativeAPyRequestDuration / lastNAPyRequestDurations.length;

    if(requestDuration > INSTALLATION_NOTIFICATION_INDIVIDUAL_DURATION_THRESHOLD ||
        averageRequestDuration > INSTALLATION_NOTIFICATION_CUMULATIVE_DURATION_THRESHOLD) {
        displayInstallationNotification();
    }
}

function displayInstallationNotification() {
    if(installationNotificationShown) {
        return;
    }
    installationNotificationShown = true;

    $('#installationNotice').fadeIn('slow').show()
        .delay(INSTALLATION_NOTIFICATION_DURATION)
        .fadeOut('slow', hideInstallationNotification);

    $('#installationNotice').mouseover(function () {
        $(this).stop(true);
    }).mouseout(function () {
        $(this).delay(INSTALLATION_NOTIFICATION_DURATION)
            .fadeOut('slow', hideInstallationNotification);
    });

    function hideInstallationNotification() {
        $('#installationNotice').hide();
    }
}

/*:: export {ajaxComplete, ajaxSend, allowedLang, apyRequestTimeout, callApy, debounce, filterLangList, filterLangPairList, getURLParam,
    isSubset, isURL, modeEnabled, onlyUnique, resizeFooter, sendEvent, synchronizeTextareaHeights, removeSoftHyphens, parentLang,
    isVariant} */
/*:: export {ENTER_KEY_CODE, HTTP_BAD_REQUEST_CODE, HTTP_OK_CODE, SPACE_KEY_CODE, XHR_DONE, XHR_LOADING} */

/*:: import {_paq} from "./init.js" */
// @flow

/* exported _paq */

/* global config, persistChoices, iso639Codes, iso639CodesInverse, populateTranslationList, showTranslateWebpageInterface */
/* global ajaxSend, ajaxComplete, debounce, resizeFooter, synchronizeTextareaHeights */

var BACK_TO_TOP_BUTTON_ACTIVATION_HEIGHT = 300;

$(document).ajaxSend(ajaxSend);
$(document).ajaxComplete(ajaxComplete);
$(document).ajaxError(ajaxComplete);

$.jsonp.setup({
    callbackParameter: 'callback'
});

$(document).ready(function () {
    if(config.SUBTITLE) {
        var subtitle = config.SUBTITLE,
            subtitleColor = config.SUBTITLE_COLOR;
        $('.apertiumSubLogo')
            .text(subtitle)
            .show();
        if(subtitleColor) {
            $('.apertiumSubLogo').css('color', subtitleColor);
        }
    }
    else {
        $('.apertiumSubLogo').hide();
    }

    if(config.SHOW_NAVBAR) {
        if(config.ENABLED_MODES) {
            $.each(config.ENABLED_MODES, function () {
                $('.nav a[data-mode=' + this + ']').show();
            });
        }
        else {
            $('.nav a').show();
        }
    }
    else {
        $('.navbarDefault .navbar-toggler').hide();
        $('.navbarDefault .nav').hide();
    }

    var hash /*: string */ = parent.location.hash;

    try {
        if(hash === '#webpageTranslation') {
            hash = '#translation';
            showTranslateWebpageInterface();
        }
        else if(!hash || !$('.modeContainer' + hash).length) {
            hash = '#' + config.DEFAULT_MODE;
            parent.location.hash = hash;
        }
    }
    catch(e) {
        console.error('Invalid hash: ' + e);
        hash = '#' + config.DEFAULT_MODE;
        parent.location.hash = hash;
    }

    $('.modeContainer' + hash).addClass('active show');
    // FlowCheck doesn't recognise Bootstrap's `tab` function
    // $FlowFixMe
    $('.navbarDefault .nav li > a[data-mode=' + hash.substring(1) + ']').tab('show');

    resizeFooter();

    $(window)
        .on('hashchange', function () {
            var mode /*: string */ = parent.location.hash.substring(1);
            persistChoices(mode);
        })
        .resize(debounce(function () {
            populateTranslationList();
            resizeFooter();
        }));

    if(config.ALLOWED_LANGS) {
        var withIso = [];
        $.each(config.ALLOWED_LANGS, function () {
            if(iso639Codes[this]) {
                withIso.push(iso639Codes[this]);
            }
            if(iso639CodesInverse[this]) {
                withIso.push(iso639CodesInverse[this]);
            }
        });
        Array.prototype.push.apply(config.ALLOWED_LANGS, withIso);
    }

    $('a[data-mode][data-toggle="tab"]').on('shown.bs.tab', function (ev) {
        synchronizeTextareaHeights();
        var target/*: HTMLLinkElement */ = (ev.target /*: any */);
        parent.location.hash = '#' + target.dataset.mode;
    });

    $('form').submit(function () {
        return false;
    });

    $('.modal').on('show.bs.modal', function () {
        $('a[data-target="#' + $(this).attr('id') + '"]').parents('li').addClass('active');
        $.each($(this).find('img[data-src]'), function () {
            $(this).attr('src', $(this).attr('data-src'));
        });
    });

    $('.modal').on('hide.bs.modal', function () {
        $('a[data-target="#' + $(this).attr('id') + '"]').parents('li').removeClass('active');
    });

    $(window).scroll(function () {
        $('#backToTop').toggleClass('hide', $(window).scrollTop() < BACK_TO_TOP_BUTTON_ACTIVATION_HEIGHT);
    });

    $('#backToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 'fast');
        return false;
    });
});

if(config.PIWIK_SITEID && config.PIWIK_URL) {
    var url = config.PIWIK_URL;
    if(document.location.protocol === 'https:') {
        url = url.replace(/^(http(s)?)?:/, 'https:');
    }
    // but if we're on plain http, we keep whatever was in the config
    if(url.charAt(url.length - 1) !== '/') {
        url += '/';
    }

    /* eslint-disable */
    var _paq = _paq || [];
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
        var u=url;
        _paq = _paq || [];
        _paq.push(['setTrackerUrl', u+'piwik.php']);
        _paq.push(['setSiteId', config.PIWIK_SITEID]);
        var d=document,
            g=d.createElement('script'),
            s=d.getElementsByTagName('script')[0];
        g.type='text/javascript';
        g.defer=true;
        g.async=true;
        g.src=u+'piwik.js';
        if(s.parentNode) {
            s.parentNode.insertBefore(g,s);
        }
    })();
    /* eslint-enable */
}

/*:: export {_paq} */

/*:: import {persistChoices} from "./persistence.js" */
/*:: import {iso639Codes, iso639CodesInverse} from "./localization.js" */
/*:: import {populateTranslationList, showTranslateWebpageInterface} from "./translator.js" */
/*:: import {ajaxSend, ajaxComplete, debounce, resizeFooter, synchronizeTextareaHeights} from "./util.js" */
// @flow

/* exported Store */

/* eslint-disable id-blacklist */
/* eslint id-length: ["error", {
    "exceptions": ["get", "set", "key", "e", "has"]
}] */

// eslint-disable-next-line func-style
var Store = function (prefix /*: string */) /*: void */ {
    this.prefix = prefix;
};

Store.prototype.get = function /*:: <T> */ (key /*: string */, fallback /*: T */) /*: T */ {
    if(!this.able()) {
        return fallback;
    }

    var fromStorage /*: string */ = window.localStorage[(this.prefix /*: string */) + key];
    if(fromStorage === undefined || fromStorage === 'undefined') {
        return fallback;
    }
    else {
        try {
            var parsed = JSON.parse(fromStorage);
            if(parsed) {
                return parsed;
            }
        }
        catch(e) {
            console.error(key, fallback, e);
        }
        return fallback;
    }
};

Store.prototype.set = function /*:: <T> */ (key /*: string */, value /*: T */) /*: void */ {
    if(this.able()) {
        window.localStorage[(this.prefix /*: string */) + key] = JSON.stringify(value);
    }
};

Store.prototype.clear = function () /*: void */ {
    if(this.able()) {
        for(var key in window.localStorage) {
            if(key.startsWith((this.prefix /*: string */))) {
                window.localStorage.removeItem(key);
            }
        }
    }
};

Store.prototype.has = function (key /*: string */) /*: boolean */ {
    return this.able() && ((this.prefix /*: string */) + key) in window.localStorage;
};

Store.prototype.able = function () /*: boolean */ {
    try {
        return Boolean(window.localStorage);
    }
    catch(e) {
        if(e.name === 'SecurityError') {
            // Firefox and Chrome disable LocalStorage simultaneously with cookies and
            // throw a SecurityError on an attempt to use it.
            return false;
        }
        else {
            throw e;
        }
    }
};

/*:: export {Store} */
// @flow

/* exported persistChoices, restoreChoices, cache, readCache */

/* global config, Store, getURLParam, iso639CodesInverse, pairs, refreshLangList populateSecondaryAnalyzerList,
    populateSecondaryGeneratorList, isSubset, handleNewCurrentLang */
/* global srcLangs, dstLangs, recentSrcLangs, recentDstLangs, setCurDstLang, setCurSrcLang, setRecentDstLangs, setRecentSrcLangs, setLocale,
    curSrcLang, curDstLang, locale */

var URL_PARAM_Q_LIMIT = 1300,
    DEFAULT_EXPIRY_HOURS = 24,
    HASH_URL_MAP = {
        '#translation': 'q',
        '#webpageTranslation': 'qP',
        '#analyzation': 'qA',
        '#generation': 'qG',
        '#sandbox': 'qS'
    };

var store = new Store(config.HTML_URL);

// eslint-disable-next-line id-blacklist
function cache/*:: <T> */(name /*: string */, value /*: T */) {
    store.set(name, value);
    store.set(name + '_timestamp', Date.now());
}

function readCache(name /*: string */, type /*: string */) /*: ?any */ {
    var timestamp = store.get(name + '_timestamp', 0);
    var storedValue /*: ?number */ = store.get(name, null);
    if(storedValue && timestamp) {
        var expiryHours = config[type.toUpperCase() + '_CACHE_EXPIRY'];
        if(typeof expiryHours !== 'number') {
            expiryHours = DEFAULT_EXPIRY_HOURS;
        }
        var MS_IN_HOUR = 3600000,
            expiryTime = timestamp + (expiryHours * MS_IN_HOUR);
        if(expiryTime > Date.now()) {
            return storedValue;
        }
    }
    return null;
}

function persistChoices(mode /*: string */, updatePermalink /*: ?boolean */) {
    if(store.able()) {
        var objects;
        if(mode === 'translator') {
            objects = {
                'recentSrcLangs': recentSrcLangs,
                'recentDstLangs': recentDstLangs,
                'curSrcLang': curSrcLang,
                'curDstLang': curDstLang,
                'curSrcChoice': $('.srcLang.active').prop('id'),
                'curDstChoice': $('.dstLang.active').prop('id'),
                'translationInput': $('#originalText').val(),
                'webpageInput': $('#webpage').val(),
                'instantTranslation': $('#instantTranslation').prop('checked'),
                'markUnknown': $('#markUnknown').prop('checked'),
                'chainedTranslation': $('#chainedTranslation').prop('checked')
            };
        }
        else if(mode === 'analyzer') {
            objects = {
                'primaryAnalyzerChoice': $('#primaryAnalyzerMode').val(),
                'secondaryAnalyzerChoice': $('#secondaryAnalyzerMode').val(),
                'analyzerInput': $('#morphAnalyzerInput').val()
            };
        }
        else if(mode === 'generator') {
            objects = {
                'primaryGeneratorChoice': $('#primaryGeneratorMode').val(),
                'secondaryGeneratorChoice': $('#secondaryGeneratorMode').val(),
                'generatorInput': $('#morphGeneratorInput').val()
            };
        }
        else if(mode === 'localization') {
            objects = {
                'locale': $('.localeSelect').val()
            };
        }
        else if(mode === 'sandbox') {
            objects = {
                'sandboxInput': $('#sandboxInput').val()
            };
        }

        for(var name in objects) {
            store.set(name, objects[name]);
        }
    }

    if(window.history.replaceState && parent.location.hash) {
        var hash /*: string */ = parent.location.hash,
            urlParams /*: string[] */ = [],
            urlParamNames /* string[] */ = ['dir', 'choice'];

        $.each(urlParamNames, function () {
            var urlParam = getURLParam(this);
            if(urlParam) {
                urlParams.push(this + '=' + encodeURIComponent(urlParam));
            }
        });

        var qVal /*: string */ = '';
        if(hash === '#translation' && curSrcLang && curDstLang) {
            urlParams = [];
            urlParams.push('dir=' + encodeURIComponent(curSrcLang + '-' + curDstLang));
            qVal = $('#originalText').val();
        }
        else if(hash === '#webpageTranslation' && curSrcLang && curDstLang) {
            urlParams = [];
            urlParams.push('dir=' + encodeURIComponent(curSrcLang + '-' + curDstLang));
            qVal = $('#webpage').val();
        }
        else if(hash === '#analyzation' && $('#secondaryAnalyzerMode').val()) {
            urlParams = [];
            urlParams.push('choice=' + encodeURIComponent($('#secondaryAnalyzerMode').val()));
            qVal = $('#morphAnalyzerInput').val();
        }
        else if(hash === '#generation' && $('#secondaryGeneratorMode').val()) {
            urlParams = [];
            urlParams.push('choice=' + encodeURIComponent($('#secondaryGeneratorMode').val()));
            qVal = $('#morphGeneratorInput').val();
        }

        var qName /*: string */ = HASH_URL_MAP[hash];

        if(updatePermalink) {
            if(qVal && qVal.length > 0 && qVal.length < URL_PARAM_Q_LIMIT) {
                urlParams.push(qName + '=' + encodeURIComponent(qVal));
            }
        }
        else if(getURLParam(qName).length > 0) {
            urlParams.push(qName + '=' + getURLParam(qName));
        }

        var newURL /*: string */ = window.location.pathname + (urlParams.length > 0 ? '?' + urlParams.join('&') : '') + hash;
        window.history.replaceState({}, document.title, newURL);
    }
}

function restoreChoices(mode /*: string */) {
    if(store.able() && getURLParam('reset').length > 0) {
        store.clear();
    }
    var hash /*: string */ = parent.location.hash;
    if(mode === 'translator') {
        if(store.able()) {
            var storedRecentSrcLangs /* ?string[] */ = store.get('recentSrcLangs');
            if(storedRecentSrcLangs && isSubset(storedRecentSrcLangs, srcLangs)) {
                setRecentSrcLangs(storedRecentSrcLangs);
                $('.srcLang').removeClass('active');
            }

            var storedCurSrcLang /*: ?string */ = store.get('curSrcLang');
            if(storedCurSrcLang) {
                setCurSrcLang(storedCurSrcLang);
                $('#srcLangSelect option[value=' + storedCurSrcLang + ']').prop('selected', true);

                var storedCurSrcChoice = store.get('curSrcChoice', 'srcLang1');
                $('#' + storedCurSrcChoice).addClass('active');
                if(storedCurSrcChoice === 'detect') {
                    $('#detectedText').parent('.srcLang').attr('data-code', storedCurSrcLang);
                    $('#detectText').hide();
                }
            }

            var storedRecentDstLangs /* ?string[] */ = store.get('recentDstLangs');
            if(storedRecentDstLangs && isSubset(storedRecentDstLangs, dstLangs)) {
                setRecentDstLangs(storedRecentDstLangs);
                $('.dstLang').removeClass('active');
            }

            var storedCurDstLang /*: ?string */ = store.get('curDstLang');
            if(storedCurDstLang) {
                setCurDstLang(storedCurDstLang);
                $('#dstLangSelect option[value=' + storedCurDstLang + ']').prop('selected', true);
                $('#' + store.get('curDstChoice', 'dstLang1')).addClass('active');
            }

            $('#webpage').val(store.get('webpageInput', ''));
            $('#originalText').val(store.get('translationInput', ''));
            $('#instantTranslation').prop('checked', store.get('instantTranslation', true));
            $('#markUnknown').prop('checked', store.get('markUnknown', false));
            $('#chainedTranslation').prop('checked', store.get('chainedTranslation', false));
        }

        if(getURLParam('dir')) {
            var pair /*: string[] */ = getURLParam('dir').split('-');
            pair[0] = iso639CodesInverse[pair[0]] ? iso639CodesInverse[pair[0]] : pair[0];
            pair[1] = iso639CodesInverse[pair[1]] ? iso639CodesInverse[pair[1]] : pair[1];
            if(pairs[pair[0]] && pairs[pair[0]].indexOf(pair[1]) !== -1) {
                handleNewCurrentLang(setCurSrcLang(pair[0]), recentSrcLangs, 'srcLang', undefined, true);
                handleNewCurrentLang(setCurDstLang(pair[1]), recentDstLangs, 'dstLang', undefined, true);
            }
        }

        if(getURLParam(HASH_URL_MAP[hash]).length > 0) {
            $('#originalText').val(decodeURIComponent(getURLParam('q')));
        }

        if(getURLParam(HASH_URL_MAP[hash]).length > 0) {
            $('#webpage').val(decodeURIComponent(getURLParam('qP')));
        }

        refreshLangList();
    }
    else if(mode === 'analyzer') {
        if(store.able()) {
            var primaryAnalyzerChoice = store.get('primaryAnalyzerChoice', ''),
                secondaryAnalyzerChoice = store.get('secondaryAnalyzerChoice', '');
            if(primaryAnalyzerChoice && secondaryAnalyzerChoice) {
                $('#primaryAnalyzerMode option[value="' + primaryAnalyzerChoice + '"]').prop('selected', true);
                populateSecondaryAnalyzerList();
                $('#secondaryAnalyzerMode option[value="' + secondaryAnalyzerChoice + '"]').prop('selected', true);
            }
            else if(primaryAnalyzerChoice) {
                $('#primaryAnalyzerMode option[value="' + primaryAnalyzerChoice + '"]').prop('selected', true);
            }
            else {
                populateSecondaryAnalyzerList();
            }

            $('#morphAnalyzerInput').val(store.get('analyzerInput', ''));
        }

        if(getURLParam('choice')) {
            var choice = getURLParam('choice').split('-');
            $('#primaryAnalyzerMode option[value="' + choice[0] + '"]').prop('selected', true);
            populateSecondaryAnalyzerList();
            if(choice.length === 2) {
                $('#secondaryAnalyzerMode option[value="' + choice.join('-') + '"]').prop('selected', true);
            }
        }

        if(getURLParam(HASH_URL_MAP[hash]).length > 0) {
            $('#morphAnalyzerInput').val(decodeURIComponent(getURLParam('qA')));
        }
    }
    else if(mode === 'generator') {
        if(store.able()) {
            var primaryGeneratorChoice = store.get('primaryGeneratorChoice', ''),
                secondaryGeneratorChoice = store.get('secondaryGeneratorChoice', '');
            if(store.has('primaryGeneratorChoice') && store.has('secondaryGeneratorChoice')) {
                $('#primaryGeneratorMode option[value="' + primaryGeneratorChoice + '"]').prop('selected', true);
                populateSecondaryGeneratorList();
                $('#secondaryGeneratorMode option[value="' + secondaryGeneratorChoice + '"]').prop('selected', true);
            }
            else {
                populateSecondaryGeneratorList();
            }

            $('#morphGeneratorInput').val(store.get('generatorInput', ''));
        }

        if(getURLParam('choice')) {
            choice = getURLParam('choice').split('-');
            $('#primaryGeneratorMode option[value="' + choice[0] + '"]').prop('selected', true);
            populateSecondaryGeneratorList();
            if(choice.length === 2) {
                $('#secondaryGeneratorMode option[value="' + choice.join('-') + '"]').prop('selected', true);
            }
        }

        if(getURLParam(HASH_URL_MAP[hash]).length > 0) {
            $('#morphGeneratorInput').val(decodeURIComponent(getURLParam('qG')));
        }
    }
    else if(mode === 'localization') {
        if(store.able()) {
            setLocale(store.get('locale', ''));
            if(locale) {
                $('.localeSelect').val(locale);
            }
        }
    }
    else if(mode === 'sandbox') {
        if(store.able()) {
            $('#sandboxInput').val(store.get('sandboxInput', ''));
        }
    }

}

/*:: export {persistChoices, restoreChoices, cache, readCache} */

/*:: import {curDstLang, curSrcLang, dstLangs, handleNewCurrentLang, pairs, recentDstLangs, recentSrcLangs, refreshLangList,
    setCurDstLang, setCurSrcLang, setRecentDstLangs, setRecentSrcLangs, srcLangs} from "./translator.js" */
/*:: import {iso639Codes, iso639CodesInverse, locale, setLocale} from "./localization.js" */
/*:: import {populateSecondaryGeneratorList} from "./generator.js" */
/*:: import {populateSecondaryAnalyzerList} from "./analyzer.js" */
/*:: import {getURLParam, isSubset} from "./util.js" */
/*:: import {Store} from "./store.js" */
// @flow

var locale/*: string */;
// eslint-disable-next-line
var languages = {'af': 'Afrikaans',  'id': 'Bahasa Indonesia',  'cy': 'Cymraeg',  'de': 'Deutsch',  'en': 'English',  'ga': 'Gaeilge',  'gv': 'Gaelg',  'gd': 'Gàidhlig',  'rn': 'Ikirundi',  'sw': 'Kiswahili',  'lg': 'Luganda',  'mt': 'Malti',  'nl': 'Nederlands',  'sq': 'Shqip',  'vi': 'Tiếng Việt',  'tr': 'Türkçe',  'az': 'azərbaycan',  'br': 'brezhoneg',  'ca': 'català',  'da': 'dansk',  'se': 'davvisámegiella',  'et': 'eesti',  'es': 'español',  'eo': 'esperanto',  'eu': 'euskara',  'fr': 'français',  'fo': 'føroyskt',  'ia': 'interlingua',  'xh': 'isiXhosa',  'zu': 'isiZulu',  'it': 'italiano',  'mfe': 'kreol morisien',  'lv': 'latviešu',  'lt': 'lietuvių',  'hu': 'magyar',  'nb': 'norsk bokmål',  'nn': 'nynorsk',  'uz': 'oʻzbekcha',  'pl': 'polski',  'pt': 'português',  'ro': 'română',  'rm': 'rumantsch',  'sk': 'slovenčina',  'sl': 'slovenščina',  'fi': 'suomi',  'sv': 'svenska',  'is': 'íslenska',  'cs': 'čeština',  'el': 'Ελληνικά',  'tg': 'Тоҷикӣ',  'ba': 'башҡортса',  'be': 'беларуская',  'bg': 'български',  'os': 'ирон',  'kum': 'къумукъча',  'ky': 'кыргызча',  'mk': 'македонски',  'ru': 'русский',  'tt': 'татарча',  'uk': 'українська',  'kk': 'қазақша',  'hy': 'հայերեն',  'he': 'עברית',  'ur': 'اردو',  'ar': 'العربية',  'fa': 'فارسی',  'ne': 'नेपाली',  'mr': 'मराठी',  'hi': 'हिंदी',  'as': 'অসমীয়া',  'bn': 'বাংলা',  'pa': 'ਪੰਜਾਬੀ',  'te': 'తెలుగు',  'ml': 'മലയാളം',  'si': 'සිංහල',  'th': 'ไทย',  'lo': 'ລາວ',  'zh': '中文',  'ko': '한국어',  'mrj': 'Мары йӹлмӹ',  'gl': 'galego',  'myv': 'Эрзянь кель',  'oc': 'occitan',  'cv': 'чӑвашла',  'arg': 'aragonés',  'ast': 'asturianu',  'msa': 'bahasa malay',  'hbs': 'srpskohrvatski',  'srp': 'српски',  'hrv': 'hrvatski',  'bos': 'bosanski',  'nog': 'ногъайша',  'sah': 'сахалыы',  'uig': 'ئۇيغۇرچە',  'tyv': 'тыва дылда'};
// eslint-disable-next-line
var iso639Codes = {'abk': 'ab', 'aar': 'aa', 'afr': 'af', 'aka': 'ak', 'sqi': 'sq', 'amh': 'am', 'ara': 'ar', 'arg': 'an', 'hye': 'hy', 'asm': 'as', 'ava': 'av', 'ave': 'ae', 'aym': 'ay', 'aze': 'az', 'bam': 'bm', 'bak': 'ba', 'eus': 'eu', 'bel': 'be', 'ben': 'bn', 'bih': 'bh', 'bis': 'bi', 'bos': 'bs', 'bre': 'br', 'bul': 'bg', 'mya': 'my', 'cat': 'ca', 'cha': 'ch', 'che': 'ce', 'nya': 'ny', 'zho': 'zh', 'chv': 'cv', 'cor': 'kw', 'cos': 'co', 'cre': 'cr', 'hrv': 'hr', 'ces': 'cs', 'dan': 'da', 'div': 'dv', 'nld': 'nl', 'dzo': 'dz', 'eng': 'en', 'epo': 'eo', 'est': 'et', 'ewe': 'ee', 'fao': 'fo', 'fij': 'fj', 'fin': 'fi', 'fra': 'fr', 'ful': 'ff', 'glg': 'gl', 'kat': 'ka', 'deu': 'de', 'ell': 'el', 'grn': 'gn', 'guj': 'gu', 'hat': 'ht', 'hau': 'ha', 'heb': 'he', 'her': 'hz', 'hin': 'hi', 'hmo': 'ho', 'hun': 'hu', 'ina': 'ia', 'ind': 'id', 'ile': 'ie', 'gle': 'ga', 'ibo': 'ig', 'ipk': 'ik', 'ido': 'io', 'isl': 'is', 'ita': 'it', 'iku': 'iu', 'jpn': 'ja', 'jav': 'jv', 'kal': 'kl', 'kan': 'kn', 'kau': 'kr', 'kas': 'ks', 'kaz': 'kk', 'khm': 'km', 'kik': 'ki', 'kin': 'rw', 'kir': 'ky', 'kom': 'kv', 'kon': 'kg', 'kor': 'ko', 'kur': 'ku', 'kua': 'kj', 'lat': 'la', 'ltz': 'lb', 'lug': 'lg', 'lim': 'li', 'lin': 'ln', 'lao': 'lo', 'lit': 'lt', 'lub': 'lu', 'lav': 'lv', 'glv': 'gv', 'mkd': 'mk', 'mlg': 'mg', 'msa': 'ms', 'mal': 'ml', 'mlt': 'mt', 'mri': 'mi', 'mar': 'mr', 'mah': 'mh', 'mon': 'mn', 'nau': 'na', 'nav': 'nv', 'nob': 'nb', 'nde': 'nd', 'nep': 'ne', 'ndo': 'ng', 'nno': 'nn', 'nor': 'no', 'iii': 'ii', 'nbl': 'nr', 'oci': 'oc', 'oji': 'oj', 'chu': 'cu', 'orm': 'om', 'ori': 'or', 'oss': 'os', 'pan': 'pa', 'pli': 'pi', 'fas': 'fa', 'pol': 'pl', 'pus': 'ps', 'por': 'pt', 'que': 'qu', 'roh': 'rm', 'run': 'rn', 'ron': 'ro', 'rus': 'ru', 'san': 'sa', 'srd': 'sc', 'snd': 'sd', 'sme': 'se', 'smo': 'sm', 'sag': 'sg', 'srp': 'sr', 'gla': 'gd', 'sna': 'sn', 'sin': 'si', 'slk': 'sk', 'slv': 'sl', 'som': 'so', 'sot': 'st', 'azb': 'az', 'spa': 'es', 'sun': 'su', 'swa': 'sw', 'ssw': 'ss', 'swe': 'sv', 'tam': 'ta', 'tel': 'te', 'tgk': 'tg', 'tha': 'th', 'tir': 'ti', 'bod': 'bo', 'tuk': 'tk', 'tgl': 'tl', 'tsn': 'tn', 'ton': 'to', 'tur': 'tr', 'tso': 'ts', 'tat': 'tt', 'twi': 'tw', 'tah': 'ty', 'uig': 'ug', 'ukr': 'uk', 'urd': 'ur', 'uzb': 'uz', 'ven': 've', 'vie': 'vi', 'vol': 'vo', 'wln': 'wa', 'cym': 'cy', 'wol': 'wo', 'fry': 'fy', 'xho': 'xh', 'yid': 'yi', 'yor': 'yo', 'zha': 'za', 'zul': 'zu',  'hbs': 'sh',  'pes': 'fa'};
var rtlLanguages = ['heb', 'ara', 'pes', 'urd', 'uig'];
var languagesInverse /*: {[string]: string} */ = {}, iso639CodesInverse /*: {[string]: string} */ = {};
var localizedLanguageCodes /*: {[string]: string} */ = {}, localizedLanguageNames /*: {[string]: string} */ = {};

/* exported setLocale */

/* global config, getPairs, getGenerators, getAnalyzers, persistChoices, getURLParam, cache, ajaxSend, ajaxComplete, sendEvent,
    srcLangs, dstLangs, generators, analyzers, readCache, modeEnabled, populateTranslationList, populateGeneratorList,
    populateAnalyzerList, analyzerData, generatorData, curSrcLang, curDstLang, restoreChoices, refreshLangList, onlyUnique */

var dynamicLocalizations /*: {[lang: string]: {[string]: string}} */ = {
    'fallback': {
        'Not_Available': 'Translation not yet available!',
        'detected': 'detected',
        'File_Too_Large': 'File is too large!',
        'Format_Not_Supported': 'Format not supported!',
        'Download_File': 'Download {{fileName}}'
    }
};

function getDynamicLocalization(stringKey /*: string */) /*: string */ {
    var globalLocale = dynamicLocalizations[locale] &&
        dynamicLocalizations[locale][stringKey];
    if(globalLocale && !(globalLocale.match('%%UNAVAILABLE%%'))) {
        return globalLocale;
    }
    else {
        return dynamicLocalizations.fallback[stringKey];
    }
}

var localizedHTML = false;

/* exported getLangByCode */

if(!config.LANGNAMES) {
    config.LANGNAMES = {};
}

$(document).ready(function () {
    $.each(languages, function (code /*: string */, language /*: string */) {
        languagesInverse[language] = code;
    });
    $.each(iso639Codes, function (code /*: string */, language /*: string */) {
        iso639CodesInverse[language] = code;
    });

    var possibleItems = {'translation': getPairs, 'generation': getGenerators, 'analyzation': getAnalyzers};
    var deferredItems = [getLocale(), getLocales()];
    if(config.ENABLED_MODES) {
        $.each(config.ENABLED_MODES, function () {
            if(possibleItems[this]) {
                deferredItems.push(possibleItems[this].call());
            }
        });
    }
    else {
        $.each(possibleItems, function (mode /*: string */, deferrer) {
            deferredItems.push(deferrer.call());
        });
    }

    $.when.apply($, deferredItems).then(function () /*: void */ {
        if(config.LOCALES) {
            if(!config.LOCALES.hasOwnProperty(locale)) { // in case of bad caching
                for(var k in config.LOCALES) { // just pick one that exists
                    locale = k;
                    break;
                }
            }
        }
        else {
            console.warn('No config.LOCALES');
        }
        $('.localeSelect').val(locale);
        localizeEverything(localizedHTML);
        persistChoices('localization');
    });

    $('.localeSelect').change(function () {
        locale = $(this).val();
        sendEvent('localization', 'localize', locale);
        localizeEverything(false);
        persistChoices('localization');
        $('.localeSelect').val(locale);
    });

    function localizeEverything(stringsFresh /*: boolean */) {
        localizeInterface();
        localizeStrings(stringsFresh);
        if($('#translatedText').hasClass('notAvailable')) {
            $('#translatedText').text(getDynamicLocalization('Not_Available'));
        }

        var pathname /*: string */ = window.location.pathname;

        if(window.history.replaceState && !pathname.endsWith('/index.debug.html')) {
            var urlParams = [],
                // TODO: Shouldn't this list be in persistence.js, and this function renamed "removeUrlparamsThatWeDontRecognize"?
                urlParamNames = ['dir', 'choice', 'q', 'qA', 'qG', 'qP'];
            $.each(urlParamNames, function () {
                var urlParam = getURLParam(this);
                if(urlParam) {
                    urlParams.push(this + '=' + urlParam);
                }
            });

            var newURL /*: string */ =
                pathname.substring(0, pathname.lastIndexOf('/')) +
                '/index.' + locale + '.html' +
                (urlParams.length > 0 ? '?' + urlParams.join('&') : '') +
                window.location.hash;
            window.history.replaceState({}, document.title, newURL);
        }
    }
});

function getLocale() {
    var deferred /*: JQueryDeferred<any> */ = $.Deferred();

    restoreChoices('localization');

    var localeParam = getURLParam('lang').replace('/', '');
    localeParam = iso639CodesInverse[localeParam] ? iso639CodesInverse[localeParam] : localeParam;
    if(localeParam) {
        locale = localeParam;
        deferred.resolve();
    }
    else {
        var pathParts /*: string[] */ = window.location.pathname.split('.');
        if(pathParts.length === 3 && pathParts[1] !== 'debug') {
            locale = pathParts[1];
            localizedHTML = true;
            deferred.resolve();
        }
        else if(!locale) {
            $.jsonp({
                url: config.APY_URL + '/getLocale',
                beforeSend: ajaxSend,
                success: function (data /*: string[] */, _textStatus, _xOptions) {
                    for(var i = 0; i < data.length; i++) {
                        var localeGuess = data[i];
                        if(localeGuess.indexOf('-') !== -1) {
                            localeGuess = localeGuess.split('-')[0];
                        }
                        if(localeGuess in iso639Codes) {
                            locale = localeGuess;
                            break;
                        }
                        else if(localeGuess in iso639CodesInverse) {
                            locale = iso639CodesInverse[localeGuess];
                            break;
                        }
                    }
                },
                error: function (_xOptions, _errorThrown) {
                    console.error('Failed to determine locale,  defaulting to ' + config.DEFAULT_LOCALE);
                    locale = config.DEFAULT_LOCALE;
                },
                complete: function (_xOptions, _errorThrown) {
                    ajaxComplete();
                    deferred.resolve();
                }
            });
        }
        else {
            deferred.resolve();
        }
    }

    return deferred.promise();
}

function langDirection(lang /*: string */) /*: 'ltr' | 'rtl' */ {
    return rtlLanguages.indexOf(lang) === -1 ? 'ltr' : 'rtl';
}

function getLocales() {
    var deferred /*: JQueryDeferred<any> */ = $.Deferred();
    if(config.LOCALES) {
        handleLocales(config.LOCALES);
        deferred.resolve();
    }
    else {
        var locales = readCache('locales', 'AVAILABLE_LOCALES');
        if(locales) {
            handleLocales(locales);
            deferred.resolve();
        }
        else {
            console.warn('Available locales cache ' + (locales ? 'miss' : 'stale') + ',  retrieving from server');
            $.ajax({
                url: './strings/locales.json',
                type: 'GET',
                success: function (data, _textStatus, _jqXHR) {
                    handleLocales(data);
                    cache('locales', data);
                    deferred.resolve();
                },
                error: function (jqXHR, textStatus, error) {
                    console.error('Failed to fetch available locales: ' + error);
                    deferred.resolve();
                }
            });
        }
    }

    function handleLocales(locales) {
        var localePairs /*: [string, string][] */ = [];
        for(var code in locales) {
            localePairs.push([code, locales[code]]);
        }
        localePairs = localePairs.sort(function (a, b) {
            return a[1].toLowerCase().localeCompare(b[1].toLowerCase());
        });
        $('.localeSelect').empty();
        $.each(localePairs, function (i /*: number */, codeAndName /*: [string, string] */) {
            $('.localeSelect').append(
                $('<option></option>')
                    .val(codeAndName[0])
                    .text(codeAndName[1])
                    .prop('dir', langDirection(this[0]))
            );
        });
    }

    return deferred.promise();
}

function generateLanguageList() /*: string[] */ {
    var languages = [];
    $.each(srcLangs.concat(dstLangs), function () {
        languages.push(this);
    });

    var langObjects = [generators, analyzers];
    for(var i = 0; i < langObjects.length; i++) {
        $.each(Object.keys(langObjects[i]), function () {
            if(this.indexOf('-') !== -1) {
                languages = languages.concat(this.split('-'));
            }
            else {
                languages.push(this);
            }
        });
    }

    languages = languages.filter(onlyUnique);
    return languages;
}

function localizeLanguageNames(localizedNamesFromJSON) {
    var localizedNames/*: ?{} */;
    if(config.LANGNAMES && locale in config.LANGNAMES) {
        localizedNames = config.LANGNAMES[locale];
        handleLocalizedNames(localizedNames);
        cache(locale + '_names', localizedNames);
    }
    else if(localizedNamesFromJSON) {
        handleLocalizedNames(localizedNamesFromJSON);
        cache(locale + '_names', localizedNamesFromJSON);
    }
    else {
        var languages /*: string[] */ = generateLanguageList();

        localizedNames = readCache(locale + '_names', 'LANGUAGE_NAME');
        if(localizedNames) {
            handleLocalizedNames(localizedNames);
            cache(locale + '_names', localizedNames);
        }
        else {
            console.warn(locale + ' localized names cache ' + (localizedNames ? 'miss' : 'stale') + ',  retrieving from server');
            $.jsonp({
                url: config.APY_URL + '/listLanguageNames?locale=' + locale + '&languages=' + languages.join('+'),
                beforeSend: ajaxSend,
                complete: ajaxComplete,
                success: function (data, _textStatus, _xOptions) {
                    handleLocalizedNames(data);
                    cache(locale + '_names', data);
                },
                error: function (_xOptions, _error) {
                    localizedLanguageNames = {};
                }
            });
        }
    }

    function handleLocalizedNames(localizedNames) {
        localizedLanguageNames = localizedNames;
        localizedLanguageCodes = {};
        $.each(localizedNames, function (code /*: string */, name /*: string */) {
            localizedLanguageCodes[name] = code;
        });

        if(modeEnabled('translation')) {
            populateTranslationList();
            refreshLangList();
        }
        if(modeEnabled('generation')) {
            populateGeneratorList(generatorData);
        }
        if(modeEnabled('analyzation')) {
            populateAnalyzerList(analyzerData);
        }
    }
}

function localizeStrings(stringsFresh /*: boolean */) {
    if(stringsFresh) {
        localizeLanguageNames();
    }
    else {
        var localizations = readCache(locale + '_localizations', 'LOCALIZATION');
        if(localizations) {
            handleLocalizations(locale, localizations);
            localizeLanguageNames(localizations['@langNames']);
        }
        else {
            console.warn(locale + ' localizations cache ' + (localizations ? 'miss' : 'stale') + ',  retrieving from server');
            $.ajax({
                url: './strings/' + locale + '.json',
                type: 'GET',
                dataType: 'text',
                success: function (response, _textStatus, _jqXHR /*: JQueryXHR */) {
                    var data = JSON.parse(response.replace(/[\n\t\r]/g, ''));
                    handleLocalizations(locale, data);
                    localizeLanguageNames(data['@langNames']);
                    cache(locale + '_localizations', data);
                },
                error: function (jqXHR, textStatus, errorThrow) {
                    console.error('Failed to fetch localized strings for ' + locale + ': ' + errorThrow);
                }
            });
        }
    }

    function handleLocalizations(locale /*: string */, localizations) {
        for(var textId in localizations) {
            if(textId.charAt(0) !== '@') {
                var text /*: string */ = localizations[textId];
                $.each(config.REPLACEMENTS, function (name /*: string */, replacement /*: string */) {
                    if(text.indexOf('{{' + name + '}}') !== -1) {
                        text = text.replace('{{' + name + '}}', replacement);
                    }
                });
                try {
                    if(!text.match('%%UNAVAILABLE%%')) {
                        var elem = $('[data-text=' + textId + ']');
                        if(elem.attr('data-textattr')) {
                            elem.attr(elem.attr('data-textattr'), text);
                        }
                        else {
                            elem.html(text);
                            elem.attr('dir', langDirection(locale));
                        }
                    }
                }
                catch(e) {
                    // Only in IE8.
                    console.error('Ignored ' + e + " when calling $('[data-text=' + ' + textId + ' + ']').html(' + text + ')");
                }
            }
        }

        dynamicLocalizations[locale] = localizations;

        if($('#fileDownloadText').text().length) {
            $('span#fileDownloadText').text(
                getDynamicLocalization('Download_File').replace('{{fileName}}', $('a#fileDownload').attr('download'))
            );
        }
    }
}

function localizeInterface() {
    var elements = {
        'html': locale,
        '#originalText': curSrcLang,
        '#translatedText': curDstLang,
        '#morphAnalyzerInput': $('#primaryAnalyzerMode').val(),
        '#morphGeneratorInput': $('#primaryGeneratorMode').val()
    };

    $.each(elements, function (selector, lang /*: string */) {
        $(selector).attr('dir', langDirection(lang));
    });

    $('link#rtlStylesheet').prop('disabled', langDirection(locale) === 'ltr');
}

function getLangByCode(dirtyCode /*: string */) /*: string */ {
    var code /*: string */ = dirtyCode ? dirtyCode.trim() : dirtyCode;
    if(localizedLanguageNames[code]) {
        return localizedLanguageNames[code];
    }
    else if(iso639Codes[code] && localizedLanguageNames[iso639Codes[code]]) {
        return localizedLanguageNames[iso639Codes[code]];
    }
    else if(iso639CodesInverse[code] && localizedLanguageNames[iso639CodesInverse[code]]) {
        return localizedLanguageNames[iso639CodesInverse[code]];
    }
    else if(languages[code]) {
        return languages[code];
    }
    else if(iso639Codes[code] && languages[iso639Codes[code]]) {
        return languages[iso639Codes[code]];
    }
    else {
        return code;
    }
}

function setLocale(newLocale /*: string */) {
    locale = newLocale;
    return newLocale;
}

/*:: export {getLangByCode, getDynamicLocalization, iso639Codes, iso639CodesInverse, locale, localizeInterface, setLocale,
    langDirection, languages} */

/*:: import {curDstLang, curSrcLang, dstLangs, getPairs, populateTranslationList, refreshLangList, srcLangs} from "./translator.js" */
/*:: import {ajaxSend, ajaxComplete, getURLParam, modeEnabled, onlyUnique, sendEvent} from "./util.js" */
/*:: import {generatorData, generators, getGenerators, populateGeneratorList} from "./generator.js" */
/*:: import {analyzerData, analyzers, getAnalyzers, populateAnalyzerList} from "./analyzer.js" */
/*:: import {cache, persistChoices, readCache, restoreChoices} from "./persistence.js" */
// @flow

var pairs /*: {[string]: string[]} */ = {}, chainedPairs = {}, originalPairs = pairs;
var srcLangs /*: string[] */ = [], dstLangs /*: string[] */ = [];
var curSrcLang /*: string */, curDstLang/*: string */;
var recentSrcLangs /*: string[] */ = [], recentDstLangs /*: string[] */ = [];
var droppedFile/*: ?File */;
var translateRequest;
var translationTimer/*: ?TimeoutID */;

var UPLOAD_FILE_SIZE_LIMIT = 32E6,
    TRANSLATION_LIST_BUTTONS = 3,
    TRANSLATION_LIST_IDEAL_ROWS = 12,
    TRANSLATION_LIST_MAX_WIDTH = 800,
    TRANSLATION_LIST_MAX_COLUMNS = 5,
    TRANSLATION_LISTS_BUFFER = 50;

var INSTANT_TRANSLATION_URL_DELAY = 500,
    INSTANT_TRANSLATION_PUNCTUATION_DELAY = 1000,
    INSTANT_TRANSLATION_DELAY = 3000;

var PUNCTUATION_KEY_CODES = [46, 33, 58, 63, 47, 45, 190, 171, 49]; // eslint-disable-line no-magic-numbers

/* exported curDstLang, curSrcLang, dstLangs, getPairs, handleNewCurrentLang, pairs, populateTranslationList, recentDstLangs,
    refreshLangList, recentSrcLangs, setCurDstLang, setCurSrcLang, setRecentDstLangs, setRecentSrcLangs, showTranslateWebpageInterface,
    srcLangs */

/* global config, modeEnabled, synchronizeTextareaHeights, persistChoices, getLangByCode, sendEvent, onlyUnique, restoreChoices
    getDynamicLocalization, locale, ajaxSend, ajaxComplete, localizeInterface, filterLangList, cache, readCache, iso639Codes,
    callApy, apyRequestTimeout, isURL, removeSoftHyphens, parentLang, isVariant, langDirection, languages, iso639CodesInverse */
/* global ENTER_KEY_CODE, HTTP_BAD_REQUEST_CODE, HTTP_OK_CODE, SPACE_KEY_CODE, XHR_DONE, XHR_LOADING */

if(modeEnabled('translation')) {
    $(document).ready(function () {
        function updatePairList() {
            pairs = $('input#chainedTranslation').prop('checked') ? chainedPairs : originalPairs;
        }

        function setupTextTranslation() {
            synchronizeTextareaHeights();

            $('#markUnknown').change(function () {
                if($('div#translateText').is(':visible')) {
                    translateText();
                }
                persistChoices('translator');
            });

            $('.clearButton').click(function () {
                $('#originalText, #translatedText').val('');
                $('#originalText').focus();
                synchronizeTextareaHeights();
            });

            $(window).resize(synchronizeTextareaHeights);

            $('#originalText').blur(function () {
                persistChoices('translator', true);
            });

            $('#originalText').on('input propertychange', function () {
                updateDetect($('#originalText').val() !== '');
            });

            updateDetect($('#originalText').val() !== '');
        }

        function setupWebpageTranslation() {
            $('button#showTranslateWebpage').click(function () {
                var possibleURL = $('#originalText').val().trim();
                showTranslateWebpageInterface(isURL(possibleURL) ? possibleURL : null, true);
            });

            $('button#cancelTranslateWebpage').click(function () {
                if(translateRequest) {
                    translateRequest.abort();
                    clearTimeout(apyRequestTimeout);
                }

                $('input#webpage').attr({
                    'required': false,
                    'novalidate': true
                });

                $('div#translateWebpage').fadeOut('fast', function () {
                    $('button#cancelTranslateWebpage').fadeOut('fast', function () {
                        $('#srcLangSelectors').removeClass('col-sm-9').addClass('col-sm-11');
                    });
                    $('div#translateText').fadeIn('fast', function () {
                        synchronizeTextareaHeights();
                    });
                    if(!updateDetect(true)) {
                        translateText();
                    }
                    $('#detect, #srcLangSelect option[value="detect"]').prop('disabled', false);
                    $('#detect').removeClass('disabledLang');
                });

                window.location.hash = 'translation';
            }).removeClass('cancelTranslateWebpage');

            $('input#webpage').keyup(function (ev /*: JQueryKeyEventObject */) {
                if(ev.keyCode === ENTER_KEY_CODE && isURL($('input#webpage').val())) {
                    translate();
                    return false;
                }
            });
        }

        function setupDocTranslation() {
            $('button#translateDoc').click(function () {
                $('div#translateText').fadeOut('fast', function () {
                    $('#fileInput').show();
                    $('div#fileName').hide();
                    $('div#docTranslation').fadeIn('fast');
                    updateDetect(false);
                });
                pairs = originalPairs;
                populateTranslationList();
            });

            $('button#cancelDocTranslate').click(function () {
                droppedFile = null;
                $('div#docTranslation').fadeOut('fast', function () {
                    $('a#fileDownload').hide();
                    $('span#uploadError').hide();
                    $('div#translateText').fadeIn('fast', synchronizeTextareaHeights);
                    var form /*: HTMLFormElement */ = ($('input#fileInput').wrap('<form>').closest('form')[0] /*: any */);
                    form.reset();
                    $('input#fileInput').unwrap();
                    $('#detect, #srcLangSelect option[value="detect"]').prop('disabled', false);
                    if(!updateDetect(true)) {
                        translateText();
                    }
                    $('#detect').removeClass('disabledLang');
                });
                updatePairList();
                populateTranslationList();
            });

            $('input#fileInput').change(function () {
                $('div#fileUploadProgress').parent().fadeOut('fast', function () {
                    $('span#uploadError').fadeOut('fast');
                });
                $('a#fileDownload').fadeOut('fast');
            });

            $('body')
                .on('dragover', function (ev) {
                    ev.preventDefault();
                    return false;
                })
                .on('dragenter', function (ev) {
                    ev.preventDefault();
                    if(!$('div#fileDropBackdrop:visible').length) {
                        $('div#fileDropBackdrop').fadeTo('fast', 0.5);
                        $('div#fileDropMask').on('drop', function (ev) {
                            ev.preventDefault();
                            var originalEvent /*: DragEvent */ = (ev.originalEvent /*: any */);
                            // Assume non-null value
                            var dataTransfer /*: DataTransfer */ = (originalEvent.dataTransfer /*: any */);
                            droppedFile = dataTransfer.files[0];

                            $('#fileDropBackdrop').fadeOut();
                            if($('div#docTranslation').is(':visible')) {
                                $('input#fileInput').fadeOut('fast', function () {
                                    if(droppedFile) {
                                        $('div#fileName').show().text(droppedFile.name);
                                        translateDoc();
                                    }
                                });
                            }
                            else {
                                $('div#translateText').fadeOut('fast', function () {
                                    $('input#fileInput').hide();
                                    $('div#docTranslation').fadeIn('fast');

                                    if(droppedFile) {
                                        $('div#fileName').show().text(droppedFile.name);
                                        translateDoc();
                                    }
                                });
                            }

                            return false;
                        });
                        $('div#fileDropMask').on('dragleave', function () {
                            $('div#fileDropBackdrop').fadeOut();
                        });
                    }
                    return false;
                });
        }

        function setupLanguageSelectors() {
            $('.swapLangBtn').click(function () {
                var srcCode = $('.srcLang.active').attr('data-code');
                var dstCode = $('.dstLang.active').attr('data-code');
                curSrcLang = dstCode;
                curDstLang = srcCode;

                if(recentSrcLangs.indexOf(curSrcLang) !== -1) {
                    $('.srcLang').removeClass('active');
                    $('#srcLang' + (recentSrcLangs.indexOf(curSrcLang) + 1)).addClass('active');
                }
                else {
                    recentSrcLangs[recentSrcLangs.indexOf(srcCode)] = curSrcLang;
                }
                $('#srcLangSelect').val(curSrcLang);

                if(recentDstLangs.indexOf(curDstLang) !== -1) {
                    $('.dstLang').removeClass('active');
                    $('#dstLang' + (recentDstLangs.indexOf(curDstLang) + 1)).addClass('active');
                }
                else {
                    recentDstLangs[recentDstLangs.indexOf(dstCode)] = curDstLang;
                }
                $('#dstLangSelect').val(curDstLang);

                refreshLangList(true);
                muteLanguages();

                if($('.active > #detectedText')) {
                    $('.srcLang').removeClass('active');
                    $('#srcLang' + (recentSrcLangs.indexOf(curSrcLang) + 1)).addClass('active');
                }
            });

            $('#srcLangSelect').change(function () {
                var selectValue /*: string */ = $(this).val();
                if(selectValue === 'detect') {
                    $.when(detectLanguage()).done(translateText);
                }
                else {
                    handleNewCurrentLang(curSrcLang = (selectValue || curSrcLang), recentSrcLangs, 'srcLang', true);
                    autoSelectDstLang();
                }
            });

            $('#dstLangSelect').change(function () {
                handleNewCurrentLang(curDstLang = ($(this).val() || curDstLang), recentDstLangs, 'dstLang', true);
            });

            $('#srcLanguages').on('click', '.languageName:not(.text-muted)', function () {
                curSrcLang = $(this).attr('data-code');
                handleNewCurrentLang(curSrcLang, recentSrcLangs, 'srcLang');
                autoSelectDstLang();
            });

            $('#dstLanguages').on('click', '.languageName:not(.text-muted)', function () {
                curDstLang = $(this).attr('data-code');
                handleNewCurrentLang(curDstLang, recentDstLangs, 'dstLang');
            });

            $('.srcLang:not(#detect)').click(function () {
                curSrcLang = $(this).attr('data-code');
                $('.srcLang').removeClass('active');
                $(this).addClass('active');
                $('#detect').removeClass('activeAfterCancel');
                populateTranslationList();
                refreshLangList(true);
                muteLanguages();
                localizeInterface();
                autoSelectDstLang();
                translate();
            });

            $('.dstLang').click(function () {
                curDstLang = $(this).attr('data-code');
                $('.dstLang').removeClass('active');
                $(this).addClass('active');
                refreshLangList();
                muteLanguages();
                localizeInterface();
                translate();
            });

            $('#detect').click(function () {
                $('.srcLang').removeClass('active');
                $(this).addClass('active');
                $.when(detectLanguage()).done(translateText);
            });
        }

        function getChainedDstLangs(srcLang) {
            var targets = [];
            var targetsSeen = {};
            targetsSeen[srcLang] = true;
            var targetLists = [pairs[srcLang]];

            while(targetLists.length > 0) {
                $.each(targetLists.pop(), function (i /*: number */, trgt) {
                    if(!targetsSeen[trgt]) {
                        targets.push(trgt);
                        if(pairs[trgt]) {
                            targetLists.push(pairs[trgt]);
                        }
                        targetsSeen[trgt] = true;
                    }
                });
            }

            return targets;
        }

        if(config.TRANSLATION_CHAINING) {
            $('.chaining').show();
            $.each(pairs, function (srcLang /*: string */, _dstLangs) {
                chainedPairs[srcLang] = getChainedDstLangs(srcLang);
            });
            updatePairList();
            populateTranslationList();
        }

        $('.translateBtn').click(function () {
            translate();
            persistChoices('translator', true);
        });

        $('input#chainedTranslation').change(function () {
            updatePairList();
            populateTranslationList();
            persistChoices('translator');
        });

        var lastPunct = false;
        $('#originalText').on('keyup paste', function (ev /*: JQueryEventObject */) {
            var event /*: JQueryKeyEventObject */ = (ev /*: any */);

            if(lastPunct && (event.keyCode === SPACE_KEY_CODE || event.keyCode === ENTER_KEY_CODE)) {
                // Don't override the short timeout for simple space-after-punctuation
                return;
            }

            if(translationTimer && $('#instantTranslation').prop('checked')) {
                clearTimeout(translationTimer);
            }

            var timeout;
            if(PUNCTUATION_KEY_CODES.indexOf(event.keyCode) !== -1) {
                timeout = INSTANT_TRANSLATION_PUNCTUATION_DELAY;
                lastPunct = true;
            }
            else if(isURL($('#originalText').val())) {
                timeout = INSTANT_TRANSLATION_URL_DELAY;
                lastPunct = false;
            }
            else {
                timeout = INSTANT_TRANSLATION_DELAY;
                lastPunct = false;
            }

            translationTimer = setTimeout(function () {
                if($('#instantTranslation').prop('checked')) {
                    translate();
                }
                persistChoices('translator', true);
            }, timeout);

            synchronizeTextareaHeights();
        });

        $('#instantTranslation').change(function () {
            persistChoices('translator');
        });

        setupLanguageSelectors();
        setupTextTranslation();
        setupWebpageTranslation();
        setupDocTranslation();
    });
}

function getPairs() /*: JQueryPromise<any> */ {
    var deferred = $.Deferred();

    if(config.PAIRS && 'responseData' in config.PAIRS) {
        handlePairs(config.PAIRS.responseData);
        deferred.resolve();
    }
    else {
        var pairData = readCache('pairs', 'LIST_REQUEST');
        if(pairData) {
            handlePairs(pairData);
            deferred.resolve();
        }
        else {
            console.warn('Translation pairs cache ' + (pairs ? 'miss' : 'stale') + ', retrieving from server');
            $.jsonp({
                url: config.APY_URL + '/list?q=pairs',
                beforeSend: ajaxSend,
                success: function (data, _textStatus, _xOptions) {
                    handlePairs(data.responseData);
                    cache('pairs', data.responseData);
                },
                error: function (_xOptions, errorThrown) {
                    console.error('Failed to get available translation language pairs: ' + errorThrown);
                    translationNotAvailable();
                },
                complete: function (_xOptions, _errorThrown) {
                    ajaxComplete();
                    deferred.resolve();
                }
            });
        }
    }

    function handlePairs(pairData) {
        if(!pairData) {
            populateTranslationList();
            restoreChoices('translator');
            translate(true);
            return;
        }

        $.each(pairData, function (i /*: number */, pair) {
            if(config.ALLOWED_PAIRS && config.ALLOWED_PAIRS.indexOf(pair.sourceLanguage + '-' + pair.targetLanguage) === -1) {
                return;
            }

            srcLangs.push(pair.sourceLanguage);
            dstLangs.push(pair.targetLanguage);

            if(pairs[pair.sourceLanguage]) {
                pairs[pair.sourceLanguage].push(pair.targetLanguage);
            }
            else {
                pairs[pair.sourceLanguage] = [pair.targetLanguage];
            }
        });

        srcLangs = filterLangList(srcLangs.filter(onlyUnique));
        dstLangs = filterLangList(dstLangs.filter(onlyUnique));

        $.each(dstLangs, function () {
            var parent = parentLang(this);
            if(dstLangs.indexOf(parent) === -1) {
                dstLangs.push(parent);
            }
        });

        $.each(srcLangs, function () {
            var parent = parentLang(this);
            if(!(parent in pairs)) {
                srcLangs.push(parent);
                pairs[parent] = [];
            }
        });

        for(var i = 0; i < TRANSLATION_LIST_BUTTONS; i++) {
            if(i < srcLangs.length) {
                recentSrcLangs.push(srcLangs[i]);
            }
            if(i < dstLangs.length) {
                recentDstLangs.push(dstLangs[i]);
            }
        }

        populateTranslationList();

        restoreChoices('translator');
        if(!curSrcLang) {
            setDefaultSrcLang();
        }

        translate(true);
    }

    return deferred.promise();
}

function handleNewCurrentLang(lang /*: string */, recentLangs /*: string[] */, langType /*: string */,
    resetDetect /*: ?boolean */, noTranslate /*: ?boolean */) {
    $('.' + langType).removeClass('active');
    if(recentLangs.indexOf(lang) === -1) {
        recentLangs.unshift(lang);
        $('#' + langType + '1').addClass('active');
        refreshLangList(resetDetect);
    }
    else {
        $('#' + langType + (recentLangs.indexOf(lang) + 1)).addClass('active');
        persistChoices('translator');
    }

    $('select#' + langType + 'Select').val(lang);
    if(resetDetect && recentLangs.indexOf(lang) !== -1) {
        refreshLangList(resetDetect);
    }

    populateTranslationList();
    muteLanguages();
    localizeInterface();
    if(!noTranslate) {
        translate();
    }
}

function refreshLangList(resetDetect /*: ?boolean */) {
    recentSrcLangs = filterLangs(recentSrcLangs, srcLangs);
    recentDstLangs = filterLangs(recentDstLangs, dstLangs);

    persistChoices('translator');

    for(var i = 0; i < TRANSLATION_LIST_BUTTONS; i++) {
        var srcBtn = $('#srcLang' + (i + 1));
        var dstBtn = $('#dstLang' + (i + 1));
        if(i < recentSrcLangs.length && recentSrcLangs[i]) {
            srcBtn.show().attr('data-code', recentSrcLangs[i]).text(getLangByCode(recentSrcLangs[i]));
        }
        else {
            srcBtn.hide();
        }
        if(i < recentDstLangs.length && recentDstLangs[i]) {
            dstBtn.show().attr('data-code', recentDstLangs[i]).text(getLangByCode(recentDstLangs[i]));
        }
        else {
            dstBtn.hide();
        }
    }

    if($('#detectedText').parent('.srcLang').attr('data-code')) {
        $('#detectedText').text(
            getLangByCode($('#detectedText').parent('.srcLang').attr('data-code')) +
            ' - ' + getDynamicLocalization('detected')
        );
    }

    if(resetDetect) {
        $('#detectText').show();
        $('#detectedText').hide();
    }

    function filterLangs(allRecentLangs /*: string[] */, allLangs /*: string[] */) /*: string[] */ {
        var recentLangs = allRecentLangs.filter(onlyUnique);
        if(recentLangs.length < TRANSLATION_LIST_BUTTONS) {
            for(var i = 0; i < allLangs.length; i++) {
                if(recentLangs.length < TRANSLATION_LIST_BUTTONS && recentLangs.indexOf(allLangs[i]) === -1) {
                    recentLangs.push(allLangs[i]);
                }
            }
        }
        if(recentLangs.length > TRANSLATION_LIST_BUTTONS) {
            recentLangs = recentLangs.slice(0, TRANSLATION_LIST_BUTTONS);
        }
        return recentLangs;
    }
}

function populateTranslationList() {
    sortTranslationList();
    $('.languageCol').remove();

    var minColumnWidth = TRANSLATION_LIST_MAX_WIDTH / TRANSLATION_LIST_MAX_COLUMNS;

    var maxSrcLangsWidth, maxDstLangsWidth;

    // figure out how much space is actually available for the columns, defaulting to ltr
    var direction = locale ? langDirection(locale) : 'ltr';
    if(direction === 'ltr') {
        maxSrcLangsWidth = $(window).width() - $('#srcLanguagesDropdownTrigger').offset().left - TRANSLATION_LISTS_BUFFER;
        maxDstLangsWidth = $('#dstLanguagesDropdownTrigger').offset().left + $('#dstLanguagesDropdownTrigger').outerWidth() -
                            TRANSLATION_LISTS_BUFFER;
        $('#srcLanguages').removeClass('dropdown-menu-right').addClass('dropdown-menu-left');
        $('#dstLanguages').removeClass('dropdown-menu-left').addClass('dropdown-menu-right');
        $('.translateBtn').removeClass('mr-auto').addClass('ml-auto');
    }
    else {
        maxSrcLangsWidth = $('#srcLanguagesDropdownTrigger').offset().left + $('#srcLanguagesDropdownTrigger').outerWidth() -
                          TRANSLATION_LISTS_BUFFER;
        maxDstLangsWidth = $(window).width() - $('#dstLanguagesDropdownTrigger').offset().left - TRANSLATION_LISTS_BUFFER;
        $('#srcLanguages').removeClass('dropdown-menu-left').addClass('dropdown-menu-right');
        $('#dstLanguages').removeClass('dropdown-menu-right').addClass('dropdown-menu-left');
        $('.translateBtn').removeClass('ml-auto').addClass('mr-auto');
    }

    // then, prevent all the columns from getting too wide
    maxSrcLangsWidth = Math.min(TRANSLATION_LIST_MAX_WIDTH, maxSrcLangsWidth);
    maxDstLangsWidth = Math.min(TRANSLATION_LIST_MAX_WIDTH, maxDstLangsWidth);

    // finally, pick the ideal number of columns (up to limitations from the maximum overall width and the imposed maximum)
    var numSrcCols = Math.min(
            Math.ceil(srcLangs.length / TRANSLATION_LIST_IDEAL_ROWS),
            Math.floor(maxSrcLangsWidth / minColumnWidth),
            TRANSLATION_LIST_MAX_COLUMNS
        ),
        numDstCols = Math.min(
            Math.ceil(dstLangs.length / TRANSLATION_LIST_IDEAL_ROWS),
            Math.floor(maxDstLangsWidth / minColumnWidth),
            TRANSLATION_LIST_MAX_COLUMNS
        );

    var srcLangsPerCol = Math.ceil(srcLangs.length / numSrcCols),
        dstLangsPerCol = Math.ceil(dstLangs.length / numDstCols);

    for(var i = 0; i < numSrcCols; i++) {
        while(i * srcLangsPerCol < srcLangs.length && isVariant(srcLangs[i * srcLangsPerCol])) {
            srcLangsPerCol++;
        }
    }

    for(i = 0; i < numDstCols; i++) {
        while(i * dstLangsPerCol < dstLangs.length && isVariant(dstLangs[i * dstLangsPerCol])) {
            dstLangsPerCol++;
        }
    }

    for(i = 0; i < numSrcCols; i++) {
        var numSrcLang = srcLangsPerCol * i;
        var srcLangCol = $('<div class="languageCol">').appendTo($('#srcLanguages .row'));

        for(var j = numSrcLang; j < srcLangs.length && j < numSrcLang + srcLangsPerCol; j++) {
            var langCode = srcLangs[j];
            var langName = getLangByCode(langCode);
            var langClasses = 'languageName';
            if(isVariant(langCode)) {
                langClasses += ' languageVariant';
            }
            srcLangCol.append(
                $('<div class="' + langClasses + '"></div>')
                    .attr('data-code', langCode)
                    .text(langName)
            );
        }
    }

    for(i = 0; i < numDstCols; i++) {
        var numDstLang = dstLangsPerCol * i;
        var dstLangCol = $('<div class="languageCol">').appendTo($('#dstLanguages .row'));

        for(j = numDstLang; j < dstLangs.length && j < numDstLang + dstLangsPerCol; j++) {
            langCode = dstLangs[j];
            langName = getLangByCode(langCode);
            langClasses = 'languageName';
            if(isVariant(langCode)) {
                langClasses += ' languageVariant';
            }
            dstLangCol.append(
                $('<div class="' + langClasses + '"></div>')
                    .attr('data-code', langCode)
                    .text(langName)
            );
        }
    }

    $('#srcLanguages').css('min-width', numSrcCols * minColumnWidth);
    $('#dstLanguages').css('min-width', numDstCols * minColumnWidth);
    $('#srcLanguages .languageCol').css('width', (100.0 / numSrcCols) + '%');
    $('#dstLanguages .languageCol').css('width', (100.0 / numDstCols) + '%');

    $('.langSelect option[value!=detect]').remove();
    $.each(srcLangs, function () {
        $('#srcLangSelect').append(
            $('<option></option>')
                .prop('value', this)
                .html(getLangByCode(this))
        );
    });
    $.each(dstLangs, function () {
        $('#dstLangSelect').append(
            $('<option></option>')
                .prop('value', this)
                .html(getLangByCode(this))
        );
    });

    $('#srcLangSelect').val(curSrcLang);
    $('#dstLangSelect').val(curDstLang);

    muteLanguages();

    if(srcLangs.length === 1) {
        $('#srcLangSelectors div.btn-group').hide();
    }
    if(dstLangs.length === 1) {
        $('#dstLangSelectors div.btn-group').hide();
    }

    function sortTranslationList() {
        var sortLocale = (locale && locale in iso639Codes) ? iso639Codes[locale] : locale;

        function compareLangCodes(a, b) {
            var aVariant = a.split('_'), bVariant = b.split('_');
            var directCompare;
            try {
                directCompare = getLangByCode(aVariant[0]).localeCompare(getLangByCode(bVariant[0]), sortLocale);
            }
            catch(e) {
                directCompare = getLangByCode(aVariant[0]).localeCompare(getLangByCode(bVariant[0]));
            }

            if(aVariant[1] && bVariant[1] && aVariant[0] === bVariant[0]) {
                return directCompare;
            }
            else if(aVariant[1] && aVariant[0] === b) {
                return 1;
            }
            else if(bVariant[1] && bVariant[0] === a) {
                return -1;
            }
            else {
                return directCompare;
            }
        }

        srcLangs = srcLangs.sort(compareLangCodes);
        dstLangs = dstLangs.sort(function (a, b) {
            var possibleDstLangs = pairs[curSrcLang] || [];

            function isPossible(lang) {
                return possibleDstLangs.indexOf(lang) !== -1;
            }

            function isFamilyPossible(lang) {
                var parent = parentLang(lang);
                return isPossible(lang) ||
                    possibleDstLangs.indexOf(parent) !== -1 ||
                    possibleDstLangs.some(function (possibleLang) {
                        return parentLang(possibleLang) === parent;
                    });
            }

            var aParent = parentLang(a), bParent = parentLang(b);
            var aFamilyPossible = isFamilyPossible(a), bFamilyPossible = isFamilyPossible(b);
            if(aFamilyPossible === bFamilyPossible) {
                if(aParent === bParent) {
                    var aVariant = isVariant(a), bVariant = isVariant(b);
                    if(aVariant && bVariant) {
                        var aPossible = isPossible(a), bPossible = isPossible(b);
                        if(aPossible === bPossible) {
                            return compareLangCodes(a, b);
                        }
                        else if(aPossible) {
                            return -1;
                        }
                        else {
                            return 1;
                        }
                    }
                    else if(aVariant) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                }
                else {
                    return compareLangCodes(a, b);
                }
            }
            else if(aFamilyPossible) {
                return -1;
            }
            else {
                return 1;
            }
        });
    }
}

function translate(ignoreIfEmpty) {
    if(translationTimer) {
        clearTimeout(translationTimer);
    }

    if($('div#translateWebpage').is(':visible') || isURL($('#originalText').val())) {
        translateWebpage(ignoreIfEmpty);
    }
    else if($('div#translateText').is(':visible')) {
        translateText(ignoreIfEmpty);
    }
    else if($('div#docTranslation').is(':visible')) {
        translateDoc();
    }
}

function translateText(ignoreIfEmpty) {
    function handleTranslateSuccessResponse(data) {
        if(data.responseStatus === HTTP_OK_CODE) {
            $('#translatedText').val(data.responseData.translatedText);
            $('#translatedText').removeClass('notAvailable text-danger');
        }
        else {
            translationNotAvailable();
        }
    }

    var originalText /*: string */ = removeSoftHyphens($('#originalText').val());

    if(!originalText && ignoreIfEmpty) {
        return;
    }

    if($('div#translateText').is(':visible')) {
        if(pairs[curSrcLang] && pairs[curSrcLang].indexOf(curDstLang) !== -1) {
            sendEvent('translator', 'translate', curSrcLang + '-' + curDstLang, originalText.length);

            if(translateRequest) {
                translateRequest.abort();
                clearTimeout(apyRequestTimeout);
            }

            var endpoint/*: string */;
            var request /*: { langpairs?: string, langpair?: string, q: string, markUnknown: string } */ = {
                q: originalText, // eslint-disable-line id-length
                markUnknown: $('#markUnknown').prop('checked') ? 'yes' : 'no'
            };

            if($('input#chainedTranslation').prop('checked') && config.TRANSLATION_CHAINING) {
                endpoint = '/translateChain';
                request.langpairs = curSrcLang + '|' + curDstLang;
            }
            else {
                endpoint = '/translate';
                request.langpair = curSrcLang + '|' + curDstLang;
            }

            translateRequest = callApy({
                data: request,
                success: handleTranslateSuccessResponse,
                error: translationNotAvailable,
                complete: function () {
                    ajaxComplete();
                    translateRequest = null;
                }
            }, endpoint);
        }
        else {
            translationNotAvailable();
        }
    }
}

function translateDoc() {
    var validPair = pairs[curSrcLang] && pairs[curSrcLang].indexOf(curDstLang) !== -1;
    var file = droppedFile ? droppedFile : null;
    var fileInput /*: HTMLInputElement */ = ($('input#fileInput')[0] /*: any */);

    if(fileInput.files.length > 0 && fileInput.files[0].size !== 0) {
        file = fileInput.files[0];
    }

    if(validPair && file) {
        if(file.size > UPLOAD_FILE_SIZE_LIMIT) {
            docTranslateError(getDynamicLocalization('File_Too_Large'), 'File_Too_Large');
        }
        else {
            // Keep in sync with accept attribute of input#fileInput:
            var allowedMimeTypes = [
                '', // epiphany-browser gives this instead of a real MIME type
                'text/plain', 'text/html',
                'text/rtf', 'application/rtf',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                // 'application/msword', 'application/vnd.ms-powerpoint', 'application/vnd.ms-excel'
                'application/vnd.oasis.opendocument.text',
                'application/x-latex', 'application/x-tex'
            ];

            if(allowedMimeTypes.indexOf(file.type) !== -1) {
                $('span#uploadError').fadeOut('fast');
                $('a#fileDownload').hide();
                $('span#uploadError').hide();
                $('input#fileInput').prop('disabled', true);
                $('button#translate').prop('disabled', true);

                // $FlowFixMe
                var xhr = new XMLHttpRequest({mozSystem: true});
                xhr.addEventListener('progress', updateProgressBar, false);
                if(xhr.upload) {
                    xhr.upload.onprogress = updateProgressBar;
                }
                var fileName = file.name;
                xhr.onreadystatechange = function () {
                    if(this.readyState === XHR_LOADING) {
                        $('div#fileLoading').fadeIn('fast');
                        $('div#fileUploadProgress').parent().fadeIn('fast', function () {
                            updateProgressBar({'loaded': 1, 'total': 1, 'position': undefined, 'totalSize': undefined});
                        });
                    }
                    else if(this.readyState === XHR_DONE && xhr.status === HTTP_OK_CODE) {
                        $('div#fileUploadProgress').parent().fadeOut('fast');
                        $('div#fileLoading').fadeOut('fast', function () {
                            if(typeof window.navigator.msSaveBlob !== 'undefined') {
                                // IE file download workaround
                                $('a#fileDownload')
                                    .click(function () {
                                        window.navigator.msSaveBlob(xhr.response, fileName);
                                    });
                            }
                            else if(/.*(?!chrome|android).*(version\/\d\.|Mobile).*safari/i.test(window.navigator.userAgent) &&
                                !/chrome/i.test(window.navigator.userAgent)) {
                                /* Safari <9 + Mobile file download workaround
                                 * Tests User Agent against a regexp to detect if the user is on older or mobile version of
                                 * Safari and then runs another test to eliminate Chrome, which also include Safari in UA.
                                 */
                                var reader = new FileReader();
                                reader.onload = function () {
                                    $('a#fileDownload')
                                        .click(function () {
                                            // Flow infers incorrect type ArrayBuffer
                                            var result /*: string */ = (reader.result /*: any */);
                                            window.location.href = result.replace(/^data:[^;]*;/, 'data:attachment/file;');
                                        });
                                };
                                reader.readAsDataURL(xhr.response);
                            }
                            // File download for modern browsers and right-click to save
                            var URL = window.URL || window.webkitURL;
                            $('a#fileDownload')
                                .attr('href', URL.createObjectURL(xhr.response))
                                .attr('download', fileName)
                                .fadeIn('fast');
                            $('span#fileDownloadText').text(getDynamicLocalization('Download_File').replace('{{fileName}}', fileName));
                            $('button#translate').prop('disabled', false);
                            $('input#fileInput').prop('disabled', false);
                        });
                    }
                    else if(this.status >= HTTP_BAD_REQUEST_CODE) {
                        docTranslateError(getDynamicLocalization('Not_Available'), 'Not_Available');
                    }
                };
                xhr.onerror = function () {
                    docTranslateError(getDynamicLocalization('Not_Available'), 'Not_Available');
                };

                updateProgressBar({'loaded': 0, 'total': 1, 'position': undefined, 'totalSize': undefined});
                $('div#fileUploadProgress').parent().fadeIn('fast');
                xhr.open('post', config.APY_URL + '/translateDoc', true);
                xhr.responseType = 'blob';
                var fileData = new FormData();
                fileData.append('langpair', curSrcLang + '|' + curDstLang);
                fileData.append('markUnknown', $('#markUnknown').prop('checked') ? 'yes' : 'no');
                fileData.append('file', file);
                xhr.send(fileData);
                sendEvent('translator', 'translateDoc', curSrcLang + '-' + curDstLang, file.size);
            }
            else {
                console.warn('Browser gave MIME type as', file.type);
                docTranslateError(getDynamicLocalization('Format_Not_Supported'), 'Format_Not_Supported');
            }
        }
    }
    else if(file) {
        docTranslateError(getDynamicLocalization('Not_Available'), 'Not_Available');
    }

    function updateProgressBar(ev /*: ProgressEvent | {'total': number, 'loaded': number} */) {
        var progress = ev.loaded / ev.total;
        var percentDone = Math.floor(progress * 1000) / 10;
        $('div#fileUploadProgress').attr('aria-valuenow', percentDone).css('width', percentDone + '%');
    }

    function docTranslateError(errorMessage /*: string */, errorTextName /*: string */) {
        $('div#fileUploadProgress').parent().fadeOut('fast', function () {
            $('span#uploadError')
                .text(errorMessage)
                .attr('data-text', errorTextName)
                .fadeIn('fast');
        });
        $('a#fileDownload').fadeOut('fast');
        $('div#fileLoading').fadeOut('fast');
        $('button#translate').prop('disabled', false);
        $('input#fileInput').prop('disabled', false);
        console.error(errorMessage);
    }
}

function translateWebpage(ignoreIfEmpty /*: ?boolean */) {
    function webpageTranslationNotAvailable(data) {
        $('#translatedWebpage').replaceWith(
            $('<div id="translatedWebpage" class="notAvailable text-danger w-100 pl-2 pt-2"></div>')
                .text(getDynamicLocalization('Not_Available'))
        );

        if(data) {
            console.warn('Webpage translation failed', data.message, data.explanation);
        }
    }

    function handleTranslateWebpageSuccessResponse(data) {
        function cleanPage(html /*: string */) /*: string */ {
            // Pages like https://goo.gl/PiZyW3 insert noise using document.write that
            // 1. makes things enormously slow, and 2. completely mess up styling so e.g. you
            // have to scroll through a full screen of whitespace before reaching content.
            // This might mess things up some places – needs testing – but on the other hand
            // most uses of document.write are evil.
            return html.replace(/document\.write\(/g, 'console.log("document.write "+');
        }

        var translatedHtml /*: string */ = data.responseData.translatedText;

        if(data.responseStatus === HTTP_OK_CODE && translatedHtml) {
            var iframe /*: HTMLIFrameElement */ = ($('<iframe id="translatedWebpage" frameborder="0"></iframe>')[0] /*: any */);
            $('#translatedWebpage').replaceWith(iframe);
            iframe.contentWindow.document.open();
            iframe.contentWindow.document.write(cleanPage(translatedHtml));
            iframe.contentWindow.document.close();

            $(iframe).on('load', function () {
                var contents = $(iframe).contents();
                contents.find('head').append($('<base>').attr('href', $('input#webpage').val()));

                $.each(contents.find('a'), function (index, a) {
                    var href = a.href;
                    $(a).on('click', function () {
                        $('#webpage').val(href);
                        translateWebpage();
                    });
                    a.href = '#';
                    a.target = '';
                });

                if(!contents.find('body').text().trim()) {
                    webpageTranslationNotAvailable();
                }
            });
        }
        else {
            webpageTranslationNotAvailable(data);
        }
    }

    function handleTranslateWebpageErrorResponse(jqXHR) {
        webpageTranslationNotAvailable(jqXHR.responseJSON);
    }

    persistChoices('translator', true);

    if(!$('div#translateWebpage').is(':visible')) {
        showTranslateWebpageInterface($('#originalText').val().trim());
    }

    var url /*: string */ = $('input#webpage').val();

    if(!url && ignoreIfEmpty) {
        return;
    }

    if(!isURL(url)) {
        webpageTranslationNotAvailable();
        return;
    }

    if(pairs[curSrcLang] && pairs[curSrcLang].indexOf(curDstLang) !== -1) {
        sendEvent('translator', 'translateWebpage', curSrcLang + '-' + curDstLang);

        if(translateRequest) {
            translateRequest.abort();
            clearTimeout(apyRequestTimeout);
        }

        $('iframe#translatedWebpage').animate({'opacity': 0.75}, 'fast');
        translateRequest = callApy({
            data: {
                'langpair': curSrcLang + '|' + curDstLang,
                'markUnknown': 'no',
                'url': url
            },
            dataType: 'json',
            success: handleTranslateWebpageSuccessResponse,
            error: handleTranslateWebpageErrorResponse,
            complete: function () {
                ajaxComplete();
                translateRequest = null;
                $('iframe#translatedWebpage').animate({'opacity': 1}, 'fast');
            }
        }, '/translatePage', true);
    }
}

function showTranslateWebpageInterface(url /*: ?string */, ignoreIfEmpty /*: ?boolean */) {
    $('#srcLangSelectors').removeClass('col-sm-11').addClass('col-sm-9');

    $('div#translateText').fadeOut('fast', function () {
        $('input#webpage').attr({
            'required': true,
            'novalidate': false
        });
        $('button#cancelTranslateWebpage').fadeIn('fast').addClass('cancelTranslateWebpage');
        $('div#translateWebpage').fadeIn('fast');
        updateDetect(false);

        if(url) {
            $('input#webpage').val(url);
        }

        window.location.hash = 'webpageTranslation';
        translateWebpage(ignoreIfEmpty);
    });
}

function updateDetect(active /*: bool */) {
    var wasActive;

    if(active) {
        wasActive = $('#detect').hasClass('activeAfterCancel');

        if(wasActive) {
            $('.srcLang').removeClass('active');
            $('#detect').addClass('active');
            handleDetectLanguageSuccessComplete();
            $('#detect').removeClass('activeAfterCancel');
        }

        $('#detect, #srcLangSelect option[value="detect"]').prop('disabled', false);
        $('#detect').removeClass('disabledLang');
    }
    else {
        wasActive = $('#detect').hasClass('active');

        if(wasActive) {
            $('#srcLang1').click();
            $('#detect').addClass('activeAfterCancel');
        }

        $('#detect, #srcLangSelect option[value="detect"]').prop('disabled', true);
        $('#detect').addClass('disabledLang');
    }

    persistChoices('translator');
    return wasActive;
}

function detectLanguage() {
    var originalText /*: string */ = $('#originalText').val();

    if(translateRequest) {
        translateRequest.abort();
        clearTimeout(apyRequestTimeout);
    }

    translateRequest = callApy({
        data: {
            'q': originalText
        },
        success: handleDetectLanguageSuccessResponse,
        error: handleDetectLanguageErrorResponse,
        complete: function () {
            ajaxComplete();
            translateRequest = null;
        }
    }, '/identifyLang');

    return translateRequest;

    function handleDetectLanguageSuccessResponse(data) {
        var possibleLanguages /*: string[][] */ = [];
        for(var lang in data) {
            possibleLanguages.push([lang.indexOf('-') !== -1 ? lang.split('-')[0] : lang, data[lang]]);
        }
        possibleLanguages.sort(function (a, b) {
            return parseInt(b[1], 10) - parseInt(a[1], 10);
        });

        var oldSrcLangs /*: string[] */ = recentSrcLangs;
        recentSrcLangs = [];
        for(var i = 0; i < possibleLanguages.length; i++) {
            if(recentSrcLangs.length < TRANSLATION_LIST_BUTTONS && possibleLanguages[i][0] in pairs) {
                recentSrcLangs.push(possibleLanguages[i][0]);
            }
        }
        recentSrcLangs = recentSrcLangs.concat(oldSrcLangs);
        if(recentSrcLangs.length > TRANSLATION_LIST_BUTTONS) {
            recentSrcLangs = recentSrcLangs.slice(0, TRANSLATION_LIST_BUTTONS);
        }

        curSrcLang = recentSrcLangs[0];
        autoSelectDstLang();
        $('#srcLangSelect').val(curSrcLang);
        handleDetectLanguageSuccessComplete();
    }

    function handleDetectLanguageErrorResponse() {
        $('#srcLang1').click();
    }
}

function handleDetectLanguageSuccessComplete() {
    muteLanguages();
    $('#detectedText').parent('.srcLang').attr('data-code', curSrcLang);
    refreshLangList();
    $('#detectedText').show();
    $('#detectText').hide();
}

function translationNotAvailable() {
    $('#translatedText')
        .val(getDynamicLocalization('Not_Available'))
        .text(getDynamicLocalization('Not_Available'))
        .addClass('notAvailable text-danger');
}

function muteLanguages() {
    var possibleDstLangs = pairs[curSrcLang] || [];

    $('.languageName.text-muted').removeClass('text-muted');
    $('.dstLang').removeClass('disabledLang').prop('disabled', false);

    $.each($('#dstLanguages .languageName'), function () {
        if(possibleDstLangs.indexOf($(this).attr('data-code')) === -1) {
            $(this).addClass('text-muted');
        }
    });

    $.each($('.dstLang'), function () {
        if(possibleDstLangs.indexOf($(this).attr('data-code')) === -1) {
            $(this).addClass('disabledLang').prop('disabled', true);
        }
    });

    $.each($('#dstLangSelect option'), function (i, element) {
        $(element).prop('disabled', !pairs[curSrcLang] || pairs[curSrcLang].indexOf($(element).val()) === -1);
    });
}

function autoSelectDstLang() {
    var possibleDstLangs = pairs[curSrcLang] || [];

    // currently selected destination language works
    if(possibleDstLangs.indexOf(curDstLang) !== -1) {
        return;
    }

    // prefer a recently selected destination language
    var newDstLang/*: ?string */;
    for(var i = 0; i < recentDstLangs.length; i++) {
        if(possibleDstLangs.indexOf(recentDstLangs[i]) !== -1) {
            newDstLang = recentDstLangs[i];
            break;
        }
    }

    // otherwise, pick the first possible destination language
    if(!newDstLang && possibleDstLangs.length > 0) {
        var filteredPossibleDstLangs = filterLangList(possibleDstLangs);
        if(filteredPossibleDstLangs.length > 0) {
            newDstLang = filterLangList(possibleDstLangs)[0];
        }
    }

    curDstLang = newDstLang || curDstLang;

    if(recentDstLangs.indexOf(curDstLang) === -1) {
        handleNewCurrentLang(curDstLang, recentDstLangs, 'dstLang');
    }
    else {
        $('.dstLang').removeClass('active');
        refreshLangList();
        $('.dstLang[data-code=' + curDstLang + ']').addClass('active');
        muteLanguages();
        localizeInterface();
        translateText();
    }

    $('#dstLangSelect').val(curDstLang).change();
}

function setCurSrcLang(lang /*: string */) {
    curSrcLang = lang;
    return lang;
}

function setCurDstLang(lang /*: string */) {
    curDstLang = lang;
    return lang;
}

function setRecentSrcLangs(langs /*: string[] */) {
    recentSrcLangs = langs;
    return langs;
}

function setRecentDstLangs(langs /*: string[] */) {
    recentDstLangs = langs;
    return langs;
}

function setDefaultSrcLang() {
    function validSrcLang(lang) {
        return languages[lang] && pairs[iso639CodesInverse[lang]];
    }

    function convertBCP47LangCode(lang) {
        var iso639Lang;

        // converts variant format
        iso639Lang = lang.replace('-', '_');

        // BCP 47 prefers shortest code, we prefer longest
        if(isVariant(iso639Lang)) {
            var splitLang = iso639Lang.split('_', 2);
            if(iso639CodesInverse[splitLang[0]]) {
                iso639Lang = iso639CodesInverse[splitLang[0]] + '_' + splitLang[1];
            }
        }

        return iso639Lang;
    }

    // default to first available browser preference pair
    var prefSrcLang;

    var browserLangs = window.navigator.languages; // Chrome, Mozilla and Safari
    if(browserLangs) {
        for(var i = 0; i < browserLangs.length; ++i) {
            var isoLang = convertBCP47LangCode(browserLangs[i]);
            if(validSrcLang(isoLang)) {
                prefSrcLang = isoLang;
                break;
            }
        }
    }

    var ieLang = window.navigator.userlanguage || window.navigator.browserlanguage || window.navigator.language;
    if(!prefSrcLang && ieLang) {
        var ieIsoLang = convertBCP47LangCode(ieLang);
        if(validSrcLang(ieIsoLang)) {
            prefSrcLang = ieIsoLang;
        }
        else if(validSrcLang(iso639Codes[parentLang(ieIsoLang)])) {
            prefSrcLang = iso639Codes[parentLang(ieIsoLang)];
        }
    }

    if(!prefSrcLang) {
        // first available overall pair
        for(var srcLang in pairs) {
            prefSrcLang = srcLang;
            break;
        }
        return; // unreachable
    }

    setCurSrcLang(iso639CodesInverse[prefSrcLang]);
    handleNewCurrentLang(curSrcLang, recentSrcLangs, 'srcLang');
    autoSelectDstLang();
}

/*:: export {curDstLang, curSrcLang, dstLangs, getPairs, handleNewCurrentLang, pairs, populateTranslationList, recentDstLangs,
    refreshLangList, recentSrcLangs, setCurDstLang, setCurSrcLang, setRecentDstLangs, setRecentSrcLangs, showTranslateWebpageInterface,
    srcLangs} */

/*:: import {synchronizeTextareaHeights, modeEnabled, ajaxSend, ajaxComplete, filterLangList, onlyUnique, sendEvent, callApy,
    apyRequestTimeout, removeSoftHyphens, parentLang, isVariant} from "./util.js" */
/*:: import {ENTER_KEY_CODE, HTTP_BAD_REQUEST_CODE, HTTP_OK_CODE, SPACE_KEY_CODE, XHR_DONE, XHR_LOADING} from "./util.js" */
/*:: import {persistChoices, restoreChoices} from "./persistence.js" */
/*:: import {localizeInterface, getLangByCode, getDynamicLocalization, locale, iso639Codes, langDirection, languages,
    iso639CodesInverse} from "./localization.js" */
/*:: import {readCache, cache} from "./persistence.js" */
/*:: import {isURL} from "./util.js" */
// @flow

var analyzers = {}, analyzerData = {};
var currentAnalyzerRequest;

/* exported analyzerData, analyzers, getAnalyzers, populateAnalyzerList, populateSecondaryAnalyzerList */

/* global config, modeEnabled, persistChoices, restoreChoices, localizeInterface, readCache, ajaxSend, ajaxComplete,
    cache, getLangByCode, filterLangPairList, allowedLang, sendEvent, callApy, apyRequestTimeout, removeSoftHyphens */
/* global ENTER_KEY_CODE */

if(modeEnabled('analyzation')) {
    $(document).ready(function () {
        $('#analysisForm').submit(function () {
            analyze();
            persistChoices('analyzer', true);
        });

        $('#primaryAnalyzerMode').change(function () {
            populateSecondaryAnalyzerList();
            localizeInterface();
            persistChoices('analyzer');
        });

        $('#secondaryAnalyzerMode').change(function () {
            persistChoices('analyzer');
        });

        $('#morphAnalyzerInput').keydown(function (e /*: JQueryKeyEventObject */) {
            if(e.keyCode === ENTER_KEY_CODE && !e.shiftKey) {
                e.preventDefault();
                analyze();
            }
        });

        $('#morphAnalyzerInput').on('input propertychange', function () {
            persistChoices('analyzer');
        });

        $('#morphAnalyzerInput').blur(function () {
            persistChoices('analyzer', true);
        });
    });
}

function getAnalyzers() /*: JQueryPromise<any> */ {
    var deferred = $.Deferred();

    if(config.ANALYZERS) {
        analyzerData = config.ANALYZERS;
        populateAnalyzerList(analyzerData);
        deferred.resolve();
    }
    else {
        var analyzers = readCache('analyzers', 'LIST_REQUEST');
        if(analyzers) {
            analyzerData = analyzers;
            populateAnalyzerList(analyzers);
            deferred.resolve();
        }
        else {
            console.warn('Analyzers cache ' + (analyzers ? 'miss' : 'stale') + ', retrieving from server');
            $.jsonp({
                url: config.APY_URL + '/list?q=analyzers',
                beforeSend: ajaxSend,
                success: function (data, _textStatus, _xOptions) {
                    analyzerData = data;
                    populateAnalyzerList(analyzerData);
                    cache('analyzers', data);
                },
                error: function () {
                    console.error('Failed to get available analyzers');
                },
                complete: function () {
                    ajaxComplete();
                    deferred.resolve();
                }
            });
        }
    }

    return deferred.promise();
}

function populateAnalyzerList(data /*: {} */) {
    $('.analyzerMode').empty();

    analyzers = ({} /*: {[string]: string[] } */);
    for(var lang in data) {
        var analyzerLang = lang.indexOf('-') !== -1 ? lang.split('-')[0] : lang;
        var group = analyzers[analyzerLang];
        if(group) {
            group.push(lang);
        }
        else {
            analyzers[analyzerLang] = [lang];
        }
    }

    var analyzersArray /*: [string, string][] */ = [];
    $.each(analyzers, function (analyzerLang /*: string */, lang /*: string */) {
        analyzersArray.push([analyzerLang, lang]);
    });
    analyzersArray = filterLangPairList(analyzersArray, function (analyzer) {
        return allowedLang(analyzer[0]);
    });
    analyzersArray.sort(function (a, b) {
        return getLangByCode(a[0]).localeCompare(getLangByCode(b[0]));
    });

    for(var i = 0; i < analyzersArray.length; i++) {
        lang = analyzersArray[i][0];
        $('#primaryAnalyzerMode').append($('<option></option').val(lang).text(getLangByCode(lang)));
    }

    restoreChoices('analyzer');
}

function populateSecondaryAnalyzerList() {
    var group /*: string[] */ = analyzers[$('#primaryAnalyzerMode').val()];
    $('#secondaryAnalyzerMode').empty();

    if(group) {
        if(group.length <= 1) {
            $('#secondaryAnalyzerMode').fadeOut('fast');
        }
        else {
            $('#secondaryAnalyzerMode').fadeIn('fast');
        }

        group.sort(function (a, b) {
            return a.length - b.length;
        });

        for(var i = 0; i < group.length; i++) {
            var lang = group[i];
            var langDisplay = lang.indexOf('-') !== -1
                ? getLangByCode(lang.split('-')[0]) + '-' + getLangByCode(lang.split('-')[1])
                : getLangByCode(lang);
            $('#secondaryAnalyzerMode').append($('<option></option').val(lang).text(langDisplay));
        }
    }
    else {
        $('#secondaryAnalyzerMode').fadeOut('fast');
    }
}

function analyze() {
    var input /*: string */ = removeSoftHyphens($('#morphAnalyzerInput').val());

    if(!$('#primaryAnalyzerMode').val() || input.trim() === '') {
        return;
    }

    var analyzerMode /*: string */ = analyzers[$('#primaryAnalyzerMode').val()].length > 1
        ? $('#secondaryAnalyzerMode').val()
        : analyzers[$('#primaryAnalyzerMode').val()][0];
    sendEvent('analyzer', 'analyze', analyzerMode, $('#morphAnalyzerInput').val().length);

    $('#morphAnalyzerOutput').addClass('blurred');

    if(currentAnalyzerRequest) {
        currentAnalyzerRequest.abort();
        clearTimeout(apyRequestTimeout);
    }

    currentAnalyzerRequest = callApy({
        data: {
            'lang': analyzerMode,
            'q': input
        },
        success: handleAnalyzeSuccessResponse,
        error: handleAnalyzeErrorResponse,
        complete: function () {
            ajaxComplete();
            currentAnalyzerRequest = null;
        }
    }, '/analyze');
}

function handleAnalyzeSuccessResponse(data /*: string[][] */) {
    var regex = /([^<]*)((<[^>]+>)*)/g;
    $('#morphAnalyzerOutput').html('<tbody></tbody>');
    for(var i = 0; i < data.length; i++) {
        var leftTD = $('<td class="text-right"></td>');
        var strong = $('<strong></strong>').text(data[i][1].trim());
        var arrow = $('<span></span>').html('&nbsp;&nbsp;&#8620;');
        leftTD.append(strong).append(arrow);

        var rightTD = $('<td class="text-left"></td>');
        var splitUnit = data[i][0].split('/');

        if(splitUnit[1][0] === '*') {
            rightTD.addClass('text-danger');
        }

        var tr = $('<tr></tr>').append(leftTD).append(rightTD);
        $('#morphAnalyzerOutput tbody').append(tr);

        var joinedMorphemes = {};
        for(var j = 1; j < splitUnit.length; j++) {
            var unit = splitUnit[j];
            var matches = unit.match(regex);

            if(matches && matches.length > 2) {
                for(var k = 1; k < matches.length - 1; k++) {
                    if(joinedMorphemes[matches[k]]) {
                        joinedMorphemes[matches[k]].push(unit);
                    }
                    else {
                        joinedMorphemes[matches[k]] = [unit];
                    }
                }
            }
            else {
                var unitDiv = $('<div></div>').html(formatUnit(unit));
                rightTD.append(unitDiv);
            }
        }
        $.each(joinedMorphemes, function (joinedMorpheme, units) {
            var morphemeDiv = $('<div></div>').html(formatUnit(joinedMorpheme));
            rightTD.append(morphemeDiv);
            for(var j = 0; j < units.length; j++) {
                var unitDiv = $('<div class="unit"></div>').html(formatUnit(units[j].match(regex)[0]));
                rightTD.append(unitDiv);
            }
        });
        $('#morphAnalyzerOutput').removeClass('blurred');
    }
}

function formatUnit(unit /*: string */) {
    var tagRegex = /<([^>]+)>/g, arrow = '&nbsp;&nbsp;&#8612;&nbsp;&nbsp;', tags /*: string[] */ = [];
    var tagMatch /*: ?string[] */ = tagRegex.exec(unit);
    while(tagMatch) {
        tags.push(tagMatch[1]);
        tagMatch = tagRegex.exec(unit);
    }
    var tagStartLoc = unit.indexOf('<');
    return unit.substring(0, tagStartLoc !== -1 ? tagStartLoc : unit.length) +
        (tags.length > 0 ? arrow + tags.join(' &#8901; ') : '');
}

function handleAnalyzeErrorResponse(xOptions, error /*: string */) {
    $('#morphAnalyzerOutput').text(error).removeClass('blurred');
}

/*:: export {analyzerData, analyzers, getAnalyzers, populateAnalyzerList, populateSecondaryAnalyzerList} */

/*:: import {ajaxComplete, ajaxSend, allowedLang, apyRequestTimeout, callApy, filterLangPairList,
    modeEnabled, sendEvent, removeSoftHyphens} from "./util.js" */
/*:: import {ENTER_KEY_CODE} from "./util.js" */
/*:: import {getLangByCode, localizeInterface} from "./localization.js" */
/*:: import {cache, persistChoices, readCache, restoreChoices} from "./persistence.js" */
// @flow

var generators = ({} /*: {[string]: string[]} */), generatorData = {};
var currentGeneratorRequest;

/* exported generatorData, generators, getGenerators, populateGeneratorList, populateSecondaryGeneratorList */

/* global config, modeEnabled, persistChoices, readCache, ajaxSend, ajaxComplete, filterLangPairList, allowedLang, analyzers, cache,
    localizeInterface, getLangByCode, sendEvent, restoreChoices, callApy, apyRequestTimeout */
/* global ENTER_KEY_CODE */

if(modeEnabled('generation')) {
    $(document).ready(function () {
        $('#generateForm').submit(function () {
            generate();
            persistChoices('generator', true);
        });

        $('#primaryGeneratorMode').change(function () {
            populateSecondaryGeneratorList();
            localizeInterface();
            persistChoices('generator');
        });

        $('#secondaryGeneratorMode').change(function () {
            persistChoices('generator');
        });

        $('#morphGeneratorInput').keydown(function (e /*: JQueryKeyEventObject */) {
            if(e.keyCode === ENTER_KEY_CODE && !e.shiftKey) {
                e.preventDefault();
                generate();
            }
        });

        $('#morphGeneratorInput').on('input propertychange', function () {
            persistChoices('generator');
        });

        $('#morphGeneratorInput').blur(function () {
            persistChoices('generator', true);
        });
    });
}

function getGenerators() /*: JQueryPromise<any> */ {
    var deferred = $.Deferred();

    if(config.GENERATORS) {
        generatorData = config.GENERATORS;
        populateGeneratorList(generatorData);
        deferred.resolve();
    }
    else {
        var generators = readCache('generators', 'LIST_REQUEST');
        if(generators) {
            generatorData = generators;
            populateGeneratorList(generators);
            deferred.resolve();
        }
        else {
            console.warn('Generators cache ' + (analyzers ? 'miss' : 'stale') + ', retrieving from server');
            $.jsonp({
                url: config.APY_URL + '/list?q=generators',
                beforeSend: ajaxSend,
                success: function (data, _textStatus, _xOptions) {
                    generatorData = data;
                    populateGeneratorList(generatorData);
                    cache('generators', data);
                },
                error: function (_xOptions, errorThrown) {
                    console.error('Failed to get available generators: ' + errorThrown);
                },
                complete: function (_xOptions, _errorThrown) {
                    ajaxComplete();
                    deferred.resolve();
                }
            });
        }
    }

    return deferred.promise();
}

function populateGeneratorList(data /*: {} */) {
    $('.generatorMode').empty();

    generators = {};
    for(var lang in data) {
        var generatorLang = lang.indexOf('-') !== -1 ? lang.split('-')[0] : lang;
        var group = generators[generatorLang];
        if(group) {
            group.push(lang);
        }
        else {
            generators[generatorLang] = [lang];
        }
    }

    var generatorArray /*: [string, string][] */ = [];
    $.each(generators, function (generatorLang /*: string */, lang /*: string */) {
        generatorArray.push([generatorLang, lang]);
    });
    generatorArray = filterLangPairList(generatorArray, function (generator /*: [string, string] */) {
        return allowedLang(generator[0]);
    });
    generatorArray.sort(function (a, b) {
        return getLangByCode(a[0]).localeCompare(getLangByCode(b[0]));
    });

    for(var i = 0; i < generatorArray.length; i++) {
        lang = generatorArray[i][0];
        $('#primaryGeneratorMode').append($('<option></option>').val(lang).text(getLangByCode(lang)));
    }

    restoreChoices('generator');
}

function populateSecondaryGeneratorList() {
    var group = generators[$('#primaryGeneratorMode').val()];
    $('#secondaryGeneratorMode').empty();

    if(group) {
        if(group.length <= 1) {
            $('#secondaryGeneratorMode').fadeOut('fast');
        }
        else {
            $('#secondaryGeneratorMode').fadeIn('fast');
        }

        group.sort(function (a, b) {
            return a.length - b.length;
        });

        for(var i = 0; i < group.length; i++) {
            var lang = group[i];
            var langDisplay = lang.indexOf('-') !== -1
                ? getLangByCode(lang.split('-')[0]) + '-' + getLangByCode(lang.split('-')[1])
                : getLangByCode(lang);
            $('#secondaryGeneratorMode').append($('<option></option').val(lang).text(langDisplay));
        }
    }
    else {
        $('#secondaryGeneratorMode').fadeOut('fast');
    }
}

function generate() {
    var input /*: string */ = $('#morphGeneratorInput').val();

    if(!$('#primaryGeneratorMode').val() || input.trim() === '') {
        return;
    }

    var generatorMode /*: string */ = generators[$('#primaryGeneratorMode').val()].length > 1
        ? $('#secondaryGeneratorMode').val()
        : generators[$('#primaryGeneratorMode').val()][0];
    sendEvent('generator', 'generate', generatorMode, $('#morphGeneratorInput').val().length);

    $('#morphGenOutput').addClass('blurred');

    if(currentGeneratorRequest) {
        currentGeneratorRequest.abort();
        clearTimeout(apyRequestTimeout);
    }

    currentGeneratorRequest = callApy({
        data: {
            'lang': generatorMode,
            'q': input
        },
        success: handleGenerateSuccessResponse,
        error: handleGenerateErrorResponse,
        complete: function () {
            ajaxComplete();
            currentGeneratorRequest = null;
        }
    }, '/generate');
}

function handleGenerateSuccessResponse(data) {
    $('#morphGenOutput').empty();
    for(var i = 0; i < data.length; i++) {
        var div = $('<div data-toggle="tooltip" data-placement="auto" data-html="true"></div>');
        var strong = $('<strong></strong>').text(data[i][1].trim());
        var span = $('<span></span>').html('&nbsp;&nbsp;&#8620;&nbsp;&nbsp;' + data[i][0]);
        div.append(strong).append(span);
        $('#morphGenOutput').append(div);
    }
    $('#morphGenOutput').removeClass('blurred');
}

function handleGenerateErrorResponse(xOptions, error) {
    $('#morphGenOutput').text(error);
    $('#morphGenOutput').removeClass('blurred');
}

/*:: export {generatorData, generators, getGenerators, populateGeneratorList, populateSecondaryGeneratorList} */

/*:: import {ajaxComplete, ajaxSend, allowedLang, apyRequestTimeout, callApy, ENTER_KEY_CODE, filterLangPairList, modeEnabled,
    sendEvent} from "./util.js" */
/*:: import {cache, persistChoices, readCache, restoreChoices} from "./persistence.js" */
/*:: import {getLangByCode, localizeInterface} from "./localization.js" */
/*:: import {getPairs} from "./translator.js" */
/*:: import {analyzers} from "./analyzer.js" */
// @flow

var currentSandboxRequest;

/* global config, ajaxSend, ajaxComplete, persistChoices, restoreChoices */
/* global ENTER_KEY_CODE */

if(!config.ENABLED_MODES || config.ENABLED_MODES.indexOf('sandbox') !== -1) {
    $(document).ready(function () {
        $('#sandboxForm').submit(function () {
            request();
        });

        $('#endpoint').attr('data-original-title', config.APY_URL);
        $('[data-toggle="tooltip"]').tooltip();

        $('#sandboxInput').keydown(function (e /*: JQueryKeyEventObject */) {
            if(e.keyCode === ENTER_KEY_CODE && !e.shiftKey) {
                e.preventDefault();
                request();
            }
        });

        $('#sandboxInput').on('input propertychange', function () {
            persistChoices('sandbox');
        });

        restoreChoices('sandbox');
    });
}

function request() {
    var input /*: string */ = $('#sandboxInput').val();
    if(input.trim() === '') {
        return;
    }

    $('#sandboxOutput').addClass('blurred');
    var startTime = new Date().getTime();
    if(currentSandboxRequest) {
        currentSandboxRequest.abort();
    }
    currentSandboxRequest = $.jsonp({
        url: config.APY_URL + input,
        beforeSend: ajaxSend,
        success: function (data, _textStatus, _jqXHR) {
            $('#sandboxOutput').text(JSON.stringify(data, undefined, 3)).removeClass('blurred');
        },
        error: function (xOptions, errorThrown) {
            $('#sandboxOutput').text(errorThrown).removeClass('blurred');
        },
        complete: function (_xOptions, _errorThrown) {
            ajaxComplete();
            $('#time').text(new Date().getTime() - startTime + ' ms');
            currentSandboxRequest = null;
        }
    });
}

/*:: import {ajaxSend, ajaxComplete} from "./util.js" */
/*:: import {ENTER_KEY_CODE} from "./util.js" */
/*:: import {persistChoices, restoreChoices} from "./persistence.js" */
/*:: import {locale} from "./localization.js" */
