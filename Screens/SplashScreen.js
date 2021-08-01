import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Image,Text } from 'react-native';
import { auth } from '../firebase';

const SplashScreen = ({ navigation }) => {
  const user = auth.currentUser;
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          navigation.navigate('myTabs');
        } else {
          navigation.navigate('LoginScreen');
        }
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
        }}
        style={{
          width:260,
          height: 100,
          resizeMode: 'contain',
          margin: 30,
        }}
      />
      <Text style={{fontSize:18,fontWeight:'bold',color:'white',marginRight:3}}> MEETUP</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d32f2f',
  },
});
