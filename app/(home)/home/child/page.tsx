const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 0);
  });
  const res = await fetch(URL);
  const data = await res.json();
  return data;
}

export default async function Movie(props) {
  const movies = await getMovies();

  return <div>{JSON.stringify(movies)}</div>;
}
