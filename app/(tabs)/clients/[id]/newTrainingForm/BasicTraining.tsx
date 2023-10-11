import { DateTimePicker, TextField } from 'react-native-ui-lib';
import {  InputsContainer } from './styles';
import { useFormikContext } from 'formik';
import { TrainingPlan } from '../../../../../constants/training_mock';




export default function BasicTraining() {
  const formik = useFormikContext<TrainingPlan>();

  return (
    <InputsContainer>
      <TextField
        label='Nome'
        placeholder={'Nome do treino'}
        value={formik.values.name}
        onChangeText={(text) => formik.setFieldValue('name', text)}
      />
      <TextField
        label='Descrição'
        placeholder={'Descrição do treino.'}
        value={formik.values.description}
        onChangeText={(text) => formik.setFieldValue('description', text)}
      />
      <DateTimePicker
        label='Data de Inicio'
        placeholder={'DD/MM/YYYY'}
        mode={'date'}
        value={formik.values.startDate ? new Date(formik.values.startDate) : undefined}
        onChange={(e) => {
          formik.setFieldValue('startDate', e.toISOString());
        }}
      />
      <DateTimePicker
        label='Data de Fim'
        placeholder={'DD/MM/YYYY'}
        mode={'date'}
        editable={!!formik.values.startDate}
        minimumDate={ formik.values.startDate ? new Date(formik.values.startDate) : new Date()}
        value={formik.values.expirationDate ? new Date(formik.values.expirationDate) : undefined}
        onChange={(e) => {
          formik.setFieldValue('expirationDate', e.toISOString());
        }}
      />
    </InputsContainer>
  );
}
