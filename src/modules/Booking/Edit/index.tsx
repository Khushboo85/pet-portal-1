import { Box, Container } from '@material-ui/core';
import React from 'react';
import DynamicForm, { Fields } from 'src/components/DynamicForm';

const EditBooking = () => {
  const fields: Fields[] = [
    {
      id: 'booking-id',
      label: 'Booking Id',
      name: 'booking-id',
      value: '',
      type: 'text',
    },
    {
      id: 'booking-id',
      label: 'Booking Id',
      name: 'booking-id',
      value: '',
      type: 'text',
    }
  ];
  const initValues = {
    'booking-id': '',
  };
  const handleSubmit = (values: { 'booking-id': string }) => {
    console.log(values);
  };
  return (
    <Container component="main" maxWidth="md">
      <Box
        style={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <DynamicForm
          fields={fields}
          submitAction={handleSubmit}
          validation={null}
          submitLabel={'save'}
          initialValues={initValues}
        ></DynamicForm>
      </Box>
    </Container>
  );
};
export default EditBooking;
