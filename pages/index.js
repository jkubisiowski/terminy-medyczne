import Link from 'next/link'
import groq from 'groq'
import client from '../client'

const Index = (props) => {
    const { terms = [] } = props
    return (
        <div>
            <h1>Welcome to a blog!</h1>
            {terms.map(
                ({ _id, name = '', slug = '', _updatedAt = '' }) =>
                    slug && (
                        <li key={_id}>
                            <Link href="/term/[slug]" as={`/term/${slug.current}`}>
                                <a>{name}</a>
                            </Link>{' '}                            
                        </li>
                    )
            )}
        </div>
    )
}

Index.getInitialProps = async () => ({
    terms: await client.fetch(groq`*[_type == "term"]`)
})

export default Index