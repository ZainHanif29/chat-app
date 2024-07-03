import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log('Check token:', token);

        if (!token) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);
        if (!decode) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req._id = decode.userID;
        console.log('User ID:', req._id);
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export default auth;
