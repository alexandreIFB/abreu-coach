import { Button, TextField } from 'react-native-ui-lib';
import { CardContainer, InputsContainer } from './styles';
import { useFormikContext } from 'formik';
import { TrainingPlan } from '../../../../../constants/training_mock';
import { faker } from '@faker-js/faker';
import { FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';




export default function TrainingDivisionForm() {
  const formik = useFormikContext<TrainingPlan>();

  return (
    <InputsContainer>
      <FlatList
        data={formik.values.divisions}
        style={{ width: '100%' }}
        keyExtractor={item => item._id}
        renderItem={({ item, index }) => (
          <CardContainer
            key={item._id}
          >
            <TextField
              key={item._id}
              label='Nome'
              placeholder={'Nome da divisao de treino: ex Peito e Ombro'}
              value={formik.values.divisions[index].name}
              onChangeText={(text) => formik.setFieldValue(`divisions[${index}].name`, text)}
              containerStyle={{
                backgroundColor: 'none'
              }}
            />
            <FontAwesome name='trash' size={16} color='red' onPress={() => {
              const filteredDivisions = formik.values.divisions.filter((itemx) => itemx._id !== item._id);
              formik.setFieldValue('divisions', filteredDivisions);
            }} />
          </CardContainer>
        )}
        contentContainerStyle={{ padding: 10, gap: 12 }}
        showsVerticalScrollIndicator={false}
      />

      <Button
        label={'Nova divisao'}
        onPress={() => {
          formik.setFieldValue('divisions', [...formik.values.divisions, {
            name: '',
            exercises: [],
            _id: faker.string.uuid(),
          }]);
        }} />
    </InputsContainer>
  );
}
