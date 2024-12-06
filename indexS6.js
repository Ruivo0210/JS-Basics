// ******************************************************************************************************

// ******************************************************************************************************
//
// * Arrays
//
// * Adicionando elementos no começo, meio e fim de um array:
//
// ******************************************************************************************************

const numbers = [3,4];

numbers.push(5,6); // Adicionar elementos ao fim da array

numbers.unshift(1,2); // Adicionar elementos ao começo da array

numbers.splice(2,0,'a','b'); // Adicionando elementos ao meio da array. Definimos um index, se queremos deletar
// algo, e em seguida definimos o que queremos colocar.

console.log(numbers);

// ******************************************************************************************************
//
// * Encontrando elementos (primitivos)
//
// * Como encontrar elementos presentes dentro de um array:
//
// ******************************************************************************************************

const numbers1 = [1,2,3,4]; 

console.log(numbers1.indexOf(1, 2)); // Achar index de um item dentro de um array. Retorna -1 quando não
// presente. Podemos também definir um index após a vírgula para a busca começar a partir dele.

console.log(numbers1.lastIndexOf(1)); // Achar o último index de um item dentro de um array

console.log(numbers1.indexOf(1) !== -1); // Retorna valor booleano de acordo com a expressão

console.log(numbers1.includes(1)); // Retorna valor booleano caso contenha o valor

// ******************************************************************************************************
//
// * Encontrando elementos (referência, função de predicado)
//
// * Ao trabalharmos com objetos dentro de arrays, precisamos nos atentar ao detalhe de que eles estão
// * sendo referenciados em outro lugar da memória, então precisamos trabalhar com outros métodos:
//
// ******************************************************************************************************

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const course = courses.find(function(course){ // Função para encontrar o nome do objeto dentro da array
    return course.name === 'a';
});
// Nos retorna o primeiro objeto que atende à estrutura condicional. Podemos também utilizar a funçao
// '.findIndex' para retornar o index do objeto que estamos procurando.
console.log(course);

// ******************************************************************************************************
//
// * Arrow Function
//
// * Podemos reescrever a função de predicado anterior por uma seta, da seguinte forma:
//
// ******************************************************************************************************

const course1 = courses.find(course1 => course1.name === 'a');

// ******************************************************************************************************
//
// * Removendo elementos da array:
//
// * Pop, Shift e Splice
//
// ******************************************************************************************************

const numbers2 = [1,2,3,4];

const last = numbers2.pop(); // Remove o último elemento da array e retorna ele.

const first = numbers2.shift(); // Remove o primeiro elemento da array e retorna ele.

numbers2.splice(1,1); // Remove elementos ao meio da array. Definimos um index, e será deletado a partir
// do index.

console.log(numbers2);

// ******************************************************************************************************
//
// * Esvaziando um array
//
// * Podemos zerar o conteúdo de uma array das seguintes formas:
//
// ******************************************************************************************************

let numbers3 = [1,2,3,4];
let another = numbers3;

// Solução 1: não recomendada caso haja outras referências à aquela array.
numbers3 = [];

// Solução 2: mais indicada.
numbers3.length = 0;

// Solução 3:
numbers3.splice(0,numbers3.length);

// Solução 4: não indicada por questões de performance.
while (numbers3.length > 0)
    numbers3.pop();

console.log(numbers3);
console.log(another);

// ******************************************************************************************************
//
// * Combinando Arrays
//
// * Podemos contatenar arrays da seguinte forma:
//
// ******************************************************************************************************

const first1 = [1,2,3];
const second = [4,5,6];

// Lembrando que, ao trabalharmos com elementos de referência, utilizamos o seu identificador:
const first2 = [{id:1}];

const combined = first1.concat(second); // Aqui concatenamos definindo o segundo array dentro do método.

const combined1 = first2.concat(second); 
first2[0].id = 10;

const slice = combined.slice(); // Aqui, cortamos uma fatia da array. Podemos definir um index para
// começar e terminar a fatia, ou deixamos vazio para retornar a mesma array.

console.log(combined);
console.log(combined1);
console.log(slice);

// ******************************************************************************************************
//
// * Spread Operator (...)
//
// * Usado também para concatenar strings, de uma forma melhor.
//
// ******************************************************************************************************

const combined2 = [...first1, 'a', ...second, 'b']; // o Spread Operator copia todas as características
const copy = [...combined2];
console.log(copy);

// ******************************************************************************************************
//
// * Iterando um array
//
// * Existem duas formas de iterar dentro de um arrray:
//
// ******************************************************************************************************

const numbers4 = [1,2,3];

// Exemplo 1:

for (let number of numbers4)
    console.log(number);

