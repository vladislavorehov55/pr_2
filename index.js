let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');


const appData = {
    budget: money, 
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

for (let i = 0; i < 1; i++) {
    const a = prompt('Введите обязательную статью расходов в этом месяце');
    const b = prompt('Во сколько обойдется?');
    if (typeof a !== null && typeof b !== null && a !== '' && b !== '') {
        appData.expenses[a] = b;
    } else {
        i--
    }
    
}
appData.moneyPerDay = appData.budget / 30;
if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
    console.log('Среднмй уровень');
} else if (appData.moneyPerDay > 1000) {
    console.log('Высокий урвоень');
} else {
    console.log('произошла ошибка');
}