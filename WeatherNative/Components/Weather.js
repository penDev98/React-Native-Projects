import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import weatherConditions2 from '../utils/WeatherConditions';

const WeatherComp = ({ weather, temperature }) => {
    return (
      <View
        style={[
          styles.weatherContainer,
          { backgroundColor: weatherConditions2[weather].color }
        ]}
      >
        <View style={styles.headerContainer}>
          <Icon
            size={72}
            name={weatherConditions2[weather].icon}
            color={'#fff'}
          />
          <Text style={styles.tempText}>{temperature}˚</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weatherConditions2[weather].title}</Text>
          <Text style={styles.subtitle}>
            {weatherConditions2[weather].subtitle}
          </Text>
        </View>
      </View>
    );
  };


  WeatherComp.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string
  };


const styles = StyleSheet.create({
  weatherContainer: {
      alignSelf: 'stretch',
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default WeatherComp;