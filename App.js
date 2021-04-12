import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from './src/utils/Colors';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;
              if (route.name === 'home') {
                iconName = 'home-city';
              } else if (route.name === 'search') {
                iconName = 'city';
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  color={color}
                  size={size}
                />
              );
            },
          })}
          tabBarOptions={{
            activeBackgroundColor: Colors.PRIMARY,
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            options={{tabBarLabel: 'Main City'}}
            name="home"
            component={Home}
            initialParams={{city: 'London'}}
          />
          <Tab.Screen
            options={{tabBarLabel: 'Search City'}}
            name="search"
            component={Search}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
