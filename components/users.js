import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import { ListItem, Avatar, Header } from 'react-native-elements';
import { auth } from '../firebase';
function Users(props) {
  return (
    <ListItem
      onPress={() => {
        props.navigation.navigate('MessageScreen', {
          id: props.id,
          userName: props.userName,
          propic: props.propic,
        });
      }}
      bottomDivider>
      <Avatar rounded source={{ uri: props.propic }} />
      <ListItem.Content>
        <ListItem.Title>{props.userName}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}
export default Users