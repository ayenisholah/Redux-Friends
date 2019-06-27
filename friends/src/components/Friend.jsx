import React from 'react';
import styled from 'styled-components';

const Friend = (props) => {
  return (
    <StyledFriend>
      <h2 className='name'>{ props.friend.name }</h2>
      <p className='age'>{ props.friend.name }</p>
      <p className='email'>{ props.friend.email }</p>
      <div>
        <button onClick={() => props.deleteFriend(props.friend.id)}>Delete</button>
      </div>
    </StyledFriend>
  );
}

const StyledFriend = styled.div `
  margin: 12px;
  padding: 32px 16px;
  border: 2px solid white;
  border-radius: 5px;

  .name {
    margin-bottom: 8px;
    font-weight: bold
  }

  .age {
    margin-bottom: 8px;
  }

  .email {
    margin-bottom: 8px;
  }
`;

export default Friend;