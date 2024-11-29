// ******************************************************************************************************
//
// * Programação orientada a objetos:
//
// * Um estilo de programção em que vimos um programa como uma coleção de objetos que conversam entre si.
// * Objeto: coleção de valors-chave relacionados e agrupados que definem um objeto.
// * O valor de um valor-chave pode ser uma função, por exemplo. Chamamos ela de método.
// * Para criar um objeto, fazemos: let obj = { valor 1: x};
//
// ******************************************************************************************************

const circulo = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }
};

circulo.draw(); // Método

// ******************************************************************************************************
//
// * Função de Fábrica:
//
// * São funções responsáveis por produzir objetos.
//
// ******************************************************************************************************

function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1); // Criando um objeto
console.log(circle1);

// ******************************************************************************************************
//                                                                                                                           
// * Função de construtor:
//
// * Uma outra abordagem para produzir objetos. As duas possuem exatamente a mesma função.
// * Notação de camelo: a primeira letra do nome da função é minúscula e a primeira letra das outras 
// * palavras são maiúsculas:
// * oneTwoThreeFour
// * Notação Pascal: todas as primeiras letras são maiúsculas.
// * OneTwoThreeFour
// * Para a função de construtor, utilizamos a notação Pascal.
//                                                                                                    
// ******************************************************************************************************

function Circle(radius){
    this.radius = radius; // Utilizamos o this no java para referenciar a elementos do proprio objeto.
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);

// ******************************************************************************************************
//
// * Natureza dinâmica dos objetos:
//
// * Depois de criar objetos, podemos sempre adicionar ou remover propriedades ou métodos.
//
// ******************************************************************************************************

const circle2 = { // Constantes podem ser modificadas, porém não podem ser reatribuídas posteriormente.
    radius: 1
};

circle2.color = 'yellow'; // Adicionando propriedade ao objeto
circle2.draw = function() {}

delete circle2.color; // Deletando propriedade do objeto

console.log(circle2);

// ******************************************************************************************************
//
// * Propriedade de construtor
//
// * Todo objeto possui essa propriedade para referenciar a função que foi usada para criar o objeto.
// * Podemos visualizá-lo no console ao digitar "'objeto'.constructor". Aqui, para criar objetos, o
// * Java utiliza de funções pré-definidas pela linguagem.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Funções são objetos
//
// * "'Objeto'.name" -> retorna o nome do objeto;
// * "'Objeto'.length" -> retorna o tamanho do objeto;
// * "'Objeto'.call('parametros');" -> retorna o objeto, ou seja, cria um novo objeto;
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Tipos de valores (primitivos):
// * Numero, string, booleano, simbolo, undefined, null
//
// * Tipos de referencia (objetos):
// * objeto, função, array
//
// * Valores primitivos são copiados pelo seu valor. Objetos são copiados por referência na memória.
//
// ******************************************************************************************************

// Exemplo 1:

let x = 10;
let y = x;
x = 20; //Aqui, o valor retornado em Y será 10.

let x2 = {value: 10};
let y2 = x2;
x2.value = 20; //Aqui, o valor retornado em Y será 20.

// Exemplo 2:

let number = 10;

function increase(number){
    number++;
}

increase(number);
console.log(number); //Aqui, o valor retornado será 10.

let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj); //Aqui, o valor retornado será 11.

// ******************************************************************************************************
//
// * Enumerando propriedades de um objeto
//
// * Objetos não são iteráveis, não podemos usar o for of, e sim o for in. Porém, podemos utilizar
// * a propriedade "Object.keys('objeto')" dentro do for of, pois essa propriedade nos retorna um array
// * contendo todos os elementos dentro do objeto.
//
// ******************************************************************************************************

const circle3 = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle [key]); // Aqui, utilizamos let in para acessar as propriedades do objeto,
// e em seguida utilizamos a notação [] para retornar os valores das propriedades.

for (let key of Object.keys(circle))
    console.log(key); // Aqui, utilizamos o let of com a propriedade "Object.keys" para conseguir iterar
