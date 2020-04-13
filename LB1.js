let  money  =  prompt ( "Ваш бюджет на месяц?" ,  '' ) ;
let  time  =  new Date();
time  =  prompt ( "Введите дату в формате YYYY-MM-DD" ,  '' ) ;
let  appData  =  {
    moneyData : money,
    timeData : time,
    expenses : [],
    optionalExpenses : 0,
    income : [],
    savings : false
} ;

function  question() {
let  question1  =  prompt ( "Введите обязательную статью расходов в этом месяце" ,  '' ) ;
let  question2  =  prompt ( "Во сколько обойдется?" ,  '' ) ;
    appData.expenses[question1] = question2;
    alert('Ваш бюджет на 1 день: ' + (appData.moneyData - appData.expenses[question1])/30);
};
question();
question();
 