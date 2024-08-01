//object assign array to object
let arr = [1, 2, 3, 4];
let b = ["shubham", "Aniket", "Harshal", "Vipin"];
const assigned = Object.assign(
  ...arr.map((sr, name) => ({
    [sr]: b[name],
  }))
);
console.log(assigned); // {1: 'shubham', 2: 'Aniket', 3: 'Harshal', 4: 'Vipin'}

//obj to array
let obj = { name: "John", age: 30, city: "New York" };
let arr = Object.entries(obj);
console.log(arr); // [['name', 'John'], ['age', 30], ['city', 'New York']]

//Assign Attribute to obj in arr
let arr = [{ id: 1, name: "Test", class: "classobj" }];
let newprop = (arr[0].age = 27);
console.log(arr); //[{age: 27,class: "classobj",id: 1,name: "Test"}]

//**object**
// Example usage
const user = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "traveling"],
  "likes to eat": "pizza", //added property with spaces
  age: 20, //if there are 2 keys with same name "age" it will replace first key and will give o/p of 20 at the place of age;
};

delete user.age;
console.log(user); //{address: {city: "New York",country: "USA"},hobbies: ["reading", "traveling"],name: "John"}

//to access likes to eat property
console.log(user["likes to eat"]);

//iterate over keys
for (key in user) {
  console.log(user[key]); //output  "pizza" "John"{city: "New York",country: "USA"}["reading", "traveling"]"pizza"
}

//JSON.strigify vs JSON.parse
const user1 = {
  name: "Harshal",
  age: 27,
};
const strobj = JSON.stringify(user1); //converts to an string
console.log(strobj); //output {"name":"Harshal","age":27}
console.log(JSON.parse(strobj)); //converts to an object

//destructuring object
const user2 = {
  name: "John",
  age: 30,
};
const { name } = user2;
console.log(name); //"John"

//Objects with hof
let car = [
  {
    color: "red",
    type: "cabrio",
    registration: new Date("2016-05-02"),
    capacity: 2,
  },
  {
    color: "blue",
    type: "baleno",
    registration: new Date("2016-06-02"),
    capacity: 5,
  },
  {
    color: "black",
    type: "scorpio",
    registration: new Date("2016-07-02"),
    capacity: 7,
  },
];

//.find
const redis = car.find((cars) => cars.color === "red");
console.log(redis);

//map
const size = car.map((cars) => {
  if (cars.capacity === 2) {
    return "small";
  } else if (cars.capacity === 5) {
    return "medium";
  } else {
    return "large";
  }
});
console.log(size);

//sort
const sorted = car.sort((c1, c2) =>
  c1.capacity < c2.capacity ? 1 : c1.capacity > c2.capacity ? -1 : 0
);
console.log(sorted);

//some & every
console.log(car.some((cars) => cars.color === "red" && cars.type === "cabrio"));
console.log(car.every((cars) => cars.capacity > 4));

//filter
const filtered = car.filter((cars) => cars.capacity > 3);
console.log(filtered.map((cars) => cars.type));

//reduce
const reduced = car.reduce((crr, acc) => {
  return crr + acc.capacity;
}, 0);
console.log(reduced);
