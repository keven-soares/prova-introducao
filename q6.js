const numeros = [8, 9, 10, 11, 12];

function quadrado(array) {
    const maior = array.filter((numero) => numero > 10);
    const quadrados = maior.map((numero) => numero * numero);
    return quadrados;
}

const final = quadrado(numeros);
console.log("Quadrado dos maiores que 10:", final); 