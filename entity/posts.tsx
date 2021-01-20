import path from "path"
import {promises as fsPromise} from "fs"

export const getPosts = async ()=>{
  const mdDir = path.join(process.cwd(),'markdown')
  const articleList = await fsPromise.readdir(mdDir)
  console.log(articleList)
}