const task = new Promise(async (resolve, reject) => {
  try {
    let api = await fetch("https://jsonplaceholder.typicode.com/todos/");
    setTimeout(() => {
      if (api.status == 200) {
        resolve(api.json());
      } else {
        reject(new Error(api.statusText));
      }
    }, 2000);
  } catch (error) {
    reject(error);
    console.log(error)
  }
});

task
  .then((data) => console.log("success", data))
  .catch((error) => console.log("error", error))
  .finally(() => console.log("finally"));


  const promise = new Promise((resolve, reject=>{
    let age = 28;
    if(age > 18) {
      resolve("You are eligible to vote");
      } else {
        reject("You are not eligible to vote");
        }
  }))
  promise.then((message)=>console.log(message))
  .catch((message)=>console.log(message));