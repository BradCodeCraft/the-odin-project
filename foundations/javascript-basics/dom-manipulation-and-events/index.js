const body = document.querySelector("body");

const one = document.createElement("p");
one.style.color = "red";
one.innerText = "Hey I'm red!"

body.appendChild(one);

const two = document.createElement("h3");
two.style.color = "blue";
two.innerText = "I'm a blue h3";

body.appendChild(two);

const three = document.createElement("div");
three.style.border = "1px solid black";
three.style.backgroundColor = "pink";

const threeFirstChild = document.createElement("h1");
threeFirstChild.innerText = "I'm in a div";

three.appendChild(threeFirstChild);

const threeSecondChild = document.createElement("p");
threeSecondChild.innerText = "ME TOO!";

three.appendChild(threeSecondChild);

body.appendChild(three);
