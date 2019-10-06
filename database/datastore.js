// Imports the Google Cloud client library
const {Datastore} = require('@google-cloud/datastore');
 
// Creates a client
const datastore = new Datastore();
 
async function getCustomers() {
 
    const query = datastore.createQuery('Customer');
    const [customers] = await datastore.runQuery(query);
    return customers
}
