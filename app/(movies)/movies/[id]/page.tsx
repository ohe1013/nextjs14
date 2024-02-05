const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovie(id) {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}
async function getVideo(id) {
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
  // throw new Error("something went wrong");
}
export default async function SSSD(props) {
  const { id } = props.params;
  const video = await getVideo(id);
  const movie = await getMovie(id);
  return (
    <>
      <h1>{movie.title}</h1>
      <span>{JSON.stringify(video)}</span>
    </>
  );
}
