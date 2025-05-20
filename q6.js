const numeros = [8,9,10,11,12]; 
function quadrado(array){ 
    const maior = array.filter((numeros) => numeros > 10); 
    const quadrado = maior.map((numeros) =>numero * numero); 
    return quadrado; 
} 
 
const final = quadrado(numeros); 
console.log("Quadrado dos maiores que 10:", quadrado)
