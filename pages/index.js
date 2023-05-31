import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

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
  return (
    <div>
      <ArtPieces data = { data } >Art Pieces</ArtPieces>
    </div>
  );
}
