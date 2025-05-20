const alunos = [ { nome: 'keven', nota: 8 }, { nome: 'juca', nota: 10 }, { nome: 
'xuxu', nota: 7 } ]; 
function sistemanotas(array){ 
const maiorsete = alunos.filter((alunos) => alunos.nota >= 7); 
const reprovados = alunos.filter((alunos) => alunos.nota < 7); 
if (maiorsete){ 
console.log("notas maiores que 7:", maiorsete); 
return maiorsete; 
}else{ 
        console.log("reprovado:", reprovados); 
        return reprovados; 
    } 
 
} 
aprovados(alunos); 