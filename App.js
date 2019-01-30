import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { Constants } from 'expo';
import Weather from "./Weather";

const API_KEY = "5b5dfa4f586f0f19268730d1dabc0912";

import AssetExample from './components/AssetExample';


import { Card } from 'react-native-paper';

export default class App extends Component {
  state = {
    isLoaded : false,
    error:null,
    temperature:null,
    name:null,
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
    },
    error => {
      this.setState({
        error:error
      })
    }
    );
  }
  _getWeather=(lat,lon) =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(json=>{
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        isLoaded:true
      });
    });
  }
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        { isLoaded ? <Weather weatherName={name} temp={Math.floor(temperature-273.15)}/> : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}> 어... 잠깐만 기다려 봐요</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  errorText:{
    color:"red",
    backgroundColor:"transparent",
  },
  loading : {
    flex:1,
    backgroundColor : "#FDF6AA",
    justifyContent : "flex-end",  
    paddingLeft:30,
  },
  loadingText:{
    fontSize:30,
    marginBottom:100,
  }

});
