/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Platform,
  Text,
  TextInput,
  Button,
  useColorScheme,
  Pressable,
  View,
  Image
} from 'react-native';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './redux/store';
import { Provider } from 'react-redux';
const Stack = createNativeStackNavigator();
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const token = useSelector((state) => state.user.token)
  return (
    <NavigationContainer>
        <Stack.Navigator>
          {token ? 
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
           : 
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          }
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const Wrapper = () => {
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
};


export default Wrapper;
