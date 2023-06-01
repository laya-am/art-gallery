import Spotlight from "../components/Spotlight";
import { useArtPiecesStore } from "../stores/artPiecesStore";

export default function SpotlightPage({onFavs, favPieces}) {
  const pieces = useArtPiecesStore((state) => state.pieces);

  function getRandomPiece(pieces) {
    const randomNumber = Math.floor(Math.random() * pieces.length);
    return pieces[randomNumber];
  }

  if (pieces.length === 0) {
    return <div>loading...</div>;
  }

  const randomPiece = getRandomPiece(pieces);

  return (
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        title={randomPiece.name}
        slug={randomPiece.slug}
        onFavs={onFavs}
        favPieces={favPieces}
      />
  );
}