// Exemplo 2:
// Aqui, o forEach é um método utilizado em um array, que solicita uma função para iterar em cada 
// objeto dela. Aqui, a função foi substituída por "=>"

numbers4.forEach((number, index) => console.log(index,number));

// Exemplo 2 sem "=>":

numbers4.forEach(function(number){
    console.log(number);
});

// ******************************************************************************************************
//
// * Juntando Arrays
//
// * Join e Split
//
// ******************************************************************************************************

// Exemplo 1: join
// Aqui, definimos um separador (opcional) à array, e ele retorna uma array com os elementos juntos.

const numbers5 = [1,2,3];
const joined = numbers5.join(',');
console.log(joined);

// Exemplo 2: split
// Aqui, definimos um separador dentro da array, e ele retorna uma array com os elementos separados.

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

// Exemplo 3: join
// Aqui, utilizamos o join para juntar a array do exemplo 2. Muito utilizado em URLs.

const combined3 = parts.join('-');
console.log(combined3);

// ******************************************************************************************************
//
// * Ordenando Arrays
//
// * Sort e Reverse
//
// ******************************************************************************************************

// Sort: coloca os elementos da array em ordem crescente
const numbers6 = [2,3,1];
numbers6.sort();
console.log(numbers6);

// Reverse: coloca os elementos da array em ordem decrescente
numbers6.reverse();
console.log(numbers6);

const courses1 = [
    {id:1,name:'Node.js'},
    {id:2,name:'javaScript'}
];

// Para utilizarmos o método sort em elementos de um objeto (como strings no exemplo), precisamos 
// definir uma função, onde o objeto é passado como parâmetro. Para string, o sort utiliza o padrão
// ASCII, então para evitar erros, convertemos as duas para maiúsculo ou minúsculo.

courses1.sort(function(a,b){

    // a < b => -1
    // a > b => 1
    // a === b => 0

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA<nameB) return -1;
    if(nameA>nameB) return 1;
    return 0;

});

console.log(courses1);

// ******************************************************************************************************
//
// * Testando elementos da Array
//
// * Every e Some
//
// ******************************************************************************************************

const numbers7 = [1, -1, 2, 3];

// Every: método de função utilizado para retornar um valor true caso todos os valores da array
// atenderem à função estabelecida.

const allPositive = numbers.every(function(value){
    return value >= 0;
});

console.log(allPositive); // Nesse caso retorna falso pela presença do -1.

// Some: método de função utilizado para retornar um valor true caso algum dos valores da array
// atenderem à função estabelecida.

const atLeastOnePositive = numbers.some(function(value){
    return value >= 0;
});

console.log(atLeastOnePositive); // Nesse caso retorna verdadeiro pela presença dos números positivos.

// ******************************************************************************************************
//
// * Filtrando um array
//
// * Utilizamos o método 'Filter' para poder filtrar uma array de acordo com uma condição.
//
// ******************************************************************************************************

const numbers8 = [1, -1, 2, 3];

// Aqui, declaramos uma variável N como índice. "N recebe N >= 0".
const filtered = numbers8.filter(n => n >= 0); // Função de seta sendo usada para retornar apenas 1 val.

console.log(filtered);

// ******************************************************************************************************
//
// * Mapeando uma array
//
// * Podemos utilizar o método 'map' para mapear elementos de um array dentro de strings, por exemplo.
//
// ******************************************************************************************************

// Aqui, mapeamos a array dentro de duas strings (tags de html)
const items = filtered.map(n => '<li>' + n + '</li>');

// Aqui, utilizamos o join para colocar a array anterior dentro de uma tag ul.
const html = '<ul>' + items.join('') + '</ul>';

// Aqui, mapeamos a array para dentro de um objeto, onde cada item se torna um elemento.
const items1 = filtered.map(n => ({value:n})); // Ao retornar objetos, colocamos entre '()'.

console.log(html);
console.log(items1);

// Encadeamento de métodos: podemos ligar vários metodos juntos sequencialmente. Por exemplo:
// Note que, ao fazer isso, para termos um codigo mais limpo, separamos cada método linha a linha.

const items2 = numbers8
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items2);

// ******************************************************************************************************
//
// * Reduzindo arrays
//
// * Reduce
//
// ******************************************************************************************************

// A seguinte estrutura:
let sum = 0;
for (let n of numbers8)
    sum += n;

console.log(sum);

// Pode também ser escrita dessa seguinte forma:
// Aqui, o método reduce utiliza um acumulador (valor anterior) e o valor atual (para cada elemento da 
// array), e em seguida opcionalmente podemos definir onde queremos começar (nesse caso, omitimos para)
// que a função comece do primeiro valor)
const sum1 = numbers8.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum1);

