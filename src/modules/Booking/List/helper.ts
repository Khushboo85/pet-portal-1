import { BookingDataInterface, PetData } from './types';

export const getFormattedBookingList = (docs: Array<any>) => {
  const list: Array<BookingDataInterface> = [];
  docs.map((doc) => {
    const data: BookingDataInterface = doc.data();
    list.push({
      ...data,
      id: doc.id,
    });
  });
  return list;
};

