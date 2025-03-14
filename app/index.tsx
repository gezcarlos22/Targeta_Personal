import { Text, View, SafeAreaView, StyleSheet, ScrollView, Image, Pressable, Linking} from "react-native";
import { Iconos } from "@/components/Iconos";
import { BotonLink } from "@/components/BotonLink";
import { BotonIcon } from "@/components/BotonIcon";


const onGithubPressHandler = () => {
  Linking.openURL("https://github.com/gezcarlos22");
};
const onLinkedinPressHandler = () => {
  Linking.openURL("https://www.linkedin.com/in/carlos-gez");
};
const onAtPressHandler = () => {
  Linking.openURL("mailto:gez.carlos.98@gmail.com");
};
const onInstagramPressHandler = () => {
  Linking.openURL("https://www.instagram.com/gezcarlos");
};
const onBehancePressHandler = () => {
  Linking.openURL("https://www.behance.net/gezcarlos");
};
const onContactoHandler = () => {
  Linking.openURL("https://drive.google.com/file/d/1PmAjMA4gQYOEe-1Vstn8a-2Dnl2rbVpA/view?usp=sharing");
};

export default function Index() {
  return (
    <SafeAreaView
      style={styles.contenido}
    >
      <ScrollView>
        <View style={styles.contentContainer}>
          <Image source={{uri:"https://img.freepik.com/fotos-premium/programador-codificando-trabajo-manos-computadora-portatil-programando-noche-trabajando-pantalla-lineas-codigo_1019437-4819.jpg?w=996"}} style={styles.banner}/>
          <Image source={require("@/assets/images/yo.jpg")} style={styles.imagenPersonal}/>
          <Text style={styles.title}>Gez Carlos Enrique</Text>
          <Iconos 
            onGithubPress={onGithubPressHandler}
            onLinkedinPress={onLinkedinPressHandler}
            onAtPress={onAtPressHandler}
            onInstagramPress={onInstagramPressHandler}
            onBehancePress={onBehancePressHandler}
          />

          <BotonIcon texto="Ver mi CV " icono="arrow-up-right-from-square" tamaño={18} onPress={onContactoHandler}/>

          <Text style={styles.bio}>Soy un Desarrollador Web con experiencia en el desarrollo de aplicaciones y sitios responsivos. Además, cuento con formación en Ciencia de Datos, UX/UI y Testing QA, lo que me permite aportar una visión integral en cada proyecto.</Text>
          
          <View style={styles.linkContainer}>
            <BotonLink icono="card-account-details-outline" tamaño={40} texto="Experiencia" link="/experiencia"/>
            <BotonLink icono="school-outline" tamaño={40} texto="Estudios" link="/estudios"/>
            <BotonLink icono="cellphone-link" tamaño={40} texto="Proyectos" link="/proyectos"/>
            <BotonLink icono="head-cog-outline" tamaño={40} texto="Skills" link="/skills"/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  contenido: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#010409",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
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
    borderColor: "#1E2023",
    marginTop: -100,
  },
  bio: {
    fontSize: 15,
    lineHeight: 18,
    color: "white",
    marginHorizontal: 20,
    marginVertical:20
  },
  linkContainer:{
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 20,
    gap: 20
  },
});