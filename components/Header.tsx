import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { BotonIcon } from "./BotonIcon";

interface HeaderProps {
    titulo:string;
}

export const Header = ({titulo}:HeaderProps)=>{
    return(
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Link asChild href="/">
                        <BotonIcon icono="arrow-left" tamaño={24}/>
                    </Link>
                </View>
                <View style={styles.contenidoTitle}>
                    <Text style={styles.title}>{titulo}</Text>
                </View>
            </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        margin: 20,
        justifyContent:"center",
        alignItems: "center",
        gap: 10,
    },
    contentContainer: {
    width: 42,
    },
    contenidoTitle: { 
      flex: 1,
      justifyContent:"center",
      alignItems: "center",
      backgroundColor: "#1E2023",
      paddingVertical: 10,
      borderRadius: 30,
    },
    title:{
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },
  });