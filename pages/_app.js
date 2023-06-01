import GlobalStyle from "../styles";
import useSWR from "swr";
import { useArtPiecesStore } from "../stores/artPiecesStore";
import { useEffect } from "react";
import Layout from "../components/Layout";

const url = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const setPieces = useArtPiecesStore((state) => state.setPieces);
  const { data: pieces , error, isLoading } = useSWR(url, fetcher)
  console.log("beginning", pieces );

  useEffect(() => {
    setPieces(pieces || []);
  }, [setPieces, pieces]);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
