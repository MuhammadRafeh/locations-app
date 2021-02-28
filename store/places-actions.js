import * as FileSystem from 'expo-file-system';
import { fetchData, insertData } from '../helpers/db';

export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACE = 'SET_PLACE';

export const addPlace = (title, image) => { //both params are string
  return async dispatch => {
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName; //document directory delete when app uninstall

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      });
      const res = await insertData(title, newPath, 'Pakistan', 132.3, 23);
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: res.insertId,
          title,
          imageUri: newPath
        }
      });
      console.log(res)
    } catch (err) {
      console.log(err);
      throw err;
    }

  };
};

export const setPlace = () => {
  return async dispatch => {
    const res = await fetchData();
    console.log(res);
    dispatch({
      type: SET_PLACE,
      payload: res.rows._array
    });
  }
}
