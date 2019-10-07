// Imports the Google Cloud client library
const {Datastore} = require('@google-cloud/datastore');
 
// Creates a client
const datastore = new Datastore();
 

const customers = require('./mockData')

customers.forEach(customer => {
    const customerKey = datastore.key('Customer');
    let dt = []
    Object.keys(customer).forEach(k => {
        dt.push({name: k, value: customer[k]})
    })
    const entity = {
      key: {kind: 'Customer', id: customer.id},
      data: dt,
    };
    saveEntity(entity)
})
  
async function saveEntity(entity) {
    await datastore.upsert(entity);
    console.log(`Customer with id ${entity.key.id} created successfully.`);
}