// Задание 1

function checkUser(name, age) {
  if (age >= 18) {
    return `Добро пожаловать, ${name}!`;
  } else {
    return "Доступ запрещен";
  }
}

console.log(checkUser("Юрий", 26));

console.log(checkUser("Альтуха", 15));

// Задание 2

function calculateDiscount(price, discount) {
  return price - (price * discount) / 100; // от цены отнимаю скидку %
}

console.log(calculateDiscount(10000, 20));

console.log(calculateDiscount(42500, 33));

// Задание 3

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(15));
console.log(isEven(8));

// Как обозначаются четные и нечетные я подсмотрел, я хз как это было вспомнить


