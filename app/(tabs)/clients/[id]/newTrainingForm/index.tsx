import React from 'react';
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { Text } from '../../../../../components/Text';
import { ViewPress } from '../../../../../components/View';
import { PageControl, Button } from 'react-native-ui-lib';
import { useState } from 'react';
import { ContainerForm, ContainerStepper, NextStepper } from './styles';
import { faker } from '@faker-js/faker';
import BasicTraining from './BasicTraining';
import { FlatList, Keyboard } from 'react-native';
import { Formik } from 'formik'; // Importe Formik
import { useClient } from '../../../../../contexts/ClientContext';
import TrainingDivisionForm from './TrainingDivision';
import { DivisionCardForm } from '../../../../../components/DivisionCardForm';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  divisions: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('O nome da divisão é obrigatório'),
      exercises: Yup.array().of(
        Yup.object().shape({
          name: Yup.string().required(),
          description: Yup.string().required(),
          equipment: Yup.string().required(),
          notes: Yup.string().required(),
        }
        )
      ),
    })
  ),
});

export default function NewTrainingForm() {
  const {client} = useClient();

  const { id } = useLocalSearchParams();

  const initialValues = {
    clientId: id as string,
    description: 't',
    divisions: [{
      name: '',
      exercises: [],
      _id: faker.string.uuid(),
    }],
    expirationDate: '',
    name: 'y',
    startDate: '',
    _id: faker.string.uuid()
  };

  const numOfPages = 3;
  const [currentPage, setCurrengPage] = useState(0);

  function prevPage() {
    setCurrengPage((prev) => prev - 1);
  }



  function onPagePress(index: number) {
    setCurrengPage(index);
  }




  const user = client;

  if (!user) {
    return <Redirect href="/clients" />;
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {


        const formated = values.divisions.map((division) => ({
          name: division.name,
          exercises: division.exercises,
        }));

        const formatedAll = {
          clientId: values.clientId,
          description: values.description,
          divisions: formated,
          expirationDate: values.expirationDate,
          startDate: values.startDate,
          name: values.name,
        };

        try {
          await axios.post('https://coach-app-api.alexandreabreus.repl.co/trainingplan', formatedAll);
          router.back();

        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      }}
      validationSchema={validationSchema}
    >
      {(formik) => {
        const notHaveFieldEmpty = (!!formik.values.name &&
          !!formik.values.description &&
          !!formik.values.startDate &&
          !!formik.values.expirationDate);

        function disabledHandle(): boolean { // Passe o objeto formik como argumento
          return (
            (currentPage === 0 && !notHaveFieldEmpty)
          );
        }

        function nextPage() {
          if(currentPage === 1){
            const filteredDivisions = formik.values.divisions.filter((item) => item.name);
            formik.setFieldValue('divisions', filteredDivisions);
          }

          if(currentPage === 2) {
            formik.handleSubmit();
          }
          if(currentPage !== 2) {
            setCurrengPage((prev) => prev + 1);
          }
        }
        return ( // Passe formik como argumento e renderize dentro desta função
          <ViewPress onPress={() => Keyboard.dismiss()}>
            <ContainerForm>
              {currentPage === 0 && <BasicTraining />}
              {currentPage === 1  && <TrainingDivisionForm />}
              {currentPage === 2  && <FlatList
                data={formik.values.divisions}
                style={{ width: '100%' }}
                keyExtractor={item => item._id}
                renderItem={({index}) => (
                  <DivisionCardForm indexData={index}/>
                )}
                contentContainerStyle={{padding: 10, gap: 12}}
                showsVerticalScrollIndicator={false}
              />}
            </ContainerForm>
            <ContainerStepper>
              <PageControl
                numOfPages={numOfPages}
                currentPage={currentPage}
                onPagePress={onPagePress}
                size={16}
                enlargeActive
                spacing={10}
              />
              <NextStepper>
                <Button label={'Anterior'} onPress={prevPage} disabled={currentPage === 0} />
                <Text>{currentPage + 1}</Text>
                <Button
                  label={ currentPage !== 2 ? 'Próximo' : 'Finalizar'}
                  onPress={nextPage}
                  disabled={disabledHandle()} // Passe formik como argumento
                />
              </NextStepper>
            </ContainerStepper>
          </ViewPress>
        );
      }}
    </Formik>
  );
}
