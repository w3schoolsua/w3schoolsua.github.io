/*main.js?v=1.0.28*/
var TopNavBar = {
    defaultHeight: '88px',
    mainNavHeightPx: 56,
    secondaryNavHeightPx: 32,
    fullHeight: '100vh',
    element: document.getElementById('top-nav-bar'),
    // searchFromBox: false,
    // fullScreenNav: false,
    // fullScreenSearchResults: false,
    parentLayoutNotifier: null,
    inIframe: null,
    location: null,
    env: null,
    loggedIn: null,
    configured: false,
    hasNetworkSecondaryNav: false,
    mobileNavScrollInterval: null,
    _debug: null,
};

window.TopNavBar = TopNavBar;

TopNavBar._menuSectionsInTab = {
    'tutorials': [
        'tutorials_html_css_links_list',
        'tutorials_data_analytics_links_list_desktop',
        'tutorials_web_building_links_list_desktop',
        'tutorials_javascript_links_list',
        'tutorials_backend_links_list'
    ],
    'exercises': [
        'exercises_html_css_links_list',
        'exercises_data_analytics_links_list_desktop',
        'exercises_javascript_links_list',
        'exercises_backend_links_list'
    ],
    'certified': [
        'certified_html_css_links_list',
        'certified_data_analytics_links_list_desktop',
        'certified_programs_links_list_desktop',
        'certified_javascript_links_list',
        'certified_backend_links_list'
    ]
};

TopNavBar._findInnerElements = function (parentElement, queryStr, callback) {
    var output = [];
    var hasCallback = typeof callback !== 'undefined';
    var elements = parentElement.querySelectorAll(queryStr);
    for (var index = 0; index < elements.length; index++) {
        output.push(elements[index]);
        if (hasCallback) {
            callback(elements[index], index);
        }
    }
    return output;
};

TopNavBar._loopArray = function (arr, callback) {
    for (var index = 0; index < arr.length; index++) {
        callback(arr[index], index);
    }
};

TopNavBar._loopObj = function (obj, callback) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            callback(obj[key], key);
        }
    }
};

TopNavBar._inIframe = function () {
    if (TopNavBar.inIframe !== null) {
        return TopNavBar.inIframe;
    }

    try {
        TopNavBar.inIframe = window.self !== window.top;
    } catch (e) {
        TopNavBar.inIframe = true;
    }

    return TopNavBar.inIframe;
}

TopNavBar._isDebugMode = function () {
    if (TopNavBar._debug !== null) {
        return TopNavBar._debug;
    }

    if (
        localStorage.getItem('TopNavBar.debug') === 'true'
    ) {
        TopNavBar._debug = true;
    } else {
        TopNavBar._debug = false;
    }

    return TopNavBar._debug;
};

TopNavBar._logDebug = function (message, data) {
    if (!TopNavBar._isDebugMode()) {
        return;
    }

    if (typeof data === 'undefined') {
        console.log('TopNavBar -> ' + message);
    } else {
        console.log('TopNavBar -> ' + message, data);
    }
}

TopNavBar._logWarning = (message, data) => {
    if (typeof data === 'undefined') {
        console.warn('TopNavBar -> ' + message);
    } else {
        console.warn('TopNavBar -> ' + message, data);
    }
}

TopNavBar.isExpanded = function () {
    var navs = [
        '#nav_tutorials',
        '#nav_exercises',
        '#nav_certified',
        '#nav_services',
        // '.tnb-mobile-nav',
    ];

    for (var i = 0; i < navs.length; i++) {
        var element = TopNavBar.element.querySelector(navs[i]);

        if (
            element
            && element.style.display !== 'none'
            && element.style.display !== ''
        ) {
            return true;
        };
    }

    if (TopNavBar.element.querySelector('.tnb-mobile-nav').classList.contains('tnb-active')) {
        return true;
    }

    return TopNavBar.googleSearchResultsShown();
};

TopNavBar._sendParentInitMessage = function () {
    window.parent.postMessage({
        'action': 'INIT',
        'expanded': false,
        'initHeight': TopNavBar.defaultHeight, // legacy
        'fullHeight': TopNavBar.fullHeight,
        'mainNavHeightPx': TopNavBar.mainNavHeightPx,
        'secondaryNavHeightPx': TopNavBar.secondaryNavHeightPx
    }, '*');
};

TopNavBar._patchNetworkLoginSignupLinks = function () {
    if (TopNavBar.env !== 'network') {
        return;
    }

    TopNavBar._findInnerElements(TopNavBar.element, '.tnb-login-btn', function (loginLinkElm) {
        loginLinkElm.href = 'https://profile.w3schools.com/log-in?redirect_url=' + encodeURIComponent(TopNavBar.location.href);
    });

    TopNavBar._findInnerElements(TopNavBar.element, '.tnb-signup-btn', function (signupLinkElm) {
        signupLinkElm.href = 'https://profile.w3schools.com/sign-up?redirect_url=' + encodeURIComponent(TopNavBar.location.href);
    });
}

TopNavBar._applyNoUpsellUiTweaks = function () {
    // action can't be reverted

    TopNavBar._findInnerElements(TopNavBar.element, '.tnb-paid-service', function (paidServiceElm) {
        paidServiceElm.remove();
    });

    TopNavBar._findInnerElements(TopNavBar.element, '.tnb-upgrade', function (upgradeElm) {
        upgradeElm.classList.add('w3-hide');
    });
}

