import React, { Component } from 'react';
import { View } from 'react-native'

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: ' Leitor de QrCode ',
    };
  };
  onSuccess(e) {
    Linking
    /* .openURL(e.data)
    .catch(err => console.error('An error occured', err)); */
    Alert.alert(e.data);
  }

  render() {
    return (
      <View style={styles.container}>
        <QRCodeScanner
          cameraStyle={styles.containerCamera}
          onRead={this.onSuccess.bind(this)}
          showMarker={true}
          topContent={
            <Text style={styles.centerText}>
              Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  containerCamera: {
    
  }
});
