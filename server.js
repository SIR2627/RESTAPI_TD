const express = require('express');
const dotenv = require('dotenv');
const app = express()
const port = 3000

const mongoose = require('mongoose');

dotenv.config();

const alunoSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  cursoId: String
});

const Aluno = mongoose.model('Aluno', alunoSchema);

dbconnect().catch(err => console.log(err));

async function dbconnect() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("DB connected successfully!");
}

app.get('/alunos', async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bomdia', (req, res) => {
  res.send('Bomdia!')
})

app.get('/bomdia/:num', (req, res) => {
    const nome = req.query.nome;
    for (let i=0; i<req.params.num; i++) {
        res.write(`Bomdia! ${nome}\n`);
    }
    res.end();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

