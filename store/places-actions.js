import * as FileSystem from 'expo-file-system';

export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, image) => { //both params are string
  return async dispatch => {
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName; //document directory delete when app uninstall

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      });
    } catch (err) {
      console.log(err);
      throw err;
    }

    dispatch({ type: ADD_PLACE, placeData: { title, imageUri: newPath } });
  };
};
