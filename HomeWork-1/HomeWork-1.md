# Q 1. what is Emmet 

Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, email designers type less, saving both keystrokes and time when building a campaign. Also, relying on Emmet’s autocompletion means fewer typos and missing tags, leading to more robust emails.

# Q 2. What is diffrence between library and Framework .


# Library	
Libraries provide developers with predefined functions and classes to make their work easier and boost the development process.	

By using a library, you can control the flow of the application and call the library. 

Generally, libraries are a collection of helper modules, objects, classes, functions, message templates, pre-written code, etc.


Codes in libraries are geared toward a particular program or to solve a specific development problem. Therefore, developers must modify library code to meet their needs.


It is possible to call a library out of context. You may use the library wherever you see fit in your code.


In the program linking and binding process, they play an important role.


Having a library means understanding the functionality of each method, and it isn’t easy to create complex interactions since you need to call many methods to get the desired results. 

Less code is required to build libraries, which leads to faster loading times and better performance.


Good code quality, reusability, and control, enhanced speed and performance of the program, etc.	

JQuery, React JS, etc.	

# Framework
Framework, on the other hand, is like the foundation upon which developers build applications for specific platforms. 


In contrast, when you use a framework, the control is inverted, i.e., the framework controls the flow and calls your code.


Frameworks consist of a lot of APIs, compilers, toolsets, support programs, libraries, etc.


Despite the fact that frameworks generate new codes for developers. These codes cannot be altered or modified later. Unlike libraries, frameworks do not allow users to modify their pre-written codes, so you don’t have to worry about deleting or changing them.


On the other hand, you can only call and use what belongs to a Framework within the same Framework. 


Using them, you can build and deploy applications in a standard way as the framework already provides code to perform common tasks and uses code provided by a developer for custom functionality.


Frameworks, on the other hand, embody the basic flow, and since plugins need to be added to code, it is easier to do the right modification.

Faster programming, support from the community, great support for MVC (Model View Controller) pattern, etc.

Spring, NodeJS, AngularJS, Vue JS, etc.


# Q3. What is CDN? Why do we use it?

A CDN is a network of servers that distributes content from an “origin” server throughout the world by caching content close to where each end user is accessing the internet via a web-enabled device.
The content they request is first stored on the origin server and is then replicated and stored elsewhere as needed.


# Q4. Why is React known as React?

React was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app’s data, the view should “react” or change with those user events. User events being mouse clicks, typing, submitting a form.


# Q5. What is crossorigin in script tag?

The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain


# Q6. What is diference between React and ReactDOM?

React is a javascript library, designed for building better user interfaces.

React-DOM is a complimentary library to React which glues React to the browser DOM.

React has nothing to do with a browser or web for that matter.

React-DOM binds the idea of React to a web browser.


# Q7. What is difference between react.development.js and react.production.js files via CDN?

The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.

The production build, on the other hand, runs in production mode which means this is the code running on your client's machine. The production build runs uglify and builds your source files into one or multiple minimized files. It also extracts CSS and images and of course any other sources you're loading with Webpack. There's also no hot reloading included. Source Maps might be included as separate files depending on your webpack


# Q8.  What is async and defer?


Async - means execute code when it is downloaded and do not block DOM construction during downloading process. Defer - means execute code after it's downloaded and browser finished DOM construction and rendering process.



# Q9. What is arrow function in JavaScript?


Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example,

This function

// function expression
let x = function(x, y) {
   return x * y;
}
can be written as

// using arrow functions
let x = (x, y) => x * y;















