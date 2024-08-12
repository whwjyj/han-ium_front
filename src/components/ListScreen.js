import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";

const ListItem = ({ name, price, address, description }) => {
  return (
    <View style={itemStyles.container}>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{address}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const ListScreen = () => {
  const [loading, setLoading] = useState(false);
  const [carData, setCarData] = useState([
    { id: '1', name: 'apartmets', price: 1000, address: '수원', description: '혜원이집' },
    { id: '2', name: 'apartements2', price: 1000, address: '수원', description: '혜원이집' },
    { id: '3', name: 'apartements3', price: 1000, address: '', description: '' },
    { id: '4', name: 'apartements4', price: 1000, address: '', description: '' },
    { id: '5', name: 'apartements5', price: 1000, address: '수원', description: '혜원이집' },
    { id: '6', name: 'apartements6', price: 1000, address: '수원', description: '혜원이집' },
    { id: '7', name: 'apartements7', price: 1000, address: '수원', description: '혜원이집' },
    { id: '8', name: 'apartements8', price: 1000, address: '수원', description: '혜원이집' },
    { id: '9', name: 'apartements9', price: 1000, address: '수원', description: '혜원이집' }
  ]);

  // 주석 부분 유지
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getApartments();
  //       const fetchedData = response.data.map((item, index) => ({
  //         id: item.id,
  //         name: item.name,
  //         price: item.price,
  //         address: item.address,
  //         description: item.description,
  //         key: index.toString() // 유일한 key로 설정
  //       }));
  //       setCarData(fetchedData);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={carData}
      renderItem={({ item }) => (
        <ListItem
          key={item.id}
          name={item.name}
          price={item.price}
          address={item.address}
          description={item.description}
        />
      )}
      keyExtractor={item => item.id}
      ListFooterComponent={ 
        <View style={styles.footerContainer}>
          <Text>고객센터  </Text>
          <Text>아파트</Text>
        </View>
      }
    />
  );
};

const itemStyles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
});

const styles = StyleSheet.create({
  footerContainer: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: "#CCCC",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ListScreen;
