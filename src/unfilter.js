'use strict';

((filter => {
    Array.prototype.filter = function (fun, storeOriginal) {
        let _ret = [...filter.call(this, fun/*, thisArg*/)];
        if (storeOriginal === true)
            _ret.__original = this;
        return _ret;
    };
})(Array.prototype.filter));

Array.prototype.unfilter = function () {
    if (!!this.__original && this.__original.constructor === Array) {
        let _ret = [...this.__original];
        return _ret;
    }
    return undefined;
}   