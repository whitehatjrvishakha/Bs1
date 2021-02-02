
import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView, Alert} from 'react-native';
import firebase from 'firebase'
import db from '../config'


export default class WelcomeScreen extends React.Component{
  constructor(){
    super()
    this.state={
      email:"",
      pwd:""
    }
  }


  SignIn=(email,pwd)=>{
firebase.auth().createUserWithEmailAndPassword(email,pwd)
.then((response)=>{
   return Alert.alert("User added Successfully!")
})
  }

  LoginIn=(email,pwd)=>{
    firebase.auth().signInWithEmailAndPassword(email,pwd)
    .then((response)=>{
       return Alert.alert("LOgged In!")
    })
      }



  render(){
  return (
    <View style={styles.container}>
      <Text> Login </Text>
      
      <View>
                  <TextInput
                  style={styles.mybox}
                  placeholder="Email pls!"
                  onChangeText={(text)=>{
                    this.setState({
                                    email:text
                    })
                  }}
                  value={this.state.email}
                />

                <TextInput
                  style={styles.mybox}
                  placeholder="password pls!"
                  onChangeText={(text)=>{
                    this.setState({
                                    pwd:text
                    })
                  }}
                  value={this.state.pwd}
                />
      </View>

     <View>
                <TouchableOpacity onPress={()=>{this.SignIn(this.state.email,this.state.pwd)}}>
                  <Text> SignUp</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{this.LOginIn(this.state.email,this.state.pwd)}}>
                  <Text> LoginUp</Text>
                </TouchableOpacity>
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
    justifyContent: 'center',
  },
  mybox:{
    width:200,
    height:30,
    borderBottomWidth:3
  }
});
