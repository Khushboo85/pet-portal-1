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
  petId: string;
  petName: string;
  arrival: string;
  departure: string;
  status: string;
  clientNotes: string;
  fee: string;
  receipt: string;
  createdOn: string;
}
