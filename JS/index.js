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
