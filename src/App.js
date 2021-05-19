import React from 'react';
import Navbar from 'components/Navbar'
import LoginForm from 'components/LoginForm'
import Card from 'components/UI/Card';
import Form from 'components/Form';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <LoginForm/>
      <Card />
      <Form />
    </React.Fragment>
  )
export default App;
