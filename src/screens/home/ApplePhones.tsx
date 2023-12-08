import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getIPhones } from '../../services/api';
import MyShoppingCard from '../../components/MyShoppingCard';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAppleIosPhone, selectAppleIosPhones } from '../../slices/appleIosPhones';

const ApplePhones = () => {

  const appleIosPhones = useSelector(selectAppleIosPhones);
  const dispatch = useDispatch();

  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth * appleIosPhones.length;

   useEffect(() => {
    //@ts-ignore
    dispatch(getAppleIosPhone())
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
      <View>
        <FlatList
          data={appleIosPhones}
          horizontal={true}
          renderItem={renderCard}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ width: itemWidth *  0.45 }}
        />
      </View>
    </View>
  );
};

export default ApplePhones;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
