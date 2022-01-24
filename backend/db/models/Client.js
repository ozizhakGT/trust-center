const { Schema, model } = require('mongoose');

const serializePropScheme = () => ({
    name: 'string',
    isValid: 'boolean',
    api: 'string',
    children: []
});

const PropsScheme = new Schema(serializePropScheme());

const ClientScheme = new Schema({
    companyName: 'string',
    properties: [PropsScheme]
});

ClientScheme.set('toObject', { virtuals: true });

module.exports = model('Client', ClientScheme, 'clients');
