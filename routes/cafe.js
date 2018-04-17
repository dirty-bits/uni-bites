const express = require('express');

const router = express.Router();
const User = require('../models/cafe');

/*GET cafe page. */
router.get('/:cafename', (req, res, next) => {
    console.log(req.params.cafename);

    const cafeTag = req.params.cafename;
    let cafeTitle = '';
    const cafe = '';
    
    

    const cafes = req.app.locals.cafes;

    console.log(JSON.stringify(req.app.locals));

    for(let i = 0; i < cafes.length; i++) {
        if(cafes[i].urlTag == cafeTag) {
            cafeTitle = cafes[i].name;
            break;
        }
    }

    res.render('cafe', {
        title: `${cafeTitle} | Uni-Bites`,
        cafe: cafeTitle
    });
    
    /*Map*/
   /* let currentCafe = '';
    
    for(let i = 0; i < cages.length; i++){
        if(cafes[i].urlTag == cafeTag) {
            currentCafe = cafes[i].long;
            break;
        }
    }
    
    for(let i = 0; i < cages.length; i++){
        if(cafes[i].urlTag == cafeTag) {
            currentCafe = cafes[i].lat;
            break;
        }
    }
    
    res.render('cafe',{
    title: '${currentCafe.name} | Uni-Bites',
    cafe: currentCafe
});*/
    
});

module.exports = router;