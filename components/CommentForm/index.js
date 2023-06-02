import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export default function CommentForm({ onSubmitComment }) {
    
    function handleSubmit(event) {
      event.preventDefault();
      const comment = event.target.elements.comment.value;
      onSubmitComment(comment);
      event.target.reset()
    }
  
    return (
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="comment">Your Comment:</label>
        <textarea rows="3" id="comment" name="comment" /> 
        <button type="submit">Submit</button>
      </StyledForm>
    );
  }