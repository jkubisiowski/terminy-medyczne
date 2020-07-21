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
            <h2>Nie znaleźliśmy szukanego przez Ciebie terminu.</h2>
            <h3>Nasz zespół został poinformowany o brakującym tłumaczeniu.</h3>
          </div>
        </div>
      </section>
    </Layout>
  )
}
const query = groq`*[_type == "category"]`

export default Categories;
