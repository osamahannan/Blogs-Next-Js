// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs"

export default async function handler(req, res) {
  let allBlogs = [];
  const blogs = await fs.promises.readdir("blogdata")
  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    const file = await fs.promises.readFile(("blogdata/" + blog), "utf-8")
    allBlogs.push(JSON.parse(file))
  }
  res.status(200).json(allBlogs)
}
