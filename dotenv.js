const fs = require('fs');

const config = (path) => {
    let data = fs.readFileSync(path).toString();
        let env = {};
        data.replace(/(\w+)=(.+)/g, (_, key, val) => {
            process.env[key] = val;
            env[key] = val;
        });
        return env;
};
module.exports.config = config;
