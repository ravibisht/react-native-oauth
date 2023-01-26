/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React , {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, Button} from 'react-native';


import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({ });

function App(): JSX.Element {

  const [userInfo, setUserInfo] = useState(null);

  const onSignIn = () => {
    console.log('Hello');
    
    GoogleSignin.hasPlayServices()
      .then(() => {
        return GoogleSignin.signIn();
      })
      .then((response) => {
        console.log('Respone => ',response);
        
        setUserInfo(response);
      })
      .catch((err) => {
        // ignore
        console.log(err);
      });
    }
    const onSignOut = () => {
      GoogleSignin.signOut()
        .then(() => {
          setUserInfo(null);
        })
        .catch((err) => {
          // ignore
        });
    };
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          {userInfo ? (
            <>
              <Text>
                Hello {`${userInfo.user.givenName} ${userInfo.user.familyName}`}
              </Text>
              <Button title="Sign out" onPress={onSignOut} />
            </>
          ) : (
            <Button title="Google Login" onPress={onSignIn} />
          )}
        </SafeAreaView>
      </>
    );

 
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
