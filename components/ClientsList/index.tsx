import { Link} from 'expo-router';
import { Client,  groupClientsByInitial } from '../../constants/clients_mock';
import { Text } from '../Text';
import { ClientCard } from './ClientCard';
import { SectionList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function ClientsList() {
  const [clients, setClients] = useState<Client[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://coach-app-api.alexandreabreus.repl.co/client');
        setClients(response.data);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData();
  }, []);

  const groupedClients = groupClientsByInitial(clients);

  const sections = Object.keys(groupedClients).map(initial => ({
    title: initial,
    data: groupedClients[initial],
  })).sort((a,b) => a.title.localeCompare(b.title));

  return(
    <SectionList
      sections={sections}
      keyExtractor={(client) => client.id}
      renderSectionHeader={({ section }) => (
        <Text weight='600'>{section.title}</Text>
      )}
      renderItem={({ item }) => (
        <Link href={`/clients/${item.id}`} asChild>
          <TouchableOpacity>
            <ClientCard client={item} />
          </TouchableOpacity>
        </Link>
      )}
      contentContainerStyle={{padding: 8, gap: 10}}
    />
  );
}
