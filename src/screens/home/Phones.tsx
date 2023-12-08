import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MyShoppingCard from '../../components/MyShoppingCard';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPhone, selectPhones } from '../../slices/phonesSlice';

const Phones = () => {

  const phones = useSelector(selectPhones)
  const dispatch = useDispatch();

  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth * phones.length;
  
  useEffect(() => {
    //@ts-ignore
    dispatch(getPhone())
  }, []);

  const renderCard = ({ item }) => {
    return (
      <MyShoppingCard
        key={item.id}
        description={item.description}
        url={item.url}
        price={item.price}
        type={item.type}
        title={item.title}
        denemeWidth={screenWidth}
      />
    );
  };

  return (
    <View style={styles.container}>
        <FlatList
          data={phones}
          horizontal={true}
          renderItem={renderCard}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{  width: itemWidth * 0.51 }}
        />
    </View>
  );
};

export default Phones;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
