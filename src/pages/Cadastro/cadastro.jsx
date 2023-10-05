import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import ImageFundo from "../../assets/fundo1.jpg";
import Logo from "../../assets/logo.png";

export function Cadastros() {
  const handleEntrarPress = () => {
    console.log("");
  };

  const handleCadastrarPress = () => {
    alert("Deseja volta para login ?");
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
                  <Text style={styles.boldText}>CADASTRO</Text>
                </Text>
              </View>
              <View style={styles.container}>
                <TextInput
                  style={styles.input}
                  placeholder="Nome"
                  placeholderTextColor="gray"
                  autoFocus={true}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Sobrenome"
                  secureTextEntry={true}
                  placeholderTextColor="gray"
                />
                <TextInput
                  style={styles.input}
                  placeholder="E-mail"
                  placeholderTextColor="gray"
                  autoFocus={true}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Data Nacimento"
                  secureTextEntry={true}
                  placeholderTextColor="gray"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Numero da CNH"
                  placeholderTextColor="gray"
                  autoFocus={true}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  secureTextEntry={true}
                  placeholderTextColor="gray"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Confirmar Senha"
                  placeholderTextColor="gray"
                  autoFocus={true}
                />
              </View>
              <View style={styles.content}></View>
              <View style={styles.contentbotao}>
                <TouchableOpacity
                  style={styles.botaoentrar}
                  onPress={handleEntrarPress}
                >
                  <Text style={styles.textoBotaoentrar}>Proximo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.botaocadastrar}
                  onPress={handleCadastrarPress}
                >
                  <Text style={styles.textoBotaocadastrar}>Voltar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerlogo}>
          <Image source={Logo} resizeMode="contain" />
        </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  quadrado: {
    flex: 1,
    top: -866.3,
    width: 320,
    height: 100,
    left: 37,
    backgroundColor: 'rgba(255, 255, 255, 0)'
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
    top: -785,
    left: 110,
  },

  article: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 30,
    padding: 16,
    height: 810,
    borderWidth: 1,
    borderColor: "#3f3f3f",
  },
  content: {
    lineHeight: 1.6,
    marginTop: 170,
  },
  contentText: {
    left: 68,
    top: -30,
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

  input: {
    color: "#3f3f3f",
    borderWidth: 1.5,
    borderColor: "#3f3f3f",
    backgroundColor: "#ffff",
    borderRadius: 30,
    top: -50,
    height: 50,
    paddingHorizontal: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  contentbotao: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botaoentrar: {
    backgroundColor: "#00b981",
    borderRadius: 10,
    borderWidth: 0,
    top: -200,
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
    top: -150,
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

  textoBotao: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