TopNavBar.postInitConfig = function (prs) {
    TopNavBar._logDebug('postInitConfig');
    // return;

    // can be checked to avoid configuring twice
    TopNavBar.configured = true;

    if (
        typeof prs.sendParentInitMessage !== 'undefined'
        && prs.sendParentInitMessage === true
    ) { // optional prop required in billing setup
        TopNavBar._sendParentInitMessage();
    }

    TopNavBar.env = prs.env;

    TopNavBar.location = prs.location; // location required fields: href, hostname, pathname

    // secondary top nav bar local development
    // TopNavBar.hasNetworkSecondaryNav = true;
    TopNavBar.hasNetworkSecondaryNav = TopNavBar.env === 'network' && !TopNavBar.lite;

    if (TopNavBar.hasNetworkSecondaryNav) {
        SecondaryTopNavBar.postInitConfig(prs);
    }

    // execution order priority: high
    TopNavBar._applyUserSessionUiTweaks({
        loggedIn: prs.loggedIn,
        subscriptionPlan: prs.subscriptionPlan
    });

    // execution order priority: low
    TopNavBar._patchNetworkLoginSignupLinks();

    var featureFlags = prs.featureFlags;

    if (typeof featureFlags === 'undefined') {
        featureFlags = {
            'noUpsell': false,
        };
    }

    // execution order priority: low
    if (featureFlags.noUpsell) {
        TopNavBar._applyNoUpsellUiTweaks();
    }
}

TopNavBar._applyUserSessionUiTweaks = function (prs) {
    TopNavBar._logDebug('_applyUserSessionUiTweaks -> prs: ', prs);

    var loggedIn = prs.loggedIn;
    var subscriptionPlan = prs.subscriptionPlan;
    var initialLoggedInState = TopNavBar.loggedIn;
    var loggedInStateChanged = TopNavBar.loggedIn !== loggedIn;
    TopNavBar.loggedIn = loggedIn;

    TopNavBar._logDebug('_applyUserSessionUiTweaks -> state: ', {
        'loggedIn': loggedIn,
        'initialLoggedInState': initialLoggedInState,
        'loggedInStateChanged': loggedInStateChanged,
        'subscriptionPlan': subscriptionPlan
    });

    if (loggedIn) {
        TopNavBar._findInnerElements(document, '.user-authenticated', function (elm) {
            elm.classList.remove('w3-hide');
        });

        TopNavBar._findInnerElements(document, '.user-anonymous', function (elm) {
            elm.classList.add('w3-hide');
        });

        if (subscriptionPlan === 'diamond') {
            TopNavBar._findInnerElements(TopNavBar.element, '.tnb-upgrade', function (elm) {
                elm.classList.add('w3-hide');
            });
        } else { // free | pro
            TopNavBar._findInnerElements(TopNavBar.element, '.tnb-upgrade', function (elm) {
                elm.classList.remove('w3-hide');
            });
        }
    } else { // anonymous
        TopNavBar._findInnerElements(document, '.user-authenticated', function (elm) {
            elm.classList.add('w3-hide');
        });

        TopNavBar._findInnerElements(document, '.user-anonymous', function (elm) {
            elm.classList.remove('w3-hide');
        });

        TopNavBar._findInnerElements(TopNavBar.element, '.tnb-upgrade', function (elm) {
            elm.classList.add('w3-hide');
        });
    }
};

TopNavBar.init = function () {
    TopNavBar._logDebug('init');

    TopNavBar.location = window.location;

    // execution order priority: high
    TopNavBar.initUserPreferredTheme();

    // blind lookup
    var subscriptionPlan = UserSession.getUserSubscriptionPlan(null);

    var loggedIn = subscriptionPlan !== null;

    TopNavBar.loggedIn = loggedIn;

    if (subscriptionPlan === null) {
        subscriptionPlan = 'free';
    }

    // execution order priority: high
    TopNavBar._applyUserSessionUiTweaks({
        loggedIn: loggedIn,
        subscriptionPlan: subscriptionPlan
    });

    // execution order priority: high
    if (TopNavBar._inIframe()) {
        TopNavBar._iframeInit();
    }

    // execution order priority: low
    TopNavBar._attachMenuSortLogic();

    // execution order priority: low
    TopNavBar._attachNavEscapeListeners();
};

TopNavBar._callFunc = function (funcName, funcArgs) {
    if (funcName.indexOf('_') === 0) { // private function/method
        TopNavBar._logWarning('Function call forbidden -> funcName, funcArgs: ', {
            'funcName': funcName,
            'funcArgs': funcArgs,
        });

        return false;
    }

    if (typeof TopNavBar[funcName] !== 'function') {
        TopNavBar._logWarning('Function doesn\'t exist -> funcName, funcArgs: ', {
            'funcName': funcName,
            'funcArgs': funcArgs,
        });

        return false;
    }

    if (typeof funcArgs !== 'undefined') {
        return TopNavBar[funcName].apply(null, funcArgs);
    } else {
        return TopNavBar[funcName]();
    }
};

TopNavBar._iframeInit = function () {
    window.addEventListener('message', function (message) {
        TopNavBar._logDebug('message: ', message);

        var whitelistedOrigins = [
            'https://profile.w3schools.com',
            'https://my-learning.w3schools.com',
            'https://spaces.w3schools.com',
            'https://billing.w3schools.com',
            'https://campus.w3schools.com',
        ];

        if (!whitelistedOrigins.includes(message.origin)) {
            return;
        }

        var action = '';
        var data = null;

        if (typeof message.data.type !== 'undefined') {
            action = message.data.type;
            data = message.data.value;
        } else if (typeof message.data.action !== 'undefined') {
            action = message.data.action;
            data = message.data.data;
        }

        TopNavBar._logDebug('message -> action, data: ', {
            action: action,
            data: data,
        });

        if (action === 'CONFIG') {
            TopNavBar.postInitConfig(data);
        } else if (action === 'CALL_FUNCTION') { // TODO: (high) tighten security belt
            TopNavBar._callFunc(data.funcName, data.funcArgs);
        }
    });

    TopNavBar._sendParentInitMessage();

    TopNavBar.element.addEventListener('click', function (event) {
        TopNavBar.notifyParentAboutLayout('on click', event);
    });

    TopNavBar.element.addEventListener('keyup', function (event) {
        TopNavBar.notifyParentAboutLayout('on keyup', event);
    });

    TopNavBar.element.addEventListener('resize', function (event) {
        TopNavBar.notifyParentAboutLayout('on resize', event);
    });
}

