import React from 'react';
import Navbar from 'Components/Navbar';
import Modal from 'Components/UI/Modal';
import LoginForm from 'Components/LoginForm';
import Subject from 'Components/Subject';
import Form from 'Components/Form';

function App() {
  return (
    <>
      <Modal />
      <Navbar />
      <LoginForm />
      <Subject />
      <Form />
    </>
  );
}
export default App;
