import React, { useState, useEffect } from "react"

import SunIcon from "../icons/SunIcon"

function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  function handleClick() {
    let newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)

    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-user-color-scheme", newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-user-color-scheme", theme)
  }, [theme])

  return (
    <div className="dark-mode">
      <SunIcon onClick={handleClick} />
    </div>
  )
}

export default DarkMode
