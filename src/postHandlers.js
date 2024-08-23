import express from 'express'
import cors from 'cors'
import addPostRouter from './addPost.js'
import editPostRouter from './editPost.js'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

// use the routers

app.use('/add-post', addPostRouter)
app.use('/edit-post', editPostRouter)

app.listen(PORT, () => {
    console.log(`The Backend Server Has been Running in http://localhost:${PORT}`)
})