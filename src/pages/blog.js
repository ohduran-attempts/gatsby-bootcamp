import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
            }
            fields{
              slug
            }
          }
        }
      }
    }
    `)

  return (
      <Layout>
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map((edge) =>{
            const link = `/blog/${edge.node.fields.slug}`
            return (
              <li>
                <Link to={link}><h2>{edge.node.frontmatter.title}</h2></Link>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            )
          })}
          <li></li>
        </ol>
      </Layout>
  )
}

export default BlogPage
