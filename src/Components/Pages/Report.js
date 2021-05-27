import React from 'react';
import Form from 'Components/UI/Form';
import PrimaryBtn from 'Components/UI/PrimaryBtn';

function Report() {
  return (
    <div className='form-container'>
      <Form className='report'>
        <h1>Repair</h1>
        <p>Small explantation detaling what this is for</p>
        <div className='form-group'>
          <input type='text' placeholder='Your name' id='name' />
          <label htmlFor='name'>Your name</label>
        </div>
        <div>
          <select id='product'>
            <option value=''>Product 1</option>
            <option value=''>Product 2</option>
            <option value=''>Product 3</option>
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
          <textarea type='textarea' id='notes' placeholder='Notes' />
        </div>
        <PrimaryBtn className='blue'>Send</PrimaryBtn>
      </Form>
    </div>
  );
}

export default Report;
