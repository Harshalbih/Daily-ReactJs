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
  }
});

task
  .then((data) => console.log("success", data))
  .catch((error) => console.log("error", error))
  .finally(() => console.log("finally"));
