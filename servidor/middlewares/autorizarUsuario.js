import jwt from "jsonwebtoken";

export default function autorizarUsuario(socket, next){
    const tokenJWT = socket.handshake.auth.token;
    
    try {
        jwt.verify(tokenJWT, process.env.JWT_SECRET);
        next();
    } catch(erro) {
        next(erro);
    }
}