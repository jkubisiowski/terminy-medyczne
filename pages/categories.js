import Layout from "../components/Layout";
import groq from "groq";
import TermPage from "./term/[slug]";

const Categories = () => {
    return (
        <Layout>
            <section className="hero-area term">
            <div className="container">
            <div className="section-title text-center">
              <h2>Kategorie</h2>
            </div>
            <div className="row mb-d-30">
              <div className="col-md-6 col-lg-3 mb--30">
                <div className="feature-card">
                  <div className="card-content">
                    <h4>Dupa 1</h4>
                    <a href="" className="btn btn-link right-icon">Sprawdź tutaj <i
                      className="icon icon-minimal-right"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb--30">
                <div className="feature-card">
                  <div className="card-content">
                    <h4>Dupa 2</h4>
                    <a href="" className="btn btn-link right-icon">Sprawdź tutaj <i
                      className="icon icon-minimal-right"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb--30">
                <div className="feature-card">
                  <div className="card-content">
                    <h4>Dupa 3</h4>
                    <a href="" className="btn btn-link right-icon">Sprawdź tutaj <i
                      className="icon icon-minimal-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb--30">
                <div className="feature-card">
                  <div className="card-content">
                    <h4>Dupa 4</h4>
                    <a href="" className="btn btn-link right-icon">Sprawdź tutaj <i
                      className="icon icon-minimal-right"></i></a>
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

TermPage.getInitialProps = function (context) {
  return context.query;
}


  export default Categories;
