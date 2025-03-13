import { Text, View, SafeAreaView, StyleSheet, ScrollView, Image, Pressable, Linking} from "react-native";
import { Iconos } from "@/components/Iconos";
import { Link } from "expo-router";
import { MaterialCommunityIcons, Octicons, MaterialIcons, FontAwesome6} from "@expo/vector-icons";


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

          <Pressable
              style={({ pressed }) => [
                  styles.customButton,
                  pressed && styles.buttonPressed,
              ]}
              onPress={onContactoHandler}
          >
              <Text style={styles.customButtonText}>Contacto</Text>
          </Pressable>
          <Text style={styles.bio}>Soy un Desarrollador Web con experiencia en el desarrollo de aplicaciones y sitios responsivos. Además, cuento con formación en Ciencia de Datos, UX/UI y Testing QA, lo que me permite aportar una visión integral en cada proyecto.</Text>

          <View style={styles.linkContainer}>
            <Link asChild href="/experiencia" style={styles.customButton}>
              <Pressable
                style={({ pressed }) => [
                  styles.linkPressable,
                  pressed && styles.buttonPressed,
                ]}
              >
              <MaterialCommunityIcons name="card-account-details-outline" size={40} color="white" />
                <Text style={styles.experiencia}>Experiencia</Text>
              </Pressable>
            </Link>

            <Link asChild href="/estudios" style={styles.customButton}>
              <Pressable
                style={({ pressed }) => [
                  styles.linkPressable,
                  pressed && styles.buttonPressed,
                ]}
              >
                <MaterialCommunityIcons name="school-outline" size={40} color="white" />
                <Text style={styles.experiencia}>Estudios</Text>
              </Pressable>
            </Link>
          </View>
          <View style={styles.linkContainer}>
            <Link asChild href="/proyectos" style={styles.customButton}>
              <Pressable
                style={({ pressed }) => [
                  styles.linkPressable,
                  pressed && styles.buttonPressed,
                ]}
              >
               <MaterialIcons name="devices" size={40} color="white"/>
                <Text style={styles.experiencia}>Proyectos</Text>
              </Pressable>
            </Link>

            <Link asChild href="/experiencia" style={styles.customButton}>
              <Pressable
                style={({ pressed }) => [
                  styles.linkPressable,
                  pressed && styles.buttonPressed,
                ]}
              >
                <MaterialCommunityIcons name="head-cog-outline" size={40} color="white" />
                <Text style={styles.experiencia}>Skills</Text>
              </Pressable>
            </Link>
          </View>
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
  experiencia:{
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
    color: "white",
  },
  customButton: {
    flexDirection:"column",
    alignItems:"center",
    backgroundColor: "#1E2023",
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: 130,
  },
  customButtonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
  },
  buttonPressed:{
    backgroundColor: "#1B1C1E",
    borderColor: "darkblue", 
  },
  linkContainer:{
    flexDirection:"row",
    alignItems: 'center',
    marginBottom: 20,
    gap: 20
  },
  linkPressable: {
    flexDirection: "column",
    alignItems: 'center',
  },
});

const onContactoHandler = () => {
  console.log("mailto:gez.carlos.98@gmail.com")
  Linking.openURL("mailto:gez.carlos.98@gmail.com");
};