TopNavBar.notifyParentAboutLayout = function (context, event) {
    if (!TopNavBar._inIframe()) {
        return;
    }

    TopNavBar._logDebug('notifyParentAboutLayout -> context, event: ', {
        'context': context,
        'event': event
    });

    clearTimeout(TopNavBar.parentLayoutNotifier);

    TopNavBar.parentLayoutNotifier = setTimeout(function () {
        var expanded = TopNavBar.isExpanded();

        window.parent.postMessage({
            'context': context,
            'action': 'LAYOUT',
            'expanded': expanded,
            'iframeHeight': expanded ? TopNavBar.fullHeight : TopNavBar.defaultHeight, // legacy
            'placeholderHeight': TopNavBar.defaultHeight, // legacy
            'fullHeight': TopNavBar.fullHeight,
            'mainNavHeightPx': TopNavBar.mainNavHeightPx,
            'secondaryNavHeightPx': TopNavBar.secondaryNavHeightPx
        }, '*');
    }, 100);
};

TopNavBar._attachNavEscapeListeners = function () {
    var navIds = [
        'tutorials',
        'exercises',
        'certified',
        'services'
    ];

    TopNavBar._loopArray(navIds, function (navId) {
        document.getElementById('nav_' + navId).addEventListener('keydown', function (event) {
            if (event.code === 'Escape') {
                TopNavBar.closeNavItem(navId);
            }
        });
    });
};

// < Google Search

TopNavBar.googleSearchInit = function () {
    TopNavBar._logDebug('googleSearchInit');

    var gSearchScriptElm = document.getElementById('gSearch');

    if (gSearchScriptElm == null) {
        var cx = uic_r_y();
        var gSearchScriptElmToInject = document.createElement('script');
        gSearchScriptElmToInject.id = 'gSearch';
        gSearchScriptElmToInject.type = 'text/javascript';
        gSearchScriptElmToInject.async = true;
        gSearchScriptElmToInject.src = 'https://www.google.com/cse/cse.js?cx=' + cx;

        var firstScriptElm = document.getElementsByTagName('script')[0];
        firstScriptElm.parentNode.insertBefore(gSearchScriptElmToInject, firstScriptElm);
    }

    TopNavBar.googleSearchFocusInput();
};

TopNavBar.googleSearchFocusInput = function () {
    TopNavBar._logDebug('googleSearchFocusInput');

    document.getElementById('tnb-google-search-input').focus();
};

TopNavBar.googleSearchResultsShown = function () {
    var googleSearchResults = TopNavBar.element.querySelector('.gsc-results-wrapper-overlay.gsc-results-wrapper-visible');

    return !!googleSearchResults;
};

TopNavBar.googleSearchResultsShownCallback = function (callback) {
    if (TopNavBar.googleSearchResultsShown()) {
        return callback();
    }

    var lookupAttempts = 512; // ~ 1 minute

    var lookupInterval = setInterval(function () {
        if (TopNavBar.googleSearchResultsShown()) {
            clearInterval(lookupInterval);

            return callback();
        }

        lookupAttempts--;

        if (!lookupAttempts) {
            console.error('TopNavBar -> googleSearchResultsShownCallback -> timeout');

            return clearInterval(lookupInterval);
        }
    }, 100);
};

TopNavBar._googleSearchPatchResultLinks = function () {
    TopNavBar._findInnerElements(document.getElementById('googleSearch'), '.gsc-results a', function (linkElm) {
        linkElm.setAttribute('target', '_blank');
    });
};

TopNavBar.googleSearchShowMobileContainer = function () {
    document.getElementById('tnb-google-search-container').classList.add('tnb-mobile-active');
};

TopNavBar.googleSearchHideMobileContainer = function () {
    document.getElementById('tnb-google-search-container').classList.remove('tnb-mobile-active');
};

TopNavBar._getElementPos = function (elm) {
    var rect = elm.getBoundingClientRect();

    return {
        'left': rect.left + window.scrollX,
        'top': rect.top + window.scrollY
    };
}

TopNavBar._iframeProxyFloatingComponent = function (context, id, action, prs) {
    if (!(TopNavBar.env === 'network' || TopNavBar._inIframe())) {
        return;
    }

    if (typeof prs === 'undefined') {
        prs = {};
    }

    var floatingComponent = prs;

    floatingComponent.id = id;
    floatingComponent.action = action;

    window.parent.postMessage({
        'context': context,
        'action': 'PROXY_FLOATING_COMPONENT',
        'floatingComponent': floatingComponent,
    }, '*');
};

TopNavBar.mountSearchSuggestionsLogic = function () {
    var searchSuggestionsElm = document.getElementById('tnb-search-suggestions');

    if (!searchSuggestionsElm) {
        return;
    }

    var searchEntireW3schoolsBtn = searchSuggestionsElm.querySelector('#search-entire-w3schools-btn');

    if (searchEntireW3schoolsBtn) {
        searchEntireW3schoolsBtn.addEventListener('click', TopNavBar.googleSearchSubmit);
    }
};

TopNavBar.unmountSearchSuggestionsLogic = function () {
    var searchSuggestionsElm = document.getElementById('tnb-search-suggestions');

    if (!searchSuggestionsElm) {
        return;
    }

    var searchEntireW3schoolsBtn = searchSuggestionsElm.querySelector('#search-entire-w3schools-btn');

    if (searchEntireW3schoolsBtn) {
        searchEntireW3schoolsBtn.removeEventListener('click', TopNavBar.googleSearchSubmit);
    }
};

