# insertMiddle(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;offset? = 0<br>): void

Inserts `values` into the middle of `array`.  
If you want to change the insert position, set the optional `offset` parameter  
to + or - whatever integer you want.



## Examples
```
let array = [1,2,3,4,5,6];  
insertMiddle([9,10], array);  
// array is now [1,2,3,9,10,4,5,6]


// By default, if array has odd number of items, values will be inserted just  
// before the middle item:  

let array = [1,2,3,4,5];  
insertMiddle([9,10], array);  
// array is now [1,2,9,10,3,4,5]  

// This changes the insert position:
let array = [1,2,3,4,5];  
insertMiddle([9,10], array, 1);  
// array is now [1,2,3,9,10,4,5] 
```

## Loading
```
// if using TypeScript:
import {insertMiddle} from '@writetome51/array-insert-middle';
// if using ES5 JavaScript:
var insertMiddle = require('@writetome51/array-insert-middle').insertMiddle;
```