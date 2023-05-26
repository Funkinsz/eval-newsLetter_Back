const router = require("express").Router()

const apiUser = require('./user')
const apiAuth = require('./auth')
const apiNews = require('./news')

router.use("/user", apiUser)
router.use("/auth", apiAuth)
router.use("/news", apiNews)

module.exports = router