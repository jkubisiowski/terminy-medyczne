import React from 'react'
import Link from "next/link";
import "./HomePage.scss"
import "../../styles/styles.scss"
import SearchForm from "../SearchForm";
import Banner from "../Banner";

const HomePage = (props) => {

  return (
    <div>
      <h1 className="HomePage__title">Sprawdź, co lekarz miał na myśli</h1>
      <SearchForm terms={props.terms}/>
      <div className="HomePage__otherTerms">
        <div className="HomePage__or">lub</div>
        <button className="HomePage__buttonSecondary">sprawdź najczęściej wyszukiwane hasła</button>
      </div>
      <Banner/>
      {/*{props.terms.map(*/}
      {/*  ({ _id, name = '', slug = '', _updatedAt = '' }) =>*/}
      {/*    slug && (*/}
      {/*      <li key={_id}>*/}
      {/*        <Link href="/term/[slug]" as={`/term/${slug.current}`}>*/}
      {/*          <a>{name}</a>*/}
      {/*        </Link>{' '}*/}
      {/*      </li>*/}
      {/*    )*/}
      {/*)}*/}
    </div>
  )

}

export default HomePage
