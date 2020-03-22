import React from "react"
import { Link } from 'gatsby'

export default ({ children }) => (
  <>
    <header>
      <nav>
        <p>Hi, my name is <Link to="/me/">Devin Halladay</Link>. I'm a designer and creative technologist.</p>
        <p>I specialize in product design, visual identity, and web design.</p>
        <p>I also practice critical design, and <a href="https://infinitecaesura.com" target="_blank" rel="noopener noreferrer">write</a> cultural theory.</p>
      </nav>
    </header>
    {children}
  </>
)