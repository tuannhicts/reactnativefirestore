import React, {useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import NotesScreen from '../screens/NotesScreen';
import Sentences from '../screens/Sentences';
import {Screens} from '../config/NavigationConfig';

const Stack = createStackNavigator();
const AppNavigation = () => {
  const NavigationView = useMemo(() => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Screens.NotesScreen}>
          <Stack.Screen name={Screens.NotesScreen} compoment={NotesScreen} />
          <Stack.Screen name={Screens.Sentences} compoment={Sentences} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }, []);
  return <React.Fragment>{NavigationView}</React.Fragment>;
};

export default AppNavigation;
