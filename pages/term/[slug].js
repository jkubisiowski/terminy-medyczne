import groq from 'groq'
import client from '../../client'
import React from "react";
import Layout from "../../components/Layout";
import "./TermPage.scss"
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const TermPage = (props) => {
  return (
    <Layout>
      <section className="hero-area term">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 order-lg-2">
              <div className="hero-image">
                <img src="/image/hero-image.png" alt=""/>
              </div>
            </div>
            <div className="col-lg-8 order-lg-1">
              <div className="hero-content">
                <h2>{props.name}</h2>
                <div className="term-body">
                  <BlockContent
                    className="term-body"
                    blocks={props.body}
                    imageOptions={{w: 320, h: 240, fit: 'max'}}
                    {...client.config()}
                  />
                </div>
                {props.categories && (
                  <ul>
                    {props.categories.map(category => <li className="term-category-container" key={category}><span
                      className="term-category-content">{category}</span></li>)}
                  </ul>
                )}

                {/*<div className="hero-form">*/}
                {/*  <form action="">*/}
                {/*    <div className="form-group">*/}
                {/*      <input type="text" className="form-control" placeholder="Enter your email address"/>*/}
                {/*      <button className="submit-btn">Get Started</button>*/}
                {/*    </div>*/}
                {/*    <p className="form-text">Already using Shade? <a href="" className="link">Sign In</a></p>*/}
                {/*  </form>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
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

  // const terms = await client.fetch(groq`*[_type == "term"]`)
  return await client.fetch(query, {slug});
}

export default TermPage
