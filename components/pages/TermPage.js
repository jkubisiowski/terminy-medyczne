import React from 'react'
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import TermCard from "../TermCard";
import AuthorCard from "../AuthorCard";

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const TermPage = (props) => {
  const {
    name = 'Missing name',
    authorName = 'Missing author name',
    categories,
    authorImage,
    body = []
  } = props

  return (
    <>
      <TermCard categories={categories} name={name} body={body}/>
      <AuthorCard authorName={authorName} authorImage={authorImage}/>
    </>
  )
}

export default TermPage
