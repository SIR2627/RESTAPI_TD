const divalunos = document.getElementById('alunos');

console.log(divalunos);

async function getAlunos() {
    const response =  await fetch("http://localhost:3000/alunos");
    const alunos = await response.json();
    console.log(alunos);
    return alunos;
}

async function showAlunos() {
    divalunos.innerHTML="";
    const alunos = await getAlunos();
    alunos.forEach(aluno => {
        const pnovoaluno = document.createElement("p");
        const bdelaluno = document.createElement("button");
        bdelaluno.textContent = "Apagar";
        bdelaluno.addEventListener("click", deleteAluno);

        bdelaluno.dataset.id = aluno.id;
        pnovoaluno.textContent = aluno.nome + " " + aluno.idade + " ";
        
        pnovoaluno.appendChild(bdelaluno);
        divalunos.appendChild(pnovoaluno);
    });
}
async function deleteAluno(e) {
    const idAluno = e.target.dataset.id;
    console.log(idAluno);
    const url = "http://localhost:3000/alunos/" + idAluno
    const response = await fetch(url, {"method" : "DELETE"});
    showAlunos();
}

showAlunos();