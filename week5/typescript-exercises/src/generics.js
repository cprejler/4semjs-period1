/*
a) Implement a generic function which will take an array of any kind,
 and return the array reversed (just use the built-in reverse function),
  so the three first calls below will print the reversed array,
  and the last call will fail.

*/
function reverseArr(arg) {
    return arg.reverse();
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
//console.log(reverseArr<number>(["a","b","c"]));
var DataHolder = /** @class */ (function () {
    function DataHolder(value) {
        this._value = value;
    }
    Object.defineProperty(DataHolder.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            this._value = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return DataHolder;
}());
var d = new DataHolder("Hello");
console.log(d.value);
d.value = ("World");
console.log(d.value);
var d2 = new DataHolder(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
