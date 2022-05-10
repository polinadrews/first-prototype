const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Radio button redirect
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Applying for settled status - in or out uk

router.post("/apply-settled/where-router", function (req, res) {

  var areYouInTheUK = req.session.data['are-you-in-the-uk']
  if (areYouInTheUK == "yes") {
    res.redirect('prove-id-how')
  }
  else {
    res.redirect('not-in-prototype')
  }
})


// Share options
router.post('/status/share-options-router', function (req, res) {

  var select = req.session.data['reason']

  if (select == 'prove') {
    res.redirect('vp/vp-checker-preview');
  }
  else if (select == 'work') {
    res.redirect('rtw/rtw-checker-preview');
  }
  else {
    res.redirect('not-in-prototype');
  }
})

// what document
router.post('/apply-settled/what-doc-router', function (req, res) {

  var idType = req.session.data['id-how']

  if (idType == 'app') {
    res.redirect('prove-id-app');
  }
  else {
    res.redirect('prove-id-doc-why');
  }
})


module.exports = router
