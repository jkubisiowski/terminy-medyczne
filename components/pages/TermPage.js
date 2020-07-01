import React from 'react'
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export const Term = (props) => {
  const {
    name = 'Missing name',
    authorName = 'Missing author name',
    categories,
    authorImage,
    body = []
  } = props

  return (<article>
    <h1>{name}</h1>
    <span>By {authorName}</span>
    {categories && (
      <ul>
        Posted in
        {categories.map(category => <li key={category}>{category}</li>)}
      </ul>
    )}
    {authorImage && (
      <div>
        <img
          src={urlFor(authorImage)
            .width(50)
            .url()}
          alt={authorImage}/>
      </div>
    )}
    <BlockContent
      blocks={body}
      imageOptions={{w: 320, h: 240, fit: 'max'}}
      {...client.config()}
    />
  </article>)
}
