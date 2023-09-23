import {  Stack } from 'expo-router';



export default function ClientStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
          headerShown: true,
          title:'Alunos',
          headerTitleStyle: {
            fontSize: 24,
            fontFamily: 'GeneralSans-600'
          }
        }}
      />
      <Stack.Screen name="[id]" options={{
        headerShown: true,
        title: 'Aluno',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 16,
          fontFamily: 'GeneralSans-600'
        }
      }} />
    </Stack>
  );
}
