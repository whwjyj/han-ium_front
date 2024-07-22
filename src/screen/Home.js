import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';


import Search from '../components/Search';
import ListScreen from '../components/ListScreen';
import styles from '../components/Bstyles';
import BottomBar from '../components/bottomtabbar';


const Stack = createStackNavigator();



const HomeScreen = ({ navigation }) => {
    return (
      <ScrollView >
        <View>
          <Search />
        <ListScreen />
        </View>
  
  
  
          {/*<View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.containers}>
              <Text>최신순</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sec_containers}>
              <Text >인기순</Text>
    </TouchableOpacity> */}
          <BottomBar />
      </ScrollView>
    );
  };
  
export default HomeScreen; 