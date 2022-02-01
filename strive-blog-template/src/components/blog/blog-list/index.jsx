import React, { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"
import BlogItem from "../blog-item"
// import posts from "../../../data/posts.json"
const BlogList = () => {
  const [blogs, setBlogs] = useState([])

  const fetchData = async () => {
    try {
      const apiUrl = process.env.REACT_APP_BE_URL || process.env.REACT_APP_LOCAL_URL
      const response = await fetch(`${apiUrl}/blogpost`)
      if (response.ok) {
        const blog_Data = await response.json()
        console.log(blog_Data)
        setBlogs(blog_Data)
      } else {
        console.error("Fetch Failed")
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Row>
      {blogs.map((blog) => (
        <Col md={4} style={{ marginBottom: 50 }}>
          <BlogItem key={blog.title} {...blog} />
        </Col>
      ))}
    </Row>
  )
}
export default BlogList
// blog list
