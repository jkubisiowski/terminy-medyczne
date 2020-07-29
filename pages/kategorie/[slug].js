import groq from 'groq'
import client from '../../client'
import Layout from "../../components/Layout";

const CategoryPage = (props) => {
  return (
    <Layout>
      <section className="hero-area term">
        <div className="container">
        <div className="section-title text-center">
        <h2>{props.title}</h2>
        </div>
          <div className="row text-center">
            {props.terms.map(x => (<div key={x.name} className="col-sm-6 col-md-3 col-lg-2 mb--30">
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

CategoryPage.getInitialProps = async function (context) {
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default CategoryPage
