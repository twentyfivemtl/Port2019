import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic01 from '../assets/images/pic01.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>TD - Experience</title>
            <meta name="description" content="Experience" />
        </Helmet>

        <section id="banner" className="style2">
          <div className="inner">
              <header className="major">
                  <h1>Experience</h1>
              </header>
          </div>
        </section>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h3>CRM FRONT-END WEB DEVELOPER</h3>
                        <h5>UBISOFT MONTREAL | SEPT 2018 - JAN 2019</h5>
                    </header>
                    <ul>
                      <li>Deploy web sites from staging to production environment.</li>
                      <li>Integrate HTML/CSS/Javascript and 3rd party APIs into our content management system.</li>
                      <li>Working with global teams to implement analytics tagging.</li>
                      <li>Responsible for day-to-day maintenance on multiple web sites.</li>
                      <li>Lead QA process for multiple websites</li>
                      <li>Stay current with web technology and offer technical expertise to improve our platforms and processes to
stay competitive with the marketing of our brands.</li>
                      <li>Work with counterparts to document web best practices and web development standards.</li>
                      <li>Localization of websites across all our existing locales</li>
                    </ul>
                </div>
                <div className="inner">
                    <header className="major">
                        <h3>MARKETING INTERN</h3>
                        <h5>UBISOFT LONDON | SEPT 2015 - DEC 2015</h5>
                    </header>
                    <ul>
                      <li>Junior brand manager on TrackMania Turbo supervised by a senior brand manager.</li>
                      <li>Collect, analyze and interpret marketing data for multiple projects (AC Syndicate, FARCRY Primal, TMT...).</li>
                      <li>Represent the brand at PR event.</li>
                    </ul>
                </div>
                <div className="inner">
                    <header className="major">
                        <h3>WAITER</h3>
                        <h5>LES TONTONS FLINGUEURS | JAN 2015 - JUL 2016</h5>
                    </header>
                </div>
                <div className="inner">
                    <header className="major">
                        <h3>SALESMAN</h3>
                        <h5>PDS | SEASONAL SEPT-MARCH 2013-2014-2015</h5>
                    </header>
                </div>
                <div className="inner">
                    <header className="major">
                        <h3>GAME TESTER</h3>
                        <h5>UBISOFT MONTREAL | SUMMER 2012 - SUMMER 2013</h5>
                    </header>
                </div>
            </section>
              <section id="two">
              <div className="inner">
                <ul className="actions">
                  <li><Link to="/education" className="button">Continue to Education</Link></li>
                </ul>
              </div>
            </section>
        </div>

    </Layout>
)

export default Landing
