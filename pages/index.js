import Spotlight from "../components/Spotlight";
import { useArtPiecesStore } from "../stores/artPiecesStore";

export default function SpotlightPage() {
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
      />
  );
}