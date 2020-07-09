import React from 'react'
import "./AuthorCard.scss"
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const AuthorCard = (props) => {
  return (
    <div className="AuthorCard">
      <h3>Ten termin medyczny przetłumaczył dla Ciebie</h3>
      <p>{props.authorName}</p>
      {props.authorImage && (
        <div>
          <img
            src={urlFor(props.authorImage)
              .width(50)
              .url()}
            alt={props.authorImage}/>
        </div>
      )}
    </div>
  )
}

export default AuthorCard
