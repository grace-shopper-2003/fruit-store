const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  res.json('Silly Rabbit, Fruit Loops are for 2003!')
})
