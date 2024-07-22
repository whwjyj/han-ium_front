import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Search = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (text) => {
    setSearch(text);
  };

  return (
    <View style={styles.view}>
      
      <TextInput
        style={styles.searchBar}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 80,
    marginBottom:10
    
  },
});


export default Search;
