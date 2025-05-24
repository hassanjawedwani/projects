const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div");

const checkNumber = () => {
  let number;
  if (input.value) {
    number = input.value;
  } else {
    alert("Please provide a phone number");
  }
  const regex = /^(?:\+92|0092|0)3[0-9]{2}[-]?[0-9]{7}$/;
  if (regex.test(number)) {
    output.innerText += `Valid PK number: ${number}\n`;
  } else {
    output.innerText += `Invalid PK number: ${number}\n`;
  }
};

const enterKeyHandler = (e) => {
  if (e.key === "Enter") {
    checkNumber();
  }
};
input.addEventListener("keydown", enterKeyHandler);
checkBtn.addEventListener("click", checkNumber);
clearBtn.addEventListener("click", () => {
  input.value = "";
  output.innerText = "";
});
