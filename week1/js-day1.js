/* Assume the JavaScript-array did not offer the filter method. Then you could implement it by yourself. 
a) Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback as the second and returns a new (filtered) array according to the code provided in the callback (that is with the same behaviour as the original filter method).
Test the method with the same array and callback as in the example with the original filter method.
b) Implement a function: myMap(array, callback)that, provided an array and a callback, provides the same functionality as calling the existing map method on an array.
Test the method with the same array and callback as in the example with the original map method. */

/*
function myFilter(array, callback){
	let filteredArray = new Array(); 
	array.forEach(element => filteredArray.push(callback(element)));
	return filteredArray;
}


function filterLogic(currentValue){
	if(currentValue != 3){
		return currentValue;
	}
	else{
		return null;
	}
}

function myMap(array, callback){
	let = mappedArray = new Array();
	array.forEach(element => mappedArray.push(callback(element)));
	return mappedArray
}

function mapLogic(currentValue){
	return 'this is the currentValue' + currentValue
}

let testFilterArray = [1, 3, 3, 4, 5 , 7];

let testFilterResult = myFilter(testFilterArray, filterLogic);

let testRealFilterResult = testFilterArray.filter(number => number !=3)

let testMapResult = myMap(testFilterArray, mapLogic)
console.log(testFilterResult);
console.log(testRealFilterResult);
console.log(testMapResult);
*/
Array.prototype.myFilter= function(callback){
	let filteredArray = new Array(); 
	this.forEach(element => filteredArray.push(callback(element)));
	return filteredArray;
}

Array.prototype.myMap=function(callback){
	let = mappedArray = new Array();
	this.forEach(element => mappedArray.push(callback(element)));
	return mappedArray
}
function filterLogic(currentValue){
	if(currentValue != 3){
		return currentValue;
	}
	else{
		return null;
	}
}

prototypeTestArray = [1,2,3,4,5, 6,7,8];

prototypeFilterTestResult = prototypeTestArray.myFilter(filterLogic);
console.log(prototypeFilterTestResult);

prototypeMapResult = prototypeTestArray.myMap(function(item){
	return 'this is the current item: ' + item
});


console.log(prototypeMapResult)


/* Reduce ** a) Use join to create a single string from all, with names: comma-, space. and  # - separated.
 
*/

var all = ["Lars", "Peter", "Jan", "Bo"]

let commaSep = all.join(',')
let spaceSep = all.join(' ')
let hashSep = all.join('#')

console.log(commaSep)
console.log(spaceSep)
console.log(hashSep)

/*
Now let’s create our own reducer functions (see here for info).
b) Given this array: var numbers = [2, 3, 67, 33]; 
Create a reducer function that will return the sum (105) of all values in numbers
*/
let numbers = [2,3,67,33]

function myReducer(array){
	let accumulator = 0;
	array.forEach(element=> accumulator+=element)

	return accumulator
}

let reducedItem = myReducer(numbers)
console.log(reducedItem)
/*
c)  Given this array:
*/
let members = [
 {name : "Peter", age: 18},
 {name : "Jan", age: 35},
 {name : "Janne", age: 25},
 {name : "Martin", age: 22},
]
/*
Create a reducer function that will return the average age of all members.
*/


function getAverage(array){
	let accumulator
	array.forEach(element => accumulator + element) 
	let average = accumulator/array.length;
	return average
}

let averageAge = getAverage(members);

console.log(averageAge);








