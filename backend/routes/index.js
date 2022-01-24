const express = require('express');
const clients = require('./clients');

module.exports = function (app) {
    app.use(express.json());

    app.use('/clients', clients)
}