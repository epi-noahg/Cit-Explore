import {Alert, StyleSheet, Text, View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import {useState} from "react";
import {useNavigation} from '@react-navigation/native';

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const navigation = useNavigation();

  const handleLogin = () => {
    setIsProcessing(true);
    if (email === "" || password === "") {
      setTimeout(() => {
        setIsProcessing(false);
        if (email === "" || password === "") {
          Alert.alert(
            'Authentication',
            'Wrong email or password',
            [
              {text: 'OK', onPress: () => console.log("OK Pressed")},
            ]
          );
        }
      }, 2000);
    } else {
      setTimeout(() => {
        setIsProcessing(false);
        navigation.navigate("Home");
      }, 500);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.firstText}>Login</Text>
      <Text style={styles.secondText}>Connectez vous pour une expérience optimal</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="Identifiants"
          placeholder={"example@gmail.com"}
          value={email}
          onChangeText={email => setEmail(email)}
          underlineColor={"transparent"}
          theme={{colors: {text: '#ED7449', primary: "#ED7449"}}}
        />
        <TextInput
          style={styles.textInput}
          label="Mot de passe"
          placeholder={"************"}
          value={password}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
          underlineColor={"transparent"}
          theme={{colors: {text: '#ED7449', primary: "#ED7449"}}}
        />

        <Button style={styles.button} mode="contained" onPress={handleLogin} loading={isProcessing}><Text style={styles.buttonText}>Login</Text></Button>
      </View>

      <View style={styles.line}>
      </View>
      <Text style={styles.thirdText}>Se connecter avec</Text>
      <View style={styles.connectWithContainer}>
        <View
          style={styles.circle}
        />
        <View
          style={styles.circle}
        />
        <View
          style={styles.circle}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white",
  },

  textInput: {
    backgroundColor: "white",
    color: "#ED7449",
    fontWeight: "bold",
    width: "95%",
    margin: 15,
    borderRadius: 18,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },

  button: {
    backgroundColor: "#ED7449",
    width: "50%",
    position: "absolute",
    bottom: -20,
  },

  buttonText: {
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 20,
    top: 2,
  },

  inputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2B3A0",
    padding: 20,
    borderRadius: 25,
  },

  firstText: {
    color: "#ED7449",
    fontSize: 80,
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginBottom: 10,
  },
  secondText: {
    color: "#ED7449",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 20,
  },

  thirdText: {
    color: "#ED7449",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  },

  line: {
    width: "100%",
    backgroundColor: "#ED7449",
    height: 4,
    marginTop: 80,
  },

  connectWithContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },

  circle: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 50,
    height: 50,
    backgroundColor: "#ED7449",
    borderRadius: 25,
    margin: 10
  }
});

export default LoginScreen;