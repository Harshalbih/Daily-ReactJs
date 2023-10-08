const myform = document.getElementById("my-form");
const msg = document.getElementById("msg");
const nameInput = document.querySelector("#name");
const emailInput = document.getElementById("email");
const ul = document.getElementById("users");

myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.innerHTML = "!!Please enter all values";

    setTimeout(()=>msg.remove(), 3000)
  } else {
    const li =  document.createElement('li');
    li.innerHTML = `${nameInput.value}:${emailInput.value}`;
    ul.appendChild(li);

    //clear fileds
    nameInput.value ='';
    emailInput.value='';
  }
}
