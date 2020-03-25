const express = require('express');
const OngController = require('../src/controller/OngController');
const IncidentController = require('../src/controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.login)

routes.get('/profile', ProfileController.findOngById);

routes.get('/ongs', OngController.find)
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.find);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;