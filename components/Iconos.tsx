import React from "react";
import { View, StyleSheet } from "react-native";
import { Icono } from "@/components/Icono";

interface IconosProps {
  onGithubPress: () => void;
  onLinkedinPress: () => void;
  onAtPress: () => void;
  onInstagramPress: () => void;
  onBehancePress: () => void;
}

export const Iconos = ({
  onGithubPress,
  onLinkedinPress,
  onAtPress,
  onInstagramPress,
  onBehancePress,
}: IconosProps) => {
  return (
    <View style={styles.contenedorIconos}>
      <Icono icon="github" onPress={onGithubPress} size={24} />
      <Icono icon="linkedin" onPress={onLinkedinPress} size={24}/>
      <Icono icon="at" onPress={onAtPress} size={24}/>
      <Icono icon="instagram" onPress={onInstagramPress} size={24}/>
      <Icono icon="behance" onPress={onBehancePress} size={24}/>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorIconos: { 
    flexDirection: "row", 
    marginTop: 20, 
    marginBottom: 20,
    gap: 15,
    backgroundColor: "#1E2023",
    paddingVertical: 15,
    paddingHorizontal:20,
    borderRadius: 30
  },
});