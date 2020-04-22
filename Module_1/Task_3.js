'use sctrict';
const   ADMIN_PASSWORD = "admin";
let message;
switch(prompt("Введите пароль"))
{
    case null:
        message = "Отменено пользователем!";
        break;
    case ADMIN_PASSWORD:
        message = "Добро пожаловать!";
        break;
    default:
        message = "Доступ запрещен, неверный пароль!";
        break;
}
console.log(message);