const numeros = [1,2,3,4,5,6,7,8,9]; 
function numeroprimo(numeros) { 
    if (num <= 1){ 
        return false; 
    }; 
    for (i = 2; i < num; i++) { 
        if (num % i === 0){ 
            return false; 
        } 
    } 
    return true; 
} 
const primos = numeros.filter(numeroprimo); 
console.log(primos);