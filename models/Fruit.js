const {Schema, model} = require('mongoose')

const fruitSchema = new Schema({
    name: String,
    content: String,
    price: String,
    color: String,
    availible: Boolean,
    date: Date,
    img: String,
    like: Boolean
})

fruitSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Fruit = model('Fruit', fruitSchema)

// const fruit = new Fruit({
//     name: 'Banana',
//     content: 'A big large banana, only how do you like it',
//     price: '$2.5 /kg',
//     color: 'Yellow',
//     availible: true,
//     date: new Date(),
//     img: 'large-banana.jpg',
//     like: false
// })

// fruit.save()
//     .then(result => {
//         console.log(result)
//         mongoose.connection.close()
//     })
//     .catch(err => {
//         console.error(err)
//     })

module.exports = Fruit
