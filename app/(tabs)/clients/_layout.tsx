import {  Stack } from 'expo-router';



export default function ClientStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true, title:'Alunos' }} />
      <Stack.Screen name="[id]" options={{ headerShown: true }} />
    </Stack>
  );
}
