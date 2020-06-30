import React from 'react'
import Layout from '../components/Layout'
import StartPage from "./StartPage";
import client from "../client";
import groq from "groq";

const IndexPage = (props) => {
  const {terms = []} = props;

  return (
    <Layout>
      <StartPage terms={terms}/>
    </Layout>
  )

}

IndexPage.getInitialProps = async () => ({
  terms: await client.fetch(groq`*[_type == "term"]`)
})

export default IndexPage
