let number1 = document.querySelector(`.number1`);
let number2 = document.querySelector(`.number2`);
let btn = document.querySelector(`.button`);

// calculate

let n1 = number1.value;
let n2 = number2.value;

n1 = Number(n1);
n2 = Number(n2);

document.addEventListener("keydown", (event) => {
  let plusone = n1++;
  number1.value = plusone;
});

document.addEventListener("click", (event) => {
  let plustwo = n2++;
  number2.value = plustwo;
});

//delete btn

btn.addEventListener("click", (event) => {
  let delete1 = `0`;
  let delete2 = `n2`;
  n2 = 0;
  n1 = 0;
  number1.value = delete1;
  number2.value = delete2;
});
