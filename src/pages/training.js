import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import sql from '../assets/images/sql.jpg'
import LeWagon from '../assets/images/LeWagon.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>TD - Training</title>
            <meta name="description" content="Training" />
        </Helmet>

        <section id="banner" className="style2">
          <div className="inner">
              <header className="major">
                  <h1>Training</h1>
              </header>
          </div>
        </section>

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={sql} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>SQL for Beginners Data Analysis</h3>
                            </header>
                            <p>This course teaches real-world SQL – not just the theory in abstract, but real skills that you can use to get more data-driven in your job. In this course we'll be pretending we're a real business (i.e. Blockbuster) so the stuff you learn will be easy to apply to your own situation/company. We'll go through queries a real business would run while also teaching you the raw skills undergirding those queries so you can adapt those skills to create custom queries for your own specific purposes.</p>
                            <ul className="actions">
                                <li><a href="https://www.udemy.com/sql-for-newbs/" target="_blank" rel="noopener norefferer" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={LeWagon} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Le Wagon Coding Bootcamp</h3>
                            </header>
                            <p>Le Wagon is a 9-week full-stack coding bootcamp based out of 30 cities in 20 countries. We bring coding skills to creative people who aim to create their own startup, or add a technical know-how to their skillset.<br /><br />
                            Our coding bootcamp teaches you all the web stack, from the database to the browser. You will learn the core concepts of object-oriented programming, and structure your software following design patterns like MVC. In addition to mastering back-end programming languages (Ruby, SQL), you will develop your front-end skills using recent techniques like flexbox, CSS grid and learn ES6, the latest version of JavaScript.<br /><br />
                            We strongly believe that there is a good way of building web products. During our bootcamp, we teach you how successful startups work: design your project's wireframe & mockup, test your UX with a prototype, split your user stories across your team and collaborate with branch and pull requests with git and Github. <br /><br />
                            We also teach you how to learn, and what tools to use to do so (Heroku, Stripe, MailChimp, Cloudinary, Algolia…) You learn how to implement all these services to be more efficient when you launch your product.<br /><br />
                            At the end of the bootcamp, you will be able to build a web product from scratch, design a relational database and build queries with SQL, integrate a 3rd service using an API or scrape HTML data, and be able to learn a new programming language very quickly, which is extremely important in the fast-paced environment of web development.</p>
                            <ul className="actions">
                                <li><a href="https://www.lewagon.com/montreal" target="_blank" rel="noopener norefferer" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
