import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Facebook extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Facebook</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
