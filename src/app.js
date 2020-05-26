import React from 'react';
import './styles/app.scss';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default App;
