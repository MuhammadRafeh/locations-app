import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  UIManager
} from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as placesActions from '../store/places-actions';
import ImagePicker from '../components/ImagePicker';

const NewPlaceScreen = props => {
  const [titleValue, setTitleValue] = useState('');
  const [imageUri, setImageUri] = useState();

  const dispatch = useDispatch();

  const titleChangeHandler = text => {
    // you could add validation
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue, imageUri));
    props.navigation.goBack();
  }

  const takeImage = uri => {
    setImageUri(uri);
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImagePicker onTakeImage={takeImage} />
        <Button title="Save Place" color={Colors.primary} onPress={savePlaceHandler} />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place'
};

export default NewPlaceScreen;

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});
