import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { auth } from '../firebase';

export default function Settings({ navigation }) {
  const signout = () => {
    auth.signOut();
    navigation.navigate('LoginScreen');
  };
  const user = auth.currentUser;
  return (
    <View>
      <Header
        centerComponent={{
          text: 'PROFILE',
          style: { color: 'white', fontSize: 20 },
        }}
        containerStyle={{ backgroundColor: '#d32f2f' }}
      />
      <StatusBar backgroundColor="#d32f2f" />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 20,
          flexDirection: 'column',
        }}>
        <Avatar
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnDQEfRU_Yih9NgNLLKHgXsmbNE-Gp8NTBw&usqp=CAU',
          }}
          rounded
          size="xlarge"
        />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name="person" color="black" size={28} />
          <View
            style={{
              display: 'flex',
              margin: 10,
              flexDirection: 'column',
              width: '79%',
              backgroundColor: '#EAEDED',
              borderRadius: 10,
              height: 45,
              elevation: 4,
            }}>
            <Text
              style={{
                opacity: 0.3,
                fontWeight: 'bold',
                marginLeft: 7,
              }}>Username</Text>
              <Text style={{paddingLeft:10,paddingBottom:5}}>{user.displayName}</Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              margin: 10,
              alignItems: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{
                width: '50%',
                borderRadius: 25,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 40,
                backgroundColor: '#7DE24E',
              }}
              onPress={signout}
              activeOpacity={0.5}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 16,
                }}>
                LOGOUT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
