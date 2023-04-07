const billAmount = document.querySelector("#amount");
const nrPeople = document.querySelector(".nr-people");
const addPeople = document.querySelector(".add");
const subPeople = document.querySelector(".substract");
const tipSelected = document.querySelectorAll(".tips");
const customTip = document.querySelector(".cstm-tip");
const customBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".cstm-close");
const customInput = document.querySelector("#custom");
const getTipBtn = document.querySelector(".calculate");

//global variables
let bill = 0;
let people = Number(nrPeople.innerHTML);
let prevB = null;

//Bill total
billAmount.addEventListener("input", (e) => {
  e.preventDefault();
  bill = Number(billAmount.value);
  if (bill > 0) {
    billAmount.classList.add("valid");
  }
});

// Select Tip
tipSelected.forEach((event) => {
  event.addEventListener("click", (e) => {
    e.target.classList.add("active-tip");
    if (
      customBtn.classList.contains("hide") &&
      customTip.classList.contains("show")
    ) {
      customTip.classList.remove("show");
      customBtn.classList.remove("hide");
    }
    if (prevB !== null) {
      prevB.classList.remove("active-tip");
    }
    prevB = e.target;
    tip = prevB.value;
  });
});

//Custom Tip
customBtn.addEventListener("click", () => {
  customTip.classList.add("show");
  customBtn.classList.add("hide");
  customInput.value = "";
});

closeBtn.addEventListener("click", () => {
  customTip.classList.remove("show");
  customBtn.classList.remove("hide");
});

customTip.addEventListener("keyup", (e) => {
  if (prevB != null && prevB.classList.contains("active-tip")) {
    prevB.classList.remove("active-tip");
  }
  if (e.target.id == "custom") {
    tip = e.target.value;
    console.log(tip);
  }
});

//Number of people
addPeople.addEventListener("click", (e) => {
  if (people > 0) {
    people++;
    console.log(people);
    nrPeople.innerHTML = people;
  }
});

subPeople.addEventListener("click", (e) => {
  if (people > 1) {
    people--;
    console.log(people);
    nrPeople.innerHTML = people;
  }
});

getTipBtn.addEventListener("click", () => {
  if (bill != 0 && tip != "undeefined") {
    document.querySelector(".result").classList.remove("hide");
    let finalTip = (bill * tip) / 100;
    let total = bill + finalTip;
    document.querySelector(".result").innerHTML = `
    <span>Total tip: ${finalTip}</span>
    <span>(each: ${finalTip / people})</span>
    <span class="total">Total: ${total}</span>
  `;
  }
});
