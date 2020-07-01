import React from 'react'
import HomePage from "../components/pages/HomePage";
import client from "../client";
import groq from "groq";
import Layout from "../components/layout/Layout";

const Index = (props) => {
  const {terms = []} = props;

  return (
    <Layout>
      <HomePage terms={terms}/>
    </Layout>
  )

}

Index.getInitialProps = async () => ({
  terms: await client.fetch(groq`*[_type == "term"]`)
})

export default Index
