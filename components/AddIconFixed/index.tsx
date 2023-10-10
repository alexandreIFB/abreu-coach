import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container } from './styles';
import { View } from 'react-native';

export function AddIconFixed(){
  return (
    <Container>
      <View
        style={{
          backgroundColor: '#edf4ff',
          width: 22,
          height: 22,
          borderRadius: 22,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MaterialCommunityIcons
          style={{
            width: 50,
            height: 50,
          }}
          size={50}
          name="plus-circle"
          color='#5167f9'
        />
      </View>
    </Container>
  );
}

