// ==UserScript==
// @name           DisableFBSidebar
// @version        0.1
// @namespace      uk.co.emrgnt.disablefbsidebar
// @homepage       http://userscripts.org/scripts/show/
// @include        *facebook.com/*
// @description    Hide mini fb ticker and subscriptions from right hand column
// ==/UserScript==

document.getElementById('pagelet_rhc_ticker').style.visibility = 'hidden';
document.getElementById('ego_section').style.visibility = 'hidden';