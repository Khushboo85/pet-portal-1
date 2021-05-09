import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import CustomAutoComplete from '../../../components/autocomplete';
import fire from '../../../firebase';
import { RootState } from '../../../reducer';
import { getFormattedPetList } from '../../Pet/List/helper';
import { PetData } from '../../Pet/List/types';
import { getPetOptions } from './helper';
import useStyles from './styles';
import { PetOptionInterface } from './types';

const AddBooking = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((state: RootState) => state.appState.user);
  const [petList, setPetList] = useState<PetData[]>([]);
  const [petOptions, setPetOptions] = useState<Array<PetOptionInterface>>([]);
  const [selectedPet, setSelectedPet] = useState<PetOptionInterface | null>(
    null
  );
  async function getPets() {
    if (user) {
      try {
        await fire
          .firestore()
          .collection('pet')
          .where('uid', '==', user.uid)
          .onSnapshot((snapshot) => {
            const list = getFormattedPetList(snapshot.docs);
            setPetList(list);
          });
      } catch (error) {
        alert(error.message);
      }
    }
  }

  useEffect(() => {
    if (petList.length) {
      setPetOptions(getPetOptions(petList));
    }
  }, [petList]);

  useEffect(() => {
    getPets();
  }, [user]);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if(selectedPet && user){
      fire
      .firestore()
      .collection('booking').add({
        pet:selectedPet.id,
        uid:user.uid,
        arrival,
        departure,
        clientNotes,
        status,
        fee,
      })
    }
  };
  const [arrival, setArrival] = useState(null);
  const [departure, setDeparture] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [status, setStatus] = useState('booked');
  const [fee, setFee] = useState('');
  const [receipt, setReceipt] = useState('');
  function handlePetChange(pet: PetOptionInterface | null) {
    setSelectedPet(pet);
  }
  return (
    <form className={classes.form} noValidate onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomAutoComplete
            id={'pet-list'}
            value={selectedPet}
            options={petOptions}
            label={'Pet'}
            onChange={handlePetChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="arrival"
            name="arrival"
            variant="outlined"
            required
            fullWidth
            id="arrival"
            label="Arrival Date"
            autoFocus
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event: any) => {
              setArrival(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="departure"
            label="Departure Date"
            name="departure"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event: any) => {
              setDeparture(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="clientNotes"
            label="Client Notes"
            name="clientNotes"
            autoComplete="clientNotes"
            value={clientNotes}
            onChange={(event: any) => {
              setClientNotes(event.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Save Details
      </Button>
    </form>
  );
};
export default AddBooking;
