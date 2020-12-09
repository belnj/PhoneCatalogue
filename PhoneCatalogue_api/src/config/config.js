require('dotenv').config()

const env = process.env.NODE_ENV || 'development';

const PORT = process.env.PORT || 4000;

const URL = env.isDev ? `http://localhost:${PORT}` : `some production url`;

const MONGODB_URI = process.env.MONGODB_URI;

const CLIENT_URL = env.isDev ? `http://localhost:3000` : `some production url`

module.exports = {
    PORT, URL, MONGODB_URI , CLIENT_URL
}