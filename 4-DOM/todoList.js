const todoForm = document.querySelector(".todo-form");
const list = document.querySelector(".list");

// const deleteButtons = document.querySelectorAll("button.remove-item");

// console.log(deleteButtons)

// We need an array to hold our state
let items = [];

function handleSubmit(e) {
  e.preventDefault();

  const name = e.currentTarget.item.value;

  if (!name) return;

  // console.log(name)
  const item = {
    id: Date.now(),
    name: name,
    completed: false,
  };

  items.push(item);

  e.currentTarget.reset();

  updateItems();
}

function updateItems() {
  const html = items
    .map(
      (item) =>
        `<li class="todo-item">
          <input value="${item.id}" type="checkbox" ${
          item.completed ? "checked" : ""
        }  />
          <span class="itemName">${item.name}</span>
          <button class="remove-item" value="${item.id}"> X </button>
        </li>`
    )
    .join("");

  // console.log(html)

  list.innerHTML = html;

  // const deleteButtons = document.querySelectorAll("button.remove-item");

  // deleteButtons.forEach()

  saveToLocalStorage();
}

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  updateItems();
}

function toogleItem(id) {
  const itemToToogle = items.find((item) => item.id === id);
  itemToToogle.completed = !itemToToogle.completed;
  updateItems();
}

list.addEventListener("click", function (e) {
  const id = parseInt(e.target.value);
  if (e.target.matches("button")) {
    deleteItem(id);
  } else if (e.target.matches('input[type="checkbox"]')) {
    toogleItem(id);
  }
});

function saveToLocalStorage() {
  console.info("Saving items to localstorage");
  localStorage.setItem("items", JSON.stringify(items));
}

todoForm.addEventListener("submit", handleSubmit);

function restoreFromLocalStorage() {
  console.info("Restoring from LS");
  // pull the items from LS
  const lsItems = JSON.parse(localStorage.getItem("items"));
  if (lsItems.length) {
    items = lsItems;
    updateItems();
  }
}

restoreFromLocalStorage();