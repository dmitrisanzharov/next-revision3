import React from 'react'
import Link from 'next/link'

const SingleArticle = (props) => {


    const {id, title, body} = props;

    return (
        <Link href={`/articles/${id}`}>
            <a>
                <hr />
                <h1>Article number {id}</h1>
                <h3>{title}</h3>
                <p>{body}</p>
            </a>
        </Link>
    )
}

export default SingleArticle
