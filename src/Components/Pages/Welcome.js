import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from 'store/auth-context';
import Card from 'Components/UI/Card';
import Header from 'Components/UI/Header';
import PrimaryBtn from 'Components/UI/PrimaryBtn';
import LearningIcon from 'images/icons/report-repair.png';
import VideoIcon from 'images/icons/video.png';

function Welcome(props) {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Header>
        <h1>Welcome to our learning portal</h1>
        <p>Learn about our products or log in to write reports</p>
      </Header>
      <div className='welcome'>
        {authCtx.isLoggedIn && (
          <Card>
            <h1>Report repairs</h1>
            <img className={'cardImg'} src={LearningIcon} alt='report' />
            <p>Here you can report the repairs you have done </p>
            <Link to='/report'>
              <PrimaryBtn className='green'>Start</PrimaryBtn>
            </Link>
          </Card>
        )}

        <Card>
          <h1>Learning portal</h1>
          <img className={'cardImg'} src={VideoIcon} alt='videos' />
          <p>Here you can learn about all our different products </p>
          <Link to='/learningportal'>
            <PrimaryBtn className='green'>Start</PrimaryBtn>
          </Link>
        </Card>
      </div>
    </>
  );
}

export default Welcome;
