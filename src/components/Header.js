import * as React from 'react';
import {Appbar, Title} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../utils/Colors';

const Header = props => {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: Colors.PRIMARY,
        },
      }}
      style={styles.barContainer}>
      <Title style={styles.barText}>{props.name}</Title>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  barText: {
    color: 'white',
  },
});

export default Header;