TopNavBar.searchWithSuggestions = function (inp) {
    var searchSuggestionsElm, val, i, l, resultIndexes = [], resultTexts = [], html = "", classAtt = "", pos1, posNext, cc, c0, c1, c2, stillgo, needle;

    val = inp.value.trim().toUpperCase();

    if (val == "") {
        TopNavBar.closeSearchSuggestions();

        return false;
    };

    TopNavBar.unmountSearchSuggestionsLogic();

    searchSuggestionsElm = document.getElementById('tnb-search-suggestions');
    // searchSuggestionsElm.innerHTML = '';
    // searchSuggestionsElm.style.display = 'none';

    for (i = 0; i < array_search_suggestions.length; i++) {


        if (array_search_suggestions[i][3]) {
            stillgo = false;
            needle = array_search_suggestions[i][3];
            if (!Array.isArray(needle)) needle = [needle];
            for (let y in needle) {
                if (val.indexOf(needle[y].toUpperCase()) > -1) stillgo = true;
            }
            if (stillgo == false) continue;
        }


        if (array_search_suggestions[i][0].toUpperCase().substr(0, val.length) == val || array_search_suggestions[i][2].toUpperCase().substr(0, val.length) == val) {
            if (resultTexts.indexOf(array_search_suggestions[i][2]) == -1) {
                resultIndexes.push(i);
                resultTexts.push(array_search_suggestions[i][2]);
                if (resultIndexes.length > 5) break;
            }
        }
    }
    for (i = 0; i < array_search_suggestions.length; i++) {

        if (array_search_suggestions[i][3]) {
            stillgo = false;
            needle = array_search_suggestions[i][3];
            if (!Array.isArray(needle)) needle = [needle];
            for (let y in needle) {
                if (val.indexOf(needle[y].toUpperCase()) > -1) stillgo = true;
            }
            if (stillgo == false) continue;
        }

        if (resultIndexes.indexOf(i) == -1 && (array_search_suggestions[i][0].toUpperCase().indexOf(val) > -1 || array_search_suggestions[i][2].toUpperCase().indexOf(val) > -1)) {
            if (resultTexts.indexOf(array_search_suggestions[i][2]) == -1) {
                resultIndexes.push(i);
                resultTexts.push(array_search_suggestions[i][2]);
                if (resultIndexes.length > 5) break;
            }
        }
    }

    for (i = 0; i < resultIndexes.length; i++) {
        cc = array_search_suggestions[resultIndexes[i]][2];
        pos1 = cc.toUpperCase().indexOf(val);
        dd = "";
        while (pos1 > -1) {
            c0 = cc.substr(0, pos1);
            c1 = '<span class="span_search">' + cc.substr(pos1, val.length) + '</span>';
            c2 = cc.substr(pos1 + val.length);
            dd += c0 + c1;
            posNext = c2.toUpperCase().indexOf(val);
            if (posNext > -1) {
                cc = c2;
                pos1 = posNext;
            } else {
                cc = dd + c2;
                pos1 = -1;
            }
        }
        classAtt = "";
        if (html == "") classAtt = " search_active";
        html += '<a class="search_item' + classAtt + '" href="' + array_search_suggestions[resultIndexes[i]][1] + '">' + cc + '</a>';
    }
    classAtt = "";
    if (html == "") classAtt = " search_active";
    html += '<button class="search_item' + classAtt + '" id="search-entire-w3schools-btn" style="border-top:1px solid #ddd;">Search W3Schools</button>';

    searchSuggestionsElm.innerHTML = html;

    if (TopNavBar.env === 'network' || TopNavBar._inIframe()) {
        searchSuggestionsElm.style.opacity = '0';
    }

    searchSuggestionsElm.style.display = 'block';

    TopNavBar.mountSearchSuggestionsLogic();

    TopNavBar._iframeProxyFloatingComponent(
        'TopNavBar.searchWithSuggestions',
        'tnb-search-suggestions',
        'UPSERT',
        {
            'tagName': searchSuggestionsElm.tagName.toLowerCase(),
            'class': searchSuggestionsElm.getAttribute('class'),
            'innerHtml': html,
            'styles': {
                'display': 'block',
            },
            'mountFuncName': 'mountSearchSuggestionsLogic',
            'unmountFuncName': 'unmountSearchSuggestionsLogic',
            // 'pos': TopNavBar._getElementPos(searchSuggestionsElm)
        }
    );
}

TopNavBar.searchFieldLostFocus = function (event) {
    window.setTimeout(function () {
        TopNavBar.closeSearchSuggestions();
    }, 500);
}

TopNavBar.googleSearchAttachKeyPressHandler = function (event) {

    var x, n, nn, i, cc = 0, dd;

    var keycode = event.keyCode;
    if (keycode === 38 || keycode === 40) { //up || down
        //x = TopNavBar.element.getElementsByClassName("search_item");
        x = document.getElementsByClassName("search_item");
        for (i = 0; i < x.length; i++) {
            if (x[i].className.indexOf("search_active") > -1) {
                x[i].className = "search_item";
                n = i;
                break;
            }
        }
        if (keycode === 38) {
            nn = n - 1;
            if (nn < 0) nn = 0;
        }
        if (keycode === 40) {
            nn = n + 1;
            if (nn >= x.length) nn = nn - 1;
        }
        x[nn].className = "search_item search_active";
    }
    if (keycode === 13) {  //enter
        event.preventDefault();
        //x = TopNavBar.element.getElementsByClassName("search_item");
        x = document.getElementsByClassName("search_item");
        if (x.length === 0) {
            cc = 1;
        }
        for (i = 0; i < x.length; i++) {
            if (x[i].className.indexOf("search_active") > -1) {
                n = x[i].getAttribute('href');
                // if (n.indexOf("#search-entire-w3schools") > -1) {
                if (x[i].getAttribute('id') === 'search-entire-w3schools-btn') {
                    cc = 1;
                }
                break;
            }
        }
        if (cc === 1) {
            TopNavBar.googleSearchSubmit();
            TopNavBar.closeSearchSuggestions();
        } else {
            if (n !== null) {
                window.location = n;
            }
        }
    }
};

TopNavBar.googleSearchInitializedCallback = function (callback) {
    if (typeof google == 'object') {
        return callback();
    }

    var lookupAttempts = 512; // ~ 1 minute

    var lookupInterval = setInterval(function () {
        if (typeof google == 'object') {
            clearInterval(lookupInterval);

            return callback();
        }

        lookupAttempts--;

        if (!lookupAttempts) {
            console.error('TopNavBar -> googleSearchInitializedCallback -> timeour');

            return clearInterval(lookupInterval);
        }
    }, 100);
}

TopNavBar.googleSearchGetInputValue = function () {
    return document.getElementById('tnb-google-search-input').value;
}

