import React, { useState, useEffect, memo } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";

const ListItem = memo(({ name,price,address,description }) => {
  return (
    <View style={itemStyles.container}>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{address}</Text>
      <Text>{description}</Text>
    </View>
  );
});

ListItem.displayName = "ListItem";

//전체화면 담당
//아파트 데이터를 API로부터 가져와서 FlatList를 통해 렌더링

const ListScreen = () => { 
  const [loading, setLoading] = useState(true);
  const [carData, setCarData] = useState([ // test -> 나중에 API 들어오면 수정할예정
    { id:'1',name: 'apartmets',price:1000, address:'수원',description:'혜원이집' ,key: 1 },
    { id:'2', name:'apartements2',price:1000, address:'수원',description:'혜원이집' ,key: 2},
    { id:'3', name:'apartements3',price:1000, address:'',description:'' ,key: 3},
    { id:'4', name:'apartements4',price:1000, address:'',description:'' ,key: 4},
    { id:'5', name:'apartements5',price:1000, address:'수원',description:'혜원이집' ,key: 5}

   
  ]);

  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => { //API 가져와서 cardata 상태 업데이트
      try {
        const response = await getApartments();
        const fetchedData = response.data.map((item, index) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          address: item.address,
          description: item.description,
          key: index.toString() // 유일한 key로 설정
        }));
        setCarData(fetchedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  // FlatList가 각 아이템을 렌더링
  // item 객체를 받아서 ListItem 컴포넌트를 렌더링
  const renderItem = ({ item }) => 
  <ListItem 
  name={item.name} 
  price={item.price}
  address={item.address}
  description={item.description}

  />;

  
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
 

  return (
    <FlatList
      data={carData}
      renderItem={renderItem}
      keyExtractor={(item) => item.key.toString()} // key는 유일한 값이어야 하므로 id 사용
      ListFooterComponent={() => (
        <View style={screenStyles.footerContainer}>
          <Text>고객센터   </Text>
          <Text>아파트</Text>
        </View>
      )}
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
