import {  Redirect, Stack } from 'expo-router';
import { useClient } from '../../../../contexts/ClientContext';



export default function ClientsStackLayout() {
  const {client} = useClient();

  const user = client;

  if(!user){
    return <Redirect href="/clients" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
          headerShown: true,
          title: 'Aluno',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'GeneralSans-600'
          },
        }} />
      <Stack.Screen name="newTrainingForm/index"
        options={{
          headerShown: true,
          title: `Novo Treino - ${user.name}`,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'GeneralSans-600'
          }
        }} />
    </Stack>
  );
}
