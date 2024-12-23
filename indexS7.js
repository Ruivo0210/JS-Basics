// ******************************************************************************************************

// ******************************************************************************************************
//
// * Declaração de funções vs Expressões
//
// * Existem duas formas de declarar uma função no JavaScript:
//
// ******************************************************************************************************

// Declaração de função:
// Declarar uma função de maneira direta.
function walk(){
    console.log('walk');
}

// Expressão de função:
// Declarar uma variável a uma função.
let run = function() { // Aqui, declaramos uma função anônima. Poderíamos também declarar um nome
    // Após a  função, e então teríamos uma função nomeada.
    console.log('run');
}; // A primeira diferença entre elas é que na declaração, não utilizamos ;.

let move = run; // Na expressão de função, podemos atribuir seu valor a outra variável.
run(); // Podemos chamar a expressão utilizando a sua declaração.
move();

// ******************************************************************************************************
//
// * Hoisting
//
// * O processo da engine do JavaScript que move todas as declarações de funções para o topo do arquivo.
// * Isso faz com que a declaração de função possa ser chamada antes de ser declarada no código,
// * diferente da expressão de função.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Argumentos
//
// * Toda função no JavaScript possui uma propriedade chamada de 'arguments', que define todos os
// * argumentos que estão sendo passados à função. Com ela, podemos, por exemplo, declarar uma
// * função que soma todos os argumentos que foram passados a ela.
//
// ******************************************************************************************************

function sum(a, b){
    return a+b;
}

console.log(sum(1,2,3,4,5)); // Mesmo declarando dois argumentos na função, passamos uma lista com cinco
// argumentos e em seguida somos retornados com a soma dos dois primeiros.

// Para trabalharmos com uma lista indeterminada de argumentos, utilizamos a propriedade 'arguments':

function sum1(){
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum1(1,2,3,4,5,10));

// ******************************************************************************************************
//
// * Operador Rest
//
// * O operador Rest é usado para trabalhar com funções de múltiplos argumentos. Ao trabalharmos com
// * mais de um argumento, finalizamos a declarações de argumentos com o rest (...), e ele representa
// * todos os argumentos que serão passados pela função. Ele precisa ser o último argumento.
//
// ******************************************************************************************************

// Exemplo 1: utilizando o args para retornar todas os argumentos declarados.
function sum(...args){
    return(args);
}

console.log(sum(1,2,3,4,5,10));

// Exemplo 2: utilizando o args para realizar a soma de todos os argumentos declarados.
function sum1(...args){
    let total = 0;
    return args.reduce((a,b) => a+b);
}

console.log(sum1(1,2,3,4,5,10));

// Exemplo 3: utilizando o args para construir uma função que calcula disconto em uma compra.
function sum2(discount, ...prices){ // Declaramos dois argumentos à função (deconto e valor dos itens)
    const total = prices.reduce((a,b) => a + b); // Aqui, utilizamos o reduce para somar os valores 
    // dos itens comprados.
    return total * (1-discount); // Aqui, descontamos o total do valor do desconto.
}

console.log(sum2(0.1,20,30)); // Primeiro declaramos o desconto, e em seguida o rest faz com que o resto
// seja os valores de todos os itens.

// ******************************************************************************************************
//
// * Valores padrões para parâmetros
//
// * Podemos declarar valores padrões para os parâmetros. Se não recebam nenhum valor, eles terão padrão.
// 
// ******************************************************************************************************

function interest(principal, rate = 3.5, years = 5){ // declaramos valores padrões dentro dos parâmetros.
    // Precisamos nos atentar para colocar parâmetros com valores padrões sempre ao final da lista de 
    // parâmetros.
    return principal * rate / 100 * years;
}

console.log(interest(1000));

// ******************************************************************************************************
//
// * Get e Set
//
// * Para acessarmos e alterarmos propriedades presentes dentro de objetos.
//
// ******************************************************************************************************

// Primeiro exemplo: retornar nome completo de um objeto pessoa.
// Essa primeira abordagem não é ideal pois, neste exemplo, não conseguimos alterar o valor do elemento.
const person = {
    firstName: 'João',
    lastName: 'Lucas',
    fullName(){ // Ao declararmos uma função dentro de um objeto, podemos omitir o function.
        return `${person.firstName} ${person.lastName}` 
    }
}

console.log(person.fullName());

