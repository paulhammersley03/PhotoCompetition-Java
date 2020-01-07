'use strict';
// JavaScript containing shared constants, for use in all pages.

var backendIp = '34.248.103.39';
var token = 'b7e8f604-e1d8-4dbb-aa79-1b78d50810af';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}
