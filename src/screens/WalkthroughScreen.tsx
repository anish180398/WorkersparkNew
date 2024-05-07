import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Slide1 = require('../../assets/Images/walkthrough/slide1.png') 
const Slide2 = require('../../assets/Images/walkthrough/slide2.png') 
const Slide3 = require('../../assets/Images/walkthrough/slide3.png') 

// Define the structure for each slide
interface Slide {
  key: string;
  title: string;
  text: string;
  image: any; 
  backgroundColor: string;
}

const slides: Slide[] = [
  {
    key: 'one',
    title: 'Welcome to Workers Park',
    text: 'Discover new ways to find whats around you, all in one place.',
    image: Slide1,
    backgroundColor: '#5451bd',
  },
  {
    key: 'two',
    title: 'Explore the Workers or Agents around your community',
    text: 'Make appointments with the agents or services nearby',
    image: Slide2,    backgroundColor: '#5451bd',
  },
  {
    key: 'three',
    title: 'Start Your Journey',
    text: 'One stop solution to finding the people you need',
    image: Slide3,    backgroundColor: '#5451bd',
  }
];

const WalkthroughScreens = ({ onDone }: { onDone: () => void }) => {
  const renderSlide = ({ item }: { item: Slide }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const handleDone = async () => {
    await AsyncStorage.setItem('hasSeenWalkthrough', 'true');
    onDone();
  };

  return (
    <AppIntroSlider
      renderItem={renderSlide}
      data={slides}
      onDone={handleDone}
      showSkipButton={true}
      onSkip={handleDone}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    padding: 16,
    fontSize: 24,
    fontWeight:'600'
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '700'
  }
});

export default WalkthroughScreens;
