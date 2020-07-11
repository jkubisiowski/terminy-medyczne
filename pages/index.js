import React from 'react'
import client from "../client";
import groq from "groq";
import Layout from "../components/Layout";
import SearchForm from "../components/SearchForm";

const Index = (props) => {
  const {terms = []} = props;

  return (
    <Layout>
      <section className="hero-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 order-lg-2">
              <div className="hero-image">
                <img src="/image/main-image.png" alt=""/>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="hero-content">
                <h2>Sprawdź, co lekarz miał na myśli</h2>
                <p>Tutaj zawodowi lekarze tłumaczą terminy medyczne na zrozumiały język. Tak po prostu.
                </p>
                <div className="hero-form">
                  <SearchForm terms={terms}></SearchForm>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )

}

Index.getInitialProps = async () => ({
  terms: await client.fetch(groq`*[_type == "term"]`)
})

export default Index
