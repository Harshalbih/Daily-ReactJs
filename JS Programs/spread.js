//spread operator
const myName = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName, "name."];
console.log(aboutMe);
//[ 'Oluwatobi','Sofela', 'is', 'my','name.' ]

//Rest operator
// Define a function with two regular parameters and one rest parameter:
function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

// The invocation above will return:
["CodeSweetly", "Web Developer", "Male"];
