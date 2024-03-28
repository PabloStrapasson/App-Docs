import jwt from "jsonwebtoken";

export default function gerarJWT(payload){
    const tokenJWT = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

    return tokenJWT;
}