import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Icono } from "@/components/Icono";

interface BotonIconProps {
  texto?:string
  icono: string;
  tamaño?: number;
  
  onPress?: () => void;
}

export const BotonIcon = ({ icono, tamaño, onPress, texto }: BotonIconProps) => {
  return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.customButton,
          pressed && styles.buttonPressed,
        ]}
      > 
        {({pressed}) => (
          <>
            {texto && ( // Renderizar el Text solo si texto está definido
            <Text style={[styles.text, pressed && { color: "darkblue" }]}>
              {texto}
            </Text>
            )}
            <Icono icon={icono} size={tamaño} color={pressed ? "darkblue" : "white"}  />
          </>
        )}
      </Pressable>
  );
};
  
const styles = StyleSheet.create({
  text:{
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  customButton: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignContent: "center",
    alignItems:"center",
    backgroundColor: "#1E2023",
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: "white",
    borderColor: "darkblue",
    borderWidth: 1,
  },
});