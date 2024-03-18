let char: string = 'harsh';
let age: number;
let isLoggedIn: boolean;

// age = 'harsh'; error
age = 30;

// isLoggedIn = 25; error
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

ninjas.push('harsh');
ninjas.push('bihade');
console.log(ninjas);

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);

let uid: string|number;

// objects
let ninjaOne: object;
ninjaOne = { name: 'harsh', age: 27 };

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};
ninjaTwo = { name: 'raj', age: 20, beltColour: 'black' };

//any
let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'harsh' };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let ninja: { name: any, age: any };

ninja = { name: 'yoshi', age: 25 };
console.log(ninja);

ninja = { name: 25, age: 'yoshi' };
console.log(ninja);

//function
const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
  }
  
  add(5, 10, 'ninja');
  
  const minus = (a: number, b: number): number => {
    return a + b;
  }
  
  let result = minus(10,7);
  console.log(result);

  