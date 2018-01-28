const request = require('supertest');
const app = require('./fixtures/loopback-app');

const chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should();



describe('E2E: Tests', () => {

  it('should be able to hit loopback api', function () {
    return request(app)
      .get('/')
      .expect(200);
  });
})