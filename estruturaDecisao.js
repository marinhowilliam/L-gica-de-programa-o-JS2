const q = require("readline-sync")

/*1. Construir um algoritmo que indique se o número digitado está
compreendido entre 20 e 90 ou não.*/

/*
let numero = q.question("informe um valor oara saper se esta entre 20 e 90:\n")
if(numero > 20 && numero < 90){
    console.log("o valor digitado esta no intervalo!")
}
else{
    console.log("o valor nao esta no intervalo!")
}
*/

/*2. Faça um Programa que peça dois números e imprima o maior deles.*/

/*
let num1 = q.question("informe um valor:\n")
let num2 = q.question("informe outro valor:\n")
if(num1 > num2){
    console.log("o primeiro valor é maior!")
}
else if(num2 > num1){
    console.log("o segundo valor é maior!")
}
*/

/*3. Faça um Programa que peça um valor e mostre na tela se o valor
é positivo ou negativo. (teste com os valores -1 e 1)*/

/*
let num = q.question("informe um valor: ")
if(num < 0){
    console.log("o valor pe negativo!")
}
else{
    console.log("o valor pe positivo!")
}
*/

/*4. Faça um Programa que verifique se uma letra digitada é vogal ou
consoante (Dica: use as proposições compostas com a conjunção
‘e’ ou a disjunção ‘ou’).*/

/*
let letra = q.question("informe uma letra para saber se e vogal ou consoante: ")
if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    console.log("a letra é uma vogal!")
}
else{
    console.log("a letra pe uma consoante!")
}
*/

/*5. Faça um Programa que solicite o tamanho de uma blusa de um
usuário e verifique se o valor digitado é “P" ou "M" ou “G”.
Conforme a letra escreva na tela: “Sua escolha foi Tamanho P”,
“Sua escolha foi tamanho M”, “Sua escolha foi tamanho G” ou “A
opção digitada é inválida”. (Teste com os valores G, P, M e X)*/

/*
let tamanho = q.question("informe o tamanho que voce veste: ")
switch(tamanho){
    case "P":
    case "p":
        console.log("Sua escolha foi Tamanho P")
    break

    case "M":
    case "m": 
        console.log("Sua escolha foi Tamanho M")
    break
    
    case "G":
    case "g": 
        console.log("Sua escolha foi Tamanho G")
    break

    default: 
        console.log("a opcao digitada e invalida!")
}
*/

/*6. Faça um Programa que pergunte em que turno você estuda. Peça
para digitar M-matutino, V-Vespertino ou N- Noturno. Imprima a
mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor
Inválido!", conforme o caso.*/

/*
let turno = q.question("em que turno voce estuda: ")

switch(turno){
    case "M":
    case "m":
        console.log("bom dia!")
        break

    case "V":
    case "v":
        console.log("boa tarde!")
        break

    case "N":
    case "n":
        console.log("boa noite!")
        break

    default:
        console.log("valor invalido!")
}
*/

/*7. Escreva um programa que peça 3 notas (reais) para o usuário.
Imprima "você passou”, caso a média das notas seja maior ou
igual a 7; caso contrário, imprima "você não passou” (Faça
utilizando a estrutura SE e a estrutura ESCOLHA).*/

/*
let nota1 = parseFloat(q.question("informe a primeira nota: "))
let nota2 = parseFloat(q.question("informe a segunda nota: "))
let nota3 = parseFloat(q.question("informe a terceira nota: "))

let media = (nota1 + nota2 + nota3) / 3

if(media >= 7){
    console.log(media + " voce passou!")
}
else{
    console.log(media + " voce nao passou!")
}
*/

/*8. A nota final de um estudante é calculada a partir da média
de três notas atribuídas entre o intervalo de 0 até 10,
respectivamente, a um trabalho de laboratório (tl), a uma
avaliação semestral (as) e a um exame final (ef). De acordo com
o resultado, mostre na tela se o aluno está reprovado (média =
4), de recuperação (4 = media < 7) ou se foi aprovado (media
= 7). Ao final informa se o aluno está aprovado, em
recuperação ou reprovado.*/

/*
let nota1 = parseFloat(q.question("informe a primeira nota: "))
let nota2 = parseFloat(q.question("informe a segunda nota: "))
let nota3 = parseFloat(q.question("informe a terceira nota: "))

let media = (nota1 + nota2 + nota3) / 3

if(media < 4){
    console.log("voce foi reprovado!")
}
else if(media >= 4 && media < 7){
    console.log("voce esta em recuperacao!")
}
else if(media >= 7){
    console.log("voce foi aprovado!")
}
*/


/*9. As Organizações Tabajara resolveram dar um aumento de
salário aos seus colaboradores e lhe contrataram para
desenvolver o programa que calcula os reajustes.
Faça um programa que recebe o salário de um colaborador e
o reajuste seguindo o seguinte critério, baseado no salário
atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 281,00 e R$ 700,00 : aumento de 15%
salários entre R$ 701,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1501,00 em diante : aumento de 5%
Após o aumento ser realizado informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento.*/

