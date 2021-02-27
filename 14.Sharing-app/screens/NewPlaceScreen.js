import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
import ImgPicker from '../components/ImgPicker';
import LocationPicker from '../components/LocationPicker';
import { addPlace } from '../store/actions/places';
import theme from '../theme';

const NewPlaceScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedLocation, setSelectedLocation] = useState();
  const dispatch = useDispatch();

  const titleChangeHandler = (text) => {
    setTitle(text);
  };

  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const selectedLocationHandler = (location) => {
    setSelectedLocation(location);
  };

  const savePlaceHandler = () => {
    dispatch(addPlace(title, selectedImage, selectedLocation));
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          value={title}
          onChangeText={titleChangeHandler}
        />
        <ImgPicker onImageTaken={imageTakenHandler} />
        <LocationPicker onSelectLocation={selectedLocationHandler} />
        <Button
          title='Save Place'
          color={theme.palette.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
