const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

function handleClick() {
  console.log("🐛 IT GOT CLICKED!!!");
}

const hooray = () => console.log("HOORAY!");

butts.addEventListener("click", handleClick);
coolButton.addEventListener("click", hooray);

butts.removeEventListener("click", handleClick);

const buyButtons = document.querySelectorAll("button.buy");

function handleBuyButtonClick(e) {
  const button = e.target;
  console.log(button);
  console.log(button.textContent);
  // console.log(button.dataset.price);
  // console.log(button.dataset.name);

  // console.log(e.target);
  // console.log(e.currentTarget);
  // console.log(e.target === e.currentTarget);

  // e.stopPropagation();
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
});

const pEl = document.querySelector(".p-1");
const div1El = document.querySelector(".div-1");
const div2El = document.querySelector(".div-2");
const div3El = document.querySelector(".div-3");

pEl.addEventListener("click", () => console.log("I'm the P"));
div1El.addEventListener("click", () => console.log("I'm the div1El"));
div2El.addEventListener("click", () => console.log("I'm the div2El"));
div3El.addEventListener("click", () => console.log("I'm the div3El"));


window.addEventListener("click", function () {
  console.log("window clicked");
});

const photoEl = document.querySelector(".photo");

photoEl.addEventListener("mouseenter", (e) => {
  console.log(e.currentTarget);
  console.log(this);
});
