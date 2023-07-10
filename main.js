/*
Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número. 
Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
    
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. 
Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

5. Crie um script que declare uma variável e verifique se o seu valor é um booleano.
 Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

9. Crie um script que declare uma variável e verifique se o seu valor é um número par.
 Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/

//   1   -     alert("Hello World!")

/*   2   - 
                            const number1 = 1
                            const number2 = 8
                            const  sum = function() { 
                              console.log(number1 + number2)
                            }
                            sum()
*/

/*   3   -
                    function check (num1){
                      if (typeof num1 === 'number') {
                        console.log('é um número')
                      }else {
                        console.log('Não é um número')
                      }
                    }
                    check(9128619)
*/

/*    4   -
                    function check (value1){
                      if (typeof value1 === 'string') {
                        console.log(`${value1} é uma string`)
                      }else {
                        console.log(`${value1} não é uma string`)
                      }
                    }
                    check("lalalal")
*/

/*   5   -
                    function check (value1){
                      if (typeof value1 === 'boolean') {
                        console.log(`${value1} é um dado boleano`)
                      }else {
                        console.log(`${value1} não é um dado boleano`)
                      }
                    }
                    check(false)
*/


/* 6-7-8  -
                      function resul (num1, num2) {
                        console.log(num1 - num2)
                      }
                      resul(45, 32)

                      function resul (num1, num2) {
                        console.log(num1 * num2)
                      }
                      resul(45, 32)


                      function resul (num1, num2) {
                        console.log(num1 / num2)
                      }
                      resul(45, 32)
*/

/*  9-10   -
                  function check(num1) {
                    if (num1 % 2 === 0) {
                      console.log(`${num1} é par`)
                    }else {
                      console.log(`${num1} é impar`)
                    }
                  }

                  check(41)
*/