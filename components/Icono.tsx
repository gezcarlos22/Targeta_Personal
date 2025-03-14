import React from "react";
import { Pressable} from "react-native";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";

interface IconoProps {
  icon: string;
  size?: number;
  color?: string;
  activeColor?: string;
  onPress?: () => void;
}

export const Icono = ({
  icon,
  size,
  color = "white",
  activeColor = "darkblue",
  onPress,
}: IconoProps) => {
  return (
    <Pressable onPress={onPress} >
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


interface Icono2Props {
  icon?: "language-html5" | 
  "card-account-details-outline" | 
  "school-outline" | 
  "head-cog-outline" | 
  "cellphone-link";
  size?: number;
  color?: string;
  activeColor?: string;
  onPress?: () => void;
}

export const Icono2 = ({
  icon,
  size,
  color = "white",
  activeColor = "darkblue",
  onPress,
}: Icono2Props) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <MaterialCommunityIcons
          name={icon} 
          size={size}
          color={pressed ? activeColor : color}
        />
      )}
    </Pressable>
  );
};


//icon: "card-account-details-outline" | "school-outline" | "head-cog-outline" | "cellphone-link";