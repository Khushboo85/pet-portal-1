import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import fire from '../../../firebase';
import { RootState } from '../../../reducer';
import BookingTable from '../table';
import { getFormattedBookingList } from './helper';
import { BookingDataInterface } from './types';

export default function BookingList() {
  const [bookingList, setBookingList] = useState<BookingDataInterface[]>([]);
  const user = useSelector((state: RootState) => state.appState.user);

  async function getBookings() {
    if (user) {
      try {
        await fire
          .firestore()
          .collection('booking')
          .where('uid', '==', user.uid)
          .onSnapshot((snapshot) => {
            const list = getFormattedBookingList(snapshot.docs);
            setBookingList(list);
          });
      } catch (error) {
        alert(error.message);
      }
    }
  }

  useEffect(() => {
    getBookings();
  }, [user]);

  return <BookingTable list={bookingList} />;
}
