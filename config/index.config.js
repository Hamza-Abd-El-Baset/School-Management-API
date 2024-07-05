
require('dotenv').config()

const ENV                              = process.env.ENV || "development";
const config                           = require(`./envs/${ENV}.js`);

const pjson                            = require('../package.json');
const SERVICE_NAME                     = (process.env.SERVICE_NAME)? utils.slugify(process.env.SERVICE_NAME):pjson.name;

const PORT                             = process.env.PORT || 3000;

const MONGO_URI                        = process.env.MONGO_URI || `mongodb://localhost:27017/${SERVICE_NAME}`;

const JWT_SECRET                       = process.env.JWT_SECRET || null;

if(!JWT_SECRET) {
    throw Error('missing .env variables check index.config');
}

config.dotEnv = {
    ENV,
    SERVICE_NAME,
    PORT,
    MONGO_URI,
    JWT_SECRET,
};



module.exports = config;
