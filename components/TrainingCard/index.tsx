import React from 'react';
import { Text } from 'react-native';
import { TrainingPlan } from '../../constants/training_mock';
import { Container } from './styles';

type TrainingCardProps = {
  trainingData: TrainingPlan
}

export function TrainingCard({ trainingData }: TrainingCardProps){


  return (
    <Container>
      <Text>Treino: {trainingData.name}</Text>
    </Container>
  );
}
