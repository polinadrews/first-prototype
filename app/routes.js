const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
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
module.exports = router
