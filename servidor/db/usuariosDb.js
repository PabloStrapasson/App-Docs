import { usuariosColecao } from "./dbConnect.js"
import criaHashESalSenha from "../utils/criaHashESalSenha.js";

function encontrarUsuario(nome){
    return usuariosColecao.findOne({nome});
}

function cadastrarUsuario({ usuario, senha }){
    const { hashSenha, salSenha } = criaHashESalSenha(senha);
    return usuariosColecao.insertOne({
        nome: usuario,
        hashSenha,
        salSenha
    })
}

export { cadastrarUsuario, encontrarUsuario }