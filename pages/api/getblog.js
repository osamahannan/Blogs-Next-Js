// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs"

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    console.log("slug = ", req.query.slug)
    if (err) {
      res.status(200).json({ "err": `No blogs found for ${req.query.slug}` })
    }
    res.status(200).json(JSON.parse(data))
  })
}
