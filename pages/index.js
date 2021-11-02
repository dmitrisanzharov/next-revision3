import styles from '../styles/Home.module.css';
import Meta from '../components/Meta';
import SingleArticle from '../components/SingleArticle';
// import {server} from '../config/index';

export default function Home({data}) {
  return (
    <div>
      <Meta title='home page' />
      <h1>This is HOME</h1>

      {data.map((value, index)=> {
        return (
          <SingleArticle key={index} {...value} />
        )
      })}

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const data = await res.json();
  
  return {
    props: {
      data
    }
  }
}


// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const data = await res.json();
  
//   return {
//     props: {
//       data
//     }
//   }
// }