import React from 'react';


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



export default Friend;