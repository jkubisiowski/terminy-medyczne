import groq from 'groq'
import client from '../../client'
import React from "react";
import Layout from "../../components/Layout";

const TermPage = (props) => {
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

const query = groq`*[_type == "term" && slug.current == $slug][0]{
  name,
  "authorName": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

TermPage.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const {slug = ""} = context.query

  const terms = await client.fetch(groq`*[_type == "term"]`)
  const term = await client.fetch(query, {slug});

  console.log(terms)

  return {
    terms: terms,
    term: term
  }
}

export default TermPage
