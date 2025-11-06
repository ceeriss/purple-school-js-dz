const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function firstFunc(arr, func) {
  return func(arr);
}

function secondFunc(arr) {
  let isDel = false;

  // Идем с конца чтобы не нарушать индексы при удалении
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > 5) {
      arr.splice(i, 1); // удаляем по индексу
      isDel = true;
    } else {
      isDel = false;
    }
  }
  return arr;
}

const result = firstFunc(array, secondFunc);
console.log(result); // [1, 2, 3, 4, 5]