TopNavBar.googleSearchSubmit = function () {
    TopNavBar._logDebug('googleSearchSubmit');

    TopNavBar.googleSearchInit();

    if (!TopNavBar.googleSearchGetInputValue()) {
        TopNavBar._logDebug('googleSearchSubmit -> empty input');

        return;
    }

    TopNavBar.googleSearchInitializedCallback(TopNavBar.googleSearchExecute);
};

TopNavBar.googleSearchExecute = function () {
    var googleSearchInputValue = TopNavBar.googleSearchGetInputValue();
    var googleSearchExecuteRes = google.search.cse.element.getElement('standard0').execute(googleSearchInputValue);

    TopNavBar._logDebug('googleSearchExecute -> googleSearchInputValue, googleSearchExecuteRes: ', {
        'googleSearchInputValue': googleSearchInputValue,
        'googleSearchExecuteRes': googleSearchExecuteRes,
    });

    TopNavBar.googleSearchResultsShownCallback(function () {
        TopNavBar._googleSearchPatchResultLinks();

        if (TopNavBar._inIframe()) {
            TopNavBar.notifyParentAboutLayout('on google search results', {
                'inputValue': googleSearchInputValue,
            });
        }
    });
};

// > Google Search

TopNavBar.openMenu = function () {
    var accordionNavElm = TopNavBar.element.querySelector('.tnb-mobile-nav');
    var accordionNavBtnElm = TopNavBar.element.querySelector('.tnb-menu-btn');

    if (accordionNavElm.classList.contains('tnb-active')) {
        accordionNavElm.classList.remove('tnb-active');
        accordionNavBtnElm.getElementsByTagName('i')[0].style.display = 'inline';
        accordionNavBtnElm.getElementsByTagName('i')[1].style.display = 'none';
        TopNavBar.closeAllNavItems();
        TopNavBar.closeMenu();
    } else {
        accordionNavElm.classList.add('tnb-active');
        accordionNavBtnElm.getElementsByTagName('i')[0].style.display = 'none';
        accordionNavBtnElm.getElementsByTagName('i')[1].style.display = 'inline';
    }

    TopNavBar.notifyParentAboutLayout('on menu open (toggle)');
};

TopNavBar.closeMenu = function () {
    TopNavBar.element.querySelector('.tnb-mobile-nav').classList.remove('tnb-active');

    var accordionNavBtnElm = TopNavBar.element.querySelector('.tnb-menu-btn');
    accordionNavBtnElm.getElementsByTagName('i')[0].style.display = 'inline';
    accordionNavBtnElm.getElementsByTagName('i')[1].style.display = 'none';

    TopNavBar.notifyParentAboutLayout('on menu close');
};

TopNavBar._closeMobileNav = function (sectionWrapperElm) {
    sectionWrapperElm.classList.remove('tnb-active');

    sectionWrapperElm.querySelector('.tnb-mobile-nav-section-body').innerHTML = '';

    var sectionToggleBtnElm = sectionWrapperElm.querySelector('.tnb-mobile-nav-section-toggle-btn');

    sectionToggleBtnElm.classList.remove('tnb-active');

    var sectionToggleBtnIconElm = sectionToggleBtnElm.querySelector('.tnb-icon');

    sectionToggleBtnIconElm.classList.remove('fa-caret-up');
    sectionToggleBtnIconElm.classList.add('fa-caret-down');
};

TopNavBar._openMobileNav = function (sectionWrapperElm, sectionId) {
    var sectionBodyElm = sectionWrapperElm.querySelector('.tnb-mobile-nav-section-body');

    sectionBodyElm.innerHTML = TopNavBar.element.querySelector('#nav_' + sectionId).innerHTML;

    var sectionFilterInputElm = sectionBodyElm.querySelector('.filter-input');

    if (sectionFilterInputElm) {
        sectionFilterInputElm.removeAttribute('oninput');
        sectionFilterInputElm.addEventListener('input', function (event) {
            TopNavBar.filter(event, 'sectionxs_' + sectionId);
        });
    }

    var sectionFilterClearBtnElm = sectionBodyElm.querySelector('.filter-clear-btn');

    if (sectionFilterClearBtnElm) {
        sectionFilterClearBtnElm.removeAttribute('onclick');
        sectionFilterClearBtnElm.addEventListener('click', function (event) {
            TopNavBar.clearFilter(event, 'sectionxs_' + sectionId);
        });
    }

    var sectionToggleBtnElm = sectionWrapperElm.querySelector('.tnb-mobile-nav-section-toggle-btn');

    sectionToggleBtnElm.classList.add('tnb-active');

    var sectionToggleBtnIconElm = sectionToggleBtnElm.querySelector('.tnb-icon');

    sectionToggleBtnIconElm.classList.remove('fa-caret-down');
    sectionToggleBtnIconElm.classList.add('fa-caret-up');

    sectionWrapperElm.classList.add('tnb-active');

    setTimeout(function () {
        TopNavBar._scrollMobileNav(sectionWrapperElm);
    }, 50);
};

