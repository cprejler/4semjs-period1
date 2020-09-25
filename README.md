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
  
  **Webpack is really useful with frontend projects because they usually contain a lot of assets. Webpack helps us maintain these assets by bundling them. It is able to do this, **

