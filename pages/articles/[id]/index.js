import React from 'react'
// import {useRouter} from 'next/router'
import Link from 'next/link'
// import {server} from '../../../config/index'
import Meta from '../../../components/Meta';

const index = ({data}) => {

    // const router = useRouter(); 

    const {id, title, body} = data;


    return (
        <div>
            <Meta title={title} />
            <h1>Article number {id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>

            <hr />
            <Link href='/'>
                <a>Back home link</a>
                </Link>
        </div>
    )
}

export default index


// export const getServerSideProps = async (context) => {

 
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const data = await res.json();
//     return {
//         props: {data}
//     }
// }


export const getStaticProps = async (context) => {
   
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const data = await res.json();
    return {
        props: {data}
    }
}


export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`); 
    const articles = await res.json();

    const ids = articles.map(value=> value.id);
    // console.log(ids); 

    const paths = ids.map(value=> ({params: {id: value.toString()}}));
    // console.log(paths);

    return {
        paths,
        fallback: false
    }


}

// export const getStaticProps = async (context) => {
   
//     const res = await fetch(`${server}/api/articles/${context.params.id}`);
//     const data = await res.json();
//     return {
//         props: {data}
//     }
// }


// export const getStaticPaths = async () => {
//     const res = await fetch(`${server}/api/articles`); 
//     const articles = await res.json();

//     const ids = articles.map(value=> value.id);
//     // console.log(ids); 

//     const paths = ids.map(value=> ({params: {id: value.toString()}}));
//     // console.log(paths);

//     return {
//         paths,
//         fallback: false
//     }


// }