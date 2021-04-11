import * as React from 'react';
import {Appbar, Title} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: '#00aaff',
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
