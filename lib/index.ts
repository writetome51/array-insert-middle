import { errorIfIndexNotValidAfterOffsetWasAdded } from 'error-if-index-not-valid-after-offset-was-added';
import { errorIfNotInteger } from 'error-if-not-integer';
import { getRoundedDown } from '@writetome51/get-rounded-up-down';
import { insertAt } from '@writetome51/array-insert-at';

// By default, if array has odd number of items, values will be inserted just
// before the middle item.  Example:
// array is [1,2,3,4,5] .  You call insertMiddle([9,10], array) and result is
// [1,2,9,10,3,4,5] .  If you want to slightly change the insert position, set the
// optional offset parameter to + or - whatever integer you want.


export function insertMiddle(values: any[], array, offset = 0): void {

	let index = getRoundedDown(array.length / 2);

	errorIfNotInteger(offset);
	index += offset;
	errorIfIndexNotValidAfterOffsetWasAdded(index, array.length);

	insertAt(index, values, array);
}
