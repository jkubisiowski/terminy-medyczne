import groq from 'groq'
import client from '../../client'
import React from "react";
import Layout from "../../components/layout/Layout";

const TermPageWrapper = (props) => {
  return (
    <Layout>
      Dupa
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

  return await client.fetch(query, {slug});
}

export default TermPageWrapper
