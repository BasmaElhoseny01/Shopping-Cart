import {
    useState, createContext, useContext, useMemo,
  } from 'react';
  
// Context
export const SideBarStateContext = createContext();

function SideBarStateContextProvider(props) {
    const { children } = props;
  
    // State
    const [state, setState] = useState(false);
  
    const value = useMemo(() => ({
      state, setState
    }), [state, setState]);
  
    return (
      <SideBarStateContext.Provider value={value}>
        {children}
      </SideBarStateContext.Provider>
    );
  }

export const useSideBarStateContext = () => useContext(SideBarStateContext);
export default SideBarStateContextProvider;
