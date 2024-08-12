import React from 'react';
import { View, StyleSheet } from 'react-native';

import Search from '../components/Search';
import ListScreen from '../components/ListScreen';
import BottomBar from '../components/bottomtabbar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Search />
        <ListScreen />
      </View>
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  bottomBar: {
    height: 5, 
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default HomeScreen;
