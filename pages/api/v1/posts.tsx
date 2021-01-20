import {NextApiRequest, NextApiResponse} from 'next'
import {getPosts} from '../../../entity/posts'



export default function handler(req:NextApiRequest, res:NextApiResponse) {
  getPosts()
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'John Doe' }))
}