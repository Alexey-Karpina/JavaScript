'use sctrict';
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let droidsAmount = Number(prompt("Сколько дроидов вы хотите купить"));
if (droidsAmount === 0){
    console.log("Отменено пользователем!");
} else {
    totalPrice = droidsAmount * pricePerDroid;
    if (totalPrice > credits){
        console.log("Недостаточно средств на счету!");
    } else {
        console.log(`Вы купили ${droidsAmount} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    }
}