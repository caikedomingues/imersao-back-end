

import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";


/*Se conectando ao banco de dados */
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

/*Criação da função que irá pegar todos os posts no banco de dados
mongo DB 

Async: A palavra-chave async indica que a função pode realizar operações assíncronas, como interagir com um banco de dados.
*/
export async function getTodosPosts(){

    /*Informando o banco de dados que será consultado usando o metodo
    db da variável conexao (variável que possui a conexão com o banco
    de dados) */
    const db = conexao.db("imersao-instabytes")

    /*Informando a coleção (tabela) que será acessada */
    const colecao = db.collection("posts")
    
    /*Retornando em forma de array os valores encontrados usando 
    a função find. */
    return colecao.find().toArray()
}


export async function criarPost(novoPost){

    //Seleciona o banco de dados utilizado
    const db = conexao.db("imersao-instabytes");

    //Seleciona a coleção 'posts' dentro do banco de dados
    const colecao = db.collection("posts");

    //Retorna um array com todos os documentos da coleção

    return colecao.insertOne(novoPost);


}


export async function atualizarPost(id, novoPost){

    //Seleciona o banco de dados utilizado
    const db = conexao.db("imersao-instabytes");

    //Seleciona a coleção 'posts' dentro do banco de dados
    const colecao = db.collection("posts");

    const objID = ObjectId.createFromHexString(id)
    
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}