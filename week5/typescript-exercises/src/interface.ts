/*

Interfaces 1:

a) Create a TypeScript interface IBook, which should encapsulate information about a book, including:
title, author:  all strings
published: Date
pages: number 

*/
interface IBook {
    title : string;
    readonly author: string;
    published?: Date;
    pages: number;
}


/*
b) Create a function that takes an IBook instance and test it with an object instance.
*/

function displayBook(bookObj: IBook){
    console.log(bookObj.author + bookObj.title)
}

let myBook = {title: 'the great gatsby', author: 'cant remember', pages: 500};


displayBook(myBook);

/*
c) Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.
TypeScript uses the duck-typing method to compare one object with other objects by checking that both objects have the same type
 matching names or not. It means we cannot change the signature of a variable. For example, if we assign an object that has two properties like name, address and next time we assign an object which contains more properties or fewer properties or both properties are not (name, address), then the TypeScript compiler will generate the compile-time error. The concept is known as Duck typing.

*/
/*
f) Create a class Book and demonstrate the "Java way" of implementing an interface.
*/
class Book implements IBook {
    title : string;
    readonly author: string;
    published?: Date;
    pages: number;

    constructor(t: string, a: string){ }

}

/*
Interfaces 2:
a) Create an interface to describe a function: myFunc that should take three 
string parameters and return a String Array.
*/

interface MyFunc {
    (string1: string, string2: string, string3: string): string[];
}

let stringFunction : MyFunc;
let stringFunctionUpper : MyFunc;
stringFunction = function(string1, string2, string3){
    let list: string[] = [string1, string2, string3];
    return list;
}
/*
c) Design another implementation that returns an array, with the three strings uppercased.

*/
stringFunctionUpper = function(string1, string2, string3){
    let list: string[] = [string1.toUpperCase(), string2.toUpperCase(), string3.toUpperCase()];
    return list;
}

let myList = stringFunction('hello', 'world','from typescript');
let myUpperCaseList = stringFunctionUpper('hello', 'world','from typescript');
console.log(myList);
console.log(myUpperCaseList);

/*
d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, to simulate a method that uses the interface.

*/

let f2 = function logger(f1: MyFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}



f2(stringFunctionUpper);

function testF2(){
    let list: string[] = ['bamboozled'];
    return list;
}

f2(testF2);