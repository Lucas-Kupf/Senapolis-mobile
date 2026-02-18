import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
  <SafeAreaView style={style.container}>
    <View>
      <Text style={style.mainTitle}>Senapolis</Text>
      <Text style={style.welcomeText}>Bem vindo, ao seu catalogo de filmes e series</Text>
    </View>
  </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1 // Ocupa a tela inteira
  },
  mainTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  welcomeText: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.8,
  }
})