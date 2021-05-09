import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import MiniDrawer from '../../components/Drawer';
import { APP_PAGES } from '../../constants/pages';
import { RootState } from '../../reducer';
import { getUserFromLocalStorage } from '../Auth/helper';
import Routes from '../Routes';
import { logOutUser, setLoginStatus, setUserData } from './actions';
import { LoginStatus } from './constants';
const App = () => {
  const appState = useSelector((state: RootState) => state.appState);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!appState.user) {
      const userFromLocalStorage = getUserFromLocalStorage();
      if (userFromLocalStorage) {
        dispatch(setUserData(userFromLocalStorage));
        dispatch(setLoginStatus(LoginStatus.loggedIn));
      }
    }
  }, []);
  const handleClick = () => {
    if (appState.loginStatus === LoginStatus.loggedIn) {
      dispatch(logOutUser());
      localStorage.clear();
    }
    history.push(APP_PAGES.SIGN_IN);
  };
  return (
    <>
      <MiniDrawer
        loginStatus={appState.loginStatus}
        handleClick={handleClick}
      />
      <Routes />
    </>
  );
};
export default App;
