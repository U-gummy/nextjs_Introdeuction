import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "./seo";

export default function Home({ results }) {
  const router = useRouter();
  const handleClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  }

  return (
    <div className="content">
      <Seo title={"Home"} />
      <ul>
        {results && results.map((movie) => (
          <li onClick={() => handleClick(movie.id, movie.original_title)} key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>
                <strong>{movie.original_title}</strong>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {display:flex;flex-wrap:wrap;}
        li {width:calc(50% - 20px);margin:10px;}
        img {display:block;width:100%;}
        strong {display:block;margin-top:10px;}
      `}</style>
    </div >
  )
}

export async function getServerSideProps() {
  const { results } = await (await fetch("http://localhost:3000/api/movies")).json();
  return {
    props: { results }
  };
}
