

/*Import da biblioteca do servidor express.
O Express simplifica a criação de rotas e o tratamento de requisições HTTP.
 */
import express from "express";

import routes from "./src/routes/postsRoutes.js";



/*Vamos inicializar/instânciar o express em uma variável constante */
const app = express();


app.use(express.static("uploads"))

routes(app);

/*A função listen ira receber 2 argumentos: a porta do servidor que vamos
criar e uma função que ira imprimir uma mensagem na tela. */
app.listen(3000, () => {

    console.log("Servidor Escutando....");
});





/*Variável constante que terá como valor uma lista que ira conter
 objetos. Os objetos possuem atributos representados pelo esquema 
chave e valor.  */
/*const posts = [

    {   
        id: 1,
        descricao: "Uma foto",
        imagem: "https://placecats.com/millie/300/150"

    },

    {
        id: 2,
        descricao: "Gato fazendo yoga",
        imagem: "https://placekitten.com/400/300"
    },

    {   
        id: 3,
        descricao: "Gatinho dormindo",
        imagem: "https://placekitten.com/200/400"
    },

    {   
        id: 4,
        descricao: "Gato explorando a caixa",
        imagem: "https://placekitten.com/300/200"
    }


];*/

/*Criação de uma rota */
/*

app.get: Essa parte do código configura uma rota HTTP. Em termos simples, ela define um "caminho" dentro da sua aplicação que, quando acessado, irá
executar uma determinada função.

/api: É o endereço especifico dessa rota. Quando alguém acessar o seu servidor na URL, o código dentro das chaves será executado.

(req, res) => {...}: 
req (request: requisição): Representa a requisição que foi feita ao servidor. Éla contém informações sobre quem fez a requisição, quais
dados foram enviados, etc.

res (response: respostas): Representa a resposta que será enviada ao cliente. É através dela que você pode definir o status da respostas, o
tipo de conteúdo e o corpo da respostas.

res.status(200): Define o status da resposta como 200, o que significa
"OK". Isso indica que a requisição foi processada com sucesso.

send(mensagem): Envia o texto "Boas vindas á imersão" como corpo da resposta. Ou seja, quando alguém acessar a rota /api, essa frase será exibida na página.

Observação: Trocamos o método 'send' pelo método 'JSON' para enviar para
o servidor as informações dos objetos criados na lista da variável 'posts'

.json(posts): Serializa o posts objeto em um formato Json.

Json: JavaScript Object Notation é um formato de dados popular para transmissão entre aplicativos web. É leve, fácil de ler e amplamente
suportado por várias linguagens de programação e frameworks
*/



/*Vamos criar uma função para buscar os posts por id, pois,
nem sempre queremos ver todos os posts armazenados no servidor.
 Resumindo o código fornecido tem como objetivo principal
 buscar um post especifico em um conjunto de posts, identificado 
 por um ID único. */


 /*        Função buscarPostsId(id)
 
 parametro id: Recebe o ID do post que deseja encontrar

 Metodo findIndex(): Itera sobre o array posts e retorna o indice do primeiro elemento que satisfaz a condição da função callback.

 Função de callback:

 post.id == Number(id): Compara o id do post atual com o id fornecido na chamada da função. Note que o id fornecido é convertido para um numero
 usando Number() para garantir uma comparação numérica correta.
 */


/*function buscarPostsPorId(id){

    return posts.findIndex((post) => {

        return post.id == Number(id)
    })
}*/



/* Rota /post/:id
 
 app.get("/posts/:id"): Define uma rota HTTP GET para o endpoint /posts/:id. O id é um parâmetro de rota que captura o valor do ID do post na 
 URL.
 
 const index = buscarPostsPorID(req.params.id): Chama a função buscarPostsPorID para obter o indice do post com o ID correspondente.
 O valor do ID é extraido dos parâmetros da requisição(req.params.id).

 res.status(200).json(posts[index]): Se o post for encontrado, retorna um
 status HTTP 200 (sucesso) e o  conteudo do post em formato JSON. O indice
 obtido na etapa anterior é usado para acessar o post correspondente no array posts.
 */
/*app.get("/posts/:id", (req, res) => {

    const index = buscarPostsPorId(req.params.id)

    res.status(200).json(posts[index]);

})*/

/*
Explicação Detalhada
Quando uma requisição HTTP GET é feita para a URL /posts/123 (por exemplo), o seguinte acontece:
O Node.js (assumindo que este código está em um servidor Node.js) recebe a requisição.
O framework web (Express, por exemplo) direciona a requisição para a rota /posts/:id.
O valor 123 é extraído da URL e armazenado em req.params.id.
A função buscarPostsPorId é chamada com o valor 123.
A função itera sobre cada elemento do array posts.
Para cada elemento, compara o id do elemento com 123.
Se encontrar um elemento com id igual a 123, retorna o índice desse elemento.
O índice retornado é usado para acessar o post correspondente no array posts.
O post é enviado como resposta ao cliente em formato JSON.
*/

/* Acessando a String de conexão com o banco de dados mongodb, fizemos isso
apenas para testar o acesso a variável de ambiente que possui o link de
conexão*/
//process.env.STRING_CONEXAO

/*O que são variaveis de ambiente

As variáveis de ambiente são variáveis que assumem valores diferentes dependendo da aplicação do sistema. Por exemplo, ao compartilhar o meu projeto, o outro 
programador não irá acessar o valor que 
eu defini e poderá atribuir a variável 
um novo valor a variável de ambiente.
As variáveis de ambiente devem ter as letras maiusculas separadas por um 
underline.
Variáveis de ambiente são definidas em um arquivo .env

*/











