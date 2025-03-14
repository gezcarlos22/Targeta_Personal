import { Stack, Slot } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{headerShown: false}} />
    <Stack.Screen name="experiencia" options={{headerShown: false}} />
    <Stack.Screen name="estudios" options={{headerShown: false}} />
    <Stack.Screen name="proyectos" options={{headerShown: false}} />
    <Stack.Screen name="skills" options={{headerShown: false}} />
  </Stack>;
}
