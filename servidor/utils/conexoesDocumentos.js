let conexoesDocumentos = []

function adicionarConexao(conexao){
    conexoesDocumentos.push(conexao);
}

function obterUsuariosDocumento(nomeDocumento){
    return conexoesDocumentos
        .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
        .map((conexao) => conexao.usuario);
}
export { adicionarConexao, obterUsuariosDocumento }