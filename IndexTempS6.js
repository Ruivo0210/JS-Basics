// ******************************************************************************************************
//
// * Filtrando um array
//
// * Utilizamos o método 'Filter' para poder filtrar uma array de acordo com uma condição.
//
// ******************************************************************************************************

const numbers = [1, -1, 2, 3];

// Aqui, declaramos uma variável N como índice. "N recebe N >= 0".
const filtered = numbers.filter(n => n >= 0); // Função de seta sendo usada para retornar apenas 1 val.

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

const items2 = numbers
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
for (let n of numbers)
    sum += n;

console.log(sum);

// Pode também ser escrita dessa seguinte forma:
// Aqui, o método reduce utiliza um acumulador (valor anterior) e o valor atual (para cada elemento da 
// array), e em seguida opcionalmente podemos definir onde queremos começar (nesse caso, omitimos para)
// que a função comece do primeiro valor,
const sum1 = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum1);