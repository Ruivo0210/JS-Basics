// ******************************************************************************************************

//Operadores: usados com variáveis e constantes para criar expressões. Com essas expressões, podemos implementar lógicas e
//algoritmos. Temos oepradores aritimeticos, operadores de atribuicao, de comparacao, de logica e de bit.

//Aritmeticos usados para realizar calculos, assim como na matematica.
let x = 10;
let y = 3;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);
//Expressão: algo que produz um valor.
//Ctrl + / = comenta tudo selecionado.
// Incrementar (++): a posição da variável define se o valor será alterado antes ou depois:
console.log(x++); //Incrementa antes
console.log(x);
console.log(++x); //Incrementa depois
// Decrementar (--): a mesma lógica
console.log(--x);

//Atibuição: usados para atribuir um valor a variáveis.
let x2 = 10;
x2++; //é equivalente a 
x2 = x2+1; //que é equivalente a 
x2 += 1
x = x * 3 //é equivalente a 
x *= 3;

//Comparação: usados para comparar o valor de uma variável com outra coisa. Retorna um valor booleano.
let x3 = 1;
//Operadores relacionais
console.log(x>0);
console.log(x>=0); //maior ou igual
console.log(x<=0); //menor ou igual
//Operadores de igualdade
console.log(x === 0); //é igual a 
console.log(x !== 0); //é diferente de 

//Operadores de igualdade
//Igualdade Estrita (combina tipo e valor)
console.log(1 === 1);
console.log('1' === 1); //Aqui, o operador verifica se o tipo e o valor são iguais. Caso não, falso.
//Igualdade frouxa (verifica apenas o valor)
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);
//Aqui, o operador transforma o tipo da variável à esquerda no tipo da variável à direita, e em seguida faz a comparação.

// Operador condicional: usado para definir estruturas de condições lógicas.
// Exemplo: se um cliente possui mais de 100 pontos, ele é um cliente 'Ouro', senão, ele é um cliente 'Prata':
let points = 110; //Variável para pontos do cliente
let type = points > 100 ? 'Gold' : 'Silver'; //Variável para classificar o cliente. "Se maior que 100, então ouro, senão, prata."
console.log(type);

//Operadores lógicos: usados para verificar condições
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore; // AND (&&): retorna true caso ambos operadores sejam true;
let eligibleForLoan2 = highIncome || goodCreditScore; // OR (||): retorna true caso algum dos operadores sejam true;
let applicationRefused = !eligibleForLoan2; // NOT (!): converte o valor booleano de uma variável, ou seja, será o contrário dela.
console.log('Operador AND', eligibleForLoan);
console.log('Operador OR', eligibleForLoan2);
console.log('Operador NOT', applicationRefused);

// Operadores lógicos com valores não-booleanos:
// O resultado de uma expressão lógica não será exatamente true ou falso. Isso dependerá de nossos operadores. A engine
// olha para cada operador e tenta interpretálo como "Falsy" (false) - undefined, null, 0, false, '', NaN ou como "Truthy" -
// tudo aquilo que não será falsy.
false || 1 || 2 // Short-circtuiging: curto circuito, ao realizar comparações com múltiplos valores, o comparador irá parar
// ao encontrar o primeiro valor "truthy".
// Ao utilizar o operador || com valores não booleanos, podemos retornar valores padrão.
// Exemplo: caso o usuário não selecione uma cor, usaremos a cor padrão definida:
let userColor = undefined;
let defaultColor = 'Green';
let choosedColor = userColor || defaultColor;
console.log(choosedColor);

// Operadores de bit a bit: utilizados para operações usando bits. Exemplo:
// Seja 1 e 2 em bits:
// 1 = 00000001
// 2 = 00000010
console.log(1|2); //operador OR em bit: compara caracter a caracter e retorna aquele que contem 1. Nesse caso, formará:
// 00000011, que será 3.
console.log(1&2); //operador AND em bit: compara caracter a caracter e retorna aqueles que contem 1 em comum. 
// Nesse caso, formará: 00000000, que será 0.

// Exercicio: trocar valores de variaveis
let a5 = 'red';
let b5 = 'blue';

let c5 = a5; // criamos uma variavel de backup para armazenar valor de a antes de trocar
a5 = b5; // trocamos o valor de a para b
b5 = c5; // trocamos o valor de b para o backup de a

console.log(a5);
console.log(b5);

// ******************************************************************************************************