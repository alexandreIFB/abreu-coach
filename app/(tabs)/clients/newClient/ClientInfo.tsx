import {  NumberInput, TextField, WheelPicker } from 'react-native-ui-lib';
import {  InputsContainer } from './styles';
import { useFormikContext } from 'formik';
import { Client } from '../../../../constants/clients_mock';




export default function ClientInfo() {
  const formik = useFormikContext<Client>();

  return (
    <InputsContainer>
      <TextField
        label='Nome'
        placeholder={'Nome do aluno'}
        value={formik.values.name}
        onChangeText={(text) => formik.setFieldValue('name', text)}
      />

      <WheelPicker
        items={[{label: 'Masculino', value: 'Masculino'}, {label: 'Feminino', value: 'Feminino'}]}
        initialValue={'Masculino'}
        onChange={(value) => formik.setFieldValue('gender', value)}

      />
      <TextField
        label='Celular'
        placeholder={'Numero do cliente'}
        value={formik.values.phoneNumber}
        onChangeText={(text) => formik.setFieldValue('phoneNumber', text)}
      />
      <NumberInput
        leadingText='Idade: '
        fractionDigits={0}
        initialNumber={0}
        onChangeNumber={(text) => formik.setFieldValue('age', text.userInput)}
      />
    </InputsContainer>
  );
}
