/*
a) Implement a generic function which will take an array of any kind,
 and return the array reversed (just use the built-in reverse function),
  so the three first calls below will print the reversed array, 
  and the last call will fail.

*/

function reverseArr<T>(arg: Array<T>): Array<T>{
    return arg.reverse();
}


console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
//console.log(reverseArr<number>(["a","b","c"]));


class DataHolder<T> {
    private _value: T ;

    constructor(value: T){
        this._value = value;
    }

    get value(): T {
        return this._value;
    }

    set value(newValue: T){
        this._value = newValue;
    }
}

let d = new DataHolder<string>("Hello");
console.log(d.value);
d.value = ("World");
console.log(d.value);

let d2 = new DataHolder<number>(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);



