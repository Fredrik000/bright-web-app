import PrimaryBtn from 'Components/UI/PrimaryBtn';
import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from 'store/auth-context';

const UserProfile = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCobvg1vKK83g536cUukr51CqxIJun1cBc',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application.json',
        },
      }
    ).then((res) => {
      history.replace('/');
    });
  };

  return (
    <section className='profile'>
      <form onSubmit={submitHandler}>
        <h1>Your User Profile</h1>
        <div>
          <input
            type='password'
            id='new-password'
            minLength='7'
            placeholder='New Password'
            ref={newPasswordInputRef}
          />
        </div>
        <div>
          <PrimaryBtn>Change Password</PrimaryBtn>
        </div>
      </form>
    </section>
  );
};

export default UserProfile;
