const {Datastore} = require('@google-cloud/datastore');

const singlecustomer = {id: "1"}
const mockCreateQuery = jest.fn();
const mockGet = jest.fn().mockResolvedValue([singlecustomer]);
const mockRunQuery = jest.fn().mockResolvedValue([[singlecustomer]]);

jest.mock('@google-cloud/datastore', () => {
    return {
        Datastore: jest.fn().mockImplementation(() => {
            return {
                createQuery: mockCreateQuery,
                runQuery: mockRunQuery,
                get: mockGet
            }
        })
    }
})

let datastore = require('../database/datastore')

describe('Datastore tests', () => {
    beforeEach(() => {
        mockCreateQuery.mockClear();
        mockRunQuery.mockClear();
        mockGet.mockClear();
      });

    test('It should get the customers from datastore', async () => {
        expect(Datastore).toHaveBeenCalledTimes(1);
        const customers = await datastore.getCustomers();
        expect(mockCreateQuery).toHaveBeenCalledWith('Customer');
        expect(mockRunQuery).toHaveBeenCalledTimes(1);
        expect(customers).toHaveLength(1);
        expect(customers[0]).toBe(singlecustomer);
    })

    test('It should get the customer from datastore', async () => {
        const id = 1;
        expect(Datastore).toHaveBeenCalledTimes(1);
        const customer = await datastore.getCustomer(id);
        expect(mockCreateQuery).toHaveBeenCalledTimes(0);
        expect(mockRunQuery).toHaveBeenCalledTimes(0);
        expect(mockGet).toHaveBeenCalledWith({kind: 'Customer', id: id});
        expect(customer).toBe(singlecustomer);
    })
})