
const customers = [
    {
      "id": 0,
      "age": 32,
      "firstname": "Tamra",
      "lastname": "Davenport",
      "email": "tamradavenport@prismatic.com",
      "address": {
        "line1": "803 Aberdeen Street",
        "city": "Lookingglass",
        "state": "Alabama",
        "zip": 2235
      }
    },
    {
      "id": 1,
      "age": 20,
      "firstname": "Swanson",
      "lastname": "Sandoval",
      "email": "swansonsandoval@prismatic.com",
      "address": {
        "line1": "708 Bethel Loop",
        "city": "Callaghan",
        "state": "Puerto Rico",
        "zip": 8447
      }
    },
    {
      "id": 2,
      "age": 53,
      "firstname": "Lola",
      "lastname": "Page",
      "email": "lolapage@prismatic.com",
      "address": {
        "line1": "574 Sumner Place",
        "city": "Jenkinsville",
        "state": "Minnesota",
        "zip": 3282
      }
    },
    {
      "id": 3,
      "age": 60,
      "firstname": "Avila",
      "lastname": "Andrews",
      "email": "avilaandrews@prismatic.com",
      "address": {
        "line1": "653 Garland Court",
        "city": "Lopezo",
        "state": "North Carolina",
        "zip": 1907
      }
    },
    {
      "id": 4,
      "age": 44,
      "firstname": "Dionne",
      "lastname": "Strong",
      "email": "dionnestrong@prismatic.com",
      "address": {
        "line1": "347 Karweg Place",
        "city": "Franklin",
        "state": "New Jersey",
        "zip": 8193
      }
    },
    {
      "id": 5,
      "age": 36,
      "firstname": "Boyle",
      "lastname": "Orr",
      "email": "boyleorr@prismatic.com",
      "address": {
        "line1": "370 Clay Street",
        "city": "Canby",
        "state": "District Of Columbia",
        "zip": 7905
      }
    }
  ]

function getCustomers() {
    return customers
}

function getCustomer(id) {
    const customer = customers.find(customer => {return customer.id == id})
    return customer
}

module.exports = {getCustomer, getCustomers}