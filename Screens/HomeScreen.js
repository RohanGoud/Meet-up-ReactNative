import React from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  Icon,
  ActivityIndicator,
  Platform,
  theme,
  border,
  StatusBar,
} from 'react-native';
import CheckboxList from 'rn-checkbox-list';
import { Header } from 'react-native-elements';
import Checkbox from '../components/checkbox';
import { ListItem, Avatar } from 'react-native-elements';
import { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import Users from '../components/users';

const data = [
  { id: '1', name: 'Sports/Games ' },
  { id: '2', name: 'Movies/OTT ' },
  { id: '3', name: 'Restaurant' },
  { id: '4', name: 'Casual meetup' },
];

function HomeScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const user = auth.currentUser;
  useEffect(() => {
    db.collection('users')
      .where('userid', '!=', user?.uid)
      .onSnapshot((snapshot) => {
        setUsers(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            users: doc.data(),
          }))
        );
      });
  }, [user.uid]);
  const [interests, setInterests] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header
          centerComponent={{
            text: 'MY TITLE',
            style: { color: '#fff' },
            fontSize: 30,
          }}
          containerStyle={{backgroundColor:"#d32f2f"}}
        />
         
         <StatusBar backgroundColor='#d32f2f'/>
        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
          Specify Your Interest
        </Text>
        {data.map((i, index) => {
          return <Checkbox index={i.id} name={i.name} />;
        })}
        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
          Users
        </Text>
        {users.map(({ id, users }) => {
          console.log(users.x);
          if (users.x) {
            if (!('Sports/Games' in users.x)) {
              return (
                <Users
                  id={id}
                  key={id}
                  userName={users?.userName}
                  propic={users.propic}
                  navigation={navigation}
                />
              );
            }
          }
        })}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
