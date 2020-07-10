import React from 'react'
import TermCard from "../TermCard";
import AuthorCard from "../AuthorCard";
import SearchForm from "../SearchForm";
import FrequentTerms from "../FrequentTerms";

const frequentTerms = [
  {name: "Wirus", url: "/"},
  {name: "Implant", url: "/"},
  {name: "Resekcja", url: "/"},
]

const TermPage = (props) => {


  return (
    <>
      <TermCard categories={props.term.categories} name={props.term.name} body={props.term.body}/>
      <AuthorCard authorName={props.term.authorName} authorImage={props.term.authorImage}/>
      <SearchForm terms={props.terms}/>
      <FrequentTerms terms={frequentTerms}/>
    </>
  )
}

export default TermPage
