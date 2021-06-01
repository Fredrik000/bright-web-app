import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from 'store/auth-context';
import Card from 'Components/UI/Card';
import Header from 'Components/UI/Header';
import PrimaryBtn from 'Components/UI/PrimaryBtn';
import LearningIcon from '../../images/icons/report-repair.png'
import VideoIcon from '../../images/icons/video.png'

function Welcome(props) {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Header>
        <h1>Welcome!</h1>
        <p>Small explantation detaling what this is for</p>
      </Header>
      <div className='welcome'>
        {authCtx.isLoggedIn && (
          <Card>
            <h1>Report repairs</h1>
            <img className={'cardImg'} src={LearningIcon} alt='report' />
            <p>Small explantation detaling what this is for </p>
            <Link to='/report'>
              <PrimaryBtn className='blue'>Start</PrimaryBtn>
            </Link>
          </Card>
        )}

        <Card>
          <h1>Watch repair videos</h1>
          <img className={'cardImg'} src={VideoIcon} alt='videos' />
          <p>Small explantation detaling what this is for </p>
          <Link to='/learningportal'>
            <PrimaryBtn className='blue'>Start</PrimaryBtn>
          </Link>
        </Card>
      </div>
    </>
  );
}

export default Welcome;
