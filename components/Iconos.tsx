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
      <Icono icon="github" onPress={onGithubPress} />
      <Icono icon="linkedin" onPress={onLinkedinPress} />
      <Icono icon="at" onPress={onAtPress} />
      <Icono icon="instagram" onPress={onInstagramPress} />
      <Icono icon="behance" onPress={onBehancePress} />
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