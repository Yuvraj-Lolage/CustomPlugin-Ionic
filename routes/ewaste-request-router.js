const express = require('express');
const requestRouter = express.Router();
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `${ Date.now() }-${ file.originalname }`)
  }
})

const upload = multer({ storage});



const {  handleCreateRequest } = require('../controller/ewaste-request-controller');

requestRouter.route('/create')
    .post(upload.single('file'), handleCreateRequest)

module.exports = {
    requestRouter
}