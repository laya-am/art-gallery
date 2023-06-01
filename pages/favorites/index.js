import ArtPieces from "../../components/ArtPieces";
import { useArtPiecesStore } from "../../stores/artPiecesStore";


export default function FavoritesPage() {
    const pieces = useArtPiecesStore((state) => state.pieces);

    return (
    <div>
        <h2>Favorites</h2>
        <ArtPieces pieces={pieces} />
    </div>
    );
}

