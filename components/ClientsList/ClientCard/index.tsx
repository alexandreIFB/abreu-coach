import { Client } from '../../../constants/clients_mock';
import { AvataImage } from '../../AvataImage';
import { Text } from '../../Text';
import {   ClientInfo,  Container } from './styles';
import { FontAwesome } from '@expo/vector-icons';



type ClientCardProps = {
  client: Client
}


export function ClientCard({client}: ClientCardProps){

  return (
    <Container>
      <AvataImage
        url={client.profileImage || ''}
      />
      <ClientInfo>
        <Text weight='600' size={16}>{client.name}</Text>
        <Text size={12}>Treino / Dieta / Protocolo</Text>
      </ClientInfo>
      <FontAwesome name='long-arrow-right' size={16}/>
    </Container>
  );
}
