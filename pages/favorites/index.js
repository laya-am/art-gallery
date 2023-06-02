import ArtPieces from "../../components/ArtPieces";
import { useArtPiecesStore } from "../../stores/artPiecesStore";
import ArtPiecesPreview from "../../components/ArtPiecesPreview";
import styled from "styled-components";

const StyledListItem= styled.li`
  list-style-type: none
  `
const StyledParent= styled.ul`
display: flex;
flex-direction:column;
gap: 100px;
`

export default function FavoritesPage({favPieces, onFavs}) {
    const pieces = useArtPiecesStore((state) => state.pieces);
    const filtered= favPieces?.filter((favPiece) => (favPiece.isFav))
    console.log("filtered array",filtered);

    const heartedPieces= filtered.map(element => {
      const favSlug= element.slug;
      return pieces.filter(piece => piece.slug === favSlug)
    });
    console.log("heartedPieces", heartedPieces);
    return (
    <div>
        <h2>Favorites</h2>
        <StyledParent>
        {heartedPieces?.map((painting) => {
          return (
              <StyledListItem key={painting[0].slug}>
                  <ArtPiecesPreview
                    artist={painting[0].artist}
                    title={painting[0].name}
                    image={painting[0].imageSource}
                    slug={painting[0].slug}
                    onFavs={onFavs}
                    favPieces={favPieces}
                  />
              </StyledListItem>
          )
        })}
      </StyledParent>
    </div>
    );
}