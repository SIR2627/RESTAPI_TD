const express = require('express');
const app = express()
const port = 3000

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