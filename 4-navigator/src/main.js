function crypto(password) {
  const arr = password.split("");
  const middle = arr.length / 2;
  const firstHalf = arr.slice(0, middle);
  const secondHalf = arr.slice(middle);
  return firstHalf.reverse().join("") + secondHalf.reverse().join("");
}

function check(encryptedPassword, originalPassword) {
  return crypto(originalPassword) === encryptedPassword;
}

// Проверка
const original = "password";
const encrypted = crypto(original);

console.log("Исходный:", original); // "password"
console.log("Зашифрованный:", encrypted); // "ssapdorw"
console.log("Проверка:", check(encrypted, original)); // true
