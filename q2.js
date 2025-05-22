const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

function numerospares(array) {
  const pares = array.filter((numero) => numero % 2 === 0);
  const dobropares = pares.map((numero) => numero * 2); 
  return { pares, dobropares }; 
}
const resultado = numerospares(numeros); 
console.log("Os pares são:", resultado.pares);
console.log("O dobro deles é:", resultado.dobropares);