import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';


export default class App extends React.Component{
  state ={
    value: 0,
    total_taps: 0,
  
  }

incrementValue1 = () => {
  this.setState({
    value: this.state.value + 100,
    total_taps: this.state.total_taps + 1,
   

  })
  console.log("Value: " + (this.state.value +1))
}
decrementValue1= () => {
  this.setState({
    value: this.state.value - 100,
    total_taps: this.state.total_taps - 1,
   
  })
  console.log("Value: " + (this.state.value +1))
}
resetValue1= () => {
  this.setState({
    value: this.state.value = 0,
    total_taps: this.state.total_taps = 0,
   
  })
  console.log("Value: " + (this.state.value +1))
}
incrementValue2 = () => {
  this.setState({
    value: this.state.value + 50,
    total_taps: this.state.total_taps + 1,
   

  })
  console.log("Value: " + (this.state.value +1))
}
decrementValue2= () => {
  this.setState({
    value: this.state.value - 50,
    total_taps: this.state.total_taps - 1,
   
  })
  console.log("Value: " + (this.state.value +1))
}
resetValue2= () => {
  this.setState({
    value: this.state.value = 0,
    total_taps: this.state.total_taps = 0,
   
  })
  console.log("Value: " + (this.state.value +1))
}
incrementValue3 = () => {
  this.setState({
    value: this.state.value + 80,
    total_taps: this.state.total_taps + 1,
   

  })
  console.log("Value: " + (this.state.value +1))
}
decrementValue3= () => {
  this.setState({
    value: this.state.value - 80,
    total_taps: this.state.total_taps - 1,
   
  })
  console.log("Value: " + (this.state.value +1))
}
resetValue3= () => {
  this.setState({
    value: this.state.value = 0,
    total_taps: this.state.total_taps = 0,
   
  })
  console.log("Value: " + (this.state.value +1))
}
  render(){
      return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60, marginBottom: -20}}>{this.state.value}</Text>
      <Text style={{ fontSize: 12, padding: 20, color: 'grey'}}>{"Total Sale Added: "+this.state.total_taps}</Text>
      
      <View style={{flexDirection:'row'}}>
      
      <Text style={{ fontSize: 18,paddingRight: 170, paddingTop:10,}}>Samping Brunei</Text>
      <Button onPress={this.resetValue1} title="r"/>
        <Button onPress={this.decrementValue1}  title="-"/>
        <Text> </Text>
        <Button onPress={this.incrementValue1} title="+"/>
      
      
        
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={{ fontSize: 18, paddingRight: 150, paddingTop:10,}}>Samping Exclusive</Text>
        <Button onPress={this.resetValue2} title="r"/>
        <Button onPress={this.decrementValue2} title="-"/>
        <Text> </Text>
        <Button onPress={this.incrementValue2} title="+"/>

      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={{ fontSize: 18, paddingRight: 120, paddingTop:10,}}>Samping Kanak-Kanak</Text>
        <Button onPress={this.resetValue3} title="r"/>
        <Button onPress={this.decrementValue3} title="-"/>
        <Text> </Text>
        <Button onPress={this.incrementValue3} title="+"/>

      </View>
    </View>
    
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100,
  },
  box1: {
    marginLeft: 30,
    marginRight: 30,
    
    backgroundColor: "#FEFEFE",
    padding: 18,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 6,
    marginTop: 30,
    
  },

  
});
