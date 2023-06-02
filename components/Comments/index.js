export default function Comments({comments, onRemoveComment}) {

  function handleRemove(id) {
    onRemoveComment(id)
  }
  return (
    <ul>
      {comments?.map((comment) => {
        return (
          <li key={comment.id}>
              <p>{comment.text}</p>
              <button onClick={() => handleRemove(comment.id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
}

