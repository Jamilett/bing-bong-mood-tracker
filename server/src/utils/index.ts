import jwt from 'jsonwebtoken'
import  dotenv from 'dotenv'
dotenv.config()

const SECRET_KEY=process.env.SECRET_KEY||'secret'     
const TOKEN_EXPIRATION=process.env.TOKEN_EXPIRATION||'2h'

function signToken(user: any) {
const secret = SECRET_KEY;
const payload = {
    _id: user._id,
    username: user.email,
    email: user.email
};

return jwt.sign({ data: payload }, secret, { expiresIn: "2h" });
}
function verifyToken(token: string) {
return jwt.verify(token, SECRET_KEY);}
export {signToken, verifyToken}