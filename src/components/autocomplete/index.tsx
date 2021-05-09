import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { PetOptionInterface } from '../../modules/Booking/Add/types';
interface Props {
  id: string;
  value: {
    id: string;
    label: string;
  } | null;
  options: {
    id: string;
    label: string;
  }[];
  label: string;
  onChange: any;
}
export default function CustomAutoComplete(props: Props) {
  return (
    <Autocomplete
      id={props.id}
      options={props.options}
      getOptionLabel={(option) => option.label}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label={props.label} variant="outlined" fullWidth/>
      )}
      onChange={(event: any, value: PetOptionInterface | null) => {
        props.onChange(value);
      }}
      value={props.value}
      fullWidth
    />
  );
}
