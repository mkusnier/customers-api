// Imports the Google Cloud client library
const {Datastore} = require('@google-cloud/datastore');
 
// Creates a client
const datastore = new Datastore();
 

const customers = [
    {
      "id": 1,
      "age": 26,
      "firstname": "Lilly",
      "lastname": "Castaneda",
      "email": "lillycastaneda@prismatic.com",
      "address": {
        "line1": "134 Sullivan Place",
        "city": "Springhill",
        "state": "California",
        "zip": 471
      }
    },
    {
      "id": 2,
      "age": 58,
      "firstname": "Doyle",
      "lastname": "Ewing",
      "email": "doyleewing@prismatic.com",
      "address": {
        "line1": "673 Madeline Court",
        "city": "Brambleton",
        "state": "Guam",
        "zip": 2263
      }
    },
    {
      "id": 3,
      "age": 23,
      "firstname": "Turner",
      "lastname": "Fulton",
      "email": "turnerfulton@prismatic.com",
      "address": {
        "line1": "975 Dennett Place",
        "city": "Warsaw",
        "state": "Alaska",
        "zip": 2528
      }
    },
    {
      "id": 4,
      "age": 39,
      "firstname": "Catherine",
      "lastname": "Woodward",
      "email": "catherinewoodward@prismatic.com",
      "address": {
        "line1": "616 Lott Place",
        "city": "Mapletown",
        "state": "Rhode Island",
        "zip": 5059
      }
    },
    {
      "id": 5,
      "age": 21,
      "firstname": "Hattie",
      "lastname": "Reyes",
      "email": "hattiereyes@prismatic.com",
      "address": {
        "line1": "970 Kathleen Court",
        "city": "Florence",
        "state": "Nevada",
        "zip": 722
      }
    },
    {
      "id": 6,
      "age": 48,
      "firstname": "Velazquez",
      "lastname": "Leblanc",
      "email": "velazquezleblanc@prismatic.com",
      "address": {
        "line1": "512 Java Street",
        "city": "Klagetoh",
        "state": "Massachusetts",
        "zip": 5026
      }
    },
    {
      "id": 7,
      "age": 55,
      "firstname": "Tammy",
      "lastname": "Schmidt",
      "email": "tammyschmidt@prismatic.com",
      "address": {
        "line1": "864 Suydam Street",
        "city": "Collins",
        "state": "Northern Mariana Islands",
        "zip": 8620
      }
    },
    {
      "id": 8,
      "age": 36,
      "firstname": "Harrison",
      "lastname": "Key",
      "email": "harrisonkey@prismatic.com",
      "address": {
        "line1": "554 Cypress Court",
        "city": "Jennings",
        "state": "Arizona",
        "zip": 2391
      }
    },
    {
      "id": 9,
      "age": 46,
      "firstname": "Helga",
      "lastname": "Booker",
      "email": "helgabooker@prismatic.com",
      "address": {
        "line1": "160 Laurel Avenue",
        "city": "Hiwasse",
        "state": "South Dakota",
        "zip": 2885
      }
    },
    {
      "id": 10,
      "age": 49,
      "firstname": "Britney",
      "lastname": "Page",
      "email": "britneypage@prismatic.com",
      "address": {
        "line1": "462 Strickland Avenue",
        "city": "Williston",
        "state": "District Of Columbia",
        "zip": 5576
      }
    },
    {
      "id": 11,
      "age": 20,
      "firstname": "Lopez",
      "lastname": "Perez",
      "email": "lopezperez@prismatic.com",
      "address": {
        "line1": "804 Wakeman Place",
        "city": "Manitou",
        "state": "Florida",
        "zip": 829
      }
    },
    {
      "id": 12,
      "age": 43,
      "firstname": "Anderson",
      "lastname": "Singleton",
      "email": "andersonsingleton@prismatic.com",
      "address": {
        "line1": "939 Albany Avenue",
        "city": "Mulino",
        "state": "North Carolina",
        "zip": 1140
      }
    },
    {
      "id": 13,
      "age": 40,
      "firstname": "Mitzi",
      "lastname": "Hanson",
      "email": "mitzihanson@prismatic.com",
      "address": {
        "line1": "288 Prescott Place",
        "city": "Charco",
        "state": "Virginia",
        "zip": 6712
      }
    },
    {
      "id": 14,
      "age": 59,
      "firstname": "Lori",
      "lastname": "Hodge",
      "email": "lorihodge@prismatic.com",
      "address": {
        "line1": "325 Kenmore Court",
        "city": "Durham",
        "state": "Michigan",
        "zip": 5536
      }
    },
    {
      "id": 15,
      "age": 40,
      "firstname": "Clay",
      "lastname": "Levine",
      "email": "claylevine@prismatic.com",
      "address": {
        "line1": "634 Dewey Place",
        "city": "Bancroft",
        "state": "Missouri",
        "zip": 9129
      }
    },
    {
      "id": 16,
      "age": 60,
      "firstname": "Leah",
      "lastname": "Roberson",
      "email": "leahroberson@prismatic.com",
      "address": {
        "line1": "432 Calyer Street",
        "city": "Nord",
        "state": "Utah",
        "zip": 8226
      }
    },
    {
      "id": 17,
      "age": 27,
      "firstname": "Molina",
      "lastname": "Avila",
      "email": "molinaavila@prismatic.com",
      "address": {
        "line1": "965 Metrotech Courtr",
        "city": "Day",
        "state": "New Mexico",
        "zip": 9198
      }
    },
    {
      "id": 18,
      "age": 49,
      "firstname": "Marguerite",
      "lastname": "Roman",
      "email": "margueriteroman@prismatic.com",
      "address": {
        "line1": "821 Pierrepont Street",
        "city": "Hayden",
        "state": "Wisconsin",
        "zip": 7606
      }
    },
    {
      "id": 19,
      "age": 37,
      "firstname": "Nikki",
      "lastname": "Cunningham",
      "email": "nikkicunningham@prismatic.com",
      "address": {
        "line1": "617 Beard Street",
        "city": "Ola",
        "state": "Oklahoma",
        "zip": 868
      }
    },
    {
      "id": 20,
      "age": 55,
      "firstname": "Reid",
      "lastname": "Wynn",
      "email": "reidwynn@prismatic.com",
      "address": {
        "line1": "198 Fountain Avenue",
        "city": "Mayfair",
        "state": "Colorado",
        "zip": 6641
      }
    },
    {
      "id": 21,
      "age": 20,
      "firstname": "Frederick",
      "lastname": "Richard",
      "email": "frederickrichard@prismatic.com",
      "address": {
        "line1": "534 Louis Place",
        "city": "Trucksville",
        "state": "New Jersey",
        "zip": 4761
      }
    },
    {
      "id": 22,
      "age": 22,
      "firstname": "Stone",
      "lastname": "Miller",
      "email": "stonemiller@prismatic.com",
      "address": {
        "line1": "291 Landis Court",
        "city": "Comptche",
        "state": "Iowa",
        "zip": 4715
      }
    },
    {
      "id": 23,
      "age": 35,
      "firstname": "Hollie",
      "lastname": "Fletcher",
      "email": "holliefletcher@prismatic.com",
      "address": {
        "line1": "389 Bliss Terrace",
        "city": "Glenbrook",
        "state": "New Hampshire",
        "zip": 6902
      }
    },
    {
      "id": 24,
      "age": 25,
      "firstname": "Noel",
      "lastname": "King",
      "email": "noelking@prismatic.com",
      "address": {
        "line1": "789 Roosevelt Place",
        "city": "Vaughn",
        "state": "Maine",
        "zip": 1094
      }
    },
    {
      "id": 25,
      "age": 56,
      "firstname": "Carmella",
      "lastname": "Torres",
      "email": "carmellatorres@prismatic.com",
      "address": {
        "line1": "418 Wolcott Street",
        "city": "Shaft",
        "state": "Virgin Islands",
        "zip": 6802
      }
    },
    {
      "id": 26,
      "age": 21,
      "firstname": "Marjorie",
      "lastname": "Ramsey",
      "email": "marjorieramsey@prismatic.com",
      "address": {
        "line1": "132 Bank Street",
        "city": "Roland",
        "state": "Minnesota",
        "zip": 2772
      }
    },
    {
      "id": 27,
      "age": 53,
      "firstname": "Dixon",
      "lastname": "Black",
      "email": "dixonblack@prismatic.com",
      "address": {
        "line1": "407 Harman Street",
        "city": "Gwynn",
        "state": "Texas",
        "zip": 8121
      }
    },
    {
      "id": 28,
      "age": 21,
      "firstname": "Dona",
      "lastname": "Fox",
      "email": "donafox@prismatic.com",
      "address": {
        "line1": "523 Conklin Avenue",
        "city": "Kraemer",
        "state": "Mississippi",
        "zip": 9690
      }
    },
    {
      "id": 29,
      "age": 60,
      "firstname": "Ann",
      "lastname": "Weber",
      "email": "annweber@prismatic.com",
      "address": {
        "line1": "860 Oxford Street",
        "city": "Elrama",
        "state": "Georgia",
        "zip": 3443
      }
    },
    {
      "id": 30,
      "age": 33,
      "firstname": "Cline",
      "lastname": "Hughes",
      "email": "clinehughes@prismatic.com",
      "address": {
        "line1": "159 Vanderveer Street",
        "city": "Matheny",
        "state": "Delaware",
        "zip": 5973
      }
    },
    {
      "id": 31,
      "age": 33,
      "firstname": "Gray",
      "lastname": "Snider",
      "email": "graysnider@prismatic.com",
      "address": {
        "line1": "886 Eldert Street",
        "city": "Columbus",
        "state": "Marshall Islands",
        "zip": 5569
      }
    },
    {
      "id": 32,
      "age": 49,
      "firstname": "Dora",
      "lastname": "Daniels",
      "email": "doradaniels@prismatic.com",
      "address": {
        "line1": "817 Erasmus Street",
        "city": "Keller",
        "state": "Federated States Of Micronesia",
        "zip": 1864
      }
    }
  ]

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