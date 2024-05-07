import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet,  Image, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginAction } from '../state/actions/authActions';  // Adjust path as needed
import { Button } from 'react-native-paper';

const login=require('../../assets/Images/login.png')

const LoginScreen: React.FC<any> = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const dispatch = useDispatch();

  const sendOTP = async () => {
    const body = {
      apiKey: "U2FsdGVkX19xUdyDICTzEP8w3fM7S/KcgOKnrmLDGqxk1VjzEkI4y3aGw7ahrID+",
      application: "Test",
      phoneNumber: mobile,
      message: {
        Text: "Your OTP is: " + Math.floor(1000 + Math.random() * 9000) // Random OTP for example
      }
    };

    try {
      // Assuming you have a function setup to handle API requests.
      const response = await fetch('https://zf8dub21dc.execute-api.ap-south-1.amazonaws.com/dev/sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();
      console.log(data); // Log or handle response
      if (response.ok) {
        setOtpSent(true);
      } else {
        throw new Error('Failed to send OTP');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOTP = async () => {
    // Implement your OTP verification logic here
    dispatch(loginAction({ mobile, otp }));
    navigation.replace('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome to Workers Park!</Text>
      <Text style={styles.subHeader}>Sign in to continue</Text>

      {!otpSent ? (
        <>
          <Text style={styles.header}>Enter your mobile number</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Mobile Number" 
            value={mobile} 
            onChangeText={setMobile}
            keyboardType="phone-pad"
          />
          <Button mode="contained" onPress={sendOTP} style={styles.button}>
            Send OTP
          </Button>
        </>
      ) : (
        <>
          <Text style={styles.header}>Enter OTP sent to {mobile}</Text>
          <TextInput 
            style={styles.input} 
            placeholder="OTP" 
            value={otp} 
            onChangeText={setOtp}
            keyboardType="number-pad"
          />
          <Button mode="contained" onPress={verifyOTP} style={styles.button}>
            Verify OTP
          </Button>
        </>
      )}

      

      <TouchableOpacity onPress={() => {/* Implement Forgot Password logic */}}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      
<View style={{gap:40}}><TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signupText}>Don't have an account? <Text style={styles.signupLink}>Sign up</Text></Text>
      </TouchableOpacity>

      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#032873'
  },
  subHeader: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  forgotPasswordText: {
    textAlign: 'center',
    color: '#032873',
    marginVertical: 10,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  orText: {
    marginHorizontal: 10,
    color: 'grey',
  },
  socialMediaLogin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  signupText: {
    textAlign: 'center',
    color: 'grey',
  },
  signupLink: {
    color: '#032873',
  },
  button: {
    backgroundColor: '#032873',
    padding: 10,
    color: '#fff',
  },

});

export default LoginScreen;
