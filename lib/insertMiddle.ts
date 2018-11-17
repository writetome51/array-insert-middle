import { errorIfValuesAreNotArrays } from 'error-if-values-are-not-arrays';
import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { isOdd } from '@writetome51/is-odd-is-even';
import { errorIfIndexNotValidAfterOffsetWasAdded }
	from '@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValidAfterOffsetWasAdded';
import { getRoundedDown } from '@writetome51/get-rounded-up-down';

// By default, if array has odd number of items, values will be inserted just
// before the middle item.  Example:
// array is [1,2,3,4,5] .  You call insertMiddle([9,10], array) and result is
// [1,2,9,10,3,4,5] .  If you want to slightly change the insert position, set the
// optional offset parameter to + or - whatever integer you want.


export function insertMiddle(values: any[], array, offset = 0) {
	errorIfValuesAreNotArrays([values, array]);
	errorIfNotInteger(offset);

	let index = getRoundedDown(array.length / 2);

	index += offset;
	errorIfIndexNotValidAfterOffsetWasAdded(index, array);
	array.splice(index, 0, ...values);
}
