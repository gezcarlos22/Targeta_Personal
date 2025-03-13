import React from "react";
import { Image, View, Text, StyleSheet, Linking} from "react-native";
import { Redireccion } from "./Redireccion";


interface TarjetaProyecto {
    logo: string;
    nombreProy: string;
    descripcion: string;
    skillsUsadas: string;
    redireccion: string;
};

const onProyectoPressHander = (redireccion:string) => {
  Linking.openURL(redireccion);
};
export const TarjetaProyecto = ({
    logo,
    nombreProy,
    descripcion,
    skillsUsadas,
    redireccion,
  }: TarjetaProyecto) =>{
    return (
        <View style={styles.contenedor}>
          <Image
            style={styles.logo}
            source={{
              uri: logo,
            }}
          />
          <View style={styles.contenedorDeDescripcion}>
            <View style={styles.contenedorDeContenido}>
                <Text style={styles.posicion}>{nombreProy}</Text>
                <Text style={styles.empresa}>{descripcion}</Text>
                <Text style={styles.tecnologias}>{skillsUsadas}</Text>
            </View>
            <View>
                <Redireccion onPress={() => onProyectoPressHander(redireccion)} />
            </View>
          </View>
          
        </View>
      );
    };

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 20,
        borderBottomColor: "white",
        borderBottomWidth: 1,
        padding: 20,
    },
    posicion:{fontWeight:"bold", fontSize: 14, color: "white"},
    empresa: {fontSize:12, lineHeight: 18, color: "white"},
    tecnologias: {fontSize: 12, fontWeight:"bold", lineHeight: 18, color: "#808080"},
    contenedorDeContenido:{flex: 1, flexDirection:"column"},
    logo:{width: "100%", height: 150, borderRadius:15},
    
    contenedorDeDescripcion: {
        flexDirection: "row"
    }
});










