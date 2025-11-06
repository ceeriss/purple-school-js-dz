function processDates(dateStrings) {
  return dateStrings
    .filter((dateStr) => isValidDate(dateStr))
    .map((dateStr) => formatDate(dateStr));
}

// Функция проверки валидности даты
function isValidDate(dateStr) {
  // Проверяем различные разделители
  const separators = ["-", "/", "."];
  let foundSeparator = null;

  // Находим разделитель в строке
  for (const separator of separators) {
    if (dateStr.includes(separator)) {
      foundSeparator = separator;
      break;
    }
  }

  if (!foundSeparator) return false;

  // Разделяем строку на компоненты
  const parts = dateStr.split(foundSeparator);
  if (parts.length !== 3) return false;

  let day, month, year;

  // Определяем формат на основе значений
  const firstPart = parseInt(parts[0], 10);
  const secondPart = parseInt(parts[1], 10);
  const thirdPart = parts[2];

  // Формат DD-MM-YYYY или DD.MM.YY
  if (firstPart > 0 && firstPart <= 31 && secondPart > 0 && secondPart <= 12) {
    day = firstPart;
    month = secondPart;
    year = thirdPart;
  }
  // Формат MM/DD/YYYY или MM/DD/YY
  else if (
    secondPart > 0 &&
    secondPart <= 31 &&
    firstPart > 0 &&
    firstPart <= 12
  ) {
    day = secondPart;
    month = firstPart;
    year = thirdPart;
  } else {
    return false;
  }

  // Обработка года
  if (year.length === 2) {
    year = "20" + year; // Преобразуем YY в YYYY
  } else if (year.length !== 4) {
    return false;
  }

  // Преобразуем в числа
  day = parseInt(day, 10);
  month = parseInt(month, 10);
  year = parseInt(year, 10);

  // Базовые проверки
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;

  // Проверка дней в месяце
  const daysInMonth = getDaysInMonth(month, year);
  if (day > daysInMonth) return false;

  return true;
}

// Функция для получения количества дней в месяце
function getDaysInMonth(month, year) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Проверка на високосный год для февраля
  if (month === 2 && isLeapYear(year)) {
    return 29;
  }

  return daysInMonth[month - 1];
}

// Функция проверки високосного года
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Функция преобразования даты к единому формату DD-MM-YYYY
function formatDate(dateStr) {
  // Находим разделитель
  const separators = ["-", "/", "."];
  let foundSeparator = null;

  for (const separator of separators) {
    if (dateStr.includes(separator)) {
      foundSeparator = separator;
      break;
    }
  }

  if (!foundSeparator) return dateStr;

  // Разделяем на компоненты
  const parts = dateStr.split(foundSeparator);
  let day, month, year;

  const firstPart = parseInt(parts[0], 10);
  const secondPart = parseInt(parts[1], 10);
  const thirdPart = parts[2];

  // Определяем формат и извлекаем компоненты
  if (firstPart > 0 && firstPart <= 31 && secondPart > 0 && secondPart <= 12) {
    day = firstPart;
    month = secondPart;
    year = thirdPart;
  } else if (
    secondPart > 0 &&
    secondPart <= 31 &&
    firstPart > 0 &&
    firstPart <= 12
  ) {
    day = secondPart;
    month = firstPart;
    year = thirdPart;
  } else {
    return dateStr; // Если не удалось определить формат, возвращаем как есть
  }

  // Обработка года
  if (year.length === 2) {
    year = "20" + year;
  }

  // Форматируем компоненты к двум цифрам
  const formattedDay = String(day).padStart(2, "0");
  const formattedMonth = String(month).padStart(2, "0");

  return `${formattedDay}-${formattedMonth}-${year}`;
}

// Тестирование
const input = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];
const result = processDates(input);
console.log(result); // ['10-02-2022', '12-11-2023']
