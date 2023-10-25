import React, { useState } from "react";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigation = useNavigation();

  const handleSearch = () => {
    console.log("Recherche effectuée : ", searchQuery);
    navigation.navigate("Map");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo}/>
        <Image source={require("../assets/profil.png")} style={styles.profil}/>
        <Text style={styles.firstText}>Une envie ?</Text>
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              label="Rechercher"
              value={searchQuery}
              onChangeText={(query) => setSearchQuery(query)}
              style={styles.input}
              underlineColor="transparent"
              theme={{ colors: { text: "black", primary: "#6EB86B" } }}
            />
            <IconButton
              icon="magnify"
              onPress={handleSearch}
              style={styles.iconButton}
            />
          </View>
        </View>
      </View>
      <View style={styles.bodyBg}>
        <View style={styles.body}>
          <View style={styles.interests}>
            <ScrollView>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.square} />
                  <View style={styles.textContainer}>
                    <Text style={styles.secondText}>Architecture</Text>
                    <Text style={styles.thirdText}>
                      Lorem tdolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.square} />
                  <View style={styles.textContainer}>
                    <Text style={styles.secondText}>Art</Text>
                    <Text style={styles.thirdText}>
                      Lorem tdolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.square} />
                  <View style={styles.textContainer}>
                    <Text style={styles.secondText}>Evenement</Text>
                    <Text style={styles.thirdText}>
                      Lorem tdolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.square} />
                  <View style={styles.textContainer}>
                    <Text style={styles.secondText}>Botanique</Text>
                    <Text style={styles.thirdText}>
                      Lorem tdolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.square} />
                  <View style={styles.textContainer}>
                    <Text style={styles.secondText}>Manger !</Text>
                    <Text style={styles.thirdText}>
                      Lorem tdolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.line} />
          <View style={styles.interests}>
            <ScrollView>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.square} />
                  <View style={styles.textContainer}>
                    <Text style={styles.secondText}>Piéton</Text>
                    <Text style={styles.thirdText}>
                      Lorem tdolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.square} />
                  <View style={styles.textContainer}>
                    <Text style={styles.secondText}>Cycliste</Text>
                    <Text style={styles.thirdText}>
                      Lorem tdolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.square} />
                  <View style={styles.textContainer}>
                    <Text style={styles.secondText}>Tram</Text>
                    <Text style={styles.thirdText}>
                      Lorem tdolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <IconButton style={styles.plusButton} icon={"plus"}>

      </IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6EB86B",
  },

  header: {
    paddingTop: 60,
    paddingBottom: 30,
    borderBottomLeftRadius: 100,
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
  },

  bodyBg: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },

  body: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#6EB86B",
    borderTopRightRadius: 150,
    alignItems: "center",
    paddingTop: 25,
  },

  firstText: {
    fontWeight: "bold",
    fontSize: 50,
  },

  secondText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  thirdText: {
    fontSize: 11,
    marginRight: 10,
  },

  card: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 20,
    flexDirection: "row",
    paddingHorizontal: 25,
    marginTop: -10,
  },

  cardContent: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },

  square: {
    width: 60,
    height: 60,
    backgroundColor: "black",
    borderRadius: 20,
    borderCurve: "circular",
    margin: 10,
  },

  textContainer: {
    marginLeft: 10,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6EB86B",
    backgroundColor: "#6EB86B",
    borderRadius: 50,
    width: "80%",
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderRadius: 50,
    margin: 10,
  },

  iconButton: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  line: {
    width: "90%",
    backgroundColor: "black",
    height: 4,
    marginTop: 20,
    marginBottom: 20,
  },

  interests: {
    height: "55%",
    width: "90%",
  },

  plusButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
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

export default HomeScreen;
