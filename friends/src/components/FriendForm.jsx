import React from 'react';


const FriendForm = (props) => {
  const onAddFriend = (event) => {
    const nameInput = event.target['name'];
    const ageInput = event.target['age'];
    const emailInput = event.target['email'];
    event.preventDefault();

    const newFriend = {
      name: nameInput.value,
      age: ageInput.value,
      email: emailInput.value
    };

    nameInput.value
      && ageInput.value
      && emailInput.value
      && props.addFriend(newFriend);

    nameInput.value = '';
    ageInput.value = '';
    emailInput.value = '';
  }

  return (
    <div className='form-container'>
      <form onSubmit={onAddFriend} className='friend-form'>
        <input name='name' placeholder='name here...' />
        <input name='age' placeholder='age' />
        <input name='email' placeholder='email' />
        <button type='submit'>Add Friend</button>
      </form>
    </div>
  );
}

export default FriendForm;