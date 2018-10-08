"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_values_are_not_arrays_1 = require("error-if-values-are-not-arrays");
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var isOdd_isEven_1 = require("@writetome51/number-analysis-basic/isOdd_isEven");
var errorIfIndexNotValidAfterOffsetWasAdded_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValidAfterOffsetWasAdded");
var getRounded_getRoundedDown_getRoundedUp_1 = require("@writetome51/get-rounded-up-down/getRounded_getRoundedDown_getRoundedUp");
// By default, if array has odd number of items, values will be inserted just
// before the middle item.  Example:
// array is [1,2,3,4,5] .  You call insertMiddle([9,10], array) and result is
// [1,2,9,10,3,4,5] .  If you want to slightly change the insert position, set the
// optional offset parameter to + or - whatever integer you want.
function insertMiddle(values, array, offset) {
    if (offset === void 0) { offset = 0; }
    error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([values, array]);
    errorIfNotInteger_1.errorIfNotInteger(offset);
    var index;
    if (isOdd_isEven_1.isOdd(array.length)) {
        index = getRounded_getRoundedDown_getRoundedUp_1.getRoundedDown(array.length / 2);
    }
    else
        index = array.length / 2;
    index += offset;
    errorIfIndexNotValidAfterOffsetWasAdded_1.errorIfIndexNotValidAfterOffsetWasAdded(index, array);
    array.splice.apply(array, [index, 0].concat(values));
}
exports.insertMiddle = insertMiddle;
