const express = require('express');

const app = express();

//Real data will come from database, initial hardcoded data
app.get('/api/businesses', (req, res) => {
    const businesses = [
        {id:1, name: 'Starbucks', location: '123 Main st'},
        {id:2, name: 'McDonalds', location: '123 Main st'},
        {id:3, name: 'Subway', location: '123 Main st'}
    ]

    res.json(businesses)
})

const port = 5000;

app.listen(port, () => console.log(`server started on ${port}`))