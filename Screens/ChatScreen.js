import React from 'react';
import { View,StatusBar } from 'react-native';
import { ListItem, Avatar, Header } from 'react-native-elements';
import { useEffect, useState } from 'react';
import { db, auth } from '../firebase';

function ChatScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const user = auth.currentUser;
  console.log(user.uid)
  useEffect(() => {
    db.collection('users')
      .doc(user.uid)
      .collection('chatusers')
      .orderBy("timestamp","desc")
      .onSnapshot((snapshot) => {

        setUsers(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            users: doc.data(),
          }))
        );
      });
  }, [user.uid]);
  return (
    <View>
      <Header style={{ flex: 1, color: '#d32f2f', height: '100%' }}
        centerComponent={{
          text: 'CHAT',
          style: { color: '#fff' },
          textAlign: 'Center',
        }}
        containerStyle={{backgroundColor:"#d32f2f"}}
      />
       <StatusBar backgroundColor='#d32f2f'/>
      {users.map(({ id, users }) => (
        <ListItem
          key={id}
          bottomDivider
          onPress={() => {
            navigation.navigate('MessageScreen', {
              id: id,
              userName: users.userName,
              propic: users.propic,
            });
          }}>
          <Avatar rounded source={{ uri: users.propic }} />
          <ListItem.Content>
            <ListItem.Title>{users.userName}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}

export default ChatScreen;
