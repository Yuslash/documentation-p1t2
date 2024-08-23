import express, { json } from 'express'
const app = express()
const PORT = 5000
import fs from 'fs/promises'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'

app.use(cors())
app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.join(__dirname, 'blogs.json')


//add a new post 
app.post('/add-post', async (req, res) => {
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


//edit exisiting post
app.put('/edit-post/:name', async (req, res) => //creating an new route 
{
    const name = req.params.name //get the post name from the url
    const updatedPost = req.body // same like newpost
    const data = await fs.readFile(filePath) // same code to read the blgos.json
    const blogs = JSON.parse(data) //no change here

    // Find the index of the post with a matching name (case-insensitive)
    const index = blogs.findIndex(post => post.name.toLowerCase() === name.toLowerCase())

    //lets create an if statement
    if (index !== -1) {
        blogs[index] = { ...blogs[index], ...updatedPost }
        await fs.writeFile(filePath, JSON.stringify(blogs, null, 2))
        res.send('Post updated successfully')
    } else {
        res.status(400).send('Post not found')
    }

})

app.listen(PORT, () => {
    console.log(`The Backend Server Has been Running in http://localhost:${PORT}`)
})
