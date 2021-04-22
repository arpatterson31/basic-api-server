'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('SERVER TESTS:', () => {

  it('404 on a bad route', async () => {
    const response = await mockRequest.get('/no-route');
    expect(response.status).toEqual(404);
  });

  it('404 on a bad method', async () => {
    const response = await mockRequest.put('/cat');
    expect(response.status).toEqual(404);
  });

  it('Should Create a record using POST: /cat', async () => {
    const response = await mockRequest.post('/cat').send({ name: 'cat name', type: 'cat type' });
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual('cat name');
    expect(response.body.record.type).toEqual('cat type');
  });

  it('Should Create a record using POST: /dog', async () => {
    const response = await mockRequest.post('/dog').send({ name: 'dog name', type: 'dog type' });
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual('dog name');
    expect(response.body.record.type).toEqual('dog type');
  });

  it('Should Read a list of records using GET: /cat', async () => {
    const response = await mockRequest.get('/cat');
    expect(response.status).toBe(200);
  });

  it('Should Read a list of records using GET: /dog', async () => {
    const response = await mockRequest.get('/dog');
    expect(response.status).toBe(200);
  });

  it('Read a record using GET: /cat', async () => {
    const response = await mockRequest.get('/cat/1');

    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body.id).toEqual(1);
  });

  it('Read a record using GET: /dog', async () => {
    const response = await mockRequest.get('/dog/1');

    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body.id).toEqual(1);
  });

  it('Should update a record using PUT: /cat', async () => {
    const response = await mockRequest.put('/cat/1').send({ name: 'new cat name', type: 'new cat type' });
    expect(response.status).toBe(200);
    expect(response.body.record.name).toEqual('new cat name');
    expect(response.body.record.type).toEqual('new cat type');
  });

  it('Should update a record using PUT: /dog', async () => {
    const response = await mockRequest.put('/dog/1').send({ name: 'new dog name', type: 'new dog type' });
    expect(response.status).toBe(200);
    expect(response.body.record.name).toEqual('new dog name');
    expect(response.body.record.type).toEqual('new dog type');
  });

  it('Should Destroy a record using DELETE: /cat', async () => {
    const response = await mockRequest.delete('/cat/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeNull();
  });

  it('Should Destroy a record using DELETE: /dog', async () => {
    const response = await mockRequest.delete('/dog/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeNull();
  });

});