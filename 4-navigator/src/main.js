// Задаем координаты
const addressLat = 10; // адрес назначения lat
const addressLong = 20; // адрес назначения long
const positionLat = 5; // текущее положение lat
const positionLong = 15; // текущее положение long

// Считаем разницу по координатам
const diffLat = addressLat - positionLat; // разница по широте
const diffLong = addressLong - positionLong; // разница по долготе

// Возводим разницы в квадрат
const diffLatSquared = diffLat * diffLat;
const diffLongSquared = diffLong * diffLong;

// Складываем квадраты разниц
const sumOfSquares = diffLatSquared + diffLongSquared;

// Вычисляем квадратный корень простым способом (приблизительно)
let distance = sumOfSquares / 2; // начинаем с половины числа

// Уточняем результат несколько раз
distance = (distance + sumOfSquares / distance) / 2;
distance = (distance + sumOfSquares / distance) / 2;
distance = (distance + sumOfSquares / distance) / 2;

// Выводим результат
console.log("Расстояние: " + distance);
//