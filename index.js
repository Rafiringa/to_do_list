const form = document.querySelector("form");

// Store part
function storeList() {
  window.localStorage.todoList = liste.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    liste.innerHTML = window.localStorage.todoList;
  } else {
    liste.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
}

window.addEventListener("load", getTodos);

// Add element
form.addEventListener("submit", (e) => {
  e.preventDefault();

  liste.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

//Remove element
liste.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
