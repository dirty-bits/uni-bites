const express = require('express');

const router = express.Router();

/*GET about us page. */
router.get('/', (req, res, next) => {
    res.render('about-us', { title: 'About Us' });
});

module.exports = router;