// Segundo exemplo, utilizando get e set:
// Com esta abordagem, conseguimos alterar o valor da propriedade.
const person1 = {
    firstName: 'João',
    lastName: 'Lucas',
    get fullName(){
        return `${person1.firstName} ${person1.lastName}` 
    },
    set fullName(value){ // O set requer uma variável a ser definida (value).
        const parts = value.split(' '); // Aqui, separamos a string e damos cada valor a uma propriedade.
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

person1.fullName = 'Lucas João';

console.log(person1);

// ******************************************************************************************************
//
// * Throw, Try e Catch (programação defensiva)
//
// * Para trabalharmos com códigos e evitar erros nos outputs, usamos o Throw, o try e o catch.
//
// ******************************************************************************************************

// Exemplo, utilizando o objeto anterior:
const person2 = {
    firstName: 'João',
    lastName: 'Lucas',
    get fullName(){
        return `${person2.firstName} ${person2.lastName}` 
    },
    set fullName(value){
        if (typeof value !== 'string')
            throw new Error('Value is not a string.') // Aqui, utilizamos uma estrutura condicional para
        // checar se o valor da variável não é string. Caso não seja, utilizamos o throw em seguido de
        // um construtor de erro, com a mensagem que queremos exibir ao usuário.
        
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.') // Mesmo caso do exemplo acima, porém aqui,
        // verificamos se o usuário não deixou o campo de nome vazio.

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try{ // Utilizamos o try para tentar exibir o resultado da função, porém caso detecte algum erro no  
     // valor atribuido, retornamos o alerta ao usuário.
    person2.fullName = "Joao Lucas";
}
catch (e){ // Utilizamos a propriedade do objeto Error "Alert" para exibir o alerta ao usuário.
    alert(e);
}

console.log(person2);

// ******************************************************************************************************
//
// * Escopo Local vs Global
//
// * Ao trabalharmos com constantes e variáveis, possuímos dois escopos:
// 
// *    - Global: Se refere ao escopo global do código. São declaradas fora de estruturas condicionais
// *              e podem ser acessadas a qualquer momento dentro de qualquer condição ou função. Não 
// *              devemos repetir o seu nome em nenhum outro local.
// 
// *    - Local: Se refere ao escopo dentro de estruturas de condições ou de funções. Só podem ser 
// *             acessadas de forma local, ou seja, só podem ser acessadas dentro de suas condições ou
// *             funções onde foram declaradas. Fora da estrutura, podemos repetir seu nome.
//
// * Ao declararmos uma variável local com o mesmo nome de uma variável global anterior, a local terá
// * preferência em relação ao valor da global.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Let vs Var
//
// * Antes do ES6 (2015), o JavaScript possuia apenas o Var para a declaração de variáveis. Acontece que
// * o Var declara variáveis com escopos dentro de funções, ou seja, podemos acessar a variável mesmo 
// * fora do bloco de código, caso esteja dentro da função. A partir do ES6, o Let e o Const foram 
// * Adicionados ao JS, e o escopo de ambos são apenas dentro de blocos de código, ou seja, diferente do 
// * Var, aqui, não conseguimos acessar a variável fora de seu bloco.
//
// * Outro problema do Var é que, ao criarmos variáveis de escopo global, essa variável fica anexada ao
// * objeto Window da página, o que deve ser evitado a todo custo.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * A palavra "This"
//
// * Referencia o objeto que está atualmente executando a função. Quando utilizamos o this dentro de um
// * método, ele irá se referenciar ao objeto, e qunado utilizamos dentro de uma função, ele irá
// * referenciar a Window, global.
//
// ******************************************************************************************************

// Exemplo 1: Usando o This para referenciar uma propriedade do próprio objeto

const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};

video.play();

// Adicionando uma função dentro de um objeto (método)
video.stop = function(){
    console.log(this);
};

video.stop();


// Exemplo 2: Usando o This para tentar referenciar uma propriedade dentro de uma função

function playVideo(){
    console.log(this);
}

playVideo(); // Aqui, o retorno é a Window

// Exemplo 2: Usando o This para tentar referenciar uma propriedade dentro de uma função

function Video(title){
    this.title = title;
    console.log(this);
}

const v = new Video('b'); // Aqui, o retorno é o objeto, pois estamos usando um método construtor.

const video1 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){ // Como temos uma função comum aqui, ela irá referenciar o window.
            console.log(this, tag);
        }, this); // O método forEach recebe um segundo fator para referenciar o próprio objeto.
        // Caso não declarado, a função irá referenciar a Window.
    }
};

video1.showTags();

// ******************************************************************************************************
//
// * Como alterar o This para que ele referencie o objeto
//
// ******************************************************************************************************

// Primeira abordagem: criando uma constante para o objeto referenciar a ele mesmo. Não é ideal.

const video2 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        const self = this;
        this.tags.forEach(function(tag){ 
            console.log(self.title, tag);
        }, this);
    }
};

video2.showTags();

// Segunda abordagem: utilizando os métodos Call, Apply e Bind

function playVideo1() {
    console.log(this);
}

// A única diferença entre os dois é que, ao passar um segundo argumento ao método, no caso do apply, devemos
// colocar esses argumentos dentro de uma array.

playVideo1.call({name: 'João'}, 1, 2);
playVideo1.apply({name: 'João'}, [1,2]);

// No caso do Bind, ele cria uma nova funçao assicada à aquele objeto

playVideo1.bind({name: 'João'})();

// Window

playVideo1(); 

// Resolvendo o primeiro exemplo utilizando o Bind

const video3 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){ 
            console.log(this.title, tag);
        }.bind(this));
    }
};

video3.showTags();

// Terceira abordagem: utilizando a função de seta (=>). O melhor método.

const video4 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(tag => { 
            console.log(this.title, tag);
        });
    }
};

video4.showTags();

// ******************************************************************************************************
//
// * Exercicio 1:
//
// * Criar uma função que realiza a soma de todos os argumentos e detecta se é um array
//
// ******************************************************************************************************

function sum2(...args){
    if (Array.isArray(args[0]) === true)
        return(args[0].reduce((acumulador, valorAtual) => acumulador + valorAtual, 0));
    return args.reduce((a,b) => a+b);
}

console.log(sum2(1,3,5,10));

// Resolução:

function sum3(...args){
    if (args.length === 1 && Array.isArray(args[0]))
        args = [...args[0]];
    return args.reduce((a,b) => a+b);
}

console.log(sum3(1,3,5,10));

// ******************************************************************************************************
//
// * Exercício 2:
//
// * Criar um objeto "Círculo", usando a sintaxe de objeto literal, com uma propriedade de leitura
//
// ******************************************************************************************************

const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);

// ******************************************************************************************************
//
// * Exercício 3
//
// * Adicionar error handling em uma função
//
// ******************************************************************************************************
try{
    const counter = [1, 2, 3];
    const count1 = countOcurrences1(null, 1);
    console.log(count1);
}
catch (e) {
    console.log(e.message);
}

function countOcurrences1(array, searchElement){
    if (!Array.isArray(array))
        throw new Error('Invalid array.')
    return array.reduce((accumulator,current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}

// ******************************************************************************************************