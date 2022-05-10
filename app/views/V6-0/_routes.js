const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Radio button redirect
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Routing after research setup pages
router.post("/research-setup-2-router", function (req, res) {
  // If scenario 1 & skilled worker
  if (req.session.data['scenario-v6'] == "sc-1" & req.session.data['visa-type'] == "Skilled Worker") {
    res.redirect('gov-uk/skilled-worker')
  }
  // If scenario 1 & student
  else if (req.session.data['scenario-v6'] == "sc-1") {
    res.redirect('gov-uk/student')
  }
  // If scenario 2 or 3
  else {
    res.redirect('eua/ask-document')
  }
});



module.exports = router
