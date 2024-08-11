import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Search from '../components/Search';
import ListScreen from '../components/ListScreen';
import BottomBar from '../components/bottomtabbar';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Search />
        <ListScreen />
      </ScrollView>
      <BottomBar style={styles.bottomBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 20, 
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderColor: '#e7e7e7',
  },
});

export default HomeScreen;
