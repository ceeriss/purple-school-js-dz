const arr = [1, 40, -5, 10, 0];

function sortArray(arr) {
  // Создаем копию массива, чтобы не изменять оригинал
  const sortedArr = [...arr];

  // Внешний цикл - проходим по всем элементам
  for (let i = 0; i < sortedArr.length - 1; i++) {
    // Внутренний цикл - сравниваем соседние элементы
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {
      // Если текущий элемент больше следующего - меняем их местами
      if (sortedArr[j] > sortedArr[j + 1]) {
        // Меняем элементы местами
        let temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }

  return sortedArr;
}

// Использование
const sortedArray = sortArray(arr);
console.log("Исходный массив:", arr); // [1, 40, -5, 10, 0]
console.log("Отсортированный массив:", sortedArray); // [-5, 0, 1, 10, 40]
