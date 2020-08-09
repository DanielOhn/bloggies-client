import React, { useState } from "react"
import ReactMarkdown from "react-markdown"

function BlogList(props) {
  const [edit, setEdit] = useState(false)

  const [id, setId] = useState(props.id)
  const [name, setName] = useState(props.name || "")
  const [content, setContent] = useState(props.content || "")

  function onEdit() {
    setEdit(!edit)
  }

  const onUpdate = (e) => {
    e.preventDefault()
    console.log(name, content)

    let updateBlog = { id: props.id, name: name, blog: content }

    let url = "http://localhost:3001"

    fetch(`${url}/update-blog`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateBlog),
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="blog-list">
      {edit && (
        <form onSubmit={onUpdate}>
          <h1>Title</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          <p>Blog</p>
          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="blog"
          ></textarea>
          <input type="submit" value="Update" />
        </form>
      )}
      {!edit && (
        <div>
          <h1>{name}</h1>
          <ReactMarkdown source={content} />
        </div>
      )}
      <button onClick={onEdit}>edit</button>
    </div>
  )
}

export default BlogList
