// const { response } = require('express')
const express = require('express')

const router = express.Router()
const signUpTemplateCopy = require('../models/SignupModels')

router.post('/signup', (request,response) => {
    // response.send('send')
    const signUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    signUpUser.save()
    .then(data => {
        response,jason(data)
    })
    .catch(error => {
        response.json(error)
    })

})

// router.get('/ratecard')

module.exports = router