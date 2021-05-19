import React from 'react';

function Form() {
  return (
    <div>
      <h1>Repair</h1>
      <p>Small explantation detaling what this is for</p>
      <form>
        <div>
          <label htmlFor='name'></label>
          <input type='text' id='name' />
        </div>
        <div>
          <label htmlFor='product'></label>
          <select id='product' />
        </div>
        <div>
          <label htmlFor='part'></label>
          <select id='part' />
        </div>
        <div>
          <label htmlFor='notes'></label>
          <input type='textarea' id='notes' />
        </div>
      </form>
    </div>
  );
}

export default Form;
