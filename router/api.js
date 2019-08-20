const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../model/user')
const db = "mongodb://localhost:27017/eventsdb";

mongoose.connect(db, err=>{
    if(err){
        console.error('Error! ' + err)
    }else {
        console.log('Connected to monGO!')
    }
})

router.get('/', (req, res)=>{
    res.send('From API rout')
})
router.post('/register', (req, res)=>{

    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser)=>{
        if (error){
            console.log(error)
        } else{
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login', (req, res)=>{
    let userData = req.body
    User.findOne({user: userData.user}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                console.log(user)
                res.status(401).send('Uncorect username')
            } else {
                if (user.psw !== userData.psw) {
                    res.status(401).send("Uncorest password")
                } else {
                    res.status(200).send(user)
                }
            }
        }
    })
})


module.exports = router