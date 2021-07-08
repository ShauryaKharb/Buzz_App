import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Facebook from './screens/fb'
import Insta from './screens/insta'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    )
  }
}

const AppContainer = createAppContainer(
  createBottomTabNavigator({
    Instagram: Insta,
    Facebook: Facebook,
  }),
)

const styles = StyleSheet.create({})
