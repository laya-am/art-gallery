import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const StyledLabel = styled.label`
margin: 20px 0;
`
const StyledButton= styled.button`
margin: 20px;
font-size: 20px;
border-radius:10px;
padding: 10px
`

export default function CommentForm({ onSubmitComment }) {
    
    function handleSubmit(event) {
      event.preventDefault();
      const comment = event.target.elements.comment.value;
      onSubmitComment(comment);
      event.target.reset()
    }
  
    return (
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="comment">Your Comment:</StyledLabel>
        <textarea rows="3" id="comment" name="comment" /> 
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    );
  }