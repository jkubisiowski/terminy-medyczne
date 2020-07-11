import React from 'react'
import client from "../client";
import groq from "groq";
import Layout from "../components/Layout";

const Index = (props) => {
  const {terms = []} = props;

  return (
    <Layout>
      <h1>LOLLO</h1>
    </Layout>
  )

}

Index.getInitialProps = async () => ({
  terms: await client.fetch(groq`*[_type == "term"]`)
})

export default Index
