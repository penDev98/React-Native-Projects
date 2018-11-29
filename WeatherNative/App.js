import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import WeatherComp from './Components/Weather';
import API_KEY from './utils/WeatherApikey';

export default class App extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude)
      }, 
      error => {
        console.log(error);
        this.setState({
          error: 'Error Getting Weather Conditions'
        })
      }, 
      {
        maximumAge:60000, 
        timeout:5000, 
        enableHighAccuracy:true
      }
    );
  }

  fetchWeather(lat = 25, lon = 25) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(res2 => {
        this.setState({
          temperature: res2.main.temp,
          weatherCondition: res2.weather[0].main,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
         {isLoading ? (
            <Text>Fetching The Weather...</Text>
          ) : (
            <WeatherComp weather={this.state.weatherCondition} temperature={this.state.temperature} />
          )}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});