const clientsSeeds = require('../seeds/clients');
const ClientModel = require('../models/Client');

const databases = [
    { name: 'clients', seeds: clientsSeeds, model: ClientModel }
]

async function insertMigrations(connection) {
    try {
        for await (let database of databases) {
            const isDrop = await connection.collections[database.name].drop();

            if (isDrop) {
                for await (let seed of database.seeds) {
                    const dataset = new database.model(seed)
                    await  dataset.save();
                }
            }
        }
    } catch (err) {
        throw new Error('migrations failed', err);
    }
}

module.exports = insertMigrations;