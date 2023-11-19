import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
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
      <View style={styles.topbutton}>
      <Button  color="#FFFFFF" onPress={this.resetValue2} title="Reset"/>
    </View>

    <View style={styles.saleResult}>
      <Text style={{ fontSize: 60, marginBottom: -20,color: '#FFFFFF',  alignSelf: "center",}}>{"RM "+this.state.value}</Text>
      <Text style={{ fontSize: 15, padding: 20, color: '#FFFFFF', alignSelf: "center",}}>{"Total Sale Added: "+this.state.total_taps}</Text>
    </View>

      
    <View style={styles.cont1}>
      
    <View style={{flexDirection:'row'}}>
      <Image style={styles.circle1}
      source={require("./assets/s1.jpg" )} />
      <Text style={{ fontSize: 18,paddingRight: 10, paddingTop:15, marginLeft: 10,}}>Samping Brunei (RM100) </Text>
      <View style={{flexDirection:'row'}}>
        <View style={styles.mButton1}>
          <Button color='#FFFFFF' onPress={this.decrementValue1}  title="-"/>
         </View>
         <View style={styles.pButton1}>
          <Button color='#FFFFFF'  onPress={this.incrementValue1} title="+"/>
         </View>
      </View>
      </View>   
   </View>
   <View style={styles.cont1}> 
     
   <View style={{flexDirection:'row'}}>
      <Image style={styles.circle1}
      source={require("./assets/s2.jpg.webp" )} />
      <Text style={{ fontSize: 18, paddingRight: 10, paddingTop:15, marginLeft: 3}}>Samping Exclusive (RM50)</Text>
      <View style={{flexDirection:'row'}}>
        <View style={styles.mButton1}>
          
        <Button color='#FFFFFF' onPress={this.decrementValue2} title="-"/>
         </View>
         <View style={styles.pButton1}>
         <Button color='#FFFFFF' onPress={this.incrementValue2} title="+"/>
         </View>
      </View>
      </View>
      <View style={styles.cont2}>
      <View style={styles.bottomResult}>
      <Text style={{ fontSize: 30, color: '#FFFFFF',  alignSelf: "center",}}>Pay Now</Text>
    </View>
         <Text style={{ fontSize: 18, color: '#0A0706',   alignSelf: "center",}}>Back</Text>
     
        
      
      
    </View>
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
  cont1: {
   marginBottom: 20,
    
  },
  cont2: {
    
    paddingTop: 150,
  
    
   },
   cont3: {
   
    
    paddingRight: 100,
    
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
  circle1: {
    width: 45,
    height: 45,
    borderRadius: 5,
    marginLeft: 15,
  },
  circle2: {
    width: 45,
    height: 45,
    borderRadius: 5,
    marginLeft:50,
  },
 saleResult: { 
    margin: 10,
    marginRight: 15,
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#0057A9",
    borderWidth: 2,
    paddingHorizontal: 80,
    alignSelf: "center",
    paddingVertical: 5,
    backgroundColor: "#0057A9",
    marginTop: 30,
    marginBottom: 30,
    paddingTop: 20,
  },
  bottomResult: { 
    margin: 10,
    marginRight: 15,
    justifyContent: "center",
    borderColor: "#C70039",
    borderWidth: 2,
    paddingHorizontal: 100,
    alignSelf: "center",
    paddingVertical: 5,
    backgroundColor: "#C70039",
    marginTop: 30,
    borderRadius: 25,
    
  },
  topbutton: { 
    marginRight: 20,
    justifyContent: "center",
    borderRadius: 10,
    borderColor: '#ff4500',
    paddingHorizontal: 10,
    alignSelf: "flex-end",
    backgroundColor: "#ff4500",
  },
  mButton1: { 
    marginRight: 10,
    borderRadius: 10,
    borderColor: '#ff4500',
    paddingHorizontal: 10,
    alignSelf: "flex-end",
    backgroundColor: "#0057A9",
  },
  pButton1: { 
    marginRight: 10,
    borderRadius: 8,
    borderColor: '#ff4500',
    paddingHorizontal: 10,
    alignSelf: "flex-end",
    backgroundColor: "#0057A9",
  },
  
});
