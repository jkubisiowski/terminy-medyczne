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
        <div className="container">
        <div className="section-title text-center">
        <h2>{category.title}</h2>
        </div>
          <div className="row">
            {category.terms.map(x => (<div key={x.name} className="col-sm-12 col-md-6 col-lg-2 mb--30">
            <div className="feature-card">
              <div className="card-content">
              <a href={"/terminy/" + x.slug.current}>{x.name}</a>
            </div>
            </div>  
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
