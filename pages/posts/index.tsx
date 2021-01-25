import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {getPosts} from '../../entity/posts'
import Link from 'next/link'

interface Post {
  title: string
  date: string
  fileName: string
}

interface Posts {
  posts: Post[]
}

const PostIndex: NextPage<Posts> = (props) => {
  const {posts} = props
  return (
    <div>
      <h1>文章列表</h1>
      {posts.map(post => <div key={post.fileName}>
        <Link href={`/posts/${post.fileName}`}>
          <a >{post.title} // {post.date} </a>
        </Link>
      </div>)}
    </div>
  )
}

export default PostIndex

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()
  return {
    props: {
      posts: posts
    }
  }

}