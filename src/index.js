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
const filePath = path.join(__dirname,'blogs.json')


//add a new post 
app.post('/add-post',async (req, res) =>
{
    const newPost = req.body
    const data = await fs.readFile(filePath) //new line for file read
    const blogs = JSON.parse(data) //blogs have the blogs.json data
    blogs.push(newPost) //now the data pushed to the newPost which we are going recollect in blogs.jsx

    //check if the post with the same name already exisits
    if (blogs.some(post => post.name === newPost.name)) {
        return res.status(400).send('post witht this name already exists')
    }

    await fs.writeFile(filePath, JSON.stringify(blogs, null, 2)) //writes file using promises api, dont ask me why those paramteres ask chatgpt anyways maybe i understand the explaination given below
    res.send('post added successfully') //to indicate that data has been modified
})

//edit exisiting post
app.put('/edit-post/:name', async (req, res) => //creating an new route 
{
    const id = parseInt(req.params.id,10) // may be for creating mulitple routes
    const updatedPost = req.body // same like newpost
    const data = await fs.readFile(filePath) // same code to read the blgos.json
    const blogs = JSON.parse(data) //no change here
    const index = blogs.findIndex(post => post.id === id) // Find index of post with matching ID

    //lets create an if statement
    if(index !== -1)
        {
            blogs[index] = {...blogs[index], ...updatedPost} //so here the ...three dots for mapping into the index 
        await fs.writeFile(filePath, JSON.stringify(blogs, null, 2)) // fs.writeFile parameters: JSON.stringify(blogs, null, 2) formats the JSON data with indentation for readability. The null is a placeholder for a replacer function (not used here), and 2 is the number of spaces to use for indentation.
            res.send('post updated Sucessfully')
        }

})

app.listen(PORT, () => {
    console.log(`The Backend Server Has been Running in http://localhost:${PORT}`)
})
