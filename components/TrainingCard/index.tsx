import React from 'react';
import { TrainingPlan } from '../../constants/training_mock';
import { Container, RowInfo } from './styles';
import { Text } from '../Text';
import { formatDate } from '../../app/helpers/formatDate';
import { FontAwesome } from '@expo/vector-icons';
import { extractIsExpired } from '../../app/helpers/extractIsExpired';

type TrainingCardProps = {
  trainingData: TrainingPlan
}

export function TrainingCard({ trainingData }: TrainingCardProps){
  const isExpired = extractIsExpired(trainingData.expirationDate);

  return (
    <Container isExpired={isExpired}>
      <Text weight='600'>{trainingData.name}</Text>
      <RowInfo>
        <Text weight='400'>{trainingData.description}</Text>
        <Text number>
          <FontAwesome name={isExpired ? 'calendar-times-o' : 'calendar-o'} size={16}/>
          {` ${formatDate(trainingData.startDate)} a ${formatDate(trainingData.expirationDate)}`}
        </Text>
      </RowInfo>
    </Container>
  );
}
