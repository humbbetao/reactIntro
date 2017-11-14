import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Components1 from './app/components/Components2/Components2';

export default class MyApp extends Component{

  render(){
    return(
      <View>
       <Components2 />
      </View>
    );
  }
}


AppRegistry.registerComponent('MyApp', () => MyApp);