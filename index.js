
let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');
    while( isNaN(money) || money == '' || money == null ) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();

const appData = {
    budget: money, 
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 1; i++) {
            const a = prompt('Введите обязательную статью расходов в этом месяце');
            const b = prompt('Во сколько обойдется?');
            if (typeof a !== null && typeof b !== null && a !== '' && b !== '') {
                appData.expenses[a] = b;
            } else {
                i--
            } 
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
            console.log('Среднмй уровень');
        } else if (appData.moneyPerDay > 1000) {
            console.log('Высокий урвоень');
        } else {
            console.log('произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt('Какова сумма накоплений?');
            let percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Дохов в месяц с вашего депозита: ' + appData.monthIncome)
        }
    },
    chooseOptexpenses: function () {
        for (let i = 1; i < 4; i++) {
            const a = prompt('Статья необязательных расходов?');
            if (a === null || a === '') {
                i = i - 1;
            }
            else {
                appData.optionalExpenses[i] = a;
            }
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)');
        if (typeof items !== 'string' || items === '' || items === null) {
            console.log('Вы ввели некорректные данные');
        }
        else {
            appData.income = items.split(',');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        }
        
        appData.income.forEach(function(item, index) {
            alert('Способы доп. заработка: ' + (i + 1) + " - " + item)
        })
    }
}
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}


