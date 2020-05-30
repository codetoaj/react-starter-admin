import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  title:{
    textAlign: 'center',
    padding: 30
  },
  loginTitle: {
    textAlign: 'center',
    padding: 10
  },
  loginForm: {
    backgroundColor: '#dddddd',
    width: 300,
    margin: 'auto',
    textAlign: 'center',
    padding: 30,
    borderRadius: 15
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Login = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');
    if (!email) {
      setEmailError('Please enter valid email!');
    } else if (!password) {
      setPasswordError('Please enter valid password');
    } else {
      localStorage.setItem('starterUser', JSON.stringify({email}));
      history.push('/dashboard');
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h4" gutterBottom>
          React Starter Admin
        </Typography>
      </div>
      <div className={classes.loginTitle}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
      </div>
      <div className={classes.loginForm}>
        <div>
          <TextField
            error={emailError !== ''}
            helperText={emailError}
            id="standard-basic" 
            label="Email" 
            value={email} 
            onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div>
          <TextField
            error={passwordError !== ''}
            helperText={passwordError}
            id="standard-basic" 
            label="Password" 
            type="password" 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<VpnKeyIcon />}
            onClick={() => handleLogin()}
          >
            Login
          </Button>
        </div>
        <div>
          <Button
            color="primary"
            startIcon={<MoodBadIcon />}
          >
            Forgot Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);