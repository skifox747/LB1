let  money  =  prompt ( "Ваш бюджет на месяц?" ,  '' ) ;
let  time  =  new Date();
time  =  prompt ( "Введите дату в формате YYYY-MM-DD" ,  '' ) ;
let  appData  =  {
    budget : money,
    timeData : time,
    expenses : [],
    optionalExpenses : 0,
    income : [],
    savings : false
} ;

    for (let i=0; i<2;i++){
        let a = prompt( "Введите обязательную статью расходов в этом месяце" ,  '' ) ;
            b = prompt ( "Во сколько обойдется?" ,  '' ) ;
    if ( (tupeof(a))==='string'&&(typeof(a)) !=null&&(typeof(b)) !=null&& a !='' && b !='' 
    && a.length<50){

        console.log("done")
        appData.expenses[a]=b;
    }
            
    };
    appData.moneyPerDay=appData.budget/30;
    alter("Ежедневный бюджет:" + appData.moneyPerDay);
    if (appData.moneyPerDay<200){ 
        console.log ("Минимальный уровень достатка");
    } else if (appData.moneyPerDay>200 && appData.moneyPerDay<2000){
        console.log ("Средний уровень достатка");
    } else if (appData.moneyPerDay>2000){
        console.log ("Высокий уровень достатка");   
    } else{
        console.log ("Произошла ошибка")
    }




 