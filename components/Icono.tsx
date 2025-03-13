import React from "react";
import { Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

interface IconoProps {
  icon: "github" | "linkedin" | "at" | "instagram" | "behance" | "arrow-up-right-from-square";
  size?: number;
  color?: string;
  activeColor?: string;
  onPress: () => void;
}

export const Icono = ({
  icon,
  size,
  color = "white",
  activeColor = "blue",
  onPress,
}: IconoProps) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <FontAwesome6
          name={icon}
          size={size}
          color={pressed ? activeColor : color}
        />
      )}
    </Pressable>
  );
};