/*
let salario = parseFloat(q.question("informe seu salario: "))
let aumento20 = (salario * 20) / 100
let aumento15 = (salario * 15) / 100
let aumento10 = (salario * 10) / 100
let aumento5 = (salario * 5) / 100

if(salario <= 280){
    console.log(`seu salario R$${salario}, tera um aumento de 20% corespondete a R$${aumento20} e seu novo salario sera R$${salario + aumento20}`)
}
else if(salario > 281 && salario < 700){
    console.log(`seu salario R$${salario}, tera um aumento de 15% corespondete a R$${aumento15} e seu novo salario sera R$${salario + aumento15}`)
}
else if(salario > 701 && salario < 1500){
    console.log(`seu salario R$${salario}, tera um aumento de 10% corespondete a R$${aumento10} e seu novo salario sera R$${salario + aumento10}`)
}
else if(salario > 1501){
    console.log(`seu salario R$${salario}, tera um aumento de 5% corespondete a R$${aumento5} e seu novo salario sera R$${salario + aumento5}`)
}
*/

/*10. Desenvolva um algoritmo que receba nome, a altura e o peso
de uma pessoa (ambos números reais), calcule o seu IMC e em
seguida devolva a seguinte mensagem: “Caro paciente, <nome>.
Seu IMC é <IMC> e você se encontra no nível <nível> do imc>.
Segue a tabela de referência:*/

/*
let nome = q.question("informe seu nome: ")
let altura = parseFloat(q.question("informe sua altura: "))
let peso = parseInt(q.question("indorme seu peso: "))
let imc = peso / altura**2

if(imc <= 18.5){
    console.log(`Caro paciente, ${nome}. Seu IMC é ${imc} e você se encontra no nível abaixo do peso do imc`)
}
else if(imc >= 18.6 && imc < 24.9){
    console.log(`Caro paciente, ${nome}. Seu IMC é ${imc} e você se encontra no nível peso ideal do imc`)
}
else if(imc >= 25 && imc < 29.9){
    console.log(`Caro paciente, ${nome}. Seu IMC é ${imc} e você se encontra no nível levemente acima do peso do imc`)
}
else if(imc >= 30 && imc < 34.9){
    console.log(`Caro paciente, ${nome}. Seu IMC é ${imc} e você se encontra no nível obesidade grau I do imc`)
}
else if(imc >= 35 && imc < 39.9){
    console.log(`Caro paciente, ${nome}. Seu IMC é ${imc} e você se encontra no nível obesidade grau II do imc`)
}
else if(imc > 40){
    console.log(`Caro paciente, ${nome}. Seu IMC é ${imc} e você se encontra no nível obesidade grau III (morbida) do imc`)
}
*/

/*11. Você trabalha num escritório de contabilidade e precisa
detalhar um contracheque de um funcionário. Crie um algoritmo
que solicita o salário bruto de um funcionário e em seguida
detalhe seu contracheque. A descrição deve seguir o padrão:
a. Salário bruto:
b. FGTS
c. Desconto de INSS
d. Desconto de imposto de renda
e. Salário líquido.
Informações:
O valor do FGTS é 8% do salário bruto
O valor do INSS é de 12% do salário bruto
O valor do imposto de renda segue a seguinte regra:
Se o salário bruto for menor que 1500, desconta 7,5%
Se for entre 1500 e 2000, desconta 10%
Se for acima de 2000, desconta 15%
O salário líquido é igual ao salário bruto, descontados o
INSS e IR*/

/*
let salario = parseFloat(q.question("informe seu salario: "))

let fgts = (salario * 8) / 100
let inss = (salario * 12) / 100
let ir7 = (salario * 7.5) / 100
let ir10 = (salario * 10) / 100
let ir15 = (salario * 15) / 100

if(salario <= 1500){
    console.log(`seu salario bruto é de R$${salario} o desconto do FGTS é de R$${fgts} o desconto do INSS é de R$${inss} o desconto do IR é de R$${ir7} e o salario liquido é de R$${salario - inss - ir7}`)
}
else if(salario > 1501 && salario <= 2000){
    console.log(`seu salario bruto é de R$${salario} o desconto do FGTS é de R$${fgts} o desconto do INSS é de R$${inss} o desconto do IR é de R$${ir10} e o salario liquido é de R$${salario - inss - ir10}`)
}
else if(salario > 2001){
    console.log(`seu salario bruto é de R$${salario} o desconto do FGTS é de R$${fgts} o desconto do INSS é de R$${inss} o desconto do IR é de R$${ir15} e o salario liquido é de R$${salario - inss - ir15}`)
}
*/