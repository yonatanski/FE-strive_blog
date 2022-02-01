import React, { Component } from "react"
import { Container, Image } from "react-bootstrap"
import { withRouter } from "react-router"
import BlogAuthor from "../../components/blog/blog-author"
import BlogLike from "../../components/likes/BlogLike"
import posts from "../../data/posts.json"
import "./styles.css"
class Blog extends Component {
  state = {
    blog: {},
    loading: true,
  }
  componentDidMount() {
    this.fetchDataBlog()
    // console.log(posts)
    // const blog = posts.find((post) => post._id.toString() === id)
    // if (blog) {
    //   this.setState({ blog, loading: false })
    // } else {
    //   this.props.history.push("/404")
    // }
  }
  // const apiUrl = process.env.REACT_APP_BE_URL
  fetchDataBlog = async () => {
    try {
      const { id } = this.props.match.params

      const response = await fetch(`${process.env.REACT_APP_BE_URL}/blogpost`)
      if (response.ok) {
        const blogData = await response.json()
        const blog = blogData.find((singleBlog) => singleBlog.id.toString() == id)

        if (blog) {
          this.setState({ blog, loading: false })
        } else {
          this.props.history.push("/404")
        }
      }
    } catch (error) {}
  }

  render() {
    const { loading, blog } = this.state
    if (loading) {
      return <div>loading</div>
    } else {
      return (
        <div className="blog-details-root">
          <Container>
            <Image className="blog-details-cover" src={blog.cover} fluid />
            <h1 className="blog-details-title">{blog.title}</h1>

            <div className="blog-details-container">
              <div className="blog-details-author">
                <BlogAuthor {...blog.author} />
              </div>
              <div className="blog-details-info">
                <div>{blog.createdAt}</div>
                {/* <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div> */}
                <div style={{ marginTop: 20 }}>
                  <BlogLike defaultLikes={["123"]} onChange={console.log} />
                </div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          </Container>
        </div>
      )
    }
  }
}

export default withRouter(Blog)
