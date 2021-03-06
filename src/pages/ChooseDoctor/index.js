import React from 'react';
import { StyleSheet, View } from 'react-native';

import { DummyDoc1 } from '../../assets';
import { Header, List } from '../../components';
import { colors } from '../../utils';

export default function ChooseDoctor({ navigation }) {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        profilePic={DummyDoc1}
        name="Alexander Jannie"
        desc="Wanita"
        nextIcon
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        profilePic={DummyDoc1}
        name="Alexander Jannie"
        desc="Wanita"
        nextIcon
      />
      <List
        profilePic={DummyDoc1}
        name="Alexander Jannie"
        desc="Wanita"
        nextIcon
      />
      <List
        profilePic={DummyDoc1}
        name="Alexander Jannie"
        desc="Wanita"
        nextIcon
      />
      <List
        profilePic={DummyDoc1}
        name="Alexander Jannie"
        desc="Wanita"
        nextIcon
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
