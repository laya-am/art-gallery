import ArtPiecesPreview from "../ArtPiecesPreview";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import Link from "next/link";
import { useArtPiecesInfo } from "../../stores/artPiecesInfo";

export default function ArtPieceDetails({image, title, artist, year, genre, slug}) {
    const comments = useArtPiecesInfo((state) => state.comments);
    const addComment = useArtPiecesInfo((state) => state.addComment);

    function handleSubmitComment(comment) {
        addComment(comment, slug);
        console.log(commentsBySlug);
    }

    const commentsBySlug = comments?.filter((comment) => comment.slug == slug)

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
            <Comments comments={commentsBySlug}/>
        </div>
    )

}



