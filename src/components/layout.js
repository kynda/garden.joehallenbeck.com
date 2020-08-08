import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./stylesheet.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
      <header>
        <Link to="/">Joe's<br />Digital Garden</Link>
        <hr />
      </header>
      <main>
        <article>
            {children}
        </article>
      </main>
      <footer>
        <small>
            &copy; {new Date().getFullYear()} Joseph Hallenbeck. <br />
            <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">
              Licensed under a Creative Commons Attribution-ShareAlike 4.0
              International License.  </a>
        </small>
      </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

