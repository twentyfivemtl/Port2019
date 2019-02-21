import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import ubkdesign from '../assets/images/ubkdesign.jpg'
import tfc from '../assets/images/tfc.jpg'
import ubk from '../assets/images/ubk.png'
import port from '../assets/images/port.png'
import wasis from '../assets/images/wasis.png'
import cosmeeter from '../assets/images/cosmeeter.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>TD - Projects</title>
            <meta name="description" content="Projects" />
        </Helmet>

        <section id="banner" className="style2">
          <div className="inner">
              <header className="major">
                  <h1>Projects</h1>
              </header>
          </div>
        </section>

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={ubkdesign} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>UNIBOOK (Design)</h3>
                            </header>
                            <p>Designing advertising banner and email template on photoshop for the website (side project).</p>
                            <ul className="actions">
                                <li><a href="https://drive.google.com/drive/folders/1HkKXWt72ek6m6RrNyhFyapTqU5oDm0vd?usp=sharing" target="_blank" rel="noopener norefferer" className="button">Link to files</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={tfc} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Twenty Five Collection</h3>
                            </header>
                            <p>Designing a clothing brand collection on photoshop, t-shirts and banners (side project).</p>
                            <ul className="actions">
                                <li><a href="https://drive.google.com/drive/folders/1H46kSJMK48TU7cVFkQYIyt7vqjLcCeUK?usp=sharing" target="_blank" rel="noopener norefferer" className="button">Link to files</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={ubk} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>UNIBOOK (Prog)</h3>
                            </header>
                            <p>Educational platform for university students to exchange and communicate within their courses (Side project).</p>
                            <ul className="actions">
                                <li><a href="https://unibook-app.herokuapp.com/" target="_blank" rel="noopener norefferer" className="button">Link to the website</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={port} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Portfolio #1</h3>
                            </header>
                            <p>Responsive portfolio on Heroku showcasing my past and current projects while finishing Uni. You'll also find my skills, education and a direct link to my email. Twenty five is a personal brand where I build my projects on.</p>
                            <ul className="actions">
                                <li><a href="https://thibaultderennes.herokuapp.com/" target="_blank" rel="noopener norefferer" className="button">Link to the website</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={wasis} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>WASIS</h3>
                            </header>
                            <p>WASIS was the final project at the end of LeWagon Montreal realized by teams of four in a two-week time frame. We applied most of what we learned during the first 7 weeks in those final 2 weeks. WASIS is a web app to find workplaces around you with specific criteria. Go have a look!</p>
                            <ul className="actions">
                                <li><a href="https://www.wasis.top/" target="_blank" rel="noopener norefferer" className="button">Link to the website</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={cosmeeter} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>COSMEETER</h3>
                            </header>
                            <p>Cosmeeter was the first group project we did during the boot camp. It was completed within a week of work as a team of four working from 11:00am to 06:00pm. The project was to produce a look-a-like AirBnB. Link is to GitHub, the project runs locally.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/marcusbey/cosmeeter" target="_blank" rel="noopener norefferer" className="button">Link to project</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <section id="two">
              <div className="inner">
                <ul className="actions">
                  <li><Link to="/training" className="button">Continue to Training</Link></li>
                </ul>
              </div>
            </section>
        </div>

    </Layout>
)

export default Landing
