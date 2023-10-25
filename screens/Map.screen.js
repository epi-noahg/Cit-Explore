import React from 'react';
import {Text, View, StyleSheet, Image} from "react-native";
import MapComponent from "../components/map.component";

function MapScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo}/>
        <Image source={require("../assets/profil.png")} style={styles.profil}/>
      </View>
      <MapComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },

  header: {
    paddingTop: 60,
    paddingBottom: 30,
    backgroundColor: "white"
  },

  logo : {
    position: "absolute",
    width: 50,
    height: 50,
    top: 20,
    left: 20,
  },
  profil : {
    position: "absolute",
    width: 50,
    height: 50,
    top: 20,
    right: 20,
  }
});

export default MapScreen;
