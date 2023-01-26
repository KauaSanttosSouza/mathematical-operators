/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes)
*/

alert("Olá, vamos fazer alguns calculos")

let numberOne = Number(prompt("Insira o 1° Numero: "))
let numberTwo = Number(prompt("Insira o 2° Numero: "))

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo

alert(`A soma dos números ${numberOne} e ${numberTwo} é: ${sum}`)
alert(`A subtração dos números ${numberOne} e ${numberTwo} é: ${sub}`)
alert(`A multiplicação dos números ${numberOne} e ${numberTwo} é: ${mult}`)
alert(`A divisão dos números ${numberOne} e ${numberTwo} é: ${div}`)
alert(`O resto da divisão dos números ${numberOne} e ${numberTwo} é: ${rest}`)

if (sum % 2 === 0) {
  alert(`A soma dos numeros ${numberOne} e ${numberTwo} é: PAR`)
} else {
  alert(`A soma dos numeros ${numberOne} e ${numberTwo} é: IMPAR`)
}

if (numberOne === numberTwo) {
  alert(`Os numero ${numberOne} e ${numberTwo} são iguais.`)
} else {
  alert(`Os numero ${numberOne} e ${numberTwo} são diferentes.`)
}