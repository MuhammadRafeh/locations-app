export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, imageUri ) => { //both params are string
  return { type: ADD_PLACE, placeData: { title, imageUri } };
};
