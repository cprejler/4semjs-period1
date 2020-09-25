/*
b) Create a function that takes an IBook instance and test it with an object instance.
*/
function displayBook(bookObj) {
    console.log(bookObj.author + bookObj.title);
}
var myBook = { title: 'the great gatsby', author: 'cant remember', pages: 500 };
displayBook(myBook);
/*
c) Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.
TypeScript uses the duck-typing method to compare one object with other objects by checking that both objects have the same type
 matching names or not. It means we cannot change the signature of a variable. For example, if we assign an object that has two properties like name, address and next time we assign an object which contains more properties or fewer properties or both properties are not (name, address), then the TypeScript compiler will generate the compile-time error. The concept is known as Duck typing.

*/
/*
f) Create a class Book and demonstrate the "Java way" of implementing an interface.
*/
var Book = /** @class */ (function () {
    function Book(t, a) {
    }
    return Book;
}());
var stringFunction;
var stringFunctionUpper;
stringFunction = function (string1, string2, string3) {
    var list = [string1, string2, string3];
    return list;
};
/*
c) Design another implementation that returns an array, with the three strings uppercased.

*/
stringFunctionUpper = function (string1, string2, string3) {
    var list = [string1.toUpperCase(), string2.toUpperCase(), string3.toUpperCase()];
    return list;
};
var myList = stringFunction('hello', 'world', 'from typescript');
var myUpperCaseList = stringFunctionUpper('hello', 'world', 'from typescript');
console.log(myList);
console.log(myUpperCaseList);
/*
d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, to simulate a method that uses the interface.

*/
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["A", "B", "C"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
f2(stringFunctionUpper);
function testF2() {
    var list = ['bamboozled'];
    return list;
}
f2(testF2);
