const express = require('express');
const mogoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 4600;

const app = express();
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(cors());

const schema = new mogoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    img_url: { type: String, required: true } ,
    price : { type: String, required: true},
    category: { type: String, required: true}
})

const booksData = mogoose.model('book', schema)

const cartschema = new mogoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    img_url: { type: String, required: true } ,
    price : { type: String, required: true},
    category: { type: String, required: true}
})

const cartData = mogoose.model('cartItems', cartschema)

const uschema = new mogoose.Schema({
    Name: { type: String, required: true },
    fatherName: { type: String, required: true },
    email: { type: String, required: true },
    mobNo: { type: String, required: true },
    image: { type: String, required: true },

    gender: { type: String, required: true },
    isaccept: { type: String, required: true}
  
})

const userData = mogoose.model('user', uschema)
const url = 'mongodb+srv://dattatreyagundeti:mybookstore@cluster0.6ctjtmj.mongodb.net/?retryWrites=true&w=majority'

mogoose.connect(url)
.then (()=>{ console.log("Connect")
    app.get('/book', function(req, res){

        booksData.find().then(user => {res.json(user)})
    })

     app.post('/addBook', function(req, res){
         const {title,
                author,
                img_url,price,category} = req.body
            console.log(req.body);
         const newuser = new booksData({
            title,
            author,
            img_url,
            category,
            price

         })
         newuser.save().then((resp) => {
         if(resp){
            res.status(201).json({message:"success"})
         }
         });
     })

     app.put('/updatebook/:id',(req,res)=>{
        const {id}=req.params;
        const updateUser = req.body
        booksData.findOneAndUpdate({_id : id}, updateUser, { new: true })
        .then((updating)=>{
            if(updating){
                res.send("updtae succesfully")
            }else{
                res.status(404).send('user not found')
            }
        })
        .catch((err)=>{
            res.status(400).send('error updating user')
        })   


     })
     app.delete('/deletingBook/:id',(req,res)=>{
        const {id}=req.params;
        booksData.findOneAndDelete({_id : id})
        .then((deleting)=>{
            if(deleting){
                res.status(200).send('{message}: deleted')
            }else{
                res.status(404).send('user not found')
            }
        })
        .catch((err)=>{
            res.status(400).send('error deleting user')
        })   
     })


     app.get('/user', function(req, res){

        userData.find().then(user => {res.json(user)})
    })

     app.post('/addUser', function(req, res){
         const {          Name,
            fatherName,
            mobNo,
            email,
            image,
            gender,
            isaccept} = req.body
            console.log(req.body);
         const newuser = new userData({
            Name,
            fatherName,
            mobNo,
            email,
            image,  
            gender,
            isaccept

         })
         newuser.save().then((resp) => {
         if(resp){
            res.status(201).json({message:"success"})
         }
         });
     })
     app.put('/update/:id',(req,res)=>{
        const {id}=req.params;
        const updateUser = req.body
        userData.findOneAndUpdate({_id : id}, updateUser, { new: true })
        .then((updating)=>{
            if(updating){
                res.send("updtae succesfully")
            }else{
                res.status(404).send('user not found')
            }
        })
        .catch((err)=>{
            res.status(400).send('error updating user')
        })   


     })
     app.delete('/deleting/:id',(req,res)=>{
        const {id}=req.params;
        userData.findOneAndDelete({_id : id})
        .then((deleting)=>{
            if(deleting){
                res.send("delete succesfully")
            }else{
                res.status(404).send('user not found')
            }
        })
        .catch((err)=>{
            res.status(400).send('error deleting user')
        })   
     })




     app.get('/cart', function(req, res){

        cartData.find().then(user => {res.json(user)})
    })

     app.post('/addcartItem', function(req, res){
         const {title,
                author,
                img_url,price,category} = req.body
            console.log(req.body);
         const newuser = new cartData({
            title,
            author,
            img_url,
            category,
            price

         })
         newuser.save().then((resp) => {
         if(resp){
            res.status(201).json({message:"success"})
         }
         });
     })


     app.delete('/deletecartItem/:id',(req,res)=>{
        const {id}=req.params;
        cartData.findOneAndDelete({_id : id})
        .then((deleting)=>{
            if(deleting){
                res.status(200).send('{message}: deleted')
            }else{
                res.status(404).send('user not found')
            }
        })
        .catch((err)=>{
            res.status(400).send('error deleting user')
        })   
     })



    app.listen(port, function(){
        console.log("server listening on port " + port);
});

})
.catch (err => console.log(err))

