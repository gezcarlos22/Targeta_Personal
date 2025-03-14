import { SafeAreaView, ScrollView, StyleSheet} from "react-native";
import { TarjetaExperiencia } from "@/components/TarjetaExperiencia";
import { experiencias } from "@/data/experiencia";
import { Header } from "@/components/Header";

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
                <Header titulo="Experiencia"/>
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
});
