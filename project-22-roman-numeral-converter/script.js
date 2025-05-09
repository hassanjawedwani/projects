const numberInput = document.getElementById("number");
const form = document.querySelector("form");
const output = document.getElementById("output");

const romanNumeralConverter = (input) => {
  let result = "";
  switch (input) {
    case 1:
      result += "I";
      break;
    case 2:
      result += "II";
      break;
    case 3:
      result += "III";
      break;
    case 4:
      result += "IV";
      break;
    case 5:
      result += "V";
      break;
    case 6:
      result += "VI";
      break;
    case 7:
      result += "VII";
      break;
    case 8:
      result += "VIII";
      break;
    case 9:
      result += "IX";
      break;
    case 10:
      result += "X";
      break;
    case 20:
      result += "XX";
      break;
    case 30:
      result += "XXX";
      break;
    case 40:
      result += "XL";
      break;
    case 50:
      result += "L";
      break;
    case 60:
      result += "LX";
      break;
    case 70:
      result += "LXX";
      break;
    case 80:
      result += "LXXX";
      break;
    case 90:
      result += "XC";
      break;
    case 100:
      result += "C";
      break;
    case 200:
      result += "CC";
      break;
    case 300:
      result += "CCC";
      break;
    case 400:
      result += "CD";
      break;
    case 500:
      result += "D";
      break;
    case 600:
      result += "DC";
      break;
    case 700:
      result += "DCC";
      break;
    case 800:
      result += "DCCC";
      break;
    case 900:
      result += "CM";
      break;
    case 1000:
      result += "M";
      break;
    case 2000:
      result += "MM";
      break;
    case 3000:
      result += "MMM";
      break;
  }
  return result;
};

const formHandler = (e) => {
  e.preventDefault();
  if (!numberInput.value) {
    output.innerText = "Please enter a valid number";
    return;
  }
  if (numberInput.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (numberInput.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  let input = parseInt(numberInput.value);

  const remainders = [];
  while (input > 0) {
    remainders.push(input % 10);
    input = Math.floor(input / 10);
  }
  console.log("Remainders: ", remainders);
  let result = "";
  for (let i = 0; i < remainders.length; i++) {
    result = romanNumeralConverter(remainders[i] * 10 ** i) + result;
  }

  output.innerText = result;
  output.classList.remove("hide");
  numberInput.value = "";
};

form.addEventListener("submit", formHandler);