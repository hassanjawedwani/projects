const sortButton = document.getElementById("sort-button");

const sortInputValues = (e) => {
  e.preventDefault();
  const inputValues = [...document.getElementsByClassName("input-values")].map(
    (input) => Number(input.value)
  );
  // const sortedArray = bubbleSort(inputValues);
  // const sortedArray = selectionSort(inputValues);
  // const sortedArray = insertionSort(inputValues);
  const sortedArray = inputValues.sort((a, b) => a - b);
  updateUI(sortedArray);
};

const updateUI = (arr) => {
  arr.forEach((number, id) => {
    const element = document.getElementById(`output-value-${id}`);
    element.innerText = number;
  });
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      console.log(array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      console.log(array, array[j], array[i]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
};

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;
    while ( j >= 0 && array[j] > currValue) {
      if (array[j] > currValue) {
        array[j + 1] = array[j];
      }
      j--;
    }
    array[j + 1] = currValue;
  }
  return array;
}

sortButton.addEventListener("click", sortInputValues);