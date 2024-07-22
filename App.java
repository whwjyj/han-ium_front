import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '/Users/joyongju/test2/login.js';

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Input />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
  },
});

export default App;