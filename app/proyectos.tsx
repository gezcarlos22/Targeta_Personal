import { SafeAreaView, ScrollView, Text, Pressable, StyleSheet, View} from "react-native";
import { proyectos } from "@/data/proyectos";
import { TarjetaProyecto } from "@/components/TarjetaProyecto";
import { Header } from "@/components/Header";

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
                <Header titulo="Proyectos"/>
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
});
