var express = require('express');
var router = express.Router();
var controllers=require("../controllers/adminController")
var multer=require("multer")
var path=require("path")
/* GET home page. */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })


router.get('/',controllers.register );
router.post("/",upload.any(),controllers.profile);
module.exports = router;

