import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import blogStyles from './blog.module.scss';

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost(
        sort: {
        	fields: publishedDate,
        	order:DESC
      }){
        edges{
          node{
            title
            publishedDate(formatString: "Do MMMM YYYY")
            slug
          }
        }
      }
    }
    `)

  return (
      <Layout>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edge) =>{
            const link = `/blog/${edge.node.slug}`
            return (
              <li className={blogStyles.post}>
                <Link to={link}><h2>{edge.node.title}</h2>
                <p>{edge.node.date}</p></Link>
              </li>
            )
          })}
        </ol>
      </Layout>
  )
}

export default BlogPage
