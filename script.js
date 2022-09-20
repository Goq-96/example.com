let h1 = document.createElement('h1');
h1.textContent = "Welcome";

let div = document.querySelector("div")
div.insertAdjacentElement('afterbegin', h1)
