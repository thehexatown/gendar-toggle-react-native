import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Tab from './Tab';
import {wp} from '../helpers/Responsiveness';
import Fonts from '../theme/fonts';
import GradientText from './GradientText';

const Genders = ({genders, choose, onPress, onChooseAll}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowApart}>
        <GradientText style={styles.title}>Gender</GradientText>
        <TouchableOpacity
          onPress={() => {
            onChooseAll();
          }}>
          <GradientText gradient={choose} style={styles.title}>
            Choose All
          </GradientText>
        </TouchableOpacity>
      </View>
      <View style={styles.rowApart}>
        {genders.map((item, ind) => {
          return (
            <Tab
              title={item.title}
              gradient={item.isSelected}
              onPress={() => onPress(item)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Genders;

const styles = {
  container: {
    border: '1px solid black',
    paddingTop: wp(12),
    paddingHorizontal: wp(6),
  },
  rowApart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    fontFamily: Fonts.Regular,
    fontSize: wp(4),
  },
};
