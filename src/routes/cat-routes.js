'use strict';

const express = require('express');

const Cat = require('../models/cat.js');
const cat = new Cat();

catRouter.get('/cat', getAllCats);
catRouter.get('/cat/:id', getOneCat);
catRouter.post('/cat', createCat);
catRouter.put('/cat/:id', updateCat);
catRouter.delete('/cat/:id', deleteCat);

const catRouter = express.Router();

module.exports = catRouter;