import React, { useRef, useState, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Form from 'Components/UI/Form';
import PrimaryBtn from 'Components/UI/PrimaryBtn';
import ReportReceipt from 'Components/ReportReceipt';

function Report(props) {
  const productInputRef = useRef();
  const notesInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [receiptIsVisible, setReceiptIsVisible] = useState(false);
  const [checkboxIsValid, setCheckboxIsValid] = useState(true);
  const [error, setError] = useState(null);
  const [parts, setParts] = useState([]);

  // Add/Remove checkbox values to state
  const checkboxChangeHandler = (e) => {
    if (e.target.checked) {
      setParts([...parts, e.target.value]);
    } else {
      setParts(parts.filter((part) => part !== e.target.value));
    }
  };

  const hideReceiptHandler = () => {
    setReceiptIsVisible(false);
  };

  // POST data to database, using Firebase API
  const submitHandler = async (e) => {
    e.preventDefault();

    // Add form validation here
    if (!parts.length > 0) {
      setError('Please select 1 or more parts!');
      setCheckboxIsValid(false);
      return;
    }

    const form = {
      email: authCtx.loggedInEmail,
      product: productInputRef.current.value,
      parts: parts,
      notes: notesInputRef.current.value,
    };

    setIsLoading(true);

    try {
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

      // Transform JSON response into JS object
      const data = await response.json();

      // Error handling on response
      if (!response.ok) {
        let errorMessage = 'Something went wrong!';

        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
          throw new Error(errorMessage);
        }
      }
    } catch (err) {
      setError(error.message);
    }
    // We are no longer fetching data, and must update state accordingly
    setIsLoading(false);
    setReceiptIsVisible(true);
  };

  // Make checkbox field red if not validated
  const cbClass = checkboxIsValid ? 'cb-container' : 'cb-container invalid';

  // Content that is displayed on screen
  let content = <p>Please fill out form and click "Submit"</p>;
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Form className='report' onSubmit={submitHandler}>
      {receiptIsVisible && (
        <ReportReceipt hideReceiptHandler={hideReceiptHandler} />
      )}
      <h1>Repair</h1>
      {content}
      <div>
        <label className='report-form-label' htmlFor='product'>
          Products
        </label>
        <select id='product' ref={productInputRef}>
          <option value='Sunbell 2.0'>Sunbell 2.0</option>
          <option value='Product 2'>Product 2</option>
          <option value='Product 3'>Product 3</option>
        </select>
      </div>
      <div>
        <label className='report-form-label' htmlFor='parts'>
          Parts
        </label>
        <div className={cbClass} id='parts'>
          <input
            type='checkbox'
            id='part1'
            value='Part 1'
            onChange={checkboxChangeHandler}
          />
          <label htmlFor='part1'>Part 1</label> <br />
          <input
            type='checkbox'
            id='part2'
            value='Part 2'
            onChange={checkboxChangeHandler}
          />
          <label htmlFor='part2'>Part 2</label> <br />
          <input
            type='checkbox'
            id='part3'
            value='Part 3'
            onChange={checkboxChangeHandler}
          />
          <label htmlFor='part3'>Part 3</label> <br />
        </div>
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
