import React, { useState } from "react"

const Users = () => {
  const [username, setUsername] = useState("username")
  const [email, setEmail] = useState("email")
  const [password, setPassword] = useState("password")
  const [url] = useState(`http://localhost:3001`)

  const createUser = (e) => {
    e.preventDefault()

    let newUser = { username: username, email: email, password: password }

    fetch(`${url}/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newUser,
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="users-list">
      <p>This is the users page:</p>

      <form action="/create-user" method="POST" className="user-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Users
