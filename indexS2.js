// ******************************************************************************************************

// ******************************************************************************************************
//
// * O que é o JavaScript?
//
// * É uma linguagem de programação, usada para construir aplicações web, mobile, aplicativos 
// * de rede em tempo real, linhas de comandos e ate mesmo jogos. Foi originalmente feito para
// * funcionar somente em navegaores. Todo navegador possui uma engine de JS. 
//
// * Node: um programa em C++ que inclui a engine do Google, que permite que possamos executar
// * o JS fora de navegadores.
//
// * ECMA: Especificação do JS.
//
// * Variáveis: usadas para armanezar dados temporariamente na memoria do computador.
// 
// ******************************************************************************************************

// This is my first JavaScript Code!
console.log ('Hello World'); 
// Declaração: pedaço de código que define uma ação a ser executada. Código em JS deve ser terminado
// com ";". String: sequência de caracteres.
//JavaScript define o comportamento do documento. 
//Erros: index.js:(numero da linha onde contém o erro)

let name = 'Mosh'; 
//Let: utilizado para criar variáveis (anteriormente, var). Atribuímos um nome a ela e um valor. 
//Para modificar o valor dela, apenas colocamos o nome e o novo valor.
//Não podemos atribuir palavras utilizadas pelo JS. Devem conter nomes significativos. Não podem começar com números.
//Não podem conter espaço ou hífen. Não pode começar com letra maiúscula. São Case Sensitive.
console.log(name); 
// Printando a variável no console.
let firstName = 'Mosh';
let lastName = 'Hamedani';
//Podemos declarar duas variáveis ou mais na mesma linha, mas o indicado é sempre separar.

const interestRate = 0.3; 
// const: usado para criar constantes. Diferente das variáveis, valores constantes não podem ser modificados.
//interestRate = 1;
console.log(interestRate);

// Primitives/value types: valores de string, numeros, booleanos, undefined e null.
let name2 = 'Mosh'; //String Literal
let age = 30; //Number Literal
let isApproved= true; //Boolean Literal (falso/verdadeiro)
let firstName2 = undefined; //Toda variável contém este valor caso não declarado. É ao mesmo tempo um tipo e um valor.
let selectedColor = null; //Quando queremos explicitamente limpar o valor de uma variável.

//JavaScript: linguagem dinâmica. Em linguagens estáticas, os valores das variáveis não alteram. Em linguagens dinâmicas, os 
//Valores de variáves podem alterar durante o código.
//typeof: comando do console do navegador que nos permite checar o tipo da variável.
//Em JS, números são somente números, não existe float.

//Reference Types: Objetos, Arrays e funções
//Objeto: como um objeto na vida real. Seu nome, idade, endereço, as propriedades de um objeto. Várias variáveis interligadas.
let person = {
    name3: 'Mosh',
    age3: 30    
};
//Para alterar valores dentro dos objetos, temos dois métodos:
//Dot Notation: é o padrão de uso.
person.name3 = 'John';
//Bracet Notation: usado em exeplos onde ainda não sabemos o valor da variável.
person['name3'] = 'Mary';
console.log(person.name3);

//Array: listas de valores. Usamos [] para definir os valores, separados por vírgulas.
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1; //As listas são dinâmicas, podem mudar.
console.log(selectedColors.length); //Podemos utilizar o ponto para visualizar as propriedades de um objeto. Lenght retorna o
//tamanho da array.
//Podemos acessar um objeto em específico declarando sua posição no array.
//Em JS, podemos definir objetos de tipos diferentes dentro de uma array. Em JS, uma array é um objeto.

//Funções: conjunto de instruções que realizam uma tarefa ou calculam um valor. Apenas as declarações devem ser encerradas (;).
//Função para realizar uma tarefa:
function greet(name4, lastName4) { //Aqui, definimos os parâmetros name e lastname para serem usados dentro da função.
    console.log('Hello ' + name4 + ' ' + lastName4);
}
greet('John', 'Smith'); //retornando o valor da função. Aqui, definimos o argumento para ser exibido no parametro name e lastname.
greet('Mary'); //como não declaramos o lastname, ele nos retorna um valor undefined.

//Função para calcular um valor:
function square(number){
    return number*number //return retorna um valor para o parametro que definimos acima.
}
let number = square(2); //Podemos atribuir o valor de uma variável com o retorno de uma função
console.log(square(2)); //Ou podemos exibir diretamente o retorno da função.
//Dentro dos parênteses, temos uma chamada de função.

// ******************************************************************************************************