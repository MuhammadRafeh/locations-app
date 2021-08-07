import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const PlaceDetailScreen = props => {

  const places = useSelector(state => state.places.places);

  const [place, setPlace] = useState(places.filter(item => item.title == props.navigation.getParam('placeTitle'))[0])

  console.log(place)

  return (
    <View>
      <View style={{ margin: 20, marginRight: 20, overflow: 'hidden', borderRadius: 15 }}>
        <Image source={{ uri: place.imageUri }} style={{ width: '100%', height: 400 }} />
      </View>
    </View>
  );
};

PlaceDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('placeTitle')
  };
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
