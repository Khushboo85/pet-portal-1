import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { BookingDataInterface } from './List/types';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router';
import { APP_PAGES } from 'src/constants/pages';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
interface Props {
  list: BookingDataInterface[];
}
export default function BookingTable(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  const editBooking = (booking: BookingDataInterface) => {
    history.push(APP_PAGES.BOOKING_EDIT);
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>ID</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Pet</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Arrival</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Departure</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Status</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Client Notes</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Reciept</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Created On</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Edit</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell component="th" scope="row">
                {booking.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {booking.petName}
              </TableCell>
              <TableCell align="right">{booking.arrival}</TableCell>
              <TableCell align="right">{booking.departure}</TableCell>
              <TableCell align="right">{booking.status}</TableCell>
              <TableCell align="right">{booking.clientNotes}</TableCell>
              <TableCell align="right">{booking.receipt}</TableCell>
              <TableCell align="right">{booking.createdOn}</TableCell>
              <TableCell align="right">
                <EditIcon
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    editBooking(booking);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
