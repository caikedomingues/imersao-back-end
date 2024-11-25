


import {getTodosPosts, criarPost, atualizarPost} from "../models/postModels.js";

import fs from "fs";

import gerarDescricaoComGemini from '../services/geminiService.js';

export async function listarPosts(req, res){

    //Chama a função para buscar os posts
    const posts = await getTodosPosts();
    
    // Envia uma resposta HTTP com status 200 (ok) e os posts no formato JSON
    res.status(200).json(posts);
}


/*Método que ira inserir posts no banco de dados mongoDB */

export async function postarNovoPost(req, res){

    const novoPost = req.body;

    /*Blocos try e catch que irão inspecionar o bloco e capturar 
    possiveis erros */
    try{

        const postCriado = await criarPost(novoPost)

        res.status(200).json(postCriado);

    }catch(erro){

        console.error(erro.message);

        /*Status que representa erro interno no servidor. */
        res.status(500).json({"Erro: ": "Falha na requisição"})
    }

}


export async function uploadImagem(req, res) {

    const novoPost = {

        descricao:"",
        imgUrl: req.file.originalname,
        alt:""
    };

    /*Blocos try e catch que irão inspecionar o bloco e capturar 
    possiveis erros */
    try{

        const postCriado = await criarPost(novoPost);

        const imagemAtualizada =  `uploads/${postCriado.insertedId}.jpg`

        fs.renameSync(req.file.path, imagemAtualizada)
        

        res.status(200).json(postCriado);

    }catch(erro){

        console.error(erro.message);

        /*Status que representa erro interno no servidor. */
        res.status(500).json({"Erro: ": "Falha na requisição"})
    }
        
}



export async function atualizarNovoPost(req, res){

    const id = req.params.id;

    const url_imagem = `http://localhost:3000/${id}.png`


    try{

        const imageBuffer = fs.readFileSync(`uploads/${id}.png`)

        const descricao = await gerarDescricaoComGemini(imageBuffer)

        const post = {

            imgUrl:url_imagem,
            descricao: descricao,
            alt: req.body.alt
        }
        
        const postCriado = await atualizarPost(id, post);

        
        res.status(200).json(postCriado);

    }catch(erro){

        console.error(erro.message);

        res.status(500).json({"Erro":"Falha na requisição"})
    }

}