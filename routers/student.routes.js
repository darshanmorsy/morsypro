const router = require("express").Router();
// const admin_token = require("../middleware/manager.middleware");
const student_token = require("../middleware/student.middleware");
const image_upload = require("../helper/multer.helper")
const Enquiry = require('../models/enquiry.model')
const Student = require('../models/student.model')
const jwt = require('jsonwebtoken');


const {
    loginStudent,
    newpass,

} = require("../controller/student.controller");
const studentSchema = require("../middleware/student.middleware");


router.get('/', student_token, async (req, res) => {
    const token = req.cookies.jwt;
    const secret = process.env.SECRET_KEY;

    jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
            // handle verification error
            console.error(err);
        } else {
            // handle decoded payload
            stu_id = decoded._id
            var data = await Student.findById(stu_id);
        }
        res.render('home', { data })
    });
});
router.get("/login", (req, res) => {
    const displayErrorEmail = req.displayEmail;
    const displayErrorPassword = req.displayPassword;
    res.render('student_login', { displayErrorEmail, displayErrorPassword});
});

router.post("/login", loginStudent);

router.get('/about', student_token,(req, res) => {
    const token = req.cookies.jwt;
    const secret = process.env.SECRET_KEY;

    jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
            // handle verification error
            console.error(err);
        } else {
            // handle decoded payload
            stu_id = decoded._id
            var data = await Student.findById(stu_id)
            res.render('about', { data });
        }
    });
})

router.get('/team',student_token, (req, res) => {

    const token = req.cookies.jwt;
    const secret = process.env.SECRET_KEY;

    jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
            // handle verification error
            console.error(err);
        } else {
            // handle decoded payload
            stu_id = decoded._id
            var data = await Student.findById(stu_id)
            res.render('team', { data });
        }
    });

})

router.get('/contact',student_token, (req, res) => {
    const token = req.cookies.jwt;
    const secret = process.env.SECRET_KEY;

    jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
            // handle verification error
            console.error(err);
        } else {
            // handle decoded payload
            stu_id = decoded._id
            var data = await Student.findById(stu_id)
            res.render('contact', { data });
        }
    });

})

router.get('/profile', student_token, async (req, res) => {
    const token = req.cookies.jwt;
    const secret = process.env.SECRET_KEY;

    jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
            // handle verification error
            console.error(err);
        } else {
            // handle decoded payload
            stu_id = decoded._id
            var data = await Student.findById(stu_id)
            res.render('student_profile', { data });
        }
    });

})

router.get('/changePass', student_token, async (req, res) => {
    const token = req.cookies.jwt;
    const secret = process.env.SECRET_KEY;

    jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
            // handle verification error
            console.error(err);
        } else {
            // handle decoded payload
            stu_id = decoded._id
            var data = await Student.findById(stu_id)
            res.render('generatenewpass',{data});
        }
    })

})
 var tokenBlacklist =[];
router.post('/newpass', student_token, newpass)
// Assuming you have a logout route
app.get('/logout', (req, res) => {
  // Perform logout logic

  // Clear browser history by replacing the current URL with a new URL
  const logoutUrl = '/logout'; // Replace with your logout URL
  const baseUrl = window.location.origin;
  window.history.replaceState(null, '', baseUrl + logoutUrl);

  // Redirect the user to the login page or any appropriate page
  res.redirect('/login'); // Replace with your login URL
});

module.exports = router;
