let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

const a = prompt('Введите обязательную статью расходов в этом месяце');
const cost = prompt('Во сколько обойдется?')
const appData = {
    budget: money, 
    timeData: time,
    expenses: {[a]: cost},
    optionalExpenses: {},
    income: [],
    savings: false}

console.log(appData);