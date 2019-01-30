import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases={
  Rain:{
    colors:["#00C6FB","#005BEA"],
    title: "비온다",
    subtitle: "빨래 널었는데...",
    icon: "weather-rainy",
  },
  Clear:{
    colors:["#FEF253","#FF7300"],
    title: "햇빛 좋아요",
    subtitle: "밖에 나가서 햇빛좀 쬐세요",
    icon: "weather-sunny",
  },
  Thunderstorm:{
    colors:["#00ECBC","#007ADF"],
    title: "천둥번개에 비까지..",
    subtitle: "나가면 죽겠지?",
    icon: "weather-lightning-rainy",
  },
  Clouds:{
    colors:["#D7D2CC","#304352"],
    title: "구름 뭉게뭉게",
    subtitle: "거..밖에 나가기 딱 좋은 날씨네",
    icon: "weather-cloudy",
  },
  Snow:{
    colors:["#7DE2FC","#B9B6E5"],
    title: "와.. 눈이네..",
    subtitle: "출근길 끝났네..",
    icon: "weather-snowy",
  },
  Drizzle:{
    colors:["#89F7FE","#66A6FF"],
    title: "이슬비",
    subtitle: "참이슬",
    icon: "weather-hail",
  },
  Haze:{
    colors:["#D7D2CC","#304352"],
    title: "안개인가, 미세먼지인가",
    subtitle: "아... 둘다 인건가",
    icon: "weather-fog",
  },
};

function Weather({weatherName, temp}){
  return(
    <LinearGradient 
      colors={weatherCases[weatherName].colors} 
      style={styles.container}
      >
      <View style={styles.upper}>
        <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
        <Text style={styles.temp}>{temp}º</Text>
      </View>

      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  )
}

Weather.propTypes={
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired,
}
export default Weather;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  upper:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"transparent",
  },
  temp:{
    fontSize:48,
    backgroundColor:"transparent",
    color:"white",
    marginTop:10,
  },
  lower:{
    flex:1,
    alignItems:"flex-start",
    justifyContent:"flex-end",
    paddingLeft:25,
  },
  title:{
    fontSize:38,
    backgroundColor:"transparent",
    color:"white",
    marginBottom:10,
  },
  subtitle:{
    fontSize:24,
    backgroundColor:"transparent",
    color:"white",
    marginBottom:24,
  },
});