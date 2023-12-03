import { Stack } from 'expo-router';
import { ClientProvider } from '../../../contexts/ClientContext';



export default function ClientsStackLayout() {
  return (
    <ClientProvider>
      <Stack>
        <Stack.Screen name="index"
          options={{
            headerShown: true,
            title: 'Alunos',
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: 'GeneralSans-600'
            }
          }}
        />
        <Stack.Screen name="[id]" options={{
          headerShown: false,
          title: 'Aluno',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'GeneralSans-600'
          }
        }} />
        <Stack.Screen name="newClient/index"
          options={{
            headerShown: true,
            title: 'Novo Aluno',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: 'GeneralSans-600'
            }
          }} />
      </Stack>
    </ClientProvider>
  );
}
