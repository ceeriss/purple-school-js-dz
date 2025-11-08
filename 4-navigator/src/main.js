function luhnAlgorithm(cardNumber) {
  // Удаляем все нецифровые символы (дефисы, пробелы и т.д.)
  const cleanNumber = cardNumber.replace(/\D/g, "");

  // Проверяем, что в номере только цифры и он не пустой
  if (!cleanNumber || !/^\d+$/.test(cleanNumber)) {
    return false;
  }

  let sum = 0;
  let isEvenPosition = false;

  // Проходим по цифрам справа налево
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i], 10);

    if (isEvenPosition) {
      digit *= 2;
      if (digit > 9) {
        digit = digit - 9;
      }
    }

    sum += digit;
    isEvenPosition = !isEvenPosition;
  }

  // Если сумма кратна 10 - номер валидный
  return sum % 10 === 0;
}

// Тестирование
console.log(luhnAlgorithm("4561-2612-1234-5464")); // true
console.log(luhnAlgorithm("4561-2612-1234-5467")); // false
console.log(luhnAlgorithm("4111-1111-1111-1111")); // true
console.log(luhnAlgorithm("1234-5678-9012-3456")); // false
