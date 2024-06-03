const express = require('express');
const router = express.Router();
const { authRequired } = require('../middlewares/token.validation.js');

const {
    login,
    register,
    logout,
    verifyToken,
    // getUsers,
    getProfile,
    editProfile
   // deleteProfile
} = require('../controllers/user.controller.js');

router.use(express.json());

router.post('/register', register);
router.post('/login', login);
router.post('/logout', authRequired, logout);
// router.get('/see-users', getUsers);
router.get('/profile', authRequired, getProfile);
router.get('/verify', verifyToken);
router.put('/profile/edit/:num_doc', authRequired, editProfile);
//router.delete('/profile/delete/:id', deleteProfile);

module.exports = router;