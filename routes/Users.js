const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const Rec = require('../models/Rec')
users.use(cors())
process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })


  
})

users.post('/add_items', (req, res) => {
  const today = new Date()
  console.log(req.body)
  
  const uD = Rec.create( {
    name: req.body.name,
    publisher: req.body.publisher,
    description: req.body.description,
    img: req.body.img,
    publisher_id:req.body.publisher_id
    // created: today
  })
  .then(function(uD){
    return uD;
  })
  .catch(error=>{
    console.log(error)
    return error;
  })
  // return res
  res.status(200).json({
    success:true,
    message:"item added",
    data:uD
  })

})

users.put('/edit/', (req, res) => {
  const today = new Date()
  console.log(req.body)   
  const uP = {

    id:req.body.id,
    name: req.body.name,
    publisher: req.body.publisher,
    description: req.body.description,
    img: req.body.img,
  }
  
Rec.update(req.body, {
    where: { id: req.body.id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "item updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update item with id=${id}. Maybe item was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating item  with id=" + id
      });
    });
})


//login req
users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

//data fetching using get request
users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users
