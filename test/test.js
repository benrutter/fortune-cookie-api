const app = require('../server.js');
const expect = require('chai').expect;
const request = require('supertest');

const getResponse = () => {
  return request(app)
    .get('/api/');
}

describe('GET path', () => {

  it('Should return something', () => {
    return request(app)
        .get('/api/')
        .then( response => {
          expect(response).to.exist;
        });
  });

  it('Text of response should be non-blank string', () => {
    return request(app)
        .get('/api/')
        .then( response => {
          expect(response.text).not.equal('');
          expect(response.text).to.be.a('string');
        });
  });

  it('Status code should be 200', () => {
    return request(app)
        .get('/api/')
        .then( response => {
          expect(response.text).not.equal('');
          expect(response.text).to.be.a('string');
        });
  });

  it('Should return different text each time', async () => {
    const first = await getResponse();
    const second = await getResponse();
    const third = await getResponse();
    expect((first.text === second.text) && (first.text === third.text)).to.be.false;
  });

});


