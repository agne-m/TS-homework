"use strict";
function wrapInArray(a, b, c) {
    return [a, b, c];
}
const strArr = wrapInArray("Labas", "as", "krabas");
const numberArr = wrapInArray(1, 2, 3);
console.log(strArr);
console.log(numberArr);
const selectRange = (collection, from, to) => collection.slice(from, to);
const slicedString = selectRange(["Labas", 1, 3]);
const slicedArray = selectRange([1, 5, 8, 7, 4, 6], 1, 3);
//# sourceMappingURL=main.js.map