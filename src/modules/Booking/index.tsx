import { Divider } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useSelector } from "react-redux";
import { UserRole } from "src/constants/roles";
import { RootState } from "src/reducer";
import DatePicker from "../../components/datePicker";
import AddBooking from "./Add";
import BookingList from "./List";
import useStyles from "./styles";

export default function BookingHome() {
  const classes = useStyles();
  const userRole = useSelector((state: RootState) => state.appState.user?.role);
  return (
    <Container component="main">
      <Container maxWidth="sm">
        <CssBaseline />
        {userRole && userRole === UserRole.User && <AddBooking />}
        <Divider />
      </Container>
      <Container maxWidth="lg">
        <BookingList />
      </Container>
    </Container>
  );
}
