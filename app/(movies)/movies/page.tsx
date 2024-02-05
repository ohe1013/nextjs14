import Link from "next/link";

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
}

export default async function Movie(props) {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <p>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </p>
      ))}
    </div>
  );
}
