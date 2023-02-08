import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

//Context
import SideBarStateContextProvider from './context/SideBarStateContext';

//Components
import NavBar from './components/NavBar/NavBar';
import Store from './components/Store/Store';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <Provider store={store}>
      <SideBarStateContextProvider>
        <CssBaseline>
          <Router className="App">
            <NavBar />
            <Routes>
              <Route path='/store' element={<Store />} />
            </Routes>
            <SideBar anchor="right" />
          </Router>
        </CssBaseline>
      </SideBarStateContextProvider>
    </Provider >
  );
}

export default App;
