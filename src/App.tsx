import { useEffect } from 'react';
import { Provider } from 'react-redux'
import firebase from './services/firebase';

import Routes from './routes';
import store from './store';

import './styles/global.scss'
import { loginSucess } from './store/modules/auth/actions';

function App() {
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      console.log('Current User', user);

      if(user) store.dispatch(loginSucess(user));
    });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
