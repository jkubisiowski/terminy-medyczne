import React from 'react'
import Head from "next/head";

function Layout(props) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>Terminy medyczne</title>
        <link rel="stylesheet" href="/plugins/bootstrap-4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/plugins/meanmenu/meanmenu.css"/>
        <link rel="stylesheet" href="/fonts/ep-icon-fonts/css/style.css"/>
        <link rel="stylesheet" href="/fonts/fontawesome-5/css/all.min.css"/>
        <link rel="stylesheet" href="/css/settings.css"/>
        <link rel="stylesheet" href="/css/style.css"/>
      </Head>
      <div className="site-wrapper">
        <header className="site-header">
          <div className="container">
            <div className="row justify-content-center align-items-center position-relative">
              <div className="col-sm-3 col-6 col-lg-2 col-xl-2 order-lg-1">
                <div className="brand">
                  <a href=""><img src="image/main-logo.png" alt=""/></a>
                </div>
              </div>
              <div className="col-sm-8 col-lg-3 col-xl-3 d-none d-sm-block order-lg-3">
                <div className="header-btns">
                  <div className="btn-1">
                    <a href="#">Sign In</a>
                  </div>
                  <div className="btn-2">
                    <a href="#">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-1 col-6 col-lg-7 col-xl-6 offset-xl-1 position-static order-lg-2">
                <div className="main-navigation">
                  <ul className="main-menu">
                    <li className="menu-item has-dropdown">
                      <a href="#features">Free Landing Pages</a>
                      <ul className="menu-dropdown">
                        <li className="single-item">
                          <a href="../s01/index.html">
                            <h3>Mobile Application</h3>
                            <p>Best for Mobile App Presentation</p>
                          </a>
                        </li>
                        <li className="single-item">
                          <a href="../s02/index.html">
                            <h3>Web Application</h3>
                            <p>Best for Mobile App Presentation</p>
                          </a>
                        </li>
                        <li className="single-item">
                          <a href="../s03/index.html">
                            <h3>SaaS Application</h3>
                            <p>Best for Mobile App Presentation</p>
                          </a>
                        </li>
                        <li className="single-item">
                          <a href="../s04/index.html">
                            <h3> SaaS Subscription</h3>
                            <p>Best for Mobile App Presentation</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item "><a href="#features">Features</a></li>

                    <li className="menu-item"><a href="#">Services</a></li>

                    <li className="menu-item"><a href="#pricing">Pricing</a></li>

                    <li className="menu-item"><a href="#contact">Contact</a></li>
                  </ul>
                </div>
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </header>
        {props.children}

        <section className="feature-section">
          <div className="shape">
            <img src="/image/landing-1-shape.svg" alt=""/>
          </div>
          <div className="container">
            <div className="section-title text-center">
              <h2>Mark your next step</h2>
            </div>
            <div className="row mb-d-30">
              <div className="col-md-6 col-lg-4 mb--30">
                <div className="feature-card">
                  <div className="card-icon">
                    <i className="icon icon-users-mm"></i>
                  </div>
                  <div className="card-content">
                    <h3>Targeted Marketing</h3>
                    <p>Whether it’s a small internal app or a new for millions of customers, our design and
                      development teams.</p>
                    <a href="" className="btn btn-link right-icon">Learn more <i
                      className="icon icon-minimal-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb--30">
                <div className="feature-card">
                  <div className="card-icon">
                    <i className="icon icon-send"></i>
                  </div>
                  <div className="card-content">
                    <h3>Easy Communicaton</h3>
                    <p>Whether it’s a small internal app or a new for millions of customers, our design and
                      development teams.</p>
                    <a href="" className="btn btn-link right-icon">Learn more <i
                      className="icon icon-minimal-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb--30">
                <div className="feature-card">
                  <div className="card-icon">
                    <i className="icon icon-settings"></i>
                  </div>
                  <div className="card-content">
                    <h3>Fastest Setup</h3>
                    <p>Whether it’s a small internal app or a new for millions of customers, our design and
                      development teams.</p>
                    <a href="" className="btn btn-link right-icon">Learn more <i
                      className="icon icon-minimal-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="content-section-01">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5  col-sm-6 col-10">
                <div className="content-img">
                  <img src="/image/content-image-1.png" alt=""/>
                </div>
              </div>

              <div className="col-xl-5 offset-xl-1 col-sm-6">
                <div className="content-right-content">
                  <h2>Response on a chat wherever you are</h2>
                  <p>
                    Create custom landing pages with Shades that convert more visitors than any website, no coding
                    required.
                  </p>
                  <div className="content-link">
                    <a href="">Learn more <i className="icon icon-minimal-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section-02">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 offset-xl-1 col-sm-6 col-10 order-sm-2">
                <div className="content-img">
                  <img src="/image/content-image-2.png" alt=""/>
                </div>
              </div>
              <div className="col-xl-5  col-sm-6 order-sm-1">
                <div className="content-left-content">
                  <h2>Never miss a thing</h2>
                  <p>
                    Event is not like most tech conferences. We want our presentations to engage the audience, spark
                    discussion and inspire new ideas.
                  </p>
                  <ul className="content-list">
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Unlimited design
                      possibility
                    </li>
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Completely
                      responsive
                    </li>
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Easy to
                      customize
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section className="content-section-03">
          <div className="shape">
            <img src="/image/landing-4.svg" alt=""/>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-5 col-sm-6 col-10">
                <div className="content-img">
                  <img src="/image/content-image-3.png" alt=""/>
                </div>
              </div>
              <div className="col-xl-5  offset-xl-1 col-lg-6 col-md-7 col-sm-6 ">
                <div className="content-left-content">
                  <h2>Increase Customer Support Productivity</h2>
                  <p>
                    Event is not like most tech conferences. We want our presentations to engage the audience, spark
                    discussion and inspire new ideas.
                  </p>
                  <div className="content-bottom-part">
                    <p>Interested to see how it works? Schedule a free demo to get to learn everything you need to
                      know.</p>
                    <div className="content-btn">
                      <a href="#" className="btn btn--primary">Schedule A Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>


        <section className="pricing-section">
          <div className="shape">
            <img src="/image/landing-2-shape.svg" alt=""/>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2>Mark your next step</h2>
                  <p>We designed and tested prototypes that helped identify pain points in the account creation process.
                    Together, we shaped the new standard.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="btn--toggle-pricing" data-tab-target="#pricing-tab-7">
                  <p>Monthly</p>
                  <label className="switch">
                    <input type="checkbox"/>
                      <span className="slider round"></span>
                  </label>
                  <p>Yearly</p>
                </div>
              </div>

            </div>
            <div className="custom-tab-wrapper monthly" id="pricing-tab-7">
              <div className="row mb-d-30">
                <div className="col-lg-4">
                  <div className="pricing-card">

                    <div className="card-head">
                      <h6>Basic</h6>
                      <h2><span className="small-title">$</span><span className="big-txt" data-monthly='19'
                                                                      data-yearly='14'>19</span><span className="month"
                                                                                                      data-monthly='/month'
                                                                                                      data-yearly='/year'>/month</span>
                      </h2>
                      <p>Good for small business launching their products less then once a year</p>
                    </div>

                    <div className="card-content">
                      <ul className="pricing-list">
                        <li><span><i className="icon icon-check-2"></i></span>Unlimited Blocks</li>
                        <li><span><i className="icon icon-check-2"></i></span>5GB Clould Storages</li>
                        <li className="disable-opt"><span><i className="icon icon-check-2"></i></span>Custom Domain
                          Names
                        </li>
                        <li className="disable-opt"><span><i className="icon icon-check-2"></i></span>Unlimited
                          Emails
                        </li>
                      </ul>
                      <div className="card-btn">
                        <a href="" className="btn btn--primary">Start Free Trial</a>
                      </div>
                      <p>No credit card required</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="pricing-card active">

                    <div className="card-head">
                      <h6>Pro</h6>
                      <span className="card-badge">Popular</span>
                      <h2><span className="small-title">$</span><span className="big-txt" data-monthly='29'
                                                                      data-yearly='25'>29</span><span className="month"
                                                                                                      data-monthly='/month'
                                                                                                      data-yearly='/year'>/month</span>
                      </h2>
                      <p>Good for small business launching their products less then once a year</p>
                    </div>


                    <div className="card-content">
                      <ul className="pricing-list">
                        <li><span><i className="icon icon-check-2"></i></span>Unlimited Blocks</li>
                        <li><span><i className="icon icon-check-2"></i></span>5GB Clould Storages</li>
                        <li><span><i className="icon icon-check-2"></i></span>Custom Domain Names</li>
                        <li className="disable-opt"><span><i className="icon icon-check-2"></i></span>Unlimited
                          Emails
                        </li>
                      </ul>
                      <div className="card-btn">
                        <a href="" className="btn btn--primary">Start Free Trial</a>
                      </div>
                      <p>No credit card required</p>
                    </div>
                  </div>
                </div>


                <div className="col-lg-4">
                  <div className="pricing-card">

                    <div className="card-head">
                      <h6>Exclusive</h6>
                      <h2><span className="small-title">$</span><span className="big-txt" data-monthly='59'
                                                                      data-yearly='49'>59</span><span className="month"
                                                                                                      data-monthly='/month'
                                                                                                      data-yearly='/year'>/month</span>
                      </h2>
                      <p>Good for small business launching their products less then once a year</p>
                    </div>


                    <div className="card-content">
                      <ul className="pricing-list">
                        <li><span><i className="icon icon-check-2"></i></span>Unlimited Blocks</li>
                        <li><span><i className="icon icon-check-2"></i></span>5GB Clould Storages</li>
                        <li><span><i className="icon icon-check-2"></i></span>Custom Domain Names</li>
                        <li><span><i className="icon icon-check-2"></i></span>Unlimited Emails</li>
                      </ul>
                      <div className="card-btn">
                        <a href="" className="btn btn--primary">Start Free Trial</a>
                      </div>
                      <p>No credit card required</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="pricing-extra-info">
                    <p><span>Still confused?</span><a href="#">Check our full feature list</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="footer-section">
          <div className="container">
            <div className="footer-newsletter-section">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                  <div className="footer-newsletter-content">
                    <h2>Join our rich newsletter now</h2>
                    <p>We designed and tested prototypes that helped identify pain points in the account creation
                      process. Together, we shaped the new standard.</p>
                  </div>
                </div>
                <div className="col-lg-7 col-xl-6">
                  <div className="footer-newsletter-form">
                    <form action="">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your email address"/>
                          <button className="submit-btn">Subscribe</button>
                      </div>
                      <p className="form-text"><i className="icon icon-lock"></i>Your data is protected. We never spam
                        in your inbox</p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="row margin-decrese">
              <div className="col-xl-4 col-lg-5 col-margin">
                <div className="single-footer">
                  <div className="footer-title">
                    <img src="/image/footer-logo.png" alt=""/>
                  </div>
                  <div className="footer-text">
                    <p>Big, small, online, offline, local. Size doesn't matter. We work on diverse projects for top
                      brands as well as for cool startups. </p>
                  </div>
                  <ul className="footer-social-list">
                    <li>
                      <a href="">
                        <i className="icon icon-logo-fb-simple"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon icon-logo-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon icon-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6 offset-lg-1 col-margin">
                <div className="single-footer">
                  <div className="footer-title">
                    <h6>Help Menu</h6>
                  </div>
                  <ul className="footer-list">
                    <li><a href="">About</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Works</a></li>
                    <li><a href="">Career</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6 col-margin">
                <div className="single-footer">
                  <div className="footer-title">
                    <h6>Support</h6>
                  </div>
                  <ul className="footer-list">
                    <li><a href="">Contact</a></li>
                    <li><a href="">Help & Support</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-margin">
                <div className="single-footer">
                  <div className="footer-title">
                    <h6>Products</h6>
                  </div>
                  <ul className="footer-list">
                    <li><a href=""> Shades Pro</a></li>
                    <li><a href="">Essential Blocks</a></li>
                    <li><a href="">Avasta Dash</a></li>
                    <li><a href="">vApp Landing Page</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="/plugins/jquery/jquery.min.js"></script>
      <script src="/plugins/jquery/jquery-migrate.min.js"></script>
      <script src="/plugins/bootstrap-4.3.1/js/bootstrap.bundle.js"></script>
      <script src="/plugins/meanmenu/jquery.meanmenu.js"></script>
      <script src="/js/active.js"></script>
    </>
  )
}

export default Layout
