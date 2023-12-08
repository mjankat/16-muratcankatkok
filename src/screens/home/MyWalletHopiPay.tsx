import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHopiPayImage, selectHopiPayImage } from '../../slices/hopiPayImages';
import { getHopiPayButtonImage, selectHopiPayButtonImage } from '../../slices/hopiPayButtonImages';

const MyWalletHopiPay = () => {

  const hopiPayImageUrl = useSelector(selectHopiPayImage)
  const hopiPayButtonImageUrl = useSelector(selectHopiPayButtonImage)

  const dispatch = useDispatch();

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const buttonWidthRatio = 0.39;
  const buttonHeightRatio = 0.06;
  const buttonLeftRatio = 0.10;
  const buttonTopRatio = 0.24;

  useEffect(() => {
    //@ts-ignore
    dispatch(getHopiPayImage())
    //@ts-ignore
    dispatch(getHopiPayButtonImage())
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.hopipay}>
        <Image style={styles.hopipayImage} source={{uri: hopiPayImageUrl}} />
      </View>
      <TouchableOpacity
        style={{
          ...styles.hopipayButton,
          width: windowWidth * buttonWidthRatio,
          height: windowHeight * buttonHeightRatio,
          left: windowWidth * buttonLeftRatio,
          top: windowHeight * buttonTopRatio,
        }}
      >
        <Image style={styles.hopipayButtonImage} source={{uri: hopiPayButtonImageUrl}} />
      </TouchableOpacity>
    </View>
  )
}

export default MyWalletHopiPay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  hopipay: {
    marginVertical: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  hopipayImage: {
    width: '100%',
    height: '84%',
    resizeMode: 'stretch',
    borderRadius: 28,
  },
  hopipayButton: {
    position: 'absolute',
    borderRadius: 12,
  },
  hopipayButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 12,
  },
})
