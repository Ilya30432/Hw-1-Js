const operator = prompt('Введите математические операторы "+,-,/,*"');
const num1 = +prompt(`Введите первое число`);
if(!isNaN(num1)){
    const num2 = +prompt(`Введите второе число`);
    if(!isNaN(num2)){
        switch(operator){
            case "-":
            alert(num1 - num2);
            break;
            case "+":
            alert(num1 + num2);
            break;
            case "*":
            alert(num1 * num2);
            break;
            case "/":
                if(num2 === 0){
                    alert("Ошибка");
                };
            alert(num1 / num2);
            break;
            default: 
            alert("Такого оператора нету");
        };
    } else{
        alert("Вы ввели не число!!!");
    };
} else{
    alert("Вы ввели не число!!!");
};

