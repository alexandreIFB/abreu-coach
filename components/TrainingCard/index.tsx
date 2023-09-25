import React from 'react';
import { TrainingPlan } from '../../constants/training_mock';
import { Container, RowInfo } from './styles';
import { Text } from '../Text';

type TrainingCardProps = {
  trainingData: TrainingPlan
}

export function TrainingCard({ trainingData }: TrainingCardProps){
  function extractIsExpired(expirationDate: string) {
    const expiration = new Date(expirationDate);
    const currentDate = new Date();
    return expiration <= currentDate;
  }

  const isExpired = extractIsExpired(trainingData.expirationDate);

  return (
    <Container isExpired={isExpired}>
      <Text weight='600'>{trainingData.name}</Text>
      <RowInfo>
        <Text weight='400'>{trainingData.description}</Text>
        <Text>{`${trainingData.startDate} a ${trainingData.expirationDate}`}</Text>
      </RowInfo>
    </Container>
  );
}
