export interface PetData {
  breed: string;
  createdDate: string;
  petName: string;
  petSize: string;
  type: string;
  uid: string;
  id: string;
}

export interface BookingDataInterface {
  id: string;
  pet: string;
  arrival: string;
  departure: string;
  status: string;
  fee: string;
  receipt: string;
  createdOn: string;
}
