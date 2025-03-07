import { Text, View, SafeAreaView, StyleSheet, ScrollView, Image, Button, Linking} from "react-native";
import { TarjetaExperiencia } from "@/components/TarjetaExperiencia";
import { experiencias } from "@/data/experiencia";
import { Iconos } from "@/components/Iconos";

const renderExperiencias = () =>
  experiencias.map((experiencia, index) => {
    return (
      <TarjetaExperiencia
        key={`${index}-${experiencia.empresa}-${experiencia.posicion}`}
        logo={experiencia.logo}
        posicion={experiencia.posicion}
        empresa={experiencia.empresa}
        fecha={experiencia.fecha}
        locacion={experiencia.locacion}
        tecnologias={experiencia.tecnologias}
      />
    );
});

const onGithubPressHandler = () => {
  Linking.openURL("https://github.com/gezcarlos22");
};
const onTwitterPressHandler = () => {
  Linking.openURL("URL TWITTER");
};
const onAtPressHandler = () => {
  Linking.openURL("mailto:gez.carlos.98@gmail.com");
};
const onInstagramPressHandler = () => {
  Linking.openURL("URL INSTAGRAM");
};
const onFacebookPressHandler = () => {
  Linking.openURL("URL FACEBOOK");
};
  
export default function Index() {
  return (
    <SafeAreaView
      style={styles.contenido}
    >
      <ScrollView>
        <View style={styles.contentContainer}>
          <Image source={{uri:"https://itspectrumsolutions.com/wp-content/uploads/2024/03/reactnative.jpg"}} style={styles.banner}/>
          <Image source={require("@/assets/images/yo.jpg")} style={styles.imagenPersonal}/>
          <Text style={styles.title}>Gez Carlos Enrique</Text>
          <Iconos 
            onGithubPress={onGithubPressHandler}
            onTwitterPress={onTwitterPressHandler}
            onAtPress={onAtPressHandler}
            onInstagramPress={onInstagramPressHandler}
            onFacebookPress={onFacebookPressHandler}
          />

          <Button title="Contacto" onPress={onContactoHandler}/>
          <Text style={styles.bio}>Soy un Desarrollador Web con experiencia en el desarrollo de aplicaciones y sitios responsivos. Además, cuento con formación en Ciencia de Datos, UX/UI y Testing QA, lo que me permite aportar una visión integral en cada proyecto.</Text>
          <Text style={styles.experiencia}>Experiencia</Text>

          {renderExperiencias()}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    color: "darkblue"
  },
  banner: {
    width: "100%", 
    aspectRatio: 16/9 
  },
  imagenPersonal:{
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    marginTop: -100,
  },
  contenedorIconos:{
    flexDirection:"row",
    marginVertical: 10,
    gap: 10
  },
  bio: {
    fontSize: 12,
    lineHeight: 18
  },
  experiencia:{
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
    color: "darkblue"
  }
});

const onContactoHandler = () => {
  console.log("mailto:gez.carlos.98@gmail.com")
  Linking.openURL("mailto:gez.carlos.98@gmail.com");
};
