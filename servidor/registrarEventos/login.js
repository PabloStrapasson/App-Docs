import { encontrarUsuario } from "../db/usuariosDb.js"
import autenticarUsuario from "../utils/autenticarUsuario.js";
import gerarJWT from "../utils/gerarJWT.js";

export default function registrarEventosLogin(socket, io){
    socket.on("autenticar_usuario", async ({ nome, senha }) => {
        const usuario = await encontrarUsuario(nome);

        if(usuario){
            const autenticado = autenticarUsuario(senha, usuario);
    
            if(autenticado){
                const tokenJWT = gerarJWT({ usuario: nome });
                socket.emit("usuario_autenticado", tokenJWT);
            } else {
                socket.emit("autenticacao_erro");
            }
        } else {
            socket.emit("usuario_nao_encontrado")
        }

    })

}