import { SafeAreaView, ScrollView, Text, Pressable, StyleSheet, View} from "react-native";
import { Link } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { TarjetaExperiencia } from "@/components/TarjetaExperiencia";
import { experiencias } from "@/data/experiencia";

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

export default function Experiencia() {
    return (
        <SafeAreaView style={styles.contenido}>
            <ScrollView >
                <View style={styles.contentContainer}>
                    <Link asChild href="/">
                        <Pressable style={styles.customButton}>
                            <FontAwesome6 name="arrow-left" size={24} color="white" />
                        </Pressable>
                    </Link>
                </View>
                <View style={styles.contenidoTitle}>
                    <Text style={styles.title}>Experiencia</Text>
                </View>
                
                {renderExperiencias()}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    backgroundColor: "#010409",
  },
  contentContainer: {
    width: 70,
  },

  contenidoTitle: { 
    flexDirection: "row", 
    justifyContent:"center",
    marginHorizontal: 10, 
    marginVertical: 15,
    backgroundColor: "#1E2023",
    paddingVertical: 10,
    borderRadius: 30,
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  customButton: {
    backgroundColor: "#1E2023",
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 10,
  },
});
