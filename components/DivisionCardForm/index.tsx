import React, { useState } from 'react';
import {  TrainingPlan } from '../../constants/training_mock';
import { CardContainer, Container, ContainerHeader, RowExpand, Separator } from './styles';
import { Text } from '../Text';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { Button, TextField } from 'react-native-ui-lib';
import { useFormikContext } from 'formik';
import axios from 'axios';

type DivisionCardProps = {
  indexData: number
}

export function DivisionCardForm({ indexData }: DivisionCardProps){
  const formik = useFormikContext<TrainingPlan>();

  const [isExpanded, setIsExpanded] = useState(false);
  const [loadingDicas, setLoadingDicas] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container  onPress={toggleExpand}>
      <ContainerHeader>
        <Text weight='600'>{formik.values.divisions[indexData].name}</Text>
        <Text weight='400' size={14}>Exercícios: {formik.values.divisions[indexData].exercises.length}</Text>
      </ContainerHeader>
      {isExpanded && (
        <>

          <FlatList
            data={formik.values.divisions[indexData].exercises}
            keyExtractor={(exercise, index) => index.toString()}
            renderItem={({ index }) => (
              <CardContainer
              >
                <TextField
                  label='Nome'
                  placeholder={'Nome do exercicio ex: Supino'}
                  value={formik.values.divisions[indexData].exercises[index].name}
                  onChangeText={(text) => formik.setFieldValue(`divisions[${indexData}].exercises[${index}].name`, text)}
                />
                <TextField
                  label='Euipmento'
                  placeholder={'ex: Máquina de supino deitado'}
                  value={formik.values.divisions[indexData].exercises[index].equipment}
                  onChangeText={(text) => formik.setFieldValue(`divisions[${indexData}].exercises[${index}].equipment`, text)}
                />
                <TextField
                  label='Descricao'
                  placeholder={'Realizar 3 séries de 15 repetições ....'}
                  value={formik.values.divisions[indexData].exercises[index].description}
                  onChangeText={(text) => formik.setFieldValue(`divisions[${indexData}].exercises[${index}].description`, text)}
                />


                <TextField
                  label='Dicas'
                  placeholder={'Realizar 3 séries de 15 repetições ....'}
                  value={formik.values.divisions[indexData].exercises[index].notes}
                  editable={!!formik.values.divisions[indexData].exercises[index].notes}
                  textBreakStrategy='simple'
                  onChangeText={(text) => formik.setFieldValue(`divisions[${indexData}].exercises[${index}].notes`, text)}
                  multiline
                />
                <Button
                  label={'Gerar dicas'}
                  style={{
                    marginBottom: 12,
                  }}
                  size='xSmall'
                  disabled={!formik.values.divisions[indexData].exercises[index].name || !formik.values.divisions[indexData].exercises[index].description || !formik.values.divisions[indexData].exercises[index].equipment || loadingDicas || !!formik.values.divisions[indexData].exercises[index].notes}
                  onPress={async() => {
                    const name = formik.values.divisions[indexData].exercises[index].name;
                    const equipment = formik.values.divisions[indexData].exercises[index].equipment;
                    const description = formik.values.divisions[indexData].exercises[index].description;

                    const message = `Conforme o exercicio: ${name}, equipamento: ${equipment} e descricao: ${description}, gere uma dica para o aluno com no maximo 2 paragrafos, retorne apenas a dica.`;

                    setLoadingDicas(true);

                    try {
                      const response = await axios.post('https://coach-app-api.alexandreabreus.repl.co/chatgpt', {
                        message
                      });

                      formik.setFieldValue(`divisions[${indexData}].exercises[${index}].notes`, response.data);

                    } catch (error) {
                      console.error('Erro na requisição:', error);
                    }

                  }} />

                <FontAwesome name='trash' size={16} color='red' onPress={() => {
                  const filteredExercises = formik.values.divisions[indexData].exercises.filter((_, idx) => idx !== index);
                  formik.setFieldValue(`divisions[${indexData}].exercises`, filteredExercises);
                }} />
              </CardContainer>
            )}
            ItemSeparatorComponent={Separator}
            contentContainerStyle={{
              borderTopWidth: 1,
              borderColor: '#ccc',
              paddingHorizontal: 10,
              gap: 10
            }}
          />
          <Button
            label={'Novo exercicio'}
            style={{
              marginBottom: 12,
            }}
            onPress={() => {
              formik.setFieldValue(`divisions[${indexData}].exercises`, [...formik.values.divisions[indexData].exercises, {
                name: '',
                description: '',
                equipment: '',
                notes: '',
                demoImage: '',
              }]);
            }} />
        </>
      )}
      {/* {
        formik.errors && (
          <Button
            label={'Remover invalidos'}
            style={{
              marginBottom: 12,
            }}
            backgroundColor='red'
            onPress={() => {
              const validFilter = formik.values.divisions[indexData].exercises.filter((division) => (
                division.name && division.equipment && division.description && division.notes
              ));

              formik.setFieldValue(`divisions[${indexData}].exercises`, validFilter);
              formik.setErrors({});
            }} />
        )
      } */}
      <RowExpand>
        <MaterialIcons name={isExpanded ? 'expand-less' :  'expand-more'} size={32} color='#888'/>
      </RowExpand>
    </Container>
  );
}
