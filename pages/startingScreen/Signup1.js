/* eslint-disable */

import React, {useState} from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Image,
} from 'react-native';
import {
  Layout,
  Input,
  StyleService,
  useStyleSheet,
  Radio,
  Button,
} from '@ui-kitten/components';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';

import {StartingStack} from './../../constants/navigations/starting';

export default function Signup1(props) {
  const styles = useStyleSheet(themeStyles);
  const darkStateStore = useSelector(state => state.appReducer.dark);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [student, setStudent] = useState(false);
  const [teacher, setTeacher] = useState(false);

  let dropDownPickerTheme = 'DARK';
  if (!darkStateStore) {
    dropDownPickerTheme = 'LIGHT';
  }

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: 'Sai Vidya Institute of Technology',
      value: 'svit',
      key: Math.random(),
    },
  ]);

  const institutePickerUI = () => {
    return (
      <DropDownPicker
        onOpen={() => setOpenGender(false)}
        open={open}
        value={value}
        items={items}
        setValue={val => setValue(val)}
        setItems={item => setItems(item)}
        setOpen={() => setOpen(prev => !prev)}
        listMode="SCROLLVIEW"
        theme={dropDownPickerTheme}
        placeholder="Select your institute"
        searchPlaceholder="Type your institute name"
        closeAfterSelecting={true}
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

  return (
    <Layout style={{flex: 1}}>
      <KeyboardAvoidingView>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          nestedScrollEnabled={true}>
          <Layout style={styles.mainCont}>
            <Layout style={styles.imgCont}>{imageUI()}</Layout>
            <Layout style={styles.formCont}>
              <Layout
                style={{
                  ...styles.eachItem,
                  marginTop: Dimensions.get('window').height * 0.05,
                  zIndex: 10,
                }}>
                {institutePickerUI()}
              </Layout>
              <Layout style={styles.eachItem}>
                <Input
                  style={styles.input}
                  value={fname}
                  // label="Password"
                  placeholder="Your First Name"
                  caption={''}
                  size="large"
                  textStyle={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                  }}
                  onChangeText={nextValue => setFname(nextValue)}
                />
              </Layout>
              <Layout style={styles.eachItem}>
                <Input
                  style={styles.input}
                  value={lname}
                  // label="Password"
                  placeholder="Your Last Name"
                  caption={''}
                  size="large"
                  textStyle={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                  }}
                  onChangeText={nextValue => setLname(nextValue)}
                />
              </Layout>
              <Layout style={{...styles.eachItem, flexDirection: 'row'}}>
                <Layout style={styles.card}>
                  <Layout style={styles.icon}>
                    <Entypo
                      name="open-book"
                      size={Dimensions.get('window').width * 0.25}
                      color="orange"
                    />
                  </Layout>
                  <Layout style={styles.radioCont}>
                    <Radio
                      style={styles.radio}
                      checked={student}
                      onChange={nextChecked => setStudent(nextChecked)}>
                      Student
                    </Radio>
                  </Layout>
                </Layout>
                <Layout style={styles.card}>
                  <Layout style={styles.icon}>
                    <Entypo
                      name="blackboard"
                      size={Dimensions.get('window').width * 0.25}
                      color="orange"
                    />
                  </Layout>
                  <Layout style={styles.radioCont}>
                    <Radio
                      style={styles.radio}
                      checked={teacher}
                      onChange={nextChecked => setTeacher(nextChecked)}>
                      Teacher
                    </Radio>
                  </Layout>
                </Layout>
              </Layout>
            </Layout>
            <Layout style={styles.btnCont}>
              <Button
                style={styles.btn}
                accessoryRight={() => (
                  <Entypo name="chevron-with-circle-right" size={24} />
                )}
                size="large"
                onPress={() =>
                  props.navigation.navigate(StartingStack.signup2)
                }>
                NEXT
              </Button>
            </Layout>
          </Layout>
        </ScrollView>
      </KeyboardAvoidingView>
    </Layout>
  );
}

const themeStyles = StyleService.create({
  formCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCont: {
    marginBottom: Dimensions.get('window').height * 0.1,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  imgCont: {
    marginTop: Dimensions.get('window').height * 0.03,
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.4,
  },
  btn: {
    width: Dimensions.get('window').width * 0.5,
    fontSize: 30,
  },
  icon: {
    marginBottom: Dimensions.get('window').height * 0.03,
  },
  radioCont: {},
  card: {
    width: Dimensions.get('window').width * 0.45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    margin: Dimensions.get('window').width * 0.025,
    padding: Dimensions.get('window').width * 0.05,
  },
  radio: {},
  input: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  eachItem: {
    marginBottom: Dimensions.get('window').height * 0.02,
    marginTop: Dimensions.get('window').height * 0.02,
    marginLeft: Dimensions.get('window').width * 0.02,
    marginRight: Dimensions.get('window').width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCont: {flex: 1, justifyContent: 'space-between', alignItems: 'center'},
});
