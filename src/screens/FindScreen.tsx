import React from "react";
import {
  Dimensions,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useLayoutEffect } from "react";

import { Avatar, Button, Card, Text, Searchbar } from "react-native-paper";

const FindScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <ScrollView >
     <Text>Find</Text>
     <View style={styles.searchContainer}>
        {/* <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          mode="bar"
          style={styles.searchBar}
        /> */}
      </View>
    </ScrollView>
  );
};



export default FindScreen;

const styles = StyleSheet.create({
searchContainer: {
  paddingHorizontal: 30,
},
searchBar: {
  backgroundColor: "#fff",
  borderColor:'#5451bd',
  borderWidth:1
},})