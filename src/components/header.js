import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `none`,
      marginBottom: `1.45rem`,
      marginTop: `2.45rem`,
    }}
  >
    <div className="container">
      <div className="content">
        <div className="profile">
          <div className="avatar">
            <a href="/"><img className="avatar" src="https://yt3.ggpht.com/-JNih4JWK34Q/AAAAAAAAAAI/AAAAAAAAmt8/HfOLX-KEc94/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg"/></a>
          </div>
          <div className="intro">
            <a href="/">
              <div className="name">Rifki Fauzi</div>
            </a>
            <h3 className="self-intro">Family guy, Software engineer, Coding instructor, Lifelong learner</h3>
          </div>
        </div>
        <nav>
          <ul>
            <li className="nav-latest"><a href="https://rifkifauzi.id/"><span>Latest</span></a></li>
            <li className="nav-Personal"><a href="https://rifkifauzi.id/tags/personal/"><span>Personal</span></a></li>
            <li className="nav-coding"><a href="https://rifkifauzi.id/tags/coding/"><span>Coding</span></a></li>
            <li className="nav-english"><a href="https://rifkifauzi.id/tags/english/"><span>English</span></a></li>
            <li className="nav-gallery"><a href="https://rifkifauzi.id/gallery/"><span>Gallery</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
