const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovie(id) {
  console.log(`getMovie`);
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}
async function getVideo(id) {
  console.log(`getVideo`);
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
}
export default async function SSSD(props) {
  const { id } = props.params;
  const video = await getVideo(id);
  const movie = await getMovie(id);
  return <h1>{movie.title}</h1>;
}
