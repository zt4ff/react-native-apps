import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import LottieView from 'lottie-react-native';

const App = () => {
  const coffettiRef = useRef<LottieView>(null);

  const triggerCoffetti = () => {
    coffettiRef.current?.play(0);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#e02d2d'} />
      <View style={styles.lottieContainer}>
        <LottieView
          ref={coffettiRef}
          source={require('./assets/christmas.json')}
          autoPlay={false}
          loop={false}
          style={styles.lottie}
        />
      </View>
      <TouchableOpacity style={styles.touch} onPress={triggerCoffetti}>
        <Text style={styles.text}>CLICK ME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  touch: {
    borderRadius: 18,
    borderColor: 'e02d2d',
    padding: 13,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    backgroundColor: '#1E7F53',
  },
  text: {
    color: 'white',
  },
  lottieContainer: {
    width: '100%',
    height: 600,
    position: 'relative',
    marginBottom: 30,
  },
  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    pointerEvents: 'none',
  },
});
