'use strict';
const regexpTaskOne = new RegExp('a..a', 'g');
const regexpTaskTwo = new RegExp('a.+?a', 'g');
const str = "azza acxca azxza wwxwwa";

str.replace(regexpTaskTwo,"!");
