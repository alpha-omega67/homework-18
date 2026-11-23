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

// Задание 4

function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2; // делаю сложение
  } else if (operator === "-") {
    return num1 - num2; // делаю вычитание
  } else if (operator === "*") {
    return num1 * num2; // делаю умножение
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Дурак, на 0 делить нельзя!!!!!!";
    }
    return num1 / num2; // делаю деление
  } else {
    return "Неизвестное вычисление";
  }
}

console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "-")); // 5
console.log(calculate(10, 5, "*")); // 50
console.log(calculate(10, 5, "/")); // 2
console.log(calculate(10, 0, "/")); // по идеи должна выйти ошибка

// делал задания с ИИ, но только с подсказками, сам стараюсь не списывать и больше думать. Но легче конечно скатывать все от и до XD
