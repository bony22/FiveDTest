import { Text, View } from 'react-native'
import React, { Component } from 'react'
import AllListCharacter from './app/Screens/AllListCharacter'
import AddedFav from './app/Screens/AddedFav'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import store from './app/Redux/Store'
import { Provider } from 'react-redux';





const ScreenStack = createStackNavigator(
  {

    AllListCharacter: AllListCharacter,
    AddedFav: AddedFav,

  },
  {
    initialRouteName: 'AllListCharacter',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(ScreenStack);


export default class App extends React.Component {
  render() {
    return (

      <Provider store={store}>
        <AppContainer />
      </Provider>




    )

  }
}
