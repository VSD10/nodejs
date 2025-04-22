const express = require('express');
const { Usercreate, UserList, Userupdate } = require('../controllers/model.user');
const router = express.Router();

router.post('/', Usercreate);
router.get('/', UserList);
router.put('/:id', Userupdate);

module.exports = router;