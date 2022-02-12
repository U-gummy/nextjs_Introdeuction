import { useEffect, useState } from "react";
import Seo from "./seo";


export default function Home({results}) {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      setMovies(results);
      console.log('results: ', results);
    })();
  }, []);

  return (
    <div className="content">
      <Seo title={"Home"} />
      <ul>
        {/* {!movies && <h4>Loading...</h4>} */}
        {results && results.map((movie) => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <strong>{movie.original_title}</strong>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {display:flex;flex-wrap:wrap;}
        li {width:calc(50% - 20px);margin:10px;}
        img {display:block;width:100%;}
        strong {display:block;margin-top:10px;}
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const { results } = await (await fetch("http://localhost:3000/api/movies")).json();
  return {
    props: { results }
  };
}
