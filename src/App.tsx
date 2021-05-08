import { Provider } from 'react-redux'

import store from './store';

import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
