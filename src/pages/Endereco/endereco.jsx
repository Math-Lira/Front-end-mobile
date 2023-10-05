import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import CheckBox from 'react-native-checkbox-component';
import ImageFundo from "../../assets/fundo1.jpg";
import Logo from "../../assets/logo.png";

export function Endereco() {
  const [isChecked, setIsChecked] = useState(false);


  const handleEntrarPress = () => {
    alert("Cadastro finalizado com sucesso!");
  };

  const handleCadastrarPress = () => {
    alert("Deseja Volta para cadastro ?");
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
                  <Text style={styles.boldText}>ENDEREÇO</Text>
                </Text>
              </View>
              <View style={styles.container}>
                <TextInput
                  style={styles.input}
                  placeholder="CEP"
                  placeholderTextColor="gray"
                  autoFocus={true}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Endereço"
                  secureTextEntry={true}
                  placeholderTextColor="gray"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Bairro"
                  placeholderTextColor="gray"
                  autoFocus={true}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Cidade"
                  secureTextEntry={true}
                  placeholderTextColor="gray"
                />
                <TextInput
                  style={styles.input}
                  placeholder="UF"
                  placeholderTextColor="gray"
                  autoFocus={true}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Numero"
                  secureTextEntry={true}
                  placeholderTextColor="gray"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Complemento"
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
                  <Text style={styles.textoBotaoentrar}>Finalizar</Text>
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
          <View style={styles.modalContainer}>
            <Text style={styles.textcheck}>Deseja ativar o plano ?</Text>
            <CheckBox style={styles.checkbox}
              isChecked={isChecked}
              size={30}
              onPress={() => setIsChecked(!isChecked)}
            />
          </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    top: -170,
    left: 60,
  },

  textcheck: {
    fontSize: 16,
    fontWeight: "bold",
  },

  checkbox: {
    top: -19,
    right: 30,
  },

  quadrado: {
    flex: 1,
    top: -866.3,
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
    top: -785,
    left: 110,
  },

  article: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    top: -35,
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
    top: -55,
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
    top: -170,
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
    top: -120,
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
