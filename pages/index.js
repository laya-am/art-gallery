import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const url = "https://example-apis.vercel.app/api/art";

export default function HomePage() {

  const { data, error, isLoading } = useSWR(url, fetcher)
  console.log("beginning", data );

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  if (!data){
    return;
  }

  function getRandomPiece(data) {
    const randomNumber = Math.floor(Math.random() * data.length);
    return data[randomNumber];
  }
  const spotlight = getRandomPiece(data);

  return (
    <div>
      <ArtPieces data = { data } >Art Pieces</ArtPieces>
      <Spotlight       
        image={spotlight.imageSource}
        artist={spotlight.artist}
        title={spotlight.name}
      />
    </div>
  );
}
