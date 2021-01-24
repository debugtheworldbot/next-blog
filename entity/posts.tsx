import path from "path"
import fs, {promises as fsPromise} from "fs"
import matter from 'gray-matter'

export const getPosts = async () => {
  const mdDir = path.join(process.cwd(), 'markdown')
  const articleList = await fsPromise.readdir(mdDir)
  return articleList.map(articleName => {
    const fullDir = path.join(mdDir, articleName)
    const fileName = articleName.replace(/\.md$/g, '')
    const fulltext = fs.readFileSync(fullDir, 'utf-8')
    const text = matter(fulltext)
    const {data: {title, date}} = text
    return {fileName, title, date}
  })
}