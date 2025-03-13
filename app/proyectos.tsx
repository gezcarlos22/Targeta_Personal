import { SafeAreaView, ScrollView, Text, Pressable, StyleSheet, View} from "react-native";
import { Link } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { proyectos } from "@/data/proyectos";
import { TarjetaProyecto } from "@/components/TarjetaProyecto";

const renderProyectos = () =>
  proyectos.map((proyectos, index) => {
    return (
      <TarjetaProyecto
        key={`${index}-${proyectos.descripcion}-${proyectos.nombreProy}`}
        logo={proyectos.logo}
        nombreProy={proyectos.nombreProy}
        descripcion={proyectos.descripcion}
        skillsUsadas={proyectos.skillsUsadas}
        redireccion={proyectos.redireccion}
      />
    );
});

export default function Proyectos() {
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
                    <Text style={styles.title}>Proyectos</Text>
                </View>
                
                {renderProyectos()}
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
