const express = require('express');

const router = express.Router();

/*GET privacy policy page. */
router.get('/', (req, res, next) => {
    res.render('privacy-policy', { title: 'Privacy Policy' });
});

module.exports = router;