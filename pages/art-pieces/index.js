import ArtPieces from "../../components/ArtPieces";
import { useArtPiecesStore } from "../../stores/artPiecesStore";

export default function ArtPiecesPage({onFavs, favPieces}) {
  const pieces = useArtPiecesStore((state) => state.pieces);

  return (
    <div>
      <ArtPieces onFavs={onFavs} pieces={pieces} favPieces={favPieces} />
    </div>
  );
}