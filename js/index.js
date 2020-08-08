'use strict'

/*   //  Таски на переменные:

// 1

let a = 2;
let b = 5;

console.log(a*b);

// 2


let c = 20;
let d = 4;

console.log(c/d);


// 3


let e = 3;
let f = 34;

console.log(e+f);


// 4


let i = 11;
let y= true;
let js = 'java script';
let h = '100';

console.log(i, y, js, h);


// 5


let num = 1;

num += 11;
num -= 11;
num *= 11;
num /= 11;
num ++;
num --;

*/

/*    //Таски на prompt:

// 1




let num = prompt('Enter number');

console.log(num**2);

// 2




let a = +prompt('Введите число a');
let b = +prompt('Введите число b');

alert((a + b) / 2);



// 3



let i = prompt('Enter the number of minutes');

console.log(i * 60);

// 4

let greeting = 'Hello, ';
let userName = prompt('Enter your name');

console.log(greeting + UserName + '!');

*/


// Таски на условия:

// 1

/*

let i = prompt('Enter number');

if(i == 10){
    console.log('Верно');
}else{
        console.log('Неверно');

}

// 2

 let test 

if(test !== true){
    console.log('Верно');
} else{
    console.log('Неверно');
}

if(test === true){
    console.log('Верно')
} else{
    console.log('Неверно');
}


// 3

let sum = +prompt('Введите сумму покупки');

if(sum <= 500){
    console.log(sum);
} else if(sum > 500 && sum <= 800){
    sum = sum - sum * 0.03;
    console.log(sum);
} else if(sum > 800){
    sum = sum - sum * 0.05
    console.log(sum);
 } else {
    alert('Некорректный ввод');
}

*/

// Таски на циклы

// 1

/*

 let i = 25;



while( i !== -1){
    console.log(i);
    i--;
}

    


for(i;i>-1;i--){
    console.log(i);
}

*/

// 2

/*

let i = 10;


while(i <= 50){


    if(i % 5 === 0){
        
    console.log(i);
 
    }
    i ++;
}
*/

///////////////////////////

// let i = 0;


// do(console.log(i))
// while(i < 50){
//     i++
//     if(i % 5 === 0){
//         console/log(i);
//     }
// }

////////////////

// for(i ; i<=50; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// 3

/*

let i = 0;
let sum = 0;



while(i <= 100){
    sum += i;
    i++;
    console.log(sum);
}


for(i = 0; i <= 100; i++){
    sum += i;
    console.log(sum);
}



*/

// 4
/*


let result = +prompt('Введите результат вычисления '2+2*2'');


while(result){
if( result === 6){
    alert('Верно');
} else{
    result = +prompt('Неверно! Попробуйте еще');
}
}

for(; ;){
    if(result === 6){
        alert('Верно');
    } else{
        result = +prompt('Неверно! Попробуйте еще раз');
    }
}

*/



//  Таска на функции
/*



function isAdult(){

    let numberOfYears = +prompt('Сколько вам лет');

    let check;

        if(numberOfYears >= 18){
            check = true;
        } else{
            check = false;
        }
        alert('isAdult' + '(' + numberOfYears + ');' + ' // ' + check);
}

isAdult();



let result = +prompt('Введите результат вычисления "2+2*2"');

do{
    if(result === 6){
        alert('Верно');
    } else{
        result = +prompt('Неверно! Попробуйте еще раз');
} }while(result);





let i = 25;

do{console.log(i),
i--}
 while(i !== -1);
 

 let i = 0;


do{ i++
    if(i % 5 === 0){
    console.log(i);
   }}
while(i < 50);

let i = 0
let sum = 0;


do{
    i++;
    sum += i;
    console.log(sum);
}
while(i < 100);
    
*/