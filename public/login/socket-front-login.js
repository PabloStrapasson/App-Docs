import { definirCookie } from "../utils/cookies.js";

const socket = io();

function emitirAutenticarUsuario(dados){
    socket.emit("autenticar_usuario", dados);
}

socket.on("usuario_autenticado", (tokenJWT) => {
    definirCookie("tokenJWT", tokenJWT);
    alert("Usuário auteticado com sucesso");
    window.location.href = "/";
});
socket.on("autenticacao_erro", () => alert("Falha na autenticação"));
socket.on("usuario_nao_encontrado", () => alert("Usuário não encontrado"));

export { emitirAutenticarUsuario }