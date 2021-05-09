import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import { PetData } from './List/types';
import { Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
interface Props {
  list: PetData[];
  editPet: (pet: PetData) => {};
}
export default function PetTable(props: Props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>Name</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Type</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Breed</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Size</Typography>
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
          {props.list.map((pet) => (
            <TableRow key={pet.id}>
              <TableCell component="th" scope="row">
                {pet.petName}
              </TableCell>
              <TableCell align="right">{pet.type}</TableCell>
              <TableCell align="right">{pet.breed}</TableCell>
              <TableCell align="right">{pet.petSize}</TableCell>
              <TableCell align="right">{pet.createdDate}</TableCell>
              <TableCell align="right">
                <EditIcon
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    props.editPet(pet);
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
