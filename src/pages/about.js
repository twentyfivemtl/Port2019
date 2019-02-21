import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic12 from '../assets/images/pic12.jpg'
import pic13 from '../assets/images/pic13.jpg'
import pic10 from '../assets/images/pic10.jpg'

const About = (props) => (
    <Layout>
        <Helmet>
            <title>TD - About</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <section id="banner" className="style2">
          <div className="inner">
              <header className="major">
                  <h1>About Me</h1>
              </header>
              <div className="content">
                    <p>A focused and ambitious individual with a great passion for marketing and programming. I am currently in between studies seeking a place where I can be challenged in order to continuously grow and improve my current set of skills to benefit the best I can the team I would integrate and develop new skills in the process. I am looking for a position in these industries in which I can put into practice my knowledge and experience.</p>
              </div>
          </div>
        </section>

        <div id="main">
            <section id="one" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic12} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                          <header className="major">
                                <h3>Hobbies & Interests</h3>
                          </header>
                            <ul className="alt">
                              <li>Blockchain - Cryptocurrency</li>
                              <li>Crossfit</li>
                              <li>Kitesurf</li>
                              <li>Lean books</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic13} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <ul className="alt">
                              <li>Music</li>
                              <li>Running</li>
                               <li>Travel</li>
                              <li>Yoga</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <section id="two">
              <div className="inner">
                <ul className="actions">
                  <li><Link to="/skills" className="button">Continue to Skills</Link></li>
                </ul>
              </div>
            </section>
        </div>

    </Layout>
)

export default About
