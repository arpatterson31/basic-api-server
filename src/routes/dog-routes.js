'use strict';

const express = require('express');

const Dog = require('../models/dog.js');
const dog = new Dog();

const dogRouter = express.Router();

dogRouter.get('/dog', getAllDogs);
dogRouter.get('/dog/:id', getOneDog);
dogRouter.post('/dog', createDog);
dogRouter.put('/dog/:id', updateDog);
dogRouter.delete('/dog/:id', deleteDog);

module.exports = dogRouter;