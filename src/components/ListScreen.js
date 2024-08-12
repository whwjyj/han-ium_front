import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from "react-native";
// import { getApartments } from './api'; // 백엔드와 연결 시 주석 해제

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

// 전체 화면 담당
// 아파트 데이터를 API로부터 가져와서 ScrollView를 통해 렌더링

const ListScreen = () => { 
  const [loading, setLoading] = useState(false); // loading을 false로 초기화
  const [carData, setCarData] = useState([ 
    // 초기 데이터
    { id:'1',name: 'apartmets',price:1000, address:'수원',description:'혜원이집', key: 1 },
    { id:'2', name:'apartements2',price:1000, address:'수원',description:'혜원이집', key: 2 },
    { id:'3', name:'apartements3',price:1000, address:'',description:'', key: 3 },
    { id:'4', name:'apartements4',price:1000, address:'',description:'', key: 4 },
    { id:'5', name:'apartements5',price:1000, address:'수원',description:'혜원이집', key: 5 }
  ]);

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
    <ScrollView>
      {carData.map(item => (
        <ListItem 
          key={item.id}
          name={item.name} 
          price={item.price}
          address={item.address}
          description={item.description}
        />
      ))}
      <View style={screenStyles.footerContainer}>
        <Text>고객센터   </Text>
        <Text>아파트</Text>
      </View>
    </ScrollView>
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

const screenStyles = StyleSheet.create({
  footerContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: "#CCCC",
    flexDirection: "row",
    paddingVertical: 30,
    paddingHorizontal: "35%",
  },
});

export default ListScreen;
