import React from 'react'
import client from "../client";
import groq from "groq";
import Layout from "../components/Layout";

const Index = (props) => {
  const {terms = []} = props;

  return (
    <Layout>
      <section className="hero-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 order-lg-2">
              <div className="hero-image">
                <img src="/image/hero-image.png" alt=""/>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="hero-content">
                <h1>Live chat support for your customers.</h1>
                <p>Create custom landing pages with Shades that convert more visitors than any website—no coding
                  required.
                </p>
                <div className="hero-form">
                  <form action="">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Enter your email address"/>
                      <button className="submit-btn">Get Started</button>
                    </div>
                    <p className="form-text">Already using Shade? <a href="" className="link">Sign In</a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )

}

Index.getInitialProps = async () => ({
  terms: await client.fetch(groq`*[_type == "term"]`)
})

export default Index
