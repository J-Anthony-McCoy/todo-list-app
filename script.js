// Show an unordered list of to do's
// Show an input to enter a new to do
// Show a button to add a to  do. When the button is clicked:
// The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed

// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.

// declaring global variables for grabbing elements in HTML
const wholeList = document.querySelector("#wholeList");
const submit = document.querySelector("#submit");
const input = document.querySelector("#input");

// event listener for clicking on 'Add to List' on page
submit.addEventListener("click", addItem);

// add item to list function
function addItem(event) {
  event.preventDefault();
  let newItem = document.getElementById("input").value;
  let newLi = document.createElement("li");
  // alerts user if submit button is clicked with no text in box
  if (!newItem) {
    alert("Add a task in the submission box!");
  } else {
    newLi.innerHTML = newItem;
    wholeList.appendChild(newLi);
    document.getElementById("input").value = "";
  }
}

// remove list item if clicked. line strike and 1s delay
wholeList.addEventListener("click", lineStrike);

wholeList.addEventListener("click", removeItem);

function lineStrike(e) {
  e.target.style.textDecoration = "line-through";
}

function removeItem(e) {
  setTimeout(function () {
    e.target.remove();
  }, 1000);
};

// CANNOT GET WORKING - LIVE UPDATE LIST OF ITEMS REMAINING IN LIST
// const h3 = document.querySelector("#remaining");
// let itemAmount = document.querySelector("ul").children;
// let remaining = `Total number of to do tasks remaining: ${itemAmount.length}`
// let numberLeft = document.createElement("h4")
// numberLeft.innerHTML = remaining;
// h3.appendChild(numberLeft);
