import { StyleSheet, Text, View, StatusBar,SafeAreaView } from 'react-native'
import React from 'react';
import colors from '../assets/colors/colors';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'flex-end'}}>
        <Text style={styles.textStyle}>Manage Users{"\n"}
        from your fingertip</Text>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.background,
  }, 
  textStyle:{
    color: colors.accents,
    fontSize: 14,
    marginRight:20,
    marginTop: 10
  }
})