//Express é um framework que lida com solicitações HTTP
import express from "express";

//O express() é uma instância que permite que você tenha acesso a todos os recursos e métodos fornecidos pelo Express para configurar e gerenciar o aplicativo.
const app = express();

//Recebe e envia dados no formato JSON
app.use(express.json())


//Get: imprimi dados existentes
//Put: edita os dados
//Post: envia novos dados
//Delete: exclui dados


//O livros solicitados estão aqui
const livros = [
  {id: 1, "titulo": "Senhor dos Aneis"},
  {id: 2, "titulo": "O Hobiit"},
  {id: 3, "titulo": "Velozes e Furiosos"}
]

// Ao iniciar o get na página inicial, vai aparecer o texto 'Curso de Node'
app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
}) 

// Todos os livros serão impressos na resposta
app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

// O livro de acordo com o id que você digitar virá na resposta
// A importância do que req (requisição) que ele faz uma solicitação ao HTTP, que podem ser inumeras, nessa ocasião ele está acessando os dados do livro 
app.get('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
})

//Envia novos dados que vão ser enviados com o método push para dentro do corpo do código
app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro foi cadastrado com sucesso')
})

//Atualiza os dados de um id especifico do livro
//A função buscaLivro ela acessa o interior do array de livros, quando ver que é igual o id que eu digitei no URL com o do array, ele acessa o objeto do interior do array
//Faz a atualização do titulo do body
app.put('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
})

//Deleta o id identificado na URL
app.delete('/livros/:id', (req, res) => {
  let {id} = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
})

//Encontra o id com o método findIndex
function buscaLivro(id) {
  return livros.findIndex(livro => livro.id == id)
}

export default app