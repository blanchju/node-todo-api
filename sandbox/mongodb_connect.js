const MongoClient = require('mongodb').MongoClient;

// var user = {
//     "name": "Julien Blanchard",
//     "type": "admin",
// }

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to mongo server');
    } else {
        console.log('Connected to mongo server');

        // db.collection('users').insert(user, (err,callback) => {
        //     if (err) {
        //         console.log('Unable to insert in collection');
        //     } else {
        //         console.log('Inserted ', user)
        //     }
        // });

        db.collection('users').find({type: "viewer"}).toArray().then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }), (err) => {
            console.log('Error fetching data');
        };

        db.close(undefined,(err,callback) => {
            if (err) {
                console.log('Unable to disconnect from mongo server');
            } else {
                console.log('Disconnected from server');
            }
        });        
    }
});

