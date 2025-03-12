import { SafeAreaView, ScrollView, Text, Pressable, StyleSheet, View} from "react-native";
import { Link } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { estudios } from "@/data/estudios"
import { TarjetaEstudios } from "@/components/TarjetaEstudios";

const renderEstudios = () =>
  estudios.map((estudios, index) => {
    return (
      <TarjetaEstudios
        key={`${index}-${estudios.colegio}-${estudios.titulo}`}
        logo={estudios.logo}
        titulo={estudios.titulo}
        colegio={estudios.colegio}
        fecha={estudios.fecha}
        locacion={estudios.locacion}
        skills={estudios.skills}
      />
    );
});

export default function Estudios() {
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
                    <Text style={styles.title}>Estudios</Text>
                </View>
                
                {renderEstudios()}
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
