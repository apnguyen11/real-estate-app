const express = require('express');

const app = express();
// const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://apnguyen11:' + process.env.MONGO_ATLAS_PW + '@real-estate-db-n3a77.mongodb.net/test?retryWrites=true&w=majority', {
//     useMongoClient: true
// })
//Real data will come from database, initial hardcoded data
app.use('/posts', () => {
    console.log('This is middleware running')
})

app.get('/api/businesses', (req, res) => {
    const businesses = [
        {id:1, name: 'Starbucks', location: '123 Main st'},
        {id:2, name: 'McDonalds', location: '123 Main st'},
        {id:3, name: 'Subway', location: '123 Main st'}
    ]

    res.json(businesses)
})

app.get('/', (req, res) => {
    res.send('WE are on home page')
})

app.get('/posts', (req, res) => {
    res.send('we are on posts')
})


const port = 5000;

app.listen(port, () => console.log(`server started on ${port}`))