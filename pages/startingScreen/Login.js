/* eslint-disable */

import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';
import {Button, Layout, Input, Icon, Text} from '@ui-kitten/components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StartingStack} from './../../constants/navigations/starting';
import {useSelector} from 'react-redux';

export default function Login(props) {
  const darkStateStore = useSelector(state => state.appReducer.dark);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const imageUI = () => {
    if (darkStateStore) {
      return (
        <Image
          style={styles.logo}
          source={require('./../../assets/images/logoLight-small.png')}
        />
      );
    } else {
      return (
        <Image
          style={styles.logo}
          source={require('./../../assets/images/logoDark-small.png')}
        />
      );
    }
  };
  return (
    <Layout style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Layout style={styles.mainContainer}>
            <Layout style={styles.imgContainer}>{imageUI()}</Layout>
            <Layout style={styles.formContainer}>
              <Layout style={styles.eachInput}>
                <Input
                  value={email}
                  label=""
                  placeholder="College Email Id"
                  caption={''}
                  style={styles.input}
                  onChangeText={nextValue => setEmail(nextValue)}
                  size="large"
                />
              </Layout>
              <Layout style={styles.eachInput}>
                <Input
                  value={password}
                  label=""
                  placeholder="Password of Email"
                  secureTextEntry={true}
                  caption={''}
                  style={styles.input}
                  onChangeText={nextValue => setPassword(nextValue)}
                  size="large"
                />
              </Layout>
              <Layout style={styles.eachInput}>
                <Button
                  style={styles.button}
                  status="primary"
                  accessoryLeft={() => (
                    <MaterialIcons name="login" size={24} />
                  )}>
                  LogIn
                </Button>
              </Layout>
            </Layout>
            <Layout style={styles.signupCont}>
              <Button
                style={styles.button}
                accessoryLeft={props => (
                  <MaterialCommunityIcons
                    name="account-circle-outline"
                    size={24}
                  />
                )}
                onPress={() =>
                  props.navigation.navigate(StartingStack.signup1)
                }>
                Create your Account
              </Button>
            </Layout>
          </Layout>
        </ScrollView>
      </KeyboardAvoidingView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  signupCont: {
    marginBottom: Dimensions.get('window').width * 0.1,
    alignItems: 'center',
  },
  button: {
    width: Dimensions.get('window').width * 0.7,
  },
  eachInput: {
    marginBottom: Dimensions.get('window').width * 0.1,
    alignItems: 'center',
  },
  input: {
    width: Dimensions.get('window').width * 0.9,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  imgContainer: {
    height: Dimensions.get('window').height * 0.25,
    width: Dimensions.get('window').width * 0.7,
    marginLeft: Dimensions.get('window').width * 0.05,
    marginRight: Dimensions.get('window').width * 0.05,
    marginTop: Dimensions.get('window').width * 0.1,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
