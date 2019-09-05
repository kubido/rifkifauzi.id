import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import '../components/layout.css'

export default ({ data, children, title }) => {
  return(
    <>
      <SEO title="Home" />
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-7-24"></div>
        <div className="pure-u-1 pure-u-md-10-24">
          <Header/>
          <main>
            { children }
          </main>
          <footer>
            <div className="content">
              <a href="https://github.com/kubido" target="_blank" rel="noopener">
                <img className="icon" src="/images/github.svg" alt="github" width="24"/>
              </a>
              <a href="https://instagram.com/kubid" target="_blank" rel="noopener">
                <img className="icon" src="/images/instagram.svg" alt="instagram" width="24"/>
              </a>
            </div>
          </footer>
        </div>
        <div className="pure-u-1 pure-u-md-7-24"></div>
      </div>
    </>
    
  )
}