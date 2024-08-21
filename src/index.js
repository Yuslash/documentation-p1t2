import express from 'express'
const app = express()
const PORT = 5000
import fs from 'fs'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'

app.use(cors())
app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.join(__dirname,'blogs.json')

app.post('/add-post',(req, res) =>
{
    const newPost = req.body

    fs.readFile(filePath, (err,data) =>
    {
        const blogs = JSON.parse(data)
        blogs.push(newPost)

        fs.writeFile(filePath, JSON.stringify(blogs,null,2), () =>{
            res.send('the code is successfully posted')
        })
    })
})

app.listen(PORT, () => {
    console.log(`The Backend Server Has been Running in http://localhost:${PORT}`)
})
