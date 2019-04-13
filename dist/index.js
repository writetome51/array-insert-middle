"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_index_not_valid_after_offset_was_added_1 = require("error-if-index-not-valid-after-offset-was-added");
var error_if_not_integer_1 = require("error-if-not-integer");
var get_rounded_up_down_1 = require("@writetome51/get-rounded-up-down");
var array_insert_at_1 = require("@writetome51/array-insert-at");
// By default, if array has odd number of items, values will be inserted just
// before the middle item.  Example:
// array is [1,2,3,4,5] .  You call insertMiddle([9,10], array) and result is
// [1,2,9,10,3,4,5] .  If you want to slightly change the insert position, set the
// optional offset parameter to + or - whatever integer you want.
function insertMiddle(values, array, offset) {
    if (offset === void 0) { offset = 0; }
    var index = get_rounded_up_down_1.getRoundedDown(array.length / 2);
    error_if_not_integer_1.errorIfNotInteger(offset);
    index += offset;
    error_if_index_not_valid_after_offset_was_added_1.errorIfIndexNotValidAfterOffsetWasAdded(index, array.length);
    array_insert_at_1.insertAt(index, values, array);
}
exports.insertMiddle = insertMiddle;
