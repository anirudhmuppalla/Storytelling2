
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
let customFonts={
  'Bubblegum-Sans':require('../assets/fonts/BubblegunSans-Regular.ttf'),

}

export default class Feed extends Component{
  constructor(props){
    super(props);
    fontsLoaded:false
  }
  async _loadFontsAsync(){
    await Font.loadAsync(customFonts);
    this.setState({fontsLoaded:true})
  }
  componentDidMount(){
    this._loadFontsAsync()
  }
 render(){
   if(!this.state.fontsLoaded){
     return <AppLoading/>
   }else{
  return (
    <View style={styles.container}>
      <Text>feeds</Text>
    </View>
  );
}}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
