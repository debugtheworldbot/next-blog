import {NextApiRequest, NextApiResponse} from 'next'
import {getPosts} from '../../../entity/posts'



const handler = async (req:NextApiRequest, res:NextApiResponse)=> {
  const list = await getPosts()
  console.log(list)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'John Doe' }))
}

export default handler