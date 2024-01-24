import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const MainContext = createContext({});

export function useMainContext() {
  return useContext(MainContext);
}

export function MainProvider({ children }) {
  const [openDialogLiveDemo, setOpenLiveDemo] = useState(false);
  const handleOpenDialogLiveDemo = () => {
    setOpenLiveDemo(true);
  };

  const handleCloseDialogLiveDemo = () => {
    setOpenLiveDemo(false);
  };
  return (
    <MainContext.Provider
      value={{
        openDialogLiveDemo,
        handleOpenDialogLiveDemo,
        handleCloseDialogLiveDemo,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
MainProvider.propTypes = {
  children: PropTypes.node,
};
