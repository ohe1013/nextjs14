import Link from "next/link";
import Movie from "../../../src/components/movie";
import styles from "../../../styles/home.module.css";
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
}

export default async function MoviePage(props) {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        ></Movie>
      ))}
    </div>
  );
}
