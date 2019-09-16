const express = require("express");
const Router = express.Router();
const AppController = require("./controller");

Router.post('/', AppController.index);
Router.post('/send', AppController.send);
Router.post('/confirm/:id', AppController.confirm);
Router.post('/decline/:id', AppController.decline);
Router.post('/deliver/:id', AppController.deliver);
Router.get('/offers', AppController.offers);

module.exports = Router;