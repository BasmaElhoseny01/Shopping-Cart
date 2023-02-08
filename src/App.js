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
import { ThemeProvider } from '@mui/system';
import theme from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SideBarStateContextProvider>
          <CssBaseline>
            <div className="App">
              <NavBar />
              <Store />
              <SideBar anchor="right" />
            </div>
          </CssBaseline>
        </SideBarStateContextProvider>
      </Provider >
    </ThemeProvider>
  );
}

export default App;
