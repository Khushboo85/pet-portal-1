import { Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import AddPet from './Add';
import PetList from './List';

const PetHome = () => {
  return (
    <>
      <Container component="main" maxWidth="sm">
        <AddPet />
      </Container>
      <Divider />
      <Container component="main" maxWidth="md">
        <PetList />
      </Container>
    </>
  );
};
export default PetHome;
