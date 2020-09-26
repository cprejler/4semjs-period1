# 4semjs-period1


## Learning Goals

### Explain and Reflect:
* Explain the differences between Java and JavaScript + node. Topics you could include:
  - that Java is a compiled language and JavaScript a scripted language 
  
    **JavaScript is interpreted at runtime. Java compiles into bytecode**
    
  - Java is both a language and a platform
  
    **Java runs on the JVM(Java Virtual Machine) which makes it platform independent, as long as the runtime containing the JVM is installed**
  - General differences in language features.
  
    **Vanilla JavaScript can only run in the browser. Java is strongly typed**
  
    **Java has a thread based approach to concurrency. Javascript has event based approach to concurrency.**
  
    **Objects of Java are class based even we can’t make any program in java without creating a class. JavaScript Objects are     prototype based.**
  - Blocking vs. non-blocking
  
    **JavaScript is blocking which means that the stack executes the code sequencially.**
    **Java is non blocking because we have the ability to start threads and run code in parallel**
  
* Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.

  **Node.js is a run time built in C++. Because it is built in C++ it is able to execute tasks in asynchrously as well as run on a computer, which means it can run on a server and work with the underlying operating sytem.**
  
  **NPM is the package manager for node(like, pip, maven and nuget). It has a bunch of modules and toolsets to create different types of applications.**
  
* Explain about the Event Loop in JavaScript, including terms like blocking, non-blocking, event loop, callback queue and other API's. Make sure to include why this is relevant for us as developers.

  **The event loop monitors the Call Stack and the Callback queue. If we execute ```console.log('Hi)```  then that code is put on     the call stack.**

  **If we use the setTimeout(callback) function JavaScript will make a call to the Web API's with the callback. The ```setTimeout```  function will then be removed from the callstack so we are free to execute code. After the x time specified by ```setTimeout()``` the callback of ```setTimeout()``` is pushed to the Callback Queue. The eventloop then pushes the callback from the queue to the call stack**

  **The callback is then executed and the code is added onto the call stack, which then executes as well. When it is done executing it is removed from the call stack.**



* What does it mean if a method in nodes API's ends with xxxxxxSync?

  **It means that it is blocking. Code will only be run after the Sync function is finished.**


* Explain the terms JavaScript Engine (name at least one) and JavaScript Runtime Environment (name at least two)
  **A JavaScript engine is a computer program that executes JavaScript (JS) code. The first JavaScript engines were mere interpreters, but all relevant modern engines utilize just-in-time compilation for improved performance which means that it can compile code at run time. The most used engine is V8 made by Google**
  
* Explain (some) of the purposes with the tools Babel and WebPack and how they differ from each other. Use examples from the exercises.

  **Babel is used to transtale ES6+ code into ES5. Babel is sometimes called a transpiler. This is very useful because we can have the rich language features used in the newest JavaScript, even if node or the browser doesn't support it yet.**
  
  **Webpack is really useful with frontend projects because they usually contain a lot of assets. Webpack helps us maintain these assets by bundling them.**

