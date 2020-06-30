import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import Layout from "../../components/Layout";

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Term = (props) => {
  const {
    name = 'Missing name',
    authorName = 'Missing author name',
    categories,
    authorImage,
    body = []
  } = props
  return (
    <Layout>
      <article>
        <h1>{name}</h1>
        <span>By {authorName}</span>
        {categories && (
          <ul>
            Posted in
            {categories.map(category => <li key={category}>{category}</li>)}
          </ul>
        )}
        {authorImage && (
          <div>
            <img
              src={urlFor(authorImage)
                .width(50)
                .url()}
              alt={authorImage}/>
          </div>
        )}
        <BlockContent
          blocks={body}
          imageOptions={{w: 320, h: 240, fit: 'max'}}
          {...client.config()}
        />
      </article>
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

Term.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const {slug = ""} = context.query
  return await client.fetch(query, {slug})
}

export default Term