TopNavBar._scrollMobileNav = function (targetElm, smoothScroll, scrollTopValue) {
    clearInterval(TopNavBar.mobileNavScrollInterval);

    var scrollElm = TopNavBar.element.querySelector('#tnb-mobile-nav');

    var scrollElmOffset = scrollElm.getBoundingClientRect();

    var targetElmOffset = targetElm.getBoundingClientRect();

    TopNavBar._logDebug('_scrollMobileNav: ', {
        'scrollElm': scrollElm,
        'scrollElm.scrollTop': scrollElm.scrollTop,
        'scrollElmOffset': scrollElmOffset,
        'targetElmOffset': targetElmOffset,
        'scrollTopValue': scrollTopValue,
    });

    if (typeof smoothScroll === 'undefined') {
        smoothScroll = true;
    }

    if (typeof scrollTopValue === 'undefined') {
        scrollTopValue = targetElmOffset.top + scrollElm.scrollTop - scrollElmOffset.top - 1;
    }

    TopNavBar._logDebug('_scrollMobileNav -> scrollTopValue: ', scrollTopValue);
    TopNavBar._logDebug('_scrollMobileNav -> scrollElm.scrollTop: ', scrollElm.scrollTop);
    TopNavBar._logDebug('_scrollMobileNav -> scrollTopValue - scrollElm.scrollTop: ', scrollTopValue - scrollElm.scrollTop);

    if (scrollTopValue === scrollElm.scrollTop) {
        return;
    }

    if (!smoothScroll) {
        scrollElm.scrollTop = scrollTopValue;
        return;
    }

    var scrollIntervalDelay = 2;
    var scrollAmount = 0;
    var scrollAmountPerIntervalTick = 0;

    if (scrollElm.scrollTop < scrollTopValue) {
        scrollAmount = scrollTopValue - scrollElm.scrollTop;
        scrollAmountPerIntervalTick = (scrollAmount / 50) + 10;

        TopNavBar._logDebug('_scrollMobileNav -> scrollAmount (add): ', scrollAmount);
        TopNavBar._logDebug('_scrollMobileNav -> scrollAmountPerIntervalTick (add): ', scrollAmountPerIntervalTick);

        TopNavBar.mobileNavScrollInterval = setInterval(function () {
            scrollElm.scrollTop += scrollAmountPerIntervalTick;

            if (scrollElm.scrollTop >= scrollTopValue) {
                scrollElm.scrollTop = scrollTopValue;
                clearInterval(TopNavBar.mobileNavScrollInterval);
            }
        }, scrollIntervalDelay);
    } else {
        scrollAmount = scrollElm.scrollTop - scrollTopValue;
        scrollAmountPerIntervalTick = (scrollAmount / 50) + 10;

        TopNavBar._logDebug('_scrollMobileNav -> scrollAmount (sub): ', scrollAmount);
        TopNavBar._logDebug('_scrollMobileNav -> scrollAmountPerIntervalTick (sub): ', scrollAmountPerIntervalTick);

        TopNavBar.mobileNavScrollInterval = setInterval(function () {
            scrollElm.scrollTop -= scrollAmountPerIntervalTick;

            if (scrollElm.scrollTop <= scrollTopValue) {
                scrollElm.scrollTop = scrollTopValue;
                clearInterval(TopNavBar.mobileNavScrollInterval);
            }
        }, scrollIntervalDelay);
    }
}

TopNavBar.toggleMobileNav = function (event, sectionId) {
    var sectionToggleBtnElm = event.target.classList.contains('w3-button') ? event.target : event.target.parentElement;
    var sectionWrapperElm = sectionToggleBtnElm.parentElement;

    if (sectionWrapperElm.classList.contains('tnb-active')) { // close current section
        TopNavBar._closeMobileNav(sectionWrapperElm);

        setTimeout(function () {
            // TopNavBar._scrollMobileNav(sectionWrapperElm, false, 0);
            TopNavBar._scrollMobileNav(sectionWrapperElm, true, 0);
        }, 50);
    } else { // open section
        // check/close other open sections
        TopNavBar._findInnerElements(TopNavBar.element, '.tnb-mobile-nav-section.tnb-active', function (sectionWrapperElm) {
            TopNavBar._closeMobileNav(sectionWrapperElm);
        });

        TopNavBar._openMobileNav(sectionWrapperElm, sectionId);
    }
};

TopNavBar.openNavItem = function (navId) {
    if (TopNavBar.element.querySelector('#nav_' + navId).style.display === 'block') {
        TopNavBar.closeNavItem(navId);

        TopNavBar.element.classList.remove('full-screen');
    } else {
        TopNavBar.closeAllNavItems();

        TopNavBar.element.classList.add('full-screen');

        TopNavBar.element.querySelector('#nav_' + navId).style.display = 'block';
        TopNavBar.element.querySelector('#nav_' + navId).focus();

        if (TopNavBar.element.querySelector('#navbtn_' + navId)) {
            TopNavBar.element.querySelector('#navbtn_' + navId).getElementsByTagName('i')[0].style.display = 'none';
            TopNavBar.element.querySelector('#navbtn_' + navId).getElementsByTagName('i')[1].style.display = 'inline';
            TopNavBar.element.querySelector('#navbtn_' + navId).classList.add('mystyle');
        }

        TopNavBar.notifyParentAboutLayout('on nav item open', {
            'navId': navId,
        });
    }
};

TopNavBar.closeNavItem = function (navId) {
    var navItemElm = TopNavBar.element.querySelector('#nav_' + navId)

    if (!navItemElm) {
        return;
    }

    navItemElm.style.display = 'none';

    TopNavBar.element.classList.remove('full-screen');

    if (navId !== 'services') {
        try {
            var inputAltEvent = new Event('input', {
                'bubbles': true,
                'cancelable': true
            });

            navItemElm.querySelector('input').value = ''
            navItemElm.querySelector('input').dispatchEvent(inputAltEvent)
        } catch (exc) {
            console.error(exc);
        }
    }

    if (TopNavBar.element.querySelector('#navbtn_' + navId)) {
        TopNavBar.element.querySelector('#navbtn_' + navId).getElementsByTagName('i')[0].style.display = 'inline';
        TopNavBar.element.querySelector('#navbtn_' + navId).getElementsByTagName('i')[1].style.display = 'none';
        TopNavBar.element.querySelector('#navbtn_' + navId).classList.remove('mystyle');
    }

    TopNavBar.notifyParentAboutLayout('on nav item close', {
        'navId': navId,
    });
};

TopNavBar.closeSearchSuggestions = function () {
    TopNavBar.unmountSearchSuggestionsLogic();

    var searchSuggestionsElm = document.getElementById('tnb-search-suggestions');
    searchSuggestionsElm.style.display = 'none';
    searchSuggestionsElm.innerHTML = '';

    TopNavBar._iframeProxyFloatingComponent(
        'TopNavBar.closeSearchSuggestions',
        'tnb-search-suggestions',
        'REMOVE',
        {
            // 'mountFuncName': 'mountSearchSuggestionsLogic',
            'unmountFuncName': 'unmountSearchSuggestionsLogic',
        }
    );
};

