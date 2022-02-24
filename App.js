import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NotesScreen from './src/screens/NotesScreen';
import Sentences from './src/screens/Sentences';
import {Screens} from './src/config/NavigationConfig';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.NotesScreen}
        component={NotesScreen}
        options={{
          title: 'Note',
        }}
      />
      <Stack.Screen
        name={Screens.Sentences}
        component={Sentences}
        options={{
          title: 'Sentences',
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
