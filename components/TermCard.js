import React from 'react'
import "./TermCard.scss"
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

const TermCard = (props) => {
  return (
    <div className="TermCard">
      <div className="TermCard__category">
        {props.categories && (
          <ul>
            {props.categories.map(category => <li key={category}>{category}</li>)}
          </ul>
        )}
      </div>


      <h2>{props.name}</h2>
      <BlockContent
        blocks={props.body}
        imageOptions={{w: 320, h: 240, fit: 'max'}}
        {...client.config()}
      />
    </div>
  )
}

export default TermCard
