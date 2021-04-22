'use strict';

const express = require('express');

const Cat = require('../models/cat.js');
const cat = new Cat();

const catRouter = express.Router();

catRouter.get('/cat', getAllCats);
catRouter.get('/cat/:id', getOneCat);
catRouter.post('/cat', createCat);
catRouter.put('/cat/:id', updateCat);
catRouter.delete('/cat/:id', deleteCat);

function getAllCats(req, res) {
  const getAllTheCats = cat.read();
  res.status(200).json(getAllTheCats);
}

function getOneCat(req, res) {
  const id = +req.params.id;
  const theCat = cat.read(id);
  res.status(200).json(theCat);
}

function createCat(req, res) {
  const data = req.body;
  const createdCat = cat.create(data);
  res.status(201).json(createdCat);
}

function updateCat(req, res) {
  const id = +req.params.id;
  const data = req.body;
  const updatedCat = cat.update(id, data);
  res.status(200).json(updatedCat);
}

function deleteCat(req, res) {
  const id = +req.params.id;
  const deletedCat = cat.delete(id);
  res.status(200).json(deletedCat);
}

module.exports = catRouter;