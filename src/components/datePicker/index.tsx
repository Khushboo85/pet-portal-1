import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import 'date-fns';
import React from 'react';

interface Props {
  value: string | null;
  [x: string]: any;
}

export default function DatePicker(props: Props) {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          {...props}
          disableToolbar
          format="MM/dd/yyyy"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          onChange={props.onChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
