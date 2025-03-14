import React from "react";
import { Image, View, Text, StyleSheet, Linking} from "react-native";
import { BotonIcon } from "./BotonIcon";

const SIZE = 80;

interface TarjetaEstudios {
    logo: string;
    titulo: string;
    colegio: string;
    fecha: string;
    locacion: string;
    skills: string;
    certificado: string;
};
const onEstudiosPressHander = (certificado:string) => {
  Linking.openURL(certificado);
};

export const TarjetaEstudios = ({
    logo,
    titulo,
    colegio,
    fecha,
    locacion,
    skills,
    certificado
  }: TarjetaEstudios) =>{
    return (
        <View style={styles.contenedor}>
          <Image
            style={styles.logo}
            source={{
              uri: logo,
            }}
          />
          <View style={styles.contenedorDeContenido}>
            <Text style={styles.posicion}>{titulo}</Text>
            <Text style={styles.empresa}>{colegio}</Text>
            <Text style={styles.fecha}>{fecha}</Text>
            <Text style={styles.locacion}>{locacion}</Text>
            <Text style={styles.tecnologias}>{skills}</Text>
          </View>
          <BotonIcon onPress={()=>onEstudiosPressHander(certificado)} icono="arrow-up-right-from-square" tamaño={18}/>
        </View>
      );
    };

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 20,
        borderBottomColor: "white",
        borderBottomWidth: 1,
        padding: 20,
    },
    posicion:{fontWeight:"bold", fontSize: 14, color: "white"},
    empresa: {fontSize:12, lineHeight: 18, color: "white"},
    fecha: {fontSize: 12, color: "#808080", lineHeight: 18},
    locacion: {fontSize: 12, color: "#808080", lineHeight: 18, marginBottom: 10},
    tecnologias: {fontSize: 12, fontWeight:"bold", lineHeight: 18, color: "#808080"},
    contenedorDeContenido:{flex: 1, flexDirection:"column"},
    logo:{width: SIZE, height: SIZE, borderRadius:15},
});