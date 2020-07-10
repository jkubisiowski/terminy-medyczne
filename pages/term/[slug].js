import groq from 'groq'
import client from '../../client'
import React from "react";
import Layout from "../../components/layout/Layout";
import TermPage from "../../components/pages/TermPage";

const TermPageWrapper = (props) => {
  return (
    <Layout>
      <TermPage {...props}/>
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

TermPageWrapper.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const {slug = ""} = context.query

  console.log("dupa")

  const terms = await client.fetch(groq`*[_type == "term"]`)
  const term = await client.fetch(query, {slug});

  console.log(terms)

  return {
    terms: terms,
    term: term
  }
}

export default TermPageWrapper
