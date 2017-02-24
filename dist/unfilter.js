'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function (filter) {
    Array.prototype.filter = function (fun, storeOriginal) {
        var _ret = [].concat(_toConsumableArray(filter.call(this, fun /*, thisArg*/)));
        if (storeOriginal === true) _ret.__original = this;
        return _ret;
    };
})(Array.prototype.filter);

Array.prototype.unfilter = function () {
    if (!!this.__original && this.__original.constructor === Array) {
        var _ret = [].concat(_toConsumableArray(this.__original));
        return _ret;
    }
    return undefined;
};