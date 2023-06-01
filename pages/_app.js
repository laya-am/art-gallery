import GlobalStyle from "../styles";
import useSWR from "swr";
import { useArtPiecesStore } from "../stores/artPiecesStore";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const url = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const setPieces = useArtPiecesStore((state) => state.setPieces);
  
  const { data: pieces , error, isLoading } = useSWR(url, fetcher)
  
  useEffect(() => {
    setPieces(pieces || []);
  }, [setPieces, pieces]);
  
  const [favPieces, setFavPieces] = useState([])

  function handleFavs(slug){
    setFavPieces((favPieces) => {
      // find the favPiece in the state
      const favPiece = favPieces.find((favPiece) => favPiece.slug === slug);
      // if the favPiece is already in the state, toggle the isFav property
      if (favPiece) {
        return favPieces.map((favPiece) =>
        favPiece.slug === slug ? { ...favPiece, isFav: !(favPiece.isFav) } : favPiece
        );
      }
      // if the favPiece is not in the state, add it with isFunny set to true
      return [...favPieces, { slug, isFav: true }];
      
    });
    console.log(favPieces)
    // return favPieces;
  }

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component onFavs={handleFavs} favPieces={favPieces} {...pageProps} />
      </Layout>
    </>
  );
}
