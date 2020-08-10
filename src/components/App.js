import React, { useState, useEffect } from "react"
import "../styles/App.css"

import BlogList from "./BlogList"

import DarkMode from "../components/DarkMode"

function App() {
  const [blogs, setBlogs] = useState({})
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchBlogs() {
      const url = `http://localhost:3001/blogs`

      const res = await fetch(url)
      const data = await res.json()

      setBlogs(data)
    }

    fetchBlogs()
  }, [])

  const onSubmit = (event) => {
    let blogPost = { name: event.form.name, blog: event.form.blog }

    fetch(`/create-blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: blogPost,
    }).catch((err) => {
      setError(err)
    })
  }

  const listBlogs = Object.keys(blogs).map((i) => {
    let blog = blogs[i]
    let title = blog.name
    let content = blog.blog

    console.log(blog._id)
    return (
      <div className="blog" key={i}>
        <BlogList id={blog._id} name={title} content={content} />
      </div>
    )
  })

  return (
    <div className="App">
      <div className="content">
        <section className="blog-section">
          <h1 className="heading heavy primary">Bloggies</h1>
          <p className="normal secondary">
            Welcome! <br />
            Look at all the cool blogs:
          </p>
          {blogs && listBlogs}
          {error && <div>{error}</div>}
        </section>

        <section className="create-section">
          <form action="/create-blog" method="POST">
            <input type="text" placeholder="name" name="name" />
            <textarea type="text" placeholder="blog" name="blog"></textarea>
            <button type="submit" onClick={() => onSubmit}>
              Submit
            </button>
          </form>
        </section>
        <DarkMode />
      </div>
    </div>
  )
}

export default App
