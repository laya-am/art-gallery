import ArtPiecesPreview from "../ArtPiecesPreview";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import Link from "next/link";
import { useArtPiecesInfo } from "../../stores/artPiecesInfo";

export default function ArtPieceDetails({image, title, artist, year, genre, slug}) {
    const commentsBySlug = useArtPiecesInfo((state) => state.commentsBySlug);
    const addComment = useArtPiecesInfo((state) => state.addComment);
    const comments = commentsBySlug[slug];

    function handleSubmitComment(comment) {
        addComment(slug, comment);
    }

    return (
        <div>
            <ArtPiecesPreview artist ={artist} title={title} image={image}></ArtPiecesPreview>
            <p>{year}</p> 
            <p>{genre}</p>
            <Link href="/art-pieces">
                <button>
                    back
                </button>
            </Link>
            <CommentForm onSubmitComment={handleSubmitComment}/>
            <Comments comments={comments}/>
        </div>
    )

}



