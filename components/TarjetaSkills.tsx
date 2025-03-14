import { View, Text, StyleSheet } from "react-native";

interface SkillsProps {
    softSkills: string[]; // Propiedad correctamente definida
}

export const TarjetaSoftSkills = ({ softSkills }: SkillsProps) => {
    return (
        <View style={styles.container}>
            {softSkills.map((skill, index) => ( // Usar softSkills correctamente
                <View key={index} style={styles.contenidoTitle}>
                    <Text style={styles.text}>{skill}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
        padding:20,
    },
    contenidoTitle: { 
      justifyContent:"center",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 30,
      borderColor: "white",
      borderWidth: 1,
    },
    text:{
        fontSize: 14,
        color: "white",
      },
  });