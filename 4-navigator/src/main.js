const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function firstFunc(arr, shouldDeleteFunc) {
  const result = [];
  for (let element of arr) {
    // Для каждого элемента вызываем функцию shouldDeleteFunc
    // Если она возвращает false - оставляем элемент
    if (!shouldDeleteFunc(element)) {
      result.push(element);
    }
  }
  return result;
}

function secondFunc(number) {
  // Функция принимает одно число и возвращает true/false
  // true - удалить элемент, false - оставить элемент
  return number > 5; // удаляем числа больше 5
}

const result = firstFunc(array, secondFunc);
console.log(result); // [1, 2, 3, 4, 5]
