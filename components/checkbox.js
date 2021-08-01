import React,{useState} from 'react'
import {View} from 'react-native'
import { CheckBox,Header } from 'react-native-elements'
import {auth,db} from "../firebase"
import firebase from '@firebase/app';
const user=auth.currentUser
function Checkbox(props) {
  const[check,setCheck]=useState(false)
  const sendInterest=()=>{
    if(!check){
    db.collection("users").doc(user?.uid).update({
      x:firebase.firestore.FieldValue.arrayUnion(props.name)
    })}
    else{
    db.collection("users").doc(user?.uid).update({
      x:firebase.firestore.FieldValue.arrayRemove(props.name)
    })}
  }

    return (
        <View>
         <CheckBox
          title={props.name}
          checked={check}
          onPress={()=>{
            sendInterest()
            setCheck(!check)}}
          
          />
            
        </View>
    )
}


export default Checkbox