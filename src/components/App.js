import React from "react"
import "../styles/App.css"

import DarkMode from "../components/DarkMode"

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1 className="heading heavy primary">React Template</h1>
        <p className="normal secondary">
          This website is created for the purpose of being a template for any
          new react projects that I create. It will come with the font weights,
          sizes, and colors, along with npm packages and folder organization
          that I already use for most of my projects.
        </p>

        <p className="normal light">
          Will probably add components or more content in the future as I
          develop more sites!
        </p>

        <h1 className="heading heavy primary">Useful Links</h1>
        <ul>
          <li>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.w3schools.com/colors/colors_monochromatic.asp"
            >
              Monochromatic Colors
            </a>
          </li>
          <li>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.typescriptlang.org/"
            >
              Typescript
            </a>
          </li>
          <li>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://reacttraining.com/react-router/web/guides/quick-start"
            >
              React Router Dom
            </a>
          </li>
        </ul>

        <h1 className="heading heavy primary">Other Stuff</h1>
        <h1 className="heavy primary">Heading 1 w/ Primary Color</h1>
        <h2 className="heavy secondary">Heading 2 w/ Secondary Color</h2>
        <h3 className="heavy light">Heading 3 w/ Light Color</h3>

        <p className="normal secondary">
          Normal Font for paragraphs and default content. This should be the
          secondary content that users glance at after the headers.
        </p>
        <p className="normal light">
          Minor details to content that shouldn't distract users that much
          compared too the normal font color.
        </p>

        <a className="link" href="/">
          URL Color w/ no decorations
        </a>

        <DarkMode />
      </div>
    </div>
  )
}

export default App
