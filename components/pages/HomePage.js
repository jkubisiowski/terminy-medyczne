import React from 'react'
import Link from "next/link";
import "../../styles/styles.scss"
import SearchForm from "../SearchForm";

const HomePage = (props) => {

  return (
    <div>
      <SearchForm/>
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
