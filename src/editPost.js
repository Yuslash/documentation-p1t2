import { Router } from 'express'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const router = Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.join(__dirname, 'blogs.json')

router.put('/:name', async (req, res) => //creating an new route 
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

export default router