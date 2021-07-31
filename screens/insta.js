import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
// import { LinearTextGradient } from 'react-native-text-gradient'

export default class Insta extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text]}>Instagram</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    color: '#000000',
  },
})
