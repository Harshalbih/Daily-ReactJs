# Day-1

## What is Emmet?

Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code.

## Difference between a Library and Framework?

Both frameworks and libraries are code written by someone else that is used to help solve common problems.
The technical difference between a framework and library lies in a term called inversion of control.

When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

## What is CDN? Why do we use it?

A content delivery networkrefers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.

A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

The mission of a CDN is to reduce latency. Latency is that annoying delay you experience when trying to access a web page or video stream before it fully loads on your device. Although measured in milliseconds, it can feel like forever, and may even result in a load error or time-out.

## Why is React known as React?

React was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app’s data, the view should “react” or change with those user events. User events being mouse clicks, typing, submitting a form.

## What is crossorigin in script tag?

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

## What is diference between React and ReactDOM ?

React: React is a javascript library, designed for building better user interfaces.

React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM

We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.

## What is difference between react.development.js and react.production.js files via CDN?

The **react.development.js** file is a version of the React library that is optimized for development. It includes extra warnings and error messages that can help you find problems with your code, and it is generally larger in size than the production version of the library.

On the other hand, the **react.production.js** file is a version of the React library that is optimized for production. It has been **minified** and stripped of **unnecessary code**, so it is **smaller in size** and runs more **efficiently** in the browser. It does not include the extra warnings and error messages that are present in the development version of the library.

## What is async and defer?

The async and defer attributes both allow the browser to continue parsing the HTML document while JavaScript files are being downloaded, but they differ in when those files are executed.

Async downloads and executes JavaScript as soon as it’s available, while defer attribute waits until the HTML document has been parsed before downloading and executing any external scripts.
if you have to use multiple scripts then it does not guaranty order of execution of scripts but defer does.
Suppose you have to use external scripts(google analytics) then use async attributes else use defer to maintain order of execution.
