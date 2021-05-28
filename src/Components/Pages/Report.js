import React, { useState, useRef } from 'react';
import Form from 'Components/UI/Form';
import PrimaryBtn from 'Components/UI/PrimaryBtn';

function Report() {
  const productInputRef = useRef();
  const notesInputRef = useRef();

  const sumbitHandler = (e) => {
    e.preventDefault();

    const selectedProduct = productInputRef.current.value;
    const enteredNotes = productInputRef.current.value;
  };

  return (
    <Form className='report' onSubmit={sumbitHandler}>
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
