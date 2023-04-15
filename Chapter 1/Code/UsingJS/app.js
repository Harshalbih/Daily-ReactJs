// Creating h1 html element using document web API
const heading = document.createElement('h1');

// return content used inside h1 tag in the dom
heading.innerHTML = 'Hello World! 😍 I love React';

const p = document.createElement('p');
p.innerHTML = `<b>Let's start with React Yeah! 😊</b>`;

const div = document.createElement('div');
div.setAttribute('id', 'container');

const heading2 = document.createElement('h2');
heading2.innerText = '<i>Hello World!</i>';

div.appendChild(heading2);

// accessing the root element using document web API: getElementById
const root = document.getElementById('root');

// append the heading element to the root element
root.appendChild(heading);
root.appendChild(p);
root.appendChild(div);