// ******************************************************************************************************
//
// * Exercício 1
//
// * Construir função para exibir os números dentro de um determinado intervalo.
//
// ******************************************************************************************************

console.log(arrayFromRange(1,4));

function arrayFromRange(min,max) {

    let array = [min, max]
    let dif = ((max - min)-1)

    for (let i = 0; i < dif; i++){
        array.splice(min,0,min+1);
        min++;
    }

    array.sort(function(a,b){
        if (a<b) return -1;
        if (a>b) return 1;
        return 0;
    });

    return array;

}

// Resolução:

const array1 = arrayFromRange (1, 4);

console.log (array1);

function arrayFromRange1(min, max) {
    const output = [] ;
    for (let i = min; i <= max; i++)
        output.push(i);
    return output; 
}

// ******************************************************************************************************
//
// * Exercício 2
//
// * Construir função que procura por elemento dentro da array (igual ao método includes)
//
// ******************************************************************************************************

const search = [1,2,3];

console.log(include(search,1));

function include(array, searchElement){
    const inc = array.some(function(value){
        return value === searchElement;
    });
    return inc;
}

// Resolução:

const search1 = [1, 2, 3];

console.log (includes(search1, 1));

function includes(array, searchElement){
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}

// ******************************************************************************************************
//
// * Exercício 3:
//
// * Fazer função para remover elementos que definirmos de um array.
//
// ******************************************************************************************************

// Resolução:
// Aqui, criamos um novo array dentro da função, e em seguida comparamos cada elemento da array remove
// com os elementos da array excluded. Em seguida, definimos uma condição, se a array excluded não 
// inclui algum elemento de remove, ele deve adicionar o elemento à nova array.

const remove = [1,2,3];

const removed = except(remove, [1]);

console.log(removed);

function except(array,excluded){
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}

// ******************************************************************************************************
//
// * Exercício 4:
//
// * Criar função para reordenar array de acordo com o elemento que selecionarmos e sua nova posição.
//
// ******************************************************************************************************

// Resolução:

const ord = [1,2,3,4];

const order = move(ord, 0, 1);

console.log(order);

function move(array, index, offset){
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }
    const output = [...array];
    const element = output.splice(index,1)[0];
    output.splice(position, 0, element);
    return output;
}

// ******************************************************************************************************
//
// * Exercício 5:
//
// * Construir função que conta quantas vezes um elemento aparece em um array.
//
// ******************************************************************************************************

const counter = [1, 2, 3];

const count = countOcurrences(counter, 1);
const count1 = countOcurrences1(counter, 1);

console.log(count);
console.log(count1);

function countOcurrences(array, searchElement){
    let i = 0;
    for (let element of array)
        if (element === searchElement)
            i++;
        return i;
}

// Resolução (usando Reduce):

function countOcurrences1(array, searchElement){
    return array.reduce((accumulator,current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}

// ******************************************************************************************************
//
// * Exercício 6:
//
// * Construir função que retorna o maior valor de um array.
//
// ******************************************************************************************************

const max = getMax([1,2,3,4]);
const max1 = getMax1([1,2,3,4]);

console.log(max);
console.log(max1);

function getMax(array){

    array.sort(function(a,b){
        if (a<b) return -1;
        if (a>b) return 1;
        return 0;
    });

    return array.pop();

}

// Resolução (usando Reduce):
// Sempre que tivermos uma função que tem um array como entrada e um número como saída, devemos
// considerar o reduce.

function getMax1(array){

    if (array.length === 0) return undefined;

    return array.reduce((a,b) => (a>b) ? a : b);

}

// ******************************************************************************************************
//
// * Exercício 7:
//
// * Fazer função que recebe um array de objetos e realiza consultas e ordenação.
//
// ******************************************************************************************************

const movies = [
    {title: 'a', year:2018, rating: 4.5},
    {title: 'b', year:2018, rating: 4.7},
    {title: 'c', year:2018, rating: 3},
    {title: 'd', year:2017, rating: 4.5}
];

// Achar todos os filmes de 2018 com a nota > 4.
// Ordená-los pelo rating, de forma decrescente.
// Exibir somente o título deles.

const list = movies.filter((movies => movies.year === 2018 && movies.rating >= 4))

list.sort(function(a,b){

    if (a.rating<b.rating) return 1;
    if (a.rating>b.rating) return -1;

    return 0;
    
});

console.log(list); // Faltou exibir título!

// Resolução:

const list1 = movies
    .filter((movies => movies.year === 2018 && movies.rating >= 4))
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(list1);

// ******************************************************************************************************