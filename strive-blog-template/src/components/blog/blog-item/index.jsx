import React, { Component } from "react"
import { Card } from "react-bootstrap"
import BlogAuthor from "../blog-author"
import { Link } from "react-router-dom"
import "./styles.css"
export default class BlogItem extends Component {
  render() {
    const { title, content, cover, author, id } = this.props
    return (
      <Link to={`/blog/${id}`} className="blog-link">
        <Card className="blog-card">
          <Card.Img variant="top" src={cover} className="blog-cover" />
          <Card.Body>
            <Card.Title className="text-danger">{title}</Card.Title>
            <div>{content}</div>
          </Card.Body>
          <Card.Footer>
            <BlogAuthor {...author} />
          </Card.Footer>
        </Card>
      </Link>
    )
  }
}
// blog item
