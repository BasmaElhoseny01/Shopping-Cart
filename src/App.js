import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { Provider } from 'react-redux';
import store from './redux/store';

import NavBar from './components/NavBar/NavBar';
import Store from './components/Store/Store';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline>
        <Router className="App">
          <NavBar />
          <Routes>
            <Route path='/store' element={<Store />} />
          </Routes>
        </Router>
      </CssBaseline>
    </Provider>
  );
}

export default App;
