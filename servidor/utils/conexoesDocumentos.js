const conexoesDocumentos = []

function encontrarConexao(nomeDocumento, usuario){
    return conexoesDocumentos.find((conexao) => {
        return (conexao.nomeDocumento === nomeDocumento && conexao.usuario === usuario);
    });
}

function adicionarConexao(conexao){
    conexoesDocumentos.push(conexao);
}

function removerConexao(nomeDocumento, usuario){
    const index = conexoesDocumentos.findIndex((conexao) => {
        return (conexao.nomeDocumento === nomeDocumento && conexao.usuario === usuario);
    });

    if(index !== -1){
        conexoesDocumentos.splice(index, 1);
    }
    console.log(conexoesDocumentos);
}

function obterUsuariosDocumento(nomeDocumento){
    return conexoesDocumentos
        .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
        .map((conexao) => conexao.usuario);
}
export { adicionarConexao, obterUsuariosDocumento, removerConexao, encontrarConexao }