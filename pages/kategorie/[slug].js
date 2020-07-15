import groq from 'groq'
import client from '../../client'
import Layout from "../../components/Layout";
import {useEffect, useState} from "react";

const CategoryPage = (props) => {
  const [category, setCategory] = useState({
    terms: []
  });

  useEffect(() => {
    client.fetch(query, {slug: props.slug})
      .then(data => {
        setCategory(data)
      })
  }, [])

  return (
    <Layout>
      <section className="hero-area term">
        <h1>{category.title}</h1>
        <div className="container">
          <div className="row justify-content-center">
            {category.terms.map(x => (<div key={x.name}>
              <h2>{x.name}</h2>
              <a href={"/terminy/" + x.slug.current}>{x.name}</a>
            </div>))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

const query = groq`*[_type == "category" && slug.current == $slug][0]{
  _id, title,
  "terms": *[_type == "term" && references(^._id)]
}`

CategoryPage.getInitialProps = function (context) {
  return context.query;
}

export default CategoryPage
