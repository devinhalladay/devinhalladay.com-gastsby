import React from "react"
import { graphql } from 'gatsby'

import Layout from '../templates/layout'

export const query = graphql`
  query WorksIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

const WorkCard = ({ project }) => (
  <div className="work-card">
    <div className="topbar">
      <p>1/4</p>
      <h2>{project.frontmatter.title}</h2>
    </div>
  </div>
)

export default ({ data }) => {
  const Posts = data.allMarkdownRemark.edges
    .map(edge => <WorkCard key={edge.node.id} project={edge.node} />)
    
  return (
    <Layout>
      <main>
        {Posts}
      </main>
    </Layout>
  )
}