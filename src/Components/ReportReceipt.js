import React from 'react';
import Modal from 'Components/UI/Modal';
import PrimaryBtn from 'Components/UI/PrimaryBtn';

function ReportReceipt(props) {
  return (
    <Modal onClose={props.hideReceiptHandler}>
      <div className='report-receipt'>
        <h2>Your report has been successfully submitted! </h2>
        <PrimaryBtn className='blue' onClick={props.hideReceiptHandler}>
          Back
        </PrimaryBtn>
      </div>
    </Modal>
  );
}

export default ReportReceipt;
