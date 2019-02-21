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
            <title>TD - Education</title>
            <meta name="description" content="Education" />
        </Helmet>

        <section id="banner" className="style2">
          <div className="inner">
              <header className="major">
                  <h1>Education</h1>
              </header>
          </div>
        </section>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <ul className="alt">
                      <li><h5>BCOMM IN MARKETING MAJOR (APPLIED)</h5></li>
                      <li>CONCORDIA UNIVERSITY | 2019 - 2021</li>
                    </ul>
                    <ul className="alt">
                      <li><h5>ENTREPRENEURSHIP CERTIFICATE</h5></li>
                      <li>MCGILL UNIVERSITY | 2016 - 2018</li>
                    </ul>
                    <ul className="alt">
                      <li><h5>FULLSTACK DEVELOPER BOOTCAMP</h5></li>
                      <li>LE WAGON MONTREAL | JUN 2017 - JUL 2017</li>
                    </ul>
                    <ul className="alt">
                      <li><h5>B.ART&SCIENCE IN ECONOMIC (TRANSFERED)</h5></li>
                      <li>CONCORDIA UNIVERSITY | 2014 - 2015</li>
                    </ul>
                    <ul className="alt">
                      <li><h5>FRENCH BACALAUREATE IN ECONOMICS & SOCIAL</h5></li>
                      <li>STANISLAS COLLEGE | 2014</li>
                    </ul>
                </div>
            </section>
              <section id="two">
              <div className="inner">
                <ul className="actions">
                  <li><Link to="/" className="button">Home Page</Link></li>
                </ul>
              </div>
            </section>
        </div>

    </Layout>
)

export default Landing
