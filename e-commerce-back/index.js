require('dotenv').config()

require('./Db/Connection')


const express = require('express')

 const router=require('./routes/router')
const cors = require('cors')


//create a server

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)


const PORT=8000 || process.env.PORT


app.listen(PORT, () => {
    console.log(`serevr running in the port ${PORT}`);
})

