const mongoose = require('mongoose')

const connectionString = process.env.MONGO_DB_URI


// conect to mongodb

mongoose.connect(connectionString)
    .then(() => {
        console.log('Database Conected')
    }).catch(err =>{
        console.error(err)
    })



