const express = require("express")
const app = express()
const PORT = 5000

app.use(express.static('frontend/dist'))

app.listen(PORT, () => {
    console.log('server is running on port', PORT)
})