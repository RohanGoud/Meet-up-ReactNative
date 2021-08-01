import React, { useEffect, useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Button, ScrollView,StatusBar } from 'react-native';
import { ListItem, Avatar, Header } from 'react-native-elements';
import Conversation from '../components/conversation';
import { db, auth } from '../firebase';
import firebase from 'firebase';
function MessageScreen({ navigation, route }) {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const { id, userName, propic } = route.params;

  const user = auth.currentUser;
  const sendmessage = () => {
    db.collection('users')
      .doc(user.uid)
      .collection('chatusers')
      .doc(id)
      .collection('messages')
      .add({
        userid: user.uid,
        message: message,
        timestamp: new Date(),
      });
    db.collection('users')
      .doc(id)
      .collection('chatusers')
      .doc(user.uid)
      .collection('messages')
      .add({
        userid: user.uid,
        message: message,
        timestamp: new Date(),
      });
    db.collection('users').doc(user.uid).collection('chatusers').doc(id).set({
      propic: propic,
      userName: userName,
      userid: id,
      timestamp: new Date(),
    });
  db.collection('users').doc(id).collection('chatusers').doc(user.uid).set({
      propic: propic,
      userName: user.displayName,
      userid: user.uid,
      timestamp: new Date(),
    });
    setMessage('');
  };

  useEffect(() => {
    db.collection('users')
      .doc(user.uid)
      .collection('chatusers')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        setChats(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            messages: doc.data(),
          }))
        );
      });
  }, [id]);
  const scrollViewRef = useRef();
  return (
    <View>
      <Header
        centerComponent={{ text: 'Conversation', style: { color: '#fff' } }}
         containerStyle={{backgroundColor:"#d32f2f"}}
      />
       <StatusBar backgroundColor='#d32f2f'/>
     

      <ScrollView
        style={{ color: 'white', height: '84%' }}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }>
        {chats.map(({ id, messages }) => {
          return (
            <Conversation
              key={id}
              userid={messages.userid}
              name={messages.userName}
              message={messages.message}
            />
          );
        })}
      </ScrollView>
      <View style={styles.sectionStyle}>
        <TextInput
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={styles.inputStyle}
          placeholder="Enter " //dummy@abc.com
          placeholderTextColor="#8b9cb5"
          autoCapitalize="none"
          keyboardType="text"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          onSubmitEditing={sendmessage}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    height: 40,
    width: '95%',
    margin: 5,
  },

  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
});

export default MessageScreen;
