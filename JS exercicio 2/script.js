let studentList = [
    {
      nome: "pedrao",
      nota1: 8,
      nota2: 9,
    },
    {
      nome: "cavani",
      nota1: 5,
      nota2: 6,
    },
    {
      nome: "anao",
      nota1: 3,
      nota2: 10,
    },
  ];
  
  
  function averageStudents(student) {
    return (student.nota1 + student.nota2) / 2;
  }
  
 
  for (let student of studentList) {
    const media = averageStudents(student);
  
    if (media >= 7) {
      alert(`A média do aluno(a) ${student.nome} é ${media}
      Parabéns, ${student.nome}, você foi aprovado no concurso!`);
    } else {
      alert(`A média do aluno(a) ${student.nome} é ${media}
      Não foi dessa vez ${student.nome}, tente novamente!`);
    }
  }