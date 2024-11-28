//Declarações condicionais:
//If/Else:
//Usados para verificar se um valor atende a uma condição. Caso atenda, execute as declarações
//dentro do bloco de código.
//Exemplo: exibir bom dia/tarde/noite no console, dependendo da hora atual:
let hour = 10;
if (hour >= 6 && hour < 12) //Caso tenhamos mais de uma declaração,devemos utilizar {} após a condição.
    console.log('Good morning!');
else if (hour >= 12 && hour < 18) 
    console.log('Good afternoon!');
else 
    console.log('Good evening!'); 

//Switch/case: utilizados para substituir várias sentenças de if/else:
//Exemplo: exibir se o usuário é normal, moderador ou desconhecido:
let role = 'guest';
switch (role){
    case 'guest':
        console.log('Guest User');
        break; //Utilizamos o break para finalizar a condição atual.
    
    case 'moderator':
        console.log('Moderator User');
        break;
    
    default: //Utilizamos default para definir o valor que será caso nenhuma condição seja atendida.
        console.log('Unknown User');
}

//Loops: estruturas que servem para criar laçoes de repetição de acordo com uma condição.
//For: damos uma condição para finalizar o loop:
//Exemplo: exibir Hello World 5 vezes:
for (let i = 0; i < 5; i++) { //declaramos I como uma variável de index, e ela começa em 0. Então,
    //declaramos sua condição, nesse caso, ser menor do que cinco, ou seja, irá se repetir 5 vezes.
    //Para finalizarmos, declaramos o incremento, ou seja, a cada loop, o I aumentará um valor.
    console.log('Hello World');
}
//Exemplo 2: exibir todos os números ímpares entre 1 e 5:
for (let i = 1; i <=5; i++) {
    if (i % 2 !==0)
        console.log('For', i);
}

//While: Em while, a variável precosa ser definida por fora da estrutura. Diferente do For, onde a
//variável faz parte da estrutura.
//Exemplo: exibir todos os números ímpares entre 1 e 5:
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0)
        console.log('While', i);
    i++
}

//Do-While Loop: semelhante o while, porém aqui, a condição será checada apenas ao final do bloco, o
//que resulta no bloco sempre executando pelo menos uma vez.
//Exemplo: exibir todos os números ímpares entre 1 e 5:
let i2 = 9;
do {
    if (i2 % 2 !== 0)
        console.log('Do-While', i2);
    i2++
} while (i2 <= 5);

//Loop infinito: Ao criarmos estruturas de repetições, devemos nos atentar ao risco de criarmos um
//loop infinito, que pode quebrar o navegador. Devemos nos atentar a sempre incrementar e finalzar
//o loop.
//Exemplo:
//
// let i3 = 0;
// while (i3 < 5) {
//     console.log(i3); //Aqui, esquecemos de definir o incremento, então o bloco rodará infinitamente.
// }

//For...in: usados para iterar em cima de propriedades de objetos.
//Exemplo: exibir nome e valor de cada uma das propriedades do objeto:
const person = {
    name: 'Mosh',
    age: 30
};
for (let key in person)
    console.log(key,person[key]); //aqui usamos o colchete por não termos uma propriedade chama "key".

//For...Of: usado para iterar em cima de todos os itens dentro de um array:
const colors = ['red','green','blue'];
for (let color of colors)
    console.log(color);

//Break e Continue: servem para manipular a execução de um bloco de loop.
//Break: o código pula fora do loop, ou seja, para.
let i4 = 0;
while (i4 <= 10) {
    if (i4===5) break;
    console.log('Break', i4);
    i4++;
}
//Continue: o código retorna ao início do loop, ou seja, executa mais um loop. Não é mais usado.
let i5 = 0;
while (i5 <= 10) {
    if (i5 % 2 === 0){
        i5++;
        continue;
    }
    console.log('Continue', i5);
    i5++;
}

//Exercicio 1: escrever uma função que receba dois números e retorne o máximo dos dois.
//Meu código:
let n1 = 5;
let n2 = 5;
if (n1>n2){
    console.log("O primeiro número é maior que o segundo: ", n1)
}
else if (n2>n1){
    console.log("O segundo número é maior que o primeiro: ", n2)
}
else
    console.log("Os números são iguais, N1: " + n1 + ', N2: ' + n2)
//Resolução:
let number = max(5,10);
console.log("O maior número é: ", number);
function max(a, b){
    return (a>b) ? a : b;
}

//Exercício 2: Verificar se uma foto é paisagem
console.log(isLandscape(800,600));
function isLandscape(width,height){
    return (width>height);
}

