const array = [2,5,100,30,50]; 
function somarArray(numeros) { 
return numeros.reduce((acumulador, atual) => acumulador + atual, 0); 
} 
const soma = somarArray(array); 
console.log(soma);