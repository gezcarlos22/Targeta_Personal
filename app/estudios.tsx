import { SafeAreaView, ScrollView, StyleSheet} from "react-native";
import { estudios } from "@/data/estudios"
import { TarjetaEstudios } from "@/components/TarjetaEstudios";
import { Header } from "@/components/Header";

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
        certificado={estudios.certificado}
      />
    );
});

export default function Estudios() {
    return (
        <SafeAreaView style={styles.contenido}>
            <ScrollView >
                <Header titulo="Estudios"/>
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
});
