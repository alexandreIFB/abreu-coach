import { MaterialCommunityIcons } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native';
import { Container } from './styles';

export function AddIconFixed(){
  return (
    <Container>
      <TouchableOpacity
        style={{
          backgroundColor: '#edf4ff',
          width: 22,
          height: 22,
          borderRadius: 22,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          console.log('+ pressed')
        }
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
      </TouchableOpacity>
    </Container>
  );
}

