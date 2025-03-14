import { Pressable, Text, StyleSheet, View } from "react-native";
import { Icono } from "./Icono";

interface TarjetaHardSkillProps {
    texto: string;
    icono: string;
    tamaño: number;
    onPress?: () => void;
}

export const TarjetaHardSkill= (
    { texto, icono, tamaño, onPress }: TarjetaHardSkillProps
) => {
    return (
            <Pressable
                onPress={onPress}>
                {({ pressed }) => (
                    <>
                      <View style={[styles.customButtonHardSkill]}>
                        {icono && ( // Renderizar el Icono solo si está definido
                            <Icono
                                icon={icono}
                                size={tamaño}
                                color={"white"}
                            />
                        )}
                        {texto && ( // Renderizar el Text solo si texto está definido
                            <Text style={[styles.textHardSkill]}>
                                {texto}
                            </Text>
                        )}
                      </View>  
                    </>
                )}
            </Pressable> 
    );
};

const styles = StyleSheet.create({
    textHardSkill: {
        fontSize: 16,
        color: "white",
    },
    customButtonHardSkill: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white", // Borde por defecto
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        width: 130,
    },
    buttonPressed: {
        backgroundColor: "white", // Fondo cuando está presionado
        borderColor: "darkblue", // Borde cuando está presionado
    },
});