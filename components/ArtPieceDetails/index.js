import ArtPiecesPreview from "../ArtPiecesPreview";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import Link from "next/link";
import { useArtPiecesInfo } from "../../stores/artPiecesInfo";
import styled from "styled-components";

const StyledDivColors = styled.div`
  display: flex;
`;

const StyledDivCircle = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.color || "white"};
  border-radius: 50%;
`;

export default function ArtPieceDetails({image, title, artist, year, genre, colors, slug, favPieces, onFavs}) {
    const comments = useArtPiecesInfo((state) => state.comments);
    const addComment = useArtPiecesInfo((state) => state.addComment);
    const removeComment = useArtPiecesInfo((state) => state.removeComment);
    const commentsBySlug = comments?.filter((comment) => comment.slug == slug)

    function handleSubmitComment(comment) {
        addComment(comment, slug);
    }
    function handleRemoveComment(id) {
        removeComment(id);
    }

    return (
        <div>
        <ArtPiecesPreview 
            artist ={artist} 
            title={title} 
            image={image} 
            slug={slug} 
            favPieces={favPieces} 
            onFavs={onFavs}>
        </ArtPiecesPreview>
        <p>{year}</p> 
        <p>{genre}</p>
        <StyledDivColors>
                {colors?.map((color, i) => (
                    <StyledDivCircle
                        key={i}
                        color={color}
                    />
                ))}
        </StyledDivColors>
        <Link href="/art-pieces">
            <button>
                back
            </button>
        </Link>
        <CommentForm onSubmitComment={handleSubmitComment}/>
        <Comments comments={commentsBySlug} onRemoveComment={handleRemoveComment}/>
        </div>
    )

}