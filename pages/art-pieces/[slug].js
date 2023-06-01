import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useArtPiecesStore } from "../../stores/artPiecesStore";

function getPieceBySlug(pieces, slug) {
    return pieces.find((piece) => piece.slug === slug);
}

export default function ArtPieceSlug() {
    const router = useRouter();
    const {slug} = router.query;
    // const {
    //     query: { slug },
    //     // push: routerPush,
    // } = useRouter();

    const pieces = useArtPiecesStore((state) => state.pieces);
    const piece = getPieceBySlug(pieces, slug);

    if (!piece) {
      return (
        <div>nothing to show</div>
      );
    }

    return (
        <ArtPieceDetails 
            image={piece.imageSource} 
            title={piece.name} 
            artist={piece.artist} 
            genre={piece.genre} 
            year={piece.year}
            slug={slug}>   
        </ArtPieceDetails>
        
    )
}