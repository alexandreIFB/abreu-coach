import { useLocalSearchParams } from 'expo-router';
import { Text } from '../../../../components/Text';


export default function ClientProfile() {

  const { id } = useLocalSearchParams();

  return (<Text>Client = {id}</Text>);
}
