import React from "react";
import { View, StyleSheet } from "react-native";
import { Icono } from "@/components/Icono";

interface RedireccionProps {
  onPress: () => void;
}

export const Redireccion = ({
  onPress,
}: RedireccionProps) => {
  return (
    <View style={styles.customButton}>
      <Icono icon="arrow-up-right-from-square" onPress={onPress} size={18}/>
    </View>
  );
};
  
const styles = StyleSheet.create({
    customButton: {
        backgroundColor: "#1E2023",
        borderColor: "white",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 10,
      },
});