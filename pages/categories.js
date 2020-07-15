import Layout from "../components/Layout";
import groq from "groq";
import {useEffect, useState} from "react";
import client from "../client";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(query)
      .then(data => {
        setCategories(data)
      })
  }, [])

  return (
    <Layout>
      <section className="hero-area term">
        <div className="container">
          <div className="section-title text-center">
            <h2>Kategorie</h2>
          </div>
          <div className="row">
          {categories.map(x =>
            (<div key={x.title} className="col-sm-12 col-md-6 col-lg-3 mb--30">
              
                <div className="feature-card">
                  <div className="card-content">
                    <h4>{x.title}</h4>
                    <a href="" className="btn btn-link right-icon">Sprawdź tutaj <i
                      className="icon icon-minimal-right"></i></a>
                  </div>
                </div>
              
            </div>)
          )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
const query = groq`*[_type == "category"]`

export default Categories;
