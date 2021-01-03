const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jiwooJeon:abcd1234@boilerplate.aabag.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/',(req,res) => res.send('안뇽!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
