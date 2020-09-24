const dotenv = require('./dotenv');

dotenv.config('./.env');
setTimeout(() => {
    console.log(process.env.test)
}, 1000)