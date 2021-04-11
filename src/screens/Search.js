import {template} from '@babel/core';
import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Button, TextInput, Card} from 'react-native-paper';
import Header from '../components/Header';

const Search = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const apiUrl = query =>
    `https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query=${query}&locationType=city&format=json`;

  const fetchCities = text => {
    setCity(text);
    if (text !== '')
      fetch(apiUrl(text))
        .then(item => {
          return item.json();
        })
        .then(cityData => {
          if (cityData.location) setCities(cityData.location.address);
        })
        .catch(err => {
          console.log('[ERROR] ' + err);
        });
  };

  return (
    <View style={styles.pageContanier}>
      <Header name="Search Screen" />

      <TextInput
        label="City Name"
        theme={{
          colors: {
            primary: '#00aaff',
          },
        }}
        value={city}
        onChangeText={text => fetchCities(text)}
      />
      <Button
        icon="content-save"
        mode="contained"
        style={styles.button}
        theme={{
          colors: {
            primary: '#00aaff',
          },
        }}
        onPress={() => {
          console.log('Pressed');
        }}>
        <Text style={styles.buttonText}>Press Me</Text>
      </Button>
      <FlatList
        data={cities}
        renderItem={({item}) => {
          return (
            <Card style={styles.card}>
              <Text>{item}</Text>
            </Card>
          );
        }}
        keyExtractor={item => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContanier: {
    flex: 1,
  },
  button: {
    margin: 20,
  },
  buttonText: {
    color: 'white',
  },
  card: {
    margin: 2,
    padding: 12,
  },
});

export default Search;
