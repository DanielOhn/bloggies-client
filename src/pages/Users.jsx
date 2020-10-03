import React, { useState, useEffect } from "react"

const Users = () => {
  const [users, setUsers] = useState({})

  const [username, setUsername] = useState("username")
  const [email, setEmail] = useState("email")
  const [password, setPassword] = useState("password")
  const [url] = useState(`http://localhost:3001`)

  useEffect(() => {
    async function fetchUsers() {
      const url = `http://localhost:3001/users`

      const res = await fetch(url)
      const data = await res.json()

      setUsers(data)
    }

    fetchUsers()
  }, [])

  const listUsers = Object.keys(users).map((i) => {
    let user = users[i]
    let name = user.username

    return <li key={i}>{name}</li>
  })

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

  const userLogin = (e) => {
    e.preventDefault()

    let user = { username: username, password: password }
    fetch(`${url}/user-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="users-list">
      <p>Register/Login Stuff:</p>

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
        <input onClick={() => createUser} type="submit" value="Register" />
      </form>

      <form action="/login-user" method="POST" className="user-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <input onClick={() => userLogin} type="submit" value="Login" />
      </form>

      <p>Users:</p>
      {users && <ul>{listUsers}</ul>}
    </div>
  )
}

export default Users
