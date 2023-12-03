import { ClientsList } from '../../../components/ClientsList';
import { Container } from './styles';
import { AddIconFixed } from '../../../components/AddIconFixed';
import {  TouchableOpacity } from 'react-native';

export default function TabClientsScreen() {
  return (
    <Container>
      <ClientsList />
      <TouchableOpacity>
        <AddIconFixed />
      </TouchableOpacity>
    </Container>
  );
}

