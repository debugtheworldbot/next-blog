import {NextApiRequest, NextApiResponse} from 'next'
import {getPosts} from '../../../entity/posts'



const handler = async (req:NextApiRequest, res:NextApiResponse)=> {
  const posts = await getPosts()
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(posts))
}

export default handler