import { Image, View, Text } from "react-native";

<View style={{
    flex:1,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    padding: 10
}}>
    <Image style={{width: 80, height: 80}} source={{uri:"https://media.licdn.com/dms/image/v2/C560BAQFoMbh8Jawjhg/company-logo_100_100/company-logo_100_100/0/1631338342207?e=1749081600&v=beta&t=6fgq4Zi_lslt6EwSEinoOUmyLfOT2qaNu9C_ny94y9c"}}/>
    <View style={{flex:1, flexDirection:"column"}}>
    <Text style={{fontWeight:"bold", fontSize: 14}}>Posición</Text>
    <Text style={{fontSize:12, lineHeight: 18}}>Empresa</Text>
    <Text style={{fontSize: 12, color: "#808080", lineHeight: 18}}>Fecha</Text>
    <Text style={{fontSize: 12, color: "#808080", lineHeight: 18, marginBottom: 10}}>Locación</Text>
    <Text style={{fontSize: 12,fontWeight: "bold",lineHeight: 18}}>Tecnologías</Text>
    </View>
</View>