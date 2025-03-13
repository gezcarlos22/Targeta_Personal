import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";


const SIZE = 80;

interface TarjetaExperiencia {
    logo: string;
    posicion: string;
    empresa: string;
    fecha: string;
    locacion: string;
    tecnologias: string;
};

export const TarjetaExperiencia = ({
    logo,
    posicion,
    empresa,
    fecha,
    locacion,
    tecnologias,
  }: TarjetaExperiencia) =>{
    return (
        <View style={styles.contenedor}>
          <Image
            style={styles.logo}
            source={{
              uri: logo,
            }}
          />
          <View style={styles.contenedorDeContenido}>
            <Text style={styles.posicion}>{posicion}</Text>
            <Text style={styles.empresa}>{empresa}</Text>
            <Text style={styles.fecha}>{fecha}</Text>
            <Text style={styles.locacion}>{locacion}</Text>
            <Text style={styles.tecnologias}>{tecnologias}</Text>
          </View>
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