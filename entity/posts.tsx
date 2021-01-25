import path from "path"
import fs, {promises as fsPromise} from "fs"
import matter from 'gray-matter'

const mdDir = path.join(process.cwd(), 'markdown')
export const getPosts = async () => {
  const articleList = await fsPromise.readdir(mdDir)
  return articleList.map(articleName => {
    const fullDir = path.join(mdDir, articleName)
    const fileName = articleName.replace(/\.md$/g, '')
    const fulltext = fs.readFileSync(fullDir, 'utf-8')
    const text = matter(fulltext)
    const {data: {title, date}, content} = text
    return {fileName, title, date, content}
  })
}

export const getPost = async (fileName: string) => {
  const fullPath = path.join(mdDir, fileName + '.md')
  console.log(fullPath)
  const fulltext = fs.readFileSync(fullPath, 'utf-8')
  const text = matter(fulltext)
  const {data: {title, date}, content} = text
  return {fileName, title, date, content}
}