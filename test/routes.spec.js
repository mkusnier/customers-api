const datastore = require('../database/datastore')
const request = require('supertest');
const app = require('../app')

const singleCustomer = {id: "1", firstname: "first", lastname: "last"}

jest.mock('../database/datastore');

describe('Test the Customer paths', () => {
    beforeEach(() => {
        datastore.getCustomers = jest.fn().mockResolvedValue([singleCustomer]);
        datastore.getCustomer = jest.fn().mockResolvedValue(singleCustomer);
    })
    test('It should get status 200 from getCustomers', () => {
        return request(app).get('/getCustomers').expect(200);
    });
    test('It should get status 200 from getCustomer when customer exists', () => {
        return request(app).get('/getCustomer?id=1').expect(200);
    });
    test('It should get status 204 from getCustomer when customer does not exist', () => {
        datastore.getCustomer = jest.fn().mockReturnValue(Promise.resolve(undefined));
        return request(app).get('/getCustomer?id=1000').expect(204);
    });
    test('It should get status 400 from getCustomer when customer id is not provided', () => {
        return request(app).get('/getCustomer').expect(400);
    });
    test('It should get status 500 from getCustomer when error occured', () => {
        datastore.getCustomer = jest.fn().mockRejectedValue(new Error('Async error'));
        return request(app).get('/getCustomer?id=1').expect(500);
    });
    test('It should get status 500 from getCustomers when error occured', () => {
        datastore.getCustomers = jest.fn().mockRejectedValue(new Error('Async error'));
        return request(app).get('/getCustomers').expect(500);
    });
})