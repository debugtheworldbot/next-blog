import path from "path"
import fs ,{promises as fsPromise} from "fs"

export const getPosts = async ()=>{
  const mdDir = path.join(process.cwd(),'markdown')
  const articleList = await fsPromise.readdir(mdDir)
  articleList.map(articleName=>{
    const fullDir = path.join(mdDir,articleName)
    const content = fs.readFileSync(fullDir,'utf-8')
  })
  return articleList
}