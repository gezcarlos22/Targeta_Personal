import { Pressable, Text, StyleSheet, View } from "react-native";
import { Icono2 } from "./Icono";
import { Link } from "expo-router";

type AppRoutes = "/" | "/experiencia" | "/estudios" | "/proyectos" | "/skills";

interface BotonLinkProps {
    texto: string;
    icono?: "card-account-details-outline" | "school-outline" | "head-cog-outline" | "cellphone-link";
    tamaño: number;
    link: AppRoutes;
    onPress?: () => void;
}

export const BotonLink = (
    { texto, icono, tamaño, link, onPress }: BotonLinkProps
) => {
    return (
        <Link href={link} asChild >    
            <Pressable
                onPress={onPress}>
                {({ pressed }) => (
                    <>
                      <View style={[styles.customButton, pressed && { backgroundColor: "white" }]}>
                        {icono && ( // Renderizar el Icono solo si está definido
                            <Icono2
                                icon={icono}
                                size={tamaño}
                                color={pressed ? "darkblue" : "white"}
                            />
                        )}
                        {texto && ( // Renderizar el Text solo si texto está definido
                            <Text style={[styles.text, pressed && { color: "darkblue" }]}>
                                {texto}
                            </Text>
                        )}
                      </View>  
                    </>
                )}
            </Pressable> 
        </Link>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white",
    },
    customButton: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1E2023", // Fondo por defecto
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