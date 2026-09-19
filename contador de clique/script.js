let sumValue=document.getElementById("counter");
let btnPlus=document.getElementById("btn-plus");
let btnReset=document.getElementById("btn-reset");

btnPlus.addEventListener("click", () => {
  sumValue.innerHTML = parseInt(sumValue.innerHTML) + 1;
});

btnReset.addEventListener("click", () => {
  sumValue.innerHTML = 0;
});
