import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ImageFundo from "../../assets/fundo1.jpg";
import Logo from "../../assets/logo.png";

export function Login() {
  const handleEntrarPress = () => {
    alert("Você efetou login!");
  };

  const handleCadastrarPress = () => {
    alert("Você vai ser direcionado para o Cadastro!");
  };

  const handleForgotPassword = () => {
    navigation.navigate("EsqueciASenhaScreen");
  };
  return (
    <ScrollView scrollEnabled={false}>
      <View style={styles.header}>
        <Image source={ImageFundo} style={styles.fundo} resizeMode="contain" />
      </View>
      <View style={styles.quadrado}>
        <View style={styles.wrapper}>
          <View style={styles.main}>
            <View style={styles.article}>
              <View style={styles.content}>
                <Text style={styles.contentText}>
                  <Text style={styles.boldText}>LOGIN</Text>
                </Text>
              </View>
              <View style={styles.container}>
                <Icon
                  name="user"
                  size={30}
                  color="#3f3f3f"
                  style={styles.iconelogin}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Usuário"
                  placeholderTextColor="gray"
                  autoFocus={true}
                />
                <Icon
                  name="lock"
                  size={30}
                  color="#3f3f3f"
                  style={styles.iconesenha}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  secureTextEntry={true}
                  placeholderTextColor="gray"
                />
              </View>
              <View style={styles.content}></View>
              <View style={styles.contentbotao}>
                <TouchableOpacity
                  style={styles.botaoentrar}
                  onPress={handleEntrarPress}
                >
                  <Text style={styles.textoBotaoentrar}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.botaocadastrar}
                  onPress={handleCadastrarPress}
                >
                  <Text style={styles.textoBotaocadastrar}>Cadastrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerlogo}>
          <Image source={Logo} resizeMode="contain" />
        </View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  quadrado: {
    flex: 1,
    top: -800,
    width: 320,
    height: 100,
    left: 37,
    backgroundColor: "rgba(255, 255, 255, 0)",
  },

  fundo: {
    width: 1510,
    height: 900,
    top: -30,
    left: -340,
  },

  containerlogo: {
    width: 0,
    height: 0,
    top: -560,
    left: 110,
  },

  article: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 30,
    padding: 16,
    borderWidth: 1,
    borderColor: "#3f3f3f",
  },
  content: {
    lineHeight: 1.6,
    marginTop: 170,
  },
  contentText: {
    left: 100,
    top: 0,
    fontSize: 27,
    color: "#3f3f3f",
  },
  boldText: {
    top: 10,
    fontWeight: "bold",
  },

  container: {
    marginTop: "15%",
    marginHorizontal: 5,
  },

  iconelogin: {
    top: 19.5,
    left: 16,
  },

  iconesenha: {
    top: 20.5,
    left: 17.5,
  },

  input: {
    color: "#3f3f3f",
    borderWidth: 1.5,
    borderColor: "#3f3f3f",
    backgroundColor: "transparent",
    borderRadius: 30,
    top: -20,
    height: 50,
    paddingHorizontal: 50,
    fontWeight: "bold",
    marginBottom: -15,
  },

  contentbotao: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botaoentrar: {
    backgroundColor: "#00b981",
    borderRadius: 10,
    borderWidth: 0,
    top: -50,
    left: 47,
    height: 40,
    width: 190,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  textoBotaoentrar: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 16,
  },

  botaocadastrar: {
    backgroundColor: "#00b981",
    borderRadius: 10,
    borderWidth: 0,
    top: 10,
    right: 143,
    height: 40,
    width: 190,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  textoBotaocadastrar: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 16,
  },

  forgotPassword: {
    color: "#3f3f3f",
    marginTop: -195,
    marginLeft: 35,
    fontSize: 15,
  },

  textoBotao: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
