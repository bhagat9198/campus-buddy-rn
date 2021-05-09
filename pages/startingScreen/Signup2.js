/* eslint-disable */

import {
  Button,
  Layout,
  StyleService,
  useStyleSheet,
  Input,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import AdminNavDrawer from './../../navigations/admin/admin';

export default function Signup2(props) {
  const styles = useStyleSheet(themeStyles);
  const [unversityNo, setUnversityNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const darkStateStore = useSelector(state => state.appReducer.dark);

  const [openGender, setOpenGender] = useState(false);
  const [valueGender, setValueGender] = useState(null);
  const [itemsGender, setItemsGender] = useState([
    {
      label: 'Male',
      value: 'male',
      key: Math.random(),
    },
    {
      label: 'Female',
      value: 'female',
      key: Math.random(),
    },
  ]);

  let dropDownPickerTheme = 'DARK';
  if (!darkStateStore) {
    dropDownPickerTheme = 'LIGHT';
  }

  const imageUI = () => {
    if (darkStateStore) {
      return (
        <Image
          style={styles.logo}
          source={require('./../../assets/images/iconLight-small.png')}
        />
      );
    } else {
      return (
        <Image
          style={styles.logo}
          source={require('./../../assets/images/iconDark-small.png')}
        />
      );
    }
  };

  const genderPickerUI = () => {
    console.log('lol');
    return (
      <DropDownPicker
        open={openGender}
        value={valueGender}
        items={itemsGender}
        setValue={val => setValueGender(val)}
        setItems={item => setItemsGender(item)}
        setOpen={() => setOpenGender(prev => !prev)}
        onOpen={() => setOpen(false)}
        listMode="SCROLLVIEW"
        theme={dropDownPickerTheme}
        placeholder="You are"
        searchable={false}
        closeAfterSelecting={true}
        // dropDownDirection="AUTO"
        // bottomOffset={100}
        placeholderStyle={{
          fontSize: 20,
        }}
        searchTextInputStyle={{
          fontSize: 20,
        }}
        selectedItemLabelStyle={{
          fontSize: 20,
          fontWeight: 'bold',
        }}
        listItemLabelStyle={{
          fontSize: 20,
        }}
        listItemContainerStyle={{
          paddingLeft: Dimensions.get('window').width * 0.02,
          paddingRight: Dimensions.get('window').width * 0.02,
        }}
        dropDownContainerStyle={{
          paddingLeft: Dimensions.get('window').width * 0.02,
          paddingRight: Dimensions.get('window').width * 0.02,
          borderRadius: 10,
        }}
      />
    );
  };

  return (
    <Layout style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <KeyboardAvoidingView>
          <Layout style={styles.mainCont}>
            <Layout style={styles.iconCont}>{imageUI()}</Layout>
            <Layout style={styles.formCont}>
              <Layout style={{...styles.eachCont, zIndex: 10}}>
                {genderPickerUI()}
              </Layout>
              <Layout style={styles.eachCont}>
                <Input
                  style={styles.input}
                  value={unversityNo}
                  // label="Password"
                  placeholder="Unversity Number"
                  caption={''}
                  size="large"
                  textStyle={{
                    fontSize: 24,
                    fontWeight: 'bold',
                  }}
                  onChangeText={nextValue => setUnversityNo(nextValue)}
                />
              </Layout>

              <Layout style={styles.eachCont}>
                <Input
                  style={styles.input}
                  value={email}
                  // label="Password"
                  placeholder="Email"
                  caption={''}
                  size="large"
                  textStyle={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                  }}
                  onChangeText={nextValue => setEmail(nextValue)}
                />
              </Layout>
              <Layout style={styles.eachCont}>
                <Input
                  style={styles.input}
                  value={password}
                  // label="Password"
                  placeholder="Password"
                  caption={''}
                  size="large"
                  textStyle={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                  }}
                  onChangeText={nextValue => setPassword(nextValue)}
                />
              </Layout>
              <Layout style={styles.eachCont}>
                <Input
                  style={styles.input}
                  value={cpassword}
                  // label="Password"
                  placeholder="Confirm Password"
                  caption={''}
                  size="large"
                  textStyle={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                  }}
                  onChangeText={nextValue => setcPassword(nextValue)}
                />
              </Layout>
            </Layout>
            <Layout style={{...styles.eachCont}}>
              <Button
              onPress={() => {console.log('aaa');}}
                style={styles.btn}
                accessoryLeft={() => {return(<AntDesign name="adduser" size={24} />)}}
                size="large">
                ADD ME
              </Button>
            </Layout>

          </Layout>
        </KeyboardAvoidingView>
      </ScrollView>
    </Layout>
  );
}

const themeStyles = StyleService.create({
  logo: {
    height: '100%',
    width: '100%',
  },
  iconCont: {
    marginTop: Dimensions.get('window').height * 0.03,
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.4, 
  },
  btn: {
    width: Dimensions.get('window').width * 0.7,
  },
  formCont: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  input: {
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    width: Dimensions.get('window').width * 0.9,
  },
  eachCont: {
    marginBottom: Dimensions.get('window').height * 0.03,
    marginTop: Dimensions.get('window').height * 0.03,
    marginLeft: Dimensions.get('window').width * 0.03,
    marginRight: Dimensions.get('window').width * 0.03,
  },
  mainCont: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
