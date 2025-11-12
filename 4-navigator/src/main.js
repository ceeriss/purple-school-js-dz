const value1 = document.querySelector(".value1");
const value2 = document.querySelector(".value2");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const umnoj = document.querySelector(".umnoj");
const delenie = document.querySelector(".delenie");

const result = document.querySelector(".result");

plus.addEventListener('click', summ)
minus.addEventListener("click", minuss);
umnoj.addEventListener("click", umnojj);
delenie.addEventListener("click", deleniee);
function summ(){
  if (!value1.value || !value2.value){
    alert('Введите оба значения!')
    return
  }
  else{
    if (isNaN(value1.value) || isNaN(value2.value)) {
      alert("Введите числа!");
      return;
    } else {
      result.value = Number(value1.value + value2.value);
      value1.value = "";
      value2.value = "";
    }
   
  }
  
}
function minuss() {
  return (result.value = Number(value1.value - value2.value));
}
function umnojj() {
  return (result.value = Number(value1.value * value2.value));
}
function deleniee() {
  return (result.value = Number(value1.value / value2.value));
}
