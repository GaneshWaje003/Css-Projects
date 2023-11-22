const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express();
const port = 1000;
const mongoose = require('mongoose');


// Connecting the Mongoose 
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo');
    console.log("Dd-started");
}

// craeting a schema
const newSchema = new mongoose.Schema({
    firstname: String,
    middle: String,
    last: String,
    email: String,
    username: String,
    password: String,
});

const MainUserCredidentials = new mongoose.Schema({
    username: String,
    password: String,
});



// creating model for schema newSchema
const model1 = mongoose.model("model1", newSchema);
const mainInfoModel = mongoose.model("mainInfoModel", MainUserCredidentials);


// Enabling the corse in server
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
}
app.use(cors(corsOptions));


// Body parser for reading the content of the body
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());

// Dedicated path and there response for respected path's
app.get('/', (req, res) => {
    res.send("This is Home Page ");
})

app.get('/login', (req, res) => {

})

app.post('/login', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("Data Recieved");
})


// Getting actions when post method on stated path has been made

app.post('/send-data', async (req, res) => {

    let user = new model1();
    let userInfo = new mainInfoModel();

    user.firstname = req.body.F;
    user.middle = req.body.M;
    user.last = req.body.L;
    user.email = req.body.E;
    user.username = req.body.U;
    user.password = req.body.P2;


    userInfo.username = req.body.U;
    userInfo.password = req.body.P2;


    const doc1 = await user.save();
    const doc2 = await userInfo.save();

    // const data = req.body;
    // res.json(data);
    console.log(doc1);
    console.log(doc2);
});


app.post('/login-with-this-data', async (req, res) => {

    const searchData = {
        username: req.body.LU,
        password: req.body.LP,
    };

    console.log(searchData);

    const user = await mainInfoModel.findOne(searchData);

    if(user){
        console.log("User Found : ",user);
        res.send()
        res.status(200).send("Data Found");
    }else{
        console.log('user Not Found : ');
    }

})      

app.post('/delete-user',async (req,res)=>{
    const data = req.body;
    res.send(data);
})

// res.status(200).send("proceeding for user deletion",data);
// res.send("send").status(200);

// Functions for starting of server on perticulr port with a callback function
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

