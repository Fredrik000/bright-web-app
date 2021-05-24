import PrimaryBtn from 'Components/UI/PrimaryBtn';
import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from 'store/auth-context';
import Form from 'Components/UI/Form';

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
    <div className='form-container'>
      <Form onSubmit={submitHandler}>
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
          <PrimaryBtn>Submit</PrimaryBtn>
        </div>
      </Form>
    </div>
  );
};

export default UserProfile;
