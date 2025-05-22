const alunos = [
  { nome: 'keven', nota: 8 },
  { nome: 'juca', nota: 10 },
  { nome: 'xuxu', nota: 5 }
];

function sistemanotas(array) {
  const maiorsete = array.filter((aluno) => aluno.nota >= 7); // mudei 'alunos' para 'aluno'
  const reprovados = array.filter((aluno) => aluno.nota < 7);  // mudei 'alunos' para 'aluno'
  
  console.log("notas maiores que 7:", maiorsete);
  console.log("reprovado:", reprovados);  
  
  return { maiorsete, reprovados };  
}

const resultado = sistemanotas(alunos); 