import express from 'express'
import os from 'os'

const app = express()

app.get('/',(req,res)=>{
    const hostname = os.hostname()
    res.send(`Welcome to Nairobi Devops Community : ${hostname}`)
})

app.listen(3230,()=>{
    console.log('app listening on port 3230!')
})