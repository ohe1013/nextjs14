const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 5000);
  });
  const res = await fetch(URL);
  const data = await res.json();
  return data;
}

export default async function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const movies = await getMovies();
  return (
    <div>
      it's parent
      {JSON.stringify(movies)}
      {children}
    </div>
  );
}
