//  Namespace: __
//  Module: log
//  Method: setup

// Avoid "console" errors in browsers that lack a console.

var method,
    methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'
    ],
    length = methods.length,
    noop = function () {},
    console = window.console || {};

while (length--) {
    method = methods[length];

    // Only stub undefined methods.

    if (!console[method]) {
        console[method] = noop;
    }
}

// Check if logging is enabled

var devMode = window.localStorage.getItem('DEV_MODE'),
    enabled = (devMode && JSON.parse(devMode).value) || false;
