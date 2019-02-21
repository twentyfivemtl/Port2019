import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic12 from '../assets/images/pic12.jpg'
import pic13 from '../assets/images/pic13.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Skills = (props) => (
    <Layout>
        <Helmet>
            <title>TD - Skills</title>
            <meta name="description" content="Skills" />
        </Helmet>

        <section id="banner" className="style2">
          <div className="inner">
              <header className="major">
                  <h1>Skills</h1>
              </header>
          </div>
        </section>
          <div id="main">
            <section id="one">
                <div className="inner">
                    <div className="grid-wrapper">
                      <div className="col-4">
                        <p>ADOBE CAMPAIGN</p>
                        <p>ADOBE EXPERIENCE XD</p>
                        <p>ADOBE ILLUSTRATOR</p>
                        <p>ADOBE PHOTOSHOP</p>
                        <p>CSS3</p>
                        <p>EXCEL</p>
                        <p>FTP</p>
                      </div>
                      <div className="col-4">
                        <p>GATSBY JS</p>
                        <p>GITHUB</p>
                        <p>GOOGLE ADS</p>
                        <p>HEROKU</p>
                        <p>HTML5</p>
                        <p>JIRA</p>
                        <p>JS</p>
                      </div>
                      <div className="col-4">
                        <p>NETLIFY</p>
                        <p>OOP</p>
                        <p>PERFORCE</p>
                        <p>RAILS</p>
                        <p>RUBY</p>
                        <p>SQL</p>
                        <p>TABLEAU</p>
                      </div>
                    </div>
                </div>
            </section>
            <section id="two">
              <div className="inner">
                <ul className="actions">
                  <li><Link to="/projects" className="button">Continue to Projects & Side Projects</Link></li>
                </ul>
              </div>
            </section>
        </div>

    </Layout>
)

export default Skills


