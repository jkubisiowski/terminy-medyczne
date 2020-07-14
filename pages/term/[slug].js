import groq from 'groq'
import client from '../../client'
import Layout from "../../components/Layout";
// import "./TermPage.scss"
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const TermPage = (props) => {
  return (
    <Layout>
      <section className="hero-area term">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 order-2">
              <div>
                <p className="term-author-label">Autor tłumaczenia</p>
                <h5 className="term-author-name">{props.authorName}</h5>
                {props.authorImage && (
                  <div>
                    <img
                      src={urlFor(props.authorImage)
                        .width(200)
                        .url()}
                      alt={props.authorImage}/>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-8 order-1">
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
                    {props.categories.map(category => <li className="term-category-container" key={category}>
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
  body
}`

TermPage.getInitialProps = async function (context) {
  context.res.setHeader('Cache-Control','no-store, must-revalidate');
  // It's important to default the slug so that it doesn't return "undefined"
  const {slug = ""} = context.query

  // const terms = await client.fetch(groq`*[_type == "term"]`)
  return await client.fetch(query, {slug});
}

export default TermPage