// < menu filter
TopNavBar.allMenuItemsInCategoryAreHidden = function (menu, category) {
    var elements = menu.querySelectorAll(`[data-category="${category}"]`);

    for (var i = 0; i < elements.length; i++) {
        if (!elements[i].classList.contains('d-none')) {
            return false;
        }
    }

    return true;
};

TopNavBar.clearFilter = function (event, sectionId) {
    var filterInnerWrapperElm = event.target.classList.contains('filter-clear-btn') ? event.target.parentElement : event.target.parentElement.parentElement;

    var filterInputElm = filterInnerWrapperElm.querySelector('.filter-input');
    // console.log('filterInputElm: ', filterInputElm);

    if (filterInputElm) {
        filterInputElm.value = '';
    }

    TopNavBar.filter(event, sectionId, '');
}

TopNavBar._filterServices = function (event, sectionId, filterValue) {
    // TopNavBar._logDebug('filterValue: ', filterValue);

    var sectionElm = TopNavBar.element.querySelector('#' + sectionId);

    var serviceboxesElm = sectionElm.querySelector('.serviceboxes');

    var noMatchElm = serviceboxesElm.querySelector('#no-match');

    if (noMatchElm) {
        noMatchElm.remove();
    }

    if (!filterValue) {
        TopNavBar._findInnerElements(serviceboxesElm, '.servicebox', function (elm) {
            elm.style.display = 'block';
        });
    } else {
        var matchFound = false;

        TopNavBar._findInnerElements(serviceboxesElm, '.servicebox', function (elm) {
            // TopNavBar._logDebug('elm.textContent: ', elm.textContent);
            if (elm.textContent.toLowerCase().indexOf(filterValue) !== -1) {
                elm.style.display = 'block';

                matchFound = true;
            } else {
                elm.style.display = 'none';
            }
        });

        if (!matchFound) {
            var noMatchMessage = document.createElement('div');
            noMatchMessage.id = 'no-match';
            noMatchMessage.textContent = 'No matches found';
            noMatchMessage.style.marginTop = '25px';
            noMatchMessage.style.textAlign = 'center';
            serviceboxesElm.appendChild(noMatchMessage);
        }
    }
}

TopNavBar.filter = function (event, sectionId, altValue) {
    var filterValue = typeof altValue !== 'undefined' ? altValue : event.target.value.toLowerCase();

    if (sectionId === 'nav_services' || sectionId === 'sectionxs_services') {
        return TopNavBar._filterServices(event, sectionId, filterValue);
    }

    var sectionElm = TopNavBar.element.querySelector('#' + sectionId);

    var noMatchElm = sectionElm.querySelector('#no-match');

    if (noMatchElm) {
        noMatchElm.remove();
    }

    if (sectionId !== 'nav_tutorials' && sectionId !== 'sectionxs_tutorials') {
        TopNavBar._findInnerElements(sectionElm, '.black-box-container', function (elm) {
            elm.style.display = 'block';
        });
    }

    var uniqueCategoriesDeduplicator = {};

    TopNavBar._findInnerElements(sectionElm, '[data-category]', function (elm) {
        uniqueCategoriesDeduplicator[elm.getAttribute('data-category')] = true;
    });

    var uniqueCategories = Object.keys(uniqueCategoriesDeduplicator);

    TopNavBar._findInnerElements(sectionElm, '[data-name]', function (elm) {
        var dataName = elm.getAttribute('data-name');

        if (!dataName.includes(filterValue)) {
            elm.classList.remove('d-block');
            elm.classList.add('d-none');
        } else {
            elm.classList.remove('d-none');
            elm.classList.add('d-block');
        }
    });

    var emptyCategories = [];

    uniqueCategories.forEach(function (category) {
        var allHidden = TopNavBar.allMenuItemsInCategoryAreHidden(sectionElm, category);

        if (allHidden) {
            emptyCategories.push(category);
        }

        // hide section heading element if all inner items are hidden
        TopNavBar._findInnerElements(sectionElm, `[data-heading="${category}_title"]`, function (headingElm) {
            if (allHidden) {
                headingElm.classList.add('d-none');
            } else {
                headingElm.classList.remove('d-none');
            }
        });
    });

    // Checks if all categories are empty, if true displays a message "No match found..."
    if (emptyCategories.length === uniqueCategories.length) {
        var noMatchMessage = document.createElement('div');
        noMatchMessage.id = 'no-match';
        noMatchMessage.textContent = 'No matches found';
        noMatchMessage.style.marginTop = '25px';
        noMatchMessage.style.textAlign = 'center';
        sectionElm.querySelector('.w3-content').appendChild(noMatchMessage);

        if (sectionId !== 'nav_tutorials' && sectionId !== 'sectionxs_tutorials') {
            TopNavBar._findInnerElements(sectionElm, '.black-box-container', function (elm) {
                elm.style.display = 'none';
            });
        }
    }
};

// > menu filter
TopNavBar.sortMenu = function (sectionId, type) {
    var section = TopNavBar.element.querySelector('#nav_' + sectionId);

    var linkLists = TopNavBar._menuSectionsInTab[sectionId].map(function (listId) {
        return section.querySelector(`#${listId}`);
    });

    if (type.toLowerCase() === 'alphabetically') {
        linkLists.forEach(function (list) {
            var divsArray = TopNavBar._findInnerElements(list, 'div');

            // Sort the child divs.
            divsArray.sort(function (a, b) {
                var aText = a.querySelector('a').innerText;
                var bText = b.querySelector('a').innerText;
                return aText.toLowerCase().localeCompare(bText.toLowerCase());
            });

            // Append each sorted div back into the parent.
            divsArray.forEach(function (div) {
                list.appendChild(div);
            });
        });
    } else {
        linkLists.forEach(function (section) {
            var divsArray = TopNavBar._findInnerElements(section, 'div');
            // Sort based on the original index.
            divsArray.sort(function (a, b) {
                return a.dataset.originalIndex - b.dataset.originalIndex;
            });
            // Append each sorted div back into the parent.
            divsArray.forEach(function (div) {
                section.appendChild(div);
            });
        });
    }
};

