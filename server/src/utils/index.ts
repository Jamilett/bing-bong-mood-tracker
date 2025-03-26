import jwt from 'jsonwebtoken'
import  dotenv from 'dotenv'
dotenv.config()

export const authenticateToken = ({ req }: any) => {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
    }

    if (!token) {
        return req;
    }

    try {
        const { data }: any = jwt.verify(token, process.env.JWT_SECRET_KEY || 'secret', { maxAge: '2hr' });
        req.user = data;
    } catch (err) {
        console.log('Invalid token');
    }

    return req;
};


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
export { signToken, verifyToken}