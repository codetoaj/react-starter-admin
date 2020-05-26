import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/init.scss';

const Init = (props) => {
  const { history } = props;
  useEffect(()=> {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
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