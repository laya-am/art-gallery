import ArtPieces from "../../components/ArtPieces";
import { useArtPiecesStore } from "../../stores/artPiecesStore";
import ArtPiecesPreview from "../../components/ArtPiecesPreview";

export default function FavoritesPage({favPieces}) {
    const pieces = useArtPiecesStore((state) => state.pieces);
    const filtered= favPieces?.filter((favPiece) => (favPiece.isFav))
    console.log("filtered array",filtered);
    
    return (
    <div>
        <h2>Favorites</h2>
        <ul>
        
      </ul>
    </div>
    );
}