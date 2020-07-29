import Layout from "../components/Layout";
import groq from "groq";
import client from "../client";
import MainContent from "../components/MainContent";

const Categories = (props) => {
  return (
    <Layout>
      <section className="hero-area term">
        <div className="container">
          <div className="section-title text-center">
            <h2>Kategorie</h2>
          </div>
          <div className="row">
          {Object.values(props).map(x =>
            (x.slug && <div key={x.title} className="col-sm-12 col-md-6 col-lg-3 mb--30">
                <div className="feature-card">
                  <div className="card-content">
                    <h4>{x.title}</h4>
                    <a href={"/kategorie/"+x.slug.current} className="btn btn-link right-icon">Sprawdź tutaj <i
                      className="icon icon-minimal-right"></i></a>
                  </div>
                </div>

            </div>)
          )}
          </div>
        </div>
      </section>
      <MainContent/>
    </Layout>
  )
}
const query = groq`*[_type == "category"]`

Categories.getInitialProps = async function (context) {
  return await client.fetch(query)
}

export default Categories;
