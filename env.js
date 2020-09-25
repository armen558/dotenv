const dotenv = require('./dotenv');

dotenv.config('./.env');
console.log(process.env.test)
