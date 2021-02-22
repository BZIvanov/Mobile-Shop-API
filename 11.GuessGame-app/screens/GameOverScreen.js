import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';

const GameOverScreen = ({ rounds, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <BodyText>Game Over</BodyText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          resizeMode='cover'
          style={styles.image}
        />
      </View>
      <BodyText customStyles={styles.result}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </BodyText>
      <MainButton onPress={onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7, // this calculation runs only once, for example it won't recalculate on device rotation
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  },
  result: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default GameOverScreen;
