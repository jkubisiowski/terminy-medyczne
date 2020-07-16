import groq from 'groq'
import client from '../../client'
import Layout from "../../components/Layout";
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import {useEffect, useState} from "react";

const TermPage = (props) => {
  const [term, setTerm] = useState({
    body: [],
    name: null,
    authorImage: null,
    authorName: null,
    authorEmail: null,
    categories: []
  });

  useEffect(() => {
    client.fetch(query, {slug: props.slug})
      .then(data => {
        console.log(data)
        setTerm(data)
      })
  }, [])

  return (
    <Layout>
      <section className="hero-area term">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 order-2">
              <div>
                <p className="term-author-label">Autor tłumaczenia</p>
                <h5 className="term-author-name">{term.authorName}</h5>
                <p className="term-author-email">{term.authorEmail}</p>
                {term.authorImage && (
                  <div>
                    <img
                      src={urlFor(term.authorImage)
                        .width(200)
                        .url()}
                      alt={term.authorImage}/>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-8 order-1">
              <div className="hero-content">
                <h2>{term.name}</h2>
                <div className="term-body">
                  <BlockContent
                    className="term-body"
                    blocks={term.body}
                    imageOptions={{w: 320, h: 240, fit: 'max'}}
                    {...client.config()}
                  />
                </div>
                {term.categories && (
                  <ul>
                    {term.categories.map(category => <li className="term-category-container" key={category}>
                      <span>{category}</span></li>)}
                  </ul>
                )}
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
  "authorEmail": author->email,
  body
}`

TermPage.getInitialProps = function (context) {
  return context.query;
}

export default TermPage
