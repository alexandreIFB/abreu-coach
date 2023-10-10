import { Redirect, useLocalSearchParams } from 'expo-router';
import { Text } from '../../../../components/Text';
import { View } from '../../../../components/View';
import { clientList } from '../../../../constants/clients_mock';



export default function NewTrainingForm() {

  const { id } = useLocalSearchParams();

  const user = clientList.find((client) => client.id === id);

  if(!user){
    return <Redirect href="/clients" />;
  }

  return (
    <View>
      <Text>Form ...</Text>
    </View>
  );
}
