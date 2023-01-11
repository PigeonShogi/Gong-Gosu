const express = require('express')
const router = express.Router()

// 開發人員可以連上伺服器根目錄
router.get('/', (req, res) => {
  res.json({
    status: "Success(200)",
    message: "伺服器運作中",
  })
})

module.exports = router