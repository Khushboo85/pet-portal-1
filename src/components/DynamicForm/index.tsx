import { Box, Button } from '@material-ui/core';
import { Field, Form, Formik, FormikProps } from 'formik';
import React from 'react';

export interface Fields {
  name: string;
  label: string | JSX.Element;
  type: string;
  value: number | string | boolean | Date | object | null;
  id: string;
  disabled?: boolean;
  options?: any;
  disableFuture?: boolean;
  disablePast?: boolean;
  hidden?: boolean;
}

interface FormProps {
  fields: Fields[];
  validation: any;
  submitAction: Function;
  submitLabel: string;
  initialValues: any;
}

const DynamicForm = (props: FormProps) => {
  const renderFields = (formik: FormikProps<any>, inputs: Fields[]) => {
    return inputs.map((input) => {
      switch (input.type) {
        case 'text':
          return (
            <Box key={input.id}>
              <Field name={input.name} type={input.type}></Field>
            </Box>
          );
      }
    });
  };
  return (
    <Formik
      onSubmit={(values) => {
        props.submitAction(values);
      }}
      initialValues={props.initialValues}
      validationSchema={props.validation}
    >
      {(formik) => {
        return (
          <Form>
            {renderFields(formik, props.fields)}
            <Button variant="contained" color="primary" type="submit">
              {props.submitLabel}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default DynamicForm;
