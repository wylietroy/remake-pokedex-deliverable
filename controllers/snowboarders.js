const express =require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('snowboarders/index.ejs')
})

module.exports = router;