// Exercício 3: Algoritmo FizzBuzz
// Divisível por 3: Fizz
// Divisível por 5: Buzz
// Divisível por 3 e 5: FizzBuzz
// Não divisível por 3 ou 5: input
// Não é um número: 'Not a Number'
const output = fizzBuzz(false);
console.log(output);
function fizzBuzz(num) {

    if ((num % 3 === 0) && (num % 5 === 0)) { //se atentar à ordem de execução
        return NaN;
    }

    if (typeof num !== 'number')
        return 'Not a Number';

    if (num % 3 === 0) {
        return 'Fizz';
    }

    if (num % 5 === 0) {
        return 'Buzz';
    }

    return num;

}

// Exercicio 4: calcular limite de velocidade
// Limite de velocidade: 70
// A cada 5km, adicionar 1 ponto
// Usar math.floor, para arredondar valores
// Acima de 12 pontos, carteira suspensa.
checkSpeed(110);
function checkSpeed(speed) {
    const speedLimit = 70; // Sempre usar constante para verificação
    const kmPerPoint = 5; // Definindo quantos km precisam pra fazer 1 ponto

    if (speed < speedLimit + kmPerPoint) { // Após declarar a constante, fazer verificação
        console.log('Ok'); // Se a velocidade for menor que o limite de velocidade, então ok.
        return; // Adiconamos o returno para sair do if e evitar o else
    }
    else{
        const points = Math.floor((speed - speedLimit) / kmPerPoint); // A diferença entre a velocidade 
        // e o limite de velocidade dividido por pontos por km (5), nos retorna um valor quebrado,
        // que arredondamos utilizando o math.floor.
        if (points >= 12) // Se a carteira tiver mais que 12 pontos, suspende.
            console.log('License suspended');
        else
            console.log('Points', points);
    }
}

// Exercicio 5
// Exibir numeros ate o limite e mostrar se é impar ou par
showNumbers(10)
function showNumbers(limit) {
    for (let i6 = 0; i6 <= limit; i6++) {
        const message = (i6 % 2 === 0) ? 'EVEN' : 'ODD'
        console.log (i6, message);
    }
}

//Exercicio 6
//Fazer função para contar valores truthy em array
const array = ['Lucas','Joao']; // Definindo a array a ser usada na funcao
console.log(countTruthy(array));
function countTruthy(array){
    let valorDeTruthy = 0; // Definindo variável para contar valores de truthy
    for (let val of array) // para cada valor da array
        if (val) // Se for truthy
            valorDeTruthy++; // Adicione 1 na variável de contagem
    return valorDeTruthy; // Printar contagem
}

// Exercicio 7
// Exibir propriedades de um objeto que são do tipo string
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
showProperties(movie);
function showProperties(obj){
    for (let str in obj)
        if (typeof obj[str] === 'string')
            console.log(str, obj[str]);
}
//Quando estamos usando somente uma declaração, não precisamos usar {}.

//Exercicio 8:
// Criar função para calcular múltiplos de 3 e 5, do 0 até um limite definido.
console.log(sum(10));
function sum(limit){
    let soma = 0;
    for (limitnum = 0; limitnum <= limit; limitnum++)
        if (limitnum % 3 === 0 || limitnum % 5 === 0)  
            soma = limitnum + soma

    return soma; // Separando o retorno
}

// Exercicio 9:
// Calcular média de aluno com base em suas três notas, e retornar uma letra.
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
const marks = [80, 80, 50];
console.log(calculateGrade(marks));
function calculateGrade(marks){
    const average = calculateAverage(marks);
    if (average < 60) return 'A sua média é: ' + average + ' e a sua nota é F.';
    if (average < 70) return 'A sua média é: ' + average + ' e a sua nota é D.';
    if (average < 80) return 'A sua média é: ' + average + ' e a sua nota é C.';
    if (average < 90) return 'A sua média é: ' + average + ' e a sua nota é B.';
    return 'A sua média é: ' + average + ' e a sua nota é A.';
}
function calculateAverage(array) { //Separando funções para termos uma função genérica
    let sumavg = 0;
    for (let value of array)
        sumavg += value; //soma ele mesmo e o valor
    return Math.floor(sumavg / (array.length));
}

// Exercicio 10:
// Criar função para exibir número de estrelas de acordo com o numero da linha
showStars(4)
function showStars(rows) {
    for (let row = 1; row <= rows; row++){
        let pattern = ''; // Criamos uma variável de string vazia, que é onde as estrelas irão concatenar
        for (let i = 1; i <= row; i++)
            pattern += '*'; // Aqui, concatenamos as estrelas.
        console.log(pattern);
        }
}

// Exercicio 11:
// Criar uma função que mostra todos os números primos até um limite determinado.
// Numeros primos = quando só pode ser dividido por 1 ou ele mesmo.
showPrimes(20);
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) 
        if (number % factor === 0) 
            return false;
    return true;
}

// Quando temos loops aninhados, podemos separa-los em diferentes funções.