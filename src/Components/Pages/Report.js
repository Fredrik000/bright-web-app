import React, { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Form from 'Components/UI/Form';
import PrimaryBtn from 'Components/UI/PrimaryBtn';

function Report(props) {
  const productInputRef = useRef();
  const notesInputRef = useRef();

  const authCtx = useContext(AuthContext);

  // POST data to database, using Firebase API
  async function submitHandler(e) {
    e.preventDefault();

    // Add form validation here

    const form = {
      email: authCtx.loggedInEmail,
      product: productInputRef.current.value,
      parts: [],
      notes: notesInputRef.current.value,
    };
    const response = await fetch(
      'https://bright-web-app-default-rtdb.europe-west1.firebasedatabase.app/repair-forms.json',
      {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <Form className='report' onSubmit={submitHandler}>
      <h1>Repair</h1>
      <p>Small explantation detaling what this is for</p>
      <div>
        <select id='product' ref={productInputRef}>
          <option value='Product 1'>Product 1</option>
          <option value='Product 2'>Product 2</option>
          <option value='Product 3'>Product 3</option>
        </select>
      </div>
      <div className='cb-container'>
        <label htmlFor='part'></label>
        <input type='checkbox' id='part1' value='part1' />
        <label htmlFor='part1'>Part 1</label> <br />
        <input type='checkbox' id='part2' value='part2' />
        <label htmlFor='part2'>Part 2</label> <br />
        <input type='checkbox' id='part3' value='part3' />
        <label htmlFor='part3'>Part 3</label> <br />
      </div>
      <div>
        <textarea
          type='textarea'
          id='notes'
          placeholder='Notes (optional)'
          ref={notesInputRef}
        />
      </div>
      <PrimaryBtn className='blue' type='submit'>
        Submit
      </PrimaryBtn>
    </Form>
  );
}

export default Report;
