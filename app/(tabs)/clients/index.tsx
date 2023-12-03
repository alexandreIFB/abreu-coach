import { ClientsList } from '../../../components/ClientsList';
import { Container } from './styles';
import { AddIconFixed } from '../../../components/AddIconFixed';
import {  TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function TabClientsScreen() {
  return (
    <Container>
      <ClientsList />
      <Link href={'/clients/newClient'} asChild>
        <TouchableOpacity>
          <AddIconFixed />
        </TouchableOpacity>
      </Link>
    </Container>
  );
}

