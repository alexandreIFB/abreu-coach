import { Client,  groupClientsByInitial } from '../../constants/clients_mock';
import { Text } from '../Text';
import { ClientCard } from './ClientCard';
import { SectionList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useClient } from '../../contexts/ClientContext';
import { useLinkTo } from '@react-navigation/native';
import { useNavigation } from 'expo-router';

export function ClientsList() {
  const navigationx = useNavigation();
  const navigation = useLinkTo();
  const [isFocused, setIsFocused] = useState(false);
  const {setClientInfo} = useClient();
  const [clients, setClients] = useState<Client[]>([]);


  useEffect(() => {
    navigationx.addListener('focus', () => {
      setIsFocused(true);
    });
    navigationx.addListener('blur', () => {
      setIsFocused(false);
    });


  }, []);

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
  }, [isFocused]);

  const groupedClients = groupClientsByInitial(clients);

  const sections = Object.keys(groupedClients).map(initial => ({
    title: initial,
    data: groupedClients[initial],
  })).sort((a,b) => a.title.localeCompare(b.title));

  return(
    <SectionList
      sections={sections}
      keyExtractor={(client) => client._id}
      renderSectionHeader={({ section }) => (
        <Text weight='600'>{section.title}</Text>
      )}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => {
          setClientInfo(item);
          navigation(`/clients/${item._id}`);
        }}>
          <ClientCard client={item} />
        </TouchableOpacity>
      )}
      contentContainerStyle={{padding: 8, gap: 10}}
    />
  );
}
