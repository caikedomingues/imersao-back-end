
/*Como no caso a unica rota importante é a rota de acessar todos os posts,
vou trazer apenas ela para esse arquivo e deixar as outras rotas apenas como
exemplos de criação de rotas. */


// Importa o framework express para criar a aplicação web
import express from "express";

// Importa o Multer para lidar com uploads de arquivos
import multer from "multer";

import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postControllers.js";

import cors from 'cors';


const corsOption = {

    origin: "http://localhost:8000",

    optionsSucessStatus: 200
}


/*Trecho que possibilita usar a biblioteca multer no windows, caso
o sistema operacional seja linux ou mac, não é necessário este trecho. */
const storage = multer.diskStorage({

    destination: function(req, file, cb){

        // Especifica o diretório para armazenar as imagens enviadas
        cb(null, 'uploads/');// substitua por seu caminho de upload desejado
    },

    filename: function(req, file, cb){

        //mantém o nome original do arquivo por simplicidade 
        cb(null, file.originalname);// Considere usar uma estratégia de geração de nomes únicos para produção.
    }
})

//Cria uma instância do middleware Multer.
const upload = multer({dest:"./uploads", storage})

//Define as rotas usando o objeto Express app
const routes = (app) =>{
    
    /*Permite que o servidor interprete requisições com corpo no formato JSON */
    app.use(express.json());

    app.use(cors(corsOption));

    /*Rota para buscar todos os posts */
    app.get("/posts", listarPosts);

    /*Rota para criar um novo post. */
    app.post("/posts", postarNovoPost)

    //Rota para upload de imagens (assumindo que uma única imagem chamada "imagem").
    app.post("/upload", upload.single("imagem"),uploadImagem )

    app.put("/upload/:id", atualizarNovoPost)
}


export default routes;


