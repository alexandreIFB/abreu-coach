import {  Redirect, Stack, useLocalSearchParams } from 'expo-router';
import { clientList } from '../../../../constants/clients_mock';



export default function ClientsStackLayout() {
  const { id } = useLocalSearchParams();

  const user = clientList.find((client) => client.id === id);

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
