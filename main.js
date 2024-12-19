let khumo = []

while (true) {
  let userName = prompt("Введите имя пользователя! Команды для добавления и удаления 'add, name' и 'del, name', а также для простмотра результата команду 'stop'!")

  if (userName === "stop") {
    console.log("Последние пользователи:", khumo)
    break
  }

  if (userName.includes("add")) {
    let value = userName.split(", ")[1]
    khumo.push(value)
  } else if (userName.includes("del")) {
    let value = userName.split(", ")[1];
    khumo = khumo.filter(e => e !== value)
  } else {
    console.log("Неверная команда!")
  }
}
