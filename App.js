import React from 'react';
import {StyleSheet, View} from 'react-native';

import InputScreen from './src/screens/InputScreen';

const App = () => {
  return (
    <View style={styles.root}>
      <InputScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
