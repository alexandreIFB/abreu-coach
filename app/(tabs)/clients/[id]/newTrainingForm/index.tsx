import React from 'react';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { Text } from '../../../../../components/Text';
import { ViewPress } from '../../../../../components/View';
import { PageControl, Button } from 'react-native-ui-lib';
import { useState } from 'react';
import { ContainerForm, ContainerStepper, NextStepper } from './styles';
import { faker } from '@faker-js/faker';
import BasicTraining from './BasicTraining';
import { Keyboard } from 'react-native';
import { Formik } from 'formik'; // Importe Formik
import { useClient } from '../../../../../contexts/ClientContext';
import TrainingDivisionForm from './TrainingDivision';

export default function NewTrainingForm() {
  const {client} = useClient();

  const { id } = useLocalSearchParams();

  const initialValues = {
    clientId: id as string,
    description: 't',
    divisions: [{
      name: '',
      exercises: [],
      id: faker.string.uuid(),
    }],
    expirationDate: '',
    name: 'y',
    startDate: '',
    id: faker.string.uuid()
  };

  const numOfPages = 5;
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
        console.log(values);
      }}
    >
      {(formik) => {
        const notHaveFieldEmpty = (!!formik.values.name &&
          !!formik.values.description &&
          !!formik.values.startDate &&
          !!formik.values.expirationDate);

        function disabledHandle(): boolean { // Passe o objeto formik como argumento
          return (
            currentPage === numOfPages - 1 ||
              (currentPage === 0 && !notHaveFieldEmpty)
          );
        }

        function nextPage() {
          if(currentPage === 1){
            const filteredDivisions = formik.values.divisions.filter((item) => item.name);
            formik.setFieldValue('divisions', filteredDivisions);
          }

          setCurrengPage((prev) => prev + 1);
        }
        return ( // Passe formik como argumento e renderize dentro desta função
          <ViewPress onPress={() => Keyboard.dismiss()}>
            <ContainerForm>
              {currentPage === 0 && <BasicTraining />}
              {currentPage === 1  && <TrainingDivisionForm />}
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
                  label={'Próximo'}
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
