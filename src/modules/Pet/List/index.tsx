import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import fire from '../../../firebase';
import { RootState } from '../../../reducer';
import PetTable from '../table';
import { getFormattedPetList } from './helper';
import { PetData } from './types';

const PetList = () => {
  const [petList, setPetList] = useState<PetData[]>([]);
  const user = useSelector((state: RootState) => state.appState.user);

  async function editPet(pet: PetData) {
    console.log(pet);
  }
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
    getPets();
  }, [user]);

  return (
    <Grid>
      <PetTable list={petList} editPet={editPet} />
    </Grid>
  );
};

export default PetList;
