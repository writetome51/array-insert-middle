To include in your project:

import {insertMiddle} from '@writetome51/array-insert-middle';

Function inserts item(s) into the middle of the array.

insertMiddle(values: any[], array, offset = 0);

Example:

let array = [1,2,3,4,5,6];  
insertMiddle([9,10], array);  
--> [1,2,3,9,10,4,5,6] .  

By default, if array has odd number of items, values will be inserted just  
before the middle item.  Example:  

let array = [1,2,3,4,5];  
insertMiddle([9,10], array);  
--> [1,2,9,10,3,4,5] .  

If you want to slightly change the insert position, set the  
optional offset parameter to + or - whatever integer you want.

let array = [1,2,3,4,5];  
insertMiddle([9,10], array, 1);  
--> [1,2,3,9,10,4,5] .  