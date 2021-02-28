import { ADD_PLACE, SET_PLACE } from './places-actions';
import Place from '../models/place';

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(action.placeData.id.toString(), action.placeData.title, action.placeData.imageUri);
      return {
        places: state.places.concat(newPlace)
      };
    case SET_PLACE: 
      return {
        places: action.payload.map(obj => new Place(obj.id.toString(), obj.title, obj.imageUri))
      }
    default:
      return state;
  }
};
