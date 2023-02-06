import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import NavBar from './components/NavBar/NavBar';
import Store from './components/Store/Store';

function App() {
  return (
    <CssBaseline>
      <Router className="App">
        <NavBar />
        <Routes>
          <Route path='/store' element={<Store/>}/>
        </Routes>
      </Router>
    </CssBaseline>
  );
}

export default App;