TopNavBar.closeAllNavItems = function () {
    TopNavBar.closeNavItem("tutorials");
    TopNavBar.closeNavItem("exercises");
    TopNavBar.closeNavItem("certified");
    TopNavBar.closeNavItem("services");
    TopNavBar.element.classList.remove('full-screen');
    TopNavBar.closeSearchSuggestions();
};

TopNavBar.initUserPreferredTheme = function () {
    TopNavBar.toggleUserPreferredTheme(true);
};

TopNavBar.toggleUserPreferredTheme = function (init) {
    if (typeof init === 'undefined') {
        init = false;
    }

    // var codeTheme = localStorage.getItem('preferredmode');
    var pageTheme = localStorage.getItem('preferredpagemode');

    if (!init) {
        if (pageTheme == 'dark') {
            pageTheme = 'light';
        } else {
            pageTheme = 'dark';
        }
    }

    var bodyClassName = document.body.className
        .replace('darktheme', '')
        .replace('darkpagetheme', '')
        .replace('  ', ' ');

    if (pageTheme == 'dark') {
        bodyClassName += ' darktheme';
        bodyClassName += ' darkpagetheme';
    }

    document.body.className = bodyClassName;
    localStorage.setItem('preferredmode', pageTheme);
    localStorage.setItem('preferredpagemode', pageTheme);
};

// generic one
TopNavBar.mouseHandler = function (event, elm, closingOrExtra) {
    TopNavBar._logDebug('mouseHandler -> args: ', arguments);

    if (typeof closingOrExtra === 'undefined') {
        closingOrExtra = false;
    }

    var icon = elm.querySelector('i');
    if (event.type === 'keydown') {
        if (event.code !== 'Enter') return;
        if (event.code === 'Enter') {
            if (elm.id.includes('close-nav-x')) {
                TopNavBar.closeNavItem(closingOrExtra); // closingOrExtra in this case is 'tutorials' | 'exercises' | 'certified' | 'services'
                return;
            }
            var modalonEnter = elm.nextElementSibling;
            icon.className = modalonEnter.style.display === 'block' ? 'fa fa-caret-down filter-caret' : 'fa fa-caret-up filter-caret';
            modalonEnter.style.display = modalonEnter.style.display === 'block' ? 'none' : 'block';
        } else {
            event.preventDefault();
        }
    } else if (elm.id.includes('close-nav-x')) {
        TopNavBar.closeNavItem(closingOrExtra); // closingOrExtra in this case is 'tutorials' | 'exercises' | 'certified' | 'services'
    } else {
        var modalonKeydown = elm.querySelector(".filter-modal-container");
        icon.className = closingOrExtra ? 'fa fa-caret-down filter-caret' : 'fa fa-caret-up filter-caret';
        modalonKeydown.style.display = closingOrExtra ? 'none' : 'block';
    }
};

TopNavBar._attachMenuSortLogic = function () {
    TopNavBar._logDebug('_attachMenuSortLogic');

    // used for restoring original sort order
    var storeOriginalSortIndexes = function () {
        var menus = [];

        TopNavBar._loopObj(TopNavBar._menuSectionsInTab, function (tabListIds, tabId) {
            menus.push(
                tabListIds.map(function (listId) {
                    return TopNavBar.element.querySelector(`#nav_${tabId}`).querySelector(`#${listId}`);
                })
            );
        });

        menus.forEach(function (lists) {
            lists.forEach(function (list) {
                TopNavBar._findInnerElements(list, 'div', function (divElm, divElmIndex) {
                    divElm.dataset.originalIndex = divElmIndex;
                });
            })
        });
    };

    storeOriginalSortIndexes();

    var attachSortBtnEventListeners = function (sortBtnElm) {
        sortBtnElm.addEventListener('mouseenter', function (event) {
            TopNavBar.mouseHandler(event, sortBtnElm, false);
        });

        sortBtnElm.addEventListener('mouseleave', function (event) {
            TopNavBar.mouseHandler(event, sortBtnElm, true);
        });

        sortBtnElm.addEventListener('focusout', function (event) {
            var isClickInside = sortBtnElm.contains(event.relatedTarget);

            if (!isClickInside) {
                sortBtnElm.querySelector('.filter-modal-container').style.display = 'none';
            }
        })
    };

    var enabledSortNavs = ['tutorials', 'exercises', 'certified'];

    TopNavBar._loopArray(enabledSortNavs, function (sortNav) {
        var sortBtnElm = TopNavBar.element.querySelector('#' + sortNav + '-sort-btn');

        if (sortBtnElm) {
            attachSortBtnEventListeners(sortBtnElm);

            var sortFilterContainer = sortBtnElm.querySelector(".filter-modal");
            TopNavBar._logDebug('sortNav, sortFilterContainer: ', {
                sortNav: sortNav,
                sortFilterContainer: sortFilterContainer
            });

            if (sortFilterContainer) {
                TopNavBar._findInnerElements(sortFilterContainer, 'button', function (buttonElm) {
                    buttonElm.addEventListener('click', function (event) {
                        TopNavBar._logDebug('sortNav click: ', {
                            sortNav: sortNav,
                            eventTarget: event.target
                        });

                        var sortBy = event.target.innerText;
                        TopNavBar.element.querySelector(`#${sortNav}-active-sorting`).textContent = sortBy;

                        var sortByBtn = sortFilterContainer.querySelector(`#${sortNav}-${sortBy.toLowerCase()}`);
                        sortFilterContainer.querySelector('.w3-button.active').classList.remove('active');

                        sortByBtn.classList.add('active');
                        TopNavBar.sortMenu(sortNav, sortBy);
                    });
                });
            }
        }
    });
};
// < legacy mapping
window.w3_open = TopNavBar.openMenu;
window.w3_close = TopNavBar.closeMenu;
window.w3_open_nav = TopNavBar.openNavItem;
window.w3_close_nav = TopNavBar.closeNavItem;
window.w3_close_all_topnav = TopNavBar.closeAllNavItems;
window.open_search = TopNavBar.googleSearchFocusInput;
window.gSearch = TopNavBar.googleSearchInit;
// > legacy mapping
TopNavBar.init();