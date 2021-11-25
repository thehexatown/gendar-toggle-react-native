import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {TouchableOpacity, View} from 'react-native';
import GradientText from './GradientText';
import Colors from '../theme/color';
import {wp} from '../helpers/Responsiveness';
import Fonts from '../theme/fonts';

const Tab = ({title, selected, onPress, gradient, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[
          gradient ? Colors.Primary : Colors.Grey,
          gradient ? Colors.Secondary : Colors.Grey,
        ]}
        {...props}
        style={styles.container}>
        <View style={styles.btn}>
          <GradientText style={styles.title}>{title}</GradientText>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = {
  container: {
    marginTop: wp(3),
    width: wp(26),
    height: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btn: {
    backgroundColor: 'white',
    width: wp(25.5),
    height: wp(14.5),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontFamily: Fonts.Regular,
    fontSize: wp(4),
  },
};
