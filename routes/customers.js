var express = require('express');
var router = express.Router();
const datastore = require('../database/mockDatastore');

router.get('/getCustomers', function(req, res, next) {

  try{
    let customers = datastore.getCustomers();
    customers = customers.map(({id, firstname, lastname}) => ({id, firstname, lastname}))
    res.json(customers);
  } catch(err) {
    res.status(500).json({msg: 'An error occured while retrieving customers'})
  }
  
});

router.get('/getCustomer?:id', function(req, res, next) {
  const custId = req.query.id;
  if(custId == undefined || custId == '') {
    res.status(400).json({msg: 'Customer ID can\'t be empty'})
    return;
  }
  try {
    const customer = datastore.getCustomer(req.query.id)
    res.json(customer);
  } catch(err) {
    res.status(500).json({msg: 'An error occured while retrieving customer'})
  }
  
});

module.exports = router;
 