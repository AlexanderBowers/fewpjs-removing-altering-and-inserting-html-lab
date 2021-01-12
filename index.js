let newElement = document.body.querySelector("main#main");

newElement.remove("main#main");

let h1 = document.createElement('h1');
h1.id = "victory";
h1.innerHTML = `Alex is the champion`;
document.body.appendChild(h1);

let newHeader = document.querySelector("h1#victory");

