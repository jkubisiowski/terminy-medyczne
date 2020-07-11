import React from 'react'
import SearchForm from "../SearchForm";

const TermPage = (props) => {

  return (
    <>
      <SearchForm terms={props.terms}/>
    </>
  )
}

export default TermPage
