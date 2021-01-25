import React from 'react'
import {GetStaticProps} from 'next'
import {getPost, getPosts} from '../../entity/posts'

const postDetail = () => {
  return (
    <div>
      detail
    </div>)
}

export default postDetail

// export const getStaticProps: GetStaticProps = async () => {
//   const posts = await getPost()
// }