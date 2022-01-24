const Client = require('../../db/models/Client');
const axios = require('axios');

async function getClient(clientName) {
    if (!clientName) return [];

    const client = await Client.find({companyName: clientName});

    return client;
}

async function getExternalRate(url) {
    return await axios.get(url);
}

module.exports = {getClient, getExternalRate};