const operator = prompt('Введите математические операторы "+,-,/,*"');
const num1 = +prompt(`Введите первое число`);
const num2 = +prompt(`Введите второе число`);

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
        if(num2 == 0){
            alert("Ошибка");
        };
    alert(num1 / num2);
    break;
    default: 
    alert("Такого оператора нету");
};