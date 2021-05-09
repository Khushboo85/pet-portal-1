import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import EditBooking from 'src/modules/Booking/Edit';
import { APP_PAGES } from '../../constants/pages';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import BookingHome from '../Booking';
import PetHome from '../Pet';
const Routes = () => {
  return (
    <Switch>
      <Route exact path={APP_PAGES.SIGN_IN} component={SignIn}></Route>
      <Route exact path={APP_PAGES.SIGN_UP} component={SignUp}></Route>
      <Route exact path={APP_PAGES.PET_HOME} component={PetHome}></Route>
      <Route
        exact
        path={APP_PAGES.BOOKING_HOME}
        component={BookingHome}
      ></Route>
      <Route
        exact
        path={APP_PAGES.BOOKING_EDIT}
        component={EditBooking}
      ></Route>
      <Route exact path={APP_PAGES.ROOT}>
        <Redirect to={APP_PAGES.SIGN_IN}></Redirect>
      </Route>
    </Switch>
  );
};

export default Routes;
