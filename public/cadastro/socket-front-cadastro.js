const socket = io();

function emitirCadastroUsuario(dados){
    socket.emit("cadastrar_usuario", dados);
}

socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso!"));
socket.on("cadastro_erro", () => alert("Erro no cadastro"));
socket.on("usuario_existente", () => alert("Esse usuário já existe"));

export { emitirCadastroUsuario }