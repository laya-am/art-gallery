import styled from "styled-components";

const StyledButton= styled.button`
margin: 20px;
font-size: 10px;
border-radius:10px;
padding: 10px
`
const StyledListItem= styled.div`
  list-style-type: none;
  display: flex;
  `

export default function Comments({comments, onRemoveComment}) {

  function handleRemove(id) {
    onRemoveComment(id)
  }
  return (
    <ul>
      {comments?.map((comment) => {
        return (
          <StyledListItem key={comment.id}>
              <p>{comment.text}</p>
              <StyledButton onClick={() => handleRemove(comment.id)}>X</StyledButton>
          </StyledListItem>
        );
      })}
    </ul>
  );
}

