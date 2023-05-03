// Операторы 

'use strict'
console.log(3 + '3');

let incr = 10, 
    decr = 10;

    //++incr;  // после переменных инкремент и декремент можно стаивть и в начале и в конце
    //decr--;
    console.log(++incr); // в консоли можно выводить только префиксные 
    console.log(--decr);
    console.log(5*2 === 10); // === строгое сравнение по типу данных; == обычное сравнение по значению
 
// && || и или

    const isCheked = !true, // ! восклицательный знак буквально говорит НЕ
          isClose = !true;

          console.log(isCheked || isClose);
                                  
          console.log(2 + 2 * 2 !== 6);