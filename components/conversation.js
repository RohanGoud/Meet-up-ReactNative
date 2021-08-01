import React from 'react';
import { View, TextInput, StyleSheet, Button,TouchableOpacity,Text } from 'react-native';
import { ListItem, Avatar, Header } from 'react-native-elements';
import {auth} from "../firebase"

function Conversation(props) {
  const user = auth.currentUser;
  return (
    <View style={{}}>
      <View>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection:props.userid===user.uid? 'row-reverse':"row",
            marginLeft: 6,
          }}>
          <View
            style={{
              height: 'auto',
              backgroundColor: props.userid===user.uid? 'rgba(165, 250, 34 ,0.2)':"#fff",
              borderWidth: 0.3,
              borderColor: 'white',
              borderRadius: 9,
              elevation: 2,
              borderTopRightRadius: 0,
              margin: 2,
              maxWidth: 280,
            }}>
            <View></View>
            <Text style={{ fontSize: 17, padding: 6 }}>{props.message}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default Conversation;
