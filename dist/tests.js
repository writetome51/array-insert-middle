"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
/*************
 If it passes test, it will print this out:

 [ 1, '' ]
 [ 1, 2, '' ]
 [ 1, 3, 2, '' ]
 [ 1, 3, 4, 2, '' ]
 [ 1, 3, 5, 4, 2, '' ]
 [ 1, 3, 5, 6, 4, 2, '' ]
 [ 1, 3, 5, 7, 6, 4, 2, '' ]
 [ 1, 3, 5, 7, 8, 6, 4, 2, '' ]
 [ 1, 3, 5, 7, 9, 8, 6, 4, 2, '' ]
 [ 1, 3, 5, 7, 9, 10, 8, 6, 4, 2, '' ]
 [ 1, 3, 5, 7, 9, 11, 12, 10, 8, 6, 4, 2, '' ]
 [ 1, 3, 5, 7, 9, 11, 12, 10, 8, 6, 4, 2, '' ]
 [ 1, 3, 5, 7, 9, 11, 'aaa', 12, 10, 8, 6, 4, 2, '' ]
 [ 1, 3, 5, 7, 9, 11, 'aaa', 'bbb', 12, 10, 8, 6, 4, 2, '' ]
 [ 1, 3, 5, 7, 9, 11, 'aaa', 'bbb', [], [], 12, 10, 8, 6, 4, 2, '' ]
 ********************/
var arr = [''];
index_1.insertMiddle([1], arr);
console.log(arr);
index_1.insertMiddle([2], arr);
console.log(arr);
index_1.insertMiddle([3], arr);
console.log(arr);
index_1.insertMiddle([4], arr);
console.log(arr);
index_1.insertMiddle([5], arr);
console.log(arr);
index_1.insertMiddle([6], arr);
console.log(arr);
index_1.insertMiddle([7], arr);
console.log(arr);
index_1.insertMiddle([8], arr);
console.log(arr);
index_1.insertMiddle([9], arr);
console.log(arr);
index_1.insertMiddle([10], arr);
console.log(arr);
index_1.insertMiddle([11, 12], arr);
console.log(arr);
index_1.insertMiddle([], arr);
console.log(arr);
index_1.insertMiddle(['aaa'], arr);
console.log(arr);
index_1.insertMiddle(['bbb'], arr);
console.log(arr);
index_1.insertMiddle([[], []], arr, 1);
console.log(arr);
