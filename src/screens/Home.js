import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {API_KEY} from '../../keys';
import Header from '../components/Header';
import Colors from '../utils/Colors';
import { capitalize } from '../utils/StringCapitalizer';

const Home = props => {
  const [city, setCity] = useState(props.route.params.city);

  const api_url = city =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const weatherIconUrl = icon => `https://openweathermap.org/img/w/${icon}.png`;

  const [info, setInfo] = useState({
    name: 'loading',
    temp: 'loading',
    humidity: 'loading',
    description: 'loading',
    icon: 'loading',
  });

  useEffect(() => {
    getWeather();
  }, []); // [] => Call as componentDidMuont

  const getWeather = () => {
    const {city: myCity} = props.route.params;
    fetch(api_url(myCity))
      .then(res => res.json())
      .then(data => {
        setInfo({
          name: data.name,
          temp: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        });
      })
      .catch(err => {
        console.log('Somethig went wrong...');
        console.log(err);
      });
  };

  if(props.route.params.city !== city) {
    setCity(props.route.params.city);
    getWeather();
  }

  return (
    <View style={styles.pageContainer}>
      <Header name="Weather APP" />
      <View>
        <View style={styles.center}>
          <Title style={styles.title}>{info.name}</Title>
          <Image
            style={styles.image}
            source={{uri: weatherIconUrl(info.icon)}}
          />
        </View>
        <Card style={styles.card}>
          <Title style={styles.cardTitle}>Temperature - {info.temp}</Title>
        </Card>
        <Card style={styles.card}>
          <Title style={styles.cardTitle}>Humidity - {info.humidity}</Title>
        </Card>
        <Card style={styles.card}>
          <Title style={styles.cardTitle}>
            Description - {capitalize(info.description)}
          </Title>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  title: {
    color: Colors.PRIMARY,
    marginTop: 30,
    fontSize: 30,
  },
  image: {
    width: 120,
    height: 120,
  },
  card: {
    margin: 5,
    padding: 12,
  },
  cardTitle: {
    color: Colors.PRIMARY,
  },
  center: {
    alignItems: 'center',
  },
});

export default Home;
