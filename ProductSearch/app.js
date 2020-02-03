const express = require('express');
const ebay = require('./ebayCalls');
const google = require('./googleCalls');
const geonames = require('./geonamesCalls')
let path = require('path');


const app = express();
// const port = process.env.port || 8081;
const port = 3001

// Serving the static frontend 
app.use(express.static(path.join(__dirname, '/Client')))
                                            /*REST API */
// Getting list of items
app.get('/getItems', (req,res)=>{
    ebay.getItems(req.query, (response)=>{
        res.json(response);
    });
})

// Getting an item
app.get('/getItem', (req,res)=>{

    ebay.getItem(req.query, (response)=>{
        res.json(response);
    }) 
})

// Getting similar Items
app.get('/getSimilarItems', (req, res)=>{

    ebay.getSimilarItems(req.query, (response)=>{
        res.json(response);
    });
});

// Getting Googles Images
app.get('/getImages', (req,res)=>{

    google.getImages(req.query.title, (response)=>{
        res.json(response);
    });
});


app.get('/getZipcodes', (req, res)=>{
    geonames.getZipcodes(req.query.startsWith, (response)=>{
        res.json(response);
    })
});



// Getting zip codes

// Posting to Facebook

app.listen(port, ()=>{
    console.log(`listening on port ${port} `)
});



