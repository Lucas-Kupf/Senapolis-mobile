import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const filmesEmAlta = [
  {
    id: "1",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/b20ff56053e2b6c9c450b76434ee02c0d1e2e88565ea70838a386f83c3ccb31a.jpg",
    title: "Quarteto Fantastico",
  },
  {
    id: "2",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj9EkD8-Z-7WtqBdzNXl5nEfW6KLCDwm9CEeGHlNNsPWYl9hJSwX5ddZY2L9bv-4xhQoDoAtxmkfrg1d3rz7vYLUnZSKkaAQ6c5loQKemb91U7fQLK5BMsWMT_bSCBsX4Y8tCSMnxOWkjMsGrGSXvVfT782YME9KfAVO7g51roue8AD6Djqb7Ri-KUf5k/s2100/barbie.webp",
    title: "Barbie",
  },
  {
    id: "3",
    image:
      "https://media.fstatic.com/PqC0viMJAaKjU9MAH94Fi1dXw4k=/350x525/smart/filters:format(webp)/media/movies/covers/2025/10/cats_UbEI2Yk.png",
    title: "O Agente Secreto",
  },
  {
    id: "4",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmI4M2JjYjgtZTA4Mi00N2IyLWI3MjYtMGJjZGQxYzA5NGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Zootopia 2",
  },
];

const seriesData = [
  {
    id: "1",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTU0YjUyNDctYmM0OC00OWU5LWJmNTMtODY5Njc4MzVlMWE2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Big Mouth",
  },
  {
    id: "2",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9a/All_Her_Fault.jpg/230px-All_Her_Fault.jpg",
    title: "All Her Fault",
  },
  {
    id: "3",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Game Of Thrones",
  },
  {
    id: "4",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmM1MGM0MDQtZTAzNy00ZGJkLWI4MDUtNjBmMzdhYjhlM2QwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "White Lotus",
  },
];

const moviesData = [
  {
    id: "1",
    image:
      "https://br.web.img2.acsta.net/img/d0/a1/d0a178dfb53053c71b2e157e313386d1.jpg",
    title: "Avatar: Fogo e Cinzas",
  },
  {
    id: "2",
    image:
      "https://ingresso-a.akamaihd.net/prd/img/movie/juntos/0d28553d-3373-4153-be02-bce75e6856a8.webp",
    title: "Juntos",
  },
  {
    id: "3",
    image:
      "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-04311-c71b97e89808d8e67617539759666797-1024-1024.webp",
    title: "A Hora do Mal",
  },
  {
    id: "4",
    image:
      "https://br.web.img3.acsta.net/img/87/65/8765fbd6153d947eaff34022d772f84d.jpg",
    title: "A empregada",
  },
];

const bannerData = [
  {
    id: "1",
    image:
      "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/12/timothee-chalamet-zendaya.jpeg",
    title: "Duna: Part Two",
  },
  {
    id: "2",
    image:
      "https://rollingstone.com.br/wp-content/uploads/2025/08/onde-assistir-a-f1-o-filme-maior-filme-da-carreira-de-brad-pitt-nas-plataformas-digitais.jpg",
    title: "F1: O filme",
  },
  {
    id: "3",
    image:
      "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/04/pecadores-filme.jpg?w=1200&h=675&crop=1",
    title: "Os pecadores",
  },
];

const {width} = Dimensions.get("window")

export default function Index() {
  return (
  <SafeAreaView style={style.container}>
    <ScrollView>
    <View>
      <Text style={style.mainTitle}>Senapolis</Text>
      <Text style={style.welcomeText}>Bem vindo, ao seu catalogo de filmes e series</Text>
    </View>

    <View style={style.section}>
      <FlatList
        data={bannerData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(({item}) => (
          <View style={style.bannerContainer}>
            <View style={style.bannerItem}>
              <Image style={style.bannerImage} source={{uri: item.image}}></Image>
              <Text style={style.bannerTitle}>{item.title}</Text>
            </View>
          </View>
        ))}
      
      />
    </View>

     <View style={style.section}>
        <Text style={style.sectionTitle}>Filmes em Alta</Text>
        <FlatList 
          contentContainerStyle={style.movieList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filmesEmAlta} 
          renderItem={(({item}) => (
            <View style={style.movieItem}>
                <Image style={style.movieImage} source={{uri: item.image }}/>
                <Text style={style.movieTitle}>{item.title}</Text>
            </View>
          ))}  >
        </FlatList>
      </View>

      <View style={style.section}>
        <Text style={style.sectionTitle}>Series</Text>
        <FlatList 
          contentContainerStyle={style.movieList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={seriesData} 
          renderItem={(({item}) => (
          <View style={style.bannerContainer}>
            <View style={style.movieItem}>
                <Image style={style.movieImage} source={{uri: item.image }}/>
                <Text style={style.movieTitle}>{item.title}</Text>

                <TouchableOpacity style={style.bannerButton}>
                  <Text style={style.bannerButtonText}>Assistir</Text>
                </TouchableOpacity>
            </View>
          </View>  
          ))}  >
        </FlatList>
      </View>

      <View style={style.section}>
        <Text style={style.sectionTitle}>Filmes em Alta</Text>
        <FlatList 
          contentContainerStyle={style.movieList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={moviesData} 
          renderItem={(({item}) => (
            <View style={style.movieItem}>
                <Image style={style.movieImage} source={{uri: item.image }}/>
                <Text style={style.movieTitle}>{item.title}</Text>
            </View>
          ))}  >
        </FlatList>
      </View>

      </ScrollView>

  </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: "#2e2e2e",
    flex: 1, // Ocupa a tela inteira
  },
  mainTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5
  },
  welcomeText: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 25
  },
  movieImage: {
    width: 120,
    height: 180,
    borderRadius: 8
  },
  movieTitle: {
    color: "#cfcfcf",
    marginTop: 5,
    fontSize: 12,
    fontWeight: 600,
    flexWrap: "wrap"
  },
  movieItem: {
    width: 120
  },

  sectionTitle: {
    color: "#e5e5e5",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10
  },
  movieList: {
    gap: 15
  },
  section: {
    marginBottom: 30
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    bottom: 50,
    left: 15
  },
  bannerItem: {
    flex: 1,
    height: 200,
    paddingHorizontal: 5,
    position: "relative"
  },
  bannerContainer: {
    width: width - 30
  },
  bannerButton: {
    backgroundColor: "#eca60e",
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 16,
    position: "absolute",
    bottom: 10,
    left: 15
  },
  bannerButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold"
  }
})