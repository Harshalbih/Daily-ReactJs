import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {}, 'Hello Devs');
// How React.createElement get's executed?
// React.createElement => Returns an Object => Converted into HTML through React => Reander in the DOM (Using ReactDOM)

// JSX Syntax =>
// Create a h1 Tag
// This is valid Javascipt syntax
// Question: Is JSX html inside JavaScript is True or False? => True :( => False :)
// This (JSX) is html like syntax => Fancy way of writing HTML
// How JavaScript recognizes this syntax?????
// How does this work in browsers?

// How JSX executes behind the scenes?
// JSX (babel) => React.createElement => Returns an Object => Converted into HTML through React => Reander in the DOM (Using ReactDOM)
/*
Advantages of JSX:
  Readibility
  Mantainability
  Developer friendly
  Clean and less code
*/
// JSX Expression
const heading1 = (
  <h1 id="hello" key={1}>
    Namaste Devs
  </h1>
);

const Title = () => <h1>Title Component</h1>;

/**
 * React Component: There are two types of React components -
 *  Functional Component - NEW
 *  Class Based Component - OLD
 */

/*
FUnctional Component: Functional Component is a JavaScript function that returns JSX Expression or Composition of React Element.
Rules-
1. Component Name starts with a Capital letter
.// JSX Sanitize our code from the malisious attack

Component Composition: Want to use component inside another component
*/

const HeaderComponent = () => {
  return (
    <div className="container">
      {heading}
      {/* Render as a tag */}
      <Title />
      {/* Render as a function */}
      {Title()}
      <h1>Functional Header Component 🚀</h1>
    </div>
  );
};

const HeaderComponent1 = () => (
  <div className="container">
    <h1>Functional Header Component 🚀</h1>
  </div>
);

const HeaderComponent2 = function () {
  return (
    <div className="container">
      <h1>Functional Header Component 🚀</h1>
    </div>
  );
};

const div = React.createElement('div', {}, [heading, heading1]); // React Element (div)

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render React Element
root.render(heading1);

// Render functional Component
root.render(<HeaderComponent/>);
