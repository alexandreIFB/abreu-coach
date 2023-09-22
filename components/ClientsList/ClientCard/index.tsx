import { Client } from '../../../constants/clients_mock';
import { Text } from '../../Text';
import {  ClientImage, ClientInfo,  Container } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import {Image} from 'react-native';



type ClientCardProps = {
  client: Client
}


export function ClientCard({client}: ClientCardProps){
  const resolvedSource = Image.resolveAssetSource({ uri: client.profileImage });

  return (
    <Container>
      <ClientImage
        source={resolvedSource}
      />
      <ClientInfo>
        <Text weight='600' size={16}>{client.name}</Text>
        <Text size={12}>Treino / Dieta / Protocolo</Text>
      </ClientInfo>
      <FontAwesome name='long-arrow-right' size={16}/>
    </Container>
  );
}
