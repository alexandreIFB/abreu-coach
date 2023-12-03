import React from 'react';
import { Formik } from 'formik'; // Importe Formik
import { ViewPress } from '../../../../components/View';
import { ContainerForm } from './styles';
import ClientInfo from './ClientInfo';
import { Keyboard } from 'react-native';
import { Button } from 'react-native-ui-lib';
import axios from 'axios';
import { useRouter } from 'expo-router';


export default function NewClientForm() {
  const router = useRouter();

  const initialValues = {
    userId: '6564e42bf13bd18c3e357dd9',
    name: '',
    gender: 'Masculino',
    profileImage: '',
    phoneNumber: '',
    age: 0,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {

        try {
          await axios.post('https://coach-app-api.alexandreabreus.repl.co/client', values);
          router.back();

        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      }}
    >
      {(formik) => {
        const notHaveFieldEmpty = (!!formik.values.name &&
          !!formik.values.gender &&
          formik.values.age !== 0 &&
          !!formik.values.phoneNumber);

        function disabledHandle(): boolean { // Passe o objeto formik como argumento
          return !notHaveFieldEmpty;
        }
        return ( // Passe formik como argumento e renderize dentro desta função
          <ViewPress onPress={() => Keyboard.dismiss()}>
            <ContainerForm>
              {<ClientInfo />}
            </ContainerForm>
            <Button
              onPress={() => formik.handleSubmit()}
              label={'Salvar'}
              disabled={disabledHandle()}
            />
          </ViewPress>
        );
      }}

    </Formik>
  );
}
