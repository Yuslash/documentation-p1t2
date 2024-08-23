import { Router } from 'express'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const router = Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.join(__dirname, 'blogs.json')


//add a new post 
router.post('/', async (req, res) => {
    const newPost = req.body
    const data = await fs.readFile(filePath) //new line for file read
    const blogs = JSON.parse(data) //blogs have the blogs.json data

    //check if the post with the same name already exisits
    if (blogs.some(post => post.name === newPost.name)) {
        return res.status(400).send('post witht this name already exists')
    }

    blogs.push(newPost) //now the data pushed to the newPost which we are going recollect in blogs.jsx
    await fs.writeFile(filePath, JSON.stringify(blogs, null, 2)) //writes file using promises api, dont ask me why those paramteres ask chatgpt anyways maybe i understand the explaination given below
    res.send('post added successfully') //to indicate that data has been modified
})

export default router