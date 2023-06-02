import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useArtPiecesStore } from "../../stores/artPiecesStore";
import Link from "next/link";

export default function ArtPieceSlug({favPieces, onFavs}) {
    const pieces = useArtPiecesStore((state) => state.pieces);

    const router = useRouter();
    const {slug} = router.query;
    function getCurrentP(pieces) {
        const currentPiece = pieces.find((piece) => piece.slug === slug);
        return currentPiece

    }
    const currentPiece = getCurrentP(pieces)
    if (!pieces) {
        return null;
    }
console.log(currentPiece)

    return (
        <ArtPieceDetails image={currentPiece.imageSource} title={currentPiece.name} artist={currentPiece.artist} genre={currentPiece.genre} year={currentPiece.year} slug={currentPiece.slug} favPieces={favPieces} onFavs={onFavs}></ArtPieceDetails>
        
    )
}