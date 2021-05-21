import React from 'react';

function Form() {
  return (
<<<<<<< HEAD:src/components/Form.js
    <div className='form'>

=======
    <div className='report-form'>
>>>>>>> master:src/Components/Report.js
      <h1>Repair</h1>
      <p>Small explantation detaling what this is for</p>

        <form>
        <div>
          <label htmlFor='name'></label>
          <input type='text' placeholder='Your name' id='name' />
        </div>
        <div>
          <label htmlFor='product'></label>
          <select id='product' >
              <option value="" disabled selected>Product</option>
               </select>
        </div>
        <div>
          <label htmlFor='part'></label>
          <select id='part' >
              <option value="" disabled selected>Part replaced</option> </select>
        </div>
        <div>
          <label htmlFor='notes'></label>
          <input type='textarea' id='notes' placeholder='Notes'/>
        </div>
      </form>
      <button>Send</button>
    </div>
  );
}

export default Form;
