import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import theme from '../theme';

const GameOverScreen = ({ rounds, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <BodyText variant='h1'>Game Over</BodyText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          resizeMode='cover'
          style={styles.image}
        />
      </View>
      <BodyText variant='h4' customStyles={styles.result}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </BodyText>
      <MainButton onPress={onRestart}>START NEW GAME</MainButton>
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
    marginVertical: theme.spacing(2),
    width: Dimensions.get('window').width * 0.5, // this calculation runs only once, for example it won't recalculate on device rotation
    height: Dimensions.get('window').width * 0.5,
    borderRadius: (Dimensions.get('window').width * 0.5) / 2,
    borderWidth: 3,
    borderColor: theme.palette.black,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  highlight: {
    color: theme.palette.primary,
    ...theme.typography.h4,
  },
  result: {
    textAlign: 'center',
    marginVertical: theme.spacing(1.2),
  },
});

export default GameOverScreen;
