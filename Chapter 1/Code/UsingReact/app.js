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
