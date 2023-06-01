export default function CommentForm({ onSubmitComment }) {
    
    function handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const comment = form.elements.comment.value;
  
      onSubmitComment(comment);
  
      form.reset()
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="comment">Your Comment:</label> <br />
        <textarea rows="3" id="comment" name="comment" /> <br />
        <button type="submit">Submit</button>
      </form>
    );
  }