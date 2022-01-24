const router = require('express').Router();
const logic = require('./logic');
const errorsHandler = require('../../handlers/errors');
const { CLIENT: { NOT_FOUND, BAD_REQUEST } } = require('../../enums/errors');
const axios = require('axios');
const {log} = require("nodemon/lib/utils");

router.get('/:clientName', async (req, res) => {
  try {
      const { clientName } = req.params;
      const client = await logic.getClient(clientName);

      if (!client || !client.length) throw errorsHandler(NOT_FOUND.CODE, NOT_FOUND.MESSAGE);

      res.send(client);
  }  catch (err) {
      const { code, textMessage } = err;
      res.status(code).send(textMessage);
  }
});

router.post('/externalCheck', async (req, res) => {
   try {
       const { apiURL } = req.body;

       if(!apiURL) throw errorsHandler(BAD_REQUEST.CODE, BAD_REQUEST.MESSAGE);

       const apiResponse = await logic.getExternalRate(apiURL);

       res.send(apiResponse.data);
   } catch (err) {
       const { code, textMessage } = err;
       res.status(code).send(textMessage);
   }
});

module.exports = router;