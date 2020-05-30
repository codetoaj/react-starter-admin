import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/init.scss';
import { isAuthenticated } from '../helpers/auth';

const Init = (props) => {
  const { history } = props;
  useEffect(()=> {
    if (isAuthenticated()) {
      history.push('/dashboard')
    } else {
      history.push('/login')
    }
  }, []);
  return (
    <div className="init">
      <CircularProgress />
    </div>
  );
};

export default withRouter(Init);