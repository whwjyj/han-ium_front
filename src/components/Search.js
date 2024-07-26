import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { searchApartments } from './api';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const updateSearch = (text) => {
    setSearch(text);
  };

  const handleSearch = async () => {
    if (search.length > 0) {
      try {
        const response = await searchApartments(search);
        setResults(response.data);
        setError(null);
      } catch (err) {
        setError('오류가 발생하였습니다. 잠시만 기다려주세요');
      }
    }
  };

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <View style={styles.view}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={25} color="#000" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="검색어를 입력해주세요"
          onChangeText={updateSearch}
          value={search}
          onSubmitEditing={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={false}
          multiline={false}
    
        />
        {isFocused && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearIconContainer}>
            <Icon name="close-circle-outline" size={25} color="#000" />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  searchContainer: {
    marginTop:5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    padding: 3,
  },
  searchBar: {
    flex: 1,
    padding: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  clearIconContainer: {
    padding: 5,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Search;
