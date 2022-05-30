const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Radio button redirect
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Research setup visa type options
router.post('/research-setup-router', function (req, res) {

  var visa = req.session.data['visa-type']

  if (visa == 'Skilled Worker') {
    res.redirect('gov-uk/skilled-worker');
  }
  else {
    res.redirect('gov-uk/student');
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
    res.redirect('../not-in-prototype');
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
