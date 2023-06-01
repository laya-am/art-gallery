import ArtPiecesPreview from "../ArtPiecesPreview";

export default function ArtPieceDetails({image, title, artist, year, genre}) {
    return (
        <ArtPiecesPreview artist ={artist} title={title} image={image}></ArtPiecesPreview>
        <p>{year}</p> 
        <p>{genre}</p>
        <button href>back</button>
    )

}