const nconf = require('nconf');
require('dotenv').config();

class Config {
    constructor() {
        nconf.argv().env('_');
        const environment = this.getEnv();
        nconf.file(environment, 'config/' + environment + '.json');
        nconf.file('default', 'config/default.json');
    }

    get(key) {
        return nconf.get(key);
    }

    getNumber(key) {
        const value = nconf.get(key);

        return Number(value);
    }

    getBoolean(key) {
        return this.convertBoolean(nconf.get(key));
    }

    convertBoolean(value) {
        if (typeof(value) === 'string' && (value === 'false' || value === '0')) {
            return false;
        }

        return !!value;
    }

    getEnv() {
        return nconf.get('NODE:ENV') || 'default';
    }

}

module.exports = new Config();
