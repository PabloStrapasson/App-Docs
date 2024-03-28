import { scryptSync, timingSafeEqual } from 'crypto';

export default function autenticarUsuario(senhaDigitada, usuario){
    const hashTest = scryptSync(senhaDigitada, usuario.salSenha, 64);
    const hashUsuario = Buffer.from(usuario.hashSenha, "hex");

    const autenticado = timingSafeEqual(hashTest, hashUsuario);
    return autenticado;
}