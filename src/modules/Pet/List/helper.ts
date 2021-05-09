import { PetData } from './types';

export const getFormattedPetList = (docs: Array<any>) => {
  const list: Array<PetData> = [];
  docs.map((doc) => {
    const data: PetData = doc.data();
    list.push({
      ...data,
      id: doc.id,
    });
  });
  return list;
};
