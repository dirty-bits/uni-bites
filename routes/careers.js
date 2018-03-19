const express = require('express');

const router = express.Router();

/*GET careers page. */
router.get('/', (req, res, next) => {
    res.render('careers', { title: 'Careers @ Uni-Bites' });
});

module.exports = router;