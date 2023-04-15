/***
 *
 *
 * Created a server for you
 * Automatic Reload when something got changed - HMR: Hot Module Replacement (Parcel is doing for us)
 * How Parcel knows that something got changed - File Watcher Algorithms (Parcel is doing for us) - Written in C++
 * Parcle is doing so many things for us - That's required some space - Which handles using .parcel-cache
 * dist - minified version (development build for us and hosted on server) - npx parcel entrypoint
 * Minified production build - npx parcel build entrypoint
 * BUNDLING
 * Cleaning up our code
 * Dev and Production build
 * Super fast build algorithm
 * Image optimization
 * JS optimization
 * Caching while development
 * Compression
 * Compatible with older versions of browsers (using browserslist and babel packages)
 * enable HTTPS on dev - (npx parcel entrypoint --https)
 * Manages PORT numbers for multiple running projects
 * Consistent Hashing Alogorith to cache it up or bundling
 * Zero Configuration
 * COnsole log removal: for that required configuration (babel-plugin-transform-remove-console package)
 * 
 * Transitive Dependencies
 * 
 * ?.Anything that would be auto generated put inside the gitignore file (Generate on the Server)
 * ?.How will I make my project older browser compatible (using browserlist package) - COde compatible
 *
 *
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

// create element using React createElement
const heading = React.createElement('h1', {}, 'Hello World! 😍 I Love React');

// Create element using React createElement with attributes and content which i want to display inside the element
const heading2 = React.createElement(
  'h2',
  {
    id: 'subtitle',
    className: 'subtitle',
    style: {
      backgroundColor: 'lightgreen',
      padding: '10px',
      borderRadius: '10px',
    },
  },
  "Heyy there! Let's start learning React!"
);

// Create div element using React createElement with multiple child element
const container = React.createElement(
  'div',
  {
    id: 'container',
    helloww: 'Hey', // Props or attributes
  },
  [heading, heading2]
);

// Used to create or let React know which element is being used as root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// render inside the dom
root.render(container);

// Production Ready::
// Optimize, budle it, minify, clean console, caching
