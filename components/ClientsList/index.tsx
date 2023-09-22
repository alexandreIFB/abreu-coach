import { clientList, groupClientsByInitial } from '../../constants/clients_mock';
import { Text } from '../Text';
import { ClientCard } from './ClientCard';
import { SectionList } from 'react-native';

export function ClientsList() {

  const groupedClients = groupClientsByInitial(clientList);

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
        <ClientCard client={item} />
      )}
      contentContainerStyle={{padding: 8, gap: 10}}
    />
  );
}
