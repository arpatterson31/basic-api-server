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

function getAllDogs(req, res) {
  const getAllTheDogs = dog.read();
  res.status(200).json(getAllTheDogs);
}

function getOneDog(req, res) {
  const id = +req.params.id;
  const theDog = dog.read(id);
  res.status(200).json(theDog);
}

function createDog(req, res) {
  const data = req.body;
  const createdDog = dog.create(data);
  res.status(201).json(createdDog);
}

function updateDog(req, res) {
  const id = +req.params.id;
  const data = req.body;
  const updatedDog = dog.update(id, data);
  res.status(200).json(updatedDog);
}

function deleteDog(req, res) {
  const id = +req.params.id;
  const deletedDog = dog.delete(id);
  res.status(200).json(deletedDog);
}

module.exports = dogRouter;