import { PetData } from '../../Pet/List/types';

export const getPetOptions = (petList: PetData[]) => {
  return petList.map((pet) => {
    return {
      id: pet.id,
      label: pet.petName,
    };
  });
};
