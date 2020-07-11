import React from 'react'
import "./FrequentTerms.scss"

const FrequentTerms = (props) => {
  return (
    <div className="FrequentTerms">
      {props.terms.map(x => <div key={x.name} className="FrequentTerms__itemContainer">
        <a className="FrequentTerms__item" href={x.url}>{x.name}</a>
      </div>)}
    </div>
  )
}

export default FrequentTerms
