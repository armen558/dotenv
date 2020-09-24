const fs = require('fs');

const config = (path) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            return;
        }
        let env = {};
        data.toString().replace(/(\w+)=(.+)/g, (_, key, val) => { 
            process.env[key] = val;
            env[key] = val;
        })
        return env;
    })
}
module.exports.config = config;
