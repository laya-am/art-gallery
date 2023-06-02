import ArtPiecesPreview from "../ArtPiecesPreview";
import Link from "next/link";

export default function ArtPieceDetails({image, title, artist, year, genre, favPieces, onFavs}) {
    return (
        <div>
        <ArtPiecesPreview artist ={artist} title={title} image={image} favPieces={favPieces} onFavs={onFavs}></ArtPiecesPreview>
        <p>{year}</p> 
        <p>{genre}</p>
        <Link href="/art-pieces">
            <button>
                back
            </button>
            </Link>
        </div>
    )

}