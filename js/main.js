'use strict';

// creo una variabile per l'elemento ul list del mio html
const ul = document.querySelector("ul.list");

// uso il ciclo for per fare 100 numeri senza dover riscrivere ogni volta console.log per ogno numero
for (let i = 1; i < 101; i++){
    // creo una variabile dove ci assegno un elemento html creato qui ma visibile anche sulla pagina index.html
    const li = document.createElement('li'); 
    ul.append(li);
    
    if (i % 15 == 0){
        console.log("FizzBuzz");
        li.append('FizzBuzz');
        
    } else if (i % 3 == 0){
        console.log("Fizz");
        li.append('Fizz');
    } else if (i % 5 == 0){
        console.log("Buzz");
        li.append('Buzz');
    } else {
        console.log(i);
        li.append(i);
    }


    // const element = `<li class="box box--${i}">${i}</li>`;
    // ul.innerHTML += element;
}