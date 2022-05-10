const express = require('express')
const router = express.Router()



// Add your routes here - above the module.exports line

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)


// V6-0 - in folder routing
router.use('/V6-0', require('./views/V6-0/_routes'));

// V7-0 - in folder routing
router.use('/V7-0', require('./views/V7-0/_routes'));


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['how-many-balls']

  // Check whether the variable matches a condition
  if (howManyBalls == "3 or more"){
    // Send user to next page
    res.redirect('/./juggling-trick')
  } else {
    // Send user to ineligible page
    res.redirect('/./ineligible')
  }

  })

  // BRP-BRC comms entry points
  router.post('/entry-point-answer', function (req, res) {

    var immigrationstatus = req.session.data['immigration-status']

    if (immigrationstatus == "I have a biometric residence card or permit"){

      res.redirect('BRP-BRC-comms/brp-number')
    }

    if (immigrationstatus == "I have a UK Visas and Immigration account"){

      res.redirect('BRP-BRC-comms/ukvi-why')
    }

    if (immigrationstatus == "I have status under the EU Settlement Scheme"){

      res.redirect('BRP-BRC-comms/euss-why')
    }

})




// add todays date
router.get('*', function (req, res, next) {
  res.locals.date = () => {
    const date = Date.now()
    const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    return `${day} ${month} ${year}`;
  }
  next()
})
module.exports = router
