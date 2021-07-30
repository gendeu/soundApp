import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Menu from './src/view/screens/Menu.js';
import List from './src/view/screens/List.js';
import Scheduled from './src/view/screens/Scheduled.js';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: "black" };
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              title: 'DEO SOUNDS MENU', //Set Header Title
              headerStyle: {
                backgroundColor: 'black', //Set Header color
              },
              headerTintColor: 'lightgray', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
                color: '#667e99'
              },
            }}
          />
          <Stack.Screen
            name="List"
            component={List}
            options={({ route }) => ({ 
              title: route.params.name,
              headerStyle: {
                backgroundColor: 'black', //Set Header color
              },
              headerTintColor: 'lightgray', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
                color: '#667e99'
              },
            })}
          />
          <Stack.Screen
            name="Scheduled"
            component={Scheduled}
            options={({ route }) => ({ 
              title: route.params.name,
              headerStyle: {
                backgroundColor: 'black', //Set Header color
              },
              headerTintColor: 'lightgray', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
                color: '#667e99'
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