// dentro de uma array que apresenta todos os elementos do objeto.

for (let entry of Object.entries(circle))
    console.log(entry); //Semelhante ao "Object.keys", temos o "Object.entries".

if ('radius' in circle) console.log('yes'); //Utilizando de estruturas condicionais para verificar
// se um valor existe dentro do objeto

// ******************************************************************************************************
//
// * Clonando um objeto:
//
// ******************************************************************************************************

const circle4 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another1 = {};
for (let key in circle4)
    another1[key] = circle4[key]; // Primeira forma de clonagem: a pior de todas, não utilizar

const another2 = Object.assign({}, circle4); // Segunda forma de clonagem, aqui, podemos declarar um 
// outro objeto dentro dos {} para copiar a propriedades de um objeto, ou deixar vazio para criar um 
// objeto novo com essas propriedades.

const another3 = { ...circle4 }; // O mais fácil e convencional na hora de criar objetos com base em
// propriedades de outro.

console.log(another3);

// ******************************************************************************************************
//
// * Coletor de lixo
//
// * Diferente de algumas linguagens, o JavaScript automaticamente aloca memória para valores armazenados.
// * O coletor de lixo é uma propriedade de linguagens de programação que é responsável por desalocar
// * variáveis não usadas mais da memória.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Objetos embutidos no JavaScript
// 
// * São objetos já presentes na linguagem JavaScript. Eles possuem seus próprios métodos e funções.
// * Podemos ver mais detalhes e exemplos de uso de cada um dentro da documentação do JS (mozilla.org).
// 
// * Exemplos: 
// *    Math -> Usada para cálculos. Possui propriedades e métodos para constantes e funções matemáticas.
// *        Métodos:
// *            - Math.random() -> retorna um valor aleatório entre 1 e 0 (caso não definido).
// *            - Math.round()  -> arredonda um valor para o inteiro mais próximo.
// *            - Math.max()    -> retorna o maior valor de um array.
// *            - Math.min()    -> retorna o menor valor de um array.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Objetos embutidos no JavaScript (2)
//
// * Exemplos:
// *    String -> No JS, temos a string primitiva (variável), e objeto de string (função de construtor).
// *    Porém, ao trabalhar com a primitiva, o JS aceita que atribuimos métodos a qualquer string.
// *        Métodos:
// *            - 'String'.lenght         -> retorna o tamanho da string (quantidade de caracteres). 
// *                Podemos aqui acessar um caracter em específico utilizando o índice (string[i]).
// *            - 'String'.includes('')   -> retorna um valor booleano se a string inclui os caracteres
// *                que definirmos.
// *            - 'String'.startsWith('') -> retorna um valor booleano se a string começar com caracteres
// *                que definirmos. Similar a esse, temos o 'endsWith', que verifica se a string termina.
// *            - 'String'.indexOf('')    -> retorna um index de onde está os caracteres que definirmos.
// *            - 'String'.replace('','') -> retorna um novo string substituindo o valor que atribuirmos
// *                por outro. Não modifica a string original.
// *            - 'String'                -> retorna o conteúdo da string.
// *            - 'String'.toUpperCase()  -> retorna o conteúdo da string em maiúsculo. Similar a esse,
// *                temos o 'toLowerCase'.
// *            - 'String'.trim()         -> retorna o conteúdo da string sem espaços antes e depois. 
// *                Similar a esse, temos o 'trimLeft()' e o 'trimRight()', que retira os espaços ao lado.
// *            - 'String'.split('')      -> definimos um caracter para separar a string, e ele nos
// *                retorna o conteúdo da string em uma array segmentada pelo que definirmos. 
//
// * Notação \:
//
// * Para manipularmos uma string ou utilizarmos caracteres dentro dela que a engine do JS já utiliza, 
// * por exemplo, caso eu queira colocar uma aspas simples dentro de uma string sem finalizar a string,
// * usamos a notação \.
//
// * Exemplos:
// *    \' -> adiciona um aspas simples dentro da string.
// *    \n -> adiciona uma nova linha a string.
//    
// ******************************************************************************************************