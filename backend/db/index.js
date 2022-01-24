const mongoose = require('mongoose');
const migrations = require('./migrations');
const MONGO_URI = require('../config').get('db:uri');

module.exports = async function () {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true })
            .then(async (res) => {
                console.log(`db connected successfully`);
                await migrations(mongoose.connection);
            })
    } catch (err) {
        console.log(err);
        throw new Error(`db no connected: ${err}`);
        process.exit(1);
    }
}