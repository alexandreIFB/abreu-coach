import {  Stack } from 'expo-router';
import { Text } from '../components/Text';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Text>Essa tela não existe!.</Text>
    </>
  );
}

