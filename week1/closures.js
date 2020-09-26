

/*
 * i2) Implement a reusable function using the closure feature, that should encapsulate information about a person (name, and age) and returns an object with the following methods
setAge
setName
getInfo (should return a string like Peter, 45)


*/


var person = {
	firstName : "Casper",
	lastName : "Prejler",
	age : 26,
	setAge : function(age){
		this.age = age;},
	setName : function(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;},
	getInfo : function(){
		return this.firstName + " " + this.age;}

}

person.setAge(25);

console.log(person.getInfo());


