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
import colors from './assets/colors/colors'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.imageContainer}>
            <Image 
            style={styles.image}
            source={require('./assets/Grouphome.png')}
            />
          </View>
          <View>
            <TextInput 
            style={styles.textInput}
            placeholder='Enter your email'
            />
          </View>
          <View>
            <TextInput 
            style={styles.textInput}
            placeholder='Enter your password'
            />
          </View>
          <View style={{marginLeft:30,marginRight:30}}>
            <Pressable style={styles.button} onPress={() => console.log('Pressed')}>
              <Text style={styles.text}>Login</Text>
            </Pressable>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },  
  image:{
    width: 242,
    height: 182
  },
  imageContainer:{
    alignItems:'center',
    paddingTop: 100,
    marginBottom: 30
  },
  textInput:{
    padding: 10,
    color:'#000000',
    backgroundColor:'#ffffff',
    marginLeft:30,
    marginRight:30,
    borderRadius:10,
    height: 45,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    marginBottom:20,
    fontSize:18,
    fontFamily:'DMSans-Regular'
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: colors.button,
  },
  text:{
    color: 'white',
    fontSize:18,
    fontFamily:'DMSans-Regular'
  },
});

export default App;
