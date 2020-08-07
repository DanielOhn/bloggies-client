import React, { useState } from "react"
import ReactMarkdown from "react-markdown"

function BlogList(props) {
  const [edit, setEdit] = useState(false)
  const { name, content } = props

  function onEdit() {
    setEdit(!edit)
  }

  const onUpdate = (e) => {
    let [name, blog] = e.form
    let updateBlog = { name: name, blog: blog }

    fetch(`/update-blog`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateBlog),
    })
  }

  return (
    <div className="blog-list">
      {edit && (
        <form>
          <h1>Title</h1> <input type="text" placeholder={name} />
          <p>Blog</p>
          <textarea type="text" placeholder={content} name="blog"></textarea>
          <button type="submit" onClick={() => onUpdate}>
            Update
          </button>
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