* Explain using sufficient code examples the following features in JavaScript (and node)

  - Variable/function-Hoisting
  
    **In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared. Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).**
  
    **Variables defined with let and const are hoisted to the top of the block, but not initialized.Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.Using a let or const variable before it is declared will result in a ReferenceError.The variable is in a "temporal dead zone" from the start of the block until it is declared**
  
  - this in JavaScript and how it differs from what we know from Java/.net.
  
    **Java uses class methods we can call on the object**
  
    **In JavaScript ```this``` refers to the current objects executing context. Every JavaScript function has a reference to it's current execution context**
  
    ```
    var person = {
      firstName : "Casper",
      lastName : "Prejler",
      id : 225512,
      fullName : function(){
        return this.firstName + " " + this.lastName;
      }
    }

    //In this case this belongs to the person object

    console.log(person.fullName())


    //We have access to the fullName function on a different object by using the call keyword
    //

    var person2 = {
      firstName : "John",
      lastName : "Hansen"
    }


    console.log(person.fullName.call(person2));
    ```



  - Function Closures and the JavaScript Module Pattern
    **A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.**

    **The closure has three scope chains:**

      - **it has access to its own scope — variables defined between its curly brackets**
      
      - **it has access to the outer function’s variables**
      
      - **it has access to the global variables**
  
      ```
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
      ```
  
  - User-defined Callback Functions (writing functions that take a callback)
  
    ```
    function myFilter(array, callback){
	    let filteredArray = new Array(); 
	    array.forEach(element => filteredArray.push(callback(element)));
	    return filteredArray;
    }
    ```
  
  - Explain the methods map, filter and reduce
  
      - **The map() method creates a new array with the results of calling a function for every array element.**
      - **The filter() method creates an array filled with all array elements that pass a test (provided as a function).**
      - **The reduce() method reduces the array to a single value by using an accumulator argument**
  
  - Provide examples of user-defined reusable modules implemented in Node.js (learnynode - 6)
    
    ```
    const fs = require('fs');
    const path = require('path');


    module.exports = (dirName, fileExt, callback) => {
      fs.readdir(dirName, (err, files) => {
        if (err)
          return callback(err);
        else {
          list = files.filter(function(file){
            if(path.extname(file) ===  '.' + fileExt) return true;

        })
        return callback(null, list);
      }
    })}
    ```
  
  - Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, destructuring objects and arrays,   maps/sets etc.

    - **Arrow Function(Basically syntactic sugar, so we don't have to use the function keyword. Makes the code more clean**
      ```
      hello = () => {
          return "Hello World!";
      } 
      ```
    - **Rest is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined.**
      
      ```
      function fun(...input){ 
            let sum = 0; 
            for(let i of input){ 
                sum+=i; 
            } 
            return sum; 
      } 
      
      console.log(fun(1,2)); //3 
      console.log(fun(1,2,3)); //6 
      console.log(fun(1,2,3,4,5)); //15 
      
      ```
    - **Object destructuring is an easy way to extract properties of an object**

      ```
      var hero = {
        name: 'Batman',
        realName: 'Bruce Wayne'
      };

      //Pre ES2015
      var name     = hero.name;
      var realName = hero.realName;

      //ES2015
      const { name, realName } = hero;
      ```
    
    
  
 - Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.

    ```
    class Vehicle {
    
      constructor (name, type) {
        this.name = name;
        this.type = type;
      }
    
      getName () {
        return this.name;
      }
    
      getType () {
        return this.type;
      }
    
    }class Car extends Vehicle {
    
      constructor (name) {
        super(name, 'car');
      }
    
      getName () {
        return 'It is a car: ' + super.getName();
      }
    
    }let car = new Car('Tesla');
    console.log(car.getName()); // It is a car: Tesla
    console.log(car.getType()); // car
    ```

  
  
 - Explain and demonstrate, how to implement event-based code, how to emit events and how to listen for such events
  
    ```
    const EventEmitter = require('events');

    class DOS_Detector extends EventEmitter {
      constructor(timeValue){
        super();  //Figure out what it is you have to extend (use moshes video)
        this.urls = new Map();
        this.TIME_BETWEEN_CALLS = timeValue;
      }
      addUrl = (url) =>{
        const time = new Date().getTime();
        if(this.urls.has(url)){
          const deltaTime = time - this.urls.get(url) 
          if(deltaTime < this.TIME_BETWEEN_CALLS){
            //Add this info to the event {url:url,timeBetweenCalls:deltaTime}
        this.emit('DosDetected', {url: url, timeBetweenCalls: deltaTime});
        }
      }
      this.urls.set(url,time);
    }
    }

    module.exports = DOS_Detector;
    ```
  
  ```
  const DosDetector = require('./dosDetector');

  const dosDetector = new DosDetector(500);
  dosDetector.on('DosDetected', (eventArg) =>{
	  console.log('Listener called', eventArg);
  });

  dosDetector.addUrl('google.com')
  setTimeout(function(){
	dosDetector.addUrl('google.com');
  }, 100);
  
  ```

- Explain the two strategies for improving JavaScript: Babel and ES6 + ES-Next, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers

  **It requires we install the packages from npm. We need to set up a proper configuration for it to work properly. Both babel and TypeScript are able to convert ES6 into backwards compatible code by transpiling it.** 
  
  **TypeScript compiles an entire project at once and Babel transpiles only one file at a time**

  **TypeScript implements type safety, where Babel doesn't care about types at all.** 

  **TypeScript cannot run in the browser directly, we need to compile it and generate a JS file.**

- Provide examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics

  **Interfaces**

  We are able to establish a blueprint that an object has to follow.

  ```
  interface MyFunc {
    (string1: string, string2: string, string3: string): string[];
  }

  let stringFunction : MyFunc;
  let stringFunctionUpper : MyFunc;
  stringFunction = function(string1, string2, string3){
      let list: string[] = [string1, string2, string3];
      return list;
  }
  ```

  **Classes**
  ```
  class Book implements IBook {
    title : string;
    readonly author: string;
    published?: Date;
    pages: number;

    constructor(t: string, a: string){ }

  }
  ```

  **Generics**

  Here we can control which type of input and output we want with typesafety.
  ```
  function reverseArr<T>(arg: Array<T>): Array<T>{
    return arg.reverse();
  }


  console.log(reverseArr<string>(["a","b","c"]));
  console.log(reverseArr<number>([1,2,3]));
  console.log(reverseArr<boolean>([true,true,false]));
  ```

### Callbacks, Promises and async/await


Explain about (ES-6) promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:

**Promises are a cleaner way of doing callbacks. We avoid having a huge pyramid of callback arguments**

  - Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel

    - Serial
      ```
      function get(url) {
        return new Promise(function(resolve, reject) {

          var req = new XMLHttpRequest();
          req.open('GET', url);

          req.onload = function() {
            if (req.status == 200) { 
                resolve(req.response); /* PROMISE RESOLVED */
            } else { 
                reject(Error(req.statusText)); /* PROMISE REJECTED */
            }
          };

          req.onerror = function() { reject(Error("Network Error")); };
          req.send();
        });
      }


      get(url)
      .then(function(response) {
          response = JSON.parse(response);
          var secondURL = response.data.url
          return get( secondURL ); /* Return another Promise */
      })
      .then(function(response) {
          response = JSON.parse(response);
          var thirdURL = response.data.url
          return get( thirdURL ); /* Return another Promise */
      })
      .catch(function(err) {
          handleError(err);
      });
      ```
    - Parralel

      ```
      var arrayOfURLs = ['one.json', 'two.json', 'three.json', 'four.json'];
      var arrayOfPromises = arrayOfURLs.map(get);

      Promise.all(arrayOfPromises)
      .then(function(arrayOfResults) {
          /* Do something when all Promises are resolved */
      })
      .catch(function(err) {
          /* Handle error is any of Promises fails */
      })

      ```


  - Example(s) that demonstrate how to implement our own promise-solutions.
    ```
    const createSecureString = (size) => {
        return new Promise((resolve, reject) => {
          crypto.randomBytes(size, (error, buffer) =>{
            if(error) return reject(error);
            resolve({
              length: buffer.length,
              random: 'A buffer with ' + buffer.length + ' hex-characters'
          });
        })
      });
    };
    ```

Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.

**Async functions use an implicit Promise to return results. Even if you don't return a promise explicitly, the async function makes sure that your code is passed through a promise. await blocks the code execution within the async function, of which it ( await statement ) is a part.**

Provide examples to demonstrate

- Why this often is the preferred way of handling promises

  The Promise way

  ```
  const getPlanetforFirstSpeciesInFirstMovieForPerson = id => {
      const obj = {}

      fetch(`https://swapi.dev/api/people/${id}`)
          .then(res => res.json())
          .then(data => {
              obj.name = data.name
          //Nested fetch as data.films returns a url
          fetch(data.films[0])
              .then(res => res.json())
              .then(data => {
              obj.firstFilm = data.title
              //Another nested fetch to get species?
              fetch(data.species[0])
              .then(res=> res.json())
              .then(data => {
                  obj.species = data.name
              });
          });


      fetch(data.homeworld)
      .then(res => res.json())
      .then(data => {
          obj.homeWorld = data.name;
              console.log(obj)
          });
      });


  }

  ```

  The clean async way 

  ```

  const getPlanetforFirstSpeciesInFirstMovieForPersonAsync = async id => {
      let person = {};
      try {
        const character = await fetch(
          `https://swapi.dev/api/people/${id}`
        )
        .then(res => res.json());

        person.name = character.name;

        const film = await fetch(character.films[0]).then(res => res.json());

        const homeworld = await fetch(character.homeworld).then(res => res.json());

        person.firstFilm = film.title;

        person.homeWorld = homeworld.name;

      } catch (error) {
        console.error(error);
      }
      console.log(person);
    };


  ```