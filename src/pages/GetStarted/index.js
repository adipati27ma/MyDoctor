import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILGetStarted, ILLogo } from '../../assets';
import { Button, Gap } from '../../components';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={16} />
        <Button title="Sign In" type="secondary" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 28,
    // fontWeight: '600',
    marginTop: 91,
  },
});
