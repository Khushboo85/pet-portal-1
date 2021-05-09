import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import fire from '../../../firebase';
import { RootState } from '../../../reducer';
import useStyles from './styles';

const AddPet = () => {
  const classes = useStyles();
  const [saving, setSaving] = useState(false);
  const user = useSelector((state: RootState) => state.appState.user);
  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      setSaving(true);
      if (user) {
        await fire
          .firestore()
          .collection('pet')
          .doc()
          .set({
            uid: user.uid,
            petName,
            breed,
            type,
            petSize,
            createdDate: moment().format('YYYY-MM-DD'),
          });
      }
      setSaving(false);
    } catch (error) {
      alert(error.message);
      setSaving(false);
    }
  }
  const [petName, setPetName] = useState('');
  const [breed, setBreed] = useState('');
  const [type, setType] = useState('');
  const [petSize, setPetSize] = useState('');

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Pet Details
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="petName"
              variant="outlined"
              required
              fullWidth
              id="petName"
              label="Pet Name"
              autoFocus
              value={petName}
              onChange={(event: any) => {
                setPetName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="breed"
              label="Breed"
              name="breed"
              autoComplete="breed"
              value={breed}
              onChange={(event: any) => {
                setBreed(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="type"
              label="Type"
              name="type"
              autoComplete="type"
              value={type}
              onChange={(event: any) => {
                setType(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="petSize"
              label="Pet Size"
              id="petSize"
              autoComplete="petSize"
              value={petSize}
              onChange={(event: any) => {
                setPetSize(event.target.value);
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
          disabled={saving}
        >
          {!saving && 'Save Details'}
          {saving && 'saving...'}
        </Button>
      </form>
    </div>
  );
};
export default AddPet;
