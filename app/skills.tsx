import { SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import { Header } from "@/components/Header";
import React from "react";
import { TarjetaSoftSkills } from "@/components/TarjetaSkills";
import { skills } from "@/data/skills";
import { BotonIcon } from "@/components/BotonIcon";
import { TarjetaHardSkill } from "@/components/TarjetaHardSkills";

export default function Skills() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <Header titulo="Skills"/>
                <View style={styles.containerContenido}>
                  <BotonIcon icono="chevron-down" tamaño={18} texto="Soft Skills"/>
                  <TarjetaSoftSkills softSkills={skills[0].softSkill} />
                  <BotonIcon icono="chevron-down" tamaño={18} texto="Hard Skills"/>
                  <View style={styles.skillsContainer}>
                    <TarjetaHardSkill texto="HTML" icono="html5" tamaño={40}/>
                    <TarjetaHardSkill texto="CSS" icono="css3-alt" tamaño={40}/>
                    <TarjetaHardSkill texto="Angular" icono="angular" tamaño={40}/>
                    <TarjetaHardSkill texto="JavaScript" icono="js" tamaño={40}/>
                    <TarjetaHardSkill texto="React" icono="react" tamaño={40}/>
                    <TarjetaHardSkill texto="Bootstrap" icono="bootstrap" tamaño={40}/>
                    <TarjetaHardSkill texto="Java" icono="java" tamaño={40}/>
                    <TarjetaHardSkill texto="Python" icono="python" tamaño={40}/>
                    <TarjetaHardSkill texto="PHP" icono="php" tamaño={40}/>
                    <TarjetaHardSkill texto="Node-js" icono="node-js" tamaño={40}/>
                    <TarjetaHardSkill texto="Figma" icono="figma" tamaño={40}/>
                    <TarjetaHardSkill texto="Github" icono="github" tamaño={40}/>
                    <TarjetaHardSkill texto="R-project" icono="r-project" tamaño={40}/>
                  </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010409",
  },
  containerContenido:{
    marginHorizontal:20,
  },
  skillsContainer:{
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 20,
    marginTop:20,
    gap: 20
  },
});