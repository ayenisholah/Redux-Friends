import React from 'react';

function LoginView(props) {
  const onLogin = (event) => {
    event.preventDefault();

    const usernameInput = event.target['username'];
    const passwordInput = event.target['password'];
    const credentials = {
      username: usernameInput.value,
      password: passwordInput.value
    };

    usernameInput.value
      && passwordInput.value
      && props.login(credentials)
      .then(() => {
        props.history.push('/');
      });
  }
  return (
    <div className='form-container'>
      <form onSubmit={onLogin} className='login-form'>
        <input name='username' value='shola' placeholder='Username' readOnly />
        <input type='password' value='1234' name='password' placeholder='Password' readOnly />
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
}

export default LoginView;
