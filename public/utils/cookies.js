function definirCookie(chave, token){
    document.cookie = `${chave}=${token};path=/`
}

function obterCookie(chave){
    return document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith(`${chave}=`))
        ?.split("=")[1]
}

function removerCookie(chave){
    document.cookie = `${chave}=; expire=Thu, 01 Jan 1970 00:00:00`;
}

export { definirCookie, obterCookie, removerCookie }