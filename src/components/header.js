import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = (props) => (
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
            <Link to="/">
              <img className="avatar" src="/images/photo.jpg"/>  
            </Link>
          </div>
          <div className="intro">
            <Link to="/">
              <div className="name">Rifki Fauzi</div>
            </Link>
            <h3 className="self-intro">Family guy, Software engineer, Coding instructor, Lifelong learner</h3>
          </div>
        </div>
        <nav>
          <ul>
            <li className="nav"><Link to="/"><span>Latest</span></Link></li>
            <li className="nav"><Link to="/tags/personal/"><span>Personal</span></Link></li>
            <li className="nav"><Link to="/tags/coding/"><span>Coding</span></Link></li>
            <li className="nav"><Link to="/gallery/"><span>Gallery</span></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)
export